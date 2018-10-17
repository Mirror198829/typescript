function fn1(x, y) {
    return x + y;
}
fn1(10, 20);
let fn2 = function (x, y) {
    return x + y;
};
function fn3(x, y) {
    return x + y;
}
fn3(0);
function fn4(x, y = 1) {
    return x + y;
}
fn4(1);
function fn5(x, y) {
    if (typeof x == 'number') {
        return x * y;
    }
    else {
        return x + y;
    }
}
fn5(1, 2);
fn5('abc', 'edf');
//# sourceMappingURL=function.js.map