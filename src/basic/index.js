"use strict";
var hello = 'hello';
console.log(hello);
var person = {
    name: 'Atsushi',
    age: 29,
};
// 中身が文字列の配列
var fruits = [
    'apple',
    'banana',
];
fruits.push('grape');
// 文字列ではないためエラー
// fruits.push(21);
console.log(fruits);
// 配列に複数の型をいれたい場合はunionを使用
// anyにしてもできるが、何でもはいってしまう
var hoge = ['apple', 1, true];
// Tuple型
// 1つめはstring, 2つめは数字, 3つめはbooleanとカチッと決める
// 4つめに値をいれたりなどできない(あとから追加はできちゃう)
var book = ['ikeda', 1500, true];
// enum 基本
// enum CoffeeSize {
//   SHORT = 'SHORT', 
//   TALL = 'TALL',
//   GRANDE = 'GRANDE',
//   VENTI = 'VENTI',
// }
var CoffeeSize;
(function (CoffeeSize) {
    CoffeeSize[CoffeeSize["SHORT"] = 0] = "SHORT";
    CoffeeSize[CoffeeSize["TALL"] = 1] = "TALL";
    CoffeeSize[CoffeeSize["GRANDE"] = 2] = "GRANDE";
    CoffeeSize[CoffeeSize["VENTI"] = 3] = "VENTI";
})(CoffeeSize || (CoffeeSize = {}));
var coffee = {
    hot: true,
    size: CoffeeSize.TALL
};
// これはエラー
// CoffeeSizeではないため
// Coffee.size = true;
coffee.size = CoffeeSize.GRANDE;
// union型 複数の型を受け入れることができる
var unionType = 10;
// unionType.toUpperCase(); ここだと中身が数字だからエラー
unionType = 'hello';
unionType.toUpperCase(); // こっちは中身が文字だからOK toUpperCaseは文字にしかないメソッド
// unionType = true; これはエラー
// Literal型
// 決められた文字だけ
// const使用すると型推論は自動でliteral型になる
// const apple: 'apple' = 'hello'; // これはエラー 文字がappleじゃないから
var apple = 'apple';
// 3ついれることができる。 最初にsmallいれたらそれはsmall型の変数になり、
// あとで変更するのは不可
var clothSize = 'small';
var cloth = {
    color: 'red',
};
// 関数に型指定
var add = function (n1, n2) {
    return n1 + n2;
};
console.log(add(3, 10));
// callback関数
var doubleAndHandle = function (num, cb) {
    var doubleNum = cb(num * 2);
    console.log(doubleNum);
};
doubleAndHandle(5, function (doubleNum) { return doubleNum * 2; });
;
console.log(2);
