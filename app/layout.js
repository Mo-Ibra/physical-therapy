import { Cairo } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const cairo = Cairo({ subsets: ["latin"] });

export const metadata = {
  title: "كايروكايند - عيادة العلاج اليدوي",
  description: "عيادة متخصصة في العلاج اليدوي والرعاية الصحية",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${cairo.className} antialiased`}>
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
