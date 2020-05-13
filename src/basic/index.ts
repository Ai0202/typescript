let hello: string = 'hello';
console.log(hello);

const person: {
  name: string;
  age: number;
} = {
  name: 'Atsushi',
  age: 29,
}

// 中身が文字列の配列
const fruits: string[] = [
  'apple',
  'banana',
]

fruits.push('grape');

// 文字列ではないためエラー
// fruits.push(21);

console.log(fruits);

// 配列に複数の型をいれたい場合はunionを使用
// anyにしてもできるが、何でもはいってしまう
const hoge: (string | number | boolean)[]= ['apple', 1, true];

// Tuple型
// 1つめはstring, 2つめは数字, 3つめはbooleanとカチッと決める
// 4つめに値をいれたりなどできない(あとから追加はできちゃう)
const book: [string, number, boolean] = ['ikeda', 1500, true];

// enum 基本
// enum CoffeeSize {
//   SHORT = 'SHORT', 
//   TALL = 'TALL',
//   GRANDE = 'GRANDE',
//   VENTI = 'VENTI',
// }

enum CoffeeSize {
  SHORT, // 0 
  TALL, // 1
  GRANDE, // 2
  VENTI, // 3
}

const coffee = {
  hot: true,
  size: CoffeeSize.TALL
}

// これはエラー
// CoffeeSizeではないため
// Coffee.size = true;

coffee.size = CoffeeSize.GRANDE;

// union型 複数の型を受け入れることができる
let unionType: number | string = 10;
// unionType.toUpperCase(); ここだと中身が数字だからエラー
unionType = 'hello';
unionType.toUpperCase(); // こっちは中身が文字だからOK toUpperCaseは文字にしかないメソッド
// unionType = true; これはエラー

// Literal型
// 決められた文字だけ
// const使用すると型推論は自動でliteral型になる
// const apple: 'apple' = 'hello'; // これはエラー 文字がappleじゃないから
const apple: 'apple' = 'apple';

// 3ついれることができる。 最初にsmallいれたらそれはsmall型の変数になり、
// あとで変更するのは不可
let clothSize: 'small' | 'medium' | 'large' = 'small';

// typeエイリアス 型を変数に入れる
type ClothSize = 'small' | 'medium' | 'large'

const cloth = {
  color: 'red',
  // clothSize: ClothSize,
}

// 関数に型指定
const add: (n1: number, n2: number) => number = (n1, n2) => {
  return n1 + n2
}
console.log(add(3, 10));

// callback関数
const doubleAndHandle: (num: number, cb: (num: number) => number) => void = (num, cb) => {
  const doubleNum = cb(num * 2);
  console.log(doubleNum);
}

doubleAndHandle(5, (doubleNum: number) => doubleNum * 2);

;console.log(2);


