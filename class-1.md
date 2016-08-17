# Class 1

Let's execute Node:
```js
node
```

Now let's build an array:
```
var arr = [{_id: 1}, {_id: 2}, {_id : 3}]
```

We need a function that add an object to an array:
```
function getObject(item) {
    var obj = {
        order : item._id
    }
    arr.push(obj);
}
```

Now, let's iterate it:
```
arr.forEach(function(item) {
  getObject(item);
});
```

Above we are passing just one parameter to call one method. So, we can do this to a simpler code:
```
arr.forEach(getObject);
```

And Both results:
```
[ { _id: 1 },
  { _id: 2 },
  { _id: 3 },
  { order: 1 },
  { order: 2 },
  { order: 3 } ]
```
