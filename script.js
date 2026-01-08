const content = {
  ar: {
    aboutTitle: "نبذة عني",
    skill: "مهندس عكسى • مطور تطبيقات • Java • Python • C++",
    about:
      "أنا أعمل في مجال الهندسة العكسية لتطبيقات الهاتف المحمول، وأمتلك خبرة في تحليل وبناء الأنظمة البرمجية باحتراف."
  },
  en: {
    aboutTitle: "ABOUT ME",
    skill: "Reverse Engineer • App Developer • Java • Python • C++",
    about:
      "I work in mobile application reverse engineering and software development with strong security and system understanding."
  },
  bn: {
    aboutTitle: "আমার সম্পর্কে",
    skill: "রিভার্স ইঞ্জিনিয়ার • অ্যাপ ডেভেলপার • Java • Python • C++",
    about:
      "আমি মোবাইল অ্যাপ রিভার্স ইঞ্জিনিয়ারিং এবং সফটওয়্যার ডেভেলপমেন্ট নিয়ে কাজ করি।"
  },
  ur: {
    aboutTitle: "میرے بارے میں",
    skill: "ریورس انجینئر • ایپ ڈیولپر • Java • Python • C++",
    about:
      "میں موبائل ایپلیکیشن ریورس انجینئرنگ اور سافٹ ویئر ڈیولپمنٹ میں کام کرتا ہوں۔"
  }
};

const langSelect = document.getElementById("langSelect");

function setLang(lang) {
  document.getElementById("aboutTitle").innerText = content[lang].aboutTitle;
  document.getElementById("skillText").innerText = content[lang].skill;
  document.getElementById("aboutText").innerText = content[lang].about;
}

langSelect.addEventListener("change", e => {
  setLang(e.target.value);
});

setLang("ar"); 
