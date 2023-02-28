goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__46628,res){
var map__46629 = p__46628;
var map__46629__$1 = cljs.core.__destructure_map(map__46629);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46629__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46629__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__46631 = res;
var G__46631__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46631,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__46631);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46631__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__46631__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__46638 = arguments.length;
switch (G__46638) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__46643,msg,handlers,timeout_after_ms){
var map__46647 = p__46643;
var map__46647__$1 = cljs.core.__destructure_map(map__46647);
var runtime = map__46647__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46647__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___46876 = arguments.length;
var i__4865__auto___46877 = (0);
while(true){
if((i__4865__auto___46877 < len__4864__auto___46876)){
args__4870__auto__.push((arguments[i__4865__auto___46877]));

var G__46879 = (i__4865__auto___46877 + (1));
i__4865__auto___46877 = G__46879;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__46653,ev,args){
var map__46654 = p__46653;
var map__46654__$1 = cljs.core.__destructure_map(map__46654);
var runtime = map__46654__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46654__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__46655 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__46658 = null;
var count__46659 = (0);
var i__46660 = (0);
while(true){
if((i__46660 < count__46659)){
var ext = chunk__46658.cljs$core$IIndexed$_nth$arity$2(null,i__46660);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__46886 = seq__46655;
var G__46887 = chunk__46658;
var G__46888 = count__46659;
var G__46889 = (i__46660 + (1));
seq__46655 = G__46886;
chunk__46658 = G__46887;
count__46659 = G__46888;
i__46660 = G__46889;
continue;
} else {
var G__46890 = seq__46655;
var G__46891 = chunk__46658;
var G__46892 = count__46659;
var G__46893 = (i__46660 + (1));
seq__46655 = G__46890;
chunk__46658 = G__46891;
count__46659 = G__46892;
i__46660 = G__46893;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__46655);
if(temp__5804__auto__){
var seq__46655__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46655__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__46655__$1);
var G__46895 = cljs.core.chunk_rest(seq__46655__$1);
var G__46896 = c__4679__auto__;
var G__46897 = cljs.core.count(c__4679__auto__);
var G__46898 = (0);
seq__46655 = G__46895;
chunk__46658 = G__46896;
count__46659 = G__46897;
i__46660 = G__46898;
continue;
} else {
var ext = cljs.core.first(seq__46655__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__46901 = cljs.core.next(seq__46655__$1);
var G__46902 = null;
var G__46903 = (0);
var G__46904 = (0);
seq__46655 = G__46901;
chunk__46658 = G__46902;
count__46659 = G__46903;
i__46660 = G__46904;
continue;
} else {
var G__46905 = cljs.core.next(seq__46655__$1);
var G__46906 = null;
var G__46907 = (0);
var G__46908 = (0);
seq__46655 = G__46905;
chunk__46658 = G__46906;
count__46659 = G__46907;
i__46660 = G__46908;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq46650){
var G__46651 = cljs.core.first(seq46650);
var seq46650__$1 = cljs.core.next(seq46650);
var G__46652 = cljs.core.first(seq46650__$1);
var seq46650__$2 = cljs.core.next(seq46650__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46651,G__46652,seq46650__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__46669,p__46670){
var map__46671 = p__46669;
var map__46671__$1 = cljs.core.__destructure_map(map__46671);
var runtime = map__46671__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46671__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__46672 = p__46670;
var map__46672__$1 = cljs.core.__destructure_map(map__46672);
var msg = map__46672__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46672__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__46673 = cljs.core.deref(state_ref);
var map__46673__$1 = cljs.core.__destructure_map(map__46673);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46673__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46673__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__46675){
var map__46676 = p__46675;
var map__46676__$1 = cljs.core.__destructure_map(map__46676);
var runtime = map__46676__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46676__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__4253__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__46677,msg){
var map__46678 = p__46677;
var map__46678__$1 = cljs.core.__destructure_map(map__46678);
var runtime = map__46678__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46678__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__46681,key,p__46682){
var map__46683 = p__46681;
var map__46683__$1 = cljs.core.__destructure_map(map__46683);
var state = map__46683__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46683__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__46684 = p__46682;
var map__46684__$1 = cljs.core.__destructure_map(map__46684);
var spec = map__46684__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46684__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__46687,key,spec){
var map__46688 = p__46687;
var map__46688__$1 = cljs.core.__destructure_map(map__46688);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46688__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__46689_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__46689_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__46690_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__46690_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__46691_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__46691_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__46692_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__46692_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__46693_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__46693_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__46696,key){
var map__46697 = p__46696;
var map__46697__$1 = cljs.core.__destructure_map(map__46697);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46697__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__46699,msg){
var map__46700 = p__46699;
var map__46700__$1 = cljs.core.__destructure_map(map__46700);
var runtime = map__46700__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46700__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__46702,p__46703){
var map__46704 = p__46702;
var map__46704__$1 = cljs.core.__destructure_map(map__46704);
var runtime = map__46704__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46704__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__46705 = p__46703;
var map__46705__$1 = cljs.core.__destructure_map(map__46705);
var msg = map__46705__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46705__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46705__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__46718 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__46720 = null;
var count__46721 = (0);
var i__46722 = (0);
while(true){
if((i__46722 < count__46721)){
var map__46784 = chunk__46720.cljs$core$IIndexed$_nth$arity$2(null,i__46722);
var map__46784__$1 = cljs.core.__destructure_map(map__46784);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46784__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__47086 = seq__46718;
var G__47087 = chunk__46720;
var G__47088 = count__46721;
var G__47089 = (i__46722 + (1));
seq__46718 = G__47086;
chunk__46720 = G__47087;
count__46721 = G__47088;
i__46722 = G__47089;
continue;
} else {
var G__47094 = seq__46718;
var G__47096 = chunk__46720;
var G__47097 = count__46721;
var G__47098 = (i__46722 + (1));
seq__46718 = G__47094;
chunk__46720 = G__47096;
count__46721 = G__47097;
i__46722 = G__47098;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__46718);
if(temp__5804__auto__){
var seq__46718__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46718__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__46718__$1);
var G__47103 = cljs.core.chunk_rest(seq__46718__$1);
var G__47104 = c__4679__auto__;
var G__47105 = cljs.core.count(c__4679__auto__);
var G__47106 = (0);
seq__46718 = G__47103;
chunk__46720 = G__47104;
count__46721 = G__47105;
i__46722 = G__47106;
continue;
} else {
var map__46827 = cljs.core.first(seq__46718__$1);
var map__46827__$1 = cljs.core.__destructure_map(map__46827);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46827__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__47111 = cljs.core.next(seq__46718__$1);
var G__47112 = null;
var G__47113 = (0);
var G__47114 = (0);
seq__46718 = G__47111;
chunk__46720 = G__47112;
count__46721 = G__47113;
i__46722 = G__47114;
continue;
} else {
var G__47115 = cljs.core.next(seq__46718__$1);
var G__47116 = null;
var G__47117 = (0);
var G__47118 = (0);
seq__46718 = G__47115;
chunk__46720 = G__47116;
count__46721 = G__47117;
i__46722 = G__47118;
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

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
