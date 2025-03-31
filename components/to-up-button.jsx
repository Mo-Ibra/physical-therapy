"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-6 right-6">
      {isVisible && (
        <Button
          onClick={scrollToTop}
          className="p-4 bg-blue-600 hover:bg-blue-700 cursor-pointer text-white shadow-lg transition-all"
        >
          <ArrowUp size={40} strokeWidth={2.5} />
        </Button>
      )}
    </div>
  );
}

export default ScrollToTop;