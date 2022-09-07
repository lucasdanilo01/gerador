let sliderElement = document.querySelector('#slider')
let buttonElement = document.querySelector('#button')

let sizePassword = document.querySelector('#valor')
let password = document.querySelector('#password')

let containerpassword = document.querySelector('#container-password')

let charset =
  'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&'
let novaSenha = ''

sizePassword.innerHTML = sliderElement.Value

slider.oninput = function () {
  sizePassword.innerHTML = this.Value
}

function generatePassword() {
  let pass = ''
  for (let i = 0, n = charset.length; i < sliderElement.Value; ++i) {
    pass += charset.charAt(Math.floor(Math.random() * n))
  }
  containerpassword.classList.remove('hide')
  password.innerHTML = pass
  novaSenha = pass
}

function copypassword() {
  alert('Senha copiada com sucesso!')
  navigator.clipboard.writeText(novaSenha)
}
