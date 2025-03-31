import Image from "next/image";
import { Button } from "@/components/ui/button";

function AboutSection() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

          <div>
            <div className="flex items-center mb-4">
              <div className="h-0.5 w-8 bg-blue-500 ml-2"></div>
              <span className="text-blue-500 font-medium text-sm">من نحن</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-[#001233] mb-6 leading-tight">
              مرحباً بكم في عيادة العلاج الطبيعي والعلاج اليدوي
            </h2>

            <p className="text-gray-700 mb-6">
              العلاج الطبيعي يُعرف بشكل أكثر شيوعاً كعلاج طبي يساعد المريض في
              إعادة التأهيل من مختلف أنواع الأمراض والإعاقات.
            </p>

            <p className="text-gray-600 mb-8">
              أخصائيو العلاج الطبيعي لديهم فهم أفضل لكيفية عمل الجسم. يساعد
              أخصائي العلاج الطبيعي المريض على التعافي من الألم، الإصابة، الشلل،
              إصابات الأربطة، والمشاكل العصبية. يمكن لأخصائيي العلاج الطبيعي
              علاج كل من الآلام المزمنة والمشاكل الحادة من خلال علاج المرضى.
              أخصائيونا مؤهلون تأهيلاً عالياً. نحن نركز على الحفاظ على الصحة
              للأشخاص من جميع الأعمار، ومساعدة المرضى على التعامل مع حالتهم.
            </p>

            <Button className="bg-red-600 hover:bg-red-600/90 text-white rounded-full px-8 py-3">
              عرض الخدمات
            </Button>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative h-[800px] w-full">
              <Image
                src="/images/2.jpg"
                alt="علاج طبيعي"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-lg"
              />
              {/* Decorative element */}
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-[#a8dadc] -z-10 rounded-bl-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;