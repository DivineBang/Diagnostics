
$(document).ready(function(){
  $('.real__slider').slick({
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 2000,
    centerPadding: '0',
    slidesToShow: 1,
    responsive: [
      {
        breakpoint: 1201,
        settings: {
          
          centerMode: true,
          centerPadding: '0',
          slidesToShow: 2
        }
      },
      {
        breakpoint: 993,
        settings: {
          
          centerMode: true,
          centerPadding: '0',
          slidesToShow: 2
        }
      },
      
      {
        breakpoint: 769,
        settings: {
          
          centerMode: true,
          centerPadding: '0',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 577,
        settings: {
          
          centerMode: true,
          centerPadding: '0',
          slidesToShow: 1
        }
        
      },
      {
        breakpoint: 450,
        settings: {
          
          centerMode: true,
          centerPadding: '0',
          slidesToShow: 1
        }
        
      },
      {
        breakpoint: 374,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '0',
          slidesToShow: 1
        }
        
      }
      
      
    ]
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


//dtek scrol
window.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.partners__track');
  const images = track.querySelectorAll('.partners__img');
  const imageWidth = images[0].clientWidth + 40; // Ширина изображения + отступ
  const trackWidth = track.scrollWidth / 2; // Полная ширина трека с дублированием

  // Дублируем контент
  track.innerHTML += track.innerHTML;

  // Начальные параметры
  let scrollAmount = 0;
  const scrollSpeed = 0.5; // Скорость скролла

  function scrollSlider() {
      scrollAmount += scrollSpeed;

      // Если прокрутили весь контент, то сбрасываем назад
      if (scrollAmount >= trackWidth) {
          scrollAmount = 0; // Сброс к началу
      }

      // Двигаем трек
      track.style.transform = `translateX(-${scrollAmount}px)`;
      requestAnimationFrame(scrollSlider);
  }

  scrollSlider(); // Запускаем анимацию скроллинга
});



//Ограничение по цифрам ввода номера + запрет на ввод букв + ввод номера телефона как в placeholder (Обращаемся по класу input-phone )

document.querySelectorAll('.input-phone').forEach(function (input) {
  input.addEventListener('input', function (e) {
      // Удаляем все нецифровые символы
      let value = e.target.value.replace(/\D/g, '');

      // Ограничиваем количество цифр до 10 (для номера)
      if (value.length > 10) {
          value = value.slice(0, 10);
      }

      // Форматируем номер как (XXX) XXX-XXXX
      let formattedValue = '';
      if (value.length > 0) {
          formattedValue += '(' + value.slice(0, 3);
      }
      if (value.length >= 4) {
          formattedValue += ') ' + value.slice(3, 6);
      }
      if (value.length >= 7) {
          formattedValue += '-' + value.slice(6, 8);
      }
      if (value.length >= 9) {
          formattedValue += value.slice(8, 10);
      }

      // Обновляем значение поля ввода
      e.target.value = formattedValue;
  });
});




document.addEventListener('DOMContentLoaded', function() {
    const popup = document.querySelector('.popup');
    const popupBtn = document.querySelector('.popup__btn');
    const popupBtn2 = document.querySelector('.offer__btn');
    const popupBtn3 = document.querySelector('.video__mix_btn');
    const popupBtn4 = document.querySelector('.how__btn');
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

    popupBtn2.addEventListener('click', function(event) {
      event.preventDefault();
      popup.classList.add('popup__open');
    });

    popupBtn3.addEventListener('click', function(event) {
      event.preventDefault();
      popup.classList.add('popup__open');
    });

    popupBtn4.addEventListener('click', function(event) {
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

//scroll bottom
document.addEventListener('DOMContentLoaded', function() {
  const btn = document.querySelector('.offer__rect');

  btn.addEventListener('click', function(e) {
      e.preventDefault();
      const firstSection = document.querySelector('footer'); 
      firstSection.scrollIntoView({ behavior: 'smooth' });
  });
});

//Переключение звука
document.addEventListener('DOMContentLoaded', () => {
  const video = document.getElementById('fullscreen-video');
  const videoContainer = document.querySelector('.video');
  const demoButton = document.querySelector('.video__mix_btn');

  // Устанавливаем видео на mute по умолчанию и громкость на 50%
  video.muted = true;
  video.volume = 0.2;

  // Обработчик клика на весь блок .video
  videoContainer.addEventListener('click', (e) => {
    // Проверяем, был ли клик по кнопке "Request a demo"
    if (e.target !== demoButton) {
      // Переключаем звук, при этом громкость остаётся на уровне 50%
      video.muted = !video.muted;
    }
  });
});

// Текст в слайдер
/* document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.real__btn');
  const title = document.querySelector('.real__wrapp_title');

  // Текст, который будет добавлен
  const additionalText = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
  when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
  Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
  when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
  Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
  when an unknown printer took a galley of type and scrambled it to make a type specimen book.`;

  // Обработчик события на кнопку
  btn.addEventListener('click', (e) => {
      e.preventDefault(); // Отменяем стандартное поведение ссылки
      title.textContent = additionalText; // Добавляем текст в элемент
  });
});
 */
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



/* Прокрутка к секции #real */
// Функция для плавной прокрутки к #real
function scrollToReal(event) {
  event.preventDefault(); // Предотвращаем переход по ссылке
  document.querySelector('#real').scrollIntoView({
      behavior: 'smooth'
  });
}

// Присваиваем функцию обоим элементам
document.getElementById('scroll-to-real').addEventListener('click', scrollToReal);
document.getElementById('scroll-to-real-mob').addEventListener('click', scrollToReal);



// Функция для обновления содержимого при клике на блок
function updateRealContent(number) {
  // Обновляем текст заголовка
  document.querySelector('.real__wrapp_title').textContent = `Lorem ${number}`;

  // Обновляем изображение
  document.querySelector('.real__person_img').src = `assets/img/team_${number}.png`;

  // Обновляем имя и должность
  document.querySelector('.real__person_title').textContent = `John Davis ${number}`;
  document.querySelector('.real__person_text').textContent = `VP of Western Operations ${number}`;

  // Сохраняем текущий номер в data-атрибуте кнопки
  document.querySelector('.real__btn').setAttribute('data-current', number);
}

document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.real__btn');
  const title = document.querySelector('.real__wrapp_title');
  const initialText = title.textContent;

  // Текст, который будет добавлен
  const additionalText = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
  when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
  Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
  when an unknown printer took a galley of type and scrambled it to make a type specimen book.`;

  // Обработчик события на кнопку
  btn.addEventListener('click', (e) => {
      e.preventDefault(); // Отменяем стандартное поведение ссылки

      const currentNumber = btn.getAttribute('data-current');
      const isExpanded = title.getAttribute('data-expanded') === 'true';

      if (isExpanded) {
          // Если текст уже развернут, скрываем дополнительный текст
          title.textContent = `Lorem ${currentNumber}`;
          title.setAttribute('data-expanded', 'false');
          btn.textContent = 'MORE DETAILS';
      } else {
          // Иначе показываем дополнительный текст
          title.textContent = additionalText;
          title.setAttribute('data-expanded', 'true');
          btn.textContent = 'LESS DETAILS';
      }
  });
});



