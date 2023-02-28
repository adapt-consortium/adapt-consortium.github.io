goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__50055){
var map__50057 = p__50055;
var map__50057__$1 = cljs.core.__destructure_map(map__50057);
var m = map__50057__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50057__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50057__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4253__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__50067_50308 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__50068_50309 = null;
var count__50069_50310 = (0);
var i__50070_50311 = (0);
while(true){
if((i__50070_50311 < count__50069_50310)){
var f_50312 = chunk__50068_50309.cljs$core$IIndexed$_nth$arity$2(null,i__50070_50311);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_50312], 0));


var G__50313 = seq__50067_50308;
var G__50314 = chunk__50068_50309;
var G__50315 = count__50069_50310;
var G__50316 = (i__50070_50311 + (1));
seq__50067_50308 = G__50313;
chunk__50068_50309 = G__50314;
count__50069_50310 = G__50315;
i__50070_50311 = G__50316;
continue;
} else {
var temp__5804__auto___50318 = cljs.core.seq(seq__50067_50308);
if(temp__5804__auto___50318){
var seq__50067_50319__$1 = temp__5804__auto___50318;
if(cljs.core.chunked_seq_QMARK_(seq__50067_50319__$1)){
var c__4679__auto___50320 = cljs.core.chunk_first(seq__50067_50319__$1);
var G__50321 = cljs.core.chunk_rest(seq__50067_50319__$1);
var G__50322 = c__4679__auto___50320;
var G__50323 = cljs.core.count(c__4679__auto___50320);
var G__50324 = (0);
seq__50067_50308 = G__50321;
chunk__50068_50309 = G__50322;
count__50069_50310 = G__50323;
i__50070_50311 = G__50324;
continue;
} else {
var f_50325 = cljs.core.first(seq__50067_50319__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_50325], 0));


var G__50326 = cljs.core.next(seq__50067_50319__$1);
var G__50327 = null;
var G__50328 = (0);
var G__50329 = (0);
seq__50067_50308 = G__50326;
chunk__50068_50309 = G__50327;
count__50069_50310 = G__50328;
i__50070_50311 = G__50329;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_50330 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4253__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_50330], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_50330)))?cljs.core.second(arglists_50330):arglists_50330)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__50174_50339 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__50175_50340 = null;
var count__50176_50341 = (0);
var i__50177_50342 = (0);
while(true){
if((i__50177_50342 < count__50176_50341)){
var vec__50214_50344 = chunk__50175_50340.cljs$core$IIndexed$_nth$arity$2(null,i__50177_50342);
var name_50345 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50214_50344,(0),null);
var map__50217_50346 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50214_50344,(1),null);
var map__50217_50347__$1 = cljs.core.__destructure_map(map__50217_50346);
var doc_50348 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50217_50347__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_50349 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50217_50347__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_50345], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_50349], 0));

if(cljs.core.truth_(doc_50348)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_50348], 0));
} else {
}


var G__50356 = seq__50174_50339;
var G__50357 = chunk__50175_50340;
var G__50358 = count__50176_50341;
var G__50359 = (i__50177_50342 + (1));
seq__50174_50339 = G__50356;
chunk__50175_50340 = G__50357;
count__50176_50341 = G__50358;
i__50177_50342 = G__50359;
continue;
} else {
var temp__5804__auto___50360 = cljs.core.seq(seq__50174_50339);
if(temp__5804__auto___50360){
var seq__50174_50361__$1 = temp__5804__auto___50360;
if(cljs.core.chunked_seq_QMARK_(seq__50174_50361__$1)){
var c__4679__auto___50362 = cljs.core.chunk_first(seq__50174_50361__$1);
var G__50363 = cljs.core.chunk_rest(seq__50174_50361__$1);
var G__50364 = c__4679__auto___50362;
var G__50365 = cljs.core.count(c__4679__auto___50362);
var G__50366 = (0);
seq__50174_50339 = G__50363;
chunk__50175_50340 = G__50364;
count__50176_50341 = G__50365;
i__50177_50342 = G__50366;
continue;
} else {
var vec__50219_50371 = cljs.core.first(seq__50174_50361__$1);
var name_50372 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50219_50371,(0),null);
var map__50222_50373 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50219_50371,(1),null);
var map__50222_50374__$1 = cljs.core.__destructure_map(map__50222_50373);
var doc_50375 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50222_50374__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_50376 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50222_50374__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_50372], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_50376], 0));

