const inputEmail = document.querySelector('.email')
const inputPass = document.querySelector('.pass')
const formLogin = document.querySelector('#formLogin')
const spanEmail = document.querySelector('.span-email')
const emailRx = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
const btnRecovery = document.querySelector('.recovery')
const btnReturn = document.querySelector('.return')
const formRec = document.querySelector('#formrecv')
const dpNone = document.querySelector('.hddrecovery')
const dpLogin = document.querySelector('.hddmsg')
const dpLine = document.querySelector('.hddline')
const dpOption = document.querySelector('.hddop')
const msgLogin = document.querySelector('.msgsucess')
const ttChange = document.querySelector('.h4change')
const pChange = document.querySelector('.pchange')


/*======================================== Validação dos campos =====================================*/


function emailValidation() {
    if (emailRx.test(inputEmail.value)) {
        removeErr(inputEmail, spanEmail);
    } else {
        showErr(inputEmail, spanEmail);
    }
}


