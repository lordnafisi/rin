/* Language system */
const data = {
  ar: {
    title: "نبذة عني",
    skill: "مهندس عكسى • مطور تطبيقات • Java • Python • C++",
    about: "أنا أعمل في مجال الهندسة العكسية لتطبيقات الهاتف المحمول وأبني الأنظمة البرمجية باحتراف."
  },
  en: {
    title: "ABOUT ME",
    skill: "Reverse Engineer • App Developer • Java • Python • C++",
    about: "I work in mobile reverse engineering and software development with strong system understanding."
  },
  bn: {
    title: "আমার সম্পর্কে",
    skill: "রিভার্স ইঞ্জিনিয়ার • অ্যাপ ডেভেলপার • Java • Python • C++",
    about: "আমি মোবাইল অ্যাপ রিভার্স ইঞ্জিনিয়ারিং ও সফটওয়্যার ডেভেলপমেন্ট নিয়ে কাজ করি।"
  },
  ur: {
    title: "میرے بارے میں",
    skill: "ریورس انجینئر • ایپ ڈیولپر • Java • Python • C++",
    about: "میں موبائل ایپ ریورس انجینئرنگ اور سافٹ ویئر ڈیولپمنٹ میں کام کرتا ہوں۔"
  }
};

const langSelect = document.getElementById("langSelect");
function setLang(l){
  document.getElementById("aboutTitle").innerText = data[l].title;
  document.getElementById("skillText").innerText = data[l].skill;
  document.getElementById("aboutText").innerText = data[l].about;
}
langSelect.onchange = e => setLang(e.target.value);
setLang("ar");

/* Night-mode auto prayer-time (Maghrib → Fajr approx) */
const hour = new Date().getHours();
if (hour >= 18 || hour < 5) {
  document.body.classList.add("night");
}

/* Particle system (custom lightweight algorithm) */
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");
let w, h, particles = [];

function resize(){
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
}
window.addEventListener("resize", resize);
resize();

for (let i = 0; i < 80; i++) {
  particles.push({
    x: Math.random()*w,
    y: Math.random()*h,
    r: Math.random()*2 + 0.5,
    s: Math.random()*0.3 + 0.1
  });
}

function animate(){
  ctx.clearRect(0,0,w,h);
  ctx.fillStyle = "rgba(180,255,220,0.35)";
  particles.forEach(p=>{
    p.y -= p.s;
    if(p.y < 0) p.y = h;
    ctx.beginPath();
    ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
    ctx.fill();
  });
  requestAnimationFrame(animate);
}
animate();
