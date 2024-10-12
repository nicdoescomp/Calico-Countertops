document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector('.carousel');
    const toggleButton = document.getElementById('toggleButton');
    const toggleMessage = document.getElementById('toggleMessage');
    const prevButton = document.getElementById('prevBtn');
    const nextButton = document.getElementById('nextBtn');

    

    const images = document.querySelectorAll('.carousel-images img');
    let currentIndex = 0;

    // Function to show the current image
    function showImage(index) {
        images.forEach((img, i) => {
            img.classList.remove('active');
            if (i === index) {
                img.classList.add('active');
            }
        });
    }

    // Previous button functionality
    prevButton.addEventListener('click', function() {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
        showImage(currentIndex);
    });

    // Next button functionality
    nextButton.addEventListener('click', function() {
        currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
        showImage(currentIndex);
    });
 

    // Toggle message visibility
    toggleButton.addEventListener('click', function() {
        toggleMessage.style.display = (toggleMessage.style.display === "none") ? "block" : "none";
        console.log("Toggle message visibility.");
    });

   
});
