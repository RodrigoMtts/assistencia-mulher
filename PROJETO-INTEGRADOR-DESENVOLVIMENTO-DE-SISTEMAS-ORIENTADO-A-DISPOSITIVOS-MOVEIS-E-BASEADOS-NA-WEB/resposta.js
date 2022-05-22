function resposta() {  

    let violencias = document.getElementById("violencias")

    if (violencias){
        var parametro = location.search.substring(1, location.search.length).split('=')[1]
        document.getElementById('violencias').innerHTML = parametro;
    }  
}

resposta()

