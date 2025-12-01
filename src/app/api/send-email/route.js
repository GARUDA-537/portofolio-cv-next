import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { name, email, subject, message, to } = await request.json();

    // Validasi input
    if (!name || !email || !subject || !message) {
      return Response.json(
        { message: 'Semua field harus diisi' },
        { status: 400 }
      );
    }

    // Cek Environment Variables
    if (!process.env.GMAIL_USER || !process.env.GMAIL_PASSWORD) {
      console.error('❌ Missing Environment Variables: GMAIL_USER or GMAIL_PASSWORD');
      return Response.json(
        {
          message: 'Konfigurasi server email belum lengkap.',
          details: 'Environment variables GMAIL_USER atau GMAIL_PASSWORD tidak ditemukan.'
        },
        { status: 500 }
      );
    }

    // Konfigurasi SMTP untuk Gmail
    // Menggunakan port 465 (SSL) yang lebih stabil di Vercel daripada port 587
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASSWORD,
      },
    });

    // Verifikasi koneksi
    try {
      await transporter.verify();
      console.log('✅ SMTP Connection Verified');
    } catch (error) {
      console.error('❌ SMTP Verification failed:', error);
      return Response.json(
        {
          message: 'Gagal terhubung ke server email.',
          details: error.message
        },
        { status: 500 }
      );
    }

    const recipientEmail = to || process.env.GMAIL_USER;

    // Email ke penerima (portfolio owner)
    const mailOptions = {
      from: `"${name}" <${process.env.GMAIL_USER}>`,
      to: recipientEmail,
      replyTo: email,
      subject: `[Portofolio] ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #f5f5f5; border-radius: 10px;">
          <h2 style="color: #667eea; border-bottom: 2px solid #667eea; padding-bottom: 10px;">
            📨 Pesan dari Portofolio Website
          </h2>
          
          <div style="background: white; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <p><strong>📝 Nama:</strong> ${name}</p>
            <p><strong>✉️ Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>📌 Subjek:</strong> ${subject}</p>
            
            <hr style="border: none; border-top: 2px solid #eee; margin: 20px 0;">
            
            <h3 style="color: #2c3e50;">Pesan:</h3>
            <p style="white-space: pre-wrap; line-height: 1.6; color: #333;">
              ${message}
            </p>
          </div>
          
          <p style="color: #666; font-size: 0.9rem; text-align: center; margin-top: 20px;">
            Balas langsung ke: <a href="mailto:${email}">${email}</a>
          </p>
        </div>
      `,
    };

    // Kirim email utama
    await transporter.sendMail(mailOptions);
    console.log('✅ Main email sent to:', recipientEmail);

    // Email notifikasi ke pengirim (optional)
    const confirmationEmail = {
      from: `"${process.env.GMAIL_USER}" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: `✅ Pesan Anda Telah Diterima - Portofolio`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #f5f5f5; border-radius: 10px;">
          <h2 style="color: #667eea;">Terima Kasih! ✨</h2>
          
          <div style="background: white; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <p>Halo ${name},</p>
            
            <p>Pesan Anda telah berhasil diterima! Saya akan membacanya dan merespons dalam waktu secepatnya.</p>
            
            <div style="background: #f0f0f0; padding: 15px; border-left: 4px solid #667eea; margin: 20px 0; border-radius: 3px;">
              <p><strong>Subjek:</strong> ${subject}</p>
              <p style="color: #666; font-size: 0.9rem;">Waktu: ${new Date().toLocaleString('id-ID')}</p>
            </div>
            
            <p>Terima kasih telah menghubungi saya. Saya menghargai minat Anda!</p>
          </div>
          
          <p style="color: #999; font-size: 0.85rem; text-align: center; margin-top: 20px; border-top: 1px solid #ddd; padding-top: 15px;">
            © ${new Date().getFullYear()} Portofolio Website
          </p>
        </div>
      `,
    };

    try {
      await transporter.sendMail(confirmationEmail);
      console.log('✅ Confirmation email sent to:', email);
    } catch (error) {
      console.error('⚠️ Confirmation email failed (non-critical):', error);
      // Lanjutkan meski confirmation email gagal
    }

    return Response.json(
      {
        message: '✅ Pesan berhasil dikirim!',
        success: true
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('❌ Send email error:', error);
    return Response.json(
      {
        message: 'Gagal mengirim pesan. Silakan coba lagi.',
        error: error.message // Return error message for debugging
      },
      { status: 500 }
    );
  }
}

