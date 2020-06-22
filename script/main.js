function validaCep(cep){
    if (cep != "" && cep.replace("-","").length === 8) {
        return true;
    } else {
        return false
    }
}

function consultaCep(){
    var cep = document.getElementById("cep").value;

    if (validaCep(cep)){
        $(".progress").show();
        $(".cep-table").hide();
        
        setTimeout(() => {  
            var url = "https://viacep.com.br/ws/" + cep + "/json/";
            $.ajax({
                url: url,
                type: "GET",
                success: function(response){
                    if (response.erro){
                        alert("cep inválido!")
                        $(".progress").hide();
                        $(".cep-table").hide();
                    } else {
                        $("#cep-pesquisado").html("CEP: " + response.cep);
                        $("#logradouro").html(response.logradouro);
                        $("#bairro").html(response.bairro);
                        $("#localidade").html(response.localidade);
                        $("#uf").html(response.uf);
                        $(".cep-table").show();
                        $(".progress").hide();}
                }
            });
        }, 500);
    } else{
        $(".progress").hide();
        $(".cep-table").hide();
        alert("Digite um cep válido!");
    }
};

$(function(){
    $(".cep-table").hide();
    $(".progress").hide();
});