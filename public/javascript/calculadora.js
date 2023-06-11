let funcionPredeterminada=()=>{
    
    const formulario = document.getElementById('formulario')
    formulario.addEventListener('submit', (evento) => {
        evento.preventDefault();
        let valorPorHora=parseFloat(document.getElementById('valorPorHora').value)
        let interfazHoras=parseFloat(document.getElementById('interfazHoras').value)
        let testingHoras=parseFloat(document.getElementById('testingHoras').value)
        let HTMLHoras=parseFloat(document.getElementById('HTMLHoras').value)/*new*/
        let CSSHoras=parseFloat(document.getElementById('CSSHoras').value)/*new*/
        let JavaScriptsHoras=parseFloat(document.getElementById('JavaScriptsHoras').value)/*new*/
        let APIHoras=parseFloat(document.getElementById('APIHoras').value)/*new*/

        let resultado=(valorPorHora*interfazHoras)+(valorPorHora*testingHoras)+(valorPorHora*HTMLHoras)+(valorPorHora*CSSHoras)+(valorPorHora*JavaScriptsHoras)+(valorPorHora*APIHoras)

        document.getElementById('valorTotal').value=resultado
    })

}

funcionPredeterminada();
