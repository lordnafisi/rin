const i18n = {
  ar: {
    dir: "rtl",
    about:
      "أنا مهندس عكسي لتطبيقات الهاتف المحمول، أعمل في هندسة الأنظمة، التشفير، وبناء حلول آمنة.",
    workTitle: "أعمال احترافية",
    workText:
      "تنفيذ تشفير مخصص، أنظمة آمنة، سكربتات خاصة، وحلول أمنية متقدمة عند الطلب."
  },

  bn: {
    dir: "ltr",
    about:
      "আমি মোবাইল অ্যাপ রিভার্স ইঞ্জিনিয়ার। সিকিউর সিস্টেম, এনক্রিপশন এবং কাস্টম সমাধান নিয়ে কাজ করি।",
    workTitle: "প্রফেশনাল কাজ",
    workText:
      "কাস্টম এনক্রিপশন, সিকিউর অ্যাপ ইমপ্লিমেন্টেশন, প্রাইভেট স্ক্রিপ্ট এবং বিশেষ সিকিউরিটি সিস্টেম তৈরি করা হয়।"
  },

  en: {
    dir: "ltr",
    about:
      "I am a mobile reverse engineer focused on secure systems, encryption, and custom implementations.",
    workTitle: "Professional Work",
    workText:
      "Custom encryption, secure app implementation, private scripts, and specialized security systems."
  },

  ur: {
    dir: "rtl",
    about:
      "میں موبائل ریورس انجینئر ہوں، محفوظ نظام، انکرپشن اور کسٹم حل پر کام کرتا ہوں۔",
    workTitle: "پیشہ ورانہ خدمات",
    workText:
      "کسٹم انکرپشن، محفوظ ایپ امپلیمنٹیشن، نجی اسکرپٹس اور خصوصی سیکیورٹی سسٹمز۔"
  }
};

const select = document.getElementById("langSelect");
const about = document.getElementById("about");
const workTitle = document.getElementById("workTitle");
const workText = document.getElementById("workText");

function setLang(lang) {
  document.documentElement.lang = lang;
  document.documentElement.dir = i18n[lang].dir;
  about.textContent = i18n[lang].about;
  workTitle.textContent = i18n[lang].workTitle;
  workText.textContent = i18n[lang].workText;
}

select.addEventListener("change", e => setLang(e.target.value));
setLang("ar");