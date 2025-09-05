const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const popup = document.getElementById("popup");

// Hàm di chuyển + thu nhỏ nút "Không bao giờ"
function moveButton() {
  const x = Math.floor(Math.random() * (window.innerWidth - 120));
  const y = Math.floor(Math.random() * (window.innerHeight - 60));
  noBtn.style.position = "absolute";
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;

  // Thu nhỏ dần
  let size = noBtn.style.transform.match(/scale\(([^)]+)\)/);
  let scale = size ? parseFloat(size[1]) : 1;
  scale -= 0.1;
  if (scale > 0.2) {
    noBtn.style.transform = `scale(${scale})`;
  } else {
    noBtn.style.display = "none"; // biến mất luôn
  }
}

// Gắn sự kiện cho cả PC & mobile
noBtn.addEventListener("mouseover", moveButton);
noBtn.addEventListener("click", moveButton);
noBtn.addEventListener("touchstart", moveButton);

// Nút "Yes" → hiện popup + thả tim
yesBtn.addEventListener("click", () => {
  popup.classList.remove("hidden");
  for (let i = 0; i < 20; i++) {
    dropHeart();
  }
});

// Hàm thả tim
function dropHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerText = "💖";
  heart.style.left = Math.random() * window.innerWidth + "px";
  heart.style.bottom = "0px";
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 3000);
}
