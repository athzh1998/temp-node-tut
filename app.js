
// local dependency 
// npm i <packageName>


// global dependency
// npm install -g <packageName>

// npm init (step by step)
// npm init -y (default setup) 

const _ = require('lodash')

const items = [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)


