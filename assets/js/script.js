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


//scroll
function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('element-show');
    }
  });
}
let options = { threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-animation');
for (let elm of elements) {
  observer.observe(elm);
}

//slider
let sliderItem = document.querySelectorAll('.problem__item')
let sliderText = document.querySelectorAll(`.slider-text`)

sliderItem.forEach(function(el) {

  function active() {
    for (let i = 0; i < sliderItem.length; i++) {
      sliderItem[i].classList.remove('slider-active')
    }

    for (let i = 0; i < sliderText.length; i++) {
      sliderText[i].classList.remove('slider-text-active')
    }
    let sliderActive = el

    sliderActive.classList.add('slider-active')

    for (let i = 0; i < sliderItem.length; i++) {
      if (sliderItem[i].classList.contains('slider-active')){
        let textActive = document.querySelector('.slider-text[data-name="'+i+'"]')
        textActive.classList.add('slider-text-active')
        
      }
    }

  }

  el.addEventListener('click', active)
})
   

//modal
const modalEl = document.querySelector('#modalPopup'),
      btnEl1 = document.querySelector('#modal__preview-1'),
      btnEl2 = document.querySelector('#modal__preview-2'),
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

Date.prototype.today = function () { 
    return ((this.getDate() < 10)?"0":"") + this.getDate() +"/"+(((this.getMonth()+1) < 10)?"0":"") + (this.getMonth()+1) +"/"+ this.getFullYear();
}

Date.prototype.timeNow = function () {
     return ((this.getHours() < 10)?"0":"") + this.getHours() +":"+ ((this.getMinutes() < 10)?"0":"") + this.getMinutes() +":"+ ((this.getSeconds() < 10)?"0":"") + this.getSeconds();
}

function submitForm() {
  ErrText = validateForm();

  if (ErrText.length){
	$('#popup-error').html(ErrText);
	$('.popup__error').removeClass('disactive');
	$('.popup__error').addClass('active');
  }
  else{
	ym(89146903,'reachGoal','lid');

	var datetime = new Date().today() + " " + new Date().timeNow();
	$('#form_datetime').val(datetime);

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
