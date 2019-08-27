let a = [4, 8, 2, 5, 10, 3]

console.log(getMin(a))
console.log(getMax(a))

function getMin(a) {

    if (a.length == 0) return -1

    let min = a[0]
    for (let i = 0; i < a.length; i++) {

        if (square[i] < min) min = square[i]
    }

    return min

}

function getMax(a) {

    let max = a[0]
    for (let i = 0; i < a.length; i++) {

        if (square[i] > max) max = square[i]
    }

    return max

}

function square(n) {

    return n * n
}
