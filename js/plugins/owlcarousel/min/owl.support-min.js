/**
 * Support Plugin
 *
 * @version 2.0.0
 * @author Vivid Planet Software GmbH
 * @author Artus Kolanowski
 * @license The MIT License (MIT)
 */
!function($,n,t,i){function o(n,t){var o=!1,r=n.charAt(0).toUpperCase()+n.slice(1);return $.each((n+" "+a.join(r+" ")+r).split(" "),function(n,r){return s[r]!==i?(o=t?r:!0,!1):void 0}),o}function r(n){return o(n,!0)}var s=$("<support>").get(0).style,a="Webkit Moz O ms".split(" "),e={transition:{end:{WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",transition:"transitionend"}},animation:{end:{WebkitAnimation:"webkitAnimationEnd",MozAnimation:"animationend",OAnimation:"oAnimationEnd",animation:"animationend"}}},m={csstransforms:function(){return!!o("transform")},csstransforms3d:function(){return!!o("perspective")},csstransitions:function(){return!!o("transition")},cssanimations:function(){return!!o("animation")}};m.csstransitions()&&($.support.transition=new String(r("transition")),$.support.transition.end=e.transition.end[$.support.transition]),m.cssanimations()&&($.support.animation=new String(r("animation")),$.support.animation.end=e.animation.end[$.support.animation]),m.csstransforms()&&($.support.transform=new String(r("transform")),$.support.transform3d=m.csstransforms3d())}(window.Zepto||window.jQuery,window,document);