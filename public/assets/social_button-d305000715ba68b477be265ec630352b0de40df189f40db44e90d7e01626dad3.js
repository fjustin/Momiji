(function(){var t,n,e,o,r,a,u,c;a=function(){},n(),gapi.plusone.go(),r(),c||t(),e(),o(),$(document).ready(a),$(document).on("page:load",a),c=!1,t=function(){return $(document).ready(a),$(document).on("page:load",u),c=!0},u=function(){return $(".twitter-share-button").each(function(){var t;if(t=$(this),null==t.data("url")&&t.attr("data-url",document.location.href),null==t.data("text"))return t.attr("data-text",document.title)}),twttr.widgets.load()},r=function(){return $.getScript("//platform.twitter.com/widgets.js")},n=function(){return $.getScript("https://apis.google.com/js/plusone.js")},e=function(){return $.getScript("//b.st-hatena.com/js/bookmark_button_wo_al.js")},o=function(){return $.getScript("https://widgets.getpocket.com/v1/j/btn.js?v=1")}}).call(this);