if(cljs.core.truth_(doc_50375)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_50375], 0));
} else {
}


var G__50382 = cljs.core.next(seq__50174_50361__$1);
var G__50383 = null;
var G__50384 = (0);
var G__50385 = (0);
seq__50174_50339 = G__50382;
chunk__50175_50340 = G__50383;
count__50176_50341 = G__50384;
i__50177_50342 = G__50385;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__50224 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__50225 = null;
var count__50226 = (0);
var i__50227 = (0);
while(true){
if((i__50227 < count__50226)){
var role = chunk__50225.cljs$core$IIndexed$_nth$arity$2(null,i__50227);
var temp__5804__auto___50386__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___50386__$1)){
var spec_50388 = temp__5804__auto___50386__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_50388)], 0));
} else {
}


var G__50392 = seq__50224;
var G__50393 = chunk__50225;
var G__50394 = count__50226;
var G__50395 = (i__50227 + (1));
seq__50224 = G__50392;
chunk__50225 = G__50393;
count__50226 = G__50394;
i__50227 = G__50395;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__50224);
if(temp__5804__auto____$1){
var seq__50224__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__50224__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__50224__$1);
var G__50397 = cljs.core.chunk_rest(seq__50224__$1);
var G__50398 = c__4679__auto__;
var G__50399 = cljs.core.count(c__4679__auto__);
var G__50400 = (0);
seq__50224 = G__50397;
chunk__50225 = G__50398;
count__50226 = G__50399;
i__50227 = G__50400;
continue;
} else {
var role = cljs.core.first(seq__50224__$1);
var temp__5804__auto___50404__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___50404__$2)){
var spec_50408 = temp__5804__auto___50404__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_50408)], 0));
} else {
}


