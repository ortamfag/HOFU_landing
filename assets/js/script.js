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

// modals 
const makeModal = modalSel => {
	const modalEl = document.querySelector(modalSel + 'Popup');
		btnEl = document.querySelector(modalSel + '__preview-1'),
    
		closeEl = document.querySelector(modalSel + 'Cross')
		closeBody = document.querySelector('.popup')
		bg = document.querySelector(modalSel + 'Bg')
		

	btnEl.addEventListener('click', () => modalEl.classList.add('open'));
	closeEl.addEventListener('click', () => modalEl.classList.remove('open'));
	bg.addEventListener('click', () => modalEl.classList.remove('open'));
}

makeModal('#modal')
