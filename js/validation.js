const inputEmail = document.querySelector('.email')
const inputPass = document.querySelector('.pass')
const inputPassConfirm = document.querySelector('.confirmpass')
const formLogin = document.querySelector('#formLogin')
const spanEmail = document.querySelector('.span-email')
const spanPass = document.querySelector('.span-pass')
const spanPassConfirm = document.querySelector('.span-passconfirm')
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
const imgTop =  document.querySelector('#imgtop')
const dpWL = document.querySelector('.allwl')
const txtWL = document.querySelector('.wlh2')
const btnWL = document.querySelector('.btnwl')
const inputRG = document.querySelector ('.inputrg')
const inputCEP = document.querySelector('#cep')
const state = document.querySelector('#state')
const address = document.querySelector('#address')
const neighborhood = document.querySelector('#neighborhood')
const city = document.querySelector('#city')
const formWLInputs = document.querySelectorAll('[data-input]')
const spanCEP = document.querySelector('.span-cep')
const passRx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/


/*======================================== Validação dos campos =====================================*/


function emailValidation() {
    if (emailRx.test(inputEmail.value)) {
        removeErr(inputEmail, spanEmail);
    } else {
        showErr(inputEmail, spanEmail);
    }
}

function passValidation (){
    if (passRx.test(inputPass.value)) {
        removeErr(inputPass, spanPass);
    } else {
        showErr(inputPass, spanPass);
    }
}

function passEqual (){
    if (inputPass.value == inputPassConfirm.value) {
        removeErr(inputPassConfirm, spanPassConfirm);
    } else {
        showErr(inputPassConfirm, spanPassConfirm);
    }
}

inputRG.addEventListener('keypress', (e) =>{
    const onlyNum = /[0-9]/;
    const key = String.fromCharCode(e.keyCode);

    if (!onlyNum.test(key)){
        e.preventDefault();
        return;
    }
})

/*======================================== Validação do CEP =====================================*/



function onlyNumber () {
    
}




inputCEP.addEventListener('keypress', (e) =>{
    const onlyNum = /[0-9]/;
    const key = String.fromCharCode(e.keyCode);

    if (!onlyNum.test(key)){
        e.preventDefault();
        return;
    }
})

inputCEP.addEventListener('keyup', (e) =>{
    const inputValue = e.target.value;
    
    if(inputValue.length === 8) {
        getAddress(inputValue)
    }


})



const getAddress = async (cep) => {
    console.log(cep);

try {
    const apiURL = `https://viacep.com.br/ws/${cep}/json/`

    const response = await fetch(apiURL)
    const data = await response.json()
    console.log(data)
    
    if (data.erro == true) { 
        if(!address.hasAttribute('disabled')) {
            testDisabled()
            fillTheForm(null)
        }    
    throw new Error("CEP não localizado")
    }

    if (address.value == ''){ testDisabled()}

    fillTheForm(data)

    removeErr(inputCEP, spanCEP)


} 
catch (Error) { 

    showErr(inputCEP, spanCEP)
    console.log(Error)

}

};

const testDisabled = () => {

    if(neighborhood.hasAttribute('disabled')){
        formWLInputs.forEach ((inp) => {
                inp.removeAttribute('disabled')
        })
    }   else {
        formWLInputs.forEach ((inp) => {
            inp.setAttribute('disabled','disabled')
    })

    } 

}





