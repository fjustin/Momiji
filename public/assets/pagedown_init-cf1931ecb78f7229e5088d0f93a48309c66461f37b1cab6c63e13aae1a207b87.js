(function(){$(function(){return $("textarea.wmd-input").each(function(n,t){var r,i,e;return r=$(t).attr("id").split("wmd-input")[1],i=new Markdown.Converter,Markdown.Extra.init(i),e={handler:function(){return window.open("http://daringfireball.net/projects/markdown/syntax"),!1},title:"Markdown Editing Help"},new Markdown.Editor(i,r,e).run()})})}).call(this);