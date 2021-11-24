import calcTip from './calcTip.js'
import calcTipCustom from './calcTipCustom.js'
const tip = Array.from(document.querySelectorAll('.tip'))
const CustomInput = document.querySelector('.tip-custom')

CustomInput.addEventListener('keyup', function(){
  calcTipCustom()
})

tip[0].addEventListener('click', function(){
  calcTip(0, 1.05)
})

tip[1].addEventListener('click', function(){
  calcTip(1, 1.1)
})

tip[2].addEventListener('click', function(){
  calcTip(2, 1.15)
})

tip[3].addEventListener('click', function(){
  calcTip(3, 1.25)
})

tip[4].addEventListener('click', function(){
  calcTip(4, 1.5)
})