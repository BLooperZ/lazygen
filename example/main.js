'use strict'

import Generator, {generate, range, numbers, primes } from '../lib'

const arr = [1, 2, 3, 4, 7, 9, 10, 119]

const c = Generator.from(arr)
    .map((x, index) => x + index)
    .filter((x, idx) => idx % 2 == 1)
    .slice(2, 4)

const d = arr
    .map((x, index) => x + index)
    .filter((x, idx) => idx % 2 == 1)
    .slice(2, 4)

const cd = c.toArray()

const n = numbers()
    .slice(2)
    .filter(x => x % 2 > 0)
    .filter(x => x % 3 > 0)
    .filter(x => x % 5 > 0)
    .slice(0, 36)

const t = Generator.from(cd, x=> x + 7)
//console.log(c.next().value)
//console.log(c.next().value)
//console.log(...c)
//console.log(...d)
//console.log(...c)
//console.log(...cd)
//console.log(...c.concat(d))
//console.log(...range(0, 29, 4))
//console.log(...n)

// primes check
const p = primes()
console.log(...(p.slice(0, 2597))) // max. number working with esm
//console.log(...(p.slice(0, 2605))) // max. number working with modules.export
//console.log(...(p.slice(0, 2606))) // fails: too much

//console.log(p.next().value)
//console.log(p.next().value)
//console.log(p.next().value)
//console.log(p.next().value)
//console.log(p.next().value)
//console.log(p.next().value)
//console.log(p.next().value)
