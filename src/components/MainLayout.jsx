import {
  BookImg,
  BusinessmanWoman,
  DartLogo,
  Deal,
  FigmaLogo,
  FlutterLogo,
  HeroAvatar1,
  HeroAvatar2,
  HeroAvatar3,
  HTMLLogo,
  PeopleWorkingOut,
  PythonLogo,
  YoungBusinessman,
} from "../assets";

export default function Hero() {
  return (
    <section className="container relative overflow-hidden bg-white">
      <img src={HTMLLogo} alt="HTML5" className="absolute top-10 right-1/2" />
      <img
        src={FigmaLogo}
        alt="FIGMA"
        className="absolute top-10 left-[15px]"
      />
      <img
        src={FlutterLogo}
        alt="Flutter"
        className="absolute top-[25%] right-10 w-16 h-16 md:w-20 md:h-20"
      />
      <img
        src={PythonLogo}
        alt="Python"
        className="absolute left-[15%] top-[25%] w-16 h-16 md:w-20 md:h-20"
      />
      <img
        src={DartLogo}
        alt="dart"
        className="absolute right-1/4 w-16 h-16 top-[21%] md:w-20 md:h-20"
      />

      <div className="pt-[169px]">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-primary max-w-4xl mx-auto leading-[48px]">
            Ваша работа мечты уже ждет вас, начните сегодня!
          </h1>

          <div className="mt-12 flex flex-col items-center justify-center">
            <div className="flex items-center gap-3">
              {/* Avatar group */}
              <div className="flex -space-x-2 overflow-hidden">
                <img
                  key={index}
                  className="inline-block h-12 w-12 rounded-full"
                  src={HeroAvatar1}
                  alt="HeroAvatar1"
                />
                <img
                  key={index}
                  className="inline-block h-12 w-12 rounded-full"
                  src={HeroAvatar2}
                  alt="HeroAvatar2"
                />
                <img
                  key={index}
                  className="inline-block h-12 w-12 rounded-full"
                  src={HeroAvatar3}
                  alt="HeroAvatar3"
                />
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-btnClr ring-2 ring-white text-sm font-medium text-white">
                  +120
                </span>
              </div>

              <p className="text-lg text-primary max-w-[408px] text-start">
                человек уже стали участниками групп <br /> по своим направлениям
              </p>
            </div>

            <button className="mt-8 px-8 py-3 bg-btnClr text-white rounded-lg text-lg font-medium hover:bg-primary transition-colors">
              Оставить заявку
            </button>
          </div>
        </div>
      </div>
      <div className="mt-[200px] pb-32">
        <div className="info__section flex items-center justify-between">
          <div className="max-w-xl">
            <h3 className="text-primary text-4xl font-bold leading-[54px]">
              Сайт рыбатекст поможет дизайнеру, верстальщику
            </h3>
            <p className="pt-9 text-secondary leading-[30px]">
              Siz IT o'quv kursini tugatdingiz yoki Internet tarmog'i orqali
              mustaqil o'rgandingiz, ammo ishga joylashishda qiyinchiliklarga
              uchrayapsizmi? Biz sizga yordam beramiz. Ushbu loyiha qobiliyatli
              yoshlarni topib, yetuk kadrlar bo'lib yetishishiga yordam berish
              uchun tashkil qilindi.{" "}
            </p>
          </div>
          <div className="main__info relative">
            <img className="mt-20 ml-[-69px]" src={YoungBusinessman} alt="" />
            <img className="absolute right-2 top-28" src={BookImg} alt="" />
            <img
              className="absolute bottom-[-20px] right-10"
              src={PeopleWorkingOut}
              alt=""
            />
          </div>
        </div>
        <div className="info__section flex items-center gap-24">
          <div className="max-w-[500px]">
            <h3 className="text-primary text-4xl font-bold leading-[54px]">
              Aksariyat kompaniyalar ishga joylashishda sizdan ish staji va
              portfolio so'raydi
            </h3>
            <p className="pt-9 text-secondary leading-[30px]">
              Tabiyki endigini bu sohaga kirib kelayotgan internlarda bular
              mavjud emas. Ma'lum bir ish stajiga ega bo'lish va turli xil
              qiziqarli lohiyalardan iborat portfolioni hosil qilish uchun ushbu
              loyihada amaliyot o'tashni taklif qilamiz.
              <br /> <br />
              Amaliyotchilar soni chegaralangan va konkurs asosida saralab
              olinadi. Eng yuqori ball to'plagan 10 kishi bepul amaliyot o'tash
              imkoniyatiga ega bo'ladi.
            </p>
          </div>
          <div className="main__info relative">
            <img className="mt-20 ml-[-62px]" src={BusinessmanWoman} alt="" />

            <img
              className="absolute bottom-[-20px] right-4"
              src={Deal}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}
