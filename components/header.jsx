import Image from "next/image";

function Header() {
  return (
    <div className="relative w-full h-[825px] overflow-hidden">

      <div className="w-full h-full">
        <Image
          src="/images/header/1.jpg"
          alt="Chiropractor performing treatment"
          width={1920}
          height={825}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center text-center">
        <div className="text-white px-6">
          <h1 className="text-4xl md:text-8xl font-bold mb-4 leading-tight">
            مرحبًا بكم في أفضل
            <br />
            عيادات العلاج الطبيعي
          </h1>
          <p className="text-lg md:text-xl mb-6">
            نحن هنا لمساعدتك على التعافي واستعادة صحتك بأفضل الطرق.
          </p>
          <button className="bg-red-800 hover:bg-red-600 duration-300 cursor-pointer text-white py-3 px-6 rounded-lg text-lg">
            احجز موعدًا الآن
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;