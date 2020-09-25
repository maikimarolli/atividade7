function notaAluno() {

    var notaFinal;
    var nota1 = document.getElementById("nota1").value;
    var nota2 = document.getElementById("nota2").value;
    var nota3 = document.getElementById("nota3").value;
    notaFinal = (parseInt(nota1) + parseInt(nota2) + parseInt(nota3)) / 3;

    document.getElementById("resposta1").innerHTML = "A nota do aluno foi: " + notaFinal;

    if (notaFinal >= 6)
        document.getElementById("resposta2").innerHTML = "Resultado: Aprovado";
    else if (notaFinal < 6)
        document.getElementById("resposta2").innerHTML = "Resultado: Reprovado";
}

function tabuada() {

    for (var i = 0; i < 11; i++) {
        var h2 = document.createElement('h2');
        h2.className = 'h2';
        var resultado = 7 * i;
        h2.innerHTML = '7 x' + i + '=' + resultado;
        document.getElementById('jumbo_pai').appendChild(h2);
    }

}

function catNadador() {

    var idade = document.getElementById("idadenadador").value;
    if (idade < 5)
        document.getElementById("categoria").innerHTML = "Idade incorreta";
    else if (idade >= 5 && idade <= 7)
        document.getElementById("categoria").innerHTML = "Infantil";
    else if (idade >= 8 && idade <= 13)
        document.getElementById("categoria").innerHTML = "Juvenil";
    else if (idade >= 14 && idade <= 17)
        document.getElementById("categoria").innerHTML = "Adolescente";
    else if (idade >= 18)
        document.getElementById("categoria").innerHTML = "Adulto";

}


function melhorTempo() {

    var vencedor;
    var nota1;
    nota1 = document.getElementById("segundo1").value;

    var nota2;
    nota2 = document.getElementById("segundo2").value;

    var nota3;
    nota3 = document.getElementById("segundo3").value;

    if (nota1 == nota2 && nota2 == nota3)
        document.getElementById("coloc1").innerHTML = "empate";

    else if (nota1 < nota2 && nota1 < nota3) {
        document.getElementById("coloc1").innerHTML = "O primeiro nadador ficou com a medalha de ouro.";
        if (nota2 < nota3) {
            document.getElementById("coloc2").innerHTML = "O segundo nadador ficou com a medalha de prata.";
            document.getElementById("coloc3").innerHTML = "O terceiro nadador ficou com a medalha de bronze.";
        }
        else if (nota3 < nota2) {
            document.getElementById("coloc2").innerHTML = "O terceiro nadador ficou com a medalha de prata.";
            document.getElementById("coloc3").innerHTML = "O segundo nadador ficou com a medalha de bronze.";
        }
    }

    else if (nota2 < nota1 && nota2 < nota3) {
        document.getElementById("coloc1").innerHTML = "O segundo nadador ficou com a medalha de ouro.";
        if (nota1 < nota3) {
            document.getElementById("coloc2").innerHTML = "O primeiro nadador ficou com a medalha de prata.";
            document.getElementById("coloc3").innerHTML = "O terceiro nadador ficou com a medalha de bronze.";
        }
        else if (nota3 < nota1) {
            document.getElementById("coloc2").innerHTML = "O terceiro nadador ficou com a medalha de prata.";
            document.getElementById("coloc3").innerHTML = "O primeiro nadador ficou com a medalha de bronze.";
        }
    }

    else if (nota3 < nota1 && nota3 < nota2) {
        document.getElementById("coloc1").innerHTML = "O terceiro nadador ficou com a medalha de ouro.";
        if (nota1 < nota2) {
            document.getElementById("coloc2").innerHTML = "O primeiro nadador ficou com a medalha de prata.";
            document.getElementById("coloc3").innerHTML = "O segundo nadador ficou com a medalha de bronze.";
        }
        else if (nota2 < nota1) {
            document.getElementById("coloc2").innerHTML = "O segundo nadador ficou com a medalha de prata.";
            document.getElementById("coloc3").innerHTML = "O primeiro nadador ficou com a medalha de bronze.";
        }
    }
}

function criarImagem() {

    var vet = ['1.jpg', '2.jpg', '3.jpg', '4.png', '5.png', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg'];

    for (var i = 0; i < 10; i++) {
        var jumb = document.createElement("IMG");
        jumb.className = 'img-fluid';
        jumb.src = vet[i];
        document.getElementById('pai_imagens').appendChild(jumb);
    }
}