goog.provide('adapt.vfgsearch.app');
if((typeof adapt !== 'undefined') && (typeof adapt.vfgsearch !== 'undefined') && (typeof adapt.vfgsearch.app !== 'undefined') && (typeof adapt.vfgsearch.app.search_words !== 'undefined')){
} else {
adapt.vfgsearch.app.search_words = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
}
adapt.vfgsearch.app.search_results = (function adapt$vfgsearch$app$search_results(){
var query = cljs.core.deref(adapt.vfgsearch.app.search_words);
var html_list = adapt.vfgsearch.ui.search_results(adapt.vfgsearch.data.data,query);
var max_search_results_shown = (40);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var n = cljs.core.count(html_list);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-sm","span.text-sm",1152322665),n," matches.",(((n > max_search_results_shown))?[" Displaying the first ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(max_search_results_shown),"."].join(''):"")], null);
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),cljs.core.take.cljs$core$IFn$_invoke$arity$2(max_search_results_shown,html_list)], null)], null);
});
adapt.vfgsearch.app.page = (function adapt$vfgsearch$app$page(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container.mx-auto","div.container.mx-auto",-907582330),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.prose.prose-a:text-blue-600.prose-a:no-underline.hover:prose-a:underline.font-serif.antialiased.leading-snug","div.prose.prose-a:text-blue-600.prose-a:no-underline.hover:prose-a:underline.font-serif.antialiased.leading-snug",1316365855),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"A demo of a simple alternative search over over Sweden's Welfare Guide website"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.text-sm","p.text-sm",-1988028746),"(Based on a term-frequency analysis of the English translation of ",cljs.core.count(new cljs.core.Keyword(null,"page-urls","page-urls",-85300276).cljs$core$IFn$_invoke$arity$1(adapt.vfgsearch.data.data))," scraped pages.)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.text-xl.text-indigo-700.font-bold","p.text-xl.text-indigo-700.font-bold",497642635),"Type words (of three or more letters)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Search... (type words of three or more letters)",new cljs.core.Keyword(null,"initial-value","initial-value",470619381),cljs.core.deref(adapt.vfgsearch.app.search_words),new cljs.core.Keyword(null,"class","class",-2030961996),"px-3 py-3 placeholder-blueGray-300 text-blueGray-500 relative bg-white bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:ring w-full",new cljs.core.Keyword(null,"on-input","on-input",-267523366),(function (p1__43304_SHARP_){
return cljs.core.reset_BANG_(adapt.vfgsearch.app.search_words,p1__43304_SHARP_.target.value);
})], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [adapt.vfgsearch.app.search_results], null)], null)], null);
});
adapt.vfgsearch.app.start = (function adapt$vfgsearch$app$start(){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [adapt.vfgsearch.app.page], null),document.getElementById("app"));
});
adapt.vfgsearch.app.init = (function adapt$vfgsearch$app$init(){
return adapt.vfgsearch.app.start();
});
goog.exportSymbol('adapt.vfgsearch.app.init', adapt.vfgsearch.app.init);
adapt.vfgsearch.app.stop = (function adapt$vfgsearch$app$stop(){
return console.log("stop");
});

//# sourceMappingURL=adapt.vfgsearch.app.js.map
