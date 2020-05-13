"use strict";
function copy(val) {
    return val;
}
console.log(copy('hello').toUpperCase);
console.log(copy(12));
// 型推論もできる
console.log(copy({ name: 'Atsushi' }));
