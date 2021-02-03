var palavra;
var traducao;
var contLinha = 0;


function lerPalavras(linha) {

    var quantlines;
    $(document).ready(function() {

        $.ajax({
            type: "GET",
            url: "translation/sp-pt/sp-gente.txt",
            dataType: "text",
            success: function(data) {

                //le o arquivo e coloca cada linha dentro do vetor quatLines
                lines = data.split('\n');
                palavra = lines[linha];


                var outPalavra = document.getElementById("outPalavra");
                outPalavra.textContent = palavra;
                outPalavra.textContent = "Traduza a palavra: " + palavra + "\n";

            }
        });


    });
}

function lerTradução(linha) {

    $(document).ready(function() {

        $.ajax({
            type: "GET",
            url: "translation/sp-pt/sp-gente_trans.txt",
            dataType: "text",
            success: function(data) {

                //le o arquivo e coloca cada linha dentro do vetor quatLines
                lines = data.split('\n');
                traducao = lines[linha];

            }
        });
    });


}

function pegaPalavras() {

    lerPalavras(contLinha);
    lerTradução(contLinha);


}



function traduzirPalavra() {


    var inTraducao = document.getElementById("inTraducao");
    var outResposta = document.getElementById("outResposta");


    userTraducao = inTraducao.value;

    if (traducao == userTraducao) {
        outResposta.textContent = "Parabéns, você acertou a tradução";
    } else {
        outResposta.textContent = "Poxa! Na próxima você consegue. Continue praticando!";
    }

    contLinha++;
    palavra = "";
    traducao = "";

    pegaPalavras();

}

//cria uma referencia ao elemento btTraduzir
var btTraduzir = document.getElementById("btTraduzir");
btTraduzir.addEventListener("click", traduzirPalavra);

//cria uma referencia ao elemento btPróximo
var btProximo = document.getElementById("btProxima");
btProximo.addEventListener("click", traduzirPalavra);



pegaPalavras();