// + 定义接口少了一些属性和多了一些属性不被允许
interface IPerson {
  name: string,
  age: number
}

// age missing
// let person: IPerson = {
//   name: "Amy"
// }

// 'school' does not exist
// let person: IPerson = {
//   name: "John",
//   age: 12,
//   school: "University"
// }

// + 可选属性 (?) [仍然不允许添加为定义属性]
interface IAnimal {
  name: string,
  age?: number
}
let animal: IAnimal = {
  name: "Pig"
}

// + 任意属性
// - [确定属性][可选属性]的类型都必须是[任意属性]的类型的子集
interface IPic {
  name: string,
  [propName: string]: string // 属性类型 string
}

// let pic: IPic = {
//   name: "pic.png",
//   size: 12 // Type 'number' is not assignable to type 'string'
// }

// + 只读属性 readonly
interface IBook {
  readonly id: number;
  name: string;
  author: string;
}
let book: IBook = {
  id: 1,
  name: "天才的基本法则",
  author: "XXX"
}
// book.id = 2; // Cannot assign to 'id'

