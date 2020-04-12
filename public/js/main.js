var yyy = $(".frase");
var tempoInicial = $("#tempo-digitacao").text();
var campo = $(".campo-digitacao");
var cronometroID =


//console.log(yyy);

$(document).ready(function(){
  atualizaTamanhoFrase();
  inicializaContadores();
  inicializaCronometro();
  $("#botao-reiniciar").click(reiniciaJogo);
});

function atualizaTamanhoFrase(){
  var frase = $(".frase").text();

  //console.log(frase);

  var zzz = frase.split(" ");
  //console.log(zzz);
  var numPalavras = frase.split(/\S+/).length -1;
  //console.log(numPalavras);
  var tamanhoFrase = $("#tamanho-frase").text();
  //console.log(tamanhoFrase);
  var xxx = $("#tamanho-frase");
  //console.log(xxx);
  $("#tamanho-frase").text(numPalavras);

};

function inicializaContadores(){
  campo.on("input",function(){
      var conteudo = campo.val();
      var qtdPalavras = conteudo.split(/\S+/).length -1 ;

  //    console.log(qtdPalavras)

      $("#contador-palavras").text(qtdPalavras);
      var qtdCaracteres = conteudo.length;
      $("#contador-caracteres").text(qtdCaracteres);
  //    console.log(qtdCaracteres);
  //    console.log(campo.val());
  });
};


function inicializaCronometro(){
  var tempoRestante = $("#tempo-digitacao").text();

//  console.log(tempoRestante);

  campo.one("focus",function() {
      cronometroID = setInterval(function(){
          console.log(cronometroID);
          tempoRestante--
          $("#tempo-digitacao").text(tempoRestante);
          if (tempoRestante < 1){
            campo.attr("disabled",true);
            clearInterval(cronometroID);
            campo.addClass("campo-desativado");
          };
      },

      1000);
  });
};


//$("#botao-reiniciar").on("click", function(){
//  console.log("botao clicado");
//});

function reiniciaJogo(){
  campo.attr("disabled",false);
  clearInterval(cronometroID);
  campo.val("");
  $("#contador-palavras").text("0");
  $("#contador-caracteres").text("0");
  $("#tempo-digitacao").text(tempoInicial);
  inicializaCronometro();
};
