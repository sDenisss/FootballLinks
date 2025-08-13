document.querySelectorAll(".match-card, .match-card a").forEach(card => {
    card.addEventListener("click", () => {
        const parentCard = card.closest(".match-card");
        const videoURL = parentCard.getAttribute("data-video");
        videoFrame.src = videoURL;
        modal.style.display = "block";
    });
});


const modal = document.getElementById("videoModal");
const videoFrame = document.getElementById("videoFrame");
const closeModal = document.getElementById("closeModal");

document.querySelectorAll(".match-card").forEach(card => {
    card.addEventListener("click", () => {
        const videoURL = card.getAttribute("data-video");
        videoFrame.src = videoURL;
        modal.style.display = "block";
    });
});

closeModal.addEventListener("click", () => {
    modal.style.display = "none";
    videoFrame.src = ""; // Очищаем, чтобы видео остановилось
});

window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
        videoFrame.src = "";
    }
});