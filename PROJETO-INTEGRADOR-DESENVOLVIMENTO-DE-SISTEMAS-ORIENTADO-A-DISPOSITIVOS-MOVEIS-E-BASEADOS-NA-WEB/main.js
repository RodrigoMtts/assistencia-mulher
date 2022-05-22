function get(url) {
  let request = new XMLHttpRequest()
  request.open("GET", url, false)
  request.send()
  return request.responseText
}

function criaLinha(pergunta) {

  divLinha = document.createElement("div");
  divLinha.setAttribute('class', 'ic-class-form-row col-12')

  divFormCheck = document.createElement("div");
  divFormCheck.setAttribute('class', 'ic-class-form-check-legal form-check form-check-inline')

  divLabel = document.createElement("div");
  divLabel.setAttribute('class', 'col-10 m-0 p-0')

  var label = document.createElement('label');
  label.setAttribute('class', 'ic-class-form-check-label-legal form-check-label')
  label.setAttribute('for', pergunta.id)

  label.innerHTML = pergunta.pergunta

  divLabel.appendChild(label);

  divCheckBox = document.createElement("div");
  divCheckBox.setAttribute('class', 'col-2 text-center m-0 p-0 justify-content-center align-items-center')

  var checkBox = document.createElement('input');
  checkBox.setAttribute('id', pergunta.id)
  checkBox.setAttribute('type', 'checkbox')
  checkBox.setAttribute('class', 'ic-class-form-check-input-legal')
  checkBox.setAttribute('data-ic-form-field', pergunta.id)
  checkBox.setAttribute('name', pergunta.id)

  divCheckBox.appendChild(checkBox);

  divFormCheck.appendChild(divLabel);
  divFormCheck.appendChild(divCheckBox);

  divLinha.appendChild(divFormCheck);

  return divLinha;
}

function main() {
  let data = get("http://127.0.0.1:8080/");

  let perguntas = JSON.parse(data);

  let listaPerguntas = document.getElementById("listaPerguntas");
  perguntas.forEach(element => {
    let linha = criaLinha(element);
    listaPerguntas.appendChild(linha);
  });
}

const form = document.querySelector("#form");

form.addEventListener("submit", (event) => {
  event.preventDefault()
  console.log("############")
  console.log(form)
  const data = new FormData(form);
  const json = Object.fromEntries(data.entries());
  console.log(data)
  console.log(json);
  console.log(json[12])

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(json)
  }

  let a = fetch('http://localhost:8080/resposta', options)
    .then(res => {
      if (res.status === 201) {
        alert("Dados salvos com sucesso")
        // console.log(res.body.json())
        // alert('boyd: ' + res.body.json())
        // formularioCadastro.reset()
      } else {
        alert("Algo deu errado, tente novamente mais tarde")
        return new Error("Deu ruim")
      }
    })
    .catch(function (err) {
      console.log("Erro no fetch")
      return new Error("Deu ruim " + err)
    })

  console.log("A abaixo")
  console.log(a)
})

main()