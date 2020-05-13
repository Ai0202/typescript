function copy<T>(val: T): T {
  return val;
}

console.log(copy<string>('hello').toUpperCase);
console.log(copy<number>(12));

// 型推論もできる
console.log(copy({name: 'Atsushi'}));

