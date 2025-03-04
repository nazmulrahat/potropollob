
const images = document.querySelectorAll('.slider img');
let currentIndex = 0;

function autoSlide() {
    currentIndex++;
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    images.forEach((img, index) => {
        img.style.transform = `translateX(-${currentIndex * 100}%)`;
    });
}

setInterval(autoSlide, 3000);



const openModalButtons = document.querySelectorAll('.open-modal-btn');
const modal = document.getElementById('my_modal_3');
const modalImage = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
const closeModalButton = modal.querySelector('button');

// Add event listeners for each "open modal" button
openModalButtons.forEach((button) => {
  button.addEventListener('click', () => {
    // Get the title and image of the clicked card
    const cardTitle = button.closest('.card').querySelector('.card-title').innerText;
    const cardImage = button.closest('.card').querySelector('.card-image').src;

    // Set the title and image in the modal
    modalTitle.innerText = cardTitle;
    modalImage.src = cardImage;

    // Show the modal with Tailwind transitions
    modal.classList.remove('opacity-0', 'pointer-events-none');
    modal.classList.add('opacity-100', 'pointer-events-auto');
    modal.showModal();
  });
});

// Close the modal when the close button is clicked
closeModalButton.addEventListener('click', () => {
  // Hide the modal with Tailwind transitions
  modal.classList.remove('opacity-100', 'pointer-events-auto');
  modal.classList.add('opacity-0', 'pointer-events-none');
  modal.close();
});




document.getElementById("rt").addEventListener("click", function(){
  window.open("https://www.facebook.com/rahat78613")
  
})
