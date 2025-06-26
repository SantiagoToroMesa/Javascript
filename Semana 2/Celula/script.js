function multiplicar(){
    return function (n){
        return n * n;
    }
}

const multi = multiplicar();
console.log(multi(5));