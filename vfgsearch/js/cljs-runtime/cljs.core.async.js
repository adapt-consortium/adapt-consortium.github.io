goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__45474 = arguments.length;
switch (G__45474) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45476 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45476 = (function (f,blockable,meta45477){
this.f = f;
this.blockable = blockable;
this.meta45477 = meta45477;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45476.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45478,meta45477__$1){
var self__ = this;
var _45478__$1 = this;
return (new cljs.core.async.t_cljs$core$async45476(self__.f,self__.blockable,meta45477__$1));
}));

(cljs.core.async.t_cljs$core$async45476.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45478){
var self__ = this;
var _45478__$1 = this;
return self__.meta45477;
}));

(cljs.core.async.t_cljs$core$async45476.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45476.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async45476.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async45476.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async45476.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta45477","meta45477",1414188239,null)], null);
}));

(cljs.core.async.t_cljs$core$async45476.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45476.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45476");

(cljs.core.async.t_cljs$core$async45476.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async45476");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45476.
 */
cljs.core.async.__GT_t_cljs$core$async45476 = (function cljs$core$async$__GT_t_cljs$core$async45476(f__$1,blockable__$1,meta45477){
return (new cljs.core.async.t_cljs$core$async45476(f__$1,blockable__$1,meta45477));
});

}

return (new cljs.core.async.t_cljs$core$async45476(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__45487 = arguments.length;
switch (G__45487) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__45493 = arguments.length;
switch (G__45493) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__45504 = arguments.length;
switch (G__45504) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_48521 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_48521) : fn1.call(null,val_48521));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_48521) : fn1.call(null,val_48521));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__45525 = arguments.length;
switch (G__45525) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4741__auto___48535 = n;
var x_48536 = (0);
while(true){
if((x_48536 < n__4741__auto___48535)){
(a[x_48536] = x_48536);

var G__48537 = (x_48536 + (1));
x_48536 = G__48537;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45550 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45550 = (function (flag,meta45551){
this.flag = flag;
this.meta45551 = meta45551;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45550.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45552,meta45551__$1){
var self__ = this;
var _45552__$1 = this;
return (new cljs.core.async.t_cljs$core$async45550(self__.flag,meta45551__$1));
}));

(cljs.core.async.t_cljs$core$async45550.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45552){
var self__ = this;
var _45552__$1 = this;
return self__.meta45551;
}));

(cljs.core.async.t_cljs$core$async45550.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45550.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async45550.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async45550.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async45550.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta45551","meta45551",-293214348,null)], null);
}));

(cljs.core.async.t_cljs$core$async45550.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45550.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45550");

(cljs.core.async.t_cljs$core$async45550.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async45550");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45550.
 */
cljs.core.async.__GT_t_cljs$core$async45550 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async45550(flag__$1,meta45551){
return (new cljs.core.async.t_cljs$core$async45550(flag__$1,meta45551));
});

}

return (new cljs.core.async.t_cljs$core$async45550(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45553 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45553 = (function (flag,cb,meta45554){
this.flag = flag;
this.cb = cb;
this.meta45554 = meta45554;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45553.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45555,meta45554__$1){
var self__ = this;
var _45555__$1 = this;
return (new cljs.core.async.t_cljs$core$async45553(self__.flag,self__.cb,meta45554__$1));
}));

(cljs.core.async.t_cljs$core$async45553.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45555){
var self__ = this;
var _45555__$1 = this;
return self__.meta45554;
}));

(cljs.core.async.t_cljs$core$async45553.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45553.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async45553.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async45553.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async45553.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta45554","meta45554",-132269368,null)], null);
}));

(cljs.core.async.t_cljs$core$async45553.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45553.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45553");

(cljs.core.async.t_cljs$core$async45553.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async45553");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45553.
 */
cljs.core.async.__GT_t_cljs$core$async45553 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async45553(flag__$1,cb__$1,meta45554){
return (new cljs.core.async.t_cljs$core$async45553(flag__$1,cb__$1,meta45554));
});

}

