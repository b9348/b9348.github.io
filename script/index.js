$(document).ready(function(){return $(document).on("click",".has-sub",function(){var e=$(this);$(this).hasClass("expanded")?$(".has-sub ul").each(function(s,i){var t=$(this);e.find("ul")[0]!=i&&setTimeout(function(){t.attr("style","")},300)}):setTimeout(function(){e.find("ul").attr("style","")},300)}),$(".user-info-menu .hidden-sm").click(function(){$(".sidebar-menu").hasClass("collapsed")?$(".has-sub.expanded > ul").attr("style",""):$(".has-sub.expanded > ul").show()}),$("#main-menu li ul li").click(function(){$(this).siblings("li").removeClass("active"),$(this).addClass("active")}),$("a.smooth").click(function(s){s.preventDefault(),public_vars.$mainMenu.add(public_vars.$sidebarProfile).toggleClass("mobile-is-visible"),ps_destroy(),$("html, body").animate({scrollTop:$($(this).attr("href")).offset().top-30},{duration:500,easing:"swing"})}),!1});var href="",pos=0;$("a.smooth").click(function(s){$("#main-menu li").each(function(){$(this).removeClass("active")}),$(this).parent("li").addClass("active"),s.preventDefault(),href=$(this).attr("href"),pos=$(href).position().top-30});