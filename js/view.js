/*======================================== Efeito de mudança de texto na página inicial =====================================*/

let div = document.getElementById('textinfo');
let txt = document.getElementById('fixo');
let words = ['Informação...', 'Investigação...', 'Infraestrutura...', 'I N S I D E'];

function write(str, done) {
    let char = str.split('').reverse();
    let typer = setInterval(function () {
        if (str == 'I N S I D E') {
            txt.style.visibility = "hidden"
            if (!char.length) {
                clearInterval(typer);
                return setTimeout(done, 4000);
            }
        } else {
            txt.style.visibility = "visible"
            if (!char.length) {
                clearInterval(typer);
                return setTimeout(done, 800);
            }
        }
        let next = char.pop();
        div.innerHTML += next;
    }, 100);
}

function clear(done) {
    let char = div.innerHTML;
    let nr = char.length;
    let typer = setInterval(function () {
        if (nr-- == 0) {
            clearInterval(typer);
            return done();
        }
        div.innerHTML = char.slice(0, nr);
    }, 100);
}

function typing(content, el) {
    let moment = -1;
    function next(cb) {
        if (moment < content.length - 1) moment++;
        else moment = 0;
        let str = content[moment];
        write(str, function () {
            clear(next);
        });
    }
    next(next);
}
typing(words);

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
    }
}