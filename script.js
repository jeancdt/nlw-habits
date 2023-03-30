// document.body.style.backgroundColor = "red"
//     trocando a cor de fundo pelo js
// document.querySelector("input").click()
    // mandando o js clicar no 1 input que ele encontrar na pesquisa

// A partir de agora estarei utilizando a biblioteca. O suporte se encontra no link abaixo:
//     https://maykbrito.github.io/libs/NLWSetup/documentation/NLWSetup.html

const form = document.querySelector('form')

const nlwSetup = new NLWSetup(form)

const button = document.querySelector('header button')

button.addEventListener('click', add)
    // comando para clicar para add dias
form.addEventListener('change', save)
    // comando para salvar as alterações feitas no programa

function add () {

    const today = new Date().toLocaleDateString('pt-br').slice(0, -5)
        // comando para transportar a data de hoje, deixando no modo pt-br (d-m-a) e, depois, tirando o ano (DD/MM)
    // const today = "01/03"
        // comando acima é para teste

    const dayExists = nlwSetup.dayExists (today)

    if (dayExists) {
        // Não precisa colocar true do lado, pois já é indentificado como
        alert ('Dia já incluso ❌')
        return
            // return = o programa não passará daqui, ela "trava" o código
    }

    alert ('Conteúdo Salvo ✔')
    nlwSetup.addDay (today)
}

function save () {
    localStorage.setItem('saveChangeHabits', JSON.stringify(nlwSetup.data))
        // comando feito no console, para SALVAR, não está aplicando AINDA
        // Importante: JSON.stringify mudará o objeto para texto, nesse caso o objeto seria o 'nlwSetup.data'
}

const data = JSON.parse(localStorage.getItem('saveChangeHabits')) || {}
    // Importante: JSON.parse mudará o texto para objeto, nesse caso, o texto seriam as alterações feitas pelo user
    // || significa "ou", isso resolverá o erro citado abaixo, em: "nlwSetup.load()"

nlwSetup.setData(data)
nlwSetup.load()
    // OBS.: Antes de alterar, apareceu erro no console, porém, depois ficou normal