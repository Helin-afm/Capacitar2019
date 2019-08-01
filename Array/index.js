var recebe = [];

function primos(recebe) {

    var primos = 0; //Para armazenar todos os primos
    var divisores = 0; //Será usada para armazenar os divisores 
    var a = []; //Armazenando o array recebido em uma variavel local
    a = recebe;

    for (var i = 0; i < a.length; i++) { //Esse for é para descobrir os valores em cada posição
        for (var j = 1; j < a[i]; j++) { //Esse é para determinar quantos divisores tem cada
            if (a[i] % j == 0) { //Aqui é para confirmar que só é primo se dividir por 1 e ele mesmo, apenas
                divisores++; //Quantidade de divisores
            }
            
        }
        if (divisores == 2) { //Só sendo 2 divisores, são primos
            primos ++;
        }
    }
    return primos; //Total de primos
}