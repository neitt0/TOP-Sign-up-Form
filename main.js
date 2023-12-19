const inputs = document.querySelectorAll('input');
const fakeBtn = document.querySelector("[type='button']")
const hideDiv = document.querySelector('.hide')

inputs.forEach((input) => {
  input.addEventListener('focus', (event) => {
    const label = document.querySelector(`[for=${input.id}]`)

    if (label.parentElement.getAttribute('class') != 'shown') {
      label.style.cssText = `font-size: 1rem;
                             top: -3px;
                             color: white;
                            `
    } else if (label.parentElement.getAttribute('class') == 'shown') {
      label.style.cssText = `font-size: 1rem;
                             top: -20px;
                             color: white;
                            `
    } else {
      console.log('Something went wrong')
    }
  })  
})

fakeBtn.addEventListener('click', (event) => {
  hideDiv.style.cssText = 
  `
  height: 550px;
  margin-bottom: 7rem;
  `

  fakeBtn.style.cssText =
  `
  display: none;
  `
})