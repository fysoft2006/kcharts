/*!build time : 2014-07-29 7:39:43 PM*/
KISSY.use("kg/kcharts/2.0.0/datetime/index,base,node,event,dd,dd/plugin/constrain",function(a,b,c,d,e,f,g){function h(a){return a.replace("px","")/1}function i(a,c){k("#J_Chart").html("");for(var d=new b({renderTo:"#J_Chart",comparable:!0,canvasAttr:{x:40,y:5,width:670,height:230},areas:{isShow:!0},legend:{isShow:!1},xLabels:{isShow:!1},tip:{template:function(a){var b="";for(var c in a.datas)b+="<h1 style='color:"+a.datas[c].color+"'>"+j(a.datas[c].x)+"</h1>",b+="<span >"+a.datas[c].y+"</span>";return b+" "}},line:{attr:{"stroke-width":1},hoverAttr:{"stroke-width":1}},yAxis:{isShow:!1},yLabels:{css:{marginLeft:-10}},xAxis:{text:c},xGrids:{isShow:!1},yGrids:{isShow:!0},series:a}),e=d.getHtmlPaper(),f=d._pointsX.length,g=Math.round(f/5),h=0;f>h;h++)h%g==Math.round(g/2)&&e.text(d._pointsX[h].x,d._pointsX[h].y,j(d._pointsX[h].number))}function j(a){var b=new Date(a);return[b.getMonth()+1,"/",b.getDate(),"/",(b.getFullYear()+"").substr(2,2)].join("")}var k=a.all,l=c.extend({initializer:function(){this._cfg=this.userConfig,this.render()},render:function(){var c=this,d=c._cfg,e=(d.renderTo,{canvasAttr:{x:40,y:5,width:670,height:30},autoRender:!1,comparable:!0,areas:{isShow:!0},legend:{isShow:!1},xLabels:{isShow:!1},yLabels:{isShow:!1},line:{attr:{"stroke-width":1},hoverAttr:{"stroke-width":1}},xGrids:{isShow:!1},yGrids:{isShow:!1},series:c.get("series")}),f=a.mix(e,d,void 0,void 0,!0);f.renderTo="#J_Range";var g=new b(f);g.render(),c.range=g,c.renderRange()},renderRange:function(){var a=this,b=a._cfg,c=b.range||[0,1],d='<svg xmls="http://www.w3.org/2000/svg" version="1.1"><g style="cursor:e-resize;" zIndex="4" transform="translate(5,10)">	<rect rx="3" ry="3" fill="#FFF" x="-4.5" y="0.5" width="8" height="15" stroke="#666" stroke-width="1"></rect>	<path fill="#FFF" d="M -1.5 4 L -1.5 12 M 0.5 4 L 0.5 12" stroke="#666" stroke-width="1"></path></g></svg>',e='<div class="kc-range-inner"><div class="kc-range-block kc-range-block-left"></div><div class="kc-range-block kc-range-block-right"></div><div class="kc-range-btn">'+d+'</div><div class="kc-range-btn">'+d+"</div></div>",i=k(e).css({height:40}).prependTo(k("#J_Range"));a.$range=i,a.$btns=k(".kc-range-btn",i),a.$blocks=k(".kc-range-block",i);var j=k(a.$btns[0]),l=k(a.$btns[1]),m=(a.$blocks,k(a.$btns[0]).width());k(a.$btns[0]).css({left:i.width()*c[0]+"px"}),k(a.$btns[1]).css({left:i.width()*c[1]+"px"}),k(a.$blocks[0]).width(i.width()*c[0]+j.width()/2).css({left:0}),k(a.$blocks[1]).width(i.width()*(1-c[1])-j.width()/2).css({right:0});var n=h(j.css("left"))/k("#J_Range").width(),o=(h(l.css("left"))+m/1)/k("#J_Range").width();a.range=[n,o],a.onDragEnd();var p=new g({constrain:"#J_Range"}),q=new f.Draggable({node:a.$btns[0],move:1,plugins:[p]});q.on("drag",a.onDrag,a),q.on("dragend",a.onDragEnd,a);var r=new f.Draggable({node:a.$btns[1],move:1,plugins:[p]});r.on("drag",a.onDrag,a),r.on("dragend",a.onDragEnd,a)},onDrag:function(){var a=this,b=k(a.$btns[0]),c=k(a.$btns[1]),d=a.$blocks,e=k(a.$btns[0]).width();if(h(b.css("left"))>h(c.css("left"))){var f=k(a.$btns[0]);a.$btns[0]=k(a.$btns[1]),a.$btns[1]=f}var g=k(d[0]),i=k(d[1]);g.width(h(b.css("left"))+e/2),i.width(k("#J_Range").width()-h(c.css("left"))-e/2);var j=h(b.css("left"))/k("#J_Range").width(),l=(h(c.css("left"))+e/1)/k("#J_Range").width();a.range=[j,l]},onDragEnd:function(){var a=this,b=a._cfg,c=a.range,d=b.series[0].data,e=d.length,f=Math.round(e*c[0]),g=Math.round(e*c[1]),h=[];for(var i in b.series)h.push({text:b.series[i].text||"",data:b.series[i].data.slice(f,g)});var j=b.xAxis.text.slice(f,g);a.fire("afterRange",{range:a.range,series:h,xAxis:j})}}),m=[],n=function(){for(var a=[],b=0,c=data.length;c>b;b++)a.push(data[b][1]),m.push(data[b][0]);return a}(),o=new l({renderTo:"#demo1",series:[{data:n}],xAxis:{text:m},range:[.2,.6]});o.on("afterRange",function(a){a.range;i(a.series,a.xAxis)}),o.onDragEnd()});