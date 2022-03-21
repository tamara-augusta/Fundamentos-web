/* 
Case Sensitive = reconhece letras maisculas e minusculas

por Tag: getElementoByTagName()
por Id: getElementoByTagId()
por Nome: getElementoByTagId()
por Seletor: getElementoByClassName()
por Classe: querySelector ()
*/

let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector('#mapa')

nome.style.width = '100%'
email.style.width = '100%'

function validaNome() {
    let txtNome = document.querySelector('#txtNome')
    if (nome.value.length < 3){
        alert('nome invalido')
        txtNome.innerHTML = 'Nome Invalido'
        txtNome.style.color = 'red'
    }else {
        txt.innerHTML = 'Nome Válido'
        txtEmail.style.color = 'green'
        nomeOk = true
    }

}

function validaEmail() {
    txtEmail.style.color = ('#email')

    if(email.value.indexOf ('@') == - 1 || email.value.indexOf('.') == -1) {
        txtEmail.innerHTML = 'E-mail inválido'
        txtEmail.style.color = 'red'
    } else {
        txtEmail.innerHTML = 'E-mail inválido'
        txtEmail.style.color = 'green'
        emailOk = true
    }
}

function validaNome() {
    let txtAssunto = document.querySelector('#txtassunto')

    if (assunto.value.length >= 100) {
        txtAssunto.innerHTML = 'Texto é muito grande, digite no máximo 100 caracteres'
        txtAssunto.style.color ='red'
        txtAssunto.style.display = 'block'
    } else {
        txtAssunto.style.display = 'none'
        assuntoOk = true
    }
}

function enviar() {
    if (nomeOk == true && email == true && assuntoOK == true) {
        alert('Fromulário enviado com sucesso!')
    } else {
        alert('Preencha o formulário corretamenete antes de enviar...')
    }
}

function mapaZoom() {
    mapa.style.width = '800px'
    mapa.style.height = '600px'

}

function mapaNormal() {
    mapa.style.width = '600px'
    mapa.style.height = '450px'

}
