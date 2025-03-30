import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "كايروكايند - عيادة العلاج اليدوي",
  description: "عيادة متخصصة في العلاج اليدوي والرعاية الصحية",
}

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={`${inter.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}