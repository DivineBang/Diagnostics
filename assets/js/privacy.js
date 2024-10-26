
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