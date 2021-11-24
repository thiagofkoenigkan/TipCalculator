export default function calcTipCustom(){
  const tip = Array.from(document.querySelectorAll('.tip'))
  const erroPeople = document.getElementById('people-erro')
  const inputPeople = document.getElementById('inputPeople')
  let bill = Number.parseFloat(document.querySelector('.bill').value)
  let numPeople = Number.parseFloat(document.querySelector('.numberpeople').value)
  const CustomInput = document.querySelector('.tip-custom')
  const CustomNumber = Number.parseFloat(document.querySelector('.tip-custom').value)
  if(numPeople === 0) {
    erroPeople.classList.remove('erro-inativo')
    erroPeople.classList.add('erro-ativo')
    inputPeople.classList.add('erroinput')
  } else{
    erroPeople.classList.add('erro-inativo')
    erroPeople.classList.remove('erro-ativo')
    inputPeople.classList.remove('erroinput')

  tip.forEach(function(t){
    t.classList.remove('ativo')
  })

  let tipA = (Number.parseFloat((bill / numPeople).toFixed(2)))
  let tipB = (Number.parseFloat((tipA * ((CustomNumber/100)+1)).toFixed(2)))
  let tipC = (Number.parseFloat((tipB - tipA).toFixed(2)))
  const tipAmount = document.querySelector('.amountP')
  const tipTotal = document.querySelector('.totalP')
  tipAmount.innerHTML = `$${tipC}`
  tipTotal.innerHTML = `$${tipB}` 
}
}