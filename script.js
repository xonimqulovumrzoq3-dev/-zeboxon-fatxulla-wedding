const weddingDate = new Date("September 13, 2026 19:00:00").getTime();

const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

setInterval(() => {

const now = new Date().getTime();

const distance = weddingDate - now;

const d = Math.floor(distance / (1000 * 60 * 60 * 24));

const h = Math.floor(
(distance % (1000 * 60 * 60 * 24)) /
(1000 * 60 * 60)
);

const m = Math.floor(
(distance % (1000 * 60 * 60)) /
(1000 * 60)
);

const s = Math.floor(
(distance % (1000 * 60)) /
1000
);

days.innerHTML = d;
hours.innerHTML = h;
minutes.innerHTML = m;
seconds.innerHTML = s;

},1000);

const copy=document.getElementById("copy");

copy.onclick=()=>{

navigator.clipboard.writeText("5614682111304913");

copy.innerHTML="✅ Nusxalandi";

setTimeout(()=>{

copy.innerHTML="Karta raqamini nusxalash";

},2000);

}

document.querySelectorAll(".card").forEach((card)=>{

card.onmousemove=(e)=>{

const x=e.offsetX/card.clientWidth*100;

const y=e.offsetY/card.clientHeight*100;

card.style.background=
`radial-gradient(circle at ${x}% ${y}%,
rgba(255,255,255,.22),
rgba(255,255,255,.08))`;

}

card.onmouseleave=()=>{

card.style.background="rgba(255,255,255,.10)";

}

});
const openBtn = document.getElementById("openBtn");

if (openBtn) {
  openBtn.addEventListener("click", (e) => {
    e.preventDefault();

    document.getElementById("about").scrollIntoView({
      behavior: "smooth"
    });
  });
}
