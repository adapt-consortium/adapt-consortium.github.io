goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4870__auto__ = [];
var len__4864__auto___51788 = arguments.length;
var i__4865__auto___51789 = (0);
while(true){
if((i__4865__auto___51789 < len__4864__auto___51788)){
args__4870__auto__.push((arguments[i__4865__auto___51789]));

var G__51790 = (i__4865__auto___51789 + (1));
i__4865__auto___51789 = G__51790;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq51378){
var G__51379 = cljs.core.first(seq51378);
var seq51378__$1 = cljs.core.next(seq51378);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51379,seq51378__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__51387 = cljs.core.seq(sources);
var chunk__51388 = null;
var count__51389 = (0);
var i__51390 = (0);
while(true){
if((i__51390 < count__51389)){
var map__51400 = chunk__51388.cljs$core$IIndexed$_nth$arity$2(null,i__51390);
var map__51400__$1 = cljs.core.__destructure_map(map__51400);
var src = map__51400__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51400__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51400__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51400__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51400__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e51401){var e_51791 = e51401;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_51791);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_51791.message)].join('')));
}

var G__51792 = seq__51387;
var G__51793 = chunk__51388;
var G__51794 = count__51389;
var G__51795 = (i__51390 + (1));
seq__51387 = G__51792;
chunk__51388 = G__51793;
count__51389 = G__51794;
i__51390 = G__51795;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__51387);
if(temp__5804__auto__){
var seq__51387__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51387__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__51387__$1);
var G__51796 = cljs.core.chunk_rest(seq__51387__$1);
var G__51797 = c__4679__auto__;
var G__51798 = cljs.core.count(c__4679__auto__);
var G__51799 = (0);
seq__51387 = G__51796;
chunk__51388 = G__51797;
count__51389 = G__51798;
i__51390 = G__51799;
continue;
} else {
var map__51407 = cljs.core.first(seq__51387__$1);
var map__51407__$1 = cljs.core.__destructure_map(map__51407);
var src = map__51407__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51407__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51407__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51407__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51407__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e51408){var e_51800 = e51408;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_51800);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_51800.message)].join('')));
}

var G__51801 = cljs.core.next(seq__51387__$1);
var G__51802 = null;
var G__51803 = (0);
var G__51804 = (0);
seq__51387 = G__51801;
chunk__51388 = G__51802;
count__51389 = G__51803;
i__51390 = G__51804;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__51411 = cljs.core.seq(js_requires);
var chunk__51412 = null;
var count__51413 = (0);
var i__51414 = (0);
while(true){
if((i__51414 < count__51413)){
var js_ns = chunk__51412.cljs$core$IIndexed$_nth$arity$2(null,i__51414);
var require_str_51805 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_51805);


var G__51806 = seq__51411;
var G__51807 = chunk__51412;
var G__51808 = count__51413;
var G__51809 = (i__51414 + (1));
seq__51411 = G__51806;
chunk__51412 = G__51807;
count__51413 = G__51808;
i__51414 = G__51809;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__51411);
if(temp__5804__auto__){
var seq__51411__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51411__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__51411__$1);
var G__51810 = cljs.core.chunk_rest(seq__51411__$1);
var G__51811 = c__4679__auto__;
var G__51812 = cljs.core.count(c__4679__auto__);
var G__51813 = (0);
seq__51411 = G__51810;
chunk__51412 = G__51811;
count__51413 = G__51812;
i__51414 = G__51813;
continue;
} else {
var js_ns = cljs.core.first(seq__51411__$1);
var require_str_51814 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_51814);


