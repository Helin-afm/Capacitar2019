function verificar(a) {
    if (a.toString() === a.split().reverse().join().toString()) {
        /*Na ordem: 
        split() está partindo a string e tornando um array
        reverse() inverte as posições do array
        join() une as partes do array em uma string novamente*/
        return true;
    }
    
}