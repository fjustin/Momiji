!function(t){"use strict";t.ajaxPrefilter(function(t){if(t.iframe)return"iframe"}),t.ajaxTransport("iframe",function(e,a,n){function i(){l.each(function(e){t(this).replaceWith(s[e]),l.splice(e,1)}),o.remove(),u.bind("load",function(){u.remove()}),u.attr("src","about:blank")}var r,o=null,u=null,d="iframe-"+t.now(),s=t(e.files).filter(":file:enabled"),l=null;if(e.dataTypes.shift(),s.length)return o=t("<form enctype='multipart/form-data' method='post'></form>").hide().attr({action:e.url,target:d}),"string"==typeof e.data&&e.data.length>0&&t.error("data must not be serialized"),t.each(e.data||{},function(e,a){t.isPlainObject(a)&&(e=a.name,a=a.value),t("<input type='hidden' />").attr({name:e,value:a}).appendTo(o)}),t("<input type='hidden' value='IFrame' name='X-Requested-With' />").appendTo(o),r=e.dataTypes[0]&&e.accepts[e.dataTypes[0]]?e.accepts[e.dataTypes[0]]+("*"!==e.dataTypes[0]?", */*; q=0.01":""):e.accepts["*"],t("<input type='hidden' name='X-Http-Accept'>").attr("value",r).appendTo(o),l=s.after(function(){return t(this).clone().prop("disabled",!0)}).next(),s.appendTo(o),{send:function(e,a){(u=t("<iframe src='about:blank' name='"+d+"' id='"+d+"' style='display:none'></iframe>")).bind("load",function(){u.unbind("load").bind("load",function(){var t=this.contentWindow?this.contentWindow.document:this.contentDocument?this.contentDocument:this.document,e=t.documentElement?t.documentElement:t.body,r=e.getElementsByTagName("textarea")[0],o=r&&r.getAttribute("data-type")||null,u=r&&r.getAttribute("data-status")||200,d=r&&r.getAttribute("data-statusText")||"OK",s={html:e.innerHTML,text:o?r.value:e?e.textContent||e.innerText:null};i(),n.responseText||(n.responseText=s.text),a(u,d,s,o?"Content-Type: "+o:null)}),o[0].submit()}),t("body").append(o,u)},abort:function(){null!==u&&(u.unbind("load").attr("src","javascript:false;"),i())}}})}(jQuery),function(t){var e;t.remotipart=e={setup:function(a){var n=a.data("ujs:submit-button"),i=t('meta[name="csrf-param"]').attr("content"),r=t('meta[name="csrf-token"]').attr("content"),o=a.find('input[name="'+i+'"]').length;a.one("ajax:beforeSend.remotipart",function(u,d,s){return delete s.beforeSend,s.iframe=!0,s.files=t(t.rails.fileInputSelector,a),s.data=a.serializeArray(),n&&s.data.push(n),s.files.each(function(t,e){for(var a=s.data.length-1;a>=0;a--)s.data[a].name==e.name&&s.data.splice(a,1)}),s.processData=!1,s.dataType===undefined&&(s.dataType="script *"),s.data.push({name:"remotipart_submitted",value:!0}),r&&i&&!o&&s.data.push({name:i,value:r}),t.rails.fire(a,"ajax:remotipartSubmit",[d,s])&&(t.rails.ajax(s).complete(function(e){t.rails.fire(a,"ajax:remotipartComplete",[e])}),setTimeout(function(){t.rails.disableFormElements(a)},20)),e.teardown(a),!1}).data("remotipartSubmitted",!0)},teardown:function(t){t.unbind("ajax:beforeSend.remotipart").removeData("remotipartSubmitted")}},t(document).on("ajax:aborted:file","form",function(){var a=t(this);return e.setup(a),t.rails.handleRemote(a),!1})}(jQuery);