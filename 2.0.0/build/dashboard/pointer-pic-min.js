/*!build time : 2014-07-29 7:39:43 PM*/
KISSY.add("kg/kcharts/2.0.0/dashboard/pointer",function(a,b){function c(b,c,d,e,f,g){var h,i,j,k,l,m,n=Math.asin(e/f);g=a.mix({fill:"#000",stroke:"#000"},g,!0,["stroke","stroke-width","fill"]),h=c,i=d-f;var o=e*Math.cos(n);j=c+o,k=d-e*e/f,l=c-o,m=d-e*e/f;var p=["M",h,i,"L",j,k,"A",e,e,0,1,1,l,m,"Z"],q=b.path(p.join(","));return q.attr(g),q}var d,e={pointTo:function(a,b){var d=this.get("paper"),e=this,f=this.get("dashboard"),g=f.get("cx"),h=f.get("cy"),i=f.get("pointer")||{},j=i.cx||0,k=i.cy||0,l=g+j,m=h+k,n=(f.get("width"),f.get("height"),{a:function(f){var g=["r",a-90,l,m].join(",");e.pointer||(e.pointer=c(d,l,m,f.r||5,f.R||80,f)),a&&e.pointer.animate({transform:g},b.ms,b.easing,b.callback)},b:function(){}}),o=i.theme&&i.theme.name&&n[i.theme.name]||n.a;o&&o(i.theme)}};b.extend?d=b.extend(e):(d=function(a){this.set(a),this.userConfig=a},a.extend(d,b,e));return d},{requires:["base"]}),KISSY.add("kg/kcharts/2.0.0/dashboard/pointer-pic",function(a,b){function c(){c.superclass.constructor.apply(this,arguments);var a=this.get("pointer"),b=(this.get("paper"),this.get("dashboard")),d=this.get("cy"),e=this.get("cx"),f=b.get("cx"),g=b.get("cy");this.pointer=a,this.cx=d,this.cy=e,this.paperCx=f,this.paperCy=g}return a.extend(c,b,{pointTo:function(a,b){var c=["r",a,this.paperCx,this.paperCy].join(",");return b?this.pointer.animate({transform:c},b.ms,b.easing,b.callback):this.pointer.transform(c),this}}),c},{requires:["./pointer"]});