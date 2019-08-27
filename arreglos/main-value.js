let a = [4, 8, 2, 5, 10, 3]
let average=getAverage(a)

console.log(average)
console.log(getMinValue(a))


function getMinValue(a) {

    if (a.length == 0) return -1
    let min = a[0]
    let minIndex

    for (let i = 0; i < a.length; i++) {

        if (nearestToAverage(a[i]) < min) 
        min = nearestToAverage(a[i])
        minIndex=i
    }

    return minIndex
}

function nearestToAverage(n){

    return Math.abs(n-average)
}


function getAverage(average){

    let promedio=0

    for(let i=0; i<a.length; i++){

        promedio += a[i]
    }

    return promedio/a.length
}


