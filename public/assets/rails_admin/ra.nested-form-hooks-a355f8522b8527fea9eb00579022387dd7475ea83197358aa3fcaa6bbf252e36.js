(function(){var e;(e=jQuery)(document).ready(function(){return window.nestedFormEvents.insertFields=function(d,n,t){var o;return(o=e(t).closest(".controls").siblings(".tab-content")).append(d),o.children().last()}}),e(document).on("nested:fieldAdded","form",function(d){var n,t,o,i,r,l,a;if(t=d.field.addClass("tab-pane").attr("id","unique-id-"+(new Date).getTime()),i=e('<li><a data-toggle="tab" href="#'+t.attr("id")+'">'+t.children(".object-infos").data("object-label")+"</a></li>"),r=void 0!==(n=(l=t.closest(".control-group")).children(".controls")).data("nestedone"),o=n.children(".nav"),d=l.children(".tab-content"),a=n.find(".toggler"),o.append(i),e(window.document).trigger("rails_admin.dom_ready",[t,l]),i.children("a").tab("show"),r||o.select(":hidden").show("slow"),d.select(":hidden").show("slow"),a.addClass("active").removeClass("disabled").children("i").addClass("icon-chevron-down").removeClass("icon-chevron-right"),r)return n.find(".add_nested_fields").removeClass("add_nested_fields").html(t.children(".object-infos").data("object-label"))}),e(document).on("nested:fieldRemoved","form",function(d){var n,t,o,i,r,l,a;return o=(r=(i=d.field).closest(".control-group").children(".controls").children(".nav")).children("li").has('a[href="#'+i.attr("id")+'"]'),l=void 0!==(t=i.closest(".control-group").children(".controls")).data("nestedone"),a=t.find(".toggler"),(o.next().length?o.next():o.prev()).children("a:first").tab("show"),o.remove(),0===r.children().length&&(r.select(":visible").hide("slow"),a.removeClass("active").addClass("disabled").children("i").removeClass("icon-chevron-down").addClass("icon-chevron-right")),l&&(n=a.next()).addClass("add_nested_fields").html(n.data("add-label")),i.find("[required]").each(function(){return e(this).removeAttr("required")})})}).call(this);