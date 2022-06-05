const fixed = document.querySelector('#fixed')

function opacity() {

  if (window.innerWidth >= 590) {
  
    if (window.pageYOffset > 200) {
      fixed.classList.add('active-f')
    }

    else{
      fixed.classList.remove('active-f')
    }

  }

  else
    if (window.pageYOffset > 8000) {
      fixed.classList.remove('active-f')
    }

    else{
      fixed.classList.add('active-f')
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

btnEl1.addEventListener('click', () => modalEl.classList.add('open'));
btnEl2.addEventListener('click', () => modalEl.classList.add('open'));
btnEl3.addEventListener('click', () => modalEl.classList.add('open'));
btnEl4.addEventListener('click', () => modalEl.classList.add('open'));

closeEl.addEventListener('click', () => modalEl.classList.remove('open'));
bg.addEventListener('click', () => modalEl.classList.remove('open'));


