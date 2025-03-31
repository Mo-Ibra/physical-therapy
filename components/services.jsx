"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

// Sample service data
const services = [
  {
    id: 1,
    title: "إصابات رياضية",
    image: "/images/services/2.jpg",
  },
  {
    id: 2,
    title: "تحريك المفاصل",
    image: "/images/services/3.jpg",
  },
  {
    id: 3,
    title: "تقويم العظام",
    image: "/images/services/4.jpg",
  },
  {
    id: 4,
    title: "علاج العمود الفقري",
    image: "/images/services/5.jpg",
  },
  {
    id: 5,
    title: "العلاج المهني",
    image: "/images/services/1.jpg",
  },
  {
    id: 6,
    title: "العلاج بالليزر",
    image: "/images/services/6.jpg",
  },
]

export default function ServicesSection() {
  const [startIndex, setStartIndex] = useState(0)
  const itemsToShow = 4

  const nextSlide = () => {
    if (startIndex + itemsToShow < services.length) {
      setStartIndex(startIndex + 1)
    } else {
      setStartIndex(0) // Loop back to start
    }
  }

  const prevSlide = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1)
    } else {
      setStartIndex(services.length - itemsToShow) // Loop to end
    }
  }

  const visibleServices = services.slice(startIndex, startIndex + itemsToShow);

  return (
    <section className="py-16" id="services">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center mb-4">
            <div className="h-0.5 w-8 bg-blue-500 ml-2"></div>
            <span className="text-blue-500 font-medium text-sm">ما نقدمه</span>
            <div className="h-0.5 w-8 bg-blue-500 mr-2"></div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-[#001233] mb-6">تقديم خدمات العلاج الطبيعي</h2>

          <p className="text-gray-600 max-w-3xl mx-auto">
            نحن نقدم مجموعة متنوعة من خدمات العلاج الطبيعي المصممة خصيصًا لتلبية احتياجاتك الفردية. يعمل فريقنا من
            المعالجين المؤهلين على مساعدتك في استعادة الحركة والتخفيف من الألم وتحسين نوعية حياتك.
          </p>
        </div>

        {/* Services Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {visibleServices.map((service) => (
            <div
              key={service.id}
              className="group relative overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-lg"
            >
              <div className="relative h-96 w-full">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  style={{ objectFit: "cover" }}
                  className="transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute bottom-0 w-full bg-white bg-opacity-90 p-4 text-center">
                <h3 className="text-lg font-semibold text-[#001233]">{service.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-center mt-10 gap-4">
          <button
            onClick={prevSlide}
            className="h-12 w-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
            aria-label="السابق"
          >
            <ChevronRight className="h-5 w-5 text-gray-600" />
          </button>
          <button
            onClick={nextSlide}
            className="h-12 w-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
            aria-label="التالي"
          >
            <ChevronLeft className="h-5 w-5 text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  )
}