// function post(url, body) {
//     console.log("Body=", body)
//     let request = new XMLHttpRequest()
//     request.open("POST", url, true)
//     request.setRequestHeader("Content-type", "application/json")
//     request.send(JSON.stringify(body))

//     request.onload = function() {
//         console.log(this.responseText)
//     }

//     return request.responseText
// }

// function obtemListaCheckBox(){
//     var todosCheckBox = document.querySelectorAll("input[type='checkbox'");

//     var listaCheckBox = [];

//     for (var i = 0; i < todosCheckBox.length; i++) {

//         let checkBoxAtual = 
//         {
//             id: todosCheckBox[i].id,
//             marcado:  todosCheckBox[i].checked,
//         };

//         listaCheckBox.push(checkBoxAtual);       
//     }

//     return listaCheckBox;
// }

// function enviaFormolario() {
//     event.preventDefault()
//     let url = "http://127.0.0.1:8080/resposta"

//     let lista = obtemListaCheckBox();

//     post(url, lista)
// }