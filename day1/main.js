const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let currentActive = 1;

prev.addEventListener("click", () => {
  currentActive--;
  if (currentActive < 1) {
    currentActive = 1;
  }
  update();
});

next.addEventListener("click", () => {
  currentActive++;
  if (currentActive > circles.length) {
    // prev.removeAttribute("disabled");
    currentActive = circles.length;
  } else {
    // next.setAttribute("disabled", true);
  }
  update();
});

function update() {
  circles.forEach((circle, index) => {
    if (index < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  const actives = document.querySelectorAll(".active");
  actives.forEach((active, index) => {
    progress.style.width = `${index * 33.33}%`;
  });

  if (currentActive === 1) {
    prev.setAttribute("disabled", true);
  } else if (currentActive === circles.length) {
    next.setAttribute("disabled", true);
  } else {
    next.removeAttribute("disabled");
    prev.removeAttribute("disabled");
  }
}
