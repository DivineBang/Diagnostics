
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
  

  document.addEventListener('DOMContentLoaded', function() {
    const languageSet = document.querySelector('.language__set');
    const languageOptions = document.querySelector('.language__options');
    const arrowIcon = document.querySelector('.arrow-icon');
  
    languageSet.addEventListener('click', function(event) {
        event.preventDefault(); // Предотвращаем переход по ссылке
  
        // Переключаем класс для отображения меню
        languageOptions.classList.toggle('language__options_menu');
  
        // Переключаем класс для поворота стрелки
        arrowIcon.classList.toggle('rotated');
    });
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