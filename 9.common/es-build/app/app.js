import { sum } from './helpers.js';
import cloneDeep from 'lodash-es/cloneDeep';
import find from 'lodash-es/find';

const objects = [{ 'a': 1 }, { 'b': 2 }];
const deep = cloneDeep(objects);

sum(10, 20)

const users = [
    { 'user': 'barney',  'age': 36, 'active': true },
    { 'user': 'fred',    'age': 40, 'active': false },
    { 'user': 'pebbles', 'age': 1,  'active': true }
  ];

find(users, function(o) { return o.age < 40; });
