window.isRetina=function(){var t="undefined"==typeof exports?window:exports,e="(-webkit-min-device-pixel-ratio: 1.5),(min--moz-device-pixel-ratio: 1.5),(-o-min-device-pixel-ratio: 3/2),(min-resolution: 1.5dppx)";return t.devicePixelRatio>1?!0:t.matchMedia&&t.matchMedia(e).matches?!0:!1}(),window.startupKit=window.startupKit||{},startupKit.hideCollapseMenu=function(){$("body > .navbar-collapse").css({"z-index":1}),$("html").removeClass("nav-visible"),setTimeout(function(){$("body > .navbar-collapse").addClass("collapse"),$("body > .colapsed-menu").removeClass("show-menu")},400)},$(function(){$(".page-wrapper, .navbar-fixed-top, .navbar-collapse a, .navbar-collapse button, .navbar-collapse input[type=submit]").on("click",function(){$("html").hasClass("nav-visible")&&setTimeout(function(){startupKit.hideCollapseMenu()},200)}),$(window).resize(function(){$(window).width()>965&&startupKit.hideCollapseMenu()});var t=$("#header-dockbar > .colapsed-menu").clone(!0);$("body").append(t),$("#open-close-menu").on("click",function(){$("html").hasClass("nav-visible")?startupKit.hideCollapseMenu():($("body > .colapsed-menu").addClass("show-menu"),$("#header-dockbar").length&&$("body > .colapsed-menu").css({top:$("#header-dockbar").height()}),setTimeout(function(){$("html").addClass("nav-visible")},1))})}),startupKit.uiKitHeader=startupKit.uiKitHeader||{},startupKit.uiKitHeader._inFixedMode=function(t){var e=$(t+" .navbar-collapse").first().clone(!0);e.attr("id",t.substr(1)),$("body").append(e);var i=$(".navbar-fixed-top");if(fixedNavbarHeader=i.closest("header"),fixedNavbarHeaderClone=fixedNavbarHeader.clone(!0),fixedNavbarHeader.hasClass("fake-header"))var n=$('<div class="fake-wrapper-header" style="width: 100%; height: '+fixedNavbarHeader.outerHeight()+'px;" />');if($("body").prepend(n),$("body").prepend(fixedNavbarHeaderClone),fixedNavbarHeader.detach(),$(t+" .navbar-toggle").on("click",function(){$(this);$("html").hasClass("nav-visible")?startupKit.hideCollapseMenu():($(".navbar-collapse#"+t.substr(1)).removeClass("collapse"),$("#header-dockbar").length&&$(".navbar-collapse#"+t.substr(1)).css({top:$("#header-dockbar").height()}),setTimeout(function(){$("html").addClass("nav-visible")},1),setTimeout(function(){$("body > .navbar-collapse").css({"z-index":101})},400))}),$(t+" .navbar").hasClass("navbar-fixed-top")){var o=$(t+"-sub"),a=o.outerHeight()-70,s=70;if($(t).outerHeight()>0)var r=$(t).css("background-color");else if($(t+"-sub").length>0)var r=$(t+"-sub").css("background-color");else var r="#fff";var c=$('<div class="'+t.slice(1)+'-startup-antiflicker header-antiflicker" style="opacity: 0; position: fixed; z-index: 2; left: 0; top: 0; width: 100%; height: 70px; background: '+r+';" />');$("body").append(c);var u=$(".background, .caption, .controls > *",o),d=$(t);u.each(function(){$(this).data("origOpacity",$(this).css("opacity"))});var h=o.outerHeight()-120,p=a;$(window).scroll(function(){var e=(a-$(window).scrollTop())/a;if(e=Math.max(0,e),$(window).scrollTop()>a-s){var i=(a-$(window).scrollTop())/s;i=Math.max(0,i)}else i=1;u.each(function(){$(this).css("opacity",$(this).data("origOpacity")*e)}),c.css({"background-color":$(".pt-page-current",o).css("background-color"),opacity:1-i});var n=-(h-$(window).scrollTop())/(p-h);n=1-Math.min(1,Math.max(0,n)),$(window).resize(function(){r()});var r=function(){$(".navbar",d).css($(window).width()<767?{top:-6+26*n}:$(window).width()<480?{top:-6+26*n}:{top:-6+51*n})};r(),$(".navbar .brand",d).css({"font-size":18+7*n,"padding-top":30+-7*n}),$(".navbar .brand img",d).css({width:25+25*n,height:25+25*n,"margin-top":-1+-9*n}),$(".navbar .btn-navbar",d).css({"margin-top":30+-2*n}),$(t+".navbar .nav > li > a",d).css($(window).width()>979?{"font-size":12+2*n}:{"font-size":""})})}},startupKit.uiKitHeader.header1=function(){var t=PageTransitions();t.init("#pt-main"),$("#pt-main .control-prev").on("click",function(){return t.gotoPage(5,"prev"),!1}),$("#pt-main .control-next").on("click",function(){return t.gotoPage(6,"next"),!1}),startupKit.uiKitHeader._inFixedMode(".header-1")},startupKit.uiKitHeader.header2=function(){startupKit.uiKitHeader._inFixedMode(".header-2")},startupKit.uiKitHeader.header3=function(){$(".header-3 .navbar").hasClass("navbar-fixed-top")&&$(".header-3").css("position","fixed").addClass("fake-header"),startupKit.uiKitHeader._inFixedMode(".header-3")},startupKit.uiKitHeader.header4=function(){},startupKit.uiKitHeader.header5=function(){startupKit.uiKitHeader._inFixedMode(".header-5"),$(window).resize(function(){var t=0;$(".header-5-sub .pt-page").css("height","auto").each(function(){var e=$(this).outerHeight();e>t&&(t=e)}).css("height",t+"px"),$(".header-5-sub .page-transitions").css("height",t+"px")});var t=PageTransitions();t.init("#h-5-pt-1"),$("#h-5-pt-1 .pt-control-prev").on("click",function(){return t.gotoPage(5,"prev"),!1}),$("#h-5-pt-1 .pt-control-next").on("click",function(){return t.gotoPage(6,"next"),!1});var e=$(".header-5 .navbar");$(".search",e).click(function(){return e.hasClass("search-mode")||(e.addClass("search-mode"),setTimeout(function(){$('header .navbar .navbar-search input[type="text"]').focus()},1e3)),!1}),$(".close-search",e).click(function(){return e.removeClass("search-mode"),!1})},startupKit.uiKitHeader.header6=function(){startupKit.uiKitHeader._inFixedMode(".header-6")},startupKit.uiKitHeader.header7=function(){startupKit.uiKitHeader._inFixedMode(".header-7"),$(window).resize(function(){var t=0;$(".header-7-sub section").css("height",$(this).height()+"px").each(function(){var e=$(this).outerHeight();e>t&&(t=e)}).css("height",t+"px"),$(".header-7-sub .page-transitions").css("height",t+"px");var e=$(".header-7-sub .pt-controls").height();$(".header-7-sub .pt-controls").css("margin-top",-1*t/2-e+"px"),$(".header-7-sub .pt-controls").css("padding-bottom",t/2-e+"px")});var t=PageTransitions();t.init("#h-7-pt-main"),$(".header-7-sub .pt-controls .pt-indicators > *").on("click",function(){if($(this).hasClass("active"))return!1;var e=$(this).parent().children(".active").index(),i=$(this).index();$(".header-7-sub").css("background-color",$("#h-7-pt-main").children(".pt-page").eq(i).find("section").css("background-color"));var n=5;return i>e&&(n=6),t.gotoPage(n,i),$(this).addClass("active").parent().children().not(this).removeClass("active"),!1})},startupKit.uiKitHeader.header8=function(){$(".header-8 .navbar").hasClass("navbar-fixed-top")&&$(".header-8").css("position","fixed").addClass("fake-header"),startupKit.uiKitHeader._inFixedMode(".header-8")},startupKit.uiKitHeader.header9=function(){startupKit.uiKitHeader._inFixedMode(".header-9"),$(window).resize(function(){var t=0;$("body > section:not(.header-9-sub)").each(function(){t+=$(this).outerHeight()}),$(".sidebar-content").css("height",t+"px")})},startupKit.uiKitHeader.header10=function(){$(".header-10 .navbar").hasClass("navbar-fixed-top")&&$(".header-10").css("position","fixed").addClass("fake-header"),startupKit.uiKitHeader._inFixedMode(".header-10"),$(".header-10-sub .control-btn").on("click",function(){return $.scrollTo($(this).closest("section").next(),{axis:"y",duration:500}),!1})},startupKit.uiKitHeader.header11=function(){$(".header-11 .navbar").hasClass("navbar-fixed-top")&&$(".header-11").css("position","fixed").addClass("fake-header"),startupKit.uiKitHeader._inFixedMode(".header-11"),$(window).resize(function(){var t=$(".header-11-sub .player");$(window).width()<751?($(".header-11-sub .signup-form").before(t),$(".header-11-sub .player-wrapper").hide()):($(".header-11-sub .player-wrapper").append(t),$(".header-11-sub .player-wrapper").show())})},startupKit.uiKitHeader.header12=function(){},startupKit.uiKitHeader.header13=function(){},startupKit.uiKitHeader.header14=function(){},startupKit.uiKitHeader.header15=function(){$(".header-15 .navbar").hasClass("navbar-fixed-top")&&$(".header-15").css("position","fixed").addClass("fake-header"),startupKit.uiKitHeader._inFixedMode(".header-15")},startupKit.uiKitHeader.header16=function(){startupKit.uiKitHeader._inFixedMode(".header-16");var t=PageTransitions();t.init("#h-16-pt-main"),$("#h-16-pt-main .pt-control-prev").on("click",function(){return t.gotoPage(2,"prev"),!1}),$("#h-16-pt-main .pt-control-next").on("click",function(){return t.gotoPage(1,"next"),!1}),$(".header-16-sub .scroll-btn a").on("click",function(t){return t.preventDefault(),$.scrollTo($(this).closest("section").next(),{axis:"y",duration:500}),!1})},startupKit.uiKitHeader.header17=function(){$(".header-17 .navbar").hasClass("navbar-fixed-top")&&$(".header-17").css("position","fixed").addClass("fake-header"),startupKit.uiKitHeader._inFixedMode(".header-17");var t=PageTransitions();t.init("#h-17-pt-1"),$(".pt-controls .pt-indicators > *").on("click",function(){if($(this).hasClass("active"))return!1;var e=$(this).parent().children(".active").index(),i=$(this).index(),n=44;return i>e&&(n=45),t.gotoPage(n,i),$(this).addClass("active").parent().children().not(this).removeClass("active"),!1}),$(window).resize(function(){$(".header-17-sub .page-transitions").each(function(){var t=0;$(".pt-page",this).css("height","auto").each(function(){var e=$(this).outerHeight();e>t&&(t=e)}).css("height",t+"px"),$(this).css("height",t+"px")})})},startupKit.uiKitHeader.header18=function(){$(window).resize(function(){maxH=$(window).height(),$(".header-18 .page-transitions").css("height",maxH+"px")});var t=PageTransitions();t.init("#h-18-pt-main"),$(".header-18 .pt-control-prev").on("click",function(){return t.gotoPage(5,"prev"),!1}),$(".header-18 .pt-control-next").on("click",function(){return t.gotoPage(6,"next"),!1})},startupKit.uiKitHeader.header19=function(){startupKit.uiKitHeader._inFixedMode(".header-19")},startupKit.uiKitHeader.header20=function(){$(".header-20 .navbar").hasClass("navbar-fixed-top")&&$(".header-20").css("position","fixed").addClass("fake-header"),startupKit.uiKitHeader._inFixedMode(".header-20")},startupKit.uiKitHeader.header21=function(){startupKit.uiKitHeader._inFixedMode(".header-21"),maxH=$(window).height(),0!=$(".navbar-fixed-top").length&&(maxH-=$(".navbar-fixed-top").outerHeight()),0!=$(".header-21").length&&(maxH-=$(".header-21").outerHeight()),3>maxH/90&&$(".header-21-sub .control-btn").css("bottom",0),$(".header-21-sub").height(maxH),$(".header-21-sub .control-btn").on("click",function(){return $.scrollTo($(this).closest("section").next(),{axis:"y",duration:500}),!1})},startupKit.uiKitHeader.header22=function(){$(".header-22 .navbar").hasClass("navbar-fixed-top")&&$(".header-22").css("position","fixed").addClass("fake-header"),startupKit.uiKitHeader._inFixedMode(".header-22")},startupKit.uiKitHeader.header23=function(){startupKit.uiKitHeader._inFixedMode(".header-23")},startupKit.uiKitContent=startupKit.uiKitContent||{},startupKit.uiKitContent.content1=function(){},startupKit.uiKitContent.content2=function(){},startupKit.uiKitContent.content3=function(){},startupKit.uiKitContent.content4=function(){},startupKit.uiKitContent.content5=function(){},startupKit.uiKitContent.content6=function(){},startupKit.uiKitContent.content7=function(){!function(t){0!=t.length&&($("img:first-child",t).css("left","-29.7%"),$(window).resize(function(){t.hasClass("ani-processed")||t.data("scrollPos",t.offset().top-$(window).height()+t.outerHeight())}).scroll(function(){t.hasClass("ani-processed")||$(window).scrollTop()>=t.data("scrollPos")&&(t.addClass("ani-processed"),$("img:first-child",t).animate({left:0},500))}))}($(".screen"))},startupKit.uiKitContent.content8=function(){},startupKit.uiKitContent.content9=function(){},startupKit.uiKitContent.content10=function(){},startupKit.uiKitContent.content11=function(){},startupKit.uiKitContent.content12=function(){},startupKit.uiKitContent.content13=function(){},startupKit.uiKitContent.content14=function(){},startupKit.uiKitContent.content15=function(){},startupKit.uiKitContent.content16=function(){$(".content-16 .control-btn").on("click",function(){return $.scrollTo($(this).closest("section").next(),{axis:"y",duration:500}),!1})},startupKit.uiKitContent.content17=function(){$(window).resize(function(){$("#c-17_myCarousel").each(function(){var t=0;$(".item",this).each(function(){var e=$(this).outerHeight();e>t&&(t=e)}),$("#c-17_myCarousel .carousel-inner",this).css("height",t+"px")})}),$("#c-17_myCarousel").carousel({interval:4e3})},startupKit.uiKitContent.content18=function(){$(window).resize(function(){$("#c-18_myCarousel").each(function(){var t=0;$(".item",this).each(function(){var e=$(this).outerHeight();e>t&&(t=e)}),$(".carousel-inner",this).css("height",t+"px")})}),$("#c-18_myCarousel").bind("slid",function(){$(".carousel-control",this).removeClass("disabled"),0==$(".item.active",this).index()?$(".carousel-control.left",this).addClass("disabled"):$(".item.active",this).index()==$(".item",this).length-1&&$(".carousel-control.right",this).addClass("disabled")})},startupKit.uiKitContent.content19=function(){},startupKit.uiKitContent.content20=function(){},startupKit.uiKitContent.content21=function(){$(window).resize(function(){$(".content-21 .features").each(function(){var t=0;$(".features-body",this).css("height","auto").each(function(){var e=$(this).outerHeight();e>t&&(t=e)}).css("height",t+"px"),$(".features-bodies",this).css("height",t+"px")})}),$(".content-21 .features .features-header .box").click(function(){return $(this).addClass("active").parent().children().not(this).removeClass("active"),$(this).closest(".features").find(".features-body").removeClass("active").eq($(this).index()).addClass("active"),!1})},startupKit.uiKitContent.content22=function(){!function(t){isRetina&&$(".img img",t).each(function(){$(this).attr("src",$(this).attr("src").replace(/.png/i,"@2x.png"))}),$(window).resize(function(){t.hasClass("ani-processed")||t.data("scrollPos",t.offset().top-$(window).height()+t.outerHeight()-parseInt(t.css("padding-bottom"),10))}).scroll(function(){t.hasClass("ani-processed")||$(window).scrollTop()>=t.data("scrollPos")&&t.addClass("ani-processed")})}($(".content-22"))},startupKit.uiKitContent.content23=function(){$(".content-23 .control-btn").on("click",function(){return $.scrollTo($(this).closest("section").next(),{axis:"y",duration:500}),!1})},startupKit.uiKitContent.content24=function(){$(window).resize(function(){$(".content-24 .features").each(function(){var t=0;$(".features-body",this).css("height","auto").each(function(){var e=$(this).outerHeight();e>t&&(t=e)}).css("height",t+"px"),$(".features-bodies",this).css("height",t+"px")})}),$(".content-24 .features .features-header .box").click(function(){return $(this).addClass("active").parent().children().not(this).removeClass("active"),$(this).closest(".features").find(".features-body").removeClass("active").eq($(this).index()).addClass("active"),!1})},startupKit.uiKitContent.content25=function(){(!document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1")||window.mobile)&&($(".svg").remove(),$(".nosvg").attr("style","display:block;")),function(t){t.css("opacity",0),$svg=$("#spaceship",t),$("#rocket-raw",$svg).attr("transform","translate(-100,100)"),$("#rocketmask1",$svg).attr("transform","translate(100,-100)"),$(window).resize(function(){t.hasClass("ani-processed")||t.data("scrollPos",t.offset().top-$(window).height()+t.outerHeight());var e=$(".content-25 .svg"),i=$(".content-25 .nosvg");$(window).width()<751?($(".content-25 .container h3:first-child").after(e),$(".content-25 .container h3:first-child").after(i),$(".content-25 .col-sm-6:nth-child(2)").hide()):($(".content-25 .col-sm-6:nth-child(2)").show(),$(".content-25 .col-sm-6:nth-child(2)").append(e),$(".content-25 .col-sm-6:nth-child(2)").append(i))}).scroll(function(){t.hasClass("ani-processed")||$(window).scrollTop()>=t.data("scrollPos")&&(t.addClass("ani-processed"),t.animate({opacity:1},600),$("#rocket-raw, #rocketmask1",$svg).clearQueue().stop().animate({svgTransform:"translate(0,0)"},{duration:800,easing:"easeInOutQuad"}))})}($(".content-25 .col-sm-6 + .col-sm-6"))},startupKit.uiKitContent.content26=function(){},startupKit.uiKitContent.content27=function(){(!document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1")||window.mobile)&&($(".svg").remove(),$(".nosvg").attr("style","display:block;")),$(window).resize(function(){var t=$(".content-27 .svg"),e=$(".content-27 .nosvg");$(window).width()<751?($(".content-27 .container h3:first-child").after(t),$(".content-27 .container h3:first-child").after(e),$(".content-27 .col-sm-4:first-child").hide()):($(".content-27 .col-sm-4:first-child").show(),$(".content-27 .col-sm-4:first-child").append(t),$(".content-27 .col-sm-4:first-child").append(e))})},startupKit.uiKitContent.content28=function(){},startupKit.uiKitContent.content29=function(){},startupKit.uiKitContent.content30=function(){$(window).resize(function(){for(var t=$(".content-30 .col-sm-3"),e=0;e<=t.length;e++){var i=$(t[e]).find(".description-top");$(window).width()<=480?$(t[e]).find(".img").after(i):$(t[e]).find(".img").before(i)}})},startupKit.uiKitContent.content31=function(){!function(t){$(window).scroll(function(){$(window).width()>480&&$(".row",t).each(function(){$(window).scrollTop()>=$(this).offset().top-$(window).height()+$(window).height()/2+100?$(this).addClass("active"):$(this).removeClass("active")})}),$(window).resize(function(){$(".page-transitions",t).each(function(){var t=0;$(".pt-page",this).css("height","auto").each(function(){var e=$(this).outerHeight();e>t&&(t=e)}).css("height",t+"px"),$(this).css("height",t+"px")})}),$(".page-transitions",t).each(function(){var t=PageTransitions();t.init(this),$(".pt-control-prev",this).on("click",function(){return t.gotoPage(68,"prev"),!1}),$(".pt-control-next",this).on("click",function(){return t.gotoPage(68,"next"),!1})})}($(".content-31"))},startupKit.uiKitContent.content32=function(){},startupKit.uiKitContent.content33=function(){},startupKit.uiKitContent.content34=function(){$(window).resize(function(){var t=0;$(".content-34 section").each(function(){var e=$(this).outerHeight();e>t&&(t=e)}),$(".content-34 .page-transitions").css("height",t+"px");var e=$(".content-34 .pt-controls").height();$(".content-34 .pt-controls").css("margin-top",-1*e/2+"px")});var t=PageTransitions();t.init("#content-34-pt-main"),$(".content-34 .pt-controls .pt-indicators > *").on("click",function(){if($(this).hasClass("active"))return!1;var e=$(this).parent().children(".active").index(),i=$(this).index(),n=5;return i>e&&(n=6),t.gotoPage(n,i),$(this).addClass("active").parent().children().not(this).removeClass("active"),!1})},startupKit.uiKitContent.content35=function(){},startupKit.uiKitContent.content36=function(){},startupKit.uiKitBlog=startupKit.uiKitBlog||{},startupKit.uiKitBlog.blog1=function(){$(window).resize(function(){$(".page-transitions").each(function(){var t=0;$(".pt-page",this).css("height","auto").each(function(){var e=$(this).outerHeight();e>t&&(t=e)}).css("height",t+"px"),$(this).css("height",t+"px")})});var t=PageTransitions();t.init($("#b1-pt-1")),$("#b1-pt-1 .pt-control-prev").on("click",function(){return t.gotoPage(28,"prev"),!1}),$("#b1-pt-1 .pt-control-next").on("click",function(){return t.gotoPage(29,"next"),!1})},startupKit.uiKitBlog.blog2=function(){},startupKit.uiKitBlog.blog3=function(){},startupKit.uiKitBlog.blog4=function(){},startupKit.uiKitBlog.blog5=function(){var t=PageTransitions();t.init($("#b5-pt-2")),$("#b5-pt-2 .pt-control-prev").on("click",function(){return t.gotoPage(28,"prev"),!1}),$("#b5-pt-2 .pt-control-next").on("click",function(){return t.gotoPage(29,"next"),!1})},startupKit.uiKitCrew=startupKit.uiKitCrew||function(){$(".member .photo img").each(function(){$(this).hide().parent().css("background-image",'url("'+this.src+'")')})},startupKit.uiKitProjects=startupKit.uiKitProjects||{},startupKit.uiKitProjects.project1=function(){},startupKit.uiKitProjects.project2=function(){},startupKit.uiKitProjects.project3=function(){},startupKit.uiKitProjects.project4=function(){$(".overlay").on("hover",function(){$(this).closest(".project").find(".name").toggleClass("hover")})},startupKit.uiKitFooter=startupKit.uiKitFooter||{},startupKit.uiKitFooter.footer1=function(){},startupKit.uiKitFooter.footer2=function(){},startupKit.uiKitFooter.footer3=function(){},startupKit.uiKitFooter.footer4=function(){},startupKit.uiKitFooter.footer5=function(){},startupKit.uiKitFooter.footer6=function(){},startupKit.uiKitFooter.footer7=function(){},startupKit.uiKitFooter.footer8=function(){},startupKit.uiKitFooter.footer9=function(){},startupKit.uiKitFooter.footer10=function(){},startupKit.uiKitFooter.footer11=function(){},startupKit.uiKitFooter.footer12=function(){},startupKit.uiKitFooter.footer13=function(){},startupKit.uiKitFooter.footer14=function(){},startupKit.uiKitFooter.footer15=function(){},function(t){t(function(){for(header in startupKit.uiKitHeader)headerNumber=header.slice(6),0!=jQuery(".header-"+headerNumber).length&&startupKit.uiKitHeader[header]();for(content in startupKit.uiKitContent)contentNumber=content.slice(7),0!=jQuery(".content-"+contentNumber).length&&startupKit.uiKitContent[content]();for(blog in startupKit.uiKitBlog)blogNumber=blog.slice(4),0!=jQuery(".blog-"+blogNumber).length&&startupKit.uiKitBlog[blog]();for(project in startupKit.uiKitProjects)projectNumber=project.slice(7),0!=jQuery(".projects-"+projectNumber).length&&startupKit.uiKitProjects[project]();startupKit.uiKitCrew();for(footer in startupKit.uiKitFooter)footerNumber=footer.slice(6),0!=jQuery(".footer-"+footerNumber).length&&startupKit.uiKitFooter[footer]();t(window).load(function(){t("html").addClass("loaded"),t(window).resize()}),/msie/i.test(navigator.userAgent)&&t("img").each(function(){t(this).css({width:t(this).attr("width")+"px",height:"auto"})}),t(".input-prepend, .input-append").on("focus","input",function(){t(this).closest(".control-group, form").addClass("focus")}).on("blur","input",function(){t(this).closest(".control-group, form").removeClass("focus")}),t(".project .photo img").each(function(){t(this).hide().parent().css("background-image",'url("'+this.src+'")')});var e=t(".tiles");t(window).resize(function(){t(this).width()<768?e.hasClass("phone-mode")||(t('td[class*="tile-"]',e).each(function(){t("<div />").addClass(this.className).append(t(this).contents()).appendTo(e)}),e.addClass("phone-mode")):e.hasClass("phone-mode")&&(t('> [class*="tile-"]',e).each(function(i){t('td[class*="tile-"]',e).eq(i).append(t(this).contents()),t(this).remove()}),e.removeClass("phone-mode"))}),e.on("mouseenter",'[class*="tile-"]',function(){t(this).removeClass("faded").closest(".tiles").find('[class*="tile-"]').not(this).addClass("faded")}).on("mouseleave",'[class*="tile-"]',function(){t(this).closest(".tiles").find('[class*="tile-"]').removeClass("faded")})})}(jQuery);