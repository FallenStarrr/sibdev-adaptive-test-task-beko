let burger  = document.querySelector('.burger')
let links = document.querySelector('.links')
let cross = document.querySelector('.cross')
burger.addEventListener('click', e => {
      links.classList.add('active')
})
cross.addEventListener('click', e => {
  links.classList.remove('active')
})

