//efeito do botão voltar ao Topo

const voltarAoTopo = () => {
    window.scrollTo(
        {
            top: 0, 
            left: 0, 
            behavior:'smooth'
        }
    )
}

//Validação de Login

const login = () => {
    let logado = 0;
    let usuario = document.querySelector("#usuario").value;
    let senha = document.querySelector("#senha").value;

    if (usuario == "admin" && senha == 123456+"@") {    
        window.location = "index.html"
        logado = 1;
    }

    if (logado == 0) {
        alert("dados incorretos");
    }
}

//Ativar alert no botão cadastrar

const cadastrar = () => {
    alert("Cadastrado com sucesso !");
    window.location = "index.html";
}
