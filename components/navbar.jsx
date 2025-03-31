"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="border-b">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center gap-2">
                <div className="relative h-12 w-12">
                  <Image
                    src="/images/logo/1.png"
                    alt="كايروكايند"
                    width={48}
                    height={48}
                  />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-[#001233]">
                    كايروكايند
                  </h1>
                  <p className="text-xs text-gray-600">عيادة العلاج اليدوي</p>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              <Link
                href="/"
                className="text-red-500 font-medium hover:text-red-500/80"
              >
                الرئيسية
              </Link>
              <Link
                href="#about"
                className="text-gray-700 font-medium hover:text-red-500"
              >
                من نحن
              </Link>
              <Link
                href="#services"
                className="text-gray-700 font-medium hover:text-red-500"
              >
                الخدمات
              </Link>
              <Link
                href="#blog"
                className="text-gray-700 font-medium hover:text-red-500"
              >
                المدونة
              </Link>
              <Link
                href="#contact"
                className="text-gray-700 font-medium hover:text-red-500"
              >
                احجز موعد 
              </Link>
              <Button
                size="icon"
                className="rounded-full bg-red-500 hover:bg-red-500/90"
              >
                <Menu size={20} />
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center gap-4">
              <button
                className="text-gray-700"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-b">
          <div className="container mx-auto px-4 md:px-8">
            <div className="py-4 flex flex-col gap-4">
              <Link
                href="/"
                className="text-red-500 font-medium hover:text-red-500/80 py-2 border-b"
              >
                الرئيسية
              </Link>
              <Link
                href="/about"
                className="text-gray-700 font-medium hover:text-red-500 py-2 border-b"
              >
                من نحن
              </Link>
              <Link
                href="/services"
                className="text-gray-700 font-medium hover:text-red-500 py-2 border-b"
              >
                الخدمات
              </Link>
              <Link
                href="/patients"
                className="text-gray-700 font-medium hover:text-red-500 py-2 border-b"
              >
                المرضى
              </Link>
              <Link
                href="/blog"
                className="text-gray-700 font-medium hover:text-red-500 py-2 border-b"
              >
                المدونة
              </Link>
              <Link
                href="/pages"
                className="text-gray-700 font-medium hover:text-red-500 py-2 border-b"
              >
                الصفحات
              </Link>
              <Link
                href="/shop"
                className="text-gray-700 font-medium hover:text-red-500 py-2 border-b"
              >
                المتجر
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 font-medium hover:text-red-500 py-2"
              >
                اتصل بنا
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
