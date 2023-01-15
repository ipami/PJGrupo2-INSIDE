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
    