var G__51815 = cljs.core.next(seq__51411__$1);
var G__51816 = null;
var G__51817 = (0);
var G__51818 = (0);
seq__51411 = G__51815;
chunk__51412 = G__51816;
count__51413 = G__51817;
i__51414 = G__51818;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__51417){
var map__51418 = p__51417;
var map__51418__$1 = cljs.core.__destructure_map(map__51418);
var msg = map__51418__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51418__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51418__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__51419(s__51420){
return (new cljs.core.LazySeq(null,(function (){
var s__51420__$1 = s__51420;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__51420__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__51425 = cljs.core.first(xs__6360__auto__);
var map__51425__$1 = cljs.core.__destructure_map(map__51425);
var src = map__51425__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51425__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51425__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4648__auto__ = ((function (s__51420__$1,map__51425,map__51425__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__51418,map__51418__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__51419_$_iter__51421(s__51422){
return (new cljs.core.LazySeq(null,((function (s__51420__$1,map__51425,map__51425__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__51418,map__51418__$1,msg,info,reload_info){
return (function (){
var s__51422__$1 = s__51422;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__51422__$1);
if(temp__5804__auto____$1){
var s__51422__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__51422__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__51422__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__51424 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__51423 = (0);
while(true){
if((i__51423 < size__4651__auto__)){
var warning = cljs.core._nth(c__4650__auto__,i__51423);
cljs.core.chunk_append(b__51424,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__51820 = (i__51423 + (1));
i__51423 = G__51820;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51424),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__51419_$_iter__51421(cljs.core.chunk_rest(s__51422__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51424),null);
}
} else {
var warning = cljs.core.first(s__51422__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__51419_$_iter__51421(cljs.core.rest(s__51422__$2)));
}
} else {
return null;
}
break;
}
});})(s__51420__$1,map__51425,map__51425__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__51418,map__51418__$1,msg,info,reload_info))
,null,null));
});})(s__51420__$1,map__51425,map__51425__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__51418,map__51418__$1,msg,info,reload_info))
;
var fs__4649__auto__ = cljs.core.seq(iterys__4648__auto__(warnings));
if(fs__4649__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4649__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__51419(cljs.core.rest(s__51420__$1)));
} else {
var G__51821 = cljs.core.rest(s__51420__$1);
s__51420__$1 = G__51821;
continue;
}
} else {
var G__51822 = cljs.core.rest(s__51420__$1);
s__51420__$1 = G__51822;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__51426_51823 = cljs.core.seq(warnings);
var chunk__51427_51824 = null;
var count__51428_51825 = (0);
var i__51429_51826 = (0);
while(true){
if((i__51429_51826 < count__51428_51825)){
var map__51434_51827 = chunk__51427_51824.cljs$core$IIndexed$_nth$arity$2(null,i__51429_51826);
var map__51434_51828__$1 = cljs.core.__destructure_map(map__51434_51827);
var w_51829 = map__51434_51828__$1;
var msg_51830__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51434_51828__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_51831 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51434_51828__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_51832 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51434_51828__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_51833 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51434_51828__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_51833)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_51831),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_51832),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_51830__$1)].join(''));


var G__51834 = seq__51426_51823;
var G__51835 = chunk__51427_51824;
var G__51836 = count__51428_51825;
var G__51837 = (i__51429_51826 + (1));
seq__51426_51823 = G__51834;
chunk__51427_51824 = G__51835;
count__51428_51825 = G__51836;
i__51429_51826 = G__51837;
continue;
} else {
var temp__5804__auto___51839 = cljs.core.seq(seq__51426_51823);
if(temp__5804__auto___51839){
var seq__51426_51841__$1 = temp__5804__auto___51839;
if(cljs.core.chunked_seq_QMARK_(seq__51426_51841__$1)){
var c__4679__auto___51842 = cljs.core.chunk_first(seq__51426_51841__$1);
var G__51843 = cljs.core.chunk_rest(seq__51426_51841__$1);
var G__51844 = c__4679__auto___51842;
var G__51845 = cljs.core.count(c__4679__auto___51842);
var G__51846 = (0);
seq__51426_51823 = G__51843;
chunk__51427_51824 = G__51844;
count__51428_51825 = G__51845;
i__51429_51826 = G__51846;
continue;
} else {
var map__51435_51847 = cljs.core.first(seq__51426_51841__$1);
var map__51435_51848__$1 = cljs.core.__destructure_map(map__51435_51847);
var w_51849 = map__51435_51848__$1;
var msg_51850__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51435_51848__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_51851 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51435_51848__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_51852 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51435_51848__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_51853 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51435_51848__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_51853)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_51851),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_51852),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_51850__$1)].join(''));


