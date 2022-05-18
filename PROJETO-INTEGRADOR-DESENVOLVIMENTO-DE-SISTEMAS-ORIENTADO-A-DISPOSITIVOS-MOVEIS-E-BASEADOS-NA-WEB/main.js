function get(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function criaLinha(pergunta) {

  let linha = document.createElement("div");
  linha.setAttribute('class', 'ic-class-form-row col-12')

  linha.innerHTML = `    
    <div class="ic-class-form-check-legal form-check form-check-inline">
        <div class="col-10 m-0 p-0">
            <label class="ic-class-form-check-label-legal form-check-label" for="${pergunta.id}">${pergunta.pergunta}</label>
        </div>
        <div class="col-2 text-center m-0 p-0 justify-content-center align-items-center">
            <input id="${pergunta.id}" type="checkbox" class="ic-class-form-check-input-legal"
            data-ic-form-field="${pergunta.id}" name="${pergunta.id}" />
        </div>                             
    </div>`;

    return linha;
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
        .then( res =>  {
          if(res.status === 201){
            alert("Dados salvos com sucesso")
            // console.log(res.body.json())
            // alert('boyd: ' + res.body.json())
            // formularioCadastro.reset()
          }else{
            alert("Algo deu errado, tente novamente mais tarde")
            return new Error("Deu ruim")
          }
        })
        .catch(function(err){
          console.log("Erro no fetch")
          return new Error("Deu ruim " + err)
        })

        console.log("A abaixo")
        console.log(a)
})

main()