var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');
var listElement = document.querySelector('#app ul');



buttonElement.addEventListener("click", Buscar);
   
function Buscar(){

  var cep = inputElement.value;
  axios
  .get(`https://brasilapi.com.br/api/cep/v1/${cep}`)
  .then(response => {
    var cepconsult = response.data;
    listElement.innerHTML = '';
    mostraDados(cepconsult);    
  })
  .catch(error => {
    alert("Não foi possível efetuar a busca!");
    renderError(error);
  });

  
}

function mostraDados({cep, state, city, neighborhood, street}){
    var cepItem = document.createElement('li');    
    listElement.appendChild(cepItem);
    var endereco = document.createTextNode(`Rua: ${street} - ${neighborhood},  ${city} -
    Estado: ${state}`);
    cepItem.appendChild(endereco);
    inputElement.value = "";
}


