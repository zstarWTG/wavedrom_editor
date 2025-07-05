import{r as d,_ as u,a as p,o as r,b as n,i as m,f as a,u as t,E as i,P as s,j as c,d as v,h as w}from"./PicViewer-O43tUuEI.js";const C=d('{ signal: [{ name: "Alfa", wave: "01.zx=ud.23.456789" }] }'),x=d(`{ signal: [
  { name: "pclk", wave: 'p.......' },
  { name: "Pclk", wave: 'P.......' },
  { name: "nclk", wave: 'n.......' },
  { name: "Nclk", wave: 'N.......' },
  {},
  { name: 'clk0', wave: 'phnlPHNL' },
  { name: 'clk1', wave: 'xhlhLHl.' },
  { name: 'clk2', wave: 'hpHplnLn' },
  { name: 'clk3', wave: 'nhNhplPl' },
  { name: 'clk4', wave: 'xlh.L.Hx' },
]}`),g=d(`{ signal: [
  { name: "clk",  wave: "P......" },
  { name: "bus",  wave: "x.==.=x", data: ["head", "body", "tail", "data"] },
  { name: "wire", wave: "0.1..0." }
]}`),f=d(`{ signal: [
  { name: "clk",         wave: "p.....|..." },
  { name: "Data",        wave: "x.345x|=.x", data: ["head", "body", "tail", "data"] },
  { name: "Request",     wave: "0.1..0|1.0" },
  {},
  { name: "Acknowledge", wave: "1.....|01." }
]}`),b=d(`{ signal: [
  {    name: 'clk',   wave: 'p..Pp..P'},
  ['Master',
    ['ctrl',
      {name: 'write', wave: '01.0....'},
      {name: 'read',  wave: '0...1..0'}
    ],
    {  name: 'addr',  wave: 'x3.x4..x', data: 'A1 A2'},
    {  name: 'wdata', wave: 'x3.x....', data: 'D1'   },
  ],
  {},
  ['Slave',
    ['ctrl',
      {name: 'ack',   wave: 'x01x0.1x'},
    ],
    {  name: 'rdata', wave: 'x.....4x', data: 'Q2'},
  ]
]}`),k=d(`{ signal: [
  { name: "CK",   wave: "P.......",                                              period: 2  },
  { name: "CMD",  wave: "x.3x=x4x=x=x=x=x", data: "RAS NOP CAS NOP NOP NOP NOP", phase: 0.5 },
  { name: "ADDR", wave: "x.=x..=x........", data: "ROW COL",                     phase: 0.5 },
  { name: "DQS",  wave: "z.......0.1010z." },
  { name: "DQ",   wave: "z.........5555z.", data: "D0 D1 D2 D3" }
]}`),h=d(`{ signal: [
  { name: "clk",     wave: "p...." },
  { name: "Data",    wave: "x345x",  data: ["head", "body", "tail"] },
  { name: "Request", wave: "01..0" }
  ],
  config: { hscale: 1 }
}`),D=d(`{ signal: [
  { name: "clk",     wave: "p...." },
  { name: "Data",    wave: "x345x",  data: ["head", "body", "tail"] },
  { name: "Request", wave: "01..0" }
  ],
  config: { hscale: 2 }
}`),P=d(`{ signal: [
  { name: "clk",     wave: "p...." },
  { name: "Data",    wave: "x345x",  data: ["head", "body", "tail"] },
  { name: "Request", wave: "01..0" }
  ],
  config: { hscale: 3 }
}`),y=d(`{signal: [
  {name:'clk',         wave: 'p....' },
  {name:'Data',        wave: 'x345x', data: 'a b c' },
  {name:'Request',     wave: '01..0' }
],
 head:{
   text:'WaveDrom example',
   tick:0,
   every:2
 },
 foot:{
   text:'Figure 100',
   tock:9
 },
}`),N=d(`{signal: [
  {name:'clk', wave: 'p.....PPPPp....' },
  {name:'dat', wave: 'x....2345x.....', data: 'a b c d' },
  {name:'req', wave: '0....1...0.....' }
],
head: {text:
  ['tspan',
    ['tspan', {class:'error h1'}, 'error '],
    ['tspan', {class:'warning h2'}, 'warning '],
    ['tspan', {class:'info h3'}, 'info '],
    ['tspan', {class:'success h4'}, 'success '],
    ['tspan', {class:'muted h5'}, 'muted '],
    ['tspan', {class:'h6'}, 'h6 '],
    'default ',
    ['tspan', {fill:'pink', 'font-weight':'bold', 'font-style':'italic'}, 'pink-bold-italic']
  ]
},
foot: {text:
  ['tspan', 'E=mc',
    ['tspan', {dy:'-5'}, '2'],
    ['tspan', {dy: '5'}, '. '],
    ['tspan', {'font-size':'25'}, 'B '],
    ['tspan', {'text-decoration':'overline'},'over '],
    ['tspan', {'text-decoration':'underline'},'under '],
    ['tspan', {'baseline-shift':'sub'}, 'sub '],
    ['tspan', {'baseline-shift':'super'}, 'super ']
  ],tock:-5
}
}`),U=d(`{ signal: [
  { name: 'A', wave: '01........0....',  node: '.a........j' },
  { name: 'B', wave: '0.1.......0.1..',  node: '..b.......i' },
  { name: 'C', wave: '0..1....0...1..',  node: '...c....h..' },
  { name: 'D', wave: '0...1..0.....1.',  node: '....d..g...' },
  { name: 'E', wave: '0....10.......1',  node: '.....ef....' }
  ],
  edge: [
    'a~b t1', 'c-~a t2', 'c-~>d time 3', 'd~-e',
    'e~>f', 'f->g', 'g-~>h', 'h~>i some text', 'h~->j'
  ]
}`),A=d(`{ signal: [
  { name: 'A', wave: '01..0..',  node: '.a..e..' },
  { name: 'B', wave: '0.1..0.',  node: '..b..d.', phase:0.5 },
  { name: 'C', wave: '0..1..0',  node: '...c..f' },
  {                              node: '...g..h' },
  {                              node: '...I..J',  phase:0.5 },
  { name: 'D', wave: '0..1..0',  phase:0.5 }
  ],
  edge: [
    'b-|a t1', 'a-|c t2', 'b-|-c t3', 'c-|->e t4', 'e-|>f more text',
    'e|->d t6', 'c-g', 'f-h', 'g<->h 3 ms', 'I+J 5 ms'
  ]
}`),V=d(`(function (bits, ticks) {
  var i, t, gray, state, data = [], arr = [];
  for (i = 0; i < bits; i++) {
    arr.push({name: i + '', wave: ''});
    state = 1;
    for (t = 0; t < ticks; t++) {
      data.push(t + '');
      gray = (((t >> 1) ^ t) >> i) & 1;
      arr[i].wave += (gray === state) ? '.' : gray + '';
      state = gray;
    }
  }
  arr.unshift('gray');
  return {signal: [
    {name: 'bin', wave: '='.repeat(ticks), data: data}, arr
  ]};
})(5, 16)`),S=d(""),R=d(""),O=d(""),q=d(""),z=d(""),B=d(""),E=d(""),H=d(""),L=d(""),G=d(""),o={codeContent1:C,codeContent2:x,codeContent3:g,codeContent4:f,codeContent5:b,codeContent6:k,codeContent7:h,codeContent8:D,codeContent9:P,codeContent10:y,codeContent11:N,codeContent12:U,codeContent13:A,codeContent14:V,codeContent15:S,codeContent16:R,codeContent17:O,codeContent18:q,codeContent19:z,codeContent20:B,codeContent21:E,codeContent22:H,codeContent23:L,codeContent24:G},W={class:"multi-editor-container"},j={class:"editor-pic-pair"},I={class:"editor-pic-pair"},J={class:"editor-pic-pair"},M={class:"editor-pic-pair"},Q={class:"editor-pic-pair"},F={class:"editor-pic-pair"},K={class:"editor-pic-pair"},T={class:"editor-pic-pair"},X={class:"editor-pic-pair"},Y={class:"editor-pic-pair"},Z={class:"editor-pic-pair"},$={class:"editor-pic-pair"},_={class:"editor-pic-pair"},ee={class:"editor-pic-pair"},ne={__name:"Help",setup(oe){return(ae,e)=>(r(),p("div",W,[e[16]||(e[16]=n("h1",null,"wavedrom 编程指南",-1)),e[17]||(e[17]=n("h2",null,"1.简单例子",-1)),e[18]||(e[18]=n("p",null," wavedrom语法简单，下面给出一个最简单的例子，可以看到各种样式。 ",-1)),n("div",j,[a(i,{content:t(o).codeContent1.value,"onUpdate:content":e[0]||(e[0]=l=>t(o).codeContent1.value=l)},null,8,["content"]),e[14]||(e[14]=n("p",null,' "wave" 字符串中的每个字符代表一个时间周期。符号 "." 将前一个状态延续一个更多周期。 这是它的样子: ',-1)),a(s,{code:t(o).codeContent1.value},null,8,["code"])]),e[19]||(e[19]=n("h2",null," 2.时钟信号 ",-1)),e[20]||(e[20]=n("p",null," 数字时钟是一种特殊的信号。它在每个时间周期内变化两次，并且可以具有正极性或负极性。它还可以在工作边缘上有一个可选的标记。时钟的块可以与其他信号状态混合，以创建时钟门控效果。以下是代码： ",-1)),n("div",I,[a(i,{content:t(o).codeContent2.value,"onUpdate:content":e[1]||(e[1]=l=>t(o).codeContent2.value=l)},null,8,["content"]),a(s,{code:t(o).codeContent2.value},null,8,["code"])]),e[21]||(e[21]=n("h2",null," 3.内容标签 ",-1)),e[22]||(e[22]=n("p",null,' 使用"="可使多位信号从 "data" 数组中获取标签。 ',-1)),n("div",J,[a(i,{content:t(o).codeContent3.value,"onUpdate:content":e[2]||(e[2]=l=>t(o).codeContent3.value=l)},null,8,["content"]),a(s,{code:t(o).codeContent3.value},null,8,["code"])]),e[23]||(e[23]=n("h2",null," 4.间断波形 ",-1)),e[24]||(e[24]=n("p",null,' 使用"|"可使信号波形断开。 ',-1)),n("div",M,[a(i,{content:t(o).codeContent4.value,"onUpdate:content":e[3]||(e[3]=l=>t(o).codeContent4.value=l)},null,8,["content"]),a(s,{code:t(o).codeContent4.value},null,8,["code"])]),e[25]||(e[25]=n("h2",null," 5.命名及嵌套命名 ",-1)),e[26]||(e[26]=n("p",null," 信号波形可以被组合成命名组，这些组以数组的形式表示。 ['组名', {...}, {...}, ...] 数组的第一个元素是组的名称。 组可以嵌套。 ",-1)),n("div",Q,[a(i,{content:t(o).codeContent5.value,"onUpdate:content":e[4]||(e[4]=l=>t(o).codeContent5.value=l)},null,8,["content"]),a(s,{code:t(o).codeContent5.value},null,8,["code"])]),e[27]||(e[27]=n("h2",null," 6.周期和相位 ",-1)),e[28]||(e[28]=n("p",null,' "period" 和 "phase" 参数可用于调整每个波形。 ',-1)),n("div",F,[a(i,{content:t(o).codeContent6.value,"onUpdate:content":e[5]||(e[5]=l=>t(o).codeContent6.value=l)},null,8,["content"]),a(s,{code:t(o).codeContent6.value},null,8,["code"])]),e[29]||(e[29]=n("h2",null," 7.config属性 ",-1)),e[30]||(e[30]=n("p",null," config:{...} 属性控制渲染的不同方面。 ",-1)),e[31]||(e[31]=n("h3",null," 7.1 hscale ",-1)),e[32]||(e[32]=n("p",null," config:{hscale:#} 属性控制图表的水平比例。用户可以输入任何大于 0 的整数。 ",-1)),n("div",K,[a(i,{content:t(o).codeContent7.value,"onUpdate:content":e[6]||(e[6]=l=>t(o).codeContent7.value=l)},null,8,["content"]),e[15]||(e[15]=n("h3",null," hscale=1（默认） ",-1)),a(s,{code:t(o).codeContent7.value},null,8,["code"])]),e[33]||(e[33]=n("h3",null," hscale=2 ",-1)),n("div",T,[c("",!0),a(s,{code:t(o).codeContent8.value},null,8,["code"])]),e[34]||(e[34]=n("h3",null," hscale=3 ",-1)),n("div",X,[c("",!0),a(s,{code:t(o).codeContent9.value},null,8,["code"])]),e[35]||(e[35]=m("<h3 data-v-58989a9b> 7.2 skin </h3><p data-v-58989a9b> config:{skin:&#39;...&#39;} 属性可用于选择 WaveDrom 皮肤 。 该属性仅在页面上的第一个时序图内部生效。 WaveDrom 编辑器 包含两种标准皮肤：&#39;default&#39; 和 &#39;narrow&#39; </p><h3 data-v-58989a9b> 7.3 head/foot </h3><p data-v-58989a9b> head:{...} 和 foot:{...} 属性定义了时序图上方和下方的区域内容。 </p><h3 data-v-58989a9b> tick </h3><p data-v-58989a9b> 添加与时序图垂直标记对齐的时间线标签。 </p><h3 data-v-58989a9b> tock </h3><p data-v-58989a9b> 在垂直标记之间添加时间线标签。 </p><h3 data-v-58989a9b> text </h3><p data-v-58989a9b> 添加标题/说明文字。 </p><h3 data-v-58989a9b> every </h3><p data-v-58989a9b> 每 N 个周期只渲染一次刻度和滴答声。 </p>",12)),n("div",Y,[a(i,{content:t(o).codeContent10.value,"onUpdate:content":e[9]||(e[9]=l=>t(o).codeContent10.value=l)},null,8,["content"]),a(s,{code:t(o).codeContent10.value},null,8,["code"])]),e[36]||(e[36]=n("h3",null," head/foot ",-1)),e[37]||(e[37]=n("p",null,[v(" 头 / 脚本具有所有 SVG 文本属性。标准 SVG tspan 属性可用于修改文本的默认属性。JsonML 标记语言用于表示 SVG 文本内容。可以使用和混合几种预定义样式： "),n("br"),v(" h1h2h3h4h5h6 -- 预定义的字体大小。 "),n("br"),v(" muted warning error info success -- 字体颜色样式。 "),n("br"),v(" 其他 SVG tspan 属性可以像下面这样在自由风格中使用。 ")],-1)),n("div",Z,[a(i,{content:t(o).codeContent11.value,"onUpdate:content":e[10]||(e[10]=l=>t(o).codeContent11.value=l)},null,8,["content"]),a(s,{code:t(o).codeContent11.value},null,8,["code"])]),e[38]||(e[38]=n("h2",null," 8.箭头 ",-1)),e[39]||(e[39]=n("h3",null," 样条曲线 ",-1)),n("div",$,[a(i,{content:t(o).codeContent12.value,"onUpdate:content":e[11]||(e[11]=l=>t(o).codeContent12.value=l)},null,8,["content"]),a(s,{code:t(o).codeContent12.value},null,8,["code"])]),e[40]||(e[40]=n("h3",null," 直线 ",-1)),n("div",_,[a(i,{content:t(o).codeContent13.value,"onUpdate:content":e[12]||(e[12]=l=>t(o).codeContent13.value=l)},null,8,["content"]),a(s,{code:t(o).codeContent13.value},null,8,["code"])]),e[41]||(e[41]=n("h2",null," 9.自定义代码 ",-1)),n("div",ee,[a(i,{content:t(o).codeContent14.value,"onUpdate:content":e[13]||(e[13]=l=>t(o).codeContent14.value=l)},null,8,["content"]),a(s,{code:t(o).codeContent14.value},null,8,["code"])])]))}},te=u(ne,[["__scopeId","data-v-58989a9b"]]);w(te).mount("#help-app");
