const content = {
  ar: {
    dir: "rtl",
    text: "أنا مهندس عكسي لتطبيقات الموبايل ومطور برمجيات. أعمل في هندسة الأنظمة، التشفير، وأمن التطبيقات."
  },
  bn: {
    dir: "ltr",
    text: "আমি একজন মোবাইল অ্যাপস রিভার্স ইঞ্জিনিয়ার ও সফটওয়্যার ডেভেলপার। সিস্টেম, এনক্রিপশন এবং অ্যাপ সিকিউরিটি নিয়ে কাজ করি।"
  },
  en: {
    dir: "ltr",
    text: "I am a mobile application reverse engineer and software developer. I work with systems, encryption, and application security."
  },
  ur: {
    dir: "rtl",
    text: "میں موبائل ایپس کا ریورس انجینئر اور سافٹ ویئر ڈویلپر ہوں۔ سسٹمز، انکرپشن اور ایپ سیکیورٹی پر کام کرتا ہوں۔"
  }
};

document.querySelectorAll(".lang-switch button").forEach(btn => {
  btn.addEventListener("click", () => {
    const lang = btn.dataset.lang;
    document.documentElement.lang = lang;
    document.documentElement.dir = content[lang].dir;
    document.getElementById("about-text").innerText = content[lang].text;
  });
});
