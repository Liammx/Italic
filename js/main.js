document.addEventListener('DOMContentLoaded', () => {
    const swiperWrapper = document.querySelector('.swiper-wrapper');
    const slides = document.querySelectorAll('.swiper-slide');
    const prevButton = document.querySelector('.swiper-button-prev');
    const nextButton = document.querySelector('.swiper-button-next');
    const modal = document.getElementById('registration-modal');
    const closeButton = document.querySelector('.close-button');
    const registrationForm = document.getElementById('registration-form');
    let currentIndex = 0;

    const showSlide = (index) => {
        const offset = -index * 100;
        swiperWrapper.style.transform = `translateX(${offset}%)`;
    };

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
        showSlide(currentIndex);
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
        showSlide(currentIndex);
    });

    setInterval(() => {
        currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
        showSlide(currentIndex);
    }, 3000);

    const openModal = () => {
        modal.style.display = 'block';
    };

    const closeModal = () => {
        modal.style.display = 'none';
    };

    window.onclick = (event) => {
        if (event.target === modal) {
            closeModal();
        }
    };

    closeButton.addEventListener('click', closeModal);

    registrationForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(registrationForm);
        const data = {
            name: formData.get('name'),
            surname: formData.get('surname'),
            email: formData.get('email'),
            phone: formData.get('phone')
        };

        console.log('Registration Data:', data);
        // Here you would send the data to your server
        // alert('Registration successful. A verification code has been sent to your phone.');
        closeModal();
    });

    openModal();
});