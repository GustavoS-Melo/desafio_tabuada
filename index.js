function tabuada(){
    let num = window.document.getElementById('num')
    let end = document.getElementById('end')
    if (num.value.lenght == 0 || end.value.lenght == 0) {
        window.alert('[ERRO] nada foi digitado')
    } else {
        let n = Number(num.value)
        let e = Number(end.value)
        let x = 0
        let r = ''
        let res = window.document.getElementById('resposta')
        res.innerHTML = `a tabuada do ${n} é: <br>`
        do {
            r = n * x
            res.innerHTML += `${x} x ${n} = ${r} <br>`
            x++

        } while (x <= e);
    }
}