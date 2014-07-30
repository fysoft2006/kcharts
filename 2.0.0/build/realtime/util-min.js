/*!build time : 2014-07-29 7:39:43 PM*/
KISSY.add("kg/kcharts/2.0.0/realtime/util",function(){function a(a,b){for(var c=Math.min.apply(Math,a),d=Math.max.apply(Math,a),e=d-c,f=[n,o,p,q,r],g=[],h=0;h<f.length;h++){var i=e/f[h];if(1>i)break;g.push(i-b)}var j,k=Math.min.apply(Math,g);j=k?g.indexOf(k):0;var l=["minute","hour","day","week","month"];return l[j]}function b(a){var b={minute:6e4,hour:36e5,day:864e5,week:6048e5,month:18144e6};return b[a]}function c(a,b){var c={"M+":a.getMonth()+1,"d+":a.getDate(),"h+":a.getHours(),"m+":a.getMinutes(),"s+":a.getSeconds(),"q+":Math.floor((a.getMonth()+3)/3),S:a.getMilliseconds()};/(y+)/.test(b)&&(b=b.replace(RegExp.$1,(a.getFullYear()+"").substr(4-RegExp.$1.length)));for(var d in c)new RegExp("("+d+")").test(b)&&(b=b.replace(RegExp.$1,1==RegExp.$1.length?c[d]:("00"+c[d]).substr((""+c[d]).length)));return b}function d(a,b){return Math.round(a*b)/b}function e(a,b,c){c>1?c=1:0>c&&(c=0);var d=a+(b-a)*c;return Math.round(100*d)/100}function f(a,b){var c=[b[0]-a[0],b[1]-a[1]];if(0===c[0])return c[1]>0?90:c[1]<0?-90:0;var d=E*Math.atan(c[1]/c[0]);return c[0]<0&&(d-=180),d}function g(a,b,c){c||(c={});var g,h,i,j,k="number"!=typeof c.scale?3:c.scale,l="number"!=typeof c.ratio?.5:c.ratio,m=1e6,n=f(a,b),o=Math.cos(n*D),p=Math.sin(n*D),q=e(a[0],b[0],l),r=e(a[1],b[1],l);return g=q+p*k,i=r-o*k,h=q-p*k,j=r+o*k,{x0:d(q,m),y0:d(r,m),x1:d(g,m),y1:d(i,m),x2:d(h,m),y2:d(j,m)}}function h(a,b){for(var c=a.name,d=!0,e=0,f=b.length;f>e;e++)if(b[e].name===c){var g=b[e].data;b[e].data=[].concat(g,a.data),d=!1;break}d&&b.push(a)}function i(a,b){var c=b&&a&&a[0];c&&c.setAttribute("shape-rendering","crispEdges")}function j(a){var b,c,d,e;d=e=0;for(var f=0,g=0,h=a.length;h>g;g++)a[g]&&"number"==typeof a[g].x&&(d+=a[g].x,e+=a[g].y,f++);return b=d/f,c=e/f,{x:b,y:c}}function k(a,b,c){return a<=b.length?b:k(a,c+b,c)}var l={},m=function(a){this.console},n=6e4,o=36e5,p=864e5,q=6048e5,r=18144e6;l.chooseUnit=a,l.unit2digts=b;var s=2.220446049250313e-16,t=1/Math.log(10),u=function(a,b,c,d,e,f){var g;return g=(s>d%f||s>f-d%f)&&0>=d&&e>=0?1:0,1-a/(b-1)-c+g},v=function(a,b,c){return 1-a/(b-1)-c+1},w=function(a,b,c,d){var e;return e=b-a,1-.5*(Math.pow(b-d,2)+Math.pow(a-c,2))/Math.pow(.1*e,2)},x=function(a,b,c){var d,e;return e=b-a,c>e?(d=(c-e)/2,1-.5*(Math.pow(d,2)+Math.pow(d,2))/Math.pow(.1*e,2)):1},y=function(a,b,c,d,e,f){var g,h;return g=(a-1)/(f-e),h=(b-1)/(Math.max(f,d)-Math.min(c,e)),2-Math.max(g/h,h/g)},z=function(a,b){return a>=b?2-(a-1)/(b-1):1},A=function(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U;if(null==d&&(d=!1),null==e&&(e=[1,5,2,2.5,4,3]),null==f&&(f={simplicity:.2,coverage:.25,density:.5,legibility:.05}),L=function(a,b,c,d){return f.simplicity*a+f.coverage*b+f.density*c+f.legibility*d},h=0,g=0,i=0,j=-2,o=s,T=a>b?[b,a]:[a,b],G=T[0],E=T[1],o>b-a)return[G,E,c,-2];for(B=e.length,q=-1;q<Number.POSITIVE_INFINITY;){for(J=R=0,U=B-1;U>=0?U>=R:R>=U;J=U>=0?++R:--R)if(I=e[J],M=v(J,B,q),L(M,1,1,1)<j)q=Number.POSITIVE_INFINITY;else for(r=2;r<Number.POSITIVE_INFINITY;){if(n=z(r,c),L(M,1,n,1)<j)r=Number.POSITIVE_INFINITY;else for(m=(E-G)/(r+1)/q/I,Q=Math.ceil(Math.log(m)*t);Q<Number.POSITIVE_INFINITY;)if(O=q*I*Math.pow(10,Q),l=x(G,E,O*(r-1)),L(M,l,n,1)<j)Q=Number.POSITIVE_INFINITY;else{if(H=Math.floor(E/O)*q-(r-1)*q,F=Math.ceil(G/O)*q,H>F);else for(N=S=H;F>=H?F>=S:S>=F;N=F>=H?++S:--S)D=N*(O/q),C=D+O*(r-1),(!d||G>=D&&C>=E)&&(K=u(J,B,q,D,C,O),k=w(G,E,D,C),p=y(r,c,G,E,D,C),A=1,P=L(K,k,p,A),P>j&&(j=P,h=D,g=C,i=O));Q+=1}r+=1}q+=1}return[h,g,i,j]};l.getProperUnit=A;var B=function(a,b,c){var d=A(a,b,c),e=d[0],f=d[1],g=d[2];b>f&&(f+=g),e>a&&(e-=g);for(var h=(f-e)/g,i=[],j=e,k=1;h>=k;k++)i.push(j),j+=g;return i.push(j),i};l.axis=B;var C=function(c,d){var e=Math.max.apply(Math,c),f=a(c,d);f||m("ERR OCCURED!");var g,h,i=b(f),j=c.map(function(a){return a/i});g=Math.min.apply(Math,j),h=Math.max.apply(Math,j);var k=B(g,h,d),l=Math.min.apply(Math,k)*i,n=Math.max.apply(Math,k)*i;return e>n&&(n+=i),k=k.map(function(a){return+new Date(a*i)}),{dates:k,unit:i,min:l,max:n}};l.getlabel=C,l.formatDate=c,l.roundToFixed=d;var D=Math.PI/180,E=180/Math.PI;return l.verticalLine=g,l.combineSeries=h,l.fixSVGLineStyle=i,l.averagePoints=j,l.pad=k,l});