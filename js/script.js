// Get references to the DOM elements
const openPopupButton = document.getElementById("open-popup");
const closePopupButton = document.getElementById("close-popup");
const videoPopup = document.getElementById("video-popup");
const videoPlayer = document.getElementById("popup-video");

// Function to open the popup
function openPopup() {
  videoPopup.classList.remove("popup-hidden");
  videoPopup.classList.add("popup-visible");
  videoPlayer.play(); // Autoplay the video
}

// Function to close the popup
function closePopup() {
  videoPopup.classList.remove("popup-visible");
  videoPopup.classList.add("popup-hidden");
  videoPlayer.pause(); // Pause the video
  videoPlayer.currentTime = 0; // Reset video to the beginning
}

// Event Listeners
openPopupButton.addEventListener("click", openPopup);
closePopupButton.addEventListener("click", closePopup);

// Close popup when clicking on the background overlay
videoPopup.addEventListener("click", (event) => {
  // Check if the clicked element is the popup background itself
  if (event.target === videoPopup) {
    closePopup();
  }
});

// Close popup with the 'Escape' key
document.addEventListener("keydown", (event) => {
  if (
    event.key === "Escape" &&
    videoPopup.classList.contains("popup-visible")
  ) {
    closePopup();
  }
});
