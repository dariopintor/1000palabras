function pegaPalavras() {


    var palavra;
    var traducao;

    palavra = "mono";
    traducao = ""

    var outPalavra = document.getElementById("outPalavra");
    outPalavra.textContent = "mono";
    outPalavra.textContent = "Traduza a palavra: " + palavra + "\n";

}

pegaPalavras();

function traduzirPalavra() {



    var inTraducao = document.getElementById("inTraducao");
    var outResposta = document.getElementById("outResposta");


    traducao = inTraducao.value;

    if (traducao == "macaco") {
        outResposta.textContent = "Parabéns, você acertou a tradução";
    } else {
        outResposta.textContent = "Poxa! Na próxima você consegue. Continue praticando!";
    }

}

//cria uma referencia ao elemento btTraduzir
var btTraduzir = document.getElementById("brTraduzir");
btTraduzir.addEventListener("click", traduzirPalavra);