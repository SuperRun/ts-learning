// 1. 解构
// - 数组解构
// + 参数解构
function f([first, second]: [number, number]) {
  console.log(first + second);
}
f([1, 2]);
// + spread
let [first, ...rest] = [1, 2, 3, 4, 5]
console.log(first, rest);
// + 获取部分
let [, f, , s] = [1, 2, 3, 4]
console.log(f, s);


// - 元组解构(同上)
// - 对象解构
({ a, b } = { a: "hello", b: "world" })
// + ...
let o = { a: 1, b: 2, c: 3 }
let { a, ...rest } = o
// + 属性重命名
let { a: aName, b: bName } = { a: 1, b: 2 }
// + 定义类型
let { a, b }: { a: number, b: number } = { a: 1, b: 2 }
// + 默认值
function keepWholeObject(wholeObject: { a: string, b?: number }) {
  let { a, b = 100 } = wholeObject;
  console.log(a, b);
}
keepWholeObject({ a: 'hello' })

// - 函数声明
// + 参数对象声明另外拎出来
type C = { a: string, b?: number }
function f1({ a, b }: C): void {
  console.log(a, b);
}
// + 参数为空时设置默认值
function f2({ a = '', b = 0 } = {}): void {

}
// + 参数设置默认对象
function f3({ a, b = 0 } = { a: 'hello' }) {
  console.log(a, b);
}
f3({ a: "yes" }); // ok, default b = 0
f3(); // ok, default to { a: "" }, which then defaults b = 0
f3({}); // error, 'a' is required if you supply an argument

// - spread
class C {
  p = 12;
  m() {
  }
}
let c = new C();
let clone = { ...c };
clone.p; // ok
clone.m(); // error!