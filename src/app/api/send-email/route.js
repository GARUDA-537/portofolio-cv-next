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

    // Konfigurasi SMTP untuk Gmail
    // PENTING: Gunakan App Password, bukan password akun biasa
    // Petunjuk: https://support.google.com/accounts/answer/185833
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER || 'your-email@gmail.com',
        pass: process.env.GMAIL_PASSWORD || 'your-app-password',
      },
    });

    // Verifikasi koneksi
    try {
      await transporter.verify();
    } catch (error) {
      console.error('SMTP Verification failed:', error);
      return Response.json(
        { 
          message: 'Konfigurasi email belum diatur. Hubungi admin untuk konfigurasi.',
          details: process.env.NODE_ENV === 'development' ? error.message : undefined
        },
        { status: 500 }
      );
    }

    // Email ke penerima (portfolio owner)
    const mailOptions = {
      from: `"${name}" <${process.env.GMAIL_USER}>`,
      to: to,
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
      replyTo: email,
    };

    // Kirim email
    await transporter.sendMail(mailOptions);

    // Email notifikasi ke pengirim (optional)
    const confirmationEmail = {
      from: process.env.GMAIL_USER,
      to: email,
      subject: `✅ Pesan Anda Telah Diterima - Portofolio Moch. Farel`,
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
            © 2024 Moch. Farel Islami Akbar | Portofolio Website
          </p>
        </div>
      `,
    };

    try {
      await transporter.sendMail(confirmationEmail);
    } catch (error) {
      console.error('Confirmation email failed (non-critical):', error);
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
    console.error('Send email error:', error);
    return Response.json(
      { 
        message: 'Gagal mengirim pesan. Silakan coba lagi.',
        error: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: 500 }
    );
  }
}
