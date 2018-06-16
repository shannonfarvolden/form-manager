var obj = {
  user: {
    posts: [
      { title: 'Foo', comments: [ 'Good one!', 'Interesting...' ] },
      { title: 'Bar', comments: [ 'Ok' ] },
      { title: 'Baz', comments: [] },
    ]
  }
};
var data = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(obj,0,4));

var a = document.createElement('a');
a.href = 'data:' + data;
a.download = 'config.json';

var container = document.getElementById('saveButton');
container.appendChild(a);

// working example here: http://jsfiddle.net/sz76c083/341/