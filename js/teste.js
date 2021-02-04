//variáveis globais
var palavra;
var traducao;
var contLinha = 0;


//le as palavras origem
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




            }
        });


    });
}

// ler palavras destino 
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

//pegas as palavras no arquivos de entrada
function pegaPalavras() {

    //pega as palavras 
    lerPalavras(contLinha);
    lerTradução(contLinha);


}

//começa o jogo. carrega as palavras e já coloca a primeira lavra a ser traduzida. 
function comecar() {
    pegaPalavras();
    var outPalavra = document.getElementById("outPalavra");
    outPalavra.textContent = palavra;
    outPalavra.textContent = "Traduza a palavra: " + palavra + "\n";
}



//cria uma referencia ao elemento btComecar
var btTraduzir = document.getElementById("btComecar");
btTraduzir.addEventListener("click", comecar);

//faz a comparação com o que foi digitado e a tradução correta da palavra
function traduzirPalavra() {


    var inTraducao = document.getElementById("inTraducao");
    var outResposta = document.getElementById("outResposta");


    userTraducao = inTraducao.value;

    if (traducao == userTraducao) {
        outResposta.textContent = "Parabéns, você acertou a tradução";
    } else {
        outResposta.textContent = "Poxa! Na próxima você consegue. Continue praticando!";
    }

    //conta a próxima a linha a ser lida no arquivo de origem e destino
    contLinha++;
    palavra = "";
    traducao = "";

    //carrega a próxima palavra a ser traduzida pelo usuário
    pegaPalavras();

}

//cria uma referencia ao elemento btTraduzir
var btTraduzir = document.getElementById("btTraduzir");
btTraduzir.addEventListener("click", traduzirPalavra);

//carrega  para a página a próxima palavra a ser traduzida. 
function pegaProxima() {

    var outPalavra = document.getElementById("outPalavra");
    outPalavra.textContent = palavra;
    outPalavra.textContent = "Traduza a palavra: " + palavra + "\n";
}


//cria uma referencia ao elemento btPróximo
var btProximo = document.getElementById("btProximo");
btProximo.addEventListener("click", pegaProxima);



pegaPalavras();