var G__51854 = cljs.core.next(seq__51426_51841__$1);
var G__51855 = null;
var G__51856 = (0);
var G__51857 = (0);
seq__51426_51823 = G__51854;
chunk__51427_51824 = G__51855;
count__51428_51825 = G__51856;
i__51429_51826 = G__51857;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__51416_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__51416_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4251__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4251__auto__){
var and__4251__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4251__auto____$1){
return new$;
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__51437){
var map__51438 = p__51437;
var map__51438__$1 = cljs.core.__destructure_map(map__51438);
var msg = map__51438__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51438__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51438__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__51439 = cljs.core.seq(updates);
var chunk__51441 = null;
var count__51442 = (0);
var i__51443 = (0);
while(true){
if((i__51443 < count__51442)){
var path = chunk__51441.cljs$core$IIndexed$_nth$arity$2(null,i__51443);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__51594_51861 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__51599_51862 = null;
var count__51600_51863 = (0);
var i__51601_51864 = (0);
while(true){
if((i__51601_51864 < count__51600_51863)){
var node_51865 = chunk__51599_51862.cljs$core$IIndexed$_nth$arity$2(null,i__51601_51864);
if(cljs.core.not(node_51865.shadow$old)){
var path_match_51866 = shadow.cljs.devtools.client.browser.match_paths(node_51865.getAttribute("href"),path);
if(cljs.core.truth_(path_match_51866)){
var new_link_51867 = (function (){var G__51665 = node_51865.cloneNode(true);
G__51665.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_51866),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__51665;
})();
(node_51865.shadow$old = true);

(new_link_51867.onload = ((function (seq__51594_51861,chunk__51599_51862,count__51600_51863,i__51601_51864,seq__51439,chunk__51441,count__51442,i__51443,new_link_51867,path_match_51866,node_51865,path,map__51438,map__51438__$1,msg,updates,reload_info){
return (function (e){
var seq__51666_51868 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__51668_51869 = null;
var count__51669_51870 = (0);
var i__51670_51871 = (0);
while(true){
if((i__51670_51871 < count__51669_51870)){
var map__51674_51872 = chunk__51668_51869.cljs$core$IIndexed$_nth$arity$2(null,i__51670_51871);
var map__51674_51873__$1 = cljs.core.__destructure_map(map__51674_51872);
var task_51874 = map__51674_51873__$1;
var fn_str_51875 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51674_51873__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_51876 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51674_51873__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_51877 = goog.getObjectByName(fn_str_51875,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_51876)].join(''));

(fn_obj_51877.cljs$core$IFn$_invoke$arity$2 ? fn_obj_51877.cljs$core$IFn$_invoke$arity$2(path,new_link_51867) : fn_obj_51877.call(null,path,new_link_51867));


var G__51878 = seq__51666_51868;
var G__51879 = chunk__51668_51869;
var G__51880 = count__51669_51870;
var G__51881 = (i__51670_51871 + (1));
seq__51666_51868 = G__51878;
chunk__51668_51869 = G__51879;
count__51669_51870 = G__51880;
i__51670_51871 = G__51881;
continue;
} else {
var temp__5804__auto___51882 = cljs.core.seq(seq__51666_51868);
if(temp__5804__auto___51882){
var seq__51666_51883__$1 = temp__5804__auto___51882;
if(cljs.core.chunked_seq_QMARK_(seq__51666_51883__$1)){
var c__4679__auto___51884 = cljs.core.chunk_first(seq__51666_51883__$1);
var G__51885 = cljs.core.chunk_rest(seq__51666_51883__$1);
var G__51886 = c__4679__auto___51884;
var G__51887 = cljs.core.count(c__4679__auto___51884);
var G__51888 = (0);
seq__51666_51868 = G__51885;
chunk__51668_51869 = G__51886;
count__51669_51870 = G__51887;
i__51670_51871 = G__51888;
continue;
} else {
var map__51675_51889 = cljs.core.first(seq__51666_51883__$1);
var map__51675_51890__$1 = cljs.core.__destructure_map(map__51675_51889);
var task_51891 = map__51675_51890__$1;
var fn_str_51892 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51675_51890__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_51893 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51675_51890__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_51894 = goog.getObjectByName(fn_str_51892,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_51893)].join(''));

(fn_obj_51894.cljs$core$IFn$_invoke$arity$2 ? fn_obj_51894.cljs$core$IFn$_invoke$arity$2(path,new_link_51867) : fn_obj_51894.call(null,path,new_link_51867));


var G__51895 = cljs.core.next(seq__51666_51883__$1);
var G__51896 = null;
var G__51897 = (0);
var G__51898 = (0);
seq__51666_51868 = G__51895;
chunk__51668_51869 = G__51896;
count__51669_51870 = G__51897;
i__51670_51871 = G__51898;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_51865);
});})(seq__51594_51861,chunk__51599_51862,count__51600_51863,i__51601_51864,seq__51439,chunk__51441,count__51442,i__51443,new_link_51867,path_match_51866,node_51865,path,map__51438,map__51438__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_51866], 0));

goog.dom.insertSiblingAfter(new_link_51867,node_51865);


var G__51899 = seq__51594_51861;
var G__51900 = chunk__51599_51862;
var G__51901 = count__51600_51863;
var G__51902 = (i__51601_51864 + (1));
seq__51594_51861 = G__51899;
chunk__51599_51862 = G__51900;
count__51600_51863 = G__51901;
i__51601_51864 = G__51902;
continue;
} else {
var G__51903 = seq__51594_51861;
var G__51904 = chunk__51599_51862;
var G__51905 = count__51600_51863;
var G__51906 = (i__51601_51864 + (1));
seq__51594_51861 = G__51903;
chunk__51599_51862 = G__51904;
count__51600_51863 = G__51905;
i__51601_51864 = G__51906;
continue;
}
} else {
var G__51907 = seq__51594_51861;
var G__51908 = chunk__51599_51862;
var G__51909 = count__51600_51863;
var G__51910 = (i__51601_51864 + (1));
seq__51594_51861 = G__51907;
chunk__51599_51862 = G__51908;
count__51600_51863 = G__51909;
i__51601_51864 = G__51910;
continue;
}
} else {
var temp__5804__auto___51911 = cljs.core.seq(seq__51594_51861);
if(temp__5804__auto___51911){
var seq__51594_51912__$1 = temp__5804__auto___51911;
if(cljs.core.chunked_seq_QMARK_(seq__51594_51912__$1)){
var c__4679__auto___51913 = cljs.core.chunk_first(seq__51594_51912__$1);
var G__51914 = cljs.core.chunk_rest(seq__51594_51912__$1);
var G__51915 = c__4679__auto___51913;
var G__51916 = cljs.core.count(c__4679__auto___51913);
var G__51917 = (0);
seq__51594_51861 = G__51914;
chunk__51599_51862 = G__51915;
count__51600_51863 = G__51916;
i__51601_51864 = G__51917;
continue;
} else {
var node_51918 = cljs.core.first(seq__51594_51912__$1);
if(cljs.core.not(node_51918.shadow$old)){
var path_match_51919 = shadow.cljs.devtools.client.browser.match_paths(node_51918.getAttribute("href"),path);
if(cljs.core.truth_(path_match_51919)){
var new_link_51920 = (function (){var G__51676 = node_51918.cloneNode(true);
G__51676.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_51919),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__51676;
})();
(node_51918.shadow$old = true);

(new_link_51920.onload = ((function (seq__51594_51861,chunk__51599_51862,count__51600_51863,i__51601_51864,seq__51439,chunk__51441,count__51442,i__51443,new_link_51920,path_match_51919,node_51918,seq__51594_51912__$1,temp__5804__auto___51911,path,map__51438,map__51438__$1,msg,updates,reload_info){
return (function (e){
var seq__51677_51921 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__51679_51922 = null;
var count__51680_51923 = (0);
var i__51681_51924 = (0);
while(true){
if((i__51681_51924 < count__51680_51923)){
var map__51685_51925 = chunk__51679_51922.cljs$core$IIndexed$_nth$arity$2(null,i__51681_51924);
var map__51685_51926__$1 = cljs.core.__destructure_map(map__51685_51925);
var task_51927 = map__51685_51926__$1;
var fn_str_51928 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51685_51926__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_51929 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51685_51926__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_51930 = goog.getObjectByName(fn_str_51928,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_51929)].join(''));

(fn_obj_51930.cljs$core$IFn$_invoke$arity$2 ? fn_obj_51930.cljs$core$IFn$_invoke$arity$2(path,new_link_51920) : fn_obj_51930.call(null,path,new_link_51920));


var G__51931 = seq__51677_51921;
var G__51932 = chunk__51679_51922;
var G__51933 = count__51680_51923;
var G__51934 = (i__51681_51924 + (1));
seq__51677_51921 = G__51931;
chunk__51679_51922 = G__51932;
count__51680_51923 = G__51933;
i__51681_51924 = G__51934;
continue;
} else {
var temp__5804__auto___51935__$1 = cljs.core.seq(seq__51677_51921);
if(temp__5804__auto___51935__$1){
var seq__51677_51936__$1 = temp__5804__auto___51935__$1;
if(cljs.core.chunked_seq_QMARK_(seq__51677_51936__$1)){
var c__4679__auto___51937 = cljs.core.chunk_first(seq__51677_51936__$1);
var G__51938 = cljs.core.chunk_rest(seq__51677_51936__$1);
var G__51939 = c__4679__auto___51937;
var G__51940 = cljs.core.count(c__4679__auto___51937);
var G__51941 = (0);
seq__51677_51921 = G__51938;
chunk__51679_51922 = G__51939;
count__51680_51923 = G__51940;
i__51681_51924 = G__51941;
continue;
} else {
var map__51686_51942 = cljs.core.first(seq__51677_51936__$1);
var map__51686_51943__$1 = cljs.core.__destructure_map(map__51686_51942);
var task_51944 = map__51686_51943__$1;
var fn_str_51945 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51686_51943__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_51946 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51686_51943__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_51947 = goog.getObjectByName(fn_str_51945,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_51946)].join(''));

(fn_obj_51947.cljs$core$IFn$_invoke$arity$2 ? fn_obj_51947.cljs$core$IFn$_invoke$arity$2(path,new_link_51920) : fn_obj_51947.call(null,path,new_link_51920));


var G__51948 = cljs.core.next(seq__51677_51936__$1);
var G__51949 = null;
var G__51950 = (0);
var G__51951 = (0);
seq__51677_51921 = G__51948;
chunk__51679_51922 = G__51949;
count__51680_51923 = G__51950;
i__51681_51924 = G__51951;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_51918);
});})(seq__51594_51861,chunk__51599_51862,count__51600_51863,i__51601_51864,seq__51439,chunk__51441,count__51442,i__51443,new_link_51920,path_match_51919,node_51918,seq__51594_51912__$1,temp__5804__auto___51911,path,map__51438,map__51438__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_51919], 0));

goog.dom.insertSiblingAfter(new_link_51920,node_51918);


var G__51952 = cljs.core.next(seq__51594_51912__$1);
var G__51953 = null;
var G__51954 = (0);
var G__51955 = (0);
seq__51594_51861 = G__51952;
chunk__51599_51862 = G__51953;
count__51600_51863 = G__51954;
i__51601_51864 = G__51955;
continue;
} else {
var G__51956 = cljs.core.next(seq__51594_51912__$1);
var G__51957 = null;
var G__51958 = (0);
var G__51959 = (0);
seq__51594_51861 = G__51956;
chunk__51599_51862 = G__51957;
count__51600_51863 = G__51958;
i__51601_51864 = G__51959;
continue;
}
} else {
var G__51960 = cljs.core.next(seq__51594_51912__$1);
var G__51961 = null;
var G__51962 = (0);
var G__51963 = (0);
seq__51594_51861 = G__51960;
chunk__51599_51862 = G__51961;
count__51600_51863 = G__51962;
i__51601_51864 = G__51963;
continue;
}
}
} else {
}
}
break;
}


