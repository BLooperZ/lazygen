'use strict'

const Generator = Object.getPrototypeOf(function*() {})

Generator.prototype.entries = function*() {
    let index = 0
    for (const x of this) {
        yield [index, x]
        index++
    }
}

Generator.prototype.map = function*(callback) {
    for (const [index, elem] of this.entries()) {
        yield callback(elem, index, this)
    }
}

Generator.prototype.from = function*(iteratable, mapFn = x => x) {
    yield* (function*() {
        yield* iteratable
    })().map(mapFn)
}

Generator.prototype.filter = function*(predicate) {
    for (const [index, elem] of this.entries()) {
        if (predicate(elem, index, this)) {
            yield elem
        }
    }
}

Generator.prototype.slice = function*(start, end) {
    for (const [index, elem] of this.entries()) {
        if (end !== undefined) {
            if (index >= end) {
                break
            }
        }
        if (index >= start) {
            yield elem
        }
    }
}

Generator.prototype.reduce = function(callback, initialValue) {
    if (initialValue === undefined) {
        initialValue = this.next().value
    }
    return [...this].reduce(callback, initialValue)
}

Generator.prototype.concat = function*(...rest) {
    for (const gen of [this, ...rest]) {
        yield* gen
    }
}

Generator.prototype.toArray = function() {
    // another option: return Array.from(this)
    return [...this]
}

export default (function*() {})()
