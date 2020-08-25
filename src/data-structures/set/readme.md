#### 集合 （Set）

集合是由一组无序且唯一（即不能重复）的项组成的。该数据结构使用了与有限集合相同的数学概念，但应用在计算机科学的数据结构中。在数学中，集合是一组不同对象的集。

使用`ES6`提供的`Set`集合实现数学的并集、交集和差集：

- 并集

```js
console.log(new Set([...setA, ...setB]));
```

- 交集

```js
console.log(new Set([...setA].filter(x => setB.has(x))));
```

- 差集

```js
console.log(new Set([...setA].filter(x => !setB.has(x))));
```