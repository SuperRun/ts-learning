// 1. boolean
// 2. number
// 3. string
// 4. Array 
// - 声明方式
let arr1: number[] = [1, 2, 3]
let arr2: Array<number> = [1, 2, 3]
console.log('Array', arr1, arr2);

// 5. Tuple
// - 数组可以含有不同类型的数据
let tuple: [number, string] = [1, 'hello']
console.log('Tuple', tuple);

// 6. Enum
// - 声明方式 （默认赋予 0，1，2）
enum Color1 {
  Green,
  Red,
  Blue
}
let c: Color1 = Color1.Blue
console.log('Enum', c);

// - 设置起始值
enum Color2 {
  Green = 1,
  Red,
  Blue
}
let color: Color2 = Color2.Blue
console.log('Enum', color);

// - 给每个进行赋值
enum Color3 {
  Green = 'g',
  Red = 'r',
  Blue = 'b'
}
let color3: Color3 = Color3.Blue
console.log('Enum', color3);

// - 根据值(必须是数字)获取枚举名称
enum Color { Red = 1, Green, Blue }
let colorName: string = Color[1];
console.log('Enum', colorName);

// 7. Any
// - 表示任何类型
// - 为什么不用object代替
//    + ts 的对象仅仅允许你分配任何值
//    + 不能调用object没有的方法
// - 用来表示数组包含各个不相同的类型数据
let anyArr: any[] = [true, 1, "hello"]
console.log('Any', anyArr);

// 8. Void
// - 函数没有返回值
// - 变量定义为void 只能赋值为 null undefined
// let voidVar: void = 1; // Type '1' is not assignable to type 'void'
let voidVar: void = null;
console.log(voidVar);

// 9. Null & Undefined

// 10. Never
// - 当函数或者箭头函数抛出异常
function error(msg: string): never {
  throw new Error(msg);
}
// - 函数永远不会有返回值
function ifiniteLoop(): never {
  while (true) {

  }
}

// 11. Object

// 12. Type Assertions 类型断言
// - <>
let someVal: any = "hello world"
let len1: number = (<string>someVal).length
console.log(len1);
// - as
let len2: number = (someVal as string).length
console.log(len2);






