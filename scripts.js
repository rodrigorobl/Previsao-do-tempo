

let chave = "15dbb9fce296f8eadbd83b6f081511a5"

function colocarNaTela(dados){
    
    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
    document.querySelector(".tempo").innerHTML = Math.floor(dados.main.temp) + "°C"
    document.querySelector(".descricao").innerHTML = dados.weather[0].description
    document.querySelector(".umidade").innerHTML = "Umidade: " + dados.main.humidity+"%"
    document.querySelector(".icone").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"

    
    console.log(dados)
}

async function buscarCidade(cidade) {
    let dados = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" + 
        cidade + 
        "&appid=" + 
        chave + 
        "&lang=pt_br" + 
        "&units=metric"
    )
    .then(resposta => resposta.json())

    colocarNaTela(dados)

    
}


function cliqueiNoBotao() {
    let cidade = document.querySelector(".input-cidade").value

    buscarCidade(cidade)
}






//15dbb9fce296f8eadbd83b6f081511a5