return (new cljs.core.async.t_cljs$core$async45553(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__45562_SHARP_){
var G__45573 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__45562_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__45573) : fret.call(null,G__45573));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__45567_SHARP_){
var G__45575 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__45567_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__45575) : fret.call(null,G__45575));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4253__auto__ = wport;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return port;
}
})()], null));
} else {
var G__48553 = (i + (1));
i = G__48553;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4253__auto__ = ret;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__4251__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4251__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___48554 = arguments.length;
var i__4865__auto___48555 = (0);
while(true){
if((i__4865__auto___48555 < len__4864__auto___48554)){
args__4870__auto__.push((arguments[i__4865__auto___48555]));

var G__48556 = (i__4865__auto___48555 + (1));
i__4865__auto___48555 = G__48556;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__45589){
var map__45590 = p__45589;
var map__45590__$1 = cljs.core.__destructure_map(map__45590);
var opts = map__45590__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq45580){
var G__45581 = cljs.core.first(seq45580);
var seq45580__$1 = cljs.core.next(seq45580);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45581,seq45580__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__45601 = arguments.length;
switch (G__45601) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__45343__auto___48578 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45344__auto__ = (function (){var switch__45201__auto__ = (function (state_45641){
var state_val_45642 = (state_45641[(1)]);
if((state_val_45642 === (7))){
var inst_45637 = (state_45641[(2)]);
var state_45641__$1 = state_45641;
var statearr_45644_48581 = state_45641__$1;
(statearr_45644_48581[(2)] = inst_45637);

(statearr_45644_48581[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45642 === (1))){
var state_45641__$1 = state_45641;
var statearr_45645_48589 = state_45641__$1;
(statearr_45645_48589[(2)] = null);

(statearr_45645_48589[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45642 === (4))){
var inst_45619 = (state_45641[(7)]);
var inst_45619__$1 = (state_45641[(2)]);
var inst_45620 = (inst_45619__$1 == null);
var state_45641__$1 = (function (){var statearr_45646 = state_45641;
(statearr_45646[(7)] = inst_45619__$1);

return statearr_45646;
})();
if(cljs.core.truth_(inst_45620)){
var statearr_45647_48590 = state_45641__$1;
(statearr_45647_48590[(1)] = (5));

} else {
var statearr_45648_48591 = state_45641__$1;
(statearr_45648_48591[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45642 === (13))){
var state_45641__$1 = state_45641;
var statearr_45649_48592 = state_45641__$1;
(statearr_45649_48592[(2)] = null);

(statearr_45649_48592[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45642 === (6))){
var inst_45619 = (state_45641[(7)]);
var state_45641__$1 = state_45641;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45641__$1,(11),to,inst_45619);
} else {
if((state_val_45642 === (3))){
var inst_45639 = (state_45641[(2)]);
var state_45641__$1 = state_45641;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45641__$1,inst_45639);
} else {
if((state_val_45642 === (12))){
var state_45641__$1 = state_45641;
var statearr_45651_48593 = state_45641__$1;
(statearr_45651_48593[(2)] = null);

(statearr_45651_48593[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45642 === (2))){
var state_45641__$1 = state_45641;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45641__$1,(4),from);
} else {
if((state_val_45642 === (11))){
var inst_45630 = (state_45641[(2)]);
var state_45641__$1 = state_45641;
if(cljs.core.truth_(inst_45630)){
var statearr_45652_48596 = state_45641__$1;
(statearr_45652_48596[(1)] = (12));

} else {
var statearr_45653_48597 = state_45641__$1;
(statearr_45653_48597[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45642 === (9))){
var state_45641__$1 = state_45641;
var statearr_45654_48598 = state_45641__$1;
(statearr_45654_48598[(2)] = null);

(statearr_45654_48598[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45642 === (5))){
var state_45641__$1 = state_45641;
if(cljs.core.truth_(close_QMARK_)){
var statearr_45655_48602 = state_45641__$1;
(statearr_45655_48602[(1)] = (8));

} else {
var statearr_45656_48603 = state_45641__$1;
(statearr_45656_48603[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45642 === (14))){
var inst_45635 = (state_45641[(2)]);
var state_45641__$1 = state_45641;
var statearr_45657_48604 = state_45641__$1;
(statearr_45657_48604[(2)] = inst_45635);

(statearr_45657_48604[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45642 === (10))){
var inst_45627 = (state_45641[(2)]);
var state_45641__$1 = state_45641;
var statearr_45658_48606 = state_45641__$1;
(statearr_45658_48606[(2)] = inst_45627);

(statearr_45658_48606[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45642 === (8))){
var inst_45624 = cljs.core.async.close_BANG_(to);
var state_45641__$1 = state_45641;
var statearr_45660_48608 = state_45641__$1;
(statearr_45660_48608[(2)] = inst_45624);

(statearr_45660_48608[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__45202__auto__ = null;
var cljs$core$async$state_machine__45202__auto____0 = (function (){
var statearr_45661 = [null,null,null,null,null,null,null,null];
(statearr_45661[(0)] = cljs$core$async$state_machine__45202__auto__);

(statearr_45661[(1)] = (1));

return statearr_45661;
});
var cljs$core$async$state_machine__45202__auto____1 = (function (state_45641){
while(true){
var ret_value__45203__auto__ = (function (){try{while(true){
var result__45204__auto__ = switch__45201__auto__(state_45641);
if(cljs.core.keyword_identical_QMARK_(result__45204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45204__auto__;
}
break;
}
}catch (e45662){var ex__45205__auto__ = e45662;
var statearr_45663_48613 = state_45641;
(statearr_45663_48613[(2)] = ex__45205__auto__);


if(cljs.core.seq((state_45641[(4)]))){
var statearr_45664_48614 = state_45641;
(statearr_45664_48614[(1)] = cljs.core.first((state_45641[(4)])));

} else {
throw ex__45205__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48619 = state_45641;
state_45641 = G__48619;
continue;
} else {
return ret_value__45203__auto__;
}
break;
}
});
cljs$core$async$state_machine__45202__auto__ = function(state_45641){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45202__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45202__auto____1.call(this,state_45641);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45202__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45202__auto____0;
cljs$core$async$state_machine__45202__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45202__auto____1;
return cljs$core$async$state_machine__45202__auto__;
})()
})();
var state__45345__auto__ = (function (){var statearr_45665 = f__45344__auto__();
(statearr_45665[(6)] = c__45343__auto___48578);

return statearr_45665;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45345__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__45666){
var vec__45667 = p__45666;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45667,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45667,(1),null);
var job = vec__45667;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__45343__auto___48620 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45344__auto__ = (function (){var switch__45201__auto__ = (function (state_45674){
var state_val_45675 = (state_45674[(1)]);
if((state_val_45675 === (1))){
var state_45674__$1 = state_45674;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45674__$1,(2),res,v);
} else {
if((state_val_45675 === (2))){
var inst_45671 = (state_45674[(2)]);
var inst_45672 = cljs.core.async.close_BANG_(res);
var state_45674__$1 = (function (){var statearr_45676 = state_45674;
(statearr_45676[(7)] = inst_45671);

return statearr_45676;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_45674__$1,inst_45672);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__45202__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__45202__auto____0 = (function (){
var statearr_45677 = [null,null,null,null,null,null,null,null];
(statearr_45677[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__45202__auto__);

(statearr_45677[(1)] = (1));

return statearr_45677;
});
var cljs$core$async$pipeline_STAR__$_state_machine__45202__auto____1 = (function (state_45674){
while(true){
var ret_value__45203__auto__ = (function (){try{while(true){
var result__45204__auto__ = switch__45201__auto__(state_45674);
if(cljs.core.keyword_identical_QMARK_(result__45204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45204__auto__;
}
break;
}
}catch (e45678){var ex__45205__auto__ = e45678;
var statearr_45679_48623 = state_45674;
(statearr_45679_48623[(2)] = ex__45205__auto__);


if(cljs.core.seq((state_45674[(4)]))){
var statearr_45680_48624 = state_45674;
(statearr_45680_48624[(1)] = cljs.core.first((state_45674[(4)])));

} else {
throw ex__45205__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48628 = state_45674;
state_45674 = G__48628;
continue;
} else {
return ret_value__45203__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__45202__auto__ = function(state_45674){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__45202__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__45202__auto____1.call(this,state_45674);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__45202__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__45202__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__45202__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__45202__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__45202__auto__;
})()
})();
var state__45345__auto__ = (function (){var statearr_45682 = f__45344__auto__();
(statearr_45682[(6)] = c__45343__auto___48620);

return statearr_45682;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45345__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__45684){
var vec__45685 = p__45684;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45685,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45685,(1),null);
var job = vec__45685;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4741__auto___48630 = n;
var __48631 = (0);
while(true){
if((__48631 < n__4741__auto___48630)){
var G__45690_48632 = type;
var G__45690_48633__$1 = (((G__45690_48632 instanceof cljs.core.Keyword))?G__45690_48632.fqn:null);
switch (G__45690_48633__$1) {
case "compute":
var c__45343__auto___48635 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__48631,c__45343__auto___48635,G__45690_48632,G__45690_48633__$1,n__4741__auto___48630,jobs,results,process,async){
return (function (){
var f__45344__auto__ = (function (){var switch__45201__auto__ = ((function (__48631,c__45343__auto___48635,G__45690_48632,G__45690_48633__$1,n__4741__auto___48630,jobs,results,process,async){
return (function (state_45704){
var state_val_45705 = (state_45704[(1)]);
if((state_val_45705 === (1))){
var state_45704__$1 = state_45704;
var statearr_45709_48636 = state_45704__$1;
(statearr_45709_48636[(2)] = null);

(statearr_45709_48636[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45705 === (2))){
var state_45704__$1 = state_45704;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45704__$1,(4),jobs);
} else {
if((state_val_45705 === (3))){
var inst_45702 = (state_45704[(2)]);
var state_45704__$1 = state_45704;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45704__$1,inst_45702);
} else {
if((state_val_45705 === (4))){
var inst_45694 = (state_45704[(2)]);
var inst_45695 = process(inst_45694);
var state_45704__$1 = state_45704;
if(cljs.core.truth_(inst_45695)){
var statearr_45715_48637 = state_45704__$1;
(statearr_45715_48637[(1)] = (5));

} else {
var statearr_45716_48638 = state_45704__$1;
(statearr_45716_48638[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45705 === (5))){
var state_45704__$1 = state_45704;
var statearr_45718_48639 = state_45704__$1;
(statearr_45718_48639[(2)] = null);

(statearr_45718_48639[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45705 === (6))){
var state_45704__$1 = state_45704;
var statearr_45719_48640 = state_45704__$1;
(statearr_45719_48640[(2)] = null);

(statearr_45719_48640[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45705 === (7))){
var inst_45700 = (state_45704[(2)]);
var state_45704__$1 = state_45704;
var statearr_45720_48641 = state_45704__$1;
(statearr_45720_48641[(2)] = inst_45700);

(statearr_45720_48641[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__48631,c__45343__auto___48635,G__45690_48632,G__45690_48633__$1,n__4741__auto___48630,jobs,results,process,async))
;
return ((function (__48631,switch__45201__auto__,c__45343__auto___48635,G__45690_48632,G__45690_48633__$1,n__4741__auto___48630,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__45202__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__45202__auto____0 = (function (){
var statearr_45722 = [null,null,null,null,null,null,null];
(statearr_45722[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__45202__auto__);

(statearr_45722[(1)] = (1));

return statearr_45722;
});
var cljs$core$async$pipeline_STAR__$_state_machine__45202__auto____1 = (function (state_45704){
while(true){
var ret_value__45203__auto__ = (function (){try{while(true){
var result__45204__auto__ = switch__45201__auto__(state_45704);
if(cljs.core.keyword_identical_QMARK_(result__45204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45204__auto__;
}
break;
}
}catch (e45723){var ex__45205__auto__ = e45723;
var statearr_45724_48643 = state_45704;
(statearr_45724_48643[(2)] = ex__45205__auto__);


if(cljs.core.seq((state_45704[(4)]))){
var statearr_45725_48644 = state_45704;
(statearr_45725_48644[(1)] = cljs.core.first((state_45704[(4)])));

} else {
throw ex__45205__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48646 = state_45704;
state_45704 = G__48646;
continue;
} else {
return ret_value__45203__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__45202__auto__ = function(state_45704){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__45202__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__45202__auto____1.call(this,state_45704);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__45202__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__45202__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__45202__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__45202__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__45202__auto__;
})()
;})(__48631,switch__45201__auto__,c__45343__auto___48635,G__45690_48632,G__45690_48633__$1,n__4741__auto___48630,jobs,results,process,async))
})();
var state__45345__auto__ = (function (){var statearr_45726 = f__45344__auto__();
(statearr_45726[(6)] = c__45343__auto___48635);

return statearr_45726;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45345__auto__);
});})(__48631,c__45343__auto___48635,G__45690_48632,G__45690_48633__$1,n__4741__auto___48630,jobs,results,process,async))
);


break;
case "async":
var c__45343__auto___48648 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__48631,c__45343__auto___48648,G__45690_48632,G__45690_48633__$1,n__4741__auto___48630,jobs,results,process,async){
return (function (){
var f__45344__auto__ = (function (){var switch__45201__auto__ = ((function (__48631,c__45343__auto___48648,G__45690_48632,G__45690_48633__$1,n__4741__auto___48630,jobs,results,process,async){
return (function (state_45739){
var state_val_45740 = (state_45739[(1)]);
if((state_val_45740 === (1))){
var state_45739__$1 = state_45739;
var statearr_45741_48649 = state_45739__$1;
(statearr_45741_48649[(2)] = null);

(statearr_45741_48649[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45740 === (2))){
var state_45739__$1 = state_45739;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45739__$1,(4),jobs);
} else {
if((state_val_45740 === (3))){
var inst_45737 = (state_45739[(2)]);
var state_45739__$1 = state_45739;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45739__$1,inst_45737);
} else {
if((state_val_45740 === (4))){
var inst_45729 = (state_45739[(2)]);
var inst_45730 = async(inst_45729);
var state_45739__$1 = state_45739;
if(cljs.core.truth_(inst_45730)){
var statearr_45742_48650 = state_45739__$1;
(statearr_45742_48650[(1)] = (5));

} else {
var statearr_45743_48651 = state_45739__$1;
(statearr_45743_48651[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45740 === (5))){
var state_45739__$1 = state_45739;
var statearr_45744_48652 = state_45739__$1;
(statearr_45744_48652[(2)] = null);

(statearr_45744_48652[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45740 === (6))){
var state_45739__$1 = state_45739;
var statearr_45745_48653 = state_45739__$1;
(statearr_45745_48653[(2)] = null);

(statearr_45745_48653[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45740 === (7))){
var inst_45735 = (state_45739[(2)]);
var state_45739__$1 = state_45739;
var statearr_45746_48654 = state_45739__$1;
(statearr_45746_48654[(2)] = inst_45735);

(statearr_45746_48654[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__48631,c__45343__auto___48648,G__45690_48632,G__45690_48633__$1,n__4741__auto___48630,jobs,results,process,async))
;
return ((function (__48631,switch__45201__auto__,c__45343__auto___48648,G__45690_48632,G__45690_48633__$1,n__4741__auto___48630,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__45202__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__45202__auto____0 = (function (){
var statearr_45748 = [null,null,null,null,null,null,null];
(statearr_45748[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__45202__auto__);

(statearr_45748[(1)] = (1));

return statearr_45748;
});
var cljs$core$async$pipeline_STAR__$_state_machine__45202__auto____1 = (function (state_45739){
while(true){
var ret_value__45203__auto__ = (function (){try{while(true){
var result__45204__auto__ = switch__45201__auto__(state_45739);
if(cljs.core.keyword_identical_QMARK_(result__45204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45204__auto__;
}
break;
}
}catch (e45752){var ex__45205__auto__ = e45752;
var statearr_45754_48655 = state_45739;
(statearr_45754_48655[(2)] = ex__45205__auto__);


if(cljs.core.seq((state_45739[(4)]))){
var statearr_45757_48657 = state_45739;
(statearr_45757_48657[(1)] = cljs.core.first((state_45739[(4)])));

} else {
throw ex__45205__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48659 = state_45739;
state_45739 = G__48659;
continue;
} else {
return ret_value__45203__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__45202__auto__ = function(state_45739){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__45202__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__45202__auto____1.call(this,state_45739);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__45202__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__45202__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__45202__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__45202__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__45202__auto__;
})()
;})(__48631,switch__45201__auto__,c__45343__auto___48648,G__45690_48632,G__45690_48633__$1,n__4741__auto___48630,jobs,results,process,async))
})();
var state__45345__auto__ = (function (){var statearr_45762 = f__45344__auto__();
(statearr_45762[(6)] = c__45343__auto___48648);

return statearr_45762;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45345__auto__);
});})(__48631,c__45343__auto___48648,G__45690_48632,G__45690_48633__$1,n__4741__auto___48630,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45690_48633__$1)].join('')));

}

var G__48660 = (__48631 + (1));
__48631 = G__48660;
continue;
} else {
}
break;
}

var c__45343__auto___48661 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45344__auto__ = (function (){var switch__45201__auto__ = (function (state_45927){
var state_val_45929 = (state_45927[(1)]);
if((state_val_45929 === (7))){
var inst_45921 = (state_45927[(2)]);
var state_45927__$1 = state_45927;
var statearr_45950_48662 = state_45927__$1;
(statearr_45950_48662[(2)] = inst_45921);

(statearr_45950_48662[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45929 === (1))){
var state_45927__$1 = state_45927;
var statearr_45953_48663 = state_45927__$1;
(statearr_45953_48663[(2)] = null);

(statearr_45953_48663[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45929 === (4))){
var inst_45768 = (state_45927[(7)]);
var inst_45768__$1 = (state_45927[(2)]);
var inst_45769 = (inst_45768__$1 == null);
var state_45927__$1 = (function (){var statearr_45954 = state_45927;
(statearr_45954[(7)] = inst_45768__$1);

return statearr_45954;
})();
if(cljs.core.truth_(inst_45769)){
var statearr_45955_48665 = state_45927__$1;
(statearr_45955_48665[(1)] = (5));

} else {
var statearr_45956_48666 = state_45927__$1;
(statearr_45956_48666[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45929 === (6))){
var inst_45773 = (state_45927[(8)]);
var inst_45768 = (state_45927[(7)]);
var inst_45773__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_45910 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_45913 = [inst_45768,inst_45773__$1];
var inst_45914 = (new cljs.core.PersistentVector(null,2,(5),inst_45910,inst_45913,null));
var state_45927__$1 = (function (){var statearr_45957 = state_45927;
(statearr_45957[(8)] = inst_45773__$1);

return statearr_45957;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45927__$1,(8),jobs,inst_45914);
} else {
if((state_val_45929 === (3))){
var inst_45924 = (state_45927[(2)]);
var state_45927__$1 = state_45927;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45927__$1,inst_45924);
} else {
if((state_val_45929 === (2))){
var state_45927__$1 = state_45927;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45927__$1,(4),from);
} else {
if((state_val_45929 === (9))){
var inst_45918 = (state_45927[(2)]);
var state_45927__$1 = (function (){var statearr_45964 = state_45927;
(statearr_45964[(9)] = inst_45918);

return statearr_45964;
})();
var statearr_45965_48667 = state_45927__$1;
(statearr_45965_48667[(2)] = null);

(statearr_45965_48667[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45929 === (5))){
var inst_45771 = cljs.core.async.close_BANG_(jobs);
var state_45927__$1 = state_45927;
var statearr_45967_48669 = state_45927__$1;
(statearr_45967_48669[(2)] = inst_45771);

(statearr_45967_48669[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45929 === (8))){
var inst_45773 = (state_45927[(8)]);
var inst_45916 = (state_45927[(2)]);
var state_45927__$1 = (function (){var statearr_45971 = state_45927;
(statearr_45971[(10)] = inst_45916);

return statearr_45971;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45927__$1,(9),results,inst_45773);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__45202__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__45202__auto____0 = (function (){
var statearr_45974 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_45974[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__45202__auto__);

(statearr_45974[(1)] = (1));

return statearr_45974;
});
var cljs$core$async$pipeline_STAR__$_state_machine__45202__auto____1 = (function (state_45927){
while(true){
var ret_value__45203__auto__ = (function (){try{while(true){
var result__45204__auto__ = switch__45201__auto__(state_45927);
if(cljs.core.keyword_identical_QMARK_(result__45204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45204__auto__;
}
break;
}
}catch (e45975){var ex__45205__auto__ = e45975;
var statearr_45976_48670 = state_45927;
(statearr_45976_48670[(2)] = ex__45205__auto__);


if(cljs.core.seq((state_45927[(4)]))){
var statearr_45978_48671 = state_45927;
(statearr_45978_48671[(1)] = cljs.core.first((state_45927[(4)])));

} else {
throw ex__45205__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48672 = state_45927;
state_45927 = G__48672;
continue;
} else {
return ret_value__45203__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__45202__auto__ = function(state_45927){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__45202__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__45202__auto____1.call(this,state_45927);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__45202__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__45202__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__45202__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__45202__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__45202__auto__;
})()
})();
var state__45345__auto__ = (function (){var statearr_45980 = f__45344__auto__();
(statearr_45980[(6)] = c__45343__auto___48661);

return statearr_45980;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45345__auto__);
}));


var c__45343__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45344__auto__ = (function (){var switch__45201__auto__ = (function (state_46026){
var state_val_46027 = (state_46026[(1)]);
if((state_val_46027 === (7))){
var inst_46022 = (state_46026[(2)]);
var state_46026__$1 = state_46026;
var statearr_46028_48673 = state_46026__$1;
(statearr_46028_48673[(2)] = inst_46022);

(statearr_46028_48673[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46027 === (20))){
var state_46026__$1 = state_46026;
var statearr_46029_48674 = state_46026__$1;
(statearr_46029_48674[(2)] = null);

(statearr_46029_48674[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46027 === (1))){
var state_46026__$1 = state_46026;
var statearr_46033_48675 = state_46026__$1;
(statearr_46033_48675[(2)] = null);

(statearr_46033_48675[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46027 === (4))){
var inst_45987 = (state_46026[(7)]);
var inst_45987__$1 = (state_46026[(2)]);
var inst_45988 = (inst_45987__$1 == null);
var state_46026__$1 = (function (){var statearr_46039 = state_46026;
(statearr_46039[(7)] = inst_45987__$1);

return statearr_46039;
})();
if(cljs.core.truth_(inst_45988)){
var statearr_46040_48680 = state_46026__$1;
(statearr_46040_48680[(1)] = (5));

} else {
var statearr_46041_48681 = state_46026__$1;
(statearr_46041_48681[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46027 === (15))){
var inst_46000 = (state_46026[(8)]);
var state_46026__$1 = state_46026;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46026__$1,(18),to,inst_46000);
} else {
if((state_val_46027 === (21))){
var inst_46017 = (state_46026[(2)]);
var state_46026__$1 = state_46026;
var statearr_46042_48683 = state_46026__$1;
(statearr_46042_48683[(2)] = inst_46017);

(statearr_46042_48683[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46027 === (13))){
var inst_46019 = (state_46026[(2)]);
var state_46026__$1 = (function (){var statearr_46043 = state_46026;
(statearr_46043[(9)] = inst_46019);

return statearr_46043;
})();
var statearr_46044_48684 = state_46026__$1;
(statearr_46044_48684[(2)] = null);

(statearr_46044_48684[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46027 === (6))){
var inst_45987 = (state_46026[(7)]);
var state_46026__$1 = state_46026;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46026__$1,(11),inst_45987);
} else {
if((state_val_46027 === (17))){
var inst_46012 = (state_46026[(2)]);
var state_46026__$1 = state_46026;
if(cljs.core.truth_(inst_46012)){
var statearr_46045_48685 = state_46026__$1;
(statearr_46045_48685[(1)] = (19));

} else {
var statearr_46046_48686 = state_46026__$1;
(statearr_46046_48686[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46027 === (3))){
var inst_46024 = (state_46026[(2)]);
var state_46026__$1 = state_46026;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46026__$1,inst_46024);
} else {
if((state_val_46027 === (12))){
var inst_45997 = (state_46026[(10)]);
var state_46026__$1 = state_46026;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46026__$1,(14),inst_45997);
} else {
if((state_val_46027 === (2))){
var state_46026__$1 = state_46026;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46026__$1,(4),results);
} else {
if((state_val_46027 === (19))){
var state_46026__$1 = state_46026;
var statearr_46051_48687 = state_46026__$1;
(statearr_46051_48687[(2)] = null);

(statearr_46051_48687[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46027 === (11))){
var inst_45997 = (state_46026[(2)]);
var state_46026__$1 = (function (){var statearr_46052 = state_46026;
(statearr_46052[(10)] = inst_45997);

return statearr_46052;
})();
var statearr_46053_48688 = state_46026__$1;
(statearr_46053_48688[(2)] = null);

(statearr_46053_48688[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46027 === (9))){
var state_46026__$1 = state_46026;
var statearr_46054_48689 = state_46026__$1;
(statearr_46054_48689[(2)] = null);

(statearr_46054_48689[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46027 === (5))){
var state_46026__$1 = state_46026;
if(cljs.core.truth_(close_QMARK_)){
var statearr_46055_48690 = state_46026__$1;
(statearr_46055_48690[(1)] = (8));

} else {
var statearr_46056_48691 = state_46026__$1;
(statearr_46056_48691[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46027 === (14))){
var inst_46000 = (state_46026[(8)]);
var inst_46004 = (state_46026[(11)]);
var inst_46000__$1 = (state_46026[(2)]);
var inst_46003 = (inst_46000__$1 == null);
var inst_46004__$1 = cljs.core.not(inst_46003);
var state_46026__$1 = (function (){var statearr_46057 = state_46026;
(statearr_46057[(8)] = inst_46000__$1);

(statearr_46057[(11)] = inst_46004__$1);

return statearr_46057;
})();
if(inst_46004__$1){
var statearr_46058_48693 = state_46026__$1;
(statearr_46058_48693[(1)] = (15));

} else {
var statearr_46059_48694 = state_46026__$1;
(statearr_46059_48694[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46027 === (16))){
var inst_46004 = (state_46026[(11)]);
var state_46026__$1 = state_46026;
var statearr_46061_48696 = state_46026__$1;
(statearr_46061_48696[(2)] = inst_46004);

(statearr_46061_48696[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46027 === (10))){
var inst_45994 = (state_46026[(2)]);
var state_46026__$1 = state_46026;
var statearr_46063_48697 = state_46026__$1;
(statearr_46063_48697[(2)] = inst_45994);

(statearr_46063_48697[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46027 === (18))){
var inst_46007 = (state_46026[(2)]);
var state_46026__$1 = state_46026;
var statearr_46067_48698 = state_46026__$1;
(statearr_46067_48698[(2)] = inst_46007);

(statearr_46067_48698[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46027 === (8))){
var inst_45991 = cljs.core.async.close_BANG_(to);
var state_46026__$1 = state_46026;
var statearr_46068_48699 = state_46026__$1;
(statearr_46068_48699[(2)] = inst_45991);

(statearr_46068_48699[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__45202__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__45202__auto____0 = (function (){
var statearr_46070 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46070[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__45202__auto__);

(statearr_46070[(1)] = (1));

return statearr_46070;
});
var cljs$core$async$pipeline_STAR__$_state_machine__45202__auto____1 = (function (state_46026){
while(true){
var ret_value__45203__auto__ = (function (){try{while(true){
var result__45204__auto__ = switch__45201__auto__(state_46026);
if(cljs.core.keyword_identical_QMARK_(result__45204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45204__auto__;
}
break;
}
}catch (e46071){var ex__45205__auto__ = e46071;
var statearr_46072_48700 = state_46026;
(statearr_46072_48700[(2)] = ex__45205__auto__);


if(cljs.core.seq((state_46026[(4)]))){
var statearr_46073_48701 = state_46026;
(statearr_46073_48701[(1)] = cljs.core.first((state_46026[(4)])));

} else {
throw ex__45205__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48702 = state_46026;
state_46026 = G__48702;
continue;
} else {
return ret_value__45203__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__45202__auto__ = function(state_46026){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__45202__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__45202__auto____1.call(this,state_46026);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__45202__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__45202__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__45202__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__45202__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__45202__auto__;
})()
})();
var state__45345__auto__ = (function (){var statearr_46077 = f__45344__auto__();
(statearr_46077[(6)] = c__45343__auto__);

return statearr_46077;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45345__auto__);
}));

return c__45343__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__46086 = arguments.length;
switch (G__46086) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__46092 = arguments.length;
switch (G__46092) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__46099 = arguments.length;
switch (G__46099) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__45343__auto___48710 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45344__auto__ = (function (){var switch__45201__auto__ = (function (state_46125){
var state_val_46126 = (state_46125[(1)]);
if((state_val_46126 === (7))){
var inst_46121 = (state_46125[(2)]);
var state_46125__$1 = state_46125;
var statearr_46128_48711 = state_46125__$1;
(statearr_46128_48711[(2)] = inst_46121);

(statearr_46128_48711[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46126 === (1))){
var state_46125__$1 = state_46125;
var statearr_46129_48713 = state_46125__$1;
(statearr_46129_48713[(2)] = null);

(statearr_46129_48713[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46126 === (4))){
var inst_46102 = (state_46125[(7)]);
var inst_46102__$1 = (state_46125[(2)]);
var inst_46103 = (inst_46102__$1 == null);
var state_46125__$1 = (function (){var statearr_46130 = state_46125;
(statearr_46130[(7)] = inst_46102__$1);

return statearr_46130;
})();
if(cljs.core.truth_(inst_46103)){
var statearr_46131_48714 = state_46125__$1;
(statearr_46131_48714[(1)] = (5));

} else {
var statearr_46132_48715 = state_46125__$1;
(statearr_46132_48715[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46126 === (13))){
var state_46125__$1 = state_46125;
var statearr_46133_48716 = state_46125__$1;
(statearr_46133_48716[(2)] = null);

(statearr_46133_48716[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46126 === (6))){
var inst_46102 = (state_46125[(7)]);
var inst_46108 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_46102) : p.call(null,inst_46102));
var state_46125__$1 = state_46125;
if(cljs.core.truth_(inst_46108)){
var statearr_46139_48717 = state_46125__$1;
(statearr_46139_48717[(1)] = (9));

} else {
var statearr_46140_48718 = state_46125__$1;
(statearr_46140_48718[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46126 === (3))){
var inst_46123 = (state_46125[(2)]);
var state_46125__$1 = state_46125;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46125__$1,inst_46123);
} else {
if((state_val_46126 === (12))){
var state_46125__$1 = state_46125;
var statearr_46170_48719 = state_46125__$1;
(statearr_46170_48719[(2)] = null);

(statearr_46170_48719[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46126 === (2))){
var state_46125__$1 = state_46125;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46125__$1,(4),ch);
} else {
if((state_val_46126 === (11))){
var inst_46102 = (state_46125[(7)]);
var inst_46112 = (state_46125[(2)]);
var state_46125__$1 = state_46125;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46125__$1,(8),inst_46112,inst_46102);
} else {
if((state_val_46126 === (9))){
var state_46125__$1 = state_46125;
var statearr_46177_48720 = state_46125__$1;
(statearr_46177_48720[(2)] = tc);

(statearr_46177_48720[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46126 === (5))){
var inst_46105 = cljs.core.async.close_BANG_(tc);
var inst_46106 = cljs.core.async.close_BANG_(fc);
var state_46125__$1 = (function (){var statearr_46184 = state_46125;
(statearr_46184[(8)] = inst_46105);

return statearr_46184;
})();
var statearr_46189_48721 = state_46125__$1;
(statearr_46189_48721[(2)] = inst_46106);

(statearr_46189_48721[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46126 === (14))){
var inst_46119 = (state_46125[(2)]);
var state_46125__$1 = state_46125;
var statearr_46193_48729 = state_46125__$1;
(statearr_46193_48729[(2)] = inst_46119);

(statearr_46193_48729[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46126 === (10))){
var state_46125__$1 = state_46125;
var statearr_46199_48736 = state_46125__$1;
(statearr_46199_48736[(2)] = fc);

(statearr_46199_48736[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46126 === (8))){
var inst_46114 = (state_46125[(2)]);
var state_46125__$1 = state_46125;
if(cljs.core.truth_(inst_46114)){
var statearr_46205_48737 = state_46125__$1;
(statearr_46205_48737[(1)] = (12));

} else {
var statearr_46206_48738 = state_46125__$1;
(statearr_46206_48738[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__45202__auto__ = null;
var cljs$core$async$state_machine__45202__auto____0 = (function (){
var statearr_46207 = [null,null,null,null,null,null,null,null,null];
(statearr_46207[(0)] = cljs$core$async$state_machine__45202__auto__);

(statearr_46207[(1)] = (1));

return statearr_46207;
});
var cljs$core$async$state_machine__45202__auto____1 = (function (state_46125){
while(true){
var ret_value__45203__auto__ = (function (){try{while(true){
var result__45204__auto__ = switch__45201__auto__(state_46125);
if(cljs.core.keyword_identical_QMARK_(result__45204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45204__auto__;
}
break;
}
}catch (e46208){var ex__45205__auto__ = e46208;
var statearr_46209_48745 = state_46125;
(statearr_46209_48745[(2)] = ex__45205__auto__);


if(cljs.core.seq((state_46125[(4)]))){
var statearr_46210_48746 = state_46125;
(statearr_46210_48746[(1)] = cljs.core.first((state_46125[(4)])));

} else {
throw ex__45205__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48747 = state_46125;
state_46125 = G__48747;
continue;
} else {
return ret_value__45203__auto__;
}
break;
}
});
cljs$core$async$state_machine__45202__auto__ = function(state_46125){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45202__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45202__auto____1.call(this,state_46125);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45202__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45202__auto____0;
cljs$core$async$state_machine__45202__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45202__auto____1;
return cljs$core$async$state_machine__45202__auto__;
})()
})();
var state__45345__auto__ = (function (){var statearr_46211 = f__45344__auto__();
(statearr_46211[(6)] = c__45343__auto___48710);

return statearr_46211;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45345__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__45343__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45344__auto__ = (function (){var switch__45201__auto__ = (function (state_46237){
var state_val_46238 = (state_46237[(1)]);
if((state_val_46238 === (7))){
var inst_46233 = (state_46237[(2)]);
var state_46237__$1 = state_46237;
var statearr_46239_48748 = state_46237__$1;
(statearr_46239_48748[(2)] = inst_46233);

(statearr_46239_48748[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46238 === (1))){
var inst_46214 = init;
var inst_46215 = inst_46214;
var state_46237__$1 = (function (){var statearr_46240 = state_46237;
(statearr_46240[(7)] = inst_46215);

return statearr_46240;
})();
var statearr_46241_48753 = state_46237__$1;
(statearr_46241_48753[(2)] = null);

(statearr_46241_48753[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46238 === (4))){
var inst_46218 = (state_46237[(8)]);
var inst_46218__$1 = (state_46237[(2)]);
var inst_46219 = (inst_46218__$1 == null);
var state_46237__$1 = (function (){var statearr_46242 = state_46237;
(statearr_46242[(8)] = inst_46218__$1);

return statearr_46242;
})();
if(cljs.core.truth_(inst_46219)){
var statearr_46243_48757 = state_46237__$1;
(statearr_46243_48757[(1)] = (5));

} else {
var statearr_46244_48758 = state_46237__$1;
(statearr_46244_48758[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46238 === (6))){
var inst_46222 = (state_46237[(9)]);
var inst_46218 = (state_46237[(8)]);
var inst_46215 = (state_46237[(7)]);
var inst_46222__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_46215,inst_46218) : f.call(null,inst_46215,inst_46218));
var inst_46223 = cljs.core.reduced_QMARK_(inst_46222__$1);
var state_46237__$1 = (function (){var statearr_46250 = state_46237;
(statearr_46250[(9)] = inst_46222__$1);

return statearr_46250;
})();
if(inst_46223){
var statearr_46255_48762 = state_46237__$1;
(statearr_46255_48762[(1)] = (8));

} else {
var statearr_46258_48763 = state_46237__$1;
(statearr_46258_48763[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46238 === (3))){
var inst_46235 = (state_46237[(2)]);
var state_46237__$1 = state_46237;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46237__$1,inst_46235);
} else {
if((state_val_46238 === (2))){
var state_46237__$1 = state_46237;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46237__$1,(4),ch);
} else {
if((state_val_46238 === (9))){
var inst_46222 = (state_46237[(9)]);
var inst_46215 = inst_46222;
var state_46237__$1 = (function (){var statearr_46270 = state_46237;
(statearr_46270[(7)] = inst_46215);

return statearr_46270;
})();
var statearr_46271_48764 = state_46237__$1;
(statearr_46271_48764[(2)] = null);

(statearr_46271_48764[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46238 === (5))){
var inst_46215 = (state_46237[(7)]);
var state_46237__$1 = state_46237;
var statearr_46274_48768 = state_46237__$1;
(statearr_46274_48768[(2)] = inst_46215);

(statearr_46274_48768[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46238 === (10))){
var inst_46231 = (state_46237[(2)]);
var state_46237__$1 = state_46237;
var statearr_46275_48769 = state_46237__$1;
(statearr_46275_48769[(2)] = inst_46231);

(statearr_46275_48769[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46238 === (8))){
var inst_46222 = (state_46237[(9)]);
var inst_46227 = cljs.core.deref(inst_46222);
var state_46237__$1 = state_46237;
var statearr_46276_48770 = state_46237__$1;
(statearr_46276_48770[(2)] = inst_46227);

(statearr_46276_48770[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__45202__auto__ = null;
var cljs$core$async$reduce_$_state_machine__45202__auto____0 = (function (){
var statearr_46287 = [null,null,null,null,null,null,null,null,null,null];
(statearr_46287[(0)] = cljs$core$async$reduce_$_state_machine__45202__auto__);

(statearr_46287[(1)] = (1));

return statearr_46287;
});
var cljs$core$async$reduce_$_state_machine__45202__auto____1 = (function (state_46237){
while(true){
var ret_value__45203__auto__ = (function (){try{while(true){
var result__45204__auto__ = switch__45201__auto__(state_46237);
if(cljs.core.keyword_identical_QMARK_(result__45204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45204__auto__;
}
break;
}
}catch (e46294){var ex__45205__auto__ = e46294;
var statearr_46296_48771 = state_46237;
(statearr_46296_48771[(2)] = ex__45205__auto__);


if(cljs.core.seq((state_46237[(4)]))){
var statearr_46301_48772 = state_46237;
(statearr_46301_48772[(1)] = cljs.core.first((state_46237[(4)])));

} else {
throw ex__45205__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48773 = state_46237;
state_46237 = G__48773;
continue;
} else {
return ret_value__45203__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__45202__auto__ = function(state_46237){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__45202__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__45202__auto____1.call(this,state_46237);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__45202__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__45202__auto____0;
cljs$core$async$reduce_$_state_machine__45202__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__45202__auto____1;
return cljs$core$async$reduce_$_state_machine__45202__auto__;
})()
})();
var state__45345__auto__ = (function (){var statearr_46302 = f__45344__auto__();
(statearr_46302[(6)] = c__45343__auto__);

return statearr_46302;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45345__auto__);
}));

return c__45343__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__45343__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45344__auto__ = (function (){var switch__45201__auto__ = (function (state_46320){
var state_val_46321 = (state_46320[(1)]);
if((state_val_46321 === (1))){
var inst_46315 = cljs.core.async.reduce(f__$1,init,ch);
var state_46320__$1 = state_46320;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46320__$1,(2),inst_46315);
} else {
if((state_val_46321 === (2))){
var inst_46317 = (state_46320[(2)]);
var inst_46318 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_46317) : f__$1.call(null,inst_46317));
var state_46320__$1 = state_46320;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46320__$1,inst_46318);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__45202__auto__ = null;
var cljs$core$async$transduce_$_state_machine__45202__auto____0 = (function (){
var statearr_46328 = [null,null,null,null,null,null,null];
(statearr_46328[(0)] = cljs$core$async$transduce_$_state_machine__45202__auto__);

(statearr_46328[(1)] = (1));

return statearr_46328;
});
var cljs$core$async$transduce_$_state_machine__45202__auto____1 = (function (state_46320){
while(true){
var ret_value__45203__auto__ = (function (){try{while(true){
var result__45204__auto__ = switch__45201__auto__(state_46320);
if(cljs.core.keyword_identical_QMARK_(result__45204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45204__auto__;
}
break;
}
}catch (e46330){var ex__45205__auto__ = e46330;
var statearr_46331_48778 = state_46320;
(statearr_46331_48778[(2)] = ex__45205__auto__);


if(cljs.core.seq((state_46320[(4)]))){
var statearr_46336_48779 = state_46320;
(statearr_46336_48779[(1)] = cljs.core.first((state_46320[(4)])));

} else {
throw ex__45205__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48780 = state_46320;
state_46320 = G__48780;
continue;
} else {
return ret_value__45203__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__45202__auto__ = function(state_46320){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__45202__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__45202__auto____1.call(this,state_46320);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__45202__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__45202__auto____0;
cljs$core$async$transduce_$_state_machine__45202__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__45202__auto____1;
return cljs$core$async$transduce_$_state_machine__45202__auto__;
})()
})();
var state__45345__auto__ = (function (){var statearr_46337 = f__45344__auto__();
(statearr_46337[(6)] = c__45343__auto__);

return statearr_46337;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45345__auto__);
}));

return c__45343__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__46340 = arguments.length;
switch (G__46340) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__45343__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45344__auto__ = (function (){var switch__45201__auto__ = (function (state_46370){
var state_val_46371 = (state_46370[(1)]);
if((state_val_46371 === (7))){
var inst_46349 = (state_46370[(2)]);
var state_46370__$1 = state_46370;
var statearr_46372_48782 = state_46370__$1;
(statearr_46372_48782[(2)] = inst_46349);

(statearr_46372_48782[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46371 === (1))){
var inst_46343 = cljs.core.seq(coll);
var inst_46344 = inst_46343;
var state_46370__$1 = (function (){var statearr_46373 = state_46370;
(statearr_46373[(7)] = inst_46344);

return statearr_46373;
})();
var statearr_46374_48783 = state_46370__$1;
(statearr_46374_48783[(2)] = null);

(statearr_46374_48783[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46371 === (4))){
var inst_46344 = (state_46370[(7)]);
var inst_46347 = cljs.core.first(inst_46344);
var state_46370__$1 = state_46370;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46370__$1,(7),ch,inst_46347);
} else {
if((state_val_46371 === (13))){
var inst_46364 = (state_46370[(2)]);
var state_46370__$1 = state_46370;
var statearr_46377_48784 = state_46370__$1;
(statearr_46377_48784[(2)] = inst_46364);

(statearr_46377_48784[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46371 === (6))){
var inst_46352 = (state_46370[(2)]);
var state_46370__$1 = state_46370;
if(cljs.core.truth_(inst_46352)){
var statearr_46382_48785 = state_46370__$1;
(statearr_46382_48785[(1)] = (8));

} else {
var statearr_46383_48786 = state_46370__$1;
(statearr_46383_48786[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46371 === (3))){
var inst_46368 = (state_46370[(2)]);
var state_46370__$1 = state_46370;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46370__$1,inst_46368);
} else {
if((state_val_46371 === (12))){
var state_46370__$1 = state_46370;
var statearr_46391_48791 = state_46370__$1;
(statearr_46391_48791[(2)] = null);

(statearr_46391_48791[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46371 === (2))){
var inst_46344 = (state_46370[(7)]);
var state_46370__$1 = state_46370;
if(cljs.core.truth_(inst_46344)){
var statearr_46396_48792 = state_46370__$1;
(statearr_46396_48792[(1)] = (4));

} else {
var statearr_46397_48793 = state_46370__$1;
(statearr_46397_48793[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46371 === (11))){
var inst_46361 = cljs.core.async.close_BANG_(ch);
var state_46370__$1 = state_46370;
var statearr_46398_48795 = state_46370__$1;
(statearr_46398_48795[(2)] = inst_46361);

(statearr_46398_48795[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46371 === (9))){
var state_46370__$1 = state_46370;
if(cljs.core.truth_(close_QMARK_)){
var statearr_46399_48799 = state_46370__$1;
(statearr_46399_48799[(1)] = (11));

} else {
var statearr_46400_48800 = state_46370__$1;
(statearr_46400_48800[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46371 === (5))){
var inst_46344 = (state_46370[(7)]);
var state_46370__$1 = state_46370;
var statearr_46403_48804 = state_46370__$1;
(statearr_46403_48804[(2)] = inst_46344);

(statearr_46403_48804[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46371 === (10))){
var inst_46366 = (state_46370[(2)]);
var state_46370__$1 = state_46370;
var statearr_46404_48805 = state_46370__$1;
(statearr_46404_48805[(2)] = inst_46366);

(statearr_46404_48805[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46371 === (8))){
var inst_46344 = (state_46370[(7)]);
var inst_46354 = cljs.core.next(inst_46344);
var inst_46344__$1 = inst_46354;
var state_46370__$1 = (function (){var statearr_46405 = state_46370;
(statearr_46405[(7)] = inst_46344__$1);

return statearr_46405;
})();
var statearr_46406_48808 = state_46370__$1;
(statearr_46406_48808[(2)] = null);

(statearr_46406_48808[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__45202__auto__ = null;
var cljs$core$async$state_machine__45202__auto____0 = (function (){
var statearr_46410 = [null,null,null,null,null,null,null,null];
(statearr_46410[(0)] = cljs$core$async$state_machine__45202__auto__);

(statearr_46410[(1)] = (1));

return statearr_46410;
});
var cljs$core$async$state_machine__45202__auto____1 = (function (state_46370){
while(true){
var ret_value__45203__auto__ = (function (){try{while(true){
var result__45204__auto__ = switch__45201__auto__(state_46370);
if(cljs.core.keyword_identical_QMARK_(result__45204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45204__auto__;
}
break;
}
}catch (e46412){var ex__45205__auto__ = e46412;
var statearr_46413_48809 = state_46370;
(statearr_46413_48809[(2)] = ex__45205__auto__);


if(cljs.core.seq((state_46370[(4)]))){
var statearr_46414_48810 = state_46370;
(statearr_46414_48810[(1)] = cljs.core.first((state_46370[(4)])));

} else {
throw ex__45205__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48812 = state_46370;
state_46370 = G__48812;
continue;
} else {
return ret_value__45203__auto__;
}
break;
}
});
cljs$core$async$state_machine__45202__auto__ = function(state_46370){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45202__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45202__auto____1.call(this,state_46370);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45202__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45202__auto____0;
cljs$core$async$state_machine__45202__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45202__auto____1;
return cljs$core$async$state_machine__45202__auto__;
})()
})();
var state__45345__auto__ = (function (){var statearr_46415 = f__45344__auto__();
(statearr_46415[(6)] = c__45343__auto__);

return statearr_46415;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45345__auto__);
}));

return c__45343__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__46417 = arguments.length;
switch (G__46417) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_48815 = (function (_){
var x__4550__auto__ = (((_ == null))?null:_);
var m__4551__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4551__auto__.call(null,_));
} else {
var m__4549__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4549__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_48815(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_48816 = (function (m,ch,close_QMARK_){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4551__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4549__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4549__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_48816(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_48820 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_48820(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_48821 = (function (m){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4551__auto__.call(null,m));
} else {
var m__4549__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4549__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_48821(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46452 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46452 = (function (ch,cs,meta46453){
this.ch = ch;
this.cs = cs;
this.meta46453 = meta46453;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46452.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46454,meta46453__$1){
var self__ = this;
var _46454__$1 = this;
return (new cljs.core.async.t_cljs$core$async46452(self__.ch,self__.cs,meta46453__$1));
}));

(cljs.core.async.t_cljs$core$async46452.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46454){
var self__ = this;
var _46454__$1 = this;
return self__.meta46453;
}));

(cljs.core.async.t_cljs$core$async46452.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46452.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async46452.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46452.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async46452.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async46452.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async46452.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta46453","meta46453",1411690376,null)], null);
}));

(cljs.core.async.t_cljs$core$async46452.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46452.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46452");

(cljs.core.async.t_cljs$core$async46452.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async46452");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46452.
 */
cljs.core.async.__GT_t_cljs$core$async46452 = (function cljs$core$async$mult_$___GT_t_cljs$core$async46452(ch__$1,cs__$1,meta46453){
return (new cljs.core.async.t_cljs$core$async46452(ch__$1,cs__$1,meta46453));
});

}

return (new cljs.core.async.t_cljs$core$async46452(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__45343__auto___48828 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45344__auto__ = (function (){var switch__45201__auto__ = (function (state_46607){
var state_val_46608 = (state_46607[(1)]);
if((state_val_46608 === (7))){
var inst_46600 = (state_46607[(2)]);
var state_46607__$1 = state_46607;
var statearr_46613_48829 = state_46607__$1;
(statearr_46613_48829[(2)] = inst_46600);

(statearr_46613_48829[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46608 === (20))){
var inst_46501 = (state_46607[(7)]);
var inst_46517 = cljs.core.first(inst_46501);
var inst_46518 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46517,(0),null);
var inst_46519 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46517,(1),null);
var state_46607__$1 = (function (){var statearr_46615 = state_46607;
(statearr_46615[(8)] = inst_46518);

return statearr_46615;
})();
if(cljs.core.truth_(inst_46519)){
var statearr_46616_48834 = state_46607__$1;
(statearr_46616_48834[(1)] = (22));

} else {
var statearr_46617_48835 = state_46607__$1;
(statearr_46617_48835[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46608 === (27))){
var inst_46549 = (state_46607[(9)]);
var inst_46554 = (state_46607[(10)]);
var inst_46547 = (state_46607[(11)]);
var inst_46470 = (state_46607[(12)]);
var inst_46554__$1 = cljs.core._nth(inst_46547,inst_46549);
var inst_46555 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_46554__$1,inst_46470,done);
var state_46607__$1 = (function (){var statearr_46621 = state_46607;
(statearr_46621[(10)] = inst_46554__$1);

return statearr_46621;
})();
if(cljs.core.truth_(inst_46555)){
var statearr_46623_48836 = state_46607__$1;
(statearr_46623_48836[(1)] = (30));

} else {
var statearr_46624_48837 = state_46607__$1;
(statearr_46624_48837[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46608 === (1))){
var state_46607__$1 = state_46607;
var statearr_46625_48838 = state_46607__$1;
(statearr_46625_48838[(2)] = null);

(statearr_46625_48838[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46608 === (24))){
var inst_46501 = (state_46607[(7)]);
var inst_46524 = (state_46607[(2)]);
var inst_46525 = cljs.core.next(inst_46501);
var inst_46479 = inst_46525;
var inst_46480 = null;
var inst_46481 = (0);
var inst_46482 = (0);
var state_46607__$1 = (function (){var statearr_46627 = state_46607;
(statearr_46627[(13)] = inst_46524);

(statearr_46627[(14)] = inst_46482);

(statearr_46627[(15)] = inst_46480);

(statearr_46627[(16)] = inst_46479);

(statearr_46627[(17)] = inst_46481);

return statearr_46627;
})();
var statearr_46630_48839 = state_46607__$1;
(statearr_46630_48839[(2)] = null);

(statearr_46630_48839[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46608 === (39))){
var state_46607__$1 = state_46607;
var statearr_46635_48840 = state_46607__$1;
(statearr_46635_48840[(2)] = null);

(statearr_46635_48840[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46608 === (4))){
var inst_46470 = (state_46607[(12)]);
var inst_46470__$1 = (state_46607[(2)]);
var inst_46471 = (inst_46470__$1 == null);
var state_46607__$1 = (function (){var statearr_46637 = state_46607;
(statearr_46637[(12)] = inst_46470__$1);

return statearr_46637;
})();
if(cljs.core.truth_(inst_46471)){
var statearr_46639_48841 = state_46607__$1;
(statearr_46639_48841[(1)] = (5));

} else {
var statearr_46640_48842 = state_46607__$1;
(statearr_46640_48842[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46608 === (15))){
var inst_46482 = (state_46607[(14)]);
var inst_46480 = (state_46607[(15)]);
var inst_46479 = (state_46607[(16)]);
var inst_46481 = (state_46607[(17)]);
var inst_46497 = (state_46607[(2)]);
var inst_46498 = (inst_46482 + (1));
var tmp46632 = inst_46480;
var tmp46633 = inst_46479;
var tmp46634 = inst_46481;
var inst_46479__$1 = tmp46633;
var inst_46480__$1 = tmp46632;
var inst_46481__$1 = tmp46634;
var inst_46482__$1 = inst_46498;
var state_46607__$1 = (function (){var statearr_46641 = state_46607;
(statearr_46641[(14)] = inst_46482__$1);

(statearr_46641[(15)] = inst_46480__$1);

(statearr_46641[(16)] = inst_46479__$1);

(statearr_46641[(17)] = inst_46481__$1);

(statearr_46641[(18)] = inst_46497);

return statearr_46641;
})();
var statearr_46642_48846 = state_46607__$1;
(statearr_46642_48846[(2)] = null);

(statearr_46642_48846[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46608 === (21))){
var inst_46528 = (state_46607[(2)]);
var state_46607__$1 = state_46607;
var statearr_46648_48847 = state_46607__$1;
(statearr_46648_48847[(2)] = inst_46528);

(statearr_46648_48847[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46608 === (31))){
var inst_46554 = (state_46607[(10)]);
var inst_46558 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_46554);
var state_46607__$1 = state_46607;
var statearr_46649_48848 = state_46607__$1;
(statearr_46649_48848[(2)] = inst_46558);

(statearr_46649_48848[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46608 === (32))){
var inst_46549 = (state_46607[(9)]);
var inst_46548 = (state_46607[(19)]);
var inst_46547 = (state_46607[(11)]);
var inst_46546 = (state_46607[(20)]);
var inst_46560 = (state_46607[(2)]);
var inst_46561 = (inst_46549 + (1));
var tmp46644 = inst_46548;
var tmp46645 = inst_46547;
var tmp46646 = inst_46546;
var inst_46546__$1 = tmp46646;
var inst_46547__$1 = tmp46645;
var inst_46548__$1 = tmp46644;
var inst_46549__$1 = inst_46561;
var state_46607__$1 = (function (){var statearr_46664 = state_46607;
(statearr_46664[(9)] = inst_46549__$1);

(statearr_46664[(19)] = inst_46548__$1);

(statearr_46664[(21)] = inst_46560);

(statearr_46664[(11)] = inst_46547__$1);

(statearr_46664[(20)] = inst_46546__$1);

return statearr_46664;
})();
var statearr_46668_48849 = state_46607__$1;
(statearr_46668_48849[(2)] = null);

(statearr_46668_48849[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46608 === (40))){
var inst_46573 = (state_46607[(22)]);
var inst_46577 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_46573);
var state_46607__$1 = state_46607;
var statearr_46674_48850 = state_46607__$1;
(statearr_46674_48850[(2)] = inst_46577);

(statearr_46674_48850[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46608 === (33))){
var inst_46564 = (state_46607[(23)]);
var inst_46566 = cljs.core.chunked_seq_QMARK_(inst_46564);
var state_46607__$1 = state_46607;
if(inst_46566){
var statearr_46679_48851 = state_46607__$1;
(statearr_46679_48851[(1)] = (36));

} else {
var statearr_46680_48852 = state_46607__$1;
(statearr_46680_48852[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46608 === (13))){
var inst_46491 = (state_46607[(24)]);
var inst_46494 = cljs.core.async.close_BANG_(inst_46491);
var state_46607__$1 = state_46607;
var statearr_46686_48853 = state_46607__$1;
(statearr_46686_48853[(2)] = inst_46494);

(statearr_46686_48853[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46608 === (22))){
var inst_46518 = (state_46607[(8)]);
var inst_46521 = cljs.core.async.close_BANG_(inst_46518);
var state_46607__$1 = state_46607;
var statearr_46694_48854 = state_46607__$1;
(statearr_46694_48854[(2)] = inst_46521);

(statearr_46694_48854[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46608 === (36))){
var inst_46564 = (state_46607[(23)]);
var inst_46568 = cljs.core.chunk_first(inst_46564);
var inst_46569 = cljs.core.chunk_rest(inst_46564);
var inst_46570 = cljs.core.count(inst_46568);
var inst_46546 = inst_46569;
var inst_46547 = inst_46568;
var inst_46548 = inst_46570;
var inst_46549 = (0);
var state_46607__$1 = (function (){var statearr_46698 = state_46607;
(statearr_46698[(9)] = inst_46549);

(statearr_46698[(19)] = inst_46548);

(statearr_46698[(11)] = inst_46547);

(statearr_46698[(20)] = inst_46546);

return statearr_46698;
})();
var statearr_46701_48855 = state_46607__$1;
(statearr_46701_48855[(2)] = null);

(statearr_46701_48855[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46608 === (41))){
var inst_46564 = (state_46607[(23)]);
var inst_46579 = (state_46607[(2)]);
var inst_46580 = cljs.core.next(inst_46564);
var inst_46546 = inst_46580;
var inst_46547 = null;
var inst_46548 = (0);
var inst_46549 = (0);
var state_46607__$1 = (function (){var statearr_46724 = state_46607;
(statearr_46724[(9)] = inst_46549);

(statearr_46724[(19)] = inst_46548);

(statearr_46724[(25)] = inst_46579);

(statearr_46724[(11)] = inst_46547);

(statearr_46724[(20)] = inst_46546);

return statearr_46724;
})();
var statearr_46725_48860 = state_46607__$1;
(statearr_46725_48860[(2)] = null);

(statearr_46725_48860[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46608 === (43))){
var state_46607__$1 = state_46607;
var statearr_46726_48862 = state_46607__$1;
(statearr_46726_48862[(2)] = null);

(statearr_46726_48862[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46608 === (29))){
var inst_46588 = (state_46607[(2)]);
var state_46607__$1 = state_46607;
var statearr_46730_48863 = state_46607__$1;
(statearr_46730_48863[(2)] = inst_46588);

(statearr_46730_48863[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46608 === (44))){
var inst_46597 = (state_46607[(2)]);
var state_46607__$1 = (function (){var statearr_46731 = state_46607;
(statearr_46731[(26)] = inst_46597);

return statearr_46731;
})();
var statearr_46732_48868 = state_46607__$1;
(statearr_46732_48868[(2)] = null);

(statearr_46732_48868[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46608 === (6))){
var inst_46538 = (state_46607[(27)]);
var inst_46537 = cljs.core.deref(cs);
var inst_46538__$1 = cljs.core.keys(inst_46537);
var inst_46539 = cljs.core.count(inst_46538__$1);
var inst_46540 = cljs.core.reset_BANG_(dctr,inst_46539);
var inst_46545 = cljs.core.seq(inst_46538__$1);
var inst_46546 = inst_46545;
var inst_46547 = null;
var inst_46548 = (0);
var inst_46549 = (0);
var state_46607__$1 = (function (){var statearr_46733 = state_46607;
(statearr_46733[(9)] = inst_46549);

(statearr_46733[(28)] = inst_46540);

(statearr_46733[(19)] = inst_46548);

(statearr_46733[(11)] = inst_46547);

(statearr_46733[(27)] = inst_46538__$1);

(statearr_46733[(20)] = inst_46546);

return statearr_46733;
})();
var statearr_46734_48871 = state_46607__$1;
(statearr_46734_48871[(2)] = null);

(statearr_46734_48871[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46608 === (28))){
var inst_46546 = (state_46607[(20)]);
var inst_46564 = (state_46607[(23)]);
var inst_46564__$1 = cljs.core.seq(inst_46546);
var state_46607__$1 = (function (){var statearr_46735 = state_46607;
(statearr_46735[(23)] = inst_46564__$1);

return statearr_46735;
})();
if(inst_46564__$1){
var statearr_46736_48875 = state_46607__$1;
(statearr_46736_48875[(1)] = (33));

} else {
var statearr_46737_48876 = state_46607__$1;
(statearr_46737_48876[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46608 === (25))){
var inst_46549 = (state_46607[(9)]);
var inst_46548 = (state_46607[(19)]);
var inst_46551 = (inst_46549 < inst_46548);
var inst_46552 = inst_46551;
var state_46607__$1 = state_46607;
if(cljs.core.truth_(inst_46552)){
var statearr_46740_48877 = state_46607__$1;
(statearr_46740_48877[(1)] = (27));

} else {
var statearr_46741_48878 = state_46607__$1;
(statearr_46741_48878[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46608 === (34))){
var state_46607__$1 = state_46607;
var statearr_46742_48879 = state_46607__$1;
(statearr_46742_48879[(2)] = null);

(statearr_46742_48879[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46608 === (17))){
var state_46607__$1 = state_46607;
var statearr_46743_48880 = state_46607__$1;
(statearr_46743_48880[(2)] = null);

(statearr_46743_48880[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46608 === (3))){
var inst_46602 = (state_46607[(2)]);
var state_46607__$1 = state_46607;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46607__$1,inst_46602);
} else {
if((state_val_46608 === (12))){
var inst_46533 = (state_46607[(2)]);
var state_46607__$1 = state_46607;
var statearr_46747_48882 = state_46607__$1;
(statearr_46747_48882[(2)] = inst_46533);

(statearr_46747_48882[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46608 === (2))){
var state_46607__$1 = state_46607;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46607__$1,(4),ch);
} else {
if((state_val_46608 === (23))){
var state_46607__$1 = state_46607;
var statearr_46749_48884 = state_46607__$1;
(statearr_46749_48884[(2)] = null);

(statearr_46749_48884[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46608 === (35))){
var inst_46586 = (state_46607[(2)]);
var state_46607__$1 = state_46607;
var statearr_46750_48885 = state_46607__$1;
(statearr_46750_48885[(2)] = inst_46586);

(statearr_46750_48885[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46608 === (19))){
var inst_46501 = (state_46607[(7)]);
var inst_46505 = cljs.core.chunk_first(inst_46501);
var inst_46506 = cljs.core.chunk_rest(inst_46501);
var inst_46507 = cljs.core.count(inst_46505);
var inst_46479 = inst_46506;
var inst_46480 = inst_46505;
var inst_46481 = inst_46507;
var inst_46482 = (0);
var state_46607__$1 = (function (){var statearr_46763 = state_46607;
(statearr_46763[(14)] = inst_46482);

(statearr_46763[(15)] = inst_46480);

(statearr_46763[(16)] = inst_46479);

(statearr_46763[(17)] = inst_46481);

return statearr_46763;
})();
var statearr_46766_48889 = state_46607__$1;
(statearr_46766_48889[(2)] = null);

(statearr_46766_48889[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46608 === (11))){
var inst_46479 = (state_46607[(16)]);
var inst_46501 = (state_46607[(7)]);
var inst_46501__$1 = cljs.core.seq(inst_46479);
var state_46607__$1 = (function (){var statearr_46769 = state_46607;
(statearr_46769[(7)] = inst_46501__$1);

return statearr_46769;
})();
if(inst_46501__$1){
var statearr_46774_48890 = state_46607__$1;
(statearr_46774_48890[(1)] = (16));

} else {
var statearr_46775_48891 = state_46607__$1;
(statearr_46775_48891[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46608 === (9))){
var inst_46535 = (state_46607[(2)]);
var state_46607__$1 = state_46607;
var statearr_46780_48895 = state_46607__$1;
(statearr_46780_48895[(2)] = inst_46535);

(statearr_46780_48895[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46608 === (5))){
var inst_46477 = cljs.core.deref(cs);
var inst_46478 = cljs.core.seq(inst_46477);
var inst_46479 = inst_46478;
var inst_46480 = null;
var inst_46481 = (0);
var inst_46482 = (0);
var state_46607__$1 = (function (){var statearr_46785 = state_46607;
(statearr_46785[(14)] = inst_46482);

(statearr_46785[(15)] = inst_46480);

(statearr_46785[(16)] = inst_46479);

(statearr_46785[(17)] = inst_46481);

return statearr_46785;
})();
var statearr_46789_48896 = state_46607__$1;
(statearr_46789_48896[(2)] = null);

(statearr_46789_48896[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46608 === (14))){
var state_46607__$1 = state_46607;
var statearr_46794_48897 = state_46607__$1;
(statearr_46794_48897[(2)] = null);

(statearr_46794_48897[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46608 === (45))){
var inst_46594 = (state_46607[(2)]);
var state_46607__$1 = state_46607;
var statearr_46795_48901 = state_46607__$1;
(statearr_46795_48901[(2)] = inst_46594);

(statearr_46795_48901[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46608 === (26))){
var inst_46538 = (state_46607[(27)]);
var inst_46590 = (state_46607[(2)]);
var inst_46591 = cljs.core.seq(inst_46538);
var state_46607__$1 = (function (){var statearr_46797 = state_46607;
(statearr_46797[(29)] = inst_46590);

return statearr_46797;
})();
if(inst_46591){
var statearr_46798_48902 = state_46607__$1;
(statearr_46798_48902[(1)] = (42));

} else {
var statearr_46803_48903 = state_46607__$1;
(statearr_46803_48903[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46608 === (16))){
var inst_46501 = (state_46607[(7)]);
var inst_46503 = cljs.core.chunked_seq_QMARK_(inst_46501);
var state_46607__$1 = state_46607;
if(inst_46503){
var statearr_46806_48904 = state_46607__$1;
(statearr_46806_48904[(1)] = (19));

} else {
var statearr_46807_48905 = state_46607__$1;
(statearr_46807_48905[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46608 === (38))){
var inst_46583 = (state_46607[(2)]);
var state_46607__$1 = state_46607;
var statearr_46812_48909 = state_46607__$1;
(statearr_46812_48909[(2)] = inst_46583);

(statearr_46812_48909[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46608 === (30))){
var state_46607__$1 = state_46607;
var statearr_46813_48910 = state_46607__$1;
(statearr_46813_48910[(2)] = null);

(statearr_46813_48910[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46608 === (10))){
var inst_46482 = (state_46607[(14)]);
var inst_46480 = (state_46607[(15)]);
var inst_46490 = cljs.core._nth(inst_46480,inst_46482);
var inst_46491 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46490,(0),null);
var inst_46492 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46490,(1),null);
var state_46607__$1 = (function (){var statearr_46817 = state_46607;
(statearr_46817[(24)] = inst_46491);

return statearr_46817;
})();
if(cljs.core.truth_(inst_46492)){
var statearr_46820_48911 = state_46607__$1;
(statearr_46820_48911[(1)] = (13));

} else {
var statearr_46821_48912 = state_46607__$1;
(statearr_46821_48912[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46608 === (18))){
var inst_46531 = (state_46607[(2)]);
var state_46607__$1 = state_46607;
var statearr_46822_48913 = state_46607__$1;
(statearr_46822_48913[(2)] = inst_46531);

(statearr_46822_48913[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46608 === (42))){
var state_46607__$1 = state_46607;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46607__$1,(45),dchan);
} else {
if((state_val_46608 === (37))){
var inst_46573 = (state_46607[(22)]);
var inst_46470 = (state_46607[(12)]);
var inst_46564 = (state_46607[(23)]);
var inst_46573__$1 = cljs.core.first(inst_46564);
var inst_46574 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_46573__$1,inst_46470,done);
var state_46607__$1 = (function (){var statearr_46828 = state_46607;
(statearr_46828[(22)] = inst_46573__$1);

return statearr_46828;
})();
if(cljs.core.truth_(inst_46574)){
var statearr_46829_48919 = state_46607__$1;
(statearr_46829_48919[(1)] = (39));

} else {
var statearr_46830_48920 = state_46607__$1;
(statearr_46830_48920[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46608 === (8))){
var inst_46482 = (state_46607[(14)]);
var inst_46481 = (state_46607[(17)]);
var inst_46484 = (inst_46482 < inst_46481);
var inst_46485 = inst_46484;
var state_46607__$1 = state_46607;
if(cljs.core.truth_(inst_46485)){
var statearr_46833_48921 = state_46607__$1;
(statearr_46833_48921[(1)] = (10));

} else {
var statearr_46834_48922 = state_46607__$1;
(statearr_46834_48922[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__45202__auto__ = null;
var cljs$core$async$mult_$_state_machine__45202__auto____0 = (function (){
var statearr_46840 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46840[(0)] = cljs$core$async$mult_$_state_machine__45202__auto__);

(statearr_46840[(1)] = (1));

return statearr_46840;
});
var cljs$core$async$mult_$_state_machine__45202__auto____1 = (function (state_46607){
while(true){
var ret_value__45203__auto__ = (function (){try{while(true){
var result__45204__auto__ = switch__45201__auto__(state_46607);
if(cljs.core.keyword_identical_QMARK_(result__45204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45204__auto__;
}
break;
}
}catch (e46841){var ex__45205__auto__ = e46841;
var statearr_46842_48923 = state_46607;
(statearr_46842_48923[(2)] = ex__45205__auto__);


if(cljs.core.seq((state_46607[(4)]))){
var statearr_46843_48925 = state_46607;
(statearr_46843_48925[(1)] = cljs.core.first((state_46607[(4)])));

} else {
throw ex__45205__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48929 = state_46607;
state_46607 = G__48929;
continue;
} else {
return ret_value__45203__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__45202__auto__ = function(state_46607){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__45202__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__45202__auto____1.call(this,state_46607);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__45202__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__45202__auto____0;
cljs$core$async$mult_$_state_machine__45202__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__45202__auto____1;
return cljs$core$async$mult_$_state_machine__45202__auto__;
})()
})();
var state__45345__auto__ = (function (){var statearr_46844 = f__45344__auto__();
(statearr_46844[(6)] = c__45343__auto___48828);

return statearr_46844;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45345__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__46847 = arguments.length;
switch (G__46847) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_48931 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_48931(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_48932 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_48932(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_48933 = (function (m){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4551__auto__.call(null,m));
} else {
var m__4549__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4549__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_48933(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_48934 = (function (m,state_map){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4551__auto__.call(null,m,state_map));
} else {
var m__4549__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4549__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_48934(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_48935 = (function (m,mode){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4551__auto__.call(null,m,mode));
} else {
var m__4549__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4549__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_48935(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___48938 = arguments.length;
var i__4865__auto___48939 = (0);
while(true){
if((i__4865__auto___48939 < len__4864__auto___48938)){
args__4870__auto__.push((arguments[i__4865__auto___48939]));

var G__48940 = (i__4865__auto___48939 + (1));
i__4865__auto___48939 = G__48940;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((3) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4871__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__46953){
var map__46954 = p__46953;
var map__46954__$1 = cljs.core.__destructure_map(map__46954);
var opts = map__46954__$1;
var statearr_46956_48941 = state;
(statearr_46956_48941[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_46959_48944 = state;
(statearr_46959_48944[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_46963_48945 = state;
(statearr_46963_48945[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq46938){
var G__46939 = cljs.core.first(seq46938);
var seq46938__$1 = cljs.core.next(seq46938);
var G__46940 = cljs.core.first(seq46938__$1);
var seq46938__$2 = cljs.core.next(seq46938__$1);
var G__46941 = cljs.core.first(seq46938__$2);
var seq46938__$3 = cljs.core.next(seq46938__$2);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46939,G__46940,G__46941,seq46938__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47002 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47002 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta47003){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta47003 = meta47003;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47002.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47004,meta47003__$1){
var self__ = this;
var _47004__$1 = this;
return (new cljs.core.async.t_cljs$core$async47002(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta47003__$1));
}));

(cljs.core.async.t_cljs$core$async47002.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47004){
var self__ = this;
var _47004__$1 = this;
return self__.meta47003;
}));

(cljs.core.async.t_cljs$core$async47002.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47002.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async47002.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47002.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async47002.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async47002.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async47002.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async47002.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async47002.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta47003","meta47003",-1209798656,null)], null);
}));

(cljs.core.async.t_cljs$core$async47002.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47002.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47002");

(cljs.core.async.t_cljs$core$async47002.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async47002");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47002.
 */
cljs.core.async.__GT_t_cljs$core$async47002 = (function cljs$core$async$mix_$___GT_t_cljs$core$async47002(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta47003){
return (new cljs.core.async.t_cljs$core$async47002(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta47003));
});

}

return (new cljs.core.async.t_cljs$core$async47002(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__45343__auto___48955 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45344__auto__ = (function (){var switch__45201__auto__ = (function (state_47175){
var state_val_47176 = (state_47175[(1)]);
if((state_val_47176 === (7))){
var inst_47128 = (state_47175[(2)]);
var state_47175__$1 = state_47175;
if(cljs.core.truth_(inst_47128)){
var statearr_47185_48956 = state_47175__$1;
(statearr_47185_48956[(1)] = (8));

} else {
var statearr_47186_48957 = state_47175__$1;
(statearr_47186_48957[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47176 === (20))){
var inst_47121 = (state_47175[(7)]);
var state_47175__$1 = state_47175;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47175__$1,(23),out,inst_47121);
} else {
if((state_val_47176 === (1))){
var inst_47084 = calc_state();
var inst_47085 = cljs.core.__destructure_map(inst_47084);
var inst_47090 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47085,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_47091 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47085,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_47092 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47085,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_47093 = inst_47084;
var state_47175__$1 = (function (){var statearr_47197 = state_47175;
(statearr_47197[(8)] = inst_47093);

(statearr_47197[(9)] = inst_47090);

(statearr_47197[(10)] = inst_47091);

(statearr_47197[(11)] = inst_47092);

return statearr_47197;
})();
var statearr_47199_48958 = state_47175__$1;
(statearr_47199_48958[(2)] = null);

(statearr_47199_48958[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47176 === (24))){
var inst_47100 = (state_47175[(12)]);
var inst_47093 = inst_47100;
var state_47175__$1 = (function (){var statearr_47200 = state_47175;
(statearr_47200[(8)] = inst_47093);

return statearr_47200;
})();
var statearr_47202_48959 = state_47175__$1;
(statearr_47202_48959[(2)] = null);

(statearr_47202_48959[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47176 === (4))){
var inst_47123 = (state_47175[(13)]);
var inst_47121 = (state_47175[(7)]);
var inst_47120 = (state_47175[(2)]);
var inst_47121__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47120,(0),null);
var inst_47122 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47120,(1),null);
var inst_47123__$1 = (inst_47121__$1 == null);
var state_47175__$1 = (function (){var statearr_47216 = state_47175;
(statearr_47216[(13)] = inst_47123__$1);

(statearr_47216[(14)] = inst_47122);

(statearr_47216[(7)] = inst_47121__$1);

return statearr_47216;
})();
if(cljs.core.truth_(inst_47123__$1)){
var statearr_47218_48960 = state_47175__$1;
(statearr_47218_48960[(1)] = (5));

} else {
var statearr_47219_48961 = state_47175__$1;
(statearr_47219_48961[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47176 === (15))){
var inst_47101 = (state_47175[(15)]);
var inst_47143 = (state_47175[(16)]);
var inst_47143__$1 = cljs.core.empty_QMARK_(inst_47101);
var state_47175__$1 = (function (){var statearr_47230 = state_47175;
(statearr_47230[(16)] = inst_47143__$1);

return statearr_47230;
})();
if(inst_47143__$1){
var statearr_47235_48966 = state_47175__$1;
(statearr_47235_48966[(1)] = (17));

} else {
var statearr_47239_48967 = state_47175__$1;
(statearr_47239_48967[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47176 === (21))){
var inst_47100 = (state_47175[(12)]);
var inst_47093 = inst_47100;
var state_47175__$1 = (function (){var statearr_47242 = state_47175;
(statearr_47242[(8)] = inst_47093);

return statearr_47242;
})();
var statearr_47243_48968 = state_47175__$1;
(statearr_47243_48968[(2)] = null);

(statearr_47243_48968[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47176 === (13))){
var inst_47136 = (state_47175[(2)]);
var inst_47137 = calc_state();
var inst_47093 = inst_47137;
var state_47175__$1 = (function (){var statearr_47247 = state_47175;
(statearr_47247[(8)] = inst_47093);

(statearr_47247[(17)] = inst_47136);

return statearr_47247;
})();
var statearr_47252_48969 = state_47175__$1;
(statearr_47252_48969[(2)] = null);

(statearr_47252_48969[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47176 === (22))){
var inst_47165 = (state_47175[(2)]);
var state_47175__$1 = state_47175;
var statearr_47261_48970 = state_47175__$1;
(statearr_47261_48970[(2)] = inst_47165);

(statearr_47261_48970[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47176 === (6))){
var inst_47122 = (state_47175[(14)]);
var inst_47126 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_47122,change);
var state_47175__$1 = state_47175;
var statearr_47267_48973 = state_47175__$1;
(statearr_47267_48973[(2)] = inst_47126);

(statearr_47267_48973[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47176 === (25))){
var state_47175__$1 = state_47175;
var statearr_47270_48976 = state_47175__$1;
(statearr_47270_48976[(2)] = null);

(statearr_47270_48976[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47176 === (17))){
var inst_47122 = (state_47175[(14)]);
var inst_47102 = (state_47175[(18)]);
var inst_47145 = (inst_47102.cljs$core$IFn$_invoke$arity$1 ? inst_47102.cljs$core$IFn$_invoke$arity$1(inst_47122) : inst_47102.call(null,inst_47122));
var inst_47146 = cljs.core.not(inst_47145);
var state_47175__$1 = state_47175;
var statearr_47273_48977 = state_47175__$1;
(statearr_47273_48977[(2)] = inst_47146);

(statearr_47273_48977[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47176 === (3))){
var inst_47169 = (state_47175[(2)]);
var state_47175__$1 = state_47175;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47175__$1,inst_47169);
} else {
if((state_val_47176 === (12))){
var state_47175__$1 = state_47175;
var statearr_47276_48978 = state_47175__$1;
(statearr_47276_48978[(2)] = null);

(statearr_47276_48978[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47176 === (2))){
var inst_47093 = (state_47175[(8)]);
var inst_47100 = (state_47175[(12)]);
var inst_47100__$1 = cljs.core.__destructure_map(inst_47093);
var inst_47101 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47100__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_47102 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47100__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_47107 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47100__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_47175__$1 = (function (){var statearr_47278 = state_47175;
(statearr_47278[(15)] = inst_47101);

(statearr_47278[(12)] = inst_47100__$1);

(statearr_47278[(18)] = inst_47102);

return statearr_47278;
})();
return cljs.core.async.ioc_alts_BANG_(state_47175__$1,(4),inst_47107);
} else {
if((state_val_47176 === (23))){
var inst_47155 = (state_47175[(2)]);
var state_47175__$1 = state_47175;
if(cljs.core.truth_(inst_47155)){
var statearr_47280_48986 = state_47175__$1;
(statearr_47280_48986[(1)] = (24));

} else {
var statearr_47281_48987 = state_47175__$1;
(statearr_47281_48987[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47176 === (19))){
var inst_47149 = (state_47175[(2)]);
var state_47175__$1 = state_47175;
var statearr_47283_48994 = state_47175__$1;
(statearr_47283_48994[(2)] = inst_47149);

(statearr_47283_48994[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47176 === (11))){
var inst_47122 = (state_47175[(14)]);
var inst_47133 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_47122);
var state_47175__$1 = state_47175;
var statearr_47285_48995 = state_47175__$1;
(statearr_47285_48995[(2)] = inst_47133);

(statearr_47285_48995[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47176 === (9))){
var inst_47140 = (state_47175[(19)]);
var inst_47122 = (state_47175[(14)]);
var inst_47101 = (state_47175[(15)]);
var inst_47140__$1 = (inst_47101.cljs$core$IFn$_invoke$arity$1 ? inst_47101.cljs$core$IFn$_invoke$arity$1(inst_47122) : inst_47101.call(null,inst_47122));
var state_47175__$1 = (function (){var statearr_47286 = state_47175;
(statearr_47286[(19)] = inst_47140__$1);

return statearr_47286;
})();
if(cljs.core.truth_(inst_47140__$1)){
var statearr_47289_48996 = state_47175__$1;
(statearr_47289_48996[(1)] = (14));

} else {
var statearr_47290_48997 = state_47175__$1;
(statearr_47290_48997[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47176 === (5))){
var inst_47123 = (state_47175[(13)]);
var state_47175__$1 = state_47175;
var statearr_47292_48998 = state_47175__$1;
(statearr_47292_48998[(2)] = inst_47123);

(statearr_47292_48998[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47176 === (14))){
var inst_47140 = (state_47175[(19)]);
var state_47175__$1 = state_47175;
var statearr_47293_48999 = state_47175__$1;
(statearr_47293_48999[(2)] = inst_47140);

(statearr_47293_48999[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47176 === (26))){
var inst_47161 = (state_47175[(2)]);
var state_47175__$1 = state_47175;
var statearr_47296_49000 = state_47175__$1;
(statearr_47296_49000[(2)] = inst_47161);

(statearr_47296_49000[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47176 === (16))){
var inst_47151 = (state_47175[(2)]);
var state_47175__$1 = state_47175;
if(cljs.core.truth_(inst_47151)){
var statearr_47299_49001 = state_47175__$1;
(statearr_47299_49001[(1)] = (20));

} else {
var statearr_47300_49002 = state_47175__$1;
(statearr_47300_49002[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47176 === (10))){
var inst_47167 = (state_47175[(2)]);
var state_47175__$1 = state_47175;
var statearr_47301_49003 = state_47175__$1;
(statearr_47301_49003[(2)] = inst_47167);

(statearr_47301_49003[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47176 === (18))){
var inst_47143 = (state_47175[(16)]);
var state_47175__$1 = state_47175;
var statearr_47304_49004 = state_47175__$1;
(statearr_47304_49004[(2)] = inst_47143);

(statearr_47304_49004[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47176 === (8))){
var inst_47121 = (state_47175[(7)]);
var inst_47130 = (inst_47121 == null);
var state_47175__$1 = state_47175;
if(cljs.core.truth_(inst_47130)){
var statearr_47307_49005 = state_47175__$1;
(statearr_47307_49005[(1)] = (11));

} else {
var statearr_47308_49006 = state_47175__$1;
(statearr_47308_49006[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__45202__auto__ = null;
var cljs$core$async$mix_$_state_machine__45202__auto____0 = (function (){
var statearr_47312 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47312[(0)] = cljs$core$async$mix_$_state_machine__45202__auto__);

(statearr_47312[(1)] = (1));

return statearr_47312;
});
var cljs$core$async$mix_$_state_machine__45202__auto____1 = (function (state_47175){
while(true){
var ret_value__45203__auto__ = (function (){try{while(true){
var result__45204__auto__ = switch__45201__auto__(state_47175);
if(cljs.core.keyword_identical_QMARK_(result__45204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45204__auto__;
}
break;
}
}catch (e47314){var ex__45205__auto__ = e47314;
var statearr_47315_49007 = state_47175;
(statearr_47315_49007[(2)] = ex__45205__auto__);


if(cljs.core.seq((state_47175[(4)]))){
var statearr_47317_49008 = state_47175;
(statearr_47317_49008[(1)] = cljs.core.first((state_47175[(4)])));

} else {
throw ex__45205__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49009 = state_47175;
state_47175 = G__49009;
continue;
} else {
return ret_value__45203__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__45202__auto__ = function(state_47175){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__45202__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__45202__auto____1.call(this,state_47175);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__45202__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__45202__auto____0;
cljs$core$async$mix_$_state_machine__45202__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__45202__auto____1;
return cljs$core$async$mix_$_state_machine__45202__auto__;
})()
})();
var state__45345__auto__ = (function (){var statearr_47318 = f__45344__auto__();
(statearr_47318[(6)] = c__45343__auto___48955);

return statearr_47318;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45345__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_49016 = (function (p,v,ch,close_QMARK_){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4551__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4549__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4549__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_49016(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_49017 = (function (p,v,ch){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4551__auto__.call(null,p,v,ch));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4549__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_49017(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_49018 = (function() {
var G__49019 = null;
var G__49019__1 = (function (p){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4551__auto__.call(null,p));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4549__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__49019__2 = (function (p,v){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4551__auto__.call(null,p,v));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4549__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__49019 = function(p,v){
switch(arguments.length){
case 1:
return G__49019__1.call(this,p);
case 2:
return G__49019__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__49019.cljs$core$IFn$_invoke$arity$1 = G__49019__1;
G__49019.cljs$core$IFn$_invoke$arity$2 = G__49019__2;
return G__49019;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__47324 = arguments.length;
switch (G__47324) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_49018(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_49018(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__47330 = arguments.length;
switch (G__47330) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4253__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__47328_SHARP_){
if(cljs.core.truth_((p1__47328_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__47328_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__47328_SHARP_.call(null,topic)))){
return p1__47328_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__47328_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47332 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47332 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta47333){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta47333 = meta47333;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47332.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47334,meta47333__$1){
var self__ = this;
var _47334__$1 = this;
return (new cljs.core.async.t_cljs$core$async47332(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta47333__$1));
}));

(cljs.core.async.t_cljs$core$async47332.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47334){
var self__ = this;
var _47334__$1 = this;
return self__.meta47333;
}));

(cljs.core.async.t_cljs$core$async47332.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47332.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async47332.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47332.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async47332.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async47332.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async47332.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async47332.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta47333","meta47333",876924124,null)], null);
}));

(cljs.core.async.t_cljs$core$async47332.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47332.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47332");

(cljs.core.async.t_cljs$core$async47332.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async47332");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47332.
 */
cljs.core.async.__GT_t_cljs$core$async47332 = (function cljs$core$async$__GT_t_cljs$core$async47332(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta47333){
return (new cljs.core.async.t_cljs$core$async47332(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta47333));
});

}

return (new cljs.core.async.t_cljs$core$async47332(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__45343__auto___49028 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45344__auto__ = (function (){var switch__45201__auto__ = (function (state_47426){
var state_val_47427 = (state_47426[(1)]);
if((state_val_47427 === (7))){
var inst_47421 = (state_47426[(2)]);
var state_47426__$1 = state_47426;
var statearr_47428_49029 = state_47426__$1;
(statearr_47428_49029[(2)] = inst_47421);

(statearr_47428_49029[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47427 === (20))){
var state_47426__$1 = state_47426;
var statearr_47431_49030 = state_47426__$1;
(statearr_47431_49030[(2)] = null);

(statearr_47431_49030[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47427 === (1))){
var state_47426__$1 = state_47426;
var statearr_47434_49031 = state_47426__$1;
(statearr_47434_49031[(2)] = null);

(statearr_47434_49031[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47427 === (24))){
var inst_47400 = (state_47426[(7)]);
var inst_47411 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_47400);
var state_47426__$1 = state_47426;
var statearr_47437_49032 = state_47426__$1;
(statearr_47437_49032[(2)] = inst_47411);

(statearr_47437_49032[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47427 === (4))){
var inst_47349 = (state_47426[(8)]);
var inst_47349__$1 = (state_47426[(2)]);
var inst_47350 = (inst_47349__$1 == null);
var state_47426__$1 = (function (){var statearr_47438 = state_47426;
(statearr_47438[(8)] = inst_47349__$1);

return statearr_47438;
})();
if(cljs.core.truth_(inst_47350)){
var statearr_47439_49033 = state_47426__$1;
(statearr_47439_49033[(1)] = (5));

} else {
var statearr_47440_49034 = state_47426__$1;
(statearr_47440_49034[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47427 === (15))){
var inst_47394 = (state_47426[(2)]);
var state_47426__$1 = state_47426;
var statearr_47441_49035 = state_47426__$1;
(statearr_47441_49035[(2)] = inst_47394);

(statearr_47441_49035[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47427 === (21))){
var inst_47416 = (state_47426[(2)]);
var state_47426__$1 = (function (){var statearr_47444 = state_47426;
(statearr_47444[(9)] = inst_47416);

return statearr_47444;
})();
var statearr_47445_49036 = state_47426__$1;
(statearr_47445_49036[(2)] = null);

(statearr_47445_49036[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47427 === (13))){
var inst_47374 = (state_47426[(10)]);
var inst_47376 = cljs.core.chunked_seq_QMARK_(inst_47374);
var state_47426__$1 = state_47426;
if(inst_47376){
var statearr_47446_49037 = state_47426__$1;
(statearr_47446_49037[(1)] = (16));

} else {
var statearr_47447_49038 = state_47426__$1;
(statearr_47447_49038[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47427 === (22))){
var inst_47408 = (state_47426[(2)]);
var state_47426__$1 = state_47426;
if(cljs.core.truth_(inst_47408)){
var statearr_47448_49039 = state_47426__$1;
(statearr_47448_49039[(1)] = (23));

} else {
var statearr_47449_49040 = state_47426__$1;
(statearr_47449_49040[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47427 === (6))){
var inst_47400 = (state_47426[(7)]);
var inst_47349 = (state_47426[(8)]);
var inst_47403 = (state_47426[(11)]);
var inst_47400__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_47349) : topic_fn.call(null,inst_47349));
var inst_47402 = cljs.core.deref(mults);
var inst_47403__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47402,inst_47400__$1);
var state_47426__$1 = (function (){var statearr_47450 = state_47426;
(statearr_47450[(7)] = inst_47400__$1);

(statearr_47450[(11)] = inst_47403__$1);

return statearr_47450;
})();
if(cljs.core.truth_(inst_47403__$1)){
var statearr_47451_49041 = state_47426__$1;
(statearr_47451_49041[(1)] = (19));

} else {
var statearr_47452_49042 = state_47426__$1;
(statearr_47452_49042[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47427 === (25))){
var inst_47413 = (state_47426[(2)]);
var state_47426__$1 = state_47426;
var statearr_47453_49043 = state_47426__$1;
(statearr_47453_49043[(2)] = inst_47413);

(statearr_47453_49043[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47427 === (17))){
var inst_47374 = (state_47426[(10)]);
var inst_47384 = cljs.core.first(inst_47374);
var inst_47386 = cljs.core.async.muxch_STAR_(inst_47384);
var inst_47387 = cljs.core.async.close_BANG_(inst_47386);
var inst_47388 = cljs.core.next(inst_47374);
var inst_47359 = inst_47388;
var inst_47360 = null;
var inst_47361 = (0);
var inst_47362 = (0);
var state_47426__$1 = (function (){var statearr_47454 = state_47426;
(statearr_47454[(12)] = inst_47387);

(statearr_47454[(13)] = inst_47359);

(statearr_47454[(14)] = inst_47362);

(statearr_47454[(15)] = inst_47360);

(statearr_47454[(16)] = inst_47361);

return statearr_47454;
})();
var statearr_47457_49044 = state_47426__$1;
(statearr_47457_49044[(2)] = null);

(statearr_47457_49044[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47427 === (3))){
var inst_47423 = (state_47426[(2)]);
var state_47426__$1 = state_47426;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47426__$1,inst_47423);
} else {
if((state_val_47427 === (12))){
var inst_47396 = (state_47426[(2)]);
var state_47426__$1 = state_47426;
var statearr_47458_49045 = state_47426__$1;
(statearr_47458_49045[(2)] = inst_47396);

(statearr_47458_49045[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47427 === (2))){
var state_47426__$1 = state_47426;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47426__$1,(4),ch);
} else {
if((state_val_47427 === (23))){
var state_47426__$1 = state_47426;
var statearr_47460_49046 = state_47426__$1;
(statearr_47460_49046[(2)] = null);

(statearr_47460_49046[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47427 === (19))){
var inst_47349 = (state_47426[(8)]);
var inst_47403 = (state_47426[(11)]);
var inst_47406 = cljs.core.async.muxch_STAR_(inst_47403);
var state_47426__$1 = state_47426;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47426__$1,(22),inst_47406,inst_47349);
} else {
if((state_val_47427 === (11))){
var inst_47359 = (state_47426[(13)]);
var inst_47374 = (state_47426[(10)]);
var inst_47374__$1 = cljs.core.seq(inst_47359);
var state_47426__$1 = (function (){var statearr_47462 = state_47426;
(statearr_47462[(10)] = inst_47374__$1);

return statearr_47462;
})();
if(inst_47374__$1){
var statearr_47464_49047 = state_47426__$1;
(statearr_47464_49047[(1)] = (13));

} else {
var statearr_47466_49048 = state_47426__$1;
(statearr_47466_49048[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47427 === (9))){
var inst_47398 = (state_47426[(2)]);
var state_47426__$1 = state_47426;
var statearr_47468_49049 = state_47426__$1;
(statearr_47468_49049[(2)] = inst_47398);

(statearr_47468_49049[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47427 === (5))){
var inst_47356 = cljs.core.deref(mults);
var inst_47357 = cljs.core.vals(inst_47356);
var inst_47358 = cljs.core.seq(inst_47357);
var inst_47359 = inst_47358;
var inst_47360 = null;
var inst_47361 = (0);
var inst_47362 = (0);
var state_47426__$1 = (function (){var statearr_47469 = state_47426;
(statearr_47469[(13)] = inst_47359);

(statearr_47469[(14)] = inst_47362);

(statearr_47469[(15)] = inst_47360);

(statearr_47469[(16)] = inst_47361);

return statearr_47469;
})();
var statearr_47470_49050 = state_47426__$1;
(statearr_47470_49050[(2)] = null);

(statearr_47470_49050[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47427 === (14))){
var state_47426__$1 = state_47426;
var statearr_47474_49051 = state_47426__$1;
(statearr_47474_49051[(2)] = null);

(statearr_47474_49051[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47427 === (16))){
var inst_47374 = (state_47426[(10)]);
var inst_47379 = cljs.core.chunk_first(inst_47374);
var inst_47380 = cljs.core.chunk_rest(inst_47374);
var inst_47381 = cljs.core.count(inst_47379);
var inst_47359 = inst_47380;
var inst_47360 = inst_47379;
var inst_47361 = inst_47381;
var inst_47362 = (0);
var state_47426__$1 = (function (){var statearr_47476 = state_47426;
(statearr_47476[(13)] = inst_47359);

(statearr_47476[(14)] = inst_47362);

(statearr_47476[(15)] = inst_47360);

(statearr_47476[(16)] = inst_47361);

return statearr_47476;
})();
var statearr_47477_49052 = state_47426__$1;
(statearr_47477_49052[(2)] = null);

(statearr_47477_49052[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47427 === (10))){
var inst_47359 = (state_47426[(13)]);
var inst_47362 = (state_47426[(14)]);
var inst_47360 = (state_47426[(15)]);
var inst_47361 = (state_47426[(16)]);
var inst_47368 = cljs.core._nth(inst_47360,inst_47362);
var inst_47369 = cljs.core.async.muxch_STAR_(inst_47368);
var inst_47370 = cljs.core.async.close_BANG_(inst_47369);
var inst_47371 = (inst_47362 + (1));
var tmp47471 = inst_47359;
var tmp47472 = inst_47360;
var tmp47473 = inst_47361;
var inst_47359__$1 = tmp47471;
var inst_47360__$1 = tmp47472;
var inst_47361__$1 = tmp47473;
var inst_47362__$1 = inst_47371;
var state_47426__$1 = (function (){var statearr_47479 = state_47426;
(statearr_47479[(17)] = inst_47370);

(statearr_47479[(13)] = inst_47359__$1);

(statearr_47479[(14)] = inst_47362__$1);

(statearr_47479[(15)] = inst_47360__$1);

(statearr_47479[(16)] = inst_47361__$1);

return statearr_47479;
})();
var statearr_47480_49053 = state_47426__$1;
(statearr_47480_49053[(2)] = null);

(statearr_47480_49053[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47427 === (18))){
var inst_47391 = (state_47426[(2)]);
var state_47426__$1 = state_47426;
var statearr_47483_49060 = state_47426__$1;
(statearr_47483_49060[(2)] = inst_47391);

(statearr_47483_49060[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47427 === (8))){
var inst_47362 = (state_47426[(14)]);
var inst_47361 = (state_47426[(16)]);
var inst_47365 = (inst_47362 < inst_47361);
var inst_47366 = inst_47365;
var state_47426__$1 = state_47426;
if(cljs.core.truth_(inst_47366)){
var statearr_47485_49061 = state_47426__$1;
(statearr_47485_49061[(1)] = (10));

} else {
var statearr_47486_49062 = state_47426__$1;
(statearr_47486_49062[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__45202__auto__ = null;
var cljs$core$async$state_machine__45202__auto____0 = (function (){
var statearr_47487 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47487[(0)] = cljs$core$async$state_machine__45202__auto__);

(statearr_47487[(1)] = (1));

return statearr_47487;
});
var cljs$core$async$state_machine__45202__auto____1 = (function (state_47426){
while(true){
var ret_value__45203__auto__ = (function (){try{while(true){
var result__45204__auto__ = switch__45201__auto__(state_47426);
if(cljs.core.keyword_identical_QMARK_(result__45204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45204__auto__;
}
break;
}
}catch (e47488){var ex__45205__auto__ = e47488;
var statearr_47489_49063 = state_47426;
(statearr_47489_49063[(2)] = ex__45205__auto__);


if(cljs.core.seq((state_47426[(4)]))){
var statearr_47491_49064 = state_47426;
(statearr_47491_49064[(1)] = cljs.core.first((state_47426[(4)])));

} else {
throw ex__45205__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49065 = state_47426;
state_47426 = G__49065;
continue;
} else {
return ret_value__45203__auto__;
}
break;
}
});
cljs$core$async$state_machine__45202__auto__ = function(state_47426){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45202__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45202__auto____1.call(this,state_47426);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45202__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45202__auto____0;
cljs$core$async$state_machine__45202__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45202__auto____1;
return cljs$core$async$state_machine__45202__auto__;
})()
})();
var state__45345__auto__ = (function (){var statearr_47492 = f__45344__auto__();
(statearr_47492[(6)] = c__45343__auto___49028);

return statearr_47492;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45345__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__47494 = arguments.length;
switch (G__47494) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__47513 = arguments.length;
switch (G__47513) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__47552 = arguments.length;
switch (G__47552) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__45343__auto___49070 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45344__auto__ = (function (){var switch__45201__auto__ = (function (state_47607){
var state_val_47608 = (state_47607[(1)]);
if((state_val_47608 === (7))){
var state_47607__$1 = state_47607;
var statearr_47612_49071 = state_47607__$1;
(statearr_47612_49071[(2)] = null);

(statearr_47612_49071[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47608 === (1))){
var state_47607__$1 = state_47607;
var statearr_47613_49072 = state_47607__$1;
(statearr_47613_49072[(2)] = null);

(statearr_47613_49072[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47608 === (4))){
var inst_47557 = (state_47607[(7)]);
var inst_47556 = (state_47607[(8)]);
var inst_47559 = (inst_47557 < inst_47556);
var state_47607__$1 = state_47607;
if(cljs.core.truth_(inst_47559)){
var statearr_47614_49073 = state_47607__$1;
(statearr_47614_49073[(1)] = (6));

} else {
var statearr_47615_49074 = state_47607__$1;
(statearr_47615_49074[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47608 === (15))){
var inst_47590 = (state_47607[(9)]);
var inst_47595 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_47590);
var state_47607__$1 = state_47607;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47607__$1,(17),out,inst_47595);
} else {
if((state_val_47608 === (13))){
var inst_47590 = (state_47607[(9)]);
var inst_47590__$1 = (state_47607[(2)]);
var inst_47591 = cljs.core.some(cljs.core.nil_QMARK_,inst_47590__$1);
var state_47607__$1 = (function (){var statearr_47622 = state_47607;
(statearr_47622[(9)] = inst_47590__$1);

return statearr_47622;
})();
if(cljs.core.truth_(inst_47591)){
var statearr_47626_49075 = state_47607__$1;
(statearr_47626_49075[(1)] = (14));

} else {
var statearr_47627_49076 = state_47607__$1;
(statearr_47627_49076[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47608 === (6))){
var state_47607__$1 = state_47607;
var statearr_47628_49077 = state_47607__$1;
(statearr_47628_49077[(2)] = null);

(statearr_47628_49077[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47608 === (17))){
var inst_47597 = (state_47607[(2)]);
var state_47607__$1 = (function (){var statearr_47631 = state_47607;
(statearr_47631[(10)] = inst_47597);

return statearr_47631;
})();
var statearr_47632_49078 = state_47607__$1;
(statearr_47632_49078[(2)] = null);

(statearr_47632_49078[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47608 === (3))){
var inst_47603 = (state_47607[(2)]);
var state_47607__$1 = state_47607;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47607__$1,inst_47603);
} else {
if((state_val_47608 === (12))){
var _ = (function (){var statearr_47633 = state_47607;
(statearr_47633[(4)] = cljs.core.rest((state_47607[(4)])));

return statearr_47633;
})();
var state_47607__$1 = state_47607;
var ex47629 = (state_47607__$1[(2)]);
var statearr_47634_49083 = state_47607__$1;
(statearr_47634_49083[(5)] = ex47629);


if((ex47629 instanceof Object)){
var statearr_47635_49084 = state_47607__$1;
(statearr_47635_49084[(1)] = (11));

(statearr_47635_49084[(5)] = null);

} else {
throw ex47629;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47608 === (2))){
var inst_47555 = cljs.core.reset_BANG_(dctr,cnt);
var inst_47556 = cnt;
var inst_47557 = (0);
var state_47607__$1 = (function (){var statearr_47636 = state_47607;
(statearr_47636[(7)] = inst_47557);

(statearr_47636[(11)] = inst_47555);

(statearr_47636[(8)] = inst_47556);

return statearr_47636;
})();
var statearr_47637_49089 = state_47607__$1;
(statearr_47637_49089[(2)] = null);

(statearr_47637_49089[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47608 === (11))){
var inst_47567 = (state_47607[(2)]);
var inst_47570 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_47607__$1 = (function (){var statearr_47638 = state_47607;
(statearr_47638[(12)] = inst_47567);

return statearr_47638;
})();
var statearr_47639_49090 = state_47607__$1;
(statearr_47639_49090[(2)] = inst_47570);

(statearr_47639_49090[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47608 === (9))){
var inst_47557 = (state_47607[(7)]);
var _ = (function (){var statearr_47640 = state_47607;
(statearr_47640[(4)] = cljs.core.cons((12),(state_47607[(4)])));

return statearr_47640;
})();
var inst_47576 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_47557) : chs__$1.call(null,inst_47557));
var inst_47577 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_47557) : done.call(null,inst_47557));
var inst_47578 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_47576,inst_47577);
var ___$1 = (function (){var statearr_47641 = state_47607;
(statearr_47641[(4)] = cljs.core.rest((state_47607[(4)])));

return statearr_47641;
})();
var state_47607__$1 = state_47607;
var statearr_47642_49091 = state_47607__$1;
(statearr_47642_49091[(2)] = inst_47578);

(statearr_47642_49091[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47608 === (5))){
var inst_47588 = (state_47607[(2)]);
var state_47607__$1 = (function (){var statearr_47643 = state_47607;
(statearr_47643[(13)] = inst_47588);

return statearr_47643;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47607__$1,(13),dchan);
} else {
if((state_val_47608 === (14))){
var inst_47593 = cljs.core.async.close_BANG_(out);
var state_47607__$1 = state_47607;
var statearr_47644_49096 = state_47607__$1;
(statearr_47644_49096[(2)] = inst_47593);

(statearr_47644_49096[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47608 === (16))){
var inst_47601 = (state_47607[(2)]);
var state_47607__$1 = state_47607;
var statearr_47645_49097 = state_47607__$1;
(statearr_47645_49097[(2)] = inst_47601);

(statearr_47645_49097[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47608 === (10))){
var inst_47557 = (state_47607[(7)]);
var inst_47581 = (state_47607[(2)]);
var inst_47582 = (inst_47557 + (1));
var inst_47557__$1 = inst_47582;
var state_47607__$1 = (function (){var statearr_47646 = state_47607;
(statearr_47646[(7)] = inst_47557__$1);

(statearr_47646[(14)] = inst_47581);

return statearr_47646;
})();
var statearr_47647_49098 = state_47607__$1;
(statearr_47647_49098[(2)] = null);

(statearr_47647_49098[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47608 === (8))){
var inst_47586 = (state_47607[(2)]);
var state_47607__$1 = state_47607;
var statearr_47648_49099 = state_47607__$1;
(statearr_47648_49099[(2)] = inst_47586);

(statearr_47648_49099[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__45202__auto__ = null;
var cljs$core$async$state_machine__45202__auto____0 = (function (){
var statearr_47649 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47649[(0)] = cljs$core$async$state_machine__45202__auto__);

(statearr_47649[(1)] = (1));

return statearr_47649;
});
var cljs$core$async$state_machine__45202__auto____1 = (function (state_47607){
while(true){
var ret_value__45203__auto__ = (function (){try{while(true){
var result__45204__auto__ = switch__45201__auto__(state_47607);
if(cljs.core.keyword_identical_QMARK_(result__45204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45204__auto__;
}
break;
}
}catch (e47650){var ex__45205__auto__ = e47650;
var statearr_47651_49102 = state_47607;
(statearr_47651_49102[(2)] = ex__45205__auto__);


if(cljs.core.seq((state_47607[(4)]))){
var statearr_47653_49103 = state_47607;
(statearr_47653_49103[(1)] = cljs.core.first((state_47607[(4)])));

} else {
throw ex__45205__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49104 = state_47607;
state_47607 = G__49104;
continue;
} else {
return ret_value__45203__auto__;
}
break;
}
});
cljs$core$async$state_machine__45202__auto__ = function(state_47607){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45202__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45202__auto____1.call(this,state_47607);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45202__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45202__auto____0;
cljs$core$async$state_machine__45202__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45202__auto____1;
return cljs$core$async$state_machine__45202__auto__;
})()
})();
var state__45345__auto__ = (function (){var statearr_47654 = f__45344__auto__();
(statearr_47654[(6)] = c__45343__auto___49070);

return statearr_47654;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45345__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__47657 = arguments.length;
switch (G__47657) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__45343__auto___49106 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45344__auto__ = (function (){var switch__45201__auto__ = (function (state_47691){
var state_val_47692 = (state_47691[(1)]);
if((state_val_47692 === (7))){
var inst_47670 = (state_47691[(7)]);
var inst_47669 = (state_47691[(8)]);
var inst_47669__$1 = (state_47691[(2)]);
var inst_47670__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47669__$1,(0),null);
var inst_47671 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47669__$1,(1),null);
var inst_47672 = (inst_47670__$1 == null);
var state_47691__$1 = (function (){var statearr_47697 = state_47691;
(statearr_47697[(7)] = inst_47670__$1);

(statearr_47697[(9)] = inst_47671);

(statearr_47697[(8)] = inst_47669__$1);

return statearr_47697;
})();
if(cljs.core.truth_(inst_47672)){
var statearr_47698_49109 = state_47691__$1;
(statearr_47698_49109[(1)] = (8));

} else {
var statearr_47699_49110 = state_47691__$1;
(statearr_47699_49110[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47692 === (1))){
var inst_47659 = cljs.core.vec(chs);
var inst_47660 = inst_47659;
var state_47691__$1 = (function (){var statearr_47701 = state_47691;
(statearr_47701[(10)] = inst_47660);

return statearr_47701;
})();
var statearr_47702_49111 = state_47691__$1;
(statearr_47702_49111[(2)] = null);

(statearr_47702_49111[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47692 === (4))){
var inst_47660 = (state_47691[(10)]);
var state_47691__$1 = state_47691;
return cljs.core.async.ioc_alts_BANG_(state_47691__$1,(7),inst_47660);
} else {
if((state_val_47692 === (6))){
var inst_47687 = (state_47691[(2)]);
var state_47691__$1 = state_47691;
var statearr_47703_49126 = state_47691__$1;
(statearr_47703_49126[(2)] = inst_47687);

(statearr_47703_49126[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47692 === (3))){
var inst_47689 = (state_47691[(2)]);
var state_47691__$1 = state_47691;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47691__$1,inst_47689);
} else {
if((state_val_47692 === (2))){
var inst_47660 = (state_47691[(10)]);
var inst_47662 = cljs.core.count(inst_47660);
var inst_47663 = (inst_47662 > (0));
var state_47691__$1 = state_47691;
if(cljs.core.truth_(inst_47663)){
var statearr_47710_49135 = state_47691__$1;
(statearr_47710_49135[(1)] = (4));

} else {
var statearr_47712_49136 = state_47691__$1;
(statearr_47712_49136[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47692 === (11))){
var inst_47660 = (state_47691[(10)]);
var inst_47680 = (state_47691[(2)]);
var tmp47705 = inst_47660;
var inst_47660__$1 = tmp47705;
var state_47691__$1 = (function (){var statearr_47715 = state_47691;
(statearr_47715[(10)] = inst_47660__$1);

(statearr_47715[(11)] = inst_47680);

return statearr_47715;
})();
var statearr_47718_49157 = state_47691__$1;
(statearr_47718_49157[(2)] = null);

(statearr_47718_49157[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47692 === (9))){
var inst_47670 = (state_47691[(7)]);
var state_47691__$1 = state_47691;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47691__$1,(11),out,inst_47670);
} else {
if((state_val_47692 === (5))){
var inst_47685 = cljs.core.async.close_BANG_(out);
var state_47691__$1 = state_47691;
var statearr_47728_49160 = state_47691__$1;
(statearr_47728_49160[(2)] = inst_47685);

(statearr_47728_49160[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47692 === (10))){
var inst_47683 = (state_47691[(2)]);
var state_47691__$1 = state_47691;
var statearr_47732_49163 = state_47691__$1;
(statearr_47732_49163[(2)] = inst_47683);

(statearr_47732_49163[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47692 === (8))){
var inst_47660 = (state_47691[(10)]);
var inst_47670 = (state_47691[(7)]);
var inst_47671 = (state_47691[(9)]);
var inst_47669 = (state_47691[(8)]);
var inst_47674 = (function (){var cs = inst_47660;
var vec__47665 = inst_47669;
var v = inst_47670;
var c = inst_47671;
return (function (p1__47655_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__47655_SHARP_);
});
})();
var inst_47676 = cljs.core.filterv(inst_47674,inst_47660);
var inst_47660__$1 = inst_47676;
var state_47691__$1 = (function (){var statearr_47755 = state_47691;
(statearr_47755[(10)] = inst_47660__$1);

return statearr_47755;
})();
var statearr_47760_49171 = state_47691__$1;
(statearr_47760_49171[(2)] = null);

(statearr_47760_49171[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__45202__auto__ = null;
var cljs$core$async$state_machine__45202__auto____0 = (function (){
var statearr_47771 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47771[(0)] = cljs$core$async$state_machine__45202__auto__);

(statearr_47771[(1)] = (1));

return statearr_47771;
});
var cljs$core$async$state_machine__45202__auto____1 = (function (state_47691){
while(true){
var ret_value__45203__auto__ = (function (){try{while(true){
var result__45204__auto__ = switch__45201__auto__(state_47691);
if(cljs.core.keyword_identical_QMARK_(result__45204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45204__auto__;
}
break;
}
}catch (e47779){var ex__45205__auto__ = e47779;
var statearr_47784_49179 = state_47691;
(statearr_47784_49179[(2)] = ex__45205__auto__);


if(cljs.core.seq((state_47691[(4)]))){
var statearr_47785_49183 = state_47691;
(statearr_47785_49183[(1)] = cljs.core.first((state_47691[(4)])));

} else {
throw ex__45205__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49187 = state_47691;
state_47691 = G__49187;
continue;
} else {
return ret_value__45203__auto__;
}
break;
}
});
cljs$core$async$state_machine__45202__auto__ = function(state_47691){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45202__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45202__auto____1.call(this,state_47691);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45202__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45202__auto____0;
cljs$core$async$state_machine__45202__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45202__auto____1;
return cljs$core$async$state_machine__45202__auto__;
})()
})();
var state__45345__auto__ = (function (){var statearr_47786 = f__45344__auto__();
(statearr_47786[(6)] = c__45343__auto___49106);

return statearr_47786;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45345__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__47789 = arguments.length;
switch (G__47789) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__45343__auto___49198 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45344__auto__ = (function (){var switch__45201__auto__ = (function (state_47814){
var state_val_47815 = (state_47814[(1)]);
if((state_val_47815 === (7))){
var inst_47796 = (state_47814[(7)]);
var inst_47796__$1 = (state_47814[(2)]);
var inst_47797 = (inst_47796__$1 == null);
var inst_47798 = cljs.core.not(inst_47797);
var state_47814__$1 = (function (){var statearr_47819 = state_47814;
(statearr_47819[(7)] = inst_47796__$1);

return statearr_47819;
})();
if(inst_47798){
var statearr_47821_49199 = state_47814__$1;
(statearr_47821_49199[(1)] = (8));

} else {
var statearr_47822_49200 = state_47814__$1;
(statearr_47822_49200[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47815 === (1))){
var inst_47790 = (0);
var state_47814__$1 = (function (){var statearr_47823 = state_47814;
(statearr_47823[(8)] = inst_47790);

return statearr_47823;
})();
var statearr_47824_49201 = state_47814__$1;
(statearr_47824_49201[(2)] = null);

(statearr_47824_49201[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47815 === (4))){
var state_47814__$1 = state_47814;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47814__$1,(7),ch);
} else {
if((state_val_47815 === (6))){
var inst_47809 = (state_47814[(2)]);
var state_47814__$1 = state_47814;
var statearr_47825_49202 = state_47814__$1;
(statearr_47825_49202[(2)] = inst_47809);

(statearr_47825_49202[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47815 === (3))){
var inst_47811 = (state_47814[(2)]);
var inst_47812 = cljs.core.async.close_BANG_(out);
var state_47814__$1 = (function (){var statearr_47826 = state_47814;
(statearr_47826[(9)] = inst_47811);

return statearr_47826;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_47814__$1,inst_47812);
} else {
if((state_val_47815 === (2))){
var inst_47790 = (state_47814[(8)]);
var inst_47792 = (inst_47790 < n);
var state_47814__$1 = state_47814;
if(cljs.core.truth_(inst_47792)){
var statearr_47827_49203 = state_47814__$1;
(statearr_47827_49203[(1)] = (4));

} else {
var statearr_47828_49204 = state_47814__$1;
(statearr_47828_49204[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47815 === (11))){
var inst_47790 = (state_47814[(8)]);
var inst_47801 = (state_47814[(2)]);
var inst_47802 = (inst_47790 + (1));
var inst_47790__$1 = inst_47802;
var state_47814__$1 = (function (){var statearr_47829 = state_47814;
(statearr_47829[(8)] = inst_47790__$1);

(statearr_47829[(10)] = inst_47801);

return statearr_47829;
})();
var statearr_47830_49210 = state_47814__$1;
(statearr_47830_49210[(2)] = null);

(statearr_47830_49210[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47815 === (9))){
var state_47814__$1 = state_47814;
var statearr_47831_49214 = state_47814__$1;
(statearr_47831_49214[(2)] = null);

(statearr_47831_49214[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47815 === (5))){
var state_47814__$1 = state_47814;
var statearr_47832_49215 = state_47814__$1;
(statearr_47832_49215[(2)] = null);

(statearr_47832_49215[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47815 === (10))){
var inst_47806 = (state_47814[(2)]);
var state_47814__$1 = state_47814;
var statearr_47833_49216 = state_47814__$1;
(statearr_47833_49216[(2)] = inst_47806);

(statearr_47833_49216[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47815 === (8))){
var inst_47796 = (state_47814[(7)]);
var state_47814__$1 = state_47814;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47814__$1,(11),out,inst_47796);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__45202__auto__ = null;
var cljs$core$async$state_machine__45202__auto____0 = (function (){
var statearr_47834 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47834[(0)] = cljs$core$async$state_machine__45202__auto__);

(statearr_47834[(1)] = (1));

return statearr_47834;
});
var cljs$core$async$state_machine__45202__auto____1 = (function (state_47814){
while(true){
var ret_value__45203__auto__ = (function (){try{while(true){
var result__45204__auto__ = switch__45201__auto__(state_47814);
if(cljs.core.keyword_identical_QMARK_(result__45204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45204__auto__;
}
break;
}
}catch (e47835){var ex__45205__auto__ = e47835;
var statearr_47836_49220 = state_47814;
(statearr_47836_49220[(2)] = ex__45205__auto__);


if(cljs.core.seq((state_47814[(4)]))){
var statearr_47837_49221 = state_47814;
(statearr_47837_49221[(1)] = cljs.core.first((state_47814[(4)])));

} else {
throw ex__45205__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49226 = state_47814;
state_47814 = G__49226;
continue;
} else {
return ret_value__45203__auto__;
}
break;
}
});
cljs$core$async$state_machine__45202__auto__ = function(state_47814){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45202__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45202__auto____1.call(this,state_47814);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45202__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45202__auto____0;
cljs$core$async$state_machine__45202__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45202__auto____1;
return cljs$core$async$state_machine__45202__auto__;
})()
})();
var state__45345__auto__ = (function (){var statearr_47838 = f__45344__auto__();
(statearr_47838[(6)] = c__45343__auto___49198);

return statearr_47838;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45345__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47841 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47841 = (function (f,ch,meta47842){
this.f = f;
this.ch = ch;
this.meta47842 = meta47842;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47841.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47843,meta47842__$1){
var self__ = this;
var _47843__$1 = this;
return (new cljs.core.async.t_cljs$core$async47841(self__.f,self__.ch,meta47842__$1));
}));

(cljs.core.async.t_cljs$core$async47841.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47843){
var self__ = this;
var _47843__$1 = this;
return self__.meta47842;
}));

(cljs.core.async.t_cljs$core$async47841.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47841.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async47841.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async47841.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47841.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47847 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47847 = (function (f,ch,meta47842,_,fn1,meta47848){
this.f = f;
this.ch = ch;
this.meta47842 = meta47842;
this._ = _;
this.fn1 = fn1;
this.meta47848 = meta47848;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47847.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47849,meta47848__$1){
var self__ = this;
var _47849__$1 = this;
return (new cljs.core.async.t_cljs$core$async47847(self__.f,self__.ch,self__.meta47842,self__._,self__.fn1,meta47848__$1));
}));

(cljs.core.async.t_cljs$core$async47847.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47849){
var self__ = this;
var _47849__$1 = this;
return self__.meta47848;
}));

(cljs.core.async.t_cljs$core$async47847.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47847.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async47847.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async47847.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__47840_SHARP_){
var G__47854 = (((p1__47840_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__47840_SHARP_) : self__.f.call(null,p1__47840_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__47854) : f1.call(null,G__47854));
});
}));

(cljs.core.async.t_cljs$core$async47847.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47842","meta47842",-101022086,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async47841","cljs.core.async/t_cljs$core$async47841",1745128475,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta47848","meta47848",-1648109891,null)], null);
}));

(cljs.core.async.t_cljs$core$async47847.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47847.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47847");

(cljs.core.async.t_cljs$core$async47847.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async47847");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47847.
 */
cljs.core.async.__GT_t_cljs$core$async47847 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async47847(f__$1,ch__$1,meta47842__$1,___$2,fn1__$1,meta47848){
return (new cljs.core.async.t_cljs$core$async47847(f__$1,ch__$1,meta47842__$1,___$2,fn1__$1,meta47848));
});

}

return (new cljs.core.async.t_cljs$core$async47847(self__.f,self__.ch,self__.meta47842,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4251__auto__ = ret;
if(cljs.core.truth_(and__4251__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4251__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__47857 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__47857) : self__.f.call(null,G__47857));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async47841.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47841.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async47841.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47842","meta47842",-101022086,null)], null);
}));

(cljs.core.async.t_cljs$core$async47841.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47841.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47841");

(cljs.core.async.t_cljs$core$async47841.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async47841");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47841.
 */
cljs.core.async.__GT_t_cljs$core$async47841 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async47841(f__$1,ch__$1,meta47842){
return (new cljs.core.async.t_cljs$core$async47841(f__$1,ch__$1,meta47842));
});

}

return (new cljs.core.async.t_cljs$core$async47841(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47861 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47861 = (function (f,ch,meta47862){
this.f = f;
this.ch = ch;
this.meta47862 = meta47862;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47861.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47863,meta47862__$1){
var self__ = this;
var _47863__$1 = this;
return (new cljs.core.async.t_cljs$core$async47861(self__.f,self__.ch,meta47862__$1));
}));

(cljs.core.async.t_cljs$core$async47861.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47863){
var self__ = this;
var _47863__$1 = this;
return self__.meta47862;
}));

(cljs.core.async.t_cljs$core$async47861.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47861.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async47861.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47861.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async47861.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47861.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async47861.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47862","meta47862",1813419423,null)], null);
}));

(cljs.core.async.t_cljs$core$async47861.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47861.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47861");

(cljs.core.async.t_cljs$core$async47861.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async47861");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47861.
 */
cljs.core.async.__GT_t_cljs$core$async47861 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async47861(f__$1,ch__$1,meta47862){
return (new cljs.core.async.t_cljs$core$async47861(f__$1,ch__$1,meta47862));
});

}

return (new cljs.core.async.t_cljs$core$async47861(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47866 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47866 = (function (p,ch,meta47867){
this.p = p;
this.ch = ch;
this.meta47867 = meta47867;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47866.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47868,meta47867__$1){
var self__ = this;
var _47868__$1 = this;
return (new cljs.core.async.t_cljs$core$async47866(self__.p,self__.ch,meta47867__$1));
}));

(cljs.core.async.t_cljs$core$async47866.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47868){
var self__ = this;
var _47868__$1 = this;
return self__.meta47867;
}));

(cljs.core.async.t_cljs$core$async47866.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47866.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async47866.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async47866.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47866.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async47866.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47866.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async47866.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47867","meta47867",43200440,null)], null);
}));

(cljs.core.async.t_cljs$core$async47866.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47866.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47866");

(cljs.core.async.t_cljs$core$async47866.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async47866");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47866.
 */
cljs.core.async.__GT_t_cljs$core$async47866 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async47866(p__$1,ch__$1,meta47867){
return (new cljs.core.async.t_cljs$core$async47866(p__$1,ch__$1,meta47867));
});

}

return (new cljs.core.async.t_cljs$core$async47866(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__47875 = arguments.length;
switch (G__47875) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__45343__auto___49242 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45344__auto__ = (function (){var switch__45201__auto__ = (function (state_47896){
var state_val_47897 = (state_47896[(1)]);
if((state_val_47897 === (7))){
var inst_47892 = (state_47896[(2)]);
var state_47896__$1 = state_47896;
var statearr_47899_49243 = state_47896__$1;
(statearr_47899_49243[(2)] = inst_47892);

(statearr_47899_49243[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47897 === (1))){
var state_47896__$1 = state_47896;
var statearr_47900_49245 = state_47896__$1;
(statearr_47900_49245[(2)] = null);

(statearr_47900_49245[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47897 === (4))){
var inst_47878 = (state_47896[(7)]);
var inst_47878__$1 = (state_47896[(2)]);
var inst_47879 = (inst_47878__$1 == null);
var state_47896__$1 = (function (){var statearr_47901 = state_47896;
(statearr_47901[(7)] = inst_47878__$1);

return statearr_47901;
})();
if(cljs.core.truth_(inst_47879)){
var statearr_47902_49247 = state_47896__$1;
(statearr_47902_49247[(1)] = (5));

} else {
var statearr_47903_49248 = state_47896__$1;
(statearr_47903_49248[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47897 === (6))){
var inst_47878 = (state_47896[(7)]);
var inst_47883 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_47878) : p.call(null,inst_47878));
var state_47896__$1 = state_47896;
if(cljs.core.truth_(inst_47883)){
var statearr_47904_49249 = state_47896__$1;
(statearr_47904_49249[(1)] = (8));

} else {
var statearr_47905_49250 = state_47896__$1;
(statearr_47905_49250[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47897 === (3))){
var inst_47894 = (state_47896[(2)]);
var state_47896__$1 = state_47896;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47896__$1,inst_47894);
} else {
if((state_val_47897 === (2))){
var state_47896__$1 = state_47896;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47896__$1,(4),ch);
} else {
if((state_val_47897 === (11))){
var inst_47886 = (state_47896[(2)]);
var state_47896__$1 = state_47896;
var statearr_47906_49253 = state_47896__$1;
(statearr_47906_49253[(2)] = inst_47886);

(statearr_47906_49253[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47897 === (9))){
var state_47896__$1 = state_47896;
var statearr_47907_49254 = state_47896__$1;
(statearr_47907_49254[(2)] = null);

(statearr_47907_49254[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47897 === (5))){
var inst_47881 = cljs.core.async.close_BANG_(out);
var state_47896__$1 = state_47896;
var statearr_47908_49255 = state_47896__$1;
(statearr_47908_49255[(2)] = inst_47881);

(statearr_47908_49255[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47897 === (10))){
var inst_47889 = (state_47896[(2)]);
var state_47896__$1 = (function (){var statearr_47909 = state_47896;
(statearr_47909[(8)] = inst_47889);

return statearr_47909;
})();
var statearr_47910_49257 = state_47896__$1;
(statearr_47910_49257[(2)] = null);

(statearr_47910_49257[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47897 === (8))){
var inst_47878 = (state_47896[(7)]);
var state_47896__$1 = state_47896;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47896__$1,(11),out,inst_47878);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__45202__auto__ = null;
var cljs$core$async$state_machine__45202__auto____0 = (function (){
var statearr_47911 = [null,null,null,null,null,null,null,null,null];
(statearr_47911[(0)] = cljs$core$async$state_machine__45202__auto__);

(statearr_47911[(1)] = (1));

return statearr_47911;
});
var cljs$core$async$state_machine__45202__auto____1 = (function (state_47896){
while(true){
var ret_value__45203__auto__ = (function (){try{while(true){
var result__45204__auto__ = switch__45201__auto__(state_47896);
if(cljs.core.keyword_identical_QMARK_(result__45204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45204__auto__;
}
break;
}
}catch (e47916){var ex__45205__auto__ = e47916;
var statearr_47917_49261 = state_47896;
(statearr_47917_49261[(2)] = ex__45205__auto__);


if(cljs.core.seq((state_47896[(4)]))){
var statearr_47919_49262 = state_47896;
(statearr_47919_49262[(1)] = cljs.core.first((state_47896[(4)])));

} else {
throw ex__45205__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49263 = state_47896;
state_47896 = G__49263;
continue;
} else {
return ret_value__45203__auto__;
}
break;
}
});
cljs$core$async$state_machine__45202__auto__ = function(state_47896){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45202__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45202__auto____1.call(this,state_47896);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45202__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45202__auto____0;
cljs$core$async$state_machine__45202__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45202__auto____1;
return cljs$core$async$state_machine__45202__auto__;
})()
})();
var state__45345__auto__ = (function (){var statearr_47920 = f__45344__auto__();
(statearr_47920[(6)] = c__45343__auto___49242);

return statearr_47920;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45345__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__47923 = arguments.length;
switch (G__47923) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__45343__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45344__auto__ = (function (){var switch__45201__auto__ = (function (state_47993){
var state_val_47994 = (state_47993[(1)]);
if((state_val_47994 === (7))){
var inst_47989 = (state_47993[(2)]);
var state_47993__$1 = state_47993;
var statearr_47995_49265 = state_47993__$1;
(statearr_47995_49265[(2)] = inst_47989);

(statearr_47995_49265[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47994 === (20))){
var inst_47958 = (state_47993[(7)]);
var inst_47970 = (state_47993[(2)]);
var inst_47971 = cljs.core.next(inst_47958);
var inst_47941 = inst_47971;
var inst_47942 = null;
var inst_47943 = (0);
var inst_47944 = (0);
var state_47993__$1 = (function (){var statearr_47997 = state_47993;
(statearr_47997[(8)] = inst_47943);

(statearr_47997[(9)] = inst_47944);

(statearr_47997[(10)] = inst_47970);

(statearr_47997[(11)] = inst_47942);

(statearr_47997[(12)] = inst_47941);

return statearr_47997;
})();
var statearr_47998_49266 = state_47993__$1;
(statearr_47998_49266[(2)] = null);

(statearr_47998_49266[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47994 === (1))){
var state_47993__$1 = state_47993;
var statearr_47999_49268 = state_47993__$1;
(statearr_47999_49268[(2)] = null);

(statearr_47999_49268[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47994 === (4))){
var inst_47930 = (state_47993[(13)]);
var inst_47930__$1 = (state_47993[(2)]);
var inst_47931 = (inst_47930__$1 == null);
var state_47993__$1 = (function (){var statearr_48000 = state_47993;
(statearr_48000[(13)] = inst_47930__$1);

return statearr_48000;
})();
if(cljs.core.truth_(inst_47931)){
var statearr_48001_49269 = state_47993__$1;
(statearr_48001_49269[(1)] = (5));

} else {
var statearr_48002_49270 = state_47993__$1;
(statearr_48002_49270[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47994 === (15))){
var state_47993__$1 = state_47993;
var statearr_48006_49271 = state_47993__$1;
(statearr_48006_49271[(2)] = null);

(statearr_48006_49271[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47994 === (21))){
var state_47993__$1 = state_47993;
var statearr_48007_49275 = state_47993__$1;
(statearr_48007_49275[(2)] = null);

(statearr_48007_49275[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47994 === (13))){
var inst_47943 = (state_47993[(8)]);
var inst_47944 = (state_47993[(9)]);
var inst_47942 = (state_47993[(11)]);
var inst_47941 = (state_47993[(12)]);
var inst_47951 = (state_47993[(2)]);
var inst_47954 = (inst_47944 + (1));
var tmp48003 = inst_47943;
var tmp48004 = inst_47942;
var tmp48005 = inst_47941;
var inst_47941__$1 = tmp48005;
var inst_47942__$1 = tmp48004;
var inst_47943__$1 = tmp48003;
var inst_47944__$1 = inst_47954;
var state_47993__$1 = (function (){var statearr_48008 = state_47993;
(statearr_48008[(8)] = inst_47943__$1);

(statearr_48008[(14)] = inst_47951);

(statearr_48008[(9)] = inst_47944__$1);

(statearr_48008[(11)] = inst_47942__$1);

(statearr_48008[(12)] = inst_47941__$1);

return statearr_48008;
})();
var statearr_48009_49276 = state_47993__$1;
(statearr_48009_49276[(2)] = null);

(statearr_48009_49276[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47994 === (22))){
var state_47993__$1 = state_47993;
var statearr_48011_49277 = state_47993__$1;
(statearr_48011_49277[(2)] = null);

(statearr_48011_49277[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47994 === (6))){
var inst_47930 = (state_47993[(13)]);
var inst_47939 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_47930) : f.call(null,inst_47930));
var inst_47940 = cljs.core.seq(inst_47939);
var inst_47941 = inst_47940;
var inst_47942 = null;
var inst_47943 = (0);
var inst_47944 = (0);
var state_47993__$1 = (function (){var statearr_48012 = state_47993;
(statearr_48012[(8)] = inst_47943);

(statearr_48012[(9)] = inst_47944);

(statearr_48012[(11)] = inst_47942);

(statearr_48012[(12)] = inst_47941);

return statearr_48012;
})();
var statearr_48013_49282 = state_47993__$1;
(statearr_48013_49282[(2)] = null);

(statearr_48013_49282[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47994 === (17))){
var inst_47958 = (state_47993[(7)]);
var inst_47962 = cljs.core.chunk_first(inst_47958);
var inst_47963 = cljs.core.chunk_rest(inst_47958);
var inst_47965 = cljs.core.count(inst_47962);
var inst_47941 = inst_47963;
var inst_47942 = inst_47962;
var inst_47943 = inst_47965;
var inst_47944 = (0);
var state_47993__$1 = (function (){var statearr_48015 = state_47993;
(statearr_48015[(8)] = inst_47943);

(statearr_48015[(9)] = inst_47944);

(statearr_48015[(11)] = inst_47942);

(statearr_48015[(12)] = inst_47941);

return statearr_48015;
})();
var statearr_48017_49284 = state_47993__$1;
(statearr_48017_49284[(2)] = null);

(statearr_48017_49284[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47994 === (3))){
var inst_47991 = (state_47993[(2)]);
var state_47993__$1 = state_47993;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47993__$1,inst_47991);
} else {
if((state_val_47994 === (12))){
var inst_47979 = (state_47993[(2)]);
var state_47993__$1 = state_47993;
var statearr_48019_49288 = state_47993__$1;
(statearr_48019_49288[(2)] = inst_47979);

(statearr_48019_49288[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47994 === (2))){
var state_47993__$1 = state_47993;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47993__$1,(4),in$);
} else {
if((state_val_47994 === (23))){
var inst_47987 = (state_47993[(2)]);
var state_47993__$1 = state_47993;
var statearr_48020_49296 = state_47993__$1;
(statearr_48020_49296[(2)] = inst_47987);

(statearr_48020_49296[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47994 === (19))){
var inst_47974 = (state_47993[(2)]);
var state_47993__$1 = state_47993;
var statearr_48021_49298 = state_47993__$1;
(statearr_48021_49298[(2)] = inst_47974);

(statearr_48021_49298[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47994 === (11))){
var inst_47958 = (state_47993[(7)]);
var inst_47941 = (state_47993[(12)]);
var inst_47958__$1 = cljs.core.seq(inst_47941);
var state_47993__$1 = (function (){var statearr_48023 = state_47993;
(statearr_48023[(7)] = inst_47958__$1);

return statearr_48023;
})();
if(inst_47958__$1){
var statearr_48024_49302 = state_47993__$1;
(statearr_48024_49302[(1)] = (14));

} else {
var statearr_48025_49303 = state_47993__$1;
(statearr_48025_49303[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47994 === (9))){
var inst_47981 = (state_47993[(2)]);
var inst_47982 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_47993__$1 = (function (){var statearr_48026 = state_47993;
(statearr_48026[(15)] = inst_47981);

return statearr_48026;
})();
if(cljs.core.truth_(inst_47982)){
var statearr_48027_49304 = state_47993__$1;
(statearr_48027_49304[(1)] = (21));

} else {
var statearr_48028_49305 = state_47993__$1;
(statearr_48028_49305[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47994 === (5))){
var inst_47933 = cljs.core.async.close_BANG_(out);
var state_47993__$1 = state_47993;
var statearr_48030_49306 = state_47993__$1;
(statearr_48030_49306[(2)] = inst_47933);

(statearr_48030_49306[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47994 === (14))){
var inst_47958 = (state_47993[(7)]);
var inst_47960 = cljs.core.chunked_seq_QMARK_(inst_47958);
var state_47993__$1 = state_47993;
if(inst_47960){
var statearr_48032_49307 = state_47993__$1;
(statearr_48032_49307[(1)] = (17));

} else {
var statearr_48034_49312 = state_47993__$1;
(statearr_48034_49312[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47994 === (16))){
var inst_47977 = (state_47993[(2)]);
var state_47993__$1 = state_47993;
var statearr_48035_49316 = state_47993__$1;
(statearr_48035_49316[(2)] = inst_47977);

(statearr_48035_49316[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47994 === (10))){
var inst_47944 = (state_47993[(9)]);
var inst_47942 = (state_47993[(11)]);
var inst_47949 = cljs.core._nth(inst_47942,inst_47944);
var state_47993__$1 = state_47993;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47993__$1,(13),out,inst_47949);
} else {
if((state_val_47994 === (18))){
var inst_47958 = (state_47993[(7)]);
var inst_47968 = cljs.core.first(inst_47958);
var state_47993__$1 = state_47993;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47993__$1,(20),out,inst_47968);
} else {
if((state_val_47994 === (8))){
var inst_47943 = (state_47993[(8)]);
var inst_47944 = (state_47993[(9)]);
var inst_47946 = (inst_47944 < inst_47943);
var inst_47947 = inst_47946;
var state_47993__$1 = state_47993;
if(cljs.core.truth_(inst_47947)){
var statearr_48036_49324 = state_47993__$1;
(statearr_48036_49324[(1)] = (10));

} else {
var statearr_48037_49325 = state_47993__$1;
(statearr_48037_49325[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__45202__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__45202__auto____0 = (function (){
var statearr_48038 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48038[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__45202__auto__);

(statearr_48038[(1)] = (1));

return statearr_48038;
});
var cljs$core$async$mapcat_STAR__$_state_machine__45202__auto____1 = (function (state_47993){
while(true){
var ret_value__45203__auto__ = (function (){try{while(true){
var result__45204__auto__ = switch__45201__auto__(state_47993);
if(cljs.core.keyword_identical_QMARK_(result__45204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45204__auto__;
}
break;
}
}catch (e48039){var ex__45205__auto__ = e48039;
var statearr_48041_49329 = state_47993;
(statearr_48041_49329[(2)] = ex__45205__auto__);


if(cljs.core.seq((state_47993[(4)]))){
var statearr_48042_49330 = state_47993;
(statearr_48042_49330[(1)] = cljs.core.first((state_47993[(4)])));

} else {
throw ex__45205__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49338 = state_47993;
state_47993 = G__49338;
continue;
} else {
return ret_value__45203__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__45202__auto__ = function(state_47993){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__45202__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__45202__auto____1.call(this,state_47993);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__45202__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__45202__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__45202__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__45202__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__45202__auto__;
})()
})();
var state__45345__auto__ = (function (){var statearr_48045 = f__45344__auto__();
(statearr_48045[(6)] = c__45343__auto__);

return statearr_48045;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45345__auto__);
}));

return c__45343__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__48052 = arguments.length;
switch (G__48052) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__48065 = arguments.length;
switch (G__48065) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__48085 = arguments.length;
switch (G__48085) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__45343__auto___49351 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45344__auto__ = (function (){var switch__45201__auto__ = (function (state_48119){
var state_val_48120 = (state_48119[(1)]);
if((state_val_48120 === (7))){
var inst_48114 = (state_48119[(2)]);
var state_48119__$1 = state_48119;
var statearr_48121_49352 = state_48119__$1;
(statearr_48121_49352[(2)] = inst_48114);

(statearr_48121_49352[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48120 === (1))){
var inst_48095 = null;
var state_48119__$1 = (function (){var statearr_48122 = state_48119;
(statearr_48122[(7)] = inst_48095);

return statearr_48122;
})();
var statearr_48123_49353 = state_48119__$1;
(statearr_48123_49353[(2)] = null);

(statearr_48123_49353[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48120 === (4))){
var inst_48099 = (state_48119[(8)]);
var inst_48099__$1 = (state_48119[(2)]);
var inst_48100 = (inst_48099__$1 == null);
var inst_48101 = cljs.core.not(inst_48100);
var state_48119__$1 = (function (){var statearr_48124 = state_48119;
(statearr_48124[(8)] = inst_48099__$1);

return statearr_48124;
})();
if(inst_48101){
var statearr_48125_49354 = state_48119__$1;
(statearr_48125_49354[(1)] = (5));

} else {
var statearr_48126_49355 = state_48119__$1;
(statearr_48126_49355[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48120 === (6))){
var state_48119__$1 = state_48119;
var statearr_48127_49356 = state_48119__$1;
(statearr_48127_49356[(2)] = null);

(statearr_48127_49356[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48120 === (3))){
var inst_48116 = (state_48119[(2)]);
var inst_48117 = cljs.core.async.close_BANG_(out);
var state_48119__$1 = (function (){var statearr_48129 = state_48119;
(statearr_48129[(9)] = inst_48116);

return statearr_48129;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_48119__$1,inst_48117);
} else {
if((state_val_48120 === (2))){
var state_48119__$1 = state_48119;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48119__$1,(4),ch);
} else {
if((state_val_48120 === (11))){
var inst_48099 = (state_48119[(8)]);
var inst_48108 = (state_48119[(2)]);
var inst_48095 = inst_48099;
var state_48119__$1 = (function (){var statearr_48131 = state_48119;
(statearr_48131[(10)] = inst_48108);

(statearr_48131[(7)] = inst_48095);

return statearr_48131;
})();
var statearr_48133_49357 = state_48119__$1;
(statearr_48133_49357[(2)] = null);

(statearr_48133_49357[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48120 === (9))){
var inst_48099 = (state_48119[(8)]);
var state_48119__$1 = state_48119;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48119__$1,(11),out,inst_48099);
} else {
if((state_val_48120 === (5))){
var inst_48099 = (state_48119[(8)]);
var inst_48095 = (state_48119[(7)]);
var inst_48103 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_48099,inst_48095);
var state_48119__$1 = state_48119;
if(inst_48103){
var statearr_48135_49358 = state_48119__$1;
(statearr_48135_49358[(1)] = (8));

} else {
var statearr_48136_49359 = state_48119__$1;
(statearr_48136_49359[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48120 === (10))){
var inst_48111 = (state_48119[(2)]);
var state_48119__$1 = state_48119;
var statearr_48137_49360 = state_48119__$1;
(statearr_48137_49360[(2)] = inst_48111);

(statearr_48137_49360[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48120 === (8))){
var inst_48095 = (state_48119[(7)]);
var tmp48134 = inst_48095;
var inst_48095__$1 = tmp48134;
var state_48119__$1 = (function (){var statearr_48138 = state_48119;
(statearr_48138[(7)] = inst_48095__$1);

return statearr_48138;
})();
var statearr_48140_49361 = state_48119__$1;
(statearr_48140_49361[(2)] = null);

(statearr_48140_49361[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__45202__auto__ = null;
var cljs$core$async$state_machine__45202__auto____0 = (function (){
var statearr_48141 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_48141[(0)] = cljs$core$async$state_machine__45202__auto__);

(statearr_48141[(1)] = (1));

return statearr_48141;
});
var cljs$core$async$state_machine__45202__auto____1 = (function (state_48119){
while(true){
var ret_value__45203__auto__ = (function (){try{while(true){
var result__45204__auto__ = switch__45201__auto__(state_48119);
if(cljs.core.keyword_identical_QMARK_(result__45204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45204__auto__;
}
break;
}
}catch (e48142){var ex__45205__auto__ = e48142;
var statearr_48143_49362 = state_48119;
(statearr_48143_49362[(2)] = ex__45205__auto__);


if(cljs.core.seq((state_48119[(4)]))){
var statearr_48145_49363 = state_48119;
(statearr_48145_49363[(1)] = cljs.core.first((state_48119[(4)])));

} else {
throw ex__45205__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49364 = state_48119;
state_48119 = G__49364;
continue;
} else {
return ret_value__45203__auto__;
}
break;
}
});
cljs$core$async$state_machine__45202__auto__ = function(state_48119){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45202__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45202__auto____1.call(this,state_48119);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45202__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45202__auto____0;
cljs$core$async$state_machine__45202__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45202__auto____1;
return cljs$core$async$state_machine__45202__auto__;
})()
})();
var state__45345__auto__ = (function (){var statearr_48148 = f__45344__auto__();
(statearr_48148[(6)] = c__45343__auto___49351);

return statearr_48148;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45345__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__48151 = arguments.length;
switch (G__48151) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__45343__auto___49366 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45344__auto__ = (function (){var switch__45201__auto__ = (function (state_48193){
var state_val_48194 = (state_48193[(1)]);
if((state_val_48194 === (7))){
var inst_48188 = (state_48193[(2)]);
var state_48193__$1 = state_48193;
var statearr_48199_49367 = state_48193__$1;
(statearr_48199_49367[(2)] = inst_48188);

(statearr_48199_49367[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48194 === (1))){
var inst_48155 = (new Array(n));
var inst_48156 = inst_48155;
var inst_48157 = (0);
var state_48193__$1 = (function (){var statearr_48201 = state_48193;
(statearr_48201[(7)] = inst_48157);

(statearr_48201[(8)] = inst_48156);

return statearr_48201;
})();
var statearr_48202_49368 = state_48193__$1;
(statearr_48202_49368[(2)] = null);

(statearr_48202_49368[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48194 === (4))){
var inst_48160 = (state_48193[(9)]);
var inst_48160__$1 = (state_48193[(2)]);
var inst_48161 = (inst_48160__$1 == null);
var inst_48162 = cljs.core.not(inst_48161);
var state_48193__$1 = (function (){var statearr_48203 = state_48193;
(statearr_48203[(9)] = inst_48160__$1);

return statearr_48203;
})();
if(inst_48162){
var statearr_48204_49369 = state_48193__$1;
(statearr_48204_49369[(1)] = (5));

} else {
var statearr_48205_49370 = state_48193__$1;
(statearr_48205_49370[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48194 === (15))){
var inst_48182 = (state_48193[(2)]);
var state_48193__$1 = state_48193;
var statearr_48206_49371 = state_48193__$1;
(statearr_48206_49371[(2)] = inst_48182);

(statearr_48206_49371[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48194 === (13))){
var state_48193__$1 = state_48193;
var statearr_48208_49372 = state_48193__$1;
(statearr_48208_49372[(2)] = null);

(statearr_48208_49372[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48194 === (6))){
var inst_48157 = (state_48193[(7)]);
var inst_48178 = (inst_48157 > (0));
var state_48193__$1 = state_48193;
if(cljs.core.truth_(inst_48178)){
var statearr_48209_49373 = state_48193__$1;
(statearr_48209_49373[(1)] = (12));

} else {
var statearr_48210_49374 = state_48193__$1;
(statearr_48210_49374[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48194 === (3))){
var inst_48190 = (state_48193[(2)]);
var state_48193__$1 = state_48193;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48193__$1,inst_48190);
} else {
if((state_val_48194 === (12))){
var inst_48156 = (state_48193[(8)]);
var inst_48180 = cljs.core.vec(inst_48156);
var state_48193__$1 = state_48193;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48193__$1,(15),out,inst_48180);
} else {
if((state_val_48194 === (2))){
var state_48193__$1 = state_48193;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48193__$1,(4),ch);
} else {
if((state_val_48194 === (11))){
var inst_48172 = (state_48193[(2)]);
var inst_48173 = (new Array(n));
var inst_48156 = inst_48173;
var inst_48157 = (0);
var state_48193__$1 = (function (){var statearr_48212 = state_48193;
(statearr_48212[(10)] = inst_48172);

(statearr_48212[(7)] = inst_48157);

(statearr_48212[(8)] = inst_48156);

return statearr_48212;
})();
var statearr_48213_49375 = state_48193__$1;
(statearr_48213_49375[(2)] = null);

(statearr_48213_49375[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48194 === (9))){
var inst_48156 = (state_48193[(8)]);
var inst_48170 = cljs.core.vec(inst_48156);
var state_48193__$1 = state_48193;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48193__$1,(11),out,inst_48170);
} else {
if((state_val_48194 === (5))){
var inst_48160 = (state_48193[(9)]);
var inst_48165 = (state_48193[(11)]);
var inst_48157 = (state_48193[(7)]);
var inst_48156 = (state_48193[(8)]);
var inst_48164 = (inst_48156[inst_48157] = inst_48160);
var inst_48165__$1 = (inst_48157 + (1));
var inst_48166 = (inst_48165__$1 < n);
var state_48193__$1 = (function (){var statearr_48216 = state_48193;
(statearr_48216[(12)] = inst_48164);

(statearr_48216[(11)] = inst_48165__$1);

return statearr_48216;
})();
if(cljs.core.truth_(inst_48166)){
var statearr_48217_49376 = state_48193__$1;
(statearr_48217_49376[(1)] = (8));

} else {
var statearr_48218_49377 = state_48193__$1;
(statearr_48218_49377[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48194 === (14))){
var inst_48185 = (state_48193[(2)]);
var inst_48186 = cljs.core.async.close_BANG_(out);
var state_48193__$1 = (function (){var statearr_48220 = state_48193;
(statearr_48220[(13)] = inst_48185);

return statearr_48220;
})();
var statearr_48221_49380 = state_48193__$1;
(statearr_48221_49380[(2)] = inst_48186);

(statearr_48221_49380[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48194 === (10))){
var inst_48176 = (state_48193[(2)]);
var state_48193__$1 = state_48193;
var statearr_48222_49381 = state_48193__$1;
(statearr_48222_49381[(2)] = inst_48176);

(statearr_48222_49381[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48194 === (8))){
var inst_48165 = (state_48193[(11)]);
var inst_48156 = (state_48193[(8)]);
var tmp48219 = inst_48156;
var inst_48156__$1 = tmp48219;
var inst_48157 = inst_48165;
var state_48193__$1 = (function (){var statearr_48224 = state_48193;
(statearr_48224[(7)] = inst_48157);

(statearr_48224[(8)] = inst_48156__$1);

return statearr_48224;
})();
var statearr_48225_49382 = state_48193__$1;
(statearr_48225_49382[(2)] = null);

(statearr_48225_49382[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__45202__auto__ = null;
var cljs$core$async$state_machine__45202__auto____0 = (function (){
var statearr_48226 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48226[(0)] = cljs$core$async$state_machine__45202__auto__);

(statearr_48226[(1)] = (1));

return statearr_48226;
});
var cljs$core$async$state_machine__45202__auto____1 = (function (state_48193){
while(true){
var ret_value__45203__auto__ = (function (){try{while(true){
var result__45204__auto__ = switch__45201__auto__(state_48193);
if(cljs.core.keyword_identical_QMARK_(result__45204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45204__auto__;
}
break;
}
}catch (e48227){var ex__45205__auto__ = e48227;
var statearr_48228_49383 = state_48193;
(statearr_48228_49383[(2)] = ex__45205__auto__);


if(cljs.core.seq((state_48193[(4)]))){
var statearr_48230_49385 = state_48193;
(statearr_48230_49385[(1)] = cljs.core.first((state_48193[(4)])));

} else {
throw ex__45205__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49396 = state_48193;
state_48193 = G__49396;
continue;
} else {
return ret_value__45203__auto__;
}
break;
}
});
cljs$core$async$state_machine__45202__auto__ = function(state_48193){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45202__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45202__auto____1.call(this,state_48193);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45202__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45202__auto____0;
cljs$core$async$state_machine__45202__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45202__auto____1;
return cljs$core$async$state_machine__45202__auto__;
})()
})();
var state__45345__auto__ = (function (){var statearr_48233 = f__45344__auto__();
(statearr_48233[(6)] = c__45343__auto___49366);

return statearr_48233;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45345__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__48238 = arguments.length;
switch (G__48238) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__45343__auto___49398 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45344__auto__ = (function (){var switch__45201__auto__ = (function (state_48300){
var state_val_48301 = (state_48300[(1)]);
if((state_val_48301 === (7))){
var inst_48291 = (state_48300[(2)]);
var state_48300__$1 = state_48300;
var statearr_48306_49399 = state_48300__$1;
(statearr_48306_49399[(2)] = inst_48291);

(statearr_48306_49399[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48301 === (1))){
var inst_48251 = [];
var inst_48252 = inst_48251;
var inst_48253 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_48300__$1 = (function (){var statearr_48307 = state_48300;
(statearr_48307[(7)] = inst_48252);

(statearr_48307[(8)] = inst_48253);

return statearr_48307;
})();
var statearr_48311_49401 = state_48300__$1;
(statearr_48311_49401[(2)] = null);

(statearr_48311_49401[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48301 === (4))){
var inst_48256 = (state_48300[(9)]);
var inst_48256__$1 = (state_48300[(2)]);
var inst_48257 = (inst_48256__$1 == null);
var inst_48258 = cljs.core.not(inst_48257);
var state_48300__$1 = (function (){var statearr_48315 = state_48300;
(statearr_48315[(9)] = inst_48256__$1);

return statearr_48315;
})();
if(inst_48258){
var statearr_48316_49402 = state_48300__$1;
(statearr_48316_49402[(1)] = (5));

} else {
var statearr_48317_49403 = state_48300__$1;
(statearr_48317_49403[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48301 === (15))){
var inst_48252 = (state_48300[(7)]);
var inst_48283 = cljs.core.vec(inst_48252);
var state_48300__$1 = state_48300;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48300__$1,(18),out,inst_48283);
} else {
if((state_val_48301 === (13))){
var inst_48278 = (state_48300[(2)]);
var state_48300__$1 = state_48300;
var statearr_48323_49405 = state_48300__$1;
(statearr_48323_49405[(2)] = inst_48278);

(statearr_48323_49405[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48301 === (6))){
var inst_48252 = (state_48300[(7)]);
var inst_48280 = inst_48252.length;
var inst_48281 = (inst_48280 > (0));
var state_48300__$1 = state_48300;
if(cljs.core.truth_(inst_48281)){
var statearr_48324_49406 = state_48300__$1;
(statearr_48324_49406[(1)] = (15));

} else {
var statearr_48325_49407 = state_48300__$1;
(statearr_48325_49407[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48301 === (17))){
var inst_48288 = (state_48300[(2)]);
var inst_48289 = cljs.core.async.close_BANG_(out);
var state_48300__$1 = (function (){var statearr_48329 = state_48300;
(statearr_48329[(10)] = inst_48288);

return statearr_48329;
})();
var statearr_48331_49408 = state_48300__$1;
(statearr_48331_49408[(2)] = inst_48289);

(statearr_48331_49408[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48301 === (3))){
var inst_48293 = (state_48300[(2)]);
var state_48300__$1 = state_48300;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48300__$1,inst_48293);
} else {
if((state_val_48301 === (12))){
var inst_48252 = (state_48300[(7)]);
var inst_48271 = cljs.core.vec(inst_48252);
var state_48300__$1 = state_48300;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48300__$1,(14),out,inst_48271);
} else {
if((state_val_48301 === (2))){
var state_48300__$1 = state_48300;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48300__$1,(4),ch);
} else {
if((state_val_48301 === (11))){
var inst_48260 = (state_48300[(11)]);
var inst_48256 = (state_48300[(9)]);
var inst_48252 = (state_48300[(7)]);
var inst_48268 = inst_48252.push(inst_48256);
var tmp48333 = inst_48252;
var inst_48252__$1 = tmp48333;
var inst_48253 = inst_48260;
var state_48300__$1 = (function (){var statearr_48334 = state_48300;
(statearr_48334[(12)] = inst_48268);

(statearr_48334[(7)] = inst_48252__$1);

(statearr_48334[(8)] = inst_48253);

return statearr_48334;
})();
var statearr_48338_49409 = state_48300__$1;
(statearr_48338_49409[(2)] = null);

(statearr_48338_49409[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48301 === (9))){
var inst_48253 = (state_48300[(8)]);
var inst_48264 = cljs.core.keyword_identical_QMARK_(inst_48253,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_48300__$1 = state_48300;
var statearr_48340_49410 = state_48300__$1;
(statearr_48340_49410[(2)] = inst_48264);

(statearr_48340_49410[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48301 === (5))){
var inst_48261 = (state_48300[(13)]);
var inst_48260 = (state_48300[(11)]);
var inst_48256 = (state_48300[(9)]);
var inst_48253 = (state_48300[(8)]);
var inst_48260__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_48256) : f.call(null,inst_48256));
var inst_48261__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_48260__$1,inst_48253);
var state_48300__$1 = (function (){var statearr_48341 = state_48300;
(statearr_48341[(13)] = inst_48261__$1);

(statearr_48341[(11)] = inst_48260__$1);

return statearr_48341;
})();
if(inst_48261__$1){
var statearr_48342_49411 = state_48300__$1;
(statearr_48342_49411[(1)] = (8));

} else {
var statearr_48343_49412 = state_48300__$1;
(statearr_48343_49412[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48301 === (14))){
var inst_48260 = (state_48300[(11)]);
var inst_48256 = (state_48300[(9)]);
var inst_48273 = (state_48300[(2)]);
var inst_48274 = [];
var inst_48275 = inst_48274.push(inst_48256);
var inst_48252 = inst_48274;
var inst_48253 = inst_48260;
var state_48300__$1 = (function (){var statearr_48344 = state_48300;
(statearr_48344[(14)] = inst_48275);

(statearr_48344[(7)] = inst_48252);

(statearr_48344[(8)] = inst_48253);

(statearr_48344[(15)] = inst_48273);

return statearr_48344;
})();
var statearr_48349_49413 = state_48300__$1;
(statearr_48349_49413[(2)] = null);

(statearr_48349_49413[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48301 === (16))){
var state_48300__$1 = state_48300;
var statearr_48354_49414 = state_48300__$1;
(statearr_48354_49414[(2)] = null);

(statearr_48354_49414[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48301 === (10))){
var inst_48266 = (state_48300[(2)]);
var state_48300__$1 = state_48300;
if(cljs.core.truth_(inst_48266)){
var statearr_48356_49415 = state_48300__$1;
(statearr_48356_49415[(1)] = (11));

} else {
var statearr_48357_49416 = state_48300__$1;
(statearr_48357_49416[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48301 === (18))){
var inst_48285 = (state_48300[(2)]);
var state_48300__$1 = state_48300;
var statearr_48358_49417 = state_48300__$1;
(statearr_48358_49417[(2)] = inst_48285);

(statearr_48358_49417[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48301 === (8))){
var inst_48261 = (state_48300[(13)]);
var state_48300__$1 = state_48300;
var statearr_48359_49418 = state_48300__$1;
(statearr_48359_49418[(2)] = inst_48261);

(statearr_48359_49418[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__45202__auto__ = null;
var cljs$core$async$state_machine__45202__auto____0 = (function (){
var statearr_48367 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48367[(0)] = cljs$core$async$state_machine__45202__auto__);

(statearr_48367[(1)] = (1));

return statearr_48367;
});
var cljs$core$async$state_machine__45202__auto____1 = (function (state_48300){
while(true){
var ret_value__45203__auto__ = (function (){try{while(true){
var result__45204__auto__ = switch__45201__auto__(state_48300);
if(cljs.core.keyword_identical_QMARK_(result__45204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45204__auto__;
}
break;
}
}catch (e48368){var ex__45205__auto__ = e48368;
var statearr_48370_49419 = state_48300;
(statearr_48370_49419[(2)] = ex__45205__auto__);


if(cljs.core.seq((state_48300[(4)]))){
var statearr_48371_49420 = state_48300;
(statearr_48371_49420[(1)] = cljs.core.first((state_48300[(4)])));

} else {
throw ex__45205__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49421 = state_48300;
state_48300 = G__49421;
continue;
} else {
return ret_value__45203__auto__;
}
break;
}
});
cljs$core$async$state_machine__45202__auto__ = function(state_48300){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45202__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45202__auto____1.call(this,state_48300);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45202__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45202__auto____0;
cljs$core$async$state_machine__45202__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45202__auto____1;
return cljs$core$async$state_machine__45202__auto__;
})()
})();
var state__45345__auto__ = (function (){var statearr_48379 = f__45344__auto__();
(statearr_48379[(6)] = c__45343__auto___49398);

return statearr_48379;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45345__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
