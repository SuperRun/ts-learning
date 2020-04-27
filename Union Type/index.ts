// 联合类型
// + 取值为多个类型中的一种
let id: number | string; // id 可以为number也可以为string
// + 联合类型取共有的方法
function getById(id: number | string) {
  // console.log(id.length); // Property 'length' does not exist on type 'number'.
  console.log(id.toString());
}