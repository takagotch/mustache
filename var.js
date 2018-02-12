Mustache.compile = function(template){
  Mustache.parse(template);

  return function(view, partials){
    return Mustache.render(template, view, partials);
  }
};

{{name}}
{{paeson.name}}


//collection
{{#library}}
<li>
<em>{{name}}</em> by {{author}}
</li>
{{/library}}

//{{.}}
{{#library}}
<p>This object {{.}}</p>
{{/library}}

//coments
{{! Display the person name }}
{{person.name}}

