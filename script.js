const cont = document.querySelector(".cont");
const layers = document.querySelectorAll(".layer");

cont.onscroll = function () {
  let x = cont.scrollTop;
  let w = window.screen.width;
  let r = x / w;
  console.log("x: " + x);
  console.log("w: " + w);
  if (r < 1 && r > 0) {
    layers[0].style.left = (r * w) / 2 + "px";
  }

  if (w > 1500) {
    for (let i = 1; i < layers.length; i++) {
      applyParallax(r, i, w);
    }
  } else {
    for (let i = 1; i < layers.length; i++) {
      r -= 0.5;
      applyParallax(r, i, w);
    }
  }
};

function applyParallax(r, i, w) {
  if (r < i + 1 && r > i) {
    layers[i].style.left = ((r / i - 1) * i * w) / 2 + "px";
  }
}
