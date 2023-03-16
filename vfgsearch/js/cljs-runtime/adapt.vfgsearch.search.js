goog.provide('adapt.vfgsearch.search');
adapt.vfgsearch.search.corpus_tokens = (function adapt$vfgsearch$search$corpus_tokens(corpus){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.set.union,corpus);
});
adapt.vfgsearch.search.corpus_tokens_memo = cljs.core.memoize(adapt.vfgsearch.search.corpus_tokens);
adapt.vfgsearch.search.search_ = (function adapt$vfgsearch$search$search_(corpus,tagged_pages,tokenised_query){
var tagged_query = adapt.vfgsearch.wtagging.tf_idf(tokenised_query,corpus);
cljs.core.tap_GT_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tokenised-query","tokenised-query",852189504),tokenised_query,new cljs.core.Keyword(null,"corpusised-tokenised-query","corpusised-tokenised-query",336906262),tokenised_query,new cljs.core.Keyword(null,"tagged-query","tagged-query",-949841712),tagged_query], null));

return cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.last,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,tagged_page){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx,tagged_page,adapt.vfgsearch.similarity.cosine_similarity(tagged_query,tagged_page)], null);
}),tagged_pages)));
});
adapt.vfgsearch.search.search = (function adapt$vfgsearch$search$search(state,lang,tokenised_query){
if(cljs.core.map_QMARK_(state)){
} else {
throw (new Error("Assert failed: (map? state)"));
}

if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"en","en",88457073),null,new cljs.core.Keyword(null,"sv","sv",-170947079),null], null), null),lang)){
} else {
throw (new Error("Assert failed: (contains? #{:en :sv} lang)"));
}

if(cljs.core.coll_QMARK_(tokenised_query)){
} else {
throw (new Error("Assert failed: (coll? tokenised-query)"));
}

return adapt.vfgsearch.search.search_(new cljs.core.Keyword(null,"corpus","corpus",-2028151250).cljs$core$IFn$_invoke$arity$1((lang.cljs$core$IFn$_invoke$arity$1 ? lang.cljs$core$IFn$_invoke$arity$1(state) : lang.call(null,state))),new cljs.core.Keyword(null,"tagged-pages","tagged-pages",1853956969).cljs$core$IFn$_invoke$arity$1((lang.cljs$core$IFn$_invoke$arity$1 ? lang.cljs$core$IFn$_invoke$arity$1(state) : lang.call(null,state))),tokenised_query);
});

//# sourceMappingURL=adapt.vfgsearch.search.js.map
