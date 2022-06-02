const fixed = document.querySelector('#fixed')

function opacity() {

  if (window.innerWidth >= 550) {
  
    if (window.pageYOffset > 200) {
      fixed.classList.add('active-f')
    }

    else{
      fixed.classList.remove('active-f')
    }

  }

  else
    if (window.pageYOffset > 18500) {
      fixed.classList.remove('active-f')
    }

    else{
      fixed.classList.add('active-f')
    }

  
}

window.onscroll=opacity
opacity()