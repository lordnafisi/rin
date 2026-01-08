// Background subtle motion (custom lightweight logic)
let angle = 0;
setInterval(() => {
  angle += 0.15;
  document.body.style.background =
    `radial-gradient(circle at ${50 + Math.sin(angle)*6}% top, #0f2027, #000)`;
}, 90);

// Language content
const content = {
  ar: {
    about: "أنا مهندس عكسى لتطبيقات الموبايل ومطور برمجيات. أعمل في هندسة الأنظمة، التشفير، وأمن التطبيقات.",
    translation: "باسم الله، وبقدرته — الحق لا يُغلب.",
    workTitle: "أعمال احترافية مخصصة",
    workText: "تشفير مخصص، أنظمة آمنة، سكربتات خاصة، أو حلول أمنية متقدمة حسب الطلب."
  },
  bn: {
    about: "আমি মোবাইল অ্যাপ রিভার্স ইঞ্জিনিয়ার ও ডেভেলপার। সিকিউর সিস্টেম, এনক্রিপশন ও অ্যাপ ইঞ্জিনিয়ারিং নিয়ে কাজ করি।",
    translation: "আল্লাহর নামে, তাঁর কুদরতে—সত্য কখনো পরাজিত হয় না।",
    workTitle: "কাস্টম ও প্রফেশনাল কাজ",
    workText: "কাস্টম এনক্রিপশন, সিকিউর অ্যাপ বা প্রাইভেট স্ক্রিপ্টের জন্য যোগাযোগ করুন।"
  },
  en: {
    about: "I’m a mobile reverse engineer and software developer focused on security, encryption, and system-level engineering.",
    translation: "In the name of Allah, by His power — truth is never defeated.",
    workTitle: "Professional & Custom Work",
    workText: "Custom encryption, secure applications, private scripts, and advanced security solutions."
  },
  ur: {
    about: "میں موبائل ایپس کا ریورس انجینئر اور سافٹ ویئر ڈیولپر ہوں، سیکیورٹی اور انکرپشن پر کام کرتا ہوں۔",
    translation: "اللہ کے نام سے، اس کی قدرت سے — حق کبھی مغلوب نہیں ہوتا۔",
    workTitle: "پیشہ ورانہ اور کسٹم کام",
    workText: "کسٹم انکرپشن، محفوظ ایپس اور نجی اسکرپٹس کے لیے رابطہ کریں۔"
  }
};

function setLang(lang) {
  document.getElementById("about").innerText = content[lang].about;
  document.getElementById("translation").innerText = content[lang].translation;
  document.getElementById("workTitle").innerText = content[lang].workTitle;
  document.getElementById("workText").innerText = content[lang].workText;
  document.documentElement.lang = lang;
}
