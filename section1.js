// JavaScript to create a custom image slider

// Define an array of image URLs for the carousel
const imageUrls = [
    "Section1Images/20230914145944_[fpdl.in]_lake-with-houses-water_948735-174827_large.jpg",
    "Section1Images/20230914142543_[fpdl.in]_cute-ducks-living-nature_23-2150702073_large.jpg",
    "Section1Images/20230914143228_[fpdl.in]_from-golden-sands-rajasthan-emerald-backwaters-kerala-india-beckons-with-its-rich-tapestry-colors-flavors-cultures-illustration-generative-ai_850000-18512_medium.jpg"
    // Add more image URLs here for additional slides
];

const imageContainer = document.querySelector('.image-carousel');
let currentImageIndex = 0;

// Function to display the next image in the carousel
function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % imageUrls.length;
    const imageUrl = imageUrls[currentImageIndex];
    imageContainer.innerHTML = `<img class="sectiononebackground" width="100%" height="769px" src="${imageUrl}" alt="">`;
}

// Start the carousel by displaying the first image
showNextImage();

// Set an interval to automatically advance the carousel
const interval = 4000; // Change the interval (in milliseconds) to control the slide duration
setInterval(showNextImage, interval);
