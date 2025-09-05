const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

yesBtn.addEventListener("click", () => {
    alert("Hahah Tui Biết Bạn Khùng Mà");
});

noBtn.addEventListener("mouseover", () => {
    // Khi di chuột vào nút "Không bao giờ", nó chạy đi chỗ khác
    const x = Math.floor(Math.random() * window.innerWidth - 100);
    const y = Math.floor(Math.random() * window.innerHeight - 50);
    noBtn.style.position = "absolute";
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});
