//{()}
var view = {
  name: "Mustache",
  calc: function(){
    return 2 + 4;
  }
};
var output = Mustache.render("{(name)} : {(calc)}", view);

//{(#foo)} {(/foo)}
var template = 'shown{(#foo)}Never shown!{(/foo)}';
var html = Mustache.to_html( template, {
  foo: false
});
assert("foo unshow", "shown", html);


//{(.)}
var list = '<ul>{(#peole)}<li>{(name)}</li>{(/people)}</ul>';
html = Mustache.to_html( list, {
  people:[
    {name: "apple"},
    {name: "tk"},
    {name: "tky"}
  ]
});
$("#test").html(html);


var list = '<ul>{(#people)}<li>{(name)}</li>{(/people)}</ul>';
html = Mustache.to_html( list, {
  people:["apple", "tk", "tky"]
});
$("#test").html(html);

//{(!)}
html=Mustache.render(
  'Today{(! ignore me )}.'
);
assert("comment", "Today.", html.toString());

