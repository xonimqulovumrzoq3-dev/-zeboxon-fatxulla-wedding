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
// Card Tilt Effect

document.querySelectorAll(".card").forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

const rotateY=((x/rect.width)-0.5)*14;

const rotateX=((y/rect.height)-0.5)*-14;

card.style.transform=

`perspective(1000px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
scale(1.03)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform="perspective(1000px) rotateX(0) rotateY(0)";

});

});
const copyCard=document.getElementById("copyCard");

if(copyCard){

copyCard.onclick=()=>{

navigator.clipboard.writeText("5614682111304913");

copyCard.innerHTML="✅ Nusxalandi";

setTimeout(()=>{

copyCard.innerHTML="Karta raqamini nusxalash";

},2500);

}

}
window.onload=()=>{

setTimeout(()=>{

const loader=document.getElementById("loader");

loader.style.opacity="0";

loader.style.visibility="hidden";

},2500);

}
const dockMusic=document.getElementById("musicOpen");

if(dockMusic){

dockMusic.onclick=()=>{

if(!playing){

music.play();

playing=true;

dockMusic.innerHTML="⏸";

}else{

music.pause();

playing=false;

dockMusic.innerHTML="🎵";

}

}

}
document.querySelectorAll("button").forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="scale(1.05)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="scale(1)";

});

});
// Hero Parallax

window.addEventListener("scroll",()=>{

const scroll=window.scrollY;

const hero=document.querySelector(".hero");

hero.style.transform=
`translateY(${scroll*.25}px)`;

});
document.querySelectorAll(".glass").forEach(glass=>{

glass.addEventListener("mousemove",(e)=>{

const rect=glass.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

glass.style.background=`
radial-gradient(circle at ${x}px ${y}px,
rgba(255,255,255,.28),
rgba(255,255,255,.10) 45%,
rgba(255,255,255,.05) 100%)
`;

});

glass.addEventListener("mouseleave",()=>{

glass.style.background="rgba(255,255,255,.12)";

});

});
html{

scroll-behavior:smooth;

scroll-padding-top:30px;

}

body{

overscroll-behavior:none;

}
h1{

background:linear-gradient(
180deg,
#fff,
#fff,
#d8d8d8
);

-webkit-background-clip:text;

-webkit-text-fill-color:transparent;

}
