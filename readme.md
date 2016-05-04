# Be MEAN - Node JS

## 1st Class - Practice

```js
var arr = [
    {_id: 1},
    {_id: 2},
    {_id: 3}
];

function getObject(id) {
  var obj = {order: id._id};
  console.log('Id', id);
  console.log('Obj', obj);

  // Push to arr[]
  arr.push(obj);
}
```

First `forEach`:

```js
arr.forEach(function(item) {
  getObject(item);
});
```

A better one that JS give a tip:

```js
arr.forEach(getObject);
```