goog.provide('adapt.vfgsearch.similarity');
adapt.vfgsearch.similarity.dot_product = (function adapt$vfgsearch$similarity$dot_product(document,another_document){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__52212){
var vec__52213 = p__52212;
var term = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52213,(0),null);
var tf_idf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52213,(1),null);
return (tf_idf * cljs.core.get.cljs$core$IFn$_invoke$arity$3(another_document,term,0.0));
}),document));
});
adapt.vfgsearch.similarity.magnitude = (function adapt$vfgsearch$similarity$magnitude(document){
return Math.sqrt(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__52217){
var vec__52218 = p__52217;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52218,(0),null);
var tf_idf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52218,(1),null);
return (tf_idf * tf_idf);
}),document)));
});
adapt.vfgsearch.similarity.cosine_similarity = (function adapt$vfgsearch$similarity$cosine_similarity(document,another_document){
var dot_p = adapt.vfgsearch.similarity.dot_product(document,another_document);
var document_magnitude = adapt.vfgsearch.similarity.magnitude(document);
var another_document_magnitude = adapt.vfgsearch.similarity.magnitude(cljs.core.select_keys(another_document,cljs.core.keys(document)));
var magnitude_product = (document_magnitude * another_document_magnitude);
if((magnitude_product === (0))){
return 0.0;
} else {
return (dot_p / magnitude_product);
}
});

//# sourceMappingURL=adapt.vfgsearch.similarity.js.map
