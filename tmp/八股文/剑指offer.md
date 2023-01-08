# 算法

斐波那契额数列实现
```js
// 递归
const fib = (n) => {
  if (n <= 2) {
    return 1;
  }
  return fib(n - 1) + fib(n - 2);
};

// 循环
const fib = (n) => {
  if (n <= 2) {
    return 1;
  }
  let left = 1,
    right = 1,
    result;
  for (; n >= 3; n--) {
    result = left + right;
    left = right;
    right = result;
  }
  return result;
};
```

实现数组的扁平化：`[1, [2, [3, 4, 5]]]` => `[1,2,3,4,5]`
```js
const flatten = (target) => {
  let result = [];
  (target || []).forEach((item) => {
    if (Array.isArray(item)) {
      result.push(...flatten(item));
    } else {
      result.push(item);
    }
  });
  return result;
};

const flatten = (target) => {
  return (target || []).flat(Infinity);
};
```

# 手写题

实现instanceof关键字
```js
function mockInstanceof (A, B) {
  let tmp = A;
  while(!!tmp) {
    if (B.prototype === tmp) {
      return true;
    }
    tmp = Object.getPrototypeOf(tmp);
  }
  return false;
}
```