import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-white py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Logo and Tagline */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="relative h-12 w-12">
                <Image
                  src="/images/logo/1.png"
                  alt="كايروكايند"
                  width={48}
                  height={48}
                />
              </div>
              <div>
                <h3 className="text-xl font-bold">كايروكايند</h3>
                <p className="text-xs text-gray-400">عيادة العلاج اليدوي</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              نحن نعالج سبب الألم لديك، وليس فقط الأعراض.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 border-b border-gray-700 pb-2">
              روابط سريعة
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  من نحن
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  المدونة
                </Link>
              </li>
              <li>
                <Link
                  href="/appointment"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  المواعيد
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  اتصل بنا
                </Link>
              </li>
            </ul>
          </div>

          {/* Symptoms */}
          <div>
            <h3 className="text-lg font-semibold mb-6 border-b border-gray-700 pb-2">
              العلاجات
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/services/laser"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  العلاج بالليزر
                </Link>
              </li>
              <li>
                <Link
                  href="/services/massage"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  العلاج بالتدليك
                </Link>
              </li>
              <li>
                <Link
                  href="/services/physio"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  العلاج الطبيعي
                </Link>
              </li>
              <li>
                <Link
                  href="/services/physiotherapy"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  العلاج الفيزيائي
                </Link>
              </li>
              <li>
                <Link
                  href="/services/sport"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  إصابات رياضية
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 border-b border-gray-700 pb-2">
              تواصل معنا
            </h3>
            <div className="space-y-4">
              <p className="text-gray-300">(123)-456-74700</p>
              <p className="text-gray-300">info@example.com</p>
              <p className="text-gray-300">
                ١٢١ شارع لاتو، ملبورن، الرمز البريدي ٣٠٠٠
              </p>

              {/* Social Media */}
              <div className="flex space-x-4 space-x-reverse mt-6">
                <Link
                  href="#"
                  className="h-10 w-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-white/10 transition-colors"
                >
                  <FaFacebook size={18} />
                </Link>
                <Link
                  href="#"
                  className="h-10 w-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-white/10 transition-colors"
                >
                  <FaTwitter size={18} />
                </Link>
                <Link
                  href="#"
                  className="h-10 w-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-white/10 transition-colors"
                >
                  <FaLinkedin size={18} />
                </Link>
                <Link
                  href="#"
                  className="h-10 w-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-white/10 transition-colors"
                >
                  <FaInstagram size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>حقوق النشر © عيادة اسم العيادة للعلاج 2025. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
}