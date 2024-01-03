const images = [
 "c:\Users\hasan\Downloads\Wildlife_at_Maasai_Mara_(Lion).jpg",
"c:\Users\hasan\Downloads\lamb-iStock-665494268-16x9-e1559777676675.jpg",

];
let currentIndex = 0;
const currentImage = document.getElementById("currentImage");
function updateImage() {
 currentImage.src = images[currentIndex];
 currentImage.alt = `Image ${currentIndex + 1}`;
 // Set the desired width and height for the image
 currentImage.width = 500; // Replace with your desired width in pixels
 currentImage.height = 500; // Replace with your desired height in pixels
}
function nextImage() {
 currentIndex = (currentIndex + 1) % images.length;
 updateImage();
}
function prevImage() {
 currentIndex = (currentIndex - 1 + images.length) % images.length;
 updateImage();
}
// Keyboard shortcuts
document.addEventListener("keydown", function (e) {
 if (e.key === "ArrowRight") {
 nextImage();
 } else if (e.key === "ArrowLeft") {
 prevImage();
 }
});
// Initial image load
updateImage();