var G__51964 = seq__51439;
var G__51965 = chunk__51441;
var G__51966 = count__51442;
var G__51967 = (i__51443 + (1));
seq__51439 = G__51964;
chunk__51441 = G__51965;
count__51442 = G__51966;
i__51443 = G__51967;
continue;
} else {
var G__51968 = seq__51439;
var G__51969 = chunk__51441;
var G__51970 = count__51442;
var G__51971 = (i__51443 + (1));
seq__51439 = G__51968;
chunk__51441 = G__51969;
count__51442 = G__51970;
i__51443 = G__51971;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__51439);
if(temp__5804__auto__){
var seq__51439__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51439__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__51439__$1);
var G__51972 = cljs.core.chunk_rest(seq__51439__$1);
var G__51973 = c__4679__auto__;
var G__51974 = cljs.core.count(c__4679__auto__);
var G__51975 = (0);
seq__51439 = G__51972;
chunk__51441 = G__51973;
count__51442 = G__51974;
i__51443 = G__51975;
continue;
} else {
var path = cljs.core.first(seq__51439__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__51687_51976 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__51691_51977 = null;
var count__51692_51978 = (0);
var i__51693_51979 = (0);
while(true){
if((i__51693_51979 < count__51692_51978)){
var node_51981 = chunk__51691_51977.cljs$core$IIndexed$_nth$arity$2(null,i__51693_51979);
if(cljs.core.not(node_51981.shadow$old)){
var path_match_51982 = shadow.cljs.devtools.client.browser.match_paths(node_51981.getAttribute("href"),path);
if(cljs.core.truth_(path_match_51982)){
var new_link_51983 = (function (){var G__51724 = node_51981.cloneNode(true);
G__51724.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_51982),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__51724;
})();
(node_51981.shadow$old = true);

(new_link_51983.onload = ((function (seq__51687_51976,chunk__51691_51977,count__51692_51978,i__51693_51979,seq__51439,chunk__51441,count__51442,i__51443,new_link_51983,path_match_51982,node_51981,path,seq__51439__$1,temp__5804__auto__,map__51438,map__51438__$1,msg,updates,reload_info){
return (function (e){
var seq__51725_51984 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__51727_51985 = null;
var count__51728_51986 = (0);
var i__51729_51987 = (0);
while(true){
if((i__51729_51987 < count__51728_51986)){
var map__51736_51988 = chunk__51727_51985.cljs$core$IIndexed$_nth$arity$2(null,i__51729_51987);
var map__51736_51989__$1 = cljs.core.__destructure_map(map__51736_51988);
var task_51990 = map__51736_51989__$1;
var fn_str_51991 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51736_51989__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_51992 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51736_51989__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_51993 = goog.getObjectByName(fn_str_51991,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_51992)].join(''));

(fn_obj_51993.cljs$core$IFn$_invoke$arity$2 ? fn_obj_51993.cljs$core$IFn$_invoke$arity$2(path,new_link_51983) : fn_obj_51993.call(null,path,new_link_51983));


var G__51994 = seq__51725_51984;
var G__51995 = chunk__51727_51985;
var G__51996 = count__51728_51986;
var G__51997 = (i__51729_51987 + (1));
seq__51725_51984 = G__51994;
chunk__51727_51985 = G__51995;
count__51728_51986 = G__51996;
i__51729_51987 = G__51997;
continue;
} else {
var temp__5804__auto___51998__$1 = cljs.core.seq(seq__51725_51984);
if(temp__5804__auto___51998__$1){
var seq__51725_51999__$1 = temp__5804__auto___51998__$1;
if(cljs.core.chunked_seq_QMARK_(seq__51725_51999__$1)){
var c__4679__auto___52000 = cljs.core.chunk_first(seq__51725_51999__$1);
var G__52001 = cljs.core.chunk_rest(seq__51725_51999__$1);
var G__52002 = c__4679__auto___52000;
var G__52003 = cljs.core.count(c__4679__auto___52000);
var G__52004 = (0);
seq__51725_51984 = G__52001;
chunk__51727_51985 = G__52002;
count__51728_51986 = G__52003;
i__51729_51987 = G__52004;
continue;
} else {
var map__51737_52005 = cljs.core.first(seq__51725_51999__$1);
var map__51737_52006__$1 = cljs.core.__destructure_map(map__51737_52005);
var task_52007 = map__51737_52006__$1;
var fn_str_52008 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51737_52006__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_52009 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51737_52006__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_52010 = goog.getObjectByName(fn_str_52008,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_52009)].join(''));

(fn_obj_52010.cljs$core$IFn$_invoke$arity$2 ? fn_obj_52010.cljs$core$IFn$_invoke$arity$2(path,new_link_51983) : fn_obj_52010.call(null,path,new_link_51983));


var G__52011 = cljs.core.next(seq__51725_51999__$1);
var G__52012 = null;
var G__52013 = (0);
var G__52014 = (0);
seq__51725_51984 = G__52011;
chunk__51727_51985 = G__52012;
count__51728_51986 = G__52013;
i__51729_51987 = G__52014;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_51981);
});})(seq__51687_51976,chunk__51691_51977,count__51692_51978,i__51693_51979,seq__51439,chunk__51441,count__51442,i__51443,new_link_51983,path_match_51982,node_51981,path,seq__51439__$1,temp__5804__auto__,map__51438,map__51438__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_51982], 0));

goog.dom.insertSiblingAfter(new_link_51983,node_51981);


var G__52015 = seq__51687_51976;
var G__52016 = chunk__51691_51977;
var G__52017 = count__51692_51978;
var G__52018 = (i__51693_51979 + (1));
seq__51687_51976 = G__52015;
chunk__51691_51977 = G__52016;
count__51692_51978 = G__52017;
i__51693_51979 = G__52018;
continue;
} else {
var G__52019 = seq__51687_51976;
var G__52020 = chunk__51691_51977;
var G__52021 = count__51692_51978;
var G__52022 = (i__51693_51979 + (1));
seq__51687_51976 = G__52019;
chunk__51691_51977 = G__52020;
count__51692_51978 = G__52021;
i__51693_51979 = G__52022;
continue;
}
} else {
var G__52023 = seq__51687_51976;
var G__52024 = chunk__51691_51977;
var G__52025 = count__51692_51978;
var G__52026 = (i__51693_51979 + (1));
seq__51687_51976 = G__52023;
chunk__51691_51977 = G__52024;
count__51692_51978 = G__52025;
i__51693_51979 = G__52026;
continue;
}
} else {
var temp__5804__auto___52027__$1 = cljs.core.seq(seq__51687_51976);
if(temp__5804__auto___52027__$1){
var seq__51687_52028__$1 = temp__5804__auto___52027__$1;
if(cljs.core.chunked_seq_QMARK_(seq__51687_52028__$1)){
var c__4679__auto___52029 = cljs.core.chunk_first(seq__51687_52028__$1);
var G__52030 = cljs.core.chunk_rest(seq__51687_52028__$1);
var G__52031 = c__4679__auto___52029;
var G__52032 = cljs.core.count(c__4679__auto___52029);
var G__52033 = (0);
seq__51687_51976 = G__52030;
chunk__51691_51977 = G__52031;
count__51692_51978 = G__52032;
i__51693_51979 = G__52033;
continue;
} else {
var node_52034 = cljs.core.first(seq__51687_52028__$1);
if(cljs.core.not(node_52034.shadow$old)){
var path_match_52035 = shadow.cljs.devtools.client.browser.match_paths(node_52034.getAttribute("href"),path);
if(cljs.core.truth_(path_match_52035)){
var new_link_52036 = (function (){var G__51738 = node_52034.cloneNode(true);
G__51738.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_52035),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__51738;
})();
(node_52034.shadow$old = true);

(new_link_52036.onload = ((function (seq__51687_51976,chunk__51691_51977,count__51692_51978,i__51693_51979,seq__51439,chunk__51441,count__51442,i__51443,new_link_52036,path_match_52035,node_52034,seq__51687_52028__$1,temp__5804__auto___52027__$1,path,seq__51439__$1,temp__5804__auto__,map__51438,map__51438__$1,msg,updates,reload_info){
return (function (e){
var seq__51739_52037 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__51741_52038 = null;
var count__51742_52039 = (0);
var i__51743_52040 = (0);
while(true){
if((i__51743_52040 < count__51742_52039)){
var map__51747_52041 = chunk__51741_52038.cljs$core$IIndexed$_nth$arity$2(null,i__51743_52040);
var map__51747_52042__$1 = cljs.core.__destructure_map(map__51747_52041);
var task_52043 = map__51747_52042__$1;
var fn_str_52044 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51747_52042__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_52045 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51747_52042__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_52046 = goog.getObjectByName(fn_str_52044,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_52045)].join(''));

(fn_obj_52046.cljs$core$IFn$_invoke$arity$2 ? fn_obj_52046.cljs$core$IFn$_invoke$arity$2(path,new_link_52036) : fn_obj_52046.call(null,path,new_link_52036));


var G__52047 = seq__51739_52037;
var G__52048 = chunk__51741_52038;
var G__52049 = count__51742_52039;
var G__52050 = (i__51743_52040 + (1));
seq__51739_52037 = G__52047;
chunk__51741_52038 = G__52048;
count__51742_52039 = G__52049;
i__51743_52040 = G__52050;
continue;
} else {
var temp__5804__auto___52051__$2 = cljs.core.seq(seq__51739_52037);
if(temp__5804__auto___52051__$2){
var seq__51739_52052__$1 = temp__5804__auto___52051__$2;
if(cljs.core.chunked_seq_QMARK_(seq__51739_52052__$1)){
var c__4679__auto___52053 = cljs.core.chunk_first(seq__51739_52052__$1);
var G__52054 = cljs.core.chunk_rest(seq__51739_52052__$1);
var G__52055 = c__4679__auto___52053;
var G__52056 = cljs.core.count(c__4679__auto___52053);
var G__52057 = (0);
seq__51739_52037 = G__52054;
chunk__51741_52038 = G__52055;
count__51742_52039 = G__52056;
i__51743_52040 = G__52057;
continue;
} else {
var map__51748_52058 = cljs.core.first(seq__51739_52052__$1);
var map__51748_52059__$1 = cljs.core.__destructure_map(map__51748_52058);
var task_52060 = map__51748_52059__$1;
var fn_str_52061 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51748_52059__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_52062 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51748_52059__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_52064 = goog.getObjectByName(fn_str_52061,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_52062)].join(''));

(fn_obj_52064.cljs$core$IFn$_invoke$arity$2 ? fn_obj_52064.cljs$core$IFn$_invoke$arity$2(path,new_link_52036) : fn_obj_52064.call(null,path,new_link_52036));


var G__52065 = cljs.core.next(seq__51739_52052__$1);
var G__52066 = null;
var G__52067 = (0);
var G__52068 = (0);
seq__51739_52037 = G__52065;
chunk__51741_52038 = G__52066;
count__51742_52039 = G__52067;
i__51743_52040 = G__52068;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_52034);
});})(seq__51687_51976,chunk__51691_51977,count__51692_51978,i__51693_51979,seq__51439,chunk__51441,count__51442,i__51443,new_link_52036,path_match_52035,node_52034,seq__51687_52028__$1,temp__5804__auto___52027__$1,path,seq__51439__$1,temp__5804__auto__,map__51438,map__51438__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_52035], 0));

goog.dom.insertSiblingAfter(new_link_52036,node_52034);


var G__52069 = cljs.core.next(seq__51687_52028__$1);
var G__52070 = null;
var G__52071 = (0);
var G__52072 = (0);
seq__51687_51976 = G__52069;
chunk__51691_51977 = G__52070;
count__51692_51978 = G__52071;
i__51693_51979 = G__52072;
continue;
} else {
var G__52073 = cljs.core.next(seq__51687_52028__$1);
var G__52074 = null;
var G__52075 = (0);
var G__52076 = (0);
seq__51687_51976 = G__52073;
chunk__51691_51977 = G__52074;
count__51692_51978 = G__52075;
i__51693_51979 = G__52076;
continue;
}
} else {
var G__52077 = cljs.core.next(seq__51687_52028__$1);
var G__52078 = null;
var G__52079 = (0);
var G__52080 = (0);
seq__51687_51976 = G__52077;
chunk__51691_51977 = G__52078;
count__51692_51978 = G__52079;
i__51693_51979 = G__52080;
continue;
}
}
} else {
}
}
break;
}


