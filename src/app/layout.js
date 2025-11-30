import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata = {
  title: "Portofolio CV - Moch. Farel Islami Akbar",
  description: "Portofolio CV Moch. Farel Islami Akbar - Teknisi Komputer dan Jaringan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
