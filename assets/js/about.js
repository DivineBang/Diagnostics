
document.addEventListener('DOMContentLoaded', function() {
    const popup = document.querySelector('.popup');
    const popupBtn = document.querySelector('.popup__btn');
    
    const popupBtn5 = document.querySelector('.footer__btn');
    const popupBtn6 = document.querySelector('.footer__btn_tablet');
    const popupBtn7 = document.querySelector('.footer__btn_mob');
    const popupBtn8 = document.querySelector('.popup__btn_mob');
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

    popupBtn6.addEventListener('click', function(event) {
      event.preventDefault();
      popup.classList.add('popup__open');
    });
    popupBtn7.addEventListener('click', function(event) {
      event.preventDefault();
      popup.classList.add('popup__open');
    });
    popupBtn8.addEventListener('click', function(event) {
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

//burger
$('.header__menu').click(function (event) {
    $('.menu').toggleClass('active__menu');
  });
  
    // Изменять иконку burger при клике
    $('.header__menu').click(function (event) {
        var menuImage = $('.burger__img');
        if (menuImage.attr('src').includes('close_burger')) {
            menuImage.attr('src', 'assets/img/burger.svg');
        } else {
            menuImage.attr('src', 'assets/img/close_burger.svg');
        }
    });

    
function changeImage(element, newSrc) {
  element.querySelector('.footer__social_img').src = newSrc;
  
}


$(document).ready(function() {
  function changeImage(element, newSrc) {
      element.src = newSrc;
  }

  // Left arrow hover
  $('#leftArrow').hover(
      function() {
          changeImage(this, 'assets/img/arrow_left-h.svg'); // Change to hover image
      },
      function() {
          changeImage(this, 'assets/img/arrow_left.svg'); // Change back to original
      }
  );

  // Right arrow hover
  $('#rightArrow').hover(
      function() {
          changeImage(this, 'assets/img/arrow_right-h.svg'); // Change to hover image
      },
      function() {
          changeImage(this, 'assets/img/arrow_right.svg'); // Change back to original
      }
  );
});

$(document).ready(function() {
  $('.social-icon').hover(
      function() {
          // On mouse enter, store the original src and change to hover image
          const originalSrc = $(this).attr('src'); // Store original source
          $(this).data('original-src', originalSrc); // Store original src in data attribute
          const hoverSrc = $(this).data('hover-src'); // Get hover image source
          $(this).attr('src', hoverSrc); // Change to hover image
      },
      function() {
          // On mouse leave, revert to the original image
          const originalSrc = $(this).data('original-src'); // Get original src from data attribute
          $(this).attr('src', originalSrc); // Change back to original image
      }
  );
});

document.addEventListener('DOMContentLoaded', function() {
  const languageSetDesktop = document.querySelector('.header__set .language__set');
  const languageOptionsDesktop = document.querySelector('.header__set .language__options');
  const arrowIconDesktop = document.querySelector('.header__set .arrow-icon');

  const languageSetMobile = document.querySelector('.header__set_mob .language__set');
  const languageOptionsMobile = document.querySelector('.header__set_mob .language__options');
  const arrowIconMobile = document.querySelector('.header__set_mob .arrow-icon');

  // Функция для переключения меню и иконки
  function toggleLanguageMenu(languageOptions, arrowIcon) {
    languageOptions.classList.toggle('language__options_menu');
    arrowIcon.classList.toggle('rotated');
  }

  // Обработчик для десктопной версии
  languageSetDesktop.addEventListener('click', function(event) {
    event.preventDefault();
    toggleLanguageMenu(languageOptionsDesktop, arrowIconDesktop);
  });

  // Обработчик для мобильной версии
  if (languageSetMobile) {
    languageSetMobile.addEventListener('click', function(event) {
      event.preventDefault();
      toggleLanguageMenu(languageOptionsMobile, arrowIconMobile);
    });
  }
});