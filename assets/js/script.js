const fixed = document.querySelector('#fixed')

function opacity() {
  
    if (window.pageYOffset > 600) {
      fixed.classList.add('active-f')
    }

    else{
      fixed.classList.remove('active-f')
    }

  }

window.onscroll=opacity
opacity()

//modal
const modalEl = document.querySelector('#modalPopup'),
      btnEl1 = document.querySelector('#modal__preview-1'),
      btnEl2 = document.querySelector('#modal__preview-2'),
      btnEl3 = document.querySelector('#modal__preview-3'),
      btnEl4 = document.querySelector('#modal__preview-4'),
      closeEl = document.querySelector('#modalCross'),
      closeBody = document.querySelector('.popup'),
      bg = document.querySelector('#modalBg')

btnEl1.addEventListener('click', () => {
  
  modalEl.classList.add('open');
  body.classList.add('noscroll')

})

btnEl2.addEventListener('click', () => {
  
  modalEl.classList.add('open');
  body.classList.add('noscroll')

})

btnEl3.addEventListener('click', () => {
  
  modalEl.classList.add('open');
  body.classList.add('noscroll')

})

btnEl4.addEventListener('click', () => {
  
  modalEl.classList.add('open');
  body.classList.add('noscroll')

})

closeEl.addEventListener('click', () => {
  
  modalEl.classList.remove('open')
  body.classList.remove('noscroll')
  
});
bg.addEventListener('click', () => {
  modalEl.classList.remove('open')
  body.classList.remove('noscroll')
})

//

const formSubmit = document.querySelector('#formSubmit')
const popupSubmit = document.querySelector('.popup__text-submit')
const popupNormal = document.querySelector('.popup__text')

function validateForm() {
  let error_text = "";

  name_input = document.getElementById("form_name");
  email_input = document.getElementById("form_email");
  phcode_input = document.getElementById("form_phcode");
  phone_input = document.getElementById("form_phone");
  agr_checkbox = document.getElementById("checkbox-id-p");
  
  if (!name_input.value.length) {
    error_text += "Не заполнено поле \"Имя\".<br>";
  }

  if (
    !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email_input.value
    )
  ) {
    error_text += "Не заполнено поле \"E-mail\".<br>";
  }

  if ( !/^\d{1,4}$/.test(phcode_input.value) ) {
    error_text += "Некорректное значение в поле \"Код страны\".<br>";
  }

  if (!phone_input.value.length) {
    error_text += "Не заполнено поле \"Телефон\".<br>";
  }

  if (!agr_checkbox.checked) {
    error_text += "Для отправки формы Вам нужно подтвердить<br> согласие на обработку персональных данных.<br>";
  }

  return error_text;
}

function submitForm() {
  ErrText = validateForm();

  if (ErrText.length){
	$('#popup-error').html(ErrText);
	$('.popup__error').removeClass('disactive');
	$('.popup__error').addClass('active');
  }
  else{
	$('.popup__error').removeClass('active');
        $('.popup__error').addClass('disactive');

	$.post(
		'php/mail2.php', 
		$('#mail-form').serialize(),
		function(data) {  
			if (data.status == 'OK'){
				$('.popup__text').addClass('disactive');
				$('.popup__text-submit').addClass('active');
			}
			else{
				if (data.status == 'ERROR'){
					$('#popup-error').html('Ошибка отправки :<br>'+data.error);
				}	
				else{
					$('#popup-error').html('Неизвестный ответ сервера');
				}
				
				$('.popup__error').removeClass('disactive');
				$('.popup__error').addClass('active');
			}
		},
		'json'
	);
  }
}

$('#formSubmit').click(submitForm);

const body = document.querySelector('.body')


/* ---- particles.js config ---- */

particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 60,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      }
    },
    "opacity": {
      "value": 0.3,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": false,
        "mode": "push"
      },
      "resize": false
    },
    "modes": {
      "grab": {
        "distance": 140,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});


/* ---- stats.js config ---- */

var count_particles, stats, update;
stats = new Stats;
stats.setMode(0);
stats.domElement.style.position = 'absolute';
stats.domElement.style.left = '0px';
stats.domElement.style.top = '0px';
document.body.appendChild(stats.domElement);
count_particles = document.querySelector('.js-count-particles');
update = function() {
  stats.begin();
  stats.end();
  if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
    count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
  }
  requestAnimationFrame(update);
};
requestAnimationFrame(update);