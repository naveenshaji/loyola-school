function updateLogoColor(e){var t=$(".deco");t.each(function(){var t=$(this);if(t.is("img")){var o=t.attr("src"),a=o.split("/").reverse();t.attr("src","/img/themes/"+e+"/"+a[0])}})}!function(e){e.fn.gMap=function(t,o){switch(t){case"addMarker":return e(this).trigger("gMap.addMarker",[o.latitude,o.longitude,o.content,o.icon,o.popup]);case"centerAt":return e(this).trigger("gMap.centerAt",[o.latitude,o.longitude,o.zoom]);case"clearMarkers":return e(this).trigger("gMap.clearMarkers")}var a=e.extend({},e.fn.gMap.defaults,t);return this.each(function(){var t=new google.maps.Map(this);e(this).data("gMap.reference",t);var o=new google.maps.Geocoder;a.address?o.geocode({address:a.address},function(e){e&&e.length&&t.setCenter(e[0].geometry.location)}):a.latitude&&a.longitude?t.setCenter(new google.maps.LatLng(a.latitude,a.longitude)):e.isArray(a.markers)&&a.markers.length>0?a.markers[0].address?o.geocode({address:a.markers[0].address},function(e){e&&e.length>0&&t.setCenter(e[0].geometry.location)}):t.setCenter(new google.maps.LatLng(a.markers[0].latitude,a.markers[0].longitude)):t.setCenter(new google.maps.LatLng(34.885931,9.84375)),t.setZoom(a.zoom),t.setMapTypeId(google.maps.MapTypeId[a.maptype]);var n={scrollwheel:a.scrollwheel,disableDoubleClickZoom:!a.doubleclickzoom};a.controls===!1?e.extend(n,{disableDefaultUI:!0}):0!==a.controls.length&&e.extend(n,a.controls,{disableDefaultUI:!0}),t.setOptions(n);var i,r,s=new google.maps.Marker;i=new google.maps.MarkerImage(a.icon.image),i.size=new google.maps.Size(a.icon.iconsize[0],a.icon.iconsize[1]),i.anchor=new google.maps.Point(a.icon.iconanchor[0],a.icon.iconanchor[1]),s.setIcon(i),a.icon.shadow&&(r=new google.maps.MarkerImage(a.icon.shadow),r.size=new google.maps.Size(a.icon.shadowsize[0],a.icon.shadowsize[1]),r.anchor=new google.maps.Point(a.icon.shadowanchor[0],a.icon.shadowanchor[1]),s.setShadow(r)),e(this).bind("gMap.centerAt",function(e,o,a,n){n&&t.setZoom(n),t.panTo(new google.maps.LatLng(parseFloat(o),parseFloat(a)))});var l=[];e(this).bind("gMap.clearMarkers",function(){for(;l[0];)l.pop().setMap(null)});var c;e(this).bind("gMap.addMarker",function(e,o,n,i,r,d){var u,h,p=new google.maps.LatLng(parseFloat(o),parseFloat(n)),g=new google.maps.Marker({position:p});if(r?(u=new google.maps.MarkerImage(r.image),u.size=new google.maps.Size(r.iconsize[0],r.iconsize[1]),u.anchor=new google.maps.Point(r.iconanchor[0],r.iconanchor[1]),g.setIcon(u),r.shadow&&(h=new google.maps.MarkerImage(r.shadow),h.size=new google.maps.Size(r.shadowsize[0],r.shadowsize[1]),h.anchor=new google.maps.Point(r.shadowanchor[0],r.shadowanchor[1]),s.setShadow(h))):(g.setIcon(s.getIcon()),g.setShadow(s.getShadow())),i){"_latlng"===i&&(i=o+", "+n);var f=new google.maps.InfoWindow({content:a.html_prepend+i+a.html_append});google.maps.event.addListener(g,"click",function(){c&&c.close(),f.open(t,g),c=f}),d&&google.maps.event.addListenerOnce(t,"tilesloaded",function(){f.open(t,g)})}g.setMap(t),l.push(g)});for(var d,u=this,h=function(t){return function(o){o&&o.length>0&&e(u).trigger("gMap.addMarker",[o[0].geometry.location.lat(),o[0].geometry.location.lng(),t.html,t.icon,t.popup])}},p=0;p<a.markers.length;p++)d=a.markers[p],d.address?("_address"===d.html&&(d.html=d.address),o.geocode({address:d.address},h(d))):e(this).trigger("gMap.addMarker",[d.latitude,d.longitude,d.html,d.icon,d.popup])})},e.fn.gMap.defaults={address:"",latitude:0,longitude:0,zoom:1,markers:[],controls:[],scrollwheel:!1,doubleclickzoom:!0,maptype:"ROADMAP",html_prepend:'<div class="gmap_marker">',html_append:"</div>",icon:{image:"http://www.google.com/mapfiles/marker.png",shadow:"http://www.google.com/mapfiles/shadow50.png",iconsize:[20,34],shadowsize:[37,34],iconanchor:[9,34],shadowanchor:[6,34]}}}(jQuery),$(window).load(function(){jQuery("#themes_panel").animate({opacity:1},400)}),$.cookie=function(e,t,o){if("undefined"==typeof t){var a=null;if(document.cookie&&""!==document.cookie)for(var n=document.cookie.split(";"),i=0;i<n.length;i++){var r=jQuery.trim(n[i]);if(r.substring(0,e.length+1)===e+"="){a=decodeURIComponent(r.substring(e.length+1));break}}return a}o=o||{},null===t&&(t="",o.expires=-1);var s="";if(o.expires&&("number"==typeof o.expires||o.expires.toUTCString)){var l;"number"==typeof o.expires?(l=new Date,l.setTime(l.getTime()+24*o.expires*60*60*1e3)):l=o.expires,s="; expires="+l.toUTCString()}var c=o.path?"; path="+o.path:"",d=o.domain?"; domain="+o.domain:"",u=o.secure?"; secure":"";document.cookie=[e,"=",encodeURIComponent(t),s,c,d,u].join("")},jQuery(function(){var e=jQuery("#themes_panel"),t=jQuery("#themes_menu").outerWidth();e.css("left",0),e.animate({left:-t},400);var o=function(){e.animate({left:0===parseInt(e.css("left"),10)?-t:0},400)};if(jQuery("#toggle_button").click(function(){return o(),!1}),null!==$.cookie("skin")&&($.cookie("skin",$.cookie("skin"),{expires:0,path:"/"}),jQuery("#primary_color_scheme").attr("href","styles/theme_"+$.cookie("skin")+".css"),updateLogoColor($.cookie("skin"))),null!==$.cookie("layout")){var a=$.cookie("layout");$.cookie("layout",a,{expires:0,path:"/"}),"boxed"===a?jQuery("body").addClass("boxed-layout"):jQuery("body").removeClass("boxed-layout"),jQuery("#themes_panel .layout-switcher").val(a),window.Ottavio.refresh()}jQuery("#themes_panel ul.theme.cookie_colors li a").click(function(){var e=jQuery(this).attr("title");return $.cookie("skin",e,{expires:0,path:"/"}),jQuery("#primary_color_scheme").attr("href","styles/theme_"+e+".css"),updateLogoColor(e),o(),!1}),jQuery("#themes_panel .layout-switcher").change(function(){var e=$(this),t=e.val();"boxed"===t?jQuery("body").addClass("boxed-layout"):jQuery("body").removeClass("boxed-layout"),$.cookie("layout",t,{expires:0,path:"/"}),window.Ottavio.refresh(),o()})}),circleDiagram=function(e,t,o,a){"use strict";var n={init:function(){this.diagram()},random:function(e,t){return Math.floor(Math.random()*(t-e+1)+e)},diagram:function(){var i=new Raphael(e,t,o),r=73,s=t/2,l=o/2,c=o/6.5,d=o/25,u=o/12.5;i.circle(s,l,c).attr({stroke:"none",fill:"#193340"});var h=i.text(s,l,"Skills").attr({font:"20px Arial",fill:"#fff"}).toFront();i.customAttributes.arc=function(e,t,o){var a=3.6*e,i=360===a?359.99:a,r=n.random(91,240),c=(r-i)*Math.PI/180,d=r*Math.PI/180,u=s+o*Math.cos(d),h=l-o*Math.sin(d),p=s+o*Math.cos(c),g=l-o*Math.sin(c),f=[["M",u,h],["A",o,o,0,+(i>180),1,p,g]];return{path:f,stroke:t}},$(a).find(".arc").each(function(){var e=$(this),t=e.find(".color").val(),o=e.find(".percent").val(),a=e.find(".text").text();r+=20;var n=i.path().attr({arc:[o,t,r],"stroke-width":d});n.mouseover(function(){this.animate({"stroke-width":u,opacity:.75},1e3,"elastic"),"VML"!==Raphael.type&&this.toFront(),h.animate({opacity:0},500,">",function(){this.attr({text:a+"\n"+o+"%"}).animate({opacity:1},500,"<")})}).mouseout(function(){this.animate({"stroke-width":d,opacity:1},1e3,"elastic")})})}};return n.init()};var Ottavio=function(){var e=[],t={Android:function(){return navigator.userAgent.match(/Android/i)},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i)},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},Opera:function(){return navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return t.Android()||t.BlackBerry()||t.iOS()||t.Opera()||t.Windows()}},o=function(){for(var t in e)e[t]()},a=function(){$(window).trigger("debouncedresize.slitslider").trigger("resize")};return{events:e,isMobile:t,init:o,refresh:a}}();Ottavio.slider=function(){var e=$("#nav-arrows"),t=$("#nav-dots > span"),o=$("#slider"),a=o.slitslider({onBeforeChange:function(e,o){t.removeClass("nav-dot-current"),t.eq(o).addClass("nav-dot-current")}}),n=function(){i()},i=function(){e.children(":last").on("click",function(){return a.next(),!1}),e.children(":first").on("click",function(){return a.previous(),!1}),t.each(function(e){$(this).on("click",function(){var o=$(this);return a.isActive()||(t.removeClass("nav-dot-current"),o.addClass("nav-dot-current")),a.jump(e+1),!1})}),o.show()},r=function(){$(window).trigger("debouncedresize.slitslider").trigger("resize")};return{init:n,refresh:r}}(),Ottavio.events.push(Ottavio.slider.init),Ottavio.searchButton=function(){var e="54px";$(".search_button").length&&$(".search_button").click(function(t){t.preventDefault(),0===$(".h_search_form").height()?($('.h_search_form input[type="text"]').focus(),$(".h_search_form").stop().animate({height:e},150)):$(".h_search_form").stop().animate({height:"0"},150),$(window).scroll(function(){0!==$(".h_search_form").height()&&$(".h_search_form").stop().animate({height:"0"},150)}),$(".h_search_close").click(function(e){e.preventDefault(),$(".h_search_form").stop().animate({height:"0"},150)})})},Ottavio.events.push(Ottavio.searchButton),Ottavio.pieChart=function(e){var t=1500;$(e).fadeIn("slow").easyPieChart({barColor:$(".bg-primary").css("backgroundColor"),trackColor:!1,scaleColor:!1,scaleLength:0,lineCap:"square",lineWidth:5,size:160,animate:{duration:t,enabled:!0},onStart:function(){$(e).find(".counter").countTo({speed:t})}})},Ottavio.events.push(Ottavio.pieChart),Ottavio.sliderControl=function(){var e=$(".filter_price");if(e.length>0){var t=e.parent().find(".price_current");e.slider({tooltip:"hide"}).on("slide",function(e){t.text(e.value.join(" - "))})}},Ottavio.events.push(Ottavio.sliderControl),Ottavio.accordionIcon=function(){var e=$("div.panel-collapse"),t=function(e){$(e.target).prev(".accordion-heading").find(".accordion-icon").toggleClass("fa-minus fa-plus")};e.on("hidden.bs.collapse",t).on("shown.bs.collapse",t)},Ottavio.events.push(Ottavio.accordionIcon),Ottavio.scrollController=function(){function e(){return o}var t=new ScrollMagic,o=$(window).innerHeight(),a=$("#main-navigation"),n=$("#one-page-menu"),i=$("#back_to_top"),r=$(".parallax"),s=$(".fading-title"),l=$("#charts-wrapper"),c=$("#timer-wrapper");if(t.scrollTo(function(e){TweenMax.to(window,.8,{scrollTo:{y:e}})}),a.length>0&&new ScrollScene({offset:a.height()}).setClassToggle(a,"opaque").addTo(t),i.length>0){var d=e();new ScrollScene({offset:d}).addTo(t).on("enter",function(){i.fadeIn("fast")}).on("leave",function(){i.fadeOut("slow")}),i.click(function(e){e.preventDefault(),t.scrollTo(0)})}if(n.length>0&&n.find("a[href^=#]").each(function(){var e=$(this),o=e.attr("href"),a=$(o).outerHeight();new ScrollScene({triggerElement:o,triggerHook:"onCenter",duration:a}).setClassToggle(e.parent(),"active").addTo(t),e.click(function(e){o.length>0&&(e.preventDefault(),t.scrollTo(o),window.history&&window.history.pushState&&history.pushState("",document.title,o))})}),r.length>0){var u=Ottavio.isMobile.any();null===u&&r.each(function(){var o=$(this),a=o.outerHeight()+e();o.css({backgroundSize:"110%"}),new ScrollScene({triggerElement:o,duration:a,triggerHook:"onEnter"}).setTween(TweenMax.to(o,1,{backgroundPosition:"100% 50%",ease:Linear.easeNone})).addTo(t)})}s.length>0&&s.each(function(){var o=$(this),a=o.find(".section-title").first(),n=o.outerHeight()+e(),i=.35*n,r=1/n;new ScrollScene({triggerElement:o,duration:n,triggerHook:"onLeave"}).setTween(TweenMax.to(a,1,{marginTop:i+"px",marginBottom:-Math.abs(i)+"px",opacity:r})).addTo(t)}),l.length>0&&new ScrollScene({triggerElement:l}).addTo(t).on("enter",function(){Ottavio.pieChart(".chart")}),c.length>0&&new ScrollScene({triggerElement:c}).addTo(t).on("enter",function(){$(".timer").countTo()}),$(window).on("resize",function(){o=$(window).innerHeight()})},Ottavio.events.push(Ottavio.scrollController),Ottavio.isotope=function(){var e=$("#isotope"),t=$("#filters"),o=null,a={itemSelector:".item",layoutMode:"masonry",masonry:null},n=function(e){var t=i(),o=1;return e>435&&723>e?o=2:e>722&&1155>e?o=3:e>1154&&(o=t?3:4),e/o},i=function(){return $("body").hasClass("boxed-layout")},r=function(){var e=$(this),t=e.parent(),a=e.attr("data-filter");o.isotope({filter:a}),t.find(".btn-primary").removeClass("btn-primary"),e.addClass("btn-primary")};e.length>0&&(e.hasClass("portfolio-full")?(a.itemSelector=".item-full",a.layoutMode="vertical"):a.masonry={columnWidth:n(e.width())},void 0!==$.fn.isotope?(o=e.isotope(a),o.imagesLoaded(function(){o.isotope("layout")}),t.length>0&&t.on("click","button",r),$(window).resize(function(){o.isotope({masonry:{columnWidth:n(e.width())}})})):console.error("Isotope not available!"))},Ottavio.events.push(Ottavio.isotope),Ottavio.gmaps=function(){var e=$("#map-canvas"),t=window.mapOptions||{},o=function(){$.getScript("https://maps.googleapis.com/maps/api/js?v=3.exp&callback=Ottavio.gmaps").fail(function(e){console.error("Could not load Google Maps: "+e)})},a=function(){void 0!==$.fn.gMap?e.gMap(t):console.error("jQuery.gMap not available!")};return window.google&&google.maps?a():o(),{init:a}},Ottavio.events.push(Ottavio.gmaps),Ottavio.portfolio=function(){function e(){C.fadeIn(),x.animate({opacity:0,height:"0px"}).empty(),d||(d=!0,O.load(s+" .ajaxpage",function(e,o){"success"===o&&(l=$(".ajaxpage",n),$(".ajaxpage",n).waitForImages(function(){t(),d=!1}),$(".owl-carousel",i).owlCarousel(),j.fadeIn()),"error"===o&&(O.animate({opacity:0,height:"0px"}).empty(),x.html(k).animate({opacity:1,height:x.find(".alert").outerHeight(!0)+"px"}),t(),d=!1)}))}function t(){C.fadeOut("fast",function(){o()})}function o(){h===!1?(c=O.children(".ajaxpage").outerHeight()+"px",O.animate({opacity:1,height:c},function(){v=$("html, body").scrollTop(),M.fadeIn(),h=!0})):(c=O.children(".ajaxpage").outerHeight()+"px",O.animate({opacity:1,height:c},function(){v=$("html, body").scrollTop(),M.fadeIn()})),w=b.find(".item.current").index(),y=$(".item",n).length-1,w===y?(_.addClass("disabled"),S.removeClass("disabled")):0===w?(_.addClass("disabled"),S.removeClass("disabled")):(_.removeClass("disabled"),S.removeClass("disabled"))}function a(e){j.fadeOut(100),M.fadeOut(100),O.animate({opacity:0,height:"0px"}).empty(),x.animate({opacity:0,height:"0px"}).empty(),"undefined"!=typeof e&&""!==e&&(location="#_"),b.find(".item.current").removeClass("current")}var n="#portfolio-gallery",i=$(n),r="",s="",l="",c="",d=!1,u=!0,h=!1,p="",g="",f="",m="",v="",w="",y="",k='<div class="alert alert-warning">content not available.</div>',b=$(".portfolio",i),C=$(".loader",i),O=$(".ajax-content-inner",i),x=$(".status-message",i),M=$(".closeProject",i),_=$(".nextProject",i),S=$(".prevProject",i),j=$(".project-navigation",i),I="easeOutExpo",T=i.data("folder");$(window).bind("hashchange",function(){r=$(window.location).attr("hash");var t="#!"+T+"/",o=t.length;if(r.substr(0,o)===t){var n=50,i=$("nav").outerHeight()+n;return r=$(window.location).attr("hash"),s=r.replace(/[#\!]/g,""),b.find(".item.current").removeClass("current"),u===!0&&r.substr(0,o)===t?$("html, body").stop().animate({scrollTop:O.offset().top-20+"px"},800,I,function(){e()}):u===!1&&r.substr(0,o)===t?$("html,body").stop().animate({scrollTop:O.offset().top-i+"px"},800,I,function(){h===!1?e():O.animate({opacity:0,height:c},e),j.fadeOut("100"),M.fadeOut("100")}):(""===r&&u===!1||r.substr(0,o)!==t&&u===!1||r.substr(0,o)!==t&&u===!0)&&(v=r,$("html, body").stop().animate({scrollTop:v+"px"},1e3,a)),b.find('.item a[href="#!'+s+'"]').parents("li").addClass("current"),!1}}),_.on("click",function(){return p=b.find(".item.current"),g=p.next(".item"),m=$(g).find("a.ajax_load").attr("href"),$(this).attr("href",m),0===g.length?!1:(p.removeClass("current"),void g.addClass("current"))}),S.on("click",function(){return p=b.find(".item.current"),f=p.prev(".item"),m=$(f).find("a.ajax_load").attr("href"),$(this).attr("href",m),0===f.length?!1:(p.removeClass("current"),void f.addClass("current"))}),M.on("click",function(){return a($(this).find("a").attr("href")),C.fadeOut(),!1}),$(window).trigger("hashchange"),u=!1},Ottavio.events.push(Ottavio.portfolio),Ottavio.contactForm=function(){var e=$("#contactForm"),t=$("#successMessage"),o=$("#failureMessage"),a=$("#incompleteMessage"),n=2e3;e.validate({invalidHandler:function(e,t){var o=t.numberOfInvalids();o?a.show():a.fadeOut()},submitHandler:function(e){var i=$(e),r=i.serialize(),s=i.attr("action");return r+="&ajax=true",a.fadeOut(),i.fadeOut(),$.post(s,r).done(function(e){"success"===e?(t.fadeIn().delay(n).fadeOut(),i.trigger("reset")):o.fadeIn().delay(n).fadeOut()}).fail(function(){o.fadeIn().delay(n).fadeOut()}).always(function(){i.delay(n+500).fadeIn()}),!1}})},Ottavio.events.push(Ottavio.contactForm),$(document).ready(function(){$("body").queryLoader2({barColor:"#222",backgroundColor:"#fff",percentage:!1,barHeight:1}),$("#load").fadeOut().remove(),$("#circle-diagram").length&&circleDiagram("circle-diagram",500,500,"#circle-diagram-data"),$(".dropdown-menu input, .dropdown-menu label").click(function(e){e.stopPropagation()}),$("input, textarea").placeholder(),$("input.qty").TouchSpin(),$("body").fitVids(),$(".background-video video").fillparent(),$(".swiper-container").swiper({slidesPerView:"auto"}),$(".owl-carousel").owlCarousel(),$("a[data-rel]").each(function(){$(this).attr("rel",$(this).data("rel"))}),$("a[data-rel^=prettyPhoto]").prettyPhoto({slideshow:5e3,autoplay_slideshow:!1,social_tools:!1}),(new WOW).init(),Ottavio.init()}).on("click",".navbar-toggle",function(){$(".navbar-collapse").toggleClass("in")}).on("click",".navbar-collapse.in",function(e){$(e.target).is("a")&&$(".navbar-collapse").toggleClass("in")}),$(window).resize(function(){$(window).width()>768&&$(".collapse").removeClass("in")});