import { userID, createUser as createUser2 } from './module1.js'
import sum2 from './module2.js'
import { chunk } from "https://cdn.jsdelivr.net/npm/lodash-es@4.17.21/lodash.min.js";
import { ref } from "https://cdnjs.cloudflare.com/ajax/libs/vue/3.2.41/vue.esm-browser.min.js";


console.log(userID)
console.log(createUser2())
console.log(sum2(2,10))

const abc = ref(100)
const array = ['a', 'b', 'c', 'd']

console.log(chunk(array, 2))


console.log(alg)
