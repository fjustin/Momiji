!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)}(function(e){function t(t,n){var s,o,r,a=t.nodeName.toLowerCase();return"area"===a?(s=t.parentNode,o=s.name,!(!t.href||!o||"map"!==s.nodeName.toLowerCase())&&(!!(r=e("img[usemap='#"+o+"']")[0])&&i(r))):(/^(input|select|textarea|button|object)$/.test(a)?!t.disabled:"a"===a?t.href||n:n)&&i(t)}function i(t){return e.expr.filters.visible(t)&&!e(t).parents().addBack().filter(function(){return"hidden"===e.css(this,"visibility")}).length}e.ui=e.ui||{},e.extend(e.ui,{version:"1.11.4",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),e.fn.extend({scrollParent:function(t){var i=this.css("position"),n="absolute"===i,s=t?/(auto|scroll|hidden)/:/(auto|scroll)/,o=this.parents().filter(function(){var t=e(this);return(!n||"static"!==t.css("position"))&&s.test(t.css("overflow")+t.css("overflow-y")+t.css("overflow-x"))}).eq(0);return"fixed"!==i&&o.length?o:e(this[0].ownerDocument||document)},uniqueId:function(){var e=0;return function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++e)})}}(),removeUniqueId:function(){return this.each(function(){/^ui-id-\d+$/.test(this.id)&&e(this).removeAttr("id")})}}),e.extend(e.expr[":"],{data:e.expr.createPseudo?e.expr.createPseudo(function(t){return function(i){return!!e.data(i,t)}}):function(t,i,n){return!!e.data(t,n[3])},focusable:function(i){return t(i,!isNaN(e.attr(i,"tabindex")))},tabbable:function(i){var n=e.attr(i,"tabindex"),s=isNaN(n);return(s||n>=0)&&t(i,!s)}}),e("<a>").outerWidth(1).jquery||e.each(["Width","Height"],function(t,i){function n(t,i,n,o){return e.each(s,function(){i-=parseFloat(e.css(t,"padding"+this))||0,n&&(i-=parseFloat(e.css(t,"border"+this+"Width"))||0),o&&(i-=parseFloat(e.css(t,"margin"+this))||0)}),i}var s="Width"===i?["Left","Right"]:["Top","Bottom"],o=i.toLowerCase(),r={innerWidth:e.fn.innerWidth,innerHeight:e.fn.innerHeight,outerWidth:e.fn.outerWidth,outerHeight:e.fn.outerHeight};e.fn["inner"+i]=function(t){return t===undefined?r["inner"+i].call(this):this.each(function(){e(this).css(o,n(this,t)+"px")})},e.fn["outer"+i]=function(t,s){return"number"!=typeof t?r["outer"+i].call(this,t):this.each(function(){e(this).css(o,n(this,t,!0,s)+"px")})}}),e.fn.addBack||(e.fn.addBack=function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}),e("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(e.fn.removeData=function(t){return function(i){return arguments.length?t.call(this,e.camelCase(i)):t.call(this)}}(e.fn.removeData)),e.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),e.fn.extend({focus:function(t){return function(i,n){return"number"==typeof i?this.each(function(){var t=this;setTimeout(function(){e(t).focus(),n&&n.call(t)},i)}):t.apply(this,arguments)}}(e.fn.focus),disableSelection:function(){var e="onselectstart"in document.createElement("div")?"selectstart":"mousedown";return function(){return this.bind(e+".ui-disableSelection",function(e){e.preventDefault()})}}(),enableSelection:function(){return this.unbind(".ui-disableSelection")},zIndex:function(t){if(t!==undefined)return this.css("zIndex",t);if(this.length)for(var i,n,s=e(this[0]);s.length&&s[0]!==document;){if(("absolute"===(i=s.css("position"))||"relative"===i||"fixed"===i)&&(n=parseInt(s.css("zIndex"),10),!isNaN(n)&&0!==n))return n;s=s.parent()}return 0}}),e.ui.plugin={add:function(t,i,n){var s,o=e.ui[t].prototype;for(s in n)o.plugins[s]=o.plugins[s]||[],o.plugins[s].push([i,n[s]])},call:function(e,t,i,n){var s,o=e.plugins[t];if(o&&(n||e.element[0].parentNode&&11!==e.element[0].parentNode.nodeType))for(s=0;s<o.length;s++)e.options[o[s][0]]&&o[s][1].apply(e.element,i)}}}),function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)}(function(e){var t=0,i=Array.prototype.slice;return e.cleanData=function(t){return function(i){var n,s,o;for(o=0;null!=(s=i[o]);o++)try{n=e._data(s,"events"),n&&n.remove&&e(s).triggerHandler("remove")}catch(e){}t(i)}}(e.cleanData),e.widget=function(t,i,n){var s,o,r,a,u={},l=t.split(".")[0];return t=t.split(".")[1],s=l+"-"+t,n||(n=i,i=e.Widget),e.expr[":"][s.toLowerCase()]=function(t){return!!e.data(t,s)},e[l]=e[l]||{},o=e[l][t],r=e[l][t]=function(e,t){if(!this._createWidget)return new r(e,t);arguments.length&&this._createWidget(e,t)},e.extend(r,o,{version:n.version,_proto:e.extend({},n),_childConstructors:[]}),a=new i,a.options=e.widget.extend({},a.options),e.each(n,function(t,n){if(!e.isFunction(n))return void(u[t]=n);u[t]=function(){var e=function(){return i.prototype[t].apply(this,arguments)},s=function(e){return i.prototype[t].apply(this,e)};return function(){var t,i=this._super,o=this._superApply;return this._super=e,this._superApply=s,t=n.apply(this,arguments),this._super=i,this._superApply=o,t}}()}),r.prototype=e.widget.extend(a,{widgetEventPrefix:o?a.widgetEventPrefix||t:t},u,{constructor:r,namespace:l,widgetName:t,widgetFullName:s}),o?(e.each(o._childConstructors,function(t,i){var n=i.prototype;e.widget(n.namespace+"."+n.widgetName,r,i._proto)}),delete o._childConstructors):i._childConstructors.push(r),e.widget.bridge(t,r),r},e.widget.extend=function(t){for(var n,s,o=i.call(arguments,1),r=0,a=o.length;r<a;r++)for(n in o[r])s=o[r][n],o[r].hasOwnProperty(n)&&s!==undefined&&(e.isPlainObject(s)?t[n]=e.isPlainObject(t[n])?e.widget.extend({},t[n],s):e.widget.extend({},s):t[n]=s);return t},e.widget.bridge=function(t,n){var s=n.prototype.widgetFullName||t;e.fn[t]=function(o){var r="string"==typeof o,a=i.call(arguments,1),u=this;return r?this.each(function(){var i,n=e.data(this,s);return"instance"===o?(u=n,!1):n?e.isFunction(n[o])&&"_"!==o.charAt(0)?(i=n[o].apply(n,a),i!==n&&i!==undefined?(u=i&&i.jquery?u.pushStack(i.get()):i,!1):void 0):e.error("no such method '"+o+"' for "+t+" widget instance"):e.error("cannot call methods on "+t+" prior to initialization; attempted to call method '"+o+"'")}):(a.length&&(o=e.widget.extend.apply(null,[o].concat(a))),this.each(function(){var t=e.data(this,s);t?(t.option(o||{}),t._init&&t._init()):e.data(this,s,new n(o,this))})),u}},e.Widget=function(){},e.Widget._childConstructors=[],e.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(i,n){n=e(n||this.defaultElement||this)[0],this.element=e(n),this.uuid=t++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=e(),this.hoverable=e(),this.focusable=e(),n!==this&&(e.data(n,this.widgetFullName,this),this._on(!0,this.element,{remove:function(e){e.target===n&&this.destroy()}}),this.document=e(n.style?n.ownerDocument:n.document||n),this.window=e(this.document[0].defaultView||this.document[0].parentWindow)),this.options=e.widget.extend({},this.options,this._getCreateOptions(),i),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:e.noop,_getCreateEventData:e.noop,_create:e.noop,_init:e.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:e.noop,widget:function(){return this.element},option:function(t,i){var n,s,o,r=t;if(0===arguments.length)return e.widget.extend({},this.options);if("string"==typeof t)if(r={},n=t.split("."),t=n.shift(),n.length){for(s=r[t]=e.widget.extend({},this.options[t]),o=0;o<n.length-1;o++)s[n[o]]=s[n[o]]||{},s=s[n[o]];if(t=n.pop(),1===arguments.length)return s[t]===undefined?null:s[t];s[t]=i}else{if(1===arguments.length)return this.options[t]===undefined?null:this.options[t];r[t]=i}return this._setOptions(r),this},_setOptions:function(e){var t;for(t in e)this._setOption(t,e[t]);return this},_setOption:function(e,t){return this.options[e]=t,"disabled"===e&&(this.widget().toggleClass(this.widgetFullName+"-disabled",!!t),t&&(this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus"))),this},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_on:function(t,i,n){var s,o=this;"boolean"!=typeof t&&(n=i,i=t,t=!1),n?(i=s=e(i),this.bindings=this.bindings.add(i)):(n=i,i=this.element,s=this.widget()),e.each(n,function(n,r){function a(){if(t||!0!==o.options.disabled&&!e(this).hasClass("ui-state-disabled"))return("string"==typeof r?o[r]:r).apply(o,arguments)}"string"!=typeof r&&(a.guid=r.guid=r.guid||a.guid||e.guid++);var u=n.match(/^([\w:-]*)\s*(.*)$/),l=u[1]+o.eventNamespace,h=u[2];h?s.delegate(h,l,a):i.bind(l,a)})},_off:function(t,i){i=(i||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,t.unbind(i).undelegate(i),this.bindings=e(this.bindings.not(t).get()),this.focusable=e(this.focusable.not(t).get()),this.hoverable=e(this.hoverable.not(t).get())},_delay:function(e,t){function i(){return("string"==typeof e?n[e]:e).apply(n,arguments)}var n=this;return setTimeout(i,t||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(t){e(t.currentTarget).addClass("ui-state-hover")},mouseleave:function(t){e(t.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(t){e(t.currentTarget).addClass("ui-state-focus")},focusout:function(t){e(t.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(t,i,n){var s,o,r=this.options[t];if(n=n||{},i=e.Event(i),i.type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),i.target=this.element[0],o=i.originalEvent)for(s in o)s in i||(i[s]=o[s]);return this.element.trigger(i,n),!(e.isFunction(r)&&!1===r.apply(this.element[0],[i].concat(n))||i.isDefaultPrevented())}},e.each({show:"fadeIn",hide:"fadeOut"},function(t,i){e.Widget.prototype["_"+t]=function(n,s,o){"string"==typeof s&&(s={effect:s});var r,a=s?!0===s||"number"==typeof s?i:s.effect||i:t;s=s||{},"number"==typeof s&&(s={duration:s}),r=!e.isEmptyObject(s),s.complete=o,s.delay&&n.delay(s.delay),r&&e.effects&&e.effects.effect[a]?n[t](s):a!==t&&n[a]?n[a](s.duration,s.easing,o):n.queue(function(i){e(this)[t](),o&&o.call(n[0]),i()})}}),e.widget}),function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)}(function(e){return function(){function t(e,t,i){return[parseFloat(e[0])*(f.test(e[0])?t/100:1),parseFloat(e[1])*(f.test(e[1])?i/100:1)]}function i(t,i){return parseInt(e.css(t,i),10)||0}function n(t){var i=t[0];return 9===i.nodeType?{width:t.width(),height:t.height(),offset:{top:0,left:0}}:e.isWindow(i)?{width:t.width(),height:t.height(),offset:{top:t.scrollTop(),left:t.scrollLeft()}}:i.preventDefault?{width:0,height:0,offset:{top:i.pageY,left:i.pageX}}:{width:t.outerWidth(),height:t.outerHeight(),offset:t.offset()}}e.ui=e.ui||{};var s,o,r=Math.max,a=Math.abs,u=Math.round,l=/left|center|right/,h=/top|center|bottom/,c=/[\+\-]\d+(\.[\d]+)?%?/,d=/^\w+/,f=/%$/,m=e.fn.position;e.position={scrollbarWidth:function(){if(s!==undefined)return s;var t,i,n=e("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),o=n.children()[0];return e("body").append(n),t=o.offsetWidth,n.css("overflow","scroll"),i=o.offsetWidth,t===i&&(i=n[0].clientWidth),n.remove(),s=t-i},getScrollInfo:function(t){var i=t.isWindow||t.isDocument?"":t.element.css("overflow-x"),n=t.isWindow||t.isDocument?"":t.element.css("overflow-y"),s="scroll"===i||"auto"===i&&t.width<t.element[0].scrollWidth;return{width:"scroll"===n||"auto"===n&&t.height<t.element[0].scrollHeight?e.position.scrollbarWidth():0,height:s?e.position.scrollbarWidth():0}},getWithinInfo:function(t){var i=e(t||window),n=e.isWindow(i[0]),s=!!i[0]&&9===i[0].nodeType;return{element:i,isWindow:n,isDocument:s,offset:i.offset()||{left:0,top:0},scrollLeft:i.scrollLeft(),scrollTop:i.scrollTop(),width:n||s?i.width():i.outerWidth(),height:n||s?i.height():i.outerHeight()}}},e.fn.position=function(s){if(!s||!s.of)return m.apply(this,arguments);s=e.extend({},s);var f,p,v,g,_,b,y=e(s.of),w=e.position.getWithinInfo(s.within),x=e.position.getScrollInfo(w),C=(s.collision||"flip").split(" "),E={};return b=n(y),y[0].preventDefault&&(s.at="left top"),p=b.width,v=b.height,g=b.offset,_=e.extend({},g),e.each(["my","at"],function(){var e,t,i=(s[this]||"").split(" ");1===i.length&&(i=l.test(i[0])?i.concat(["center"]):h.test(i[0])?["center"].concat(i):["center","center"]),i[0]=l.test(i[0])?i[0]:"center",i[1]=h.test(i[1])?i[1]:"center",e=c.exec(i[0]),t=c.exec(i[1]),E[this]=[e?e[0]:0,t?t[0]:0],s[this]=[d.exec(i[0])[0],d.exec(i[1])[0]]}),1===C.length&&(C[1]=C[0]),"right"===s.at[0]?_.left+=p:"center"===s.at[0]&&(_.left+=p/2),"bottom"===s.at[1]?_.top+=v:"center"===s.at[1]&&(_.top+=v/2),f=t(E.at,p,v),_.left+=f[0],_.top+=f[1],this.each(function(){var n,l,h=e(this),c=h.outerWidth(),d=h.outerHeight(),m=i(this,"marginLeft"),b=i(this,"marginTop"),T=c+m+i(this,"marginRight")+x.width,W=d+b+i(this,"marginBottom")+x.height,k=e.extend({},_),A=t(E.my,h.outerWidth(),h.outerHeight());"right"===s.my[0]?k.left-=c:"center"===s.my[0]&&(k.left-=c/2),"bottom"===s.my[1]?k.top-=d:"center"===s.my[1]&&(k.top-=d/2),k.left+=A[0],k.top+=A[1],o||(k.left=u(k.left),k.top=u(k.top)),n={marginLeft:m,marginTop:b},e.each(["left","top"],function(t,i){e.ui.position[C[t]]&&e.ui.position[C[t]][i](k,{targetWidth:p,targetHeight:v,elemWidth:c,elemHeight:d,collisionPosition:n,collisionWidth:T,collisionHeight:W,offset:[f[0]+A[0],f[1]+A[1]],my:s.my,at:s.at,within:w,elem:h})}),s.using&&(l=function(e){var t=g.left-k.left,i=t+p-c,n=g.top-k.top,o=n+v-d,u={target:{element:y,left:g.left,top:g.top,width:p,height:v},element:{element:h,left:k.left,top:k.top,width:c,height:d},horizontal:i<0?"left":t>0?"right":"center",vertical:o<0?"top":n>0?"bottom":"middle"};p<c&&a(t+i)<p&&(u.horizontal="center"),v<d&&a(n+o)<v&&(u.vertical="middle"),r(a(t),a(i))>r(a(n),a(o))?u.important="horizontal":u.important="vertical",s.using.call(this,e,u)}),h.offset(e.extend(k,{using:l}))})},e.ui.position={fit:{left:function(e,t){var i,n=t.within,s=n.isWindow?n.scrollLeft:n.offset.left,o=n.width,a=e.left-t.collisionPosition.marginLeft,u=s-a,l=a+t.collisionWidth-o-s;t.collisionWidth>o?u>0&&l<=0?(i=e.left+u+t.collisionWidth-o-s,e.left+=u-i):e.left=l>0&&u<=0?s:u>l?s+o-t.collisionWidth:s:u>0?e.left+=u:l>0?e.left-=l:e.left=r(e.left-a,e.left)},top:function(e,t){var i,n=t.within,s=n.isWindow?n.scrollTop:n.offset.top,o=t.within.height,a=e.top-t.collisionPosition.marginTop,u=s-a,l=a+t.collisionHeight-o-s;t.collisionHeight>o?u>0&&l<=0?(i=e.top+u+t.collisionHeight-o-s,e.top+=u-i):e.top=l>0&&u<=0?s:u>l?s+o-t.collisionHeight:s:u>0?e.top+=u:l>0?e.top-=l:e.top=r(e.top-a,e.top)}},flip:{left:function(e,t){var i,n,s=t.within,o=s.offset.left+s.scrollLeft,r=s.width,u=s.isWindow?s.scrollLeft:s.offset.left,l=e.left-t.collisionPosition.marginLeft,h=l-u,c=l+t.collisionWidth-r-u,d="left"===t.my[0]?-t.elemWidth:"right"===t.my[0]?t.elemWidth:0,f="left"===t.at[0]?t.targetWidth:"right"===t.at[0]?-t.targetWidth:0,m=-2*t.offset[0];h<0?((i=e.left+d+f+m+t.collisionWidth-r-o)<0||i<a(h))&&(e.left+=d+f+m):c>0&&((n=e.left-t.collisionPosition.marginLeft+d+f+m-u)>0||a(n)<c)&&(e.left+=d+f+m)},top:function(e,t){var i,n,s=t.within,o=s.offset.top+s.scrollTop,r=s.height,u=s.isWindow?s.scrollTop:s.offset.top,l=e.top-t.collisionPosition.marginTop,h=l-u,c=l+t.collisionHeight-r-u,d="top"===t.my[1],f=d?-t.elemHeight:"bottom"===t.my[1]?t.elemHeight:0,m="top"===t.at[1]?t.targetHeight:"bottom"===t.at[1]?-t.targetHeight:0,p=-2*t.offset[1];h<0?((n=e.top+f+m+p+t.collisionHeight-r-o)<0||n<a(h))&&(e.top+=f+m+p):c>0&&((i=e.top-t.collisionPosition.marginTop+f+m+p-u)>0||a(i)<c)&&(e.top+=f+m+p)}},flipfit:{left:function(){e.ui.position.flip.left.apply(this,arguments),e.ui.position.fit.left.apply(this,arguments)},top:function(){e.ui.position.flip.top.apply(this,arguments),e.ui.position.fit.top.apply(this,arguments)}}},function(){var t,i,n,s,r,a=document.getElementsByTagName("body")[0],u=document.createElement("div");t=document.createElement(a?"div":"body"),n={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},a&&e.extend(n,{position:"absolute",left:"-1000px",top:"-1000px"});for(r in n)t.style[r]=n[r];t.appendChild(u),i=a||document.documentElement,i.insertBefore(t,i.firstChild),u.style.cssText="position: absolute; left: 10.7432222px;",s=e(u).offset().left,o=s>10&&s<11,t.innerHTML="",i.removeChild(t)}()}(),e.ui.position}),function(e){"function"==typeof define&&define.amd?define(["jquery","./core","./widget","./position"],e):e(jQuery)}(function(e){return e.widget("ui.menu",{version:"1.11.4",defaultElement:"<ul>",delay:300,options:{icons:{submenu:"ui-icon-carat-1-e"},items:"> *",menus:"ul",position:{my:"left-1 top",at:"right top"},role:"menu",blur:null,focus:null,select:null},_create:function(){this.activeMenu=this.element,this.mouseHandled=!1,this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content").toggleClass("ui-menu-icons",!!this.element.find(".ui-icon").length).attr({role:this.options.role,tabIndex:0}),this.options.disabled&&this.element.addClass("ui-state-disabled").attr("aria-disabled","true"),this._on({"mousedown .ui-menu-item":function(e){e.preventDefault()},"click .ui-menu-item":function(t){var i=e(t.target);!this.mouseHandled&&i.not(".ui-state-disabled").length&&(this.select(t),t.isPropagationStopped()||(this.mouseHandled=!0),i.has(".ui-menu").length?this.expand(t):!this.element.is(":focus")&&e(this.document[0].activeElement).closest(".ui-menu").length&&(this.element.trigger("focus",[!0]),this.active&&1===this.active.parents(".ui-menu").length&&clearTimeout(this.timer)))},"mouseenter .ui-menu-item":function(t){if(!this.previousFilter){var i=e(t.currentTarget);i.siblings(".ui-state-active").removeClass("ui-state-active"),this.focus(t,i)}},mouseleave:"collapseAll","mouseleave .ui-menu":"collapseAll",focus:function(e,t){var i=this.active||this.element.find(this.options.items).eq(0);t||this.focus(e,i)},blur:function(t){this._delay(function(){e.contains(this.element[0],this.document[0].activeElement)||this.collapseAll(t)})},keydown:"_keydown"}),this.refresh(),this._on(this.document,{click:function(e){this._closeOnDocumentClick(e)&&this.collapseAll(e),this.mouseHandled=!1}})},_destroy:function(){this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-menu-icons ui-front").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(),this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").removeUniqueId().removeClass("ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function(){var t=e(this);t.data("ui-menu-submenu-carat")&&t.remove()}),this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")},_keydown:function(t){var i,n,s,o,r=!0;switch(t.keyCode){case e.ui.keyCode.PAGE_UP:this.previousPage(t);break;case e.ui.keyCode.PAGE_DOWN:this.nextPage(t);break;case e.ui.keyCode.HOME:this._move("first","first",t);break;case e.ui.keyCode.END:this._move("last","last",t);break;case e.ui.keyCode.UP:this.previous(t);break;case e.ui.keyCode.DOWN:this.next(t);break;case e.ui.keyCode.LEFT:this.collapse(t);break;case e.ui.keyCode.RIGHT:this.active&&!this.active.is(".ui-state-disabled")&&this.expand(t);break;case e.ui.keyCode.ENTER:case e.ui.keyCode.SPACE:this._activate(t);break;case e.ui.keyCode.ESCAPE:this.collapse(t);break;default:r=!1,n=this.previousFilter||"",s=String.fromCharCode(t.keyCode),o=!1,clearTimeout(this.filterTimer),s===n?o=!0:s=n+s,i=this._filterMenuItems(s),i=o&&-1!==i.index(this.active.next())?this.active.nextAll(".ui-menu-item"):i,i.length||(s=String.fromCharCode(t.keyCode),i=this._filterMenuItems(s)),i.length?(this.focus(t,i),this.previousFilter=s,this.filterTimer=this._delay(function(){delete this.previousFilter},1e3)):delete this.previousFilter}r&&t.preventDefault()},_activate:function(e){this.active.is(".ui-state-disabled")||(this.active.is("[aria-haspopup='true']")?this.expand(e):this.select(e))},refresh:function(){var t,i,n=this,s=this.options.icons.submenu,o=this.element.find(this.options.menus);this.element.toggleClass("ui-menu-icons",!!this.element.find(".ui-icon").length),o.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-front").hide().attr({role:this.options.role,"aria-hidden":"true","aria-expanded":"false"}).each(function(){var t=e(this),i=t.parent(),n=e("<span>").addClass("ui-menu-icon ui-icon "+s).data("ui-menu-submenu-carat",!0);i.attr("aria-haspopup","true").prepend(n),t.attr("aria-labelledby",i.attr("id"))}),t=o.add(this.element),i=t.find(this.options.items),i.not(".ui-menu-item").each(function(){var t=e(this);n._isDivider(t)&&t.addClass("ui-widget-content ui-menu-divider")}),i.not(".ui-menu-item, .ui-menu-divider").addClass("ui-menu-item").uniqueId().attr({tabIndex:-1,role:this._itemRole()}),i.filter(".ui-state-disabled").attr("aria-disabled","true"),this.active&&!e.contains(this.element[0],this.active[0])&&this.blur()},_itemRole:function(){return{menu:"menuitem",listbox:"option"}[this.options.role]},_setOption:function(e,t){"icons"===e&&this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(t.submenu),"disabled"===e&&this.element.toggleClass("ui-state-disabled",!!t).attr("aria-disabled",t),this._super(e,t)},focus:function(e,t){var i,n;this.blur(e,e&&"focus"===e.type),this._scrollIntoView(t),this.active=t.first(),n=this.active.addClass("ui-state-focus").removeClass("ui-state-active"),this.options.role&&this.element.attr("aria-activedescendant",n.attr("id")),this.active.parent().closest(".ui-menu-item").addClass("ui-state-active"),e&&"keydown"===e.type?this._close():this.timer=this._delay(function(){this._close()},this.delay),i=t.children(".ui-menu"),i.length&&e&&/^mouse/.test(e.type)&&this._startOpening(i),this.activeMenu=t.parent(),this._trigger("focus",e,{item:t})},_scrollIntoView:function(t){var i,n,s,o,r,a;this._hasScroll()&&(i=parseFloat(e.css(this.activeMenu[0],"borderTopWidth"))||0,n=parseFloat(e.css(this.activeMenu[0],"paddingTop"))||0,s=t.offset().top-this.activeMenu.offset().top-i-n,o=this.activeMenu.scrollTop(),r=this.activeMenu.height(),a=t.outerHeight(),s<0?this.activeMenu.scrollTop(o+s):s+a>r&&this.activeMenu.scrollTop(o+s-r+a))},blur:function(e,t){t||clearTimeout(this.timer),this.active&&(this.active.removeClass("ui-state-focus"),this.active=null,this._trigger("blur",e,{item:this.active}))},_startOpening:function(e){clearTimeout(this.timer),"true"===e.attr("aria-hidden")&&(this.timer=this._delay(function(){this._close(),this._open(e)},this.delay))},_open:function(t){var i=e.extend({of:this.active},this.options.position);clearTimeout(this.timer),this.element.find(".ui-menu").not(t.parents(".ui-menu")).hide().attr("aria-hidden","true"),t.show().removeAttr("aria-hidden").attr("aria-expanded","true").position(i)},collapseAll:function(t,i){clearTimeout(this.timer),this.timer=this._delay(function(){var n=i?this.element:e(t&&t.target).closest(this.element.find(".ui-menu"));n.length||(n=this.element),this._close(n),this.blur(t),this.activeMenu=n},this.delay)},_close:function(e){e||(e=this.active?this.active.parent():this.element),e.find(".ui-menu").hide().attr("aria-hidden","true").attr("aria-expanded","false").end().find(".ui-state-active").not(".ui-state-focus").removeClass("ui-state-active")},_closeOnDocumentClick:function(t){return!e(t.target).closest(".ui-menu").length},_isDivider:function(e){return!/[^\-\u2014\u2013\s]/.test(e.text())},collapse:function(e){var t=this.active&&this.active.parent().closest(".ui-menu-item",this.element);t&&t.length&&(this._close(),this.focus(e,t))},expand:function(e){var t=this.active&&this.active.children(".ui-menu ").find(this.options.items).first();t&&t.length&&(this._open(t.parent()),this._delay(function(){this.focus(e,t)}))},next:function(e){this._move("next","first",e)},previous:function(e){this._move("prev","last",e)},isFirstItem:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length},isLastItem:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length},_move:function(e,t,i){var n;this.active&&(n="first"===e||"last"===e?this.active["first"===e?"prevAll":"nextAll"](".ui-menu-item").eq(-1):this.active[e+"All"](".ui-menu-item").eq(0)),n&&n.length&&this.active||(n=this.activeMenu.find(this.options.items)[t]()),this.focus(i,n)},nextPage:function(t){var i,n,s;if(!this.active)return void this.next(t);this.isLastItem()||(this._hasScroll()?(n=this.active.offset().top,s=this.element.height(),this.active.nextAll(".ui-menu-item").each(function(){return i=e(this),i.offset().top-n-s<0}),this.focus(t,i)):this.focus(t,this.activeMenu.find(this.options.items)[this.active?"last":"first"]()))},previousPage:function(t){var i,n,s;if(!this.active)return void this.next(t);this.isFirstItem()||(this._hasScroll()?(n=this.active.offset().top,s=this.element.height(),this.active.prevAll(".ui-menu-item").each(function(){return i=e(this),i.offset().top-n+s>0}),this.focus(t,i)):this.focus(t,this.activeMenu.find(this.options.items).first()))},_hasScroll:function(){return this.element.outerHeight()<this.element.prop("scrollHeight")},select:function(t){this.active=this.active||e(t.target).closest(".ui-menu-item");var i={item:this.active};this.active.has(".ui-menu").length||this.collapseAll(t,!0),this._trigger("select",t,i)},_filterMenuItems:function(t){var i=t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&"),n=new RegExp("^"+i,"i");return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function(){return n.test(e.trim(e(this).text()))})}})}),function(e){"function"==typeof define&&define.amd?define(["jquery","./core","./widget","./position","./menu"],e):e(jQuery)}(function(e){return e.widget("ui.autocomplete",{version:"1.11.4",defaultElement:"<input>",options:{appendTo:null,autoFocus:!1,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null,change:null,close:null,focus:null,open:null,response:null,search:null,select:null},requestIndex:0,pending:0,_create:function(){var t,i,n,s=this.element[0].nodeName.toLowerCase(),o="textarea"===s,r="input"===s;this.isMultiLine=!!o||!r&&this.element.prop("isContentEditable"),this.valueMethod=this.element[o||r?"val":"text"],this.isNewMenu=!0,this.element.addClass("ui-autocomplete-input").attr("autocomplete","off"),this._on(this.element,{keydown:function(s){if(this.element.prop("readOnly"))return t=!0,n=!0,void(i=!0);t=!1,n=!1,i=!1;var o=e.ui.keyCode;switch(s.keyCode){case o.PAGE_UP:t=!0,this._move("previousPage",s);break;case o.PAGE_DOWN:t=!0,this._move("nextPage",s);break;case o.UP:t=!0,this._keyEvent("previous",s);break;case o.DOWN:t=!0,this._keyEvent("next",s);break;case o.ENTER:this.menu.active&&(t=!0,s.preventDefault(),this.menu.select(s));break;case o.TAB:this.menu.active&&this.menu.select(s);break;case o.ESCAPE:this.menu.element.is(":visible")&&(this.isMultiLine||this._value(this.term),this.close(s),s.preventDefault());break;default:i=!0,this._searchTimeout(s)}},keypress:function(n){if(t)return t=!1,void(this.isMultiLine&&!this.menu.element.is(":visible")||n.preventDefault());if(!i){var s=e.ui.keyCode;switch(n.keyCode){case s.PAGE_UP:this._move("previousPage",n);break;case s.PAGE_DOWN:this._move("nextPage",n);break;case s.UP:this._keyEvent("previous",n);break;case s.DOWN:this._keyEvent("next",n)}}},input:function(e){if(n)return n=!1,void e.preventDefault();this._searchTimeout(e)},focus:function(){this.selectedItem=null,this.previous=this._value()},blur:function(e){if(this.cancelBlur)return void delete this.cancelBlur;clearTimeout(this.searching),this.close(e),this._change(e)}}),this._initSource(),this.menu=e("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({role:null}).hide().menu("instance"),this._on(this.menu.element,{mousedown:function(t){t.preventDefault(),this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur});var i=this.menu.element[0];e(t.target).closest(".ui-menu-item").length||this._delay(function(){var t=this;this.document.one("mousedown",function(n){n.target===t.element[0]||n.target===i||e.contains(i,n.target)||t.close()})})},menufocus:function(t,i){var n,s;if(this.isNewMenu&&(this.isNewMenu=!1,t.originalEvent&&/^mouse/.test(t.originalEvent.type)))return this.menu.blur(),void this.document.one("mousemove",function(){e(t.target).trigger(t.originalEvent)});s=i.item.data("ui-autocomplete-item"),!1!==this._trigger("focus",t,{item:s})&&t.originalEvent&&/^key/.test(t.originalEvent.type)&&this._value(s.value),(n=i.item.attr("aria-label")||s.value)&&e.trim(n).length&&(this.liveRegion.children().hide(),e("<div>").text(n).appendTo(this.liveRegion))},menuselect:function(e,t){var i=t.item.data("ui-autocomplete-item"),n=this.previous;this.element[0]!==this.document[0].activeElement&&(this.element.focus(),this.previous=n,this._delay(function(){this.previous=n,this.selectedItem=i})),!1!==this._trigger("select",e,{item:i})&&this._value(i.value),this.term=this._value(),this.close(e),this.selectedItem=i}}),this.liveRegion=e("<span>",{role:"status","aria-live":"assertive","aria-relevant":"additions"}).addClass("ui-helper-hidden-accessible").appendTo(this.document[0].body),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_destroy:function(){clearTimeout(this.searching),this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"),this.menu.element.remove(),this.liveRegion.remove()},_setOption:function(e,t){this._super(e,t),"source"===e&&this._initSource(),"appendTo"===e&&this.menu.element.appendTo(this._appendTo()),"disabled"===e&&t&&this.xhr&&this.xhr.abort()},_appendTo:function(){var t=this.options.appendTo;return t&&(t=t.jquery||t.nodeType?e(t):this.document.find(t).eq(0)),t&&t[0]||(t=this.element.closest(".ui-front")),t.length||(t=this.document[0].body),t},_initSource:function(){var t,i,n=this;e.isArray(this.options.source)?(t=this.options.source,this.source=function(i,n){n(e.ui.autocomplete.filter(t,i.term))}):"string"==typeof this.options.source?(i=this.options.source,this.source=function(t,s){n.xhr&&n.xhr.abort(),n.xhr=e.ajax({url:i,data:t,dataType:"json",success:function(e){s(e)},error:function(){s([])}})}):this.source=this.options.source},_searchTimeout:function(e){clearTimeout(this.searching),this.searching=this._delay(function(){var t=this.term===this._value(),i=this.menu.element.is(":visible"),n=e.altKey||e.ctrlKey||e.metaKey||e.shiftKey;t&&(!t||i||n)||(this.selectedItem=null,this.search(null,e))},this.options.delay)},search:function(e,t){return e=null!=e?e:this._value(),this.term=this._value(),e.length<this.options.minLength?this.close(t):!1!==this._trigger("search",t)?this._search(e):void 0},_search:function(e){this.pending++,this.element.addClass("ui-autocomplete-loading"),this.cancelSearch=!1,this.source({term:e},this._response())},_response:function(){var t=++this.requestIndex;return e.proxy(function(e){t===this.requestIndex&&this.__response(e),--this.pending||this.element.removeClass("ui-autocomplete-loading")},this)},__response:function(e){e&&(e=this._normalize(e)),this._trigger("response",null,{content:e}),!this.options.disabled&&e&&e.length&&!this.cancelSearch?(this._suggest(e),this._trigger("open")):this._close()},close:function(e){this.cancelSearch=!0,this._close(e)},_close:function(e){this.menu.element.is(":visible")&&(this.menu.element.hide(),this.menu.blur(),this.isNewMenu=!0,this._trigger("close",e))},_change:function(e){this.previous!==this._value()&&this._trigger("change",e,{item:this.selectedItem})},_normalize:function(t){return t.length&&t[0].label&&t[0].value?t:e.map(t,function(t){return"string"==typeof t?{label:t,value:t}:e.extend({},t,{label:t.label||t.value,value:t.value||t.label})})},_suggest:function(t){var i=this.menu.element.empty();this._renderMenu(i,t),this.isNewMenu=!0,this.menu.refresh(),i.show(),this._resizeMenu(),i.position(e.extend({of:this.element},this.options.position)),this.options.autoFocus&&this.menu.next()},_resizeMenu:function(){var e=this.menu.element;e.outerWidth(Math.max(e.width("").outerWidth()+1,this.element.outerWidth()))},_renderMenu:function(t,i){var n=this;e.each(i,function(e,i){n._renderItemData(t,i)})},
_renderItemData:function(e,t){return this._renderItem(e,t).data("ui-autocomplete-item",t)},_renderItem:function(t,i){return e("<li>").text(i.label).appendTo(t)},_move:function(e,t){return this.menu.element.is(":visible")?this.menu.isFirstItem()&&/^previous/.test(e)||this.menu.isLastItem()&&/^next/.test(e)?(this.isMultiLine||this._value(this.term),void this.menu.blur()):void this.menu[e](t):void this.search(null,t)},widget:function(){return this.menu.element},_value:function(){return this.valueMethod.apply(this.element,arguments)},_keyEvent:function(e,t){this.isMultiLine&&!this.menu.element.is(":visible")||(this._move(e,t),t.preventDefault())}}),e.extend(e.ui.autocomplete,{escapeRegex:function(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")},filter:function(t,i){var n=new RegExp(e.ui.autocomplete.escapeRegex(i),"i");return e.grep(t,function(e){return n.test(e.label||e.value||e)})}}),e.widget("ui.autocomplete",e.ui.autocomplete,{options:{messages:{noResults:"No search results.",results:function(e){return e+(e>1?" results are":" result is")+" available, use up and down arrow keys to navigate."}}},__response:function(t){var i;this._superApply(arguments),this.options.disabled||this.cancelSearch||(i=t&&t.length?this.options.messages.results(t.length):this.options.messages.noResults,this.liveRegion.children().hide(),e("<div>").text(i).appendTo(this.liveRegion))}}),e.ui.autocomplete});