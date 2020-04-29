(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["derivative0"],{1814:function(e,a,t){e.exports=t.p+"img/car.98324580.gif"},2140:function(e,a,t){"use strict";var i=t("9b14"),n=t.n(i);n.a},3141:function(e,a,t){e.exports=t.p+"img/frameCar1.0444517e.png"},"55dd":function(e,a,t){},"5cf9":function(e,a,t){e.exports=t.p+"img/frameCar0.2c1db5db.png"},"6ada":function(e,a,t){e.exports=t.p+"img/dsDt.1707ff7d.png"},7355:function(e,a,t){},7584:function(e,a,t){var i={"./car.gif":"1814","./carGraph.png":"f378","./dsDt.png":"6ada","./frameCar0.png":"5cf9","./frameCar1.png":"3141","./graphSlope.png":"cfe5","./oxymoron.png":"b0b4","./tangent.gif":"de99"};function n(e){var a=o(e);return t(a)}function o(e){if(!t.o(i,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return i[e]}n.keys=function(){return Object.keys(i)},n.resolve=o,e.exports=n,n.id="7584"},"88f7":function(e,a,t){"use strict";var i=t("d8e4"),n=t.n(i);n.a},"9b14":function(e,a,t){},"9d6c":function(e,a,t){"use strict";var i=t("b5ae"),n=t.n(i);n.a},a2ec:function(e,a,t){"use strict";var i=t("7355"),n=t.n(i);n.a},a6f0:function(e,a,t){"use strict";t.r(a);var i=function(){var e=this,a=e.$createElement,i=e._self._c||a;return i("MArticle",{attrs:{title:e.title}},[i("MQuote",[e._v(" Finché le leggi della matematica si riferiscono alla realtà, non sono certe, e finché sono certe, non si riferiscono alla realtà "),i("i",{staticStyle:{"white-space":"nowrap"}},[e._v("- Albert Einstein")])]),i("MParagraphTitle",[e._v("Il Tasso di cambiamento istantaneo")]),i("MParagraphImage",{attrs:{img:"oxymoron.png"}},[e._v(" Molto spesso viene detto che la derivata misura un "),i("em",[e._v("tasso di cambiamento istantaneo")]),e._v(". "),i("br"),e._v("Fermati un attimo, e rifletti su questa frase. Noti che c'è qualcosa che non torna? "),i("br"),e._v('Questa frase è un po\' paradossale: una cambiamento è qualcosa che accade fra due punti nel tempo, mentre "istantaneo" è qualcosa che accade in un momento specifico nel tempo. ')]),i("p",{staticClass:"pt-2"},[e._v("Immagina una macchina, che parte da un punto A ed arriva in un punto B:")]),i("v-img",{attrs:{src:t("1814"),"max-height":"350px"}}),i("p",[i("br"),e._v("Possiamo tracciarne il grafico mettendo la distanza sull'asse delle y e il tempo su quella delle x: ")]),i("v-img",{attrs:{src:t("f378")}}),i("p",[i("br"),e._v("Inialmente la curva è molto bassa, visto che la macchina è lenta a partire. Piano piano che la macchina accellera possiamo vedere che la distanza percorsa in un secondo diventa sempre più grande, fino a che, verso la fine, la macchina rallenta e la curva si appiatisce. La velocità, quindi, in questo grafico, è definita dall'inclinazione della curva. ")]),i("v-img",{attrs:{src:t("cfe5")}}),i("MParagraphTitle",[e._v("Ma che cos'è la velocità?")]),i("p",[e._v(' Fermiamoci un attimo a pensare al concetto di velocità. Intuitivamente tutti sapremmo rispondere alla domanda "quanto stiamo andando veloci in questo momento?" Sempre facendo riferimento all\'esempio dell automobile, basterebbe guardare il tachimetro. ')]),i("p",[e._v(' Il problema è che la velocità in un "momento" non ha senso. Immagina l\'animazione ad inizio pagina, messa in pausa in un momento a caso. Sapresti dire quanto sta andando veloce la macchina? ')]),i("v-img",{attrs:{src:t("5cf9")}}),i("br"),i("p",[e._v("Credo proprio che la risposta sia no. Questo perchè la velocità, proprio da definizione, è il rapporto fra due variazioni:")]),i("p",{staticClass:"math text-center",attrs:{id:"velocityFormula"}},[e._v(e._s(e.velocityFormula))]),i("p",[e._v("Quindi per calcolarla, ci serviranno due punti distinti nello spazio e nel tempo, per esempio:")]),i("v-img",{attrs:{src:t("3141")}}),i("p",[i("br"),e._v("Visto che ci servono "),i("b",[e._v("due")]),e._v(" momenti distinti, come facciamo a calcolare la velocità in un "),i("b",[e._v("istante")]),e._v(" di tempo? ")]),i("p",[e._v(' Per prima cosa rappresentiamo questo concetto di "variazione" sul grafico, indicando i due termini come '),i("i",[e._v("ds")]),e._v(" e "),i("i",[e._v("dt")]),e._v(" (variazione per la distanza e per il tempo). Di conseguenza possiamo immaginare il calcolo della velocità come $$ds \\over dt$$ (che, come accennato all'inizio, equivale a calcolare l'inclinazione della curva): "),i("v-img",{attrs:{src:t("6ada")}})],1),i("p",[e._v(" Visto che la curva è rappresentata da una funzione possiamo ricavarci $$v(t)$$ basata solo su $$dt$$: ")]),i("p",{staticClass:"math text-center",attrs:{id:"velocityFormulaGraph"}},[e._v(e._s(e.velocityFormulaGraph))]),i("p",[e._v(" $$s(t+dt) - s(t)$$ equivale al \"pezzetino\" blu dell'immagine, ovvero $$ds$$. $$s(t)$$ è il valore della funzione (s) per un valore t (nel caso dell'immagine, 3) mentre $$s(t+dt)$$ è un secondo valore preso dopo un intervallo di tempo $$dt$$. Per ottenere la velocità quindi ci basterà dividere questo valore per la differenza di tempo "),i("i",[e._v("dt")]),e._v(' (ovvero il "pezzettino" giallo dell\'immagine). ')]),i("p",[e._v(" Ritornando un attimo all'esempio precendente, il tachimetro per calcolare la velocità fa esattmente questo: prende un valore molto piccolo di $$dt$$ ad esempio 1 secondo, 100 millisecondi, ecc. e periodicamente misura la distanza che la macchina ha percorso. Quindi per essere precisi, il tachimetro non misurerà mai la velocità in un istante, ma solamente in un intervallo di tempo "),i("b",[e._v("molto")]),e._v(" piccolo. ")]),i("p",{staticClass:"relevant"},[e._v(" La derivata alla fine non è altro che questo: al posto di prendere un valore specifico e molto piccolo di $$dt$$ (appunto come 1s, 100ms, ...), si pone $$dt$$ "),i("i",[e._v("tendente")]),e._v(" a 0: $$\\lim_{dt \\to 0} {s(t + dt) - s(t) \\over dt}$$ ")]),i("v-img",{attrs:{src:t("de99")}}),i("p",[i("br"),e._v("Possiamo notare anche un'altra cosa interessante: tendendo a 0 i due punti del grafico si andranno a sovrapporre e quindi il rapporto $$ds \\over dt$$ (che equivale al coefficente angolare della retta fra i due punti) sarà uguale al coefficente angolare della retta tangente in un punto del grafico! ")]),i("p",[e._v(" Quindi al posto di considerare una derivata come un tasso di variazione istantaneo, sarebbe meglio pensarla come la migliore approssimazione possibile del tasso di variazione "),i("i",[e._v("intorno")]),e._v(" ad un punto (dove questo intorno sarà infinitesimamente piccolo). ")]),i("p",{staticClass:"relevant"},[e._v(" PS: Prima di concludere vorrei fare un appunto sulla terminologia: nella matematica qualsiasi cosa scritta come $$dy \\over dx$$ (ovvero una qualsiasi variazione di y su una qualsiasi variazione di x) è considerata derivata, ed è quindi implicito che i valori tenderanno a 0. ")]),i("p",[e._v(" Concludendo, vorrei ricollegarmi alla citazione di Einstein d'inizio pagina. La derivata, come spero tu abbia capito, è un concetto puramente matematico, proprio perchè nella realtà il concetto di limite è impensabile: nel mondo reale avremo sempre bisogno di un valore di $$dt$$, anche se infinitesimamente piccolo, dovrà comunque essere un valore definito. Nonostante le derivate siano un concetto puramente teorico sono un'ottimo strumento per descrivere la realtà. ")])],1)},n=[],o=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"MArticle"},[t("MBanner",{attrs:{title:e.title,showBackgroundArt:!1}}),t("v-container",{attrs:{id:"container"}},[e._t("default")],2)],1)},r=[],c=t("b8fc"),s={name:"MArticle",components:{MBanner:c["a"]},props:{title:{type:String,required:!0}}},l=s,p=(t("88f7"),t("2877")),d=t("6544"),u=t.n(d),m=t("a523"),v=Object(p["a"])(l,o,r,!1,null,"31f11cf0",null),f=v.exports;u()(v,{VContainer:m["a"]});var g=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("p",{staticClass:"MQuote"},[e._t("default")],2)},h=[],$={},_=$,b=(t("2140"),t("a2ec"),Object(p["a"])(_,g,h,!1,null,"206ab25a",null)),z=b.exports,q=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("h2",{class:{thin:e.thin}},[e._t("default")],2)])},x=[],y={name:"MParagraphTitle",props:{thin:{type:Boolean,default:!1}}},M=y,C=(t("aac3"),Object(p["a"])(M,q,x,!1,null,"48ee8fbe",null)),w=C.exports,P=function(){var e=this,a=e.$createElement,i=e._self._c||a;return i("v-row",{staticClass:"MParagraphImage",attrs:{justify:"center",align:"center"}},[i("v-col",{attrs:{cols:"12",md:"6",order:!e.invert||e.$vuetify.breakpoint.smAndDown?"first":"last"}},[i("v-img",{staticClass:"mx-auto",attrs:{src:t("7584")("./"+e.img),width:e.imageWidth}})],1),i("v-col",{attrs:{cols:"12",md:"6"}},[i("p",[e._v(" Molto spesso viene detto che la derivata misura un "),i("em",[e._v("tasso di cambiamento istantaneo")]),e._v(". "),i("br"),e._v("Fermati un attimo, e rifletti su questa frase. Noti che c'è qualcosa che non torna? "),i("br"),e._v('Questa frase è un po\' paradossale: una cambiamento è qualcosa che accade fra due punti nel tempo, mentre "istantaneo" è qualcosa che accade in un momento specifico nel tempo. ')])])],1)},I=[],F={name:"MParagraphImage",props:{img:{type:String,required:!0},invert:{type:Boolean,default:!1}},computed:{imageWidth:function(){return this.$vuetify.breakpoint.smOnly?"80%":"100%"}}},O=F,A=t("62ad"),E=t("adda"),Q=t("0fd9"),V=Object(p["a"])(O,P,I,!1,null,"0c7613d7",null),k=V.exports;u()(V,{VCol:A["a"],VImg:E["a"],VRow:Q["a"]});var S=t("c8aa"),j=t.n(S),D={name:"IntegralArticle1",components:{MArticle:f,MQuote:z,MParagraphTitle:w,MParagraphImage:k},props:["id","title"],data:function(){return{velocityFormula:"$$v(t) = {Variazione\\ del\\ tempo \\over Variazione\\ della\\ distanza}$$",velocityFormulaGraph:"$$v(t) = {s(t + dt) - s(t) \\over dt}$$"}},created:function(){this.$nextTick((function(){j.a.renderMathInDocument()}))}},T=D,B=(t("9d6c"),Object(p["a"])(T,i,n,!1,null,"61ac1e42",null));a["default"]=B.exports;u()(B,{VImg:E["a"]})},aac3:function(e,a,t){"use strict";var i=t("55dd"),n=t.n(i);n.a},b0b4:function(e,a,t){e.exports=t.p+"img/oxymoron.21b414ba.png"},b5ae:function(e,a,t){},cfe5:function(e,a,t){e.exports=t.p+"img/graphSlope.4bfae44d.png"},d8e4:function(e,a,t){},de99:function(e,a,t){e.exports=t.p+"img/tangent.20659275.gif"},f378:function(e,a,t){e.exports=t.p+"img/carGraph.e2472f03.png"}}]);
//# sourceMappingURL=derivative0.80494981.js.map