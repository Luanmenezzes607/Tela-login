const nome = document.querySelector('#nome')
const usuario = document.querySelector('#usuario')
const senha = document.querySelector('#senha')
const confirmarSenha = document.querySelector('#confirmar-senha')
const btnRegister = document.querySelector(".btn-register")
const eye1 = document.querySelector('.eye1')
const eye2 = document.querySelector('.eye2')

nome.addEventListener('keyup', ()=>{
    const spanNome = document.querySelector('#span-nome')

    if(nome.value.length < 4){
        spanNome.style.display = 'block'
        nome.style.border = '1.3px solid red'
    }else{
         spanNome.style.display = 'none'
         nome.style.border = '1.3px solid green'
    }
})

usuario.addEventListener('keyup', ()=>{
    const spanUsuario = document.querySelector('#span-usuario')

    if(usuario.value.length < 6){
        spanUsuario.style.display = 'block'
        usuario.style.border = '1.3px solid red'
    }else{
         spanUsuario.style.display = 'none'
         usuario.style.border = '1.3px solid green'
    }
})

senha.addEventListener('keyup', ()=>{
    const spanSenha = document.querySelector('#span-senha')

    if(senha.value != ''){
        document.querySelector('.lock1').style.display = 'none'
        document.querySelector('.eye1').style.display = 'block'
    }else{
        document.querySelector('.lock1').style.display = 'block'
        document.querySelector('.eye1').style.display = 'none'
    }


    if(senha.value.length < 4){
        spanSenha.style.display = 'block'
        senha.style.border = '1.3px solid red'
    }else{
         spanSenha.style.display = 'none'
         senha.style.border = '1.3px solid green'
    }
})

confirmarSenha.addEventListener('keyup', ()=>{
    const spanConfirmar = document.querySelector('#span-confirmar')

    /* let lock2 = document.querySelector('.lock2')
    let eye2 = document.querySelector('.eye2') */

   
    if(confirmarSenha.value != senha.value){
        spanConfirmar.style.display = 'block'
        confirmarSenha.style.border = '1.3px solid red'
    }else{
        spanConfirmar.style.display = 'none'
        confirmarSenha.style.border = '1.3px solid green'
    }

    if(confirmarSenha.value != ''){
        document.querySelector('.lock2').style.display = 'none'
        document.querySelector('.eye2').style.display = 'block'
    }else{
        document.querySelector('.lock2').style.display = 'block'
        document.querySelector('.eye2').style.display = 'none'
        document.querySelector('#confirmar-senha').style.border = 'none'
        document.querySelector('#span-confirmar').style.display = 'none'
    }


})

btnRegister.addEventListener('click', ()=>{
    if(nome.value && usuario.value && senha.value && confirmarSenha.value != ''){
        alert('deu certo')
    }else{
        alert('Preencha todos os campos para continuar!')
    }

    window.location.href = 'index.html'
})

eye1.addEventListener('click', ()=>{
    if(senha.type == 'password'){
        senha.setAttribute('type', 'text')
        eye1.classList.remove('fa-eye')
        eye1.classList.add('fa-eye-slash')
    }else{
        senha.setAttribute('type', 'password')
        eye1.classList.add('fa-eye')
        eye1.classList.remove('fa-eye-slash')
    }
})

eye2.addEventListener('click', ()=>{

    if(confirmarSenha.type == 'password'){
        confirmarSenha.setAttribute('type', 'text')
        eye2.classList.remove('fa-eye')
        eye2.classList.add('fa-eye-slash')
    }else{
        confirmarSenha.setAttribute('type', 'password')
        eye2.classList.add('fa-eye')
        eye2.classList.remove('fa-eye-slash')
    }
})


