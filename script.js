const modal = document.getElementById("videoModal");
const videoFrame = document.getElementById("videoFrame");
const closeModal = document.getElementById("closeModal");

document.querySelectorAll(".match-card a").forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault(); // запрещаем переход по href
        const parentCard = link.closest(".match-card");
        const videoURL = parentCard.getAttribute("data-video");
        videoFrame.src = videoURL;
        modal.style.display = "block";
    });
});

closeModal.addEventListener("click", () => {
    modal.style.display = "none";
    videoFrame.src = ""; // очищаем
});

window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
        videoFrame.src = "";
    }
});