var G__50409 = cljs.core.next(seq__50224__$1);
var G__50410 = null;
var G__50411 = (0);
var G__50412 = (0);
seq__50224 = G__50409;
chunk__50225 = G__50410;
count__50226 = G__50411;
i__50227 = G__50412;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5804__auto__)){
var msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5804__auto__)){
var ed = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__50415 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__50416 = cljs.core.ex_cause(t);
via = G__50415;
t = G__50416;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5804__auto__)){
var root_msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5804__auto__)){
var data = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5804__auto__)){
var phase = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__50239 = datafied_throwable;
var map__50239__$1 = cljs.core.__destructure_map(map__50239);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50239__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50239__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50239__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__50240 = cljs.core.last(via);
var map__50240__$1 = cljs.core.__destructure_map(map__50240);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50240__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50240__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50240__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__50241 = data;
var map__50241__$1 = cljs.core.__destructure_map(map__50241);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50241__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50241__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50241__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__50242 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__50242__$1 = cljs.core.__destructure_map(map__50242);
var top_data = map__50242__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50242__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__50243 = phase;
var G__50243__$1 = (((G__50243 instanceof cljs.core.Keyword))?G__50243.fqn:null);
switch (G__50243__$1) {
case "read-source":
var map__50244 = data;
var map__50244__$1 = cljs.core.__destructure_map(map__50244);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50244__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50244__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__50245 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__50245__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50245,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__50245);
var G__50245__$2 = (cljs.core.truth_((function (){var fexpr__50246 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__50246.cljs$core$IFn$_invoke$arity$1 ? fexpr__50246.cljs$core$IFn$_invoke$arity$1(source) : fexpr__50246.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__50245__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__50245__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50245__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__50245__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__50247 = top_data;
var G__50247__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50247,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__50247);
var G__50247__$2 = (cljs.core.truth_((function (){var fexpr__50249 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__50249.cljs$core$IFn$_invoke$arity$1 ? fexpr__50249.cljs$core$IFn$_invoke$arity$1(source) : fexpr__50249.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__50247__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__50247__$1);
var G__50247__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50247__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__50247__$2);
var G__50247__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50247__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__50247__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50247__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__50247__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__50250 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50250,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50250,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50250,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50250,(3),null);
var G__50253 = top_data;
var G__50253__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50253,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__50253);
var G__50253__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50253__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__50253__$1);
var G__50253__$3 = (cljs.core.truth_((function (){var and__4251__auto__ = source__$1;
if(cljs.core.truth_(and__4251__auto__)){
return method;
} else {
return and__4251__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50253__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__50253__$2);
var G__50253__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50253__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__50253__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50253__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__50253__$4;
}

break;
case "execution":
var vec__50254 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50254,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50254,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50254,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50254,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__50238_SHARP_){
var or__4253__auto__ = (p1__50238_SHARP_ == null);
if(or__4253__auto__){
return or__4253__auto__;
} else {
var fexpr__50257 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__50257.cljs$core$IFn$_invoke$arity$1 ? fexpr__50257.cljs$core$IFn$_invoke$arity$1(p1__50238_SHARP_) : fexpr__50257.call(null,p1__50238_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4253__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return line;
}
})();
var G__50258 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__50258__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50258,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__50258);
var G__50258__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50258__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__50258__$1);
var G__50258__$3 = (cljs.core.truth_((function (){var or__4253__auto__ = fn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var and__4251__auto__ = source__$1;
if(cljs.core.truth_(and__4251__auto__)){
return method;
} else {
return and__4251__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50258__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4253__auto__ = fn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__50258__$2);
var G__50258__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50258__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__50258__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50258__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__50258__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50243__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__50262){
var map__50263 = p__50262;
var map__50263__$1 = cljs.core.__destructure_map(map__50263);
var triage_data = map__50263__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50263__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50263__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50263__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50263__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50263__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50263__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50263__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50263__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = source;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = line;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4253__auto__ = class$;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__50266 = phase;
var G__50266__$1 = (((G__50266 instanceof cljs.core.Keyword))?G__50266.fqn:null);
switch (G__50266__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__50267 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__50268 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__50269 = loc;
var G__50270 = (cljs.core.truth_(spec)?(function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__50271_50440 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__50272_50441 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__50273_50442 = true;
var _STAR_print_fn_STAR__temp_val__50274_50443 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__50273_50442);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__50274_50443);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__50260_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__50260_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__50272_50441);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__50271_50440);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__50267,G__50268,G__50269,G__50270) : format.call(null,G__50267,G__50268,G__50269,G__50270));

break;
case "macroexpansion":
var G__50276 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__50277 = cause_type;
var G__50278 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__50279 = loc;
var G__50280 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__50276,G__50277,G__50278,G__50279,G__50280) : format.call(null,G__50276,G__50277,G__50278,G__50279,G__50280));

break;
case "compile-syntax-check":
var G__50281 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__50282 = cause_type;
var G__50283 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__50284 = loc;
var G__50285 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__50281,G__50282,G__50283,G__50284,G__50285) : format.call(null,G__50281,G__50282,G__50283,G__50284,G__50285));

break;
case "compilation":
var G__50286 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__50287 = cause_type;
var G__50288 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__50289 = loc;
var G__50290 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__50286,G__50287,G__50288,G__50289,G__50290) : format.call(null,G__50286,G__50287,G__50288,G__50289,G__50290));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__50291 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__50292 = symbol;
var G__50293 = loc;
var G__50294 = (function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__50295_50449 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__50296_50450 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__50297_50451 = true;
var _STAR_print_fn_STAR__temp_val__50298_50452 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__50297_50451);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__50298_50452);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__50261_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__50261_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__50296_50450);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__50295_50449);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__50291,G__50292,G__50293,G__50294) : format.call(null,G__50291,G__50292,G__50293,G__50294));
} else {
var G__50301 = "Execution error%s at %s(%s).\n%s\n";
var G__50302 = cause_type;
var G__50303 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__50304 = loc;
var G__50305 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__50301,G__50302,G__50303,G__50304,G__50305) : format.call(null,G__50301,G__50302,G__50303,G__50304,G__50305));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50266__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
