goog.provide('adapt.vfgsearch.app_sv');
if((typeof adapt !== 'undefined') && (typeof adapt.vfgsearch !== 'undefined') && (typeof adapt.vfgsearch.app_sv !== 'undefined') && (typeof adapt.vfgsearch.app_sv.search_words !== 'undefined')){
} else {
adapt.vfgsearch.app_sv.search_words = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
}
adapt.vfgsearch.app_sv.search_results = (function adapt$vfgsearch$app_sv$search_results(){
var query = cljs.core.deref(adapt.vfgsearch.app_sv.search_words);
var html_list = adapt.vfgsearch.ui.search_results(adapt.vfgsearch.data_sv.data,new cljs.core.Keyword(null,"sv","sv",-170947079),query);
var max_search_results_shown = (40);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var n = cljs.core.count(html_list);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-sm","span.text-sm",1152322665),n," matchar.",(((n > max_search_results_shown))?[" Visar den f\u00F6rsta ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(max_search_results_shown),"."].join(''):"")], null);
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),cljs.core.take.cljs$core$IFn$_invoke$arity$2(max_search_results_shown,html_list)], null)], null);
});
adapt.vfgsearch.app_sv.page = (function adapt$vfgsearch$app_sv$page(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container.mx-auto","div.container.mx-auto",-907582330),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.prose.prose-a:text-blue-600.prose-a:no-underline.hover:prose-a:underline.font-serif.antialiased.leading-snug","div.prose.prose-a:text-blue-600.prose-a:no-underline.hover:prose-a:underline.font-serif.antialiased.leading-snug",1316365855),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.text-xs.text-right.underline","p.text-xs.text-right.underline",-1573570631),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"app-en.html"], null),"\uD83C\uDDEC\uD83C\uDDE7 English language version"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"En demo av en enkel alternativ s\u00F6kning \u00F6ver Sveriges V\u00E4lf\u00E4rdsguides hemsida"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.text-sm","p.text-sm",-1988028746),"(Baserat p\u00E5 en term-frekvensanalys av ",cljs.core.count(new cljs.core.Keyword(null,"page-urls","page-urls",-85300276).cljs$core$IFn$_invoke$arity$1(adapt.vfgsearch.data_sv.data))," skrapade sidor.)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.text-xl.text-indigo-700.font-bold","p.text-xl.text-indigo-700.font-bold",497642635),"Skriv ord (med tre eller fler bokst\u00E4ver)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"S\u00F6k... (skriv ord med tre eller fler bokst\u00E4ver)",new cljs.core.Keyword(null,"initial-value","initial-value",470619381),cljs.core.deref(adapt.vfgsearch.app_sv.search_words),new cljs.core.Keyword(null,"class","class",-2030961996),"px-3 py-3 placeholder-blueGray-300 text-blueGray-500 relative bg-white bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:ring w-full",new cljs.core.Keyword(null,"on-input","on-input",-267523366),(function (p1__41987_SHARP_){
return cljs.core.reset_BANG_(adapt.vfgsearch.app_sv.search_words,p1__41987_SHARP_.target.value);
})], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [adapt.vfgsearch.app_sv.search_results], null)], null)], null);
});
adapt.vfgsearch.app_sv.start = (function adapt$vfgsearch$app_sv$start(){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [adapt.vfgsearch.app_sv.page], null),document.getElementById("app"));
});
adapt.vfgsearch.app_sv.init = (function adapt$vfgsearch$app_sv$init(){
return adapt.vfgsearch.app_sv.start();
});
goog.exportSymbol('adapt.vfgsearch.app_sv.init', adapt.vfgsearch.app_sv.init);
adapt.vfgsearch.app_sv.stop = (function adapt$vfgsearch$app_sv$stop(){
return console.log("stop");
});

//# sourceMappingURL=adapt.vfgsearch.app_sv.js.map