var G__52081 = cljs.core.next(seq__51439__$1);
var G__52082 = null;
var G__52083 = (0);
var G__52084 = (0);
seq__51439 = G__52081;
chunk__51441 = G__52082;
count__51442 = G__52083;
i__51443 = G__52084;
continue;
} else {
var G__52085 = cljs.core.next(seq__51439__$1);
var G__52086 = null;
var G__52087 = (0);
var G__52088 = (0);
seq__51439 = G__52085;
chunk__51441 = G__52086;
count__51442 = G__52087;
i__51443 = G__52088;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__51758){
var map__51759 = p__51758;
var map__51759__$1 = cljs.core.__destructure_map(map__51759);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51759__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__51765){
var map__51766 = p__51765;
var map__51766__$1 = cljs.core.__destructure_map(map__51766);
var _ = map__51766__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51766__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__51767,done,error){
var map__51768 = p__51767;
var map__51768__$1 = cljs.core.__destructure_map(map__51768);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51768__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__51769,done,error){
var map__51772 = p__51769;
var map__51772__$1 = cljs.core.__destructure_map(map__51772);
var msg = map__51772__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51772__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51772__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51772__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__51773){
var map__51774 = p__51773;
var map__51774__$1 = cljs.core.__destructure_map(map__51774);
var src = map__51774__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51774__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4251__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4251__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__51775 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__51775) : done.call(null,G__51775));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__51776){
var map__51777 = p__51776;
var map__51777__$1 = cljs.core.__destructure_map(map__51777);
var msg__$1 = map__51777__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51777__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e51778){var ex = e51778;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__51779){
var map__51780 = p__51779;
var map__51780__$1 = cljs.core.__destructure_map(map__51780);
var env = map__51780__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51780__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__51781){
var map__51782 = p__51781;
var map__51782__$1 = cljs.core.__destructure_map(map__51782);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51782__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51782__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__51785){
var map__51786 = p__51785;
var map__51786__$1 = cljs.core.__destructure_map(map__51786);
var svc = map__51786__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51786__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
