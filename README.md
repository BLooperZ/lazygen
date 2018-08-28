# lazygen
Basic implementation of ECMAScript Array API for Generator Objects

# Installation
`npm install --save lazy`

# Usage
```
import Generator, { range } from 'lazygen'

r = range(1, 5).filter(x => x != 2)
console.log(...r) // 1 3 4 5
````

# TODO
* Write unit tests
* Write Documentation for utils
