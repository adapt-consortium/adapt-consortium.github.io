goog.provide('adapt.vfgsearch.ui');
adapt.vfgsearch.ui.word_spec = /[^a-zäöüáéíóúãâêîôûàèìòùçñA-ZÄÖÜÁÉÍÓÚÃÂÊÎÔÛÀÈÌÒÙÇÑ]+/;
adapt.vfgsearch.ui.emphasis = (function adapt$vfgsearch$ui$emphasis(s,targets){
var xs = cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",clojure.string.split.cljs$core$IFn$_invoke$arity$2(s,adapt.vfgsearch.ui.word_spec));
var targets_SINGLEQUOTE_ = cljs.core.set(targets);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__41986_SHARP_){
var s_SINGLEQUOTE_ = clojure.string.lower_case(p1__41986_SHARP_);
if(cljs.core.contains_QMARK_(targets_SINGLEQUOTE_,s_SINGLEQUOTE_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.font-semibold","span.font-semibold",-1752897535),s_SINGLEQUOTE_], null);
} else {
return s_SINGLEQUOTE_;
}
}),xs);
});
adapt.vfgsearch.ui.html_search_result = (function adapt$vfgsearch$ui$html_search_result(augmented_search_result,urls,tokenised_query){
var map__41988 = augmented_search_result;
var map__41988__$1 = cljs.core.__destructure_map(map__41988);
var page_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41988__$1,new cljs.core.Keyword(null,"page-idx","page-idx",-1616470722));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41988__$1,new cljs.core.Keyword(null,"title","title",636505583));
var region = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41988__$1,new cljs.core.Keyword(null,"region","region",270415120));
var matching_tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41988__$1,new cljs.core.Keyword(null,"matching-tags","matching-tags",1822958604));
var extracts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41988__$1,new cljs.core.Keyword(null,"extracts","extracts",62185788));
var found_tokens = cljs.core.keys(matching_tags);
var query_tokens = cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.count,tokenised_query));
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(urls,page_idx)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(title)," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(region)].join('')], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-gray-400","span.text-gray-400",-220662368)," / "], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (extract){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-gray-600","span.text-gray-600",-825179194),adapt.vfgsearch.ui.emphasis(extract,found_tokens)], null);
}),extracts)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-gray-400.text-sm","span.text-gray-400.text-sm",1863034849),"Matching: "], null),cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (found_token){
var query_token = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__41987_SHARP_){
return clojure.string.includes_QMARK_(found_token,p1__41987_SHARP_);
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
var G__42011 = inner_acc_SINGLEQUOTE_;
var G__42012 = cljs.core.rest(remaining_tokens);
inner_acc = G__42011;
remaining_tokens = G__42012;
continue;
}
break;
}
})();
var G__42013 = acc_SINGLEQUOTE_;
var G__42014 = cljs.core.rest(remaining_xs);
acc = G__42013;
remaining_xs = G__42014;
continue;
}
break;
}
});
adapt.vfgsearch.ui.augmented_search_result = (function adapt$vfgsearch$ui$augmented_search_result(search_result,query_tokens,pages){
var vec__41989 = search_result;
var page_idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41989,(0),null);
var tagged_page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41989,(1),null);
var _scores = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41989,(2),null);
var matching_tags = cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.select_keys(tagged_page,query_tokens)));
var page = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(pages,page_idx);
var extracts_ = adapt.vfgsearch.ui.extracts(query_tokens,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten(cljs.core.vals(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(page,new cljs.core.Keyword(null,"href","href",-793805698))))));
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"page-idx","page-idx",-1616470722),page_idx,new cljs.core.Keyword(null,"title","title",636505583),cljs.core.last(new cljs.core.Keyword(null,"h1","h1",-1896887462).cljs$core$IFn$_invoke$arity$1(page)),new cljs.core.Keyword(null,"region","region",270415120),(function (){var s = cljs.core.first(new cljs.core.Keyword(null,"region","region",270415120).cljs$core$IFn$_invoke$arity$1(page));
var colon_idx = clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(s,": ");
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,((2) + colon_idx));
})(),new cljs.core.Keyword(null,"matching-tags","matching-tags",1822958604),matching_tags,new cljs.core.Keyword(null,"extracts","extracts",62185788),extracts_], null);
});
adapt.vfgsearch.ui.contains_token_QMARK_ = (function adapt$vfgsearch$ui$contains_token_QMARK_(search_result,query_tokens){
var vec__41992 = search_result;
var _page_idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41992,(0),null);
var tagged_page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41992,(1),null);
var _scores = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41992,(2),null);
return (cljs.core.count(cljs.core.select_keys(tagged_page,query_tokens)) > (0));
});
adapt.vfgsearch.ui.search_results = (function adapt$vfgsearch$ui$search_results(state,lang,query){
if(cljs.core.map_QMARK_(state)){
} else {
throw (new Error("Assert failed: (map? state)"));
}

if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"en","en",88457073),null,new cljs.core.Keyword(null,"sv","sv",-170947079),null], null), null),lang)){
} else {
throw (new Error("Assert failed: (contains? #{:en :sv} lang)"));
}

