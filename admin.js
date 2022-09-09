document.addEventListener("DOMContentLoaded", () => {
  const greeting = document.getElementById("greeting");
  const announcement = document.getElementById("announcement");
  const banner = document.querySelector("#advert");
  let day = new Date();
  let hr = day.getHours();
  if (hr >= 0 && hr < 12) {
    greeting.innerText = "Good Morning";
  } else if (hr >= 12 && hr <= 15) {
    greeting.innerText = "Good Afternoon";
  } else if (hr > 15 && hr < 19) {
    greeting.innerText = "Good Evening";
  } else if (hr >= 19 && hr <= 23) {
    greeting.innerText = "Good Night";
  }
  announcement.addEventListener("click", (e) => {
    e.target.parentNode.remove();
  });
});
