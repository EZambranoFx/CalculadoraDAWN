let funcionPredeterminada=()=>{
    
    const formulario = document.getElementById('formulario')
    formulario.addEventListener('submit', (evento) => {
        evento.preventDefault();
        let valorPorHora=0, interfazHoras=0, testingHoras=0, HTMLHoras=0, CSSHoras=0, JavaScriptsHoras=0, APIHoras=0
        if(parseFloat(document.getElementById('valorPorHora').value)>0){
            valorPorHora=parseFloat(document.getElementById('valorPorHora').value)
        }
        
        if(parseFloat(document.getElementById('interfazHoras').value)>0){
            interfazHoras=parseFloat(document.getElementById('interfazHoras').value)
        }

        if(parseFloat(document.getElementById('testingHoras').value)>0){
            testingHoras=parseFloat(document.getElementById('testingHoras').value)
        }
        
        if(parseFloat(document.getElementById('HTMLHoras').value)>0){
            HTMLHoras=parseFloat(document.getElementById('HTMLHoras').value)
        }

        if(parseFloat(document.getElementById('CSSHoras').value)>0){
            CSSHoras=parseFloat(document.getElementById('CSSHoras').value)
        }

        if(parseFloat(document.getElementById('JavaScriptsHoras').value)>0){
            JavaScriptsHoras=parseFloat(document.getElementById('JavaScriptsHoras').value)
        }

        if(parseFloat(document.getElementById('APIHoras').value)>0){
            APIHoras=parseFloat(document.getElementById('APIHoras').value)
        }

        resultado=(valorPorHora*interfazHoras)+(valorPorHora*testingHoras)+(valorPorHora*HTMLHoras)+(valorPorHora*CSSHoras)+(valorPorHora*JavaScriptsHoras)+(valorPorHora*APIHoras)

        document.getElementById('valorTotal').value=resultado
    })

}

funcionPredeterminada();