import { Phone } from "lucide-react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import Link from "next/link";

function TopBar() {
  return (
    <div className="bg-blue-950 text-white py-3 px-4 md:px-8">
      <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm mb-2 md:mb-0">
          مرحباً بكم في عيادة كايروكايند للعلاج اليدوي!
        </p>

        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="flex items-center gap-2">
            <Phone size={16} className="text-blue-400" />
            <span className="text-sm">اتصل للمساعدة: ٧٨٩٠-٤٥٦ (٨٠٠+)</span>
          </div>

          <Link
            href="#contact"
            size="sm"
            className="text-white hover:text-blue-400"
          >
            احجز موعداً
          </Link>

          <div className="flex items-center gap-3">
            <Link href="#" className="text-white hover:text-blue-400">
              <FaFacebook size={16} />
            </Link>
            <Link href="#" className="text-white hover:text-blue-400">
              <FaTwitter size={16} />
            </Link>
            <Link href="#" className="text-white hover:text-blue-400">
              <FaLinkedin size={16} />
            </Link>
            <Link href="#" className="text-white hover:text-blue-400">
              <FaInstagram size={16} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
