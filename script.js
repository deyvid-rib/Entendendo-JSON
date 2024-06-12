function buscarCEP(){
    let input = document.getElementById('info-grabber').value;
    const ajax = new XMLHttpRequest;
    ajax.open('GET', 'https://viacep.com.br/ws/' + input + '/json/');
    ajax.send();
    ajax.onload = function(){
        let obj = JSON.parse(this.responseText);
        let cep = obj.cep;
        let logradouro = obj.logradouro;
        let bairro = obj.bairro;
        let localidade = obj.localidade;
        let estado = obj.uf;
        document.getElementById('description').innerHTML = "";
        document.getElementById('info').innerHTML = "CEP: " + cep + "<br> Logradouro: " 
        + logradouro + "<br> Bairro: " + bairro + "<br> Localidade: " + localidade + "<br> Estado: " + estado;
    }
}
function enableCSS(){
    let input = document.getElementById('info-grabber');
    input.style.padding = "15px";
    input.style.fontSize = "20px";
    input.style.borderRadius = "0px";
}

function disableCSS(){
    let input = document.getElementById('info-grabber');
    input.style.padding = "5px";
    input.style.fontSize = "15px";
    input.style.borderRadius = "10px";
}