goog.provide('adapt.vfgsearch.ui');
adapt.vfgsearch.ui.word_spec = /[^a-zäöüáéíóúãâêîôûàèìòùçñA-ZÄÖÜÁÉÍÓÚÃÂÊÎÔÛÀÈÌÒÙÇÑ]+/;
adapt.vfgsearch.ui.emphasis = (function adapt$vfgsearch$ui$emphasis(s,targets){
var xs = cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",clojure.string.split.cljs$core$IFn$_invoke$arity$2(s,adapt.vfgsearch.ui.word_spec));
var targets_SINGLEQUOTE_ = cljs.core.set(targets);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__43274_SHARP_){
var s_SINGLEQUOTE_ = clojure.string.lower_case(p1__43274_SHARP_);
if(cljs.core.contains_QMARK_(targets_SINGLEQUOTE_,s_SINGLEQUOTE_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.font-semibold","span.font-semibold",-1752897535),s_SINGLEQUOTE_], null);
} else {
return s_SINGLEQUOTE_;
}
}),xs);
});
adapt.vfgsearch.ui.html_search_result = (function adapt$vfgsearch$ui$html_search_result(augmented_search_result,urls,tokenised_query){
var map__43276 = augmented_search_result;
var map__43276__$1 = cljs.core.__destructure_map(map__43276);
var page_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43276__$1,new cljs.core.Keyword(null,"page-idx","page-idx",-1616470722));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43276__$1,new cljs.core.Keyword(null,"title","title",636505583));
var region = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43276__$1,new cljs.core.Keyword(null,"region","region",270415120));
var matching_tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43276__$1,new cljs.core.Keyword(null,"matching-tags","matching-tags",1822958604));
var extracts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43276__$1,new cljs.core.Keyword(null,"extracts","extracts",62185788));
var found_tokens = cljs.core.keys(matching_tags);
var query_tokens = cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.count,tokenised_query));
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(urls,page_idx)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(title)," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(region)].join('')], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-gray-400","span.text-gray-400",-220662368)," / "], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (extract){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-gray-600","span.text-gray-600",-825179194),adapt.vfgsearch.ui.emphasis(extract,found_tokens)], null);
}),extracts)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-gray-400.text-sm","span.text-gray-400.text-sm",1863034849),"Matching: "], null),cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (found_token){
var query_token = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__43275_SHARP_){
return clojure.string.includes_QMARK_(found_token,p1__43275_SHARP_);
}),query_tokens));
var ix1 = clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(found_token,query_token);
var ix2 = (ix1 + cljs.core.count(query_token));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-gray-500.text-sm","span.text-gray-500.text-sm",921719094),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(found_token,(0),ix1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.font-extrabold.text-indigo-700","span.font-extrabold.text-indigo-700",-731033556),query_token], null),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(found_token,ix2)], null);
}),found_tokens))], null);
});
adapt.vfgsearch.ui.extract = (function adapt$vfgsearch$ui$extract(text,idx_in_text,token_size){
var n = (48);
var from_incl = (function (){var x__4336__auto__ = (idx_in_text - n);
var y__4337__auto__ = (0);
return ((x__4336__auto__ > y__4337__auto__) ? x__4336__auto__ : y__4337__auto__);
})();
var to_excl = (function (){var x__4339__auto__ = ((idx_in_text + token_size) + n);
var y__4340__auto__ = cljs.core.count(text);
return ((x__4339__auto__ < y__4340__auto__) ? x__4339__auto__ : y__4340__auto__);
})();
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(text,from_incl,to_excl);
});
adapt.vfgsearch.ui.extracts = (function adapt$vfgsearch$ui$extracts(tokens,xs){
var tokens_SINGLEQUOTE_ = cljs.core.vec(tokens);
var acc = cljs.core.PersistentHashSet.EMPTY;
var remaining_xs = xs;
while(true){
if(((cljs.core.empty_QMARK_(remaining_xs)) || ((cljs.core.count(acc) >= (6))))){
return acc;
} else {
var text = cljs.core.first(remaining_xs);
var acc_SINGLEQUOTE_ = (function (){var inner_acc = acc;
var remaining_tokens = tokens_SINGLEQUOTE_;
while(true){
if(((cljs.core.empty_QMARK_(remaining_tokens)) || ((cljs.core.count(inner_acc) >= (6))))){
return inner_acc;
} else {
var token = cljs.core.first(remaining_tokens);
var idx_in_text = clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(clojure.string.lower_case(text),token);
var inner_acc_SINGLEQUOTE_ = (cljs.core.truth_(idx_in_text)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inner_acc,adapt.vfgsearch.ui.extract(text,idx_in_text,cljs.core.count(token))):inner_acc);
var G__43299 = inner_acc_SINGLEQUOTE_;
var G__43300 = cljs.core.rest(remaining_tokens);
inner_acc = G__43299;
remaining_tokens = G__43300;
continue;
}
break;
}
})();
var G__43301 = acc_SINGLEQUOTE_;
var G__43302 = cljs.core.rest(remaining_xs);
acc = G__43301;
remaining_xs = G__43302;
continue;
}
break;
}
});
adapt.vfgsearch.ui.augmented_search_result = (function adapt$vfgsearch$ui$augmented_search_result(search_result,query_tokens,pages){
var vec__43277 = search_result;
var page_idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43277,(0),null);
var tagged_page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43277,(1),null);
var _scores = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43277,(2),null);
var matching_tags = cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.select_keys(tagged_page,query_tokens)));
var page = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(pages,page_idx);
var extracts_ = adapt.vfgsearch.ui.extracts(query_tokens,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten(cljs.core.vals(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(page,new cljs.core.Keyword(null,"href","href",-793805698))))));
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"page-idx","page-idx",-1616470722),page_idx,new cljs.core.Keyword(null,"title","title",636505583),cljs.core.last(new cljs.core.Keyword(null,"h1","h1",-1896887462).cljs$core$IFn$_invoke$arity$1(page)),new cljs.core.Keyword(null,"region","region",270415120),(function (){var s = cljs.core.first(new cljs.core.Keyword(null,"region","region",270415120).cljs$core$IFn$_invoke$arity$1(page));
var colon_idx = clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(s,": ");
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,((2) + colon_idx));
})(),new cljs.core.Keyword(null,"matching-tags","matching-tags",1822958604),matching_tags,new cljs.core.Keyword(null,"extracts","extracts",62185788),extracts_], null);
});
adapt.vfgsearch.ui.contains_token_QMARK_ = (function adapt$vfgsearch$ui$contains_token_QMARK_(search_result,query_tokens){
var vec__43280 = search_result;
var _page_idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43280,(0),null);
var tagged_page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43280,(1),null);
var _scores = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43280,(2),null);
return (cljs.core.count(cljs.core.select_keys(tagged_page,query_tokens)) > (0));
});
adapt.vfgsearch.ui.search_results = (function adapt$vfgsearch$ui$search_results(state,query){
var tokenised_query = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__43283_SHARP_){
return (cljs.core.count(p1__43283_SHARP_) >= (3));
}),clojure.string.split.cljs$core$IFn$_invoke$arity$2(query,adapt.vfgsearch.ui.word_spec));
var lc_tokenised_query = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.lower_case,tokenised_query);
var corpusised_tokenised_query = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((function (){var iter__4652__auto__ = (function adapt$vfgsearch$ui$search_results_$_iter__43287(s__43288){
return (new cljs.core.LazySeq(null,(function (){
var s__43288__$1 = s__43288;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__43288__$1);
if(temp__5804__auto__){
var s__43288__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__43288__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__43288__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__43290 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__43289 = (0);
while(true){
if((i__43289 < size__4651__auto__)){
var corpus_token = cljs.core._nth(c__4650__auto__,i__43289);
cljs.core.chunk_append(b__43290,(function (){var iter__4652__auto__ = ((function (i__43289,corpus_token,c__4650__auto__,size__4651__auto__,b__43290,s__43288__$2,temp__5804__auto__,tokenised_query,lc_tokenised_query){
return (function adapt$vfgsearch$ui$search_results_$_iter__43287_$_iter__43291(s__43292){
return (new cljs.core.LazySeq(null,((function (i__43289,corpus_token,c__4650__auto__,size__4651__auto__,b__43290,s__43288__$2,temp__5804__auto__,tokenised_query,lc_tokenised_query){
return (function (){
var s__43292__$1 = s__43292;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__43292__$1);
if(temp__5804__auto____$1){
var s__43292__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__43292__$2)){
var c__4650__auto____$1 = cljs.core.chunk_first(s__43292__$2);
var size__4651__auto____$1 = cljs.core.count(c__4650__auto____$1);
var b__43294 = cljs.core.chunk_buffer(size__4651__auto____$1);
if((function (){var i__43293 = (0);
while(true){
if((i__43293 < size__4651__auto____$1)){
var query_token = cljs.core._nth(c__4650__auto____$1,i__43293);
cljs.core.chunk_append(b__43294,((clojure.string.includes_QMARK_(corpus_token,query_token))?corpus_token:null));

var G__43303 = (i__43293 + (1));
i__43293 = G__43303;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__43294),adapt$vfgsearch$ui$search_results_$_iter__43287_$_iter__43291(cljs.core.chunk_rest(s__43292__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__43294),null);
}
} else {
var query_token = cljs.core.first(s__43292__$2);
return cljs.core.cons(((clojure.string.includes_QMARK_(corpus_token,query_token))?corpus_token:null),adapt$vfgsearch$ui$search_results_$_iter__43287_$_iter__43291(cljs.core.rest(s__43292__$2)));
}
} else {
return null;
}
break;
}
});})(i__43289,corpus_token,c__4650__auto__,size__4651__auto__,b__43290,s__43288__$2,temp__5804__auto__,tokenised_query,lc_tokenised_query))
,null,null));
});})(i__43289,corpus_token,c__4650__auto__,size__4651__auto__,b__43290,s__43288__$2,temp__5804__auto__,tokenised_query,lc_tokenised_query))
;
return iter__4652__auto__(lc_tokenised_query);
})());

var G__43305 = (i__43289 + (1));
i__43289 = G__43305;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__43290),adapt$vfgsearch$ui$search_results_$_iter__43287(cljs.core.chunk_rest(s__43288__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__43290),null);
}
} else {
var corpus_token = cljs.core.first(s__43288__$2);
return cljs.core.cons((function (){var iter__4652__auto__ = ((function (corpus_token,s__43288__$2,temp__5804__auto__,tokenised_query,lc_tokenised_query){
return (function adapt$vfgsearch$ui$search_results_$_iter__43287_$_iter__43295(s__43296){
return (new cljs.core.LazySeq(null,(function (){
var s__43296__$1 = s__43296;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__43296__$1);
if(temp__5804__auto____$1){
var s__43296__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__43296__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__43296__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__43298 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__43297 = (0);
while(true){
if((i__43297 < size__4651__auto__)){
var query_token = cljs.core._nth(c__4650__auto__,i__43297);
cljs.core.chunk_append(b__43298,((clojure.string.includes_QMARK_(corpus_token,query_token))?corpus_token:null));

var G__43306 = (i__43297 + (1));
i__43297 = G__43306;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__43298),adapt$vfgsearch$ui$search_results_$_iter__43287_$_iter__43295(cljs.core.chunk_rest(s__43296__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__43298),null);
}
} else {
var query_token = cljs.core.first(s__43296__$2);
return cljs.core.cons(((clojure.string.includes_QMARK_(corpus_token,query_token))?corpus_token:null),adapt$vfgsearch$ui$search_results_$_iter__43287_$_iter__43295(cljs.core.rest(s__43296__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(corpus_token,s__43288__$2,temp__5804__auto__,tokenised_query,lc_tokenised_query))
;
return iter__4652__auto__(lc_tokenised_query);
})(),adapt$vfgsearch$ui$search_results_$_iter__43287(cljs.core.rest(s__43288__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(adapt.vfgsearch.search.corpus_tokens_memo(new cljs.core.Keyword(null,"corpus","corpus",-2028151250).cljs$core$IFn$_invoke$arity$1(state)));
})())));
var html_list = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__43286_SHARP_){
return adapt.vfgsearch.ui.html_search_result(p1__43286_SHARP_,new cljs.core.Keyword(null,"page-urls","page-urls",-85300276).cljs$core$IFn$_invoke$arity$1(state),tokenised_query);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__43285_SHARP_){
return adapt.vfgsearch.ui.augmented_search_result(p1__43285_SHARP_,corpusised_tokenised_query,new cljs.core.Keyword(null,"en-pages","en-pages",-108680639).cljs$core$IFn$_invoke$arity$1(state));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__43284_SHARP_){
return adapt.vfgsearch.ui.contains_token_QMARK_(p1__43284_SHARP_,corpusised_tokenised_query);
}),adapt.vfgsearch.search.search.cljs$core$IFn$_invoke$arity$2(state,corpusised_tokenised_query))));
return html_list;
});

//# sourceMappingURL=adapt.vfgsearch.ui.js.map
