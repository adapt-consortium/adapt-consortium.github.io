goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_49674 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_49674(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_49675 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_49675(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__48594 = coll;
var G__48595 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__48594,G__48595) : shadow.dom.lazy_native_coll_seq.call(null,G__48594,G__48595));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4253__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__48610 = arguments.length;
switch (G__48610) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__48612 = arguments.length;
switch (G__48612) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__48617 = arguments.length;
switch (G__48617) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__48629 = arguments.length;
switch (G__48629) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__48647 = arguments.length;
switch (G__48647) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__48658 = arguments.length;
switch (G__48658) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4253__auto__ = (!((typeof document !== 'undefined')));
if(or__4253__auto__){
return or__4253__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e48668){if((e48668 instanceof Object)){
var e = e48668;
return console.log("didnt support attachEvent",el,e);
} else {
throw e48668;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4253__auto__ = (!((typeof document !== 'undefined')));
if(or__4253__auto__){
return or__4253__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__48676 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__48677 = null;
var count__48678 = (0);
var i__48679 = (0);
while(true){
if((i__48679 < count__48678)){
var el = chunk__48677.cljs$core$IIndexed$_nth$arity$2(null,i__48679);
var handler_49685__$1 = ((function (seq__48676,chunk__48677,count__48678,i__48679,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__48676,chunk__48677,count__48678,i__48679,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_49685__$1);


var G__49686 = seq__48676;
var G__49687 = chunk__48677;
var G__49688 = count__48678;
var G__49689 = (i__48679 + (1));
seq__48676 = G__49686;
chunk__48677 = G__49687;
count__48678 = G__49688;
i__48679 = G__49689;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__48676);
if(temp__5804__auto__){
var seq__48676__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48676__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__48676__$1);
var G__49690 = cljs.core.chunk_rest(seq__48676__$1);
var G__49691 = c__4679__auto__;
var G__49692 = cljs.core.count(c__4679__auto__);
var G__49693 = (0);
seq__48676 = G__49690;
chunk__48677 = G__49691;
count__48678 = G__49692;
i__48679 = G__49693;
continue;
} else {
var el = cljs.core.first(seq__48676__$1);
var handler_49694__$1 = ((function (seq__48676,chunk__48677,count__48678,i__48679,el,seq__48676__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__48676,chunk__48677,count__48678,i__48679,el,seq__48676__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_49694__$1);


var G__49695 = cljs.core.next(seq__48676__$1);
var G__49696 = null;
var G__49697 = (0);
var G__49698 = (0);
seq__48676 = G__49695;
chunk__48677 = G__49696;
count__48678 = G__49697;
i__48679 = G__49698;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__48712 = arguments.length;
switch (G__48712) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__48787 = cljs.core.seq(events);
var chunk__48788 = null;
var count__48789 = (0);
var i__48790 = (0);
while(true){
if((i__48790 < count__48789)){
var vec__48824 = chunk__48788.cljs$core$IIndexed$_nth$arity$2(null,i__48790);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48824,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48824,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__49700 = seq__48787;
var G__49701 = chunk__48788;
var G__49702 = count__48789;
var G__49703 = (i__48790 + (1));
seq__48787 = G__49700;
chunk__48788 = G__49701;
count__48789 = G__49702;
i__48790 = G__49703;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__48787);
if(temp__5804__auto__){
var seq__48787__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48787__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__48787__$1);
var G__49704 = cljs.core.chunk_rest(seq__48787__$1);
var G__49705 = c__4679__auto__;
var G__49706 = cljs.core.count(c__4679__auto__);
var G__49707 = (0);
seq__48787 = G__49704;
chunk__48788 = G__49705;
count__48789 = G__49706;
i__48790 = G__49707;
continue;
} else {
var vec__48843 = cljs.core.first(seq__48787__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48843,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48843,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__49708 = cljs.core.next(seq__48787__$1);
var G__49709 = null;
var G__49710 = (0);
var G__49711 = (0);
seq__48787 = G__49708;
chunk__48788 = G__49709;
count__48789 = G__49710;
i__48790 = G__49711;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__48864 = cljs.core.seq(styles);
var chunk__48865 = null;
var count__48866 = (0);
var i__48867 = (0);
while(true){
if((i__48867 < count__48866)){
var vec__48898 = chunk__48865.cljs$core$IIndexed$_nth$arity$2(null,i__48867);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48898,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48898,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__49712 = seq__48864;
var G__49713 = chunk__48865;
var G__49714 = count__48866;
var G__49715 = (i__48867 + (1));
seq__48864 = G__49712;
chunk__48865 = G__49713;
count__48866 = G__49714;
i__48867 = G__49715;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__48864);
if(temp__5804__auto__){
var seq__48864__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48864__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__48864__$1);
var G__49716 = cljs.core.chunk_rest(seq__48864__$1);
var G__49717 = c__4679__auto__;
var G__49718 = cljs.core.count(c__4679__auto__);
var G__49719 = (0);
seq__48864 = G__49716;
chunk__48865 = G__49717;
count__48866 = G__49718;
i__48867 = G__49719;
continue;
} else {
var vec__48906 = cljs.core.first(seq__48864__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48906,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48906,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__49720 = cljs.core.next(seq__48864__$1);
var G__49721 = null;
var G__49722 = (0);
var G__49723 = (0);
seq__48864 = G__49720;
chunk__48865 = G__49721;
count__48866 = G__49722;
i__48867 = G__49723;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__48918_49724 = key;
var G__48918_49725__$1 = (((G__48918_49724 instanceof cljs.core.Keyword))?G__48918_49724.fqn:null);
switch (G__48918_49725__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_49727 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4253__auto__ = goog.string.startsWith(ks_49727,"data-");
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return goog.string.startsWith(ks_49727,"aria-");
}
})())){
el.setAttribute(ks_49727,value);
} else {
(el[ks_49727] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__48942){
var map__48943 = p__48942;
var map__48943__$1 = cljs.core.__destructure_map(map__48943);
var props = map__48943__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48943__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__48946 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48946,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48946,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48946,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__48952 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__48952,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__48952;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__48954 = arguments.length;
switch (G__48954) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__48962){
var vec__48963 = p__48962;
var seq__48964 = cljs.core.seq(vec__48963);
var first__48965 = cljs.core.first(seq__48964);
var seq__48964__$1 = cljs.core.next(seq__48964);
var nn = first__48965;
var first__48965__$1 = cljs.core.first(seq__48964__$1);
var seq__48964__$2 = cljs.core.next(seq__48964__$1);
var np = first__48965__$1;
var nc = seq__48964__$2;
var node = vec__48963;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__48971 = nn;
var G__48972 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__48971,G__48972) : create_fn.call(null,G__48971,G__48972));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__48974 = nn;
var G__48975 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__48974,G__48975) : create_fn.call(null,G__48974,G__48975));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__48979 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48979,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48979,(1),null);
var seq__48982_49729 = cljs.core.seq(node_children);
var chunk__48983_49730 = null;
var count__48984_49731 = (0);
var i__48985_49732 = (0);
while(true){
if((i__48985_49732 < count__48984_49731)){
var child_struct_49733 = chunk__48983_49730.cljs$core$IIndexed$_nth$arity$2(null,i__48985_49732);
var children_49734 = shadow.dom.dom_node(child_struct_49733);
if(cljs.core.seq_QMARK_(children_49734)){
var seq__49021_49735 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_49734));
var chunk__49023_49736 = null;
var count__49024_49737 = (0);
var i__49025_49738 = (0);
while(true){
if((i__49025_49738 < count__49024_49737)){
var child_49739 = chunk__49023_49736.cljs$core$IIndexed$_nth$arity$2(null,i__49025_49738);
if(cljs.core.truth_(child_49739)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_49739);


var G__49741 = seq__49021_49735;
var G__49742 = chunk__49023_49736;
var G__49743 = count__49024_49737;
var G__49744 = (i__49025_49738 + (1));
seq__49021_49735 = G__49741;
chunk__49023_49736 = G__49742;
count__49024_49737 = G__49743;
i__49025_49738 = G__49744;
continue;
} else {
var G__49745 = seq__49021_49735;
var G__49746 = chunk__49023_49736;
var G__49747 = count__49024_49737;
var G__49748 = (i__49025_49738 + (1));
seq__49021_49735 = G__49745;
chunk__49023_49736 = G__49746;
count__49024_49737 = G__49747;
i__49025_49738 = G__49748;
continue;
}
} else {
var temp__5804__auto___49750 = cljs.core.seq(seq__49021_49735);
if(temp__5804__auto___49750){
var seq__49021_49751__$1 = temp__5804__auto___49750;
if(cljs.core.chunked_seq_QMARK_(seq__49021_49751__$1)){
var c__4679__auto___49752 = cljs.core.chunk_first(seq__49021_49751__$1);
var G__49753 = cljs.core.chunk_rest(seq__49021_49751__$1);
var G__49754 = c__4679__auto___49752;
var G__49755 = cljs.core.count(c__4679__auto___49752);
var G__49756 = (0);
seq__49021_49735 = G__49753;
chunk__49023_49736 = G__49754;
count__49024_49737 = G__49755;
i__49025_49738 = G__49756;
continue;
} else {
var child_49757 = cljs.core.first(seq__49021_49751__$1);
if(cljs.core.truth_(child_49757)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_49757);


var G__49758 = cljs.core.next(seq__49021_49751__$1);
var G__49759 = null;
var G__49760 = (0);
var G__49761 = (0);
seq__49021_49735 = G__49758;
chunk__49023_49736 = G__49759;
count__49024_49737 = G__49760;
i__49025_49738 = G__49761;
continue;
} else {
var G__49762 = cljs.core.next(seq__49021_49751__$1);
var G__49763 = null;
var G__49764 = (0);
var G__49765 = (0);
seq__49021_49735 = G__49762;
chunk__49023_49736 = G__49763;
count__49024_49737 = G__49764;
i__49025_49738 = G__49765;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_49734);
}


var G__49766 = seq__48982_49729;
var G__49767 = chunk__48983_49730;
var G__49768 = count__48984_49731;
var G__49769 = (i__48985_49732 + (1));
seq__48982_49729 = G__49766;
chunk__48983_49730 = G__49767;
count__48984_49731 = G__49768;
i__48985_49732 = G__49769;
continue;
} else {
var temp__5804__auto___49770 = cljs.core.seq(seq__48982_49729);
if(temp__5804__auto___49770){
var seq__48982_49771__$1 = temp__5804__auto___49770;
if(cljs.core.chunked_seq_QMARK_(seq__48982_49771__$1)){
var c__4679__auto___49772 = cljs.core.chunk_first(seq__48982_49771__$1);
var G__49773 = cljs.core.chunk_rest(seq__48982_49771__$1);
var G__49774 = c__4679__auto___49772;
var G__49775 = cljs.core.count(c__4679__auto___49772);
var G__49776 = (0);
seq__48982_49729 = G__49773;
chunk__48983_49730 = G__49774;
count__48984_49731 = G__49775;
i__48985_49732 = G__49776;
continue;
} else {
var child_struct_49777 = cljs.core.first(seq__48982_49771__$1);
var children_49778 = shadow.dom.dom_node(child_struct_49777);
if(cljs.core.seq_QMARK_(children_49778)){
var seq__49054_49779 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_49778));
var chunk__49056_49780 = null;
var count__49057_49781 = (0);
var i__49058_49782 = (0);
while(true){
if((i__49058_49782 < count__49057_49781)){
var child_49783 = chunk__49056_49780.cljs$core$IIndexed$_nth$arity$2(null,i__49058_49782);
if(cljs.core.truth_(child_49783)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_49783);


var G__49784 = seq__49054_49779;
var G__49785 = chunk__49056_49780;
var G__49786 = count__49057_49781;
var G__49787 = (i__49058_49782 + (1));
seq__49054_49779 = G__49784;
chunk__49056_49780 = G__49785;
count__49057_49781 = G__49786;
i__49058_49782 = G__49787;
continue;
} else {
var G__49788 = seq__49054_49779;
var G__49789 = chunk__49056_49780;
var G__49790 = count__49057_49781;
var G__49791 = (i__49058_49782 + (1));
seq__49054_49779 = G__49788;
chunk__49056_49780 = G__49789;
count__49057_49781 = G__49790;
i__49058_49782 = G__49791;
continue;
}
} else {
var temp__5804__auto___49792__$1 = cljs.core.seq(seq__49054_49779);
if(temp__5804__auto___49792__$1){
var seq__49054_49793__$1 = temp__5804__auto___49792__$1;
if(cljs.core.chunked_seq_QMARK_(seq__49054_49793__$1)){
var c__4679__auto___49794 = cljs.core.chunk_first(seq__49054_49793__$1);
var G__49795 = cljs.core.chunk_rest(seq__49054_49793__$1);
var G__49796 = c__4679__auto___49794;
var G__49797 = cljs.core.count(c__4679__auto___49794);
var G__49798 = (0);
seq__49054_49779 = G__49795;
chunk__49056_49780 = G__49796;
count__49057_49781 = G__49797;
i__49058_49782 = G__49798;
continue;
} else {
var child_49799 = cljs.core.first(seq__49054_49793__$1);
if(cljs.core.truth_(child_49799)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_49799);


var G__49800 = cljs.core.next(seq__49054_49793__$1);
var G__49801 = null;
var G__49802 = (0);
var G__49803 = (0);
seq__49054_49779 = G__49800;
chunk__49056_49780 = G__49801;
count__49057_49781 = G__49802;
i__49058_49782 = G__49803;
continue;
} else {
var G__49804 = cljs.core.next(seq__49054_49793__$1);
var G__49805 = null;
var G__49806 = (0);
var G__49807 = (0);
seq__49054_49779 = G__49804;
chunk__49056_49780 = G__49805;
count__49057_49781 = G__49806;
i__49058_49782 = G__49807;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_49778);
}


var G__49808 = cljs.core.next(seq__48982_49771__$1);
var G__49809 = null;
var G__49810 = (0);
var G__49811 = (0);
seq__48982_49729 = G__49808;
chunk__48983_49730 = G__49809;
count__48984_49731 = G__49810;
i__48985_49732 = G__49811;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__49085 = cljs.core.seq(node);
var chunk__49086 = null;
var count__49087 = (0);
var i__49088 = (0);
while(true){
if((i__49088 < count__49087)){
var n = chunk__49086.cljs$core$IIndexed$_nth$arity$2(null,i__49088);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__49812 = seq__49085;
var G__49813 = chunk__49086;
var G__49814 = count__49087;
var G__49815 = (i__49088 + (1));
seq__49085 = G__49812;
chunk__49086 = G__49813;
count__49087 = G__49814;
i__49088 = G__49815;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__49085);
if(temp__5804__auto__){
var seq__49085__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49085__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__49085__$1);
var G__49817 = cljs.core.chunk_rest(seq__49085__$1);
var G__49818 = c__4679__auto__;
var G__49819 = cljs.core.count(c__4679__auto__);
var G__49820 = (0);
seq__49085 = G__49817;
chunk__49086 = G__49818;
count__49087 = G__49819;
i__49088 = G__49820;
continue;
} else {
var n = cljs.core.first(seq__49085__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__49821 = cljs.core.next(seq__49085__$1);
var G__49822 = null;
var G__49823 = (0);
var G__49824 = (0);
seq__49085 = G__49821;
chunk__49086 = G__49822;
count__49087 = G__49823;
i__49088 = G__49824;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__49101 = arguments.length;
switch (G__49101) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__49108 = arguments.length;
switch (G__49108) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__49134 = arguments.length;
switch (G__49134) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4253__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4870__auto__ = [];
var len__4864__auto___49830 = arguments.length;
var i__4865__auto___49831 = (0);
while(true){
if((i__4865__auto___49831 < len__4864__auto___49830)){
args__4870__auto__.push((arguments[i__4865__auto___49831]));

var G__49832 = (i__4865__auto___49831 + (1));
i__4865__auto___49831 = G__49832;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__49164_49833 = cljs.core.seq(nodes);
var chunk__49165_49834 = null;
var count__49166_49835 = (0);
var i__49167_49836 = (0);
while(true){
if((i__49167_49836 < count__49166_49835)){
var node_49837 = chunk__49165_49834.cljs$core$IIndexed$_nth$arity$2(null,i__49167_49836);
fragment.appendChild(shadow.dom._to_dom(node_49837));


var G__49838 = seq__49164_49833;
var G__49839 = chunk__49165_49834;
var G__49840 = count__49166_49835;
var G__49841 = (i__49167_49836 + (1));
seq__49164_49833 = G__49838;
chunk__49165_49834 = G__49839;
count__49166_49835 = G__49840;
i__49167_49836 = G__49841;
continue;
} else {
var temp__5804__auto___49842 = cljs.core.seq(seq__49164_49833);
if(temp__5804__auto___49842){
var seq__49164_49843__$1 = temp__5804__auto___49842;
if(cljs.core.chunked_seq_QMARK_(seq__49164_49843__$1)){
var c__4679__auto___49844 = cljs.core.chunk_first(seq__49164_49843__$1);
var G__49845 = cljs.core.chunk_rest(seq__49164_49843__$1);
var G__49846 = c__4679__auto___49844;
var G__49847 = cljs.core.count(c__4679__auto___49844);
var G__49848 = (0);
seq__49164_49833 = G__49845;
chunk__49165_49834 = G__49846;
count__49166_49835 = G__49847;
i__49167_49836 = G__49848;
continue;
} else {
var node_49850 = cljs.core.first(seq__49164_49843__$1);
fragment.appendChild(shadow.dom._to_dom(node_49850));


var G__49851 = cljs.core.next(seq__49164_49843__$1);
var G__49852 = null;
var G__49853 = (0);
var G__49854 = (0);
seq__49164_49833 = G__49851;
chunk__49165_49834 = G__49852;
count__49166_49835 = G__49853;
i__49167_49836 = G__49854;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq49161){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49161));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__49172_49855 = cljs.core.seq(scripts);
var chunk__49173_49856 = null;
var count__49174_49857 = (0);
var i__49175_49858 = (0);
while(true){
if((i__49175_49858 < count__49174_49857)){
var vec__49184_49859 = chunk__49173_49856.cljs$core$IIndexed$_nth$arity$2(null,i__49175_49858);
var script_tag_49860 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49184_49859,(0),null);
var script_body_49861 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49184_49859,(1),null);
eval(script_body_49861);


var G__49862 = seq__49172_49855;
var G__49863 = chunk__49173_49856;
var G__49864 = count__49174_49857;
var G__49865 = (i__49175_49858 + (1));
seq__49172_49855 = G__49862;
chunk__49173_49856 = G__49863;
count__49174_49857 = G__49864;
i__49175_49858 = G__49865;
continue;
} else {
var temp__5804__auto___49866 = cljs.core.seq(seq__49172_49855);
if(temp__5804__auto___49866){
var seq__49172_49868__$1 = temp__5804__auto___49866;
if(cljs.core.chunked_seq_QMARK_(seq__49172_49868__$1)){
var c__4679__auto___49869 = cljs.core.chunk_first(seq__49172_49868__$1);
var G__49870 = cljs.core.chunk_rest(seq__49172_49868__$1);
var G__49871 = c__4679__auto___49869;
var G__49872 = cljs.core.count(c__4679__auto___49869);
var G__49873 = (0);
seq__49172_49855 = G__49870;
chunk__49173_49856 = G__49871;
count__49174_49857 = G__49872;
i__49175_49858 = G__49873;
continue;
} else {
var vec__49188_49875 = cljs.core.first(seq__49172_49868__$1);
var script_tag_49876 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49188_49875,(0),null);
var script_body_49877 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49188_49875,(1),null);
eval(script_body_49877);


var G__49878 = cljs.core.next(seq__49172_49868__$1);
var G__49879 = null;
var G__49880 = (0);
var G__49881 = (0);
seq__49172_49855 = G__49878;
chunk__49173_49856 = G__49879;
count__49174_49857 = G__49880;
i__49175_49858 = G__49881;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__49191){
var vec__49192 = p__49191;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49192,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49192,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__49197 = arguments.length;
switch (G__49197) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__49222 = cljs.core.seq(style_keys);
var chunk__49223 = null;
var count__49224 = (0);
var i__49225 = (0);
while(true){
if((i__49225 < count__49224)){
var it = chunk__49223.cljs$core$IIndexed$_nth$arity$2(null,i__49225);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__49886 = seq__49222;
var G__49887 = chunk__49223;
var G__49888 = count__49224;
var G__49889 = (i__49225 + (1));
seq__49222 = G__49886;
chunk__49223 = G__49887;
count__49224 = G__49888;
i__49225 = G__49889;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__49222);
if(temp__5804__auto__){
var seq__49222__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49222__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__49222__$1);
var G__49890 = cljs.core.chunk_rest(seq__49222__$1);
var G__49891 = c__4679__auto__;
var G__49892 = cljs.core.count(c__4679__auto__);
var G__49893 = (0);
seq__49222 = G__49890;
chunk__49223 = G__49891;
count__49224 = G__49892;
i__49225 = G__49893;
continue;
} else {
var it = cljs.core.first(seq__49222__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__49895 = cljs.core.next(seq__49222__$1);
var G__49896 = null;
var G__49897 = (0);
var G__49898 = (0);
seq__49222 = G__49895;
chunk__49223 = G__49896;
count__49224 = G__49897;
i__49225 = G__49898;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k49228,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__49232 = k49228;
var G__49232__$1 = (((G__49232 instanceof cljs.core.Keyword))?G__49232.fqn:null);
switch (G__49232__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k49228,else__4505__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__49233){
var vec__49234 = p__49233;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49234,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49234,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__49227){
var self__ = this;
var G__49227__$1 = this;
return (new cljs.core.RecordIter((0),G__49227__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this49229,other49230){
var self__ = this;
var this49229__$1 = this;
return (((!((other49230 == null)))) && ((((this49229__$1.constructor === other49230.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49229__$1.x,other49230.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49229__$1.y,other49230.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49229__$1.__extmap,other49230.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k49228){
var self__ = this;
var this__4509__auto____$1 = this;
var G__49256 = k49228;
var G__49256__$1 = (((G__49256 instanceof cljs.core.Keyword))?G__49256.fqn:null);
switch (G__49256__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k49228);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__49227){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__49258 = cljs.core.keyword_identical_QMARK_;
var expr__49259 = k__4511__auto__;
if(cljs.core.truth_((pred__49258.cljs$core$IFn$_invoke$arity$2 ? pred__49258.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__49259) : pred__49258.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__49259)))){
return (new shadow.dom.Coordinate(G__49227,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__49258.cljs$core$IFn$_invoke$arity$2 ? pred__49258.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__49259) : pred__49258.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__49259)))){
return (new shadow.dom.Coordinate(self__.x,G__49227,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__49227),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__49227){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__49227,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__49231){
var extmap__4542__auto__ = (function (){var G__49267 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__49231,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__49231)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__49267);
} else {
return G__49267;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__49231),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__49231),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k49279,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__49297 = k49279;
var G__49297__$1 = (((G__49297 instanceof cljs.core.Keyword))?G__49297.fqn:null);
switch (G__49297__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k49279,else__4505__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__49320){
var vec__49321 = p__49320;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49321,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49321,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#shadow.dom.Size{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__49278){
var self__ = this;
var G__49278__$1 = this;
return (new cljs.core.RecordIter((0),G__49278__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this49280,other49281){
var self__ = this;
var this49280__$1 = this;
return (((!((other49281 == null)))) && ((((this49280__$1.constructor === other49281.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49280__$1.w,other49281.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49280__$1.h,other49281.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49280__$1.__extmap,other49281.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k49279){
var self__ = this;
var this__4509__auto____$1 = this;
var G__49424 = k49279;
var G__49424__$1 = (((G__49424 instanceof cljs.core.Keyword))?G__49424.fqn:null);
switch (G__49424__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k49279);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__49278){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__49435 = cljs.core.keyword_identical_QMARK_;
var expr__49436 = k__4511__auto__;
if(cljs.core.truth_((pred__49435.cljs$core$IFn$_invoke$arity$2 ? pred__49435.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__49436) : pred__49435.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__49436)))){
return (new shadow.dom.Size(G__49278,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__49435.cljs$core$IFn$_invoke$arity$2 ? pred__49435.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__49436) : pred__49435.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__49436)))){
return (new shadow.dom.Size(self__.w,G__49278,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__49278),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__49278){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__49278,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__49283){
var extmap__4542__auto__ = (function (){var G__49464 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__49283,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__49283)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__49464);
} else {
return G__49464;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__49283),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__49283),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4738__auto__ = opts;
var l__4739__auto__ = a__4738__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4739__auto__)){
var G__49924 = (i + (1));
var G__49925 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__49924;
ret = G__49925;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__49504){
var vec__49505 = p__49504;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49505,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49505,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__49509 = arguments.length;
switch (G__49509) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__49927 = ps;
var G__49928 = (i + (1));
el__$1 = G__49927;
i = G__49928;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__49540 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49540,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49540,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49540,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__49543_49929 = cljs.core.seq(props);
var chunk__49544_49930 = null;
var count__49545_49931 = (0);
var i__49546_49932 = (0);
while(true){
if((i__49546_49932 < count__49545_49931)){
var vec__49555_49933 = chunk__49544_49930.cljs$core$IIndexed$_nth$arity$2(null,i__49546_49932);
var k_49934 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49555_49933,(0),null);
var v_49935 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49555_49933,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_49934);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_49934),v_49935);


var G__49936 = seq__49543_49929;
var G__49937 = chunk__49544_49930;
var G__49938 = count__49545_49931;
var G__49939 = (i__49546_49932 + (1));
seq__49543_49929 = G__49936;
chunk__49544_49930 = G__49937;
count__49545_49931 = G__49938;
i__49546_49932 = G__49939;
continue;
} else {
var temp__5804__auto___49940 = cljs.core.seq(seq__49543_49929);
if(temp__5804__auto___49940){
var seq__49543_49941__$1 = temp__5804__auto___49940;
if(cljs.core.chunked_seq_QMARK_(seq__49543_49941__$1)){
var c__4679__auto___49942 = cljs.core.chunk_first(seq__49543_49941__$1);
var G__49943 = cljs.core.chunk_rest(seq__49543_49941__$1);
var G__49944 = c__4679__auto___49942;
var G__49945 = cljs.core.count(c__4679__auto___49942);
var G__49946 = (0);
seq__49543_49929 = G__49943;
chunk__49544_49930 = G__49944;
count__49545_49931 = G__49945;
i__49546_49932 = G__49946;
continue;
} else {
var vec__49600_49947 = cljs.core.first(seq__49543_49941__$1);
var k_49948 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49600_49947,(0),null);
var v_49949 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49600_49947,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_49948);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_49948),v_49949);


var G__49950 = cljs.core.next(seq__49543_49941__$1);
var G__49951 = null;
var G__49952 = (0);
var G__49953 = (0);
seq__49543_49929 = G__49950;
chunk__49544_49930 = G__49951;
count__49545_49931 = G__49952;
i__49546_49932 = G__49953;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__49608 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49608,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49608,(1),null);
var seq__49611_49957 = cljs.core.seq(node_children);
var chunk__49613_49958 = null;
var count__49614_49959 = (0);
var i__49615_49960 = (0);
while(true){
if((i__49615_49960 < count__49614_49959)){
var child_struct_49961 = chunk__49613_49958.cljs$core$IIndexed$_nth$arity$2(null,i__49615_49960);
if((!((child_struct_49961 == null)))){
if(typeof child_struct_49961 === 'string'){
var text_49962 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_49962),child_struct_49961].join(''));
} else {
var children_49963 = shadow.dom.svg_node(child_struct_49961);
if(cljs.core.seq_QMARK_(children_49963)){
var seq__49633_49964 = cljs.core.seq(children_49963);
var chunk__49635_49965 = null;
var count__49636_49966 = (0);
var i__49637_49967 = (0);
while(true){
if((i__49637_49967 < count__49636_49966)){
var child_49968 = chunk__49635_49965.cljs$core$IIndexed$_nth$arity$2(null,i__49637_49967);
if(cljs.core.truth_(child_49968)){
node.appendChild(child_49968);


var G__49969 = seq__49633_49964;
var G__49970 = chunk__49635_49965;
var G__49971 = count__49636_49966;
var G__49972 = (i__49637_49967 + (1));
seq__49633_49964 = G__49969;
chunk__49635_49965 = G__49970;
count__49636_49966 = G__49971;
i__49637_49967 = G__49972;
continue;
} else {
var G__49973 = seq__49633_49964;
var G__49974 = chunk__49635_49965;
var G__49975 = count__49636_49966;
var G__49976 = (i__49637_49967 + (1));
seq__49633_49964 = G__49973;
chunk__49635_49965 = G__49974;
count__49636_49966 = G__49975;
i__49637_49967 = G__49976;
continue;
}
} else {
var temp__5804__auto___49977 = cljs.core.seq(seq__49633_49964);
if(temp__5804__auto___49977){
var seq__49633_49978__$1 = temp__5804__auto___49977;
if(cljs.core.chunked_seq_QMARK_(seq__49633_49978__$1)){
var c__4679__auto___49979 = cljs.core.chunk_first(seq__49633_49978__$1);
var G__49980 = cljs.core.chunk_rest(seq__49633_49978__$1);
var G__49981 = c__4679__auto___49979;
var G__49982 = cljs.core.count(c__4679__auto___49979);
var G__49983 = (0);
seq__49633_49964 = G__49980;
chunk__49635_49965 = G__49981;
count__49636_49966 = G__49982;
i__49637_49967 = G__49983;
continue;
} else {
var child_49984 = cljs.core.first(seq__49633_49978__$1);
if(cljs.core.truth_(child_49984)){
node.appendChild(child_49984);


var G__49985 = cljs.core.next(seq__49633_49978__$1);
var G__49986 = null;
var G__49987 = (0);
var G__49988 = (0);
seq__49633_49964 = G__49985;
chunk__49635_49965 = G__49986;
count__49636_49966 = G__49987;
i__49637_49967 = G__49988;
continue;
} else {
var G__49989 = cljs.core.next(seq__49633_49978__$1);
var G__49990 = null;
var G__49991 = (0);
var G__49992 = (0);
seq__49633_49964 = G__49989;
chunk__49635_49965 = G__49990;
count__49636_49966 = G__49991;
i__49637_49967 = G__49992;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_49963);
}
}


var G__49993 = seq__49611_49957;
var G__49994 = chunk__49613_49958;
var G__49995 = count__49614_49959;
var G__49996 = (i__49615_49960 + (1));
seq__49611_49957 = G__49993;
chunk__49613_49958 = G__49994;
count__49614_49959 = G__49995;
i__49615_49960 = G__49996;
continue;
} else {
var G__49997 = seq__49611_49957;
var G__49998 = chunk__49613_49958;
var G__49999 = count__49614_49959;
var G__50000 = (i__49615_49960 + (1));
seq__49611_49957 = G__49997;
chunk__49613_49958 = G__49998;
count__49614_49959 = G__49999;
i__49615_49960 = G__50000;
continue;
}
} else {
var temp__5804__auto___50001 = cljs.core.seq(seq__49611_49957);
if(temp__5804__auto___50001){
var seq__49611_50002__$1 = temp__5804__auto___50001;
if(cljs.core.chunked_seq_QMARK_(seq__49611_50002__$1)){
var c__4679__auto___50003 = cljs.core.chunk_first(seq__49611_50002__$1);
var G__50004 = cljs.core.chunk_rest(seq__49611_50002__$1);
var G__50005 = c__4679__auto___50003;
var G__50006 = cljs.core.count(c__4679__auto___50003);
var G__50007 = (0);
seq__49611_49957 = G__50004;
chunk__49613_49958 = G__50005;
count__49614_49959 = G__50006;
i__49615_49960 = G__50007;
continue;
} else {
var child_struct_50008 = cljs.core.first(seq__49611_50002__$1);
if((!((child_struct_50008 == null)))){
if(typeof child_struct_50008 === 'string'){
var text_50009 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_50009),child_struct_50008].join(''));
} else {
var children_50010 = shadow.dom.svg_node(child_struct_50008);
if(cljs.core.seq_QMARK_(children_50010)){
var seq__49639_50011 = cljs.core.seq(children_50010);
var chunk__49641_50012 = null;
var count__49642_50013 = (0);
var i__49643_50014 = (0);
while(true){
if((i__49643_50014 < count__49642_50013)){
var child_50016 = chunk__49641_50012.cljs$core$IIndexed$_nth$arity$2(null,i__49643_50014);
if(cljs.core.truth_(child_50016)){
node.appendChild(child_50016);


var G__50017 = seq__49639_50011;
var G__50018 = chunk__49641_50012;
var G__50019 = count__49642_50013;
var G__50020 = (i__49643_50014 + (1));
seq__49639_50011 = G__50017;
chunk__49641_50012 = G__50018;
count__49642_50013 = G__50019;
i__49643_50014 = G__50020;
continue;
} else {
var G__50021 = seq__49639_50011;
var G__50022 = chunk__49641_50012;
var G__50023 = count__49642_50013;
var G__50024 = (i__49643_50014 + (1));
seq__49639_50011 = G__50021;
chunk__49641_50012 = G__50022;
count__49642_50013 = G__50023;
i__49643_50014 = G__50024;
continue;
}
} else {
var temp__5804__auto___50025__$1 = cljs.core.seq(seq__49639_50011);
if(temp__5804__auto___50025__$1){
var seq__49639_50026__$1 = temp__5804__auto___50025__$1;
if(cljs.core.chunked_seq_QMARK_(seq__49639_50026__$1)){
var c__4679__auto___50027 = cljs.core.chunk_first(seq__49639_50026__$1);
var G__50028 = cljs.core.chunk_rest(seq__49639_50026__$1);
var G__50029 = c__4679__auto___50027;
var G__50030 = cljs.core.count(c__4679__auto___50027);
var G__50031 = (0);
seq__49639_50011 = G__50028;
chunk__49641_50012 = G__50029;
count__49642_50013 = G__50030;
i__49643_50014 = G__50031;
continue;
} else {
var child_50033 = cljs.core.first(seq__49639_50026__$1);
if(cljs.core.truth_(child_50033)){
node.appendChild(child_50033);


var G__50034 = cljs.core.next(seq__49639_50026__$1);
var G__50035 = null;
var G__50036 = (0);
var G__50037 = (0);
seq__49639_50011 = G__50034;
chunk__49641_50012 = G__50035;
count__49642_50013 = G__50036;
i__49643_50014 = G__50037;
continue;
} else {
var G__50038 = cljs.core.next(seq__49639_50026__$1);
var G__50039 = null;
var G__50040 = (0);
var G__50041 = (0);
seq__49639_50011 = G__50038;
chunk__49641_50012 = G__50039;
count__49642_50013 = G__50040;
i__49643_50014 = G__50041;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_50010);
}
}


var G__50042 = cljs.core.next(seq__49611_50002__$1);
var G__50043 = null;
var G__50044 = (0);
var G__50045 = (0);
seq__49611_49957 = G__50042;
chunk__49613_49958 = G__50043;
count__49614_49959 = G__50044;
i__49615_49960 = G__50045;
continue;
} else {
var G__50046 = cljs.core.next(seq__49611_50002__$1);
var G__50047 = null;
var G__50048 = (0);
var G__50049 = (0);
seq__49611_49957 = G__50046;
chunk__49613_49958 = G__50047;
count__49614_49959 = G__50048;
i__49615_49960 = G__50049;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4870__auto__ = [];
var len__4864__auto___50051 = arguments.length;
var i__4865__auto___50052 = (0);
while(true){
if((i__4865__auto___50052 < len__4864__auto___50051)){
args__4870__auto__.push((arguments[i__4865__auto___50052]));

var G__50054 = (i__4865__auto___50052 + (1));
i__4865__auto___50052 = G__50054;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq49647){
var G__49648 = cljs.core.first(seq49647);
var seq49647__$1 = cljs.core.next(seq49647);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49648,seq49647__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__49661 = arguments.length;
switch (G__49661) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4251__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4251__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4251__auto__;
}
})())){
var c__45343__auto___50073 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45344__auto__ = (function (){var switch__45201__auto__ = (function (state_49666){
var state_val_49667 = (state_49666[(1)]);
if((state_val_49667 === (1))){
var state_49666__$1 = state_49666;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49666__$1,(2),once_or_cleanup);
} else {
if((state_val_49667 === (2))){
var inst_49663 = (state_49666[(2)]);
var inst_49664 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_49666__$1 = (function (){var statearr_49668 = state_49666;
(statearr_49668[(7)] = inst_49663);

return statearr_49668;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_49666__$1,inst_49664);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__45202__auto__ = null;
var shadow$dom$state_machine__45202__auto____0 = (function (){
var statearr_49669 = [null,null,null,null,null,null,null,null];
(statearr_49669[(0)] = shadow$dom$state_machine__45202__auto__);

(statearr_49669[(1)] = (1));

return statearr_49669;
});
var shadow$dom$state_machine__45202__auto____1 = (function (state_49666){
while(true){
var ret_value__45203__auto__ = (function (){try{while(true){
var result__45204__auto__ = switch__45201__auto__(state_49666);
if(cljs.core.keyword_identical_QMARK_(result__45204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45204__auto__;
}
break;
}
}catch (e49670){var ex__45205__auto__ = e49670;
var statearr_49671_50081 = state_49666;
(statearr_49671_50081[(2)] = ex__45205__auto__);


if(cljs.core.seq((state_49666[(4)]))){
var statearr_49672_50082 = state_49666;
(statearr_49672_50082[(1)] = cljs.core.first((state_49666[(4)])));

} else {
throw ex__45205__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50090 = state_49666;
state_49666 = G__50090;
continue;
} else {
return ret_value__45203__auto__;
}
break;
}
});
shadow$dom$state_machine__45202__auto__ = function(state_49666){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__45202__auto____0.call(this);
case 1:
return shadow$dom$state_machine__45202__auto____1.call(this,state_49666);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__45202__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__45202__auto____0;
shadow$dom$state_machine__45202__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__45202__auto____1;
return shadow$dom$state_machine__45202__auto__;
})()
})();
var state__45345__auto__ = (function (){var statearr_49673 = f__45344__auto__();
(statearr_49673[(6)] = c__45343__auto___50073);

return statearr_49673;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45345__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
