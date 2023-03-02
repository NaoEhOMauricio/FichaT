let ingrediente = document.getElementById('txtingrediente');
let quantia = document.getElementById('quantidade');
let preco = document.getElementById('preco')
let Qemb = document.getElementById('quantiaembalagem')
let tabela = document.getElementById('tabela')
let btnAdd = document.getElementById('btnAdd')
let ModoDePreparo = document.getElementById('textarea');
let btnAddObs = document.getElementById('btnAddObs')
let c = 0;
let AbIngrediente = document.getElementById('AbaIngrediente')
let AbModo = document.getElementById('AbaModo')

   
function AdicionarIngrediente(){
    //Caputra de valores digitados.
    let ValorIngrediente = ingrediente.value;
    let ValorQuantia = quantia.value;
    let ValorPreço = quantia.value;
    let ValorQemb = Qemb.value;
   

    if((ValorIngrediente !== "") && (ValorIngrediente !== 0) && (ValorIngrediente !== undefined)){
        c++
        let NovaLinha = `<tr id="${c}"> 
        <td> ${ValorIngrediente} </td>
        <td> ${ValorQuantia} </td>
        <td> ${ValorPreço} </td>
        <td> ${ValorQemb} </td>
        <td> ${ValorQuantia * ValorPreço / ValorQemb} </td>
        <td> <button onclick="deletar(${c})" class="delete">
        <i class="material-symbols-outlined">
            delete
        </i></button> </td>
        </tr>
        `
    
    tabela.innerHTML += NovaLinha;
    
    ingrediente.innerHTML = "";
    ingrediente.focus()
    quantia.innerHTML = "";
    quantia.focus()
    preco.innerHTML= "";
    preco.focus()
    Qemb.innerHTML= "";
    Qemb.focus()
    }
}

function adicionarComentario(){
    let Observacao = ModoDePreparo.value
    let n = 0
    if((Observacao !== 0 )&&(Observacao !== null) && (Observacao != "")){
        
        n++
   
    let novocomentario = `  <tr id="${n}"> <td colspan="5"> ${Observacao} </td>
    <td id ="${n}"> <button onclick="deletar(${n})" class="delete">
    <i class="material-symbols-outlined">
        delete
    </i></button> </td>
    </tr>
    `

        tabela.innerHTML += novocomentario;

        Observacao.text = ""
        Observacao.focus()
}
}
function deletar(id){
    var tarefa = document.getElementById(id);
    tarefa.remove();
}

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