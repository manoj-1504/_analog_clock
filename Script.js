function Clock() {
  const date = new Date(); //getting date 

  const hr = date.getHours() % 12;
  const mn = date.getMinutes();
  const sec = date.getSeconds();

  const hh = document.querySelector(".hour-container .time"); 
  const mm = document.querySelector(".mins-container");
  const ss = document.querySelector(".sec-container");
  const ampm = document.querySelector(".hour-container .ampm");
  hh.innerHTML = hr;

  hr == "0" ? (hh.innerHTML = "12") : hr;
  hr < 0 ? ampm.innerHTML = "AM" : ampm.innerHTML ="PM";

  mm.style.transform = `rotate(${mn * 6}deg)`;
  ss.style.transform = `rotate(${sec * 6}deg)`;
}
setInterval(Clock, 1000);
Clock();
