
document.addEventListener('DOMContentLoaded', function() {
    const popup = document.querySelector('.popup');
    const popupBtn = document.querySelector('.popup__btn');
    
    const popupBtn5 = document.querySelector('.footer__btn');
    const closeBtn = document.querySelector('.close-btn');

    // Открытие попапа
    popupBtn.addEventListener('click', function(event) {
      event.preventDefault();
      popup.classList.add('popup__open');
    });

    

    

    
    popupBtn5.addEventListener('click', function(event) {
      event.preventDefault();
      popup.classList.add('popup__open');
    });


    // Закрытие попапа при клике на затемнённую область
    popup.addEventListener('click', function(event) {
      if (event.target === popup) {
        popup.classList.remove('popup__open');
      }
    });

    // Закрытие попапа при клике на кнопку закрытия (крестик)
    closeBtn.addEventListener('click', function() {
      popup.classList.remove('popup__open');
    });
});

/* Переключатель в слайдере  */
document.addEventListener('DOMContentLoaded', () => {
    const photos = [
        { img: 'assets/img/photo_1.png', title: 'PHOTO NAME 1', text: 'Lorem Ipsum 1' },
        { img: 'assets/img/photo_2.png', title: 'PHOTO NAME 2', text: 'Lorem Ipsum 2' },
        { img: 'assets/img/photo_3.png', title: 'PHOTO NAME 3', text: 'Lorem Ipsum 3' },
        { img: 'assets/img/photo_4.png', title: 'PHOTO NAME 4', text: 'Lorem Ipsum 4' },
        { img: 'assets/img/photo_5.png', title: 'PHOTO NAME 5', text: 'Lorem Ipsum 5' },
        { img: 'assets/img/photo_6.png', title: 'PHOTO NAME 6', text: 'Lorem Ipsum 6' },
        { img: 'assets/img/photo_7.png', title: 'PHOTO NAME 7', text: 'Lorem Ipsum 7' },
        { img: 'assets/img/photo_8.png', title: 'PHOTO NAME 8', text: 'Lorem Ipsum 8' },
        { img: 'assets/img/photo_9.png', title: 'PHOTO NAME 9', text: 'Lorem Ipsum 9' },
        { img: 'assets/img/photo_10.png', title: 'PHOTO NAME 10', text: 'Lorem Ipsum 10' },
    ];

    let currentIndex = 4; // Начальный индекс для photo_5

    const currentPhoto = document.getElementById('currentPhoto');
    const sliderTitle = document.getElementById('sliderTitle');
    const sliderText = document.getElementById('sliderText');

    const updateSlider = () => {
        currentPhoto.src = photos[currentIndex].img;
        sliderTitle.textContent = photos[currentIndex].title;
        sliderText.textContent = photos[currentIndex].text;
    };

    document.querySelector('.about__slider_img-1').addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlider();
        }
    });

    document.querySelector('.about__slider_img-3').addEventListener('click', () => {
        if (currentIndex < photos.length - 1) {
            currentIndex++;
            updateSlider();
        }
    });
});

/* animation */
document.addEventListener('DOMContentLoaded', () => {
    
    const rectAnimations = document.querySelectorAll('.rect__animation');
    const itemAnimations = document.querySelectorAll('.item__animation');
    

    function handleScrollAnimation() {
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;

       

        // Плавное появление прямоугольников
        rectAnimations.forEach((rect) => {
            if (rect.getBoundingClientRect().top <= windowHeight - 50) {
                rect.classList.add('visible');
            }
        });

        // Плавное появление элементов
        itemAnimations.forEach((item) => {
            if (item.getBoundingClientRect().top <= windowHeight - 50) {
                item.classList.add('visible');
            }
        });
        
    }
    
    window.addEventListener('scroll', handleScrollAnimation);
    handleScrollAnimation(); // Запуск для элементов, уже находящихся в видимой области
});