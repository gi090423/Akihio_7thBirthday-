const openButton=document.getElementById("openInvitation");
const cover=document.getElementById("cover");
const invitation=document.getElementById("invitation");
const music=document.getElementById("music");
const musicBtn=document.getElementById("musicBtn");

openButton.addEventListener("click",()=>{
  openButton.classList.add("open");
  setTimeout(()=>{
    cover.style.display="none";
    invitation.classList.remove("hidden");
    window.scrollTo(0,0);
  },850);
  if(music.src) music.play().catch(()=>{});
});

musicBtn.addEventListener("click",()=>{
  if(!music.src){
    alert("Add music.mp3 beside index.html, then uncomment the source line in index.html.");
    return;
  }
  if(music.paused){music.play();musicBtn.textContent="❚❚";}
  else{music.pause();musicBtn.textContent="♫";}
});

/* CHANGE THE DATE HERE */
const birthday=new Date("September 12, 2026 15:00:00").getTime();

function updateCountdown(){
 const diff=birthday-Date.now();
 if(diff<=0)return;
 document.getElementById("days").textContent=String(Math.floor(diff/86400000)).padStart(2,"0");
 document.getElementById("hours").textContent=String(Math.floor(diff/3600000)%24).padStart(2,"0");
 document.getElementById("minutes").textContent=String(Math.floor(diff/60000)%60).padStart(2,"0");
 document.getElementById("seconds").textContent=String(Math.floor(diff/1000)%60).padStart(2,"0");
}
updateCountdown();
setInterval(updateCountdown,1000);

document.getElementById("rsvpForm").addEventListener("submit",(e)=>{
 e.preventDefault();
 const name=new FormData(e.target).get("name");
 document.getElementById("success").textContent=`Thank you, ${name}! We can't wait to celebrate with you. ♡`;
 e.target.reset();
});


/* Add a Home button to every invitation section */
document.querySelectorAll(".page").forEach(section => {
  const home = document.createElement("a");
  home.className = "home-btn";
  home.href = "#cover";
  home.setAttribute("aria-label", "Home");
  home.innerHTML = "⌂";
  section.appendChild(home);
});
