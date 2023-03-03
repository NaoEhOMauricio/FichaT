let ingrediente = document.getElementById('txtingrediente');
let quantia = document.getElementById('quantidade');
let preco = document.getElementById('preco')
let Qemb = document.getElementById('quantiaembalagem')
let tabela = document.getElementById('tabela')
let btnAdd = document.getElementById('btnAdd')
let ModoDePreparo = document.getElementById('textarea');
let btnAddObs = document.getElementById('btnAddObs')
let c = 0;
let soma = 0;
let AbIngrediente = document.getElementById('AbaIngrediente')
let AbModo = document.getElementById('AbaModo')
let SomaQuantia = document.getElementById('SomaQuantia')
const ListaQuantia = [];
const ListaResultado = [];


//------------------------------------------------------------------------------------------------------
function AdicionarIngrediente(){
    //Caputra de valores digitados.
    let ValorIngrediente = ingrediente.value;
    let ValorQuantia = quantia.value;
    let ValorPreço = preco.value;
    let ValorQemb = Qemb.value;
    let ValorResultado = ValorQuantia * ValorPreço / ValorQemb;
  
    if((ValorIngrediente !== "") && (ValorIngrediente !== 0) && (ValorIngrediente !== undefined)){
      c++
      let NovaLinha = `<tr id="${c}"> 
        <td> ${ValorIngrediente}</td>
        <td> ${ValorQuantia}gr </td>
        <td> R$${ValorPreço} </td>
        <td> ${ValorQemb}gr </td>
        <td> ${ValorResultado} </td>
        <td> <button onclick="deletar(${c})" class="delete">
          <i class="material-symbols-outlined">
              delete
          </i></button> </td>
        </tr>
      `;
  
      ListaResultado.push(ValorResultado);
      ListaQuantia.push(parseFloat(ValorQuantia));
      tabela.innerHTML += NovaLinha;
      atualizarSoma();
      atualizarQuantia();
  
    //   ingrediente.value = "";
    //   quantia.value = "";
    //   preco.value = "";
    //   Qemb.value = "";
    //   ingrediente.focus(); 
    }
  }

// ====-------------------------------------------------------------------------------------------------------------------------------------------------------=
function adicionarComentario(){
    let Observacao = ModoDePreparo.value
    let n = 0
    if((Observacao !== 0 )&&(Observacao !== null) && (Observacao != "")){
        
        n++
   
    let novocomentario = `  <tr id="${n}"> <td colspan="5"> ${Observacao} </td>
    <td id ="${n}"> <button onclick="deletarCm(${n})" class="delete">
    <i class="material-symbols-outlined">
        delete
    </i></button> </td>
    </tr>
    `

        tabela.innerHTML += novocomentario;

        ModoDePreparo.value = ""
        ModoDePreparo.focus()
}

}

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

function deletar(id){
    var tarefa = document.getElementById(id);
    const valorResultado = parseFloat(tarefa.children[4].textContent);
    const ValorQuantia = parseFloat(tarefa.children[4].textContent);
    tarefa.remove();
    subtrairArray(valorResultado);
    subtrairArrayQuantia(ValorQuantia)
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
function atualizarSoma() {
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
function subtrairArray(valor) {
    const index = ListaResultado.indexOf(valor);
    if (index > -1) {
      ListaResultado.splice(index, 1);
    }
    const resultado = ListaResultado.reduce((acumulador, valorAtual) => {
      return acumulador - valorAtual;
    }, 0);
    atualizarSoma();
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

function deletarCm(id){
    var tarefa = document.getElementById(id);
    tarefa.remove();
   
}
