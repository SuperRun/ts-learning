// 1. 解构
// - 数组解构
function f(_a) {
    var first = _a[0], second = _a[1];
    console.log(first + second);
}
f([1, 2]);
function keepWholeObject(wholeObject) {
    var a = wholeObject.a, _a = wholeObject.b, b = _a === void 0 ? 100 : _a;
    console.log(a, b);
}
keepWholeObject({ a: 'hello' });
