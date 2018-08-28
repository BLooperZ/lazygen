'use strict'

import Generator from './prototype'

// basic generator
function* generate(initialValue = 0, getNext = x => x, condition = x => true) {
    let index = 0
    let currentValue = initialValue
    while (condition(currentValue, index)) {
        yield currentValue
        index++
        currentValue = getNext(currentValue, index)
    }
}

// simple examples:
const range = (start, end, step = 1) => generate(start, x => x + step, x => x < end)

const numbers = (start = 0, step = 1) => generate(start, x=> x + step)

// more complex example:

const primes = function*() {
    // Sieve of Eratosthenes
    const sieve = (gen, n) => gen.filter(x => n * n > x || x % n > 0)
    let it = numbers(2)
    while (true) {
        const num = it.next().value
        yield num
        it = sieve(it, num)
    }
}

export {
    generate,
    range,
    numbers,
    primes
}