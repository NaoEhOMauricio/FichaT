let ingrediente = document.getElementById('txtingrediente');
let quantia = document.getElementById('quantidade');
let preco = document.getElementById('preco')
let Qemb = document.getElementById('quantiaembalagem')
let tabela = document.getElementById('tabela')
let btnAdd = document.getElementById('btnAdd')
let ModoDePreparo = document.getElementById('textarea');
let btnAddObs = document.getElementById('btnAddObs')
let c = 0;
let n = 0
let soma = 0;
let AbIngrediente = document.getElementById('AbaIngrediente')
let AbModo = document.getElementById('AbaModo')
let SomaQuantia = document.getElementById('SomaQuantia')
let TotalSoma = document.getElementById('TotalSoma');
let ListaModo = document.getElementById('ListaModo');
var currentDate = new Date();
const ListaQuantia = [];
const ListaResultado = [];


//------------------------------------------------------------------------------------------------------
function AdicionarIngrediente(){
  // Captura de valores digitados.
  let ValorIngrediente = ingrediente.value;
  let ValorQuantia = quantia.value;
  let ValorPreço = preco.value;
  let ValorQemb = Qemb.value;
  let ValorResultado = ValorQuantia * ValorPreço / ValorQemb;

  // Verifica se algum campo está vazio
  if (ValorIngrediente === "" || ValorQuantia === "" || ValorPreço === "" || ValorQemb === "") {
    alert("Por favor, preencha todos os campos!");
    return;
  }

  c++;
  let NovaLinha = `<tr id="${c}"> 
    <td> ${ValorIngrediente}</td>
    <td> ${ValorQuantia}gr </td>
    <td> R$${ValorPreço} </td>
    <td> ${ValorQemb}gr </td>
    <td> R$${ValorResultado} </td>
    <td> <button onclick="deletar(${c})" class="delete">
      <i class="material-symbols-outlined">
          delete
      </i></button> </td>
    </tr>`;

  ListaResultado.push(ValorResultado);
  ListaQuantia.push(parseFloat(ValorQuantia));
  tabela.innerHTML += NovaLinha;
  
  atualizarQuantia();
  atualizarValor();



  // ingrediente.value = "";
  // quantia.value = "";
  // preco.value = "";
  // Qemb.value = "";
  // ingrediente.focus(); 
}

Qemb.addEventListener("keydown", function(event) {
  // verifica se a tecla pressionada foi Enter
  if (event.keyCode === 13) {
    // chama a função AdicionarIngrediente()
    AdicionarIngrediente();
  }
});
// ====-------------------------------------------------------------------------------------------------------------------------------------------------------=
function adicionarComentario() {
  let Observacao = ModoDePreparo.value;
  
  if (Observacao.trim() === "") {
    alert("O campo de Modo de Preparo está vazio. Por favor, adicione um Modo de Preparo válido.");
    return;
  }

  if ((Observacao !== 0) && (Observacao !== null) && (Observacao != "")) {

    n++

    let novoComentario = `
    
        <li id="cm-${n}" colspan="5">${Observacao}
        <button onclick="deletarComentario('cm-${n}')" class="delete1">
            <i class="material-symbols-outlined">
              delete
            </i>
          </button>
        </li>
        
      
    `

    ListaModo.innerHTML += novoComentario;

    ModoDePreparo.value = ""
    ModoDePreparo.focus()
  }
}
ModoDePreparo.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    adicionarComentario();
  }
});

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

function deletar(id){
  var tarefa = document.getElementById(id);
  const ValorRes = parseFloat(tarefa.children[1].textContent);
  const ValorQuantia = parseFloat(tarefa.children[1].textContent);
  tarefa.remove();
  subtrairArrayQuantia(ValorQuantia)
  subtrairArrayValor(ValorRes)
  atualizarValor()
  atualizarQuantia()
}

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function trocarAba(numero) {
    var aba1 = document.querySelector('.aba1');
    var aba2 = document.querySelector('.aba2');
  
    if (numero === 1) {
      aba1.style.display = 'block';
      aba2.style.display = 'none';
    } else {
      aba1.style.display = 'none';
      aba2.style.display = 'block';
    }
  }

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------





function atualizarValor() {
  const soma = ListaResultado.reduce((total, numero) => total + numero, 0);
  const elementoSoma = document.getElementById("TotalSoma");
  elementoSoma.textContent = soma.toFixed(2);
  
  // Verifica se a lista está vazia
  if (ListaResultado.length === 0) {
    elementoSoma.textContent = 0;
  }
}





  function atualizarQuantia() {
    const soma = ListaQuantia.reduce((total, numero) => total + numero, 0);
    const elementoSoma = document.getElementById("TotalQuantia");
    elementoSoma.textContent = soma.toFixed(1) + "gr";
    
    // Verifica se a lista está vazia
    if (ListaQuantia.length === 0) {
      elementoSoma.textContent = 0;
    }
  }

//   ---------------------------------------------------------------------------------------------------------------------------------------------
function subtrairArrayValor(valor) {
  const index = ListaResultado.indexOf(valor);
  if (index > -1) {
    ListaResultado.splice(index, 1);
  }
  const resultado = ListaResultado.reduce((acumulador, valorAtual) => {
    return acumulador - valorAtual;
  }, 0);
  atualizarValor();
  return resultado;
}


function subtrairArrayQuantia(valor) {
    const index = ListaQuantia.indexOf(valor);
    if (index > -1) {
      ListaQuantia.splice(index, 1);
    }
    const resultado = ListaQuantia.reduce((acumulador, valorAtual) => {
      return acumulador - valorAtual;
    }, 0);
    atualizarQuantia();
    return resultado;
}

function deletarComentario(id) {
  var comentario = document.getElementById(id);
  comentario.remove();
}
function imprimir() {
    window.print();
}


  // atualiza a data no rodapé
  document.getElementById('date').innerHTML = currentDate.toLocaleDateString();
      
  // atualiza a hora no rodapé a cada segundo
  setInterval(function() {
    var currentTime = new Date();
    document.getElementById('time').innerHTML = currentTime.toLocaleTimeString();
  }, 1000);