if(typeof query === 'string'){
} else {
throw (new Error("Assert failed: (string? query)"));
}

var tokenised_query = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__41995_SHARP_){
return (cljs.core.count(p1__41995_SHARP_) >= (3));
}),clojure.string.split.cljs$core$IFn$_invoke$arity$2(query,adapt.vfgsearch.ui.word_spec));
var lc_tokenised_query = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.lower_case,tokenised_query);
var corpusised_tokenised_query = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((function (){var iter__4652__auto__ = (function adapt$vfgsearch$ui$search_results_$_iter__41999(s__42000){
return (new cljs.core.LazySeq(null,(function (){
var s__42000__$1 = s__42000;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__42000__$1);
if(temp__5804__auto__){
var s__42000__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__42000__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__42000__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__42002 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__42001 = (0);
while(true){
if((i__42001 < size__4651__auto__)){
var corpus_token = cljs.core._nth(c__4650__auto__,i__42001);
cljs.core.chunk_append(b__42002,(function (){var iter__4652__auto__ = ((function (i__42001,corpus_token,c__4650__auto__,size__4651__auto__,b__42002,s__42000__$2,temp__5804__auto__,tokenised_query,lc_tokenised_query){
return (function adapt$vfgsearch$ui$search_results_$_iter__41999_$_iter__42003(s__42004){
return (new cljs.core.LazySeq(null,((function (i__42001,corpus_token,c__4650__auto__,size__4651__auto__,b__42002,s__42000__$2,temp__5804__auto__,tokenised_query,lc_tokenised_query){
return (function (){
var s__42004__$1 = s__42004;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__42004__$1);
if(temp__5804__auto____$1){
var s__42004__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__42004__$2)){
var c__4650__auto____$1 = cljs.core.chunk_first(s__42004__$2);
var size__4651__auto____$1 = cljs.core.count(c__4650__auto____$1);
var b__42006 = cljs.core.chunk_buffer(size__4651__auto____$1);
if((function (){var i__42005 = (0);
while(true){
if((i__42005 < size__4651__auto____$1)){
var query_token = cljs.core._nth(c__4650__auto____$1,i__42005);
cljs.core.chunk_append(b__42006,((clojure.string.includes_QMARK_(corpus_token,query_token))?corpus_token:null));

var G__42015 = (i__42005 + (1));
i__42005 = G__42015;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42006),adapt$vfgsearch$ui$search_results_$_iter__41999_$_iter__42003(cljs.core.chunk_rest(s__42004__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42006),null);
}
} else {
var query_token = cljs.core.first(s__42004__$2);
return cljs.core.cons(((clojure.string.includes_QMARK_(corpus_token,query_token))?corpus_token:null),adapt$vfgsearch$ui$search_results_$_iter__41999_$_iter__42003(cljs.core.rest(s__42004__$2)));
}
} else {
return null;
}
break;
}
});})(i__42001,corpus_token,c__4650__auto__,size__4651__auto__,b__42002,s__42000__$2,temp__5804__auto__,tokenised_query,lc_tokenised_query))
,null,null));
});})(i__42001,corpus_token,c__4650__auto__,size__4651__auto__,b__42002,s__42000__$2,temp__5804__auto__,tokenised_query,lc_tokenised_query))
;
return iter__4652__auto__(lc_tokenised_query);
})());

var G__42016 = (i__42001 + (1));
i__42001 = G__42016;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42002),adapt$vfgsearch$ui$search_results_$_iter__41999(cljs.core.chunk_rest(s__42000__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42002),null);
}
} else {
var corpus_token = cljs.core.first(s__42000__$2);
return cljs.core.cons((function (){var iter__4652__auto__ = ((function (corpus_token,s__42000__$2,temp__5804__auto__,tokenised_query,lc_tokenised_query){
return (function adapt$vfgsearch$ui$search_results_$_iter__41999_$_iter__42007(s__42008){
return (new cljs.core.LazySeq(null,(function (){
var s__42008__$1 = s__42008;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__42008__$1);
if(temp__5804__auto____$1){
var s__42008__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__42008__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__42008__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__42010 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__42009 = (0);
while(true){
if((i__42009 < size__4651__auto__)){
var query_token = cljs.core._nth(c__4650__auto__,i__42009);
cljs.core.chunk_append(b__42010,((clojure.string.includes_QMARK_(corpus_token,query_token))?corpus_token:null));

var G__42017 = (i__42009 + (1));
i__42009 = G__42017;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42010),adapt$vfgsearch$ui$search_results_$_iter__41999_$_iter__42007(cljs.core.chunk_rest(s__42008__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42010),null);
}
} else {
var query_token = cljs.core.first(s__42008__$2);
return cljs.core.cons(((clojure.string.includes_QMARK_(corpus_token,query_token))?corpus_token:null),adapt$vfgsearch$ui$search_results_$_iter__41999_$_iter__42007(cljs.core.rest(s__42008__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(corpus_token,s__42000__$2,temp__5804__auto__,tokenised_query,lc_tokenised_query))
;
return iter__4652__auto__(lc_tokenised_query);
})(),adapt$vfgsearch$ui$search_results_$_iter__41999(cljs.core.rest(s__42000__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(adapt.vfgsearch.search.corpus_tokens_memo(new cljs.core.Keyword(null,"corpus","corpus",-2028151250).cljs$core$IFn$_invoke$arity$1((lang.cljs$core$IFn$_invoke$arity$1 ? lang.cljs$core$IFn$_invoke$arity$1(state) : lang.call(null,state)))));
})())));
var html_list = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__41998_SHARP_){
return adapt.vfgsearch.ui.html_search_result(p1__41998_SHARP_,new cljs.core.Keyword(null,"page-urls","page-urls",-85300276).cljs$core$IFn$_invoke$arity$1(state),tokenised_query);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__41997_SHARP_){
return adapt.vfgsearch.ui.augmented_search_result(p1__41997_SHARP_,corpusised_tokenised_query,new cljs.core.Keyword(null,"pages","pages",-285406513).cljs$core$IFn$_invoke$arity$1((lang.cljs$core$IFn$_invoke$arity$1 ? lang.cljs$core$IFn$_invoke$arity$1(state) : lang.call(null,state))));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__41996_SHARP_){
return adapt.vfgsearch.ui.contains_token_QMARK_(p1__41996_SHARP_,corpusised_tokenised_query);
}),adapt.vfgsearch.search.search(state,lang,corpusised_tokenised_query))));
return html_list;
});

//# sourceMappingURL=adapt.vfgsearch.ui.js.map
