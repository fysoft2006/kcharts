/*!build time : 2014-07-29 7:39:43 PM*/
KISSY.add("kg/kcharts/2.0.0/tools/color/index",function(a){function b(a,b){var c=parseInt(a.substring(1,3),16),d=parseInt(a.substring(3,5),16),e=parseInt(a.substring(5,7),16);c=parseInt(c*(100+b)/100),d=parseInt(d*(100+b)/100),e=parseInt(e*(100+b)/100),c=255>c?c:255,d=255>d?d:255,e=255>e?e:255;var f=1==c.toString(16).length?"0"+c.toString(16):c.toString(16),g=1==d.toString(16).length?"0"+d.toString(16):d.toString(16),h=1==e.toString(16).length?"0"+e.toString(16):e.toString(16);return"#"+f+g+h}var c=function(a){this.init(a)};return a.augment(c,{init:function(a){var b=a&&a.themeCls||"ks-chart-default";this._colors=this.colorCfg[b]||this.colorCfg["ks-chart-default"]},colorCfg:{"ks-chart-default":[{DEFAULT:"#1f77b4",HOVER:"#1f77b4"},{DEFAULT:"#aec7e8",HOVER:"#aec7e8"},{DEFAULT:"#98df8a",HOVER:"#98df8a"},{DEFAULT:"#ff7f0e",HOVER:"#ff7f0e"},{DEFAULT:"#2ca02c",HOVER:"#2ca02c"},{DEFAULT:"#ffbb78",HOVER:"#ffbb78"},{DEFAULT:"#d62728",HOVER:"#d62728"},{DEFAULT:"#ff9896",HOVER:"#ff9896"}],"ks-chart-analytiks":[{DEFAULT:"#00adef",HOVER:"#1176ba"},{DEFAULT:"#8cc63e",HOVER:"#066839"},{DEFAULT:"#f7941d",HOVER:"#ef3e38"},{DEFAULT:"#ee217e",HOVER:"#cd7db2"},{DEFAULT:"#603814",HOVER:"#8a5e3b"},{DEFAULT:"#662e91",HOVER:"#492062"},{DEFAULT:"#bf1e2d",HOVER:"#ec1d23"}],"ks-chart-rainbow":[{DEFAULT:"#4573a7",HOVER:"#5E8BC0"},{DEFAULT:"#aa4644",HOVER:"#C35F5C"},{DEFAULT:"#89a54e",HOVER:"#A2BE67"},{DEFAULT:"#806a9b",HOVER:"#9982B4"},{DEFAULT:"#3e96ae",HOVER:"#56AFC7"},{DEFAULT:"#d9853f",HOVER:"#F49D56"},{DEFAULT:"#808080",HOVER:"#A2A2A2"},{DEFAULT:"#188AD7",HOVER:"#299BE8"},{DEFAULT:"#90902C",HOVER:"#B7B738"},{DEFAULT:"#AFE65D",HOVER:"#C5ED89"}]},removeAllColors:function(){return this._colors=[],this._colors},setColor:function(a){var c=10;a&&(a.DEFAULT&&a.HOVER||(a.DEFAULT&&!a.HOVER?a.HOVER=b(a.DEFAULT,c):a={DEFAULT:a,HOVER:b(a,c)})),this._colors.push(a)},getColor:function(a){return this._colors[a%this._colors.length]},getColors:function(){var a,b=0,c=this,d=[];arguments[1]?(b=arguments[0],a=arguments[1]):a=arguments[0];for(var e=b;a-b>e;e++)d.push(c.getColor(e));return d}}),c});