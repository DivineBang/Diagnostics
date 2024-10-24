
/* $(document).ready(function(){
  $('.center').slick({
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 1500,
    centerPadding: '10px',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1201,
        settings: {
          
          centerMode: true,
          centerPadding: '50px',
          slidesToShow: 2
        }
      },
      {
        breakpoint: 993,
        settings: {
          
          centerMode: true,
          centerPadding: '10px',
          slidesToShow: 2
        }
      },
      
      {
        breakpoint: 769,
        settings: {
          
          centerMode: true,
          centerPadding: '50px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 577,
        settings: {
          
          centerMode: true,
          centerPadding: '5px',
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
});  */   


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
  const scrollSpeed = 1; // Скорость скролла

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







