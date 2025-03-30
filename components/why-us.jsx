import Image from "next/image";

function WhyChooseUsSection() {
  return (
    <div className="py-16">

      <div className="grid grid-cols-1 lg:grid-cols-2">

        {/* Image - Left Side */}
        <div className="relative h-[400px] md:h-[500px] lg:h-auto">
          <Image
            src="/images/3.jpg"
            alt="علاج الركبة"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>

        {/* Content - Right Side */}
        <div className="bg-blue-950 text-white p-8 md:p-12 lg:p-16 flex flex-col justify-center">

          <h2 className="text-3xl md:text-4xl font-bold mb-6">لماذا تختارنا</h2>

          <p className="text-lg mb-6">
            نحن نفتخر بتقديم علاج يدوي عالي الجودة وشامل للمجموعة والمناطق
            المحيطة.
          </p>

          <p className="text-base mb-12">
            العلاج اليدوي هو فن استخدام تعديل العمود الفقري لتخفيف مجموعة واسعة
            من المشاكل الجسدية، بما في ذلك إجهاد العضلات، آلام الرقبة، آلام
            الظهر المستمرة، وغيرها.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">250</div>
              <div className="text-sm">عميل سعيد</div>
            </div>

            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">+5</div>
              <div className="text-sm">سنوات من الخبرة</div>
            </div>

            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">100%</div>
              <div className="text-sm">نسبة الرضا</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default WhyChooseUsSection;