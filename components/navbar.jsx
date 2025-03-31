"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting);
        if (visibleSection) {
          setActiveSection(visibleSection.target.id);
        }
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <>
      <nav
        className={`${
          isScrolled
            ? "bg-white shadow-md fixed top-0 left-0 w-full z-50 transition-all duration-300"
            : "bg-transparent"
        }`}
      >
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
                  <h1 className="text-xl font-bold text-[#001233]">كايروكايند</h1>
                  <p className="text-xs text-gray-600">عيادة العلاج اليدوي</p>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              {[
                { id: "header", label: "الرئيسية" },
                { id: "about", label: "من نحن" },
                { id: "services", label: "الخدمات" },
                { id: "blog", label: "المدونة" },
                { id: "contact", label: "احجز موعد" },
              ].map((item) => (
                <Link
                  key={item.id}
                  href={`#${item.id}`}
                  className={`font-medium transition-all ${
                    activeSection === item.id ? "text-red-500" : "text-gray-700 hover:text-red-500"
                  }`}
                >
                  {item.label}
                </Link>
              ))}

              <Button size="icon" className="rounded-full bg-red-500 hover:bg-red-500/90">
                <Menu size={20} />
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center gap-4">
              <button className="text-gray-700" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b mt-4">
            <div className="container mx-auto px-4 md:px-8">
              <div className="py-4 flex flex-col gap-4">
                {[
                  { id: "header", label: "الرئيسية" },
                  { id: "about", label: "من نحن" },
                  { id: "services", label: "الخدمات" },
                  { id: "blog", label: "المدونة" },
                  { id: "contact", label: "احجز موعد" },
                ].map((item) => (
                  <Link
                    key={item.id}
                    href={`#${item.id}`}
                    className={`py-2 border-b font-medium transition-all ${
                      activeSection === item.id ? "text-red-500" : "text-gray-700 hover:text-red-500"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;