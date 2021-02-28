// usando a recursividade no fatorial 

/*
    Exemplo o fatoria de 5! = 5 x 4 x 3 x 2 x 1 
    Porem pode ser calculado assim:
    5! = 5 x 4!, ou seja um fatorial pode ser calculado com base no fatorial de outro. 

    n! = n x (n-1)!
    1! = 1
*/

function fatorial(n){
    if( n == 1){
        return 1
    } else {
        return n * fatorial(n-1)
    }

}

console.log(fatorial(5))