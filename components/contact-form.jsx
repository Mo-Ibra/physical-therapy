"use client";

import { useState } from "react";
import { Loader2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import Link from "next/link";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    date: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear error when user types
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { name: "", email: "", message: "" };

    if (formData.name.length < 2) {
      newErrors.name = "الاسم يجب أن يكون على الأقل حرفين.";
      valid = false;
    }

    if (formData.phone.length < 10) {
      newErrors.phone = "يجب عليك ادخال رقم هاتف صحيح.";
      valid = false;
    }

    if (!formData.date) {
      newErrors.date = "الرجاء اختيار موعد.";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // const response = await fetch("/api/sendEmail", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(formData),
      // });

      // if (response.ok) {
      //   toast("Message sent successfully!");
      //   setFormData({ name: "", phone: "", date: "", email: "", message: "" });
      // } else {
      //   toast("Error");
      // }
      console.log("Done");
    } catch (error) {
      toast({
        title: "Error",
        description: "An unexpected error occurred.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center mb-4">
            <div className="h-0.5 w-8 bg-blue-500 ml-2"></div>
            <span className="text-blue-500 font-medium text-sm">
              احجز موعد الان
            </span>
            <div className="h-0.5 w-8 bg-blue-500 mr-2"></div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-[#001233] mb-6">
            احجز موعدك مع أخصائي العلاج الطبيعي
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto">
            نحن نقدم مجموعة متنوعة من خدمات العلاج الطبيعي المصممة خصيصًا لتلبية
            احتياجاتك الفردية. يعمل فريقنا من المعالجين المؤهلين على مساعدتك في
            استعادة الحركة والتخفيف من الألم وتحسين نوعية حياتك.
          </p>
        </div>

        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6 dark:bg-slate-900">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">
                الاسم
              </label>
              <Input
                id="name"
                type="text"
                name="name"
                placeholder="اسمك"
                value={formData.name}
                onChange={handleChange}
                required
                className={errors.name ? "border-red-500" : ""}
              />
              {errors.name && (
                <p className="text-sm text-red-500">{errors.name}</p>
              )}
            </div>

            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm font-medium">
                رقم الهاتف الخاص بك
              </label>
              <Input
                id="phone"
                type="text"
                name="phone"
                placeholder="رقم الهاتف"
                value={formData.phone}
                onChange={handleChange}
                required
                className={errors.name ? "border-red-500" : ""}
              />
              {errors.name && (
                <p className="text-sm text-red-500">{errors.name}</p>
              )}
            </div>

            <div className="space-y-2">
              <label htmlFor="date" className="text-sm font-medium">
                اختر موعدك
              </label>
              <Input
                id="date"
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                الايميل الخاص بك (اختياري)
              </label>
              <Input
                id="email"
                type="email"
                name="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? "border-red-500" : ""}
              />
              {errors.email && (
                <p className="text-sm text-red-500">{errors.email}</p>
              )}
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                ملحوظه تريد ان تضيفها (اختياري)
              </label>
              <Textarea
                id="message"
                name="message"
                placeholder="اخبرنا عن مشكلتك"
                value={formData.message}
                onChange={handleChange}
                required
                className={`min-h-[120px] resize-none ${
                  errors.message ? "border-red-500" : ""
                }`}
              />
              {errors.message && (
                <p className="text-sm text-red-500">{errors.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Button
                type="submit"
                className="w-full cursor-pointer bg-red-600 hover:bg-red-600/90 text-white"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    إرسال
                  </>
                ) : (
                  "حجز الموعد"
                )}
              </Button>

              <Link
                className="w-full cursor-pointer text-center text-sm flex items-center justify-center bg-green-950 hover:bg-green-950/90 py-2 rounded-md text-white"
                href="https://wa.me/1234567890"
                target="_blank"
              >
                تحدث معنا على الواتس اب
                <Send className="mr-2 h-4 w-4" />
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
