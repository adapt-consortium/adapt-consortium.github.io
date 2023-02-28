goog.provide('adapt.vfgsearch.wtagging');
adapt.vfgsearch.wtagging.tokenised_text = (function adapt$vfgsearch$wtagging$tokenised_text(s,stopwords){
if(typeof s === 'string'){
} else {
throw (new Error("Assert failed: (string? s)"));
}

if(cljs.core.set_QMARK_(stopwords)){
} else {
throw (new Error("Assert failed: (set? stopwords)"));
}

return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(stopwords,clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.lower_case(s),/[^a-zäöüáéíóúãâêîôûàèìòùçñ]+/));
});
adapt.vfgsearch.wtagging.tokenised_page = (function adapt$vfgsearch$wtagging$tokenised_page(page,stopwords){
if(cljs.core.map_QMARK_(page)){
} else {
throw (new Error("Assert failed: (map? page)"));
}

var texts = cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(page,new cljs.core.Keyword(null,"href","href",-793805698))));
var text = clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",texts);
return adapt.vfgsearch.wtagging.tokenised_text(text,stopwords);
});
adapt.vfgsearch.wtagging.term_freqs = (function adapt$vfgsearch$wtagging$term_freqs(tokens){
if(cljs.core.sequential_QMARK_(tokens)){
} else {
throw (new Error("Assert failed: (sequential? tokens)"));
}

var freqs = cljs.core.frequencies(tokens);
var term_count = cljs.core.count(tokens);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__52137){
var vec__52138 = p__52137;
var term = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52138,(0),null);
var frequency = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52138,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [term,(frequency / term_count)], null);
}),freqs));
});
adapt.vfgsearch.wtagging.inverse_doc_freqs = (function adapt$vfgsearch$wtagging$inverse_doc_freqs(term,corpus){
if(typeof term === 'string'){
} else {
throw (new Error("Assert failed: (string? term)"));
}

if(cljs.core.sequential_QMARK_(corpus)){
} else {
throw (new Error("Assert failed: (sequential? corpus)"));
}

var docs_matching_term = cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__52141_SHARP_){
return (p1__52141_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__52141_SHARP_.cljs$core$IFn$_invoke$arity$1(term) : p1__52141_SHARP_.call(null,term));
}),corpus));
if((docs_matching_term > (0))){
return (Math.log((cljs.core.count(corpus) / docs_matching_term)) + (1));
} else {
return 1.0;
}
});
adapt.vfgsearch.wtagging.tf_idf = (function adapt$vfgsearch$wtagging$tf_idf(doc_tokens,corpus){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__52143){
var vec__52144 = p__52143;
var term = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52144,(0),null);
var freq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52144,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [term,(freq * adapt.vfgsearch.wtagging.inverse_doc_freqs(term,corpus))], null);
}),adapt.vfgsearch.wtagging.term_freqs(doc_tokens)));
});

//# sourceMappingURL=adapt.vfgsearch.wtagging.js.map
