function validarFormulario() {
    let nome = document.getElementById('nome').value;
    
    let quantidadeErros = 0;

    if(nome.trim().length == 0){
        formError("nome");
        quantidadeErros++;
        // alert("O campo nome é obrigatório!");
    }
    else{
        reiniciaBorda("nome");
    }

    let sobrenome = document.getElementById('sobrenome').value;
    
    if(sobrenome.trim().length == 0){
        formError("sobrenome");
        quantidadeErros++;
        // alert("O campo sobrenome é obrigatório!");
    }
    else{
        reiniciaBorda("sobrenome");
    }
    let email = document.getElementById('email').value;
    
    if(email.trim().length == 0){
        formError("email");
        quantidadeErros++;
        // alert("O campo sobrenome é obrigatório!");
    }
    else{
        reiniciaBorda("email");
    }
    let pais = document.getElementById('pais').value;
    
    if(pais.trim().length == 0){
        formError("pais");
        quantidadeErros++;
        // alert("O campo sobrenome é obrigatório!");
    }
    else{
        reiniciaBorda("pais");
    }
    let ddd = document.getElementById('ddd').value;
    
    if(ddd.trim().length == 0){
        formError("ddd");
        quantidadeErros++;
        // alert("O campo sobrenome é obrigatório!");
    }
    else{
        reiniciaBorda("ddd");
    }
    let telefone = document.getElementById('telefone').value;
    
    if(telefone.trim().length == 0){
        formError("telefone");
        quantidadeErros++;
        // alert("O campo sobrenome é obrigatório!");
    }
    else{
        reiniciaBorda("telefone");
    }
    let cep = document.getElementById('cep').value;
    
    if(cep.trim().length == 0){
        formError("cep");
        quantidadeErros++;
        // alert("O campo sobrenome é obrigatório!");
    }
    else{
        reiniciaBorda("cep");
    }
    let rua = document.getElementById('rua').value;
    
    if(rua.trim().length == 0){
        formError("rua");
        quantidadeErros++;
        // alert("O campo sobrenome é obrigatório!");
    }
    else{
        reiniciaBorda("rua");
    }
    let numero = document.getElementById('numero').value;
    
    if(numero.trim().length == 0){
        formError("numero");
        quantidadeErros++;
        // alert("O campo sobrenome é obrigatório!");
    }
    else{
        reiniciaBorda("numero");
    }
    let apto = document.getElementById('apto').value;
    
    if(apto.trim().length == 0){
        formError("apto");
        quantidadeErros++;
        // alert("O campo sobrenome é obrigatório!");
    }
    else{
        reiniciaBorda("apto");
    }
    let bairro = document.getElementById('bairro').value;
    
    if(bairro.trim().length == 0){
        formError("bairro");
        quantidadeErros++;
        // alert("O campo sobrenome é obrigatório!");
    }
    else{
        reiniciaBorda("bairro");
    }
    let cidade = document.getElementById('cidade').value;
    
    if(cidade.trim().length == 0){
        formError("cidade");
        quantidadeErros++;
        // alert("O campo sobrenome é obrigatório!");
    }
    else{
        reiniciaBorda("cidade");
    }
    let estado = document.getElementById('estado').value;
    
    if(estado.trim().length == 0){
        formError("estado");
        quantidadeErros++;
        // alert("O campo sobrenome é obrigatório!");
    }
    else{
        reiniciaBorda("estado");
    }

    if(quantidadeErros > 0){
        alert("Existem " + quantidadeErros + " erros no formulário!");
        quantidadeErros = 0;
    }
    else{
        alert("Formulário enviado com sucesso!");
        reiniciaTodasAsBordas();
    }
}

function formError(idCampo){
    document.getElementById(idCampo).style.border = "2px solid red";
}

function reiniciaBorda(idCampo){
    document.getElementById(idCampo).style.border = "transparent";
}