
/*======================================== Mudança nos cards de planos - página do produto =====================================*/

const flr = document.getElementById('flright')
const fll = document.getElementById('flleft')

const planA = document.getElementById('plana')
const planB = document.getElementById('planb')
const planC = document.getElementById('planc')





flr.addEventListener('click', function changeCardRight() {

    if (planA.style.display == 'flex') {
        planA.style.display = 'none'
        planB.style.display = 'flex'
        planC.style.display = 'none'
    } else if (planB.style.display == 'flex') {
        planA.style.display = 'none'
        planB.style.display = 'none'
        planC.style.display = 'flex'

    } else {
        planA.style.display = 'flex'
        planB.style.display = 'none'
        planC.style.display = 'none'
    }
})


fll.addEventListener('click', function changeCardLeft() {


    if (planA.style.display == 'flex') {
        planA.style.display = 'none'
        planB.style.display = 'none'
        planC.style.display = 'flex'
    } else if (planC.style.display == 'flex') {
        planA.style.display = 'none'
        planB.style.display = 'flex'
        planC.style.display = 'none'

    } else {
        planA.style.display = 'flex'
        planB.style.display = 'none'
        planC.style.display = 'none'
    }
})


/*======================================== Mudança estética na validação dos campos =====================================*/

function showErr(input, span) {
    input.style.border = '2px solid red';
    span.style.display = 'block';
}


function removeErr(input, span) {
    input.style.border = '2px solid black';
    span.style.display = 'none';
}



/*======================================== Mudanças de display das páginas Login e Recuperação de senha =====================================*/

function changeDisplay(page) {
    if (page == 'recovery') {
        dpNone.style.display = 'none';
        ttChange.innerText = 'E-mail de recuperação de senha enviado com sucesso!';
        pChange.innerText = 'Enviamos para o seu e-mail uma mensagem com instruções para redefinir sua senha. Verifique se a nossa mensagem não foi parar no seu lixo eletrônico.';
        btnReturn.style.display = 'block';
        btnRecovery.style.display = 'none';
    } else if (page == 'login') {
        dpLogin.style.display = 'none';
        dpLine.style.display = 'none';
        dpOption.style.display = 'none';
        msgLogin.innerHTML = 'Login realizado com sucesso!';
        msgLogin.style.display = 'block';
    }  else if (page == 'waitlist') {
        imgTop.style.display = 'none';
        dpWL.style.display = 'none';
        txtWL.innerHTML = 'Inscrição realizada com sucesso!';
        txtWL.style.display ='flex';
        txtWL.style.margin = '30%';

    } 
}

/*======================================== Mudanças de display da página lista de espera =====================================*/


function fillTheForm (data){
    if (data != null){
    address.value = data.logradouro;
    neighborhood.value = data.bairro;
    city.value = data.localidade;
    state.value = data.uf;
} else {
    address.value = '';
    neighborhood.value = '';
    city.value = '';
    state.value = '';

}


}



