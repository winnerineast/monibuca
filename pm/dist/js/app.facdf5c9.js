(function(t){function e(e){for(var a,i,o=e[0],c=e[1],l=e[2],p=0,f=[];p<o.length;p++)i=o[p],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&f.push(r[i][0]),r[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(f.length)f.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,o=1;o<n.length;o++){var c=n[o];0!==r[c]&&(a=!1)}a&&(s.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},r={app:0},s=[];function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},1:function(t,e){},2:function(t,e){},2285:function(t,e,n){"use strict";var a=n("4164"),r=n.n(a);r.a},4164:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},s=[],i={name:"app",components:{}},o=i,c=n("2877"),l=Object(c["a"])(o,r,s,!1,null,null,null),u=l.exports,p=n("8c4f"),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Layout",{staticClass:"layout"},[n("Header",{staticStyle:{background:"unset","text-align":"center"}},[t._v("Monibuca 实例管理器")]),n("Content",{staticClass:"content"},[n("Tabs",{attrs:{value:"name1"}},[n("TabPane",{attrs:{label:"实例",name:"name1"}},[n("InstanceList")],1),n("TabPane",{attrs:{label:"创建",name:"name2"}},[n("Steps",{attrs:{current:t.createStep}},[n("Step",{attrs:{title:"选择目录",content:"选择创建实例的目录"}}),n("Step",{attrs:{title:"选插件",content:"选择要启用的插件"}}),n("Step",{attrs:{title:"完成",content:"完成实例创建"}})],1),n("div",{staticStyle:{margin:"50px",width:"auto"}},[0==t.createStep?n("PathSelector",{model:{value:t.createPath,callback:function(e){t.createPath=e},expression:"createPath"}}):1==t.createStep?n("div",{staticStyle:{display:"flex","flex-wrap":"wrap"}},t._l(t.plugins,(function(e,a){return n("Card",{key:a,staticStyle:{width:"200px",margin:"5px"}},[n("Poptip",{attrs:{slot:"extra",content:e.Description,width:"200","word-wrap":""},slot:"extra"},[n("Icon",{staticStyle:{cursor:"pointer"},attrs:{size:"18",type:"ios-help-circle-outline"}})],1),n("Poptip",{attrs:{slot:"title",content:e.Path,trigger:"hover","word-wrap":""},slot:"title"},[n("Checkbox",{staticStyle:{color:"#eb5e46"},model:{value:e.enabled,callback:function(n){t.$set(e,"enabled",n)},expression:"item.enabled"}},[t._v(t._s(a))])],1),n("i-input",{attrs:{type:"textarea",placeholder:"请输入toml格式"},model:{value:e.Config,callback:function(n){t.$set(e,"Config",n)},expression:"item.Config"}})],1)})),1):n("div",[n("h3",[t._v("实例名称：")]),n("i-input",{attrs:{placeholder:t.createPath.split("/").pop()},model:{value:t.instanceName,callback:function(e){t.instanceName=e},expression:"instanceName"}}),n("h4",[t._v("安装路径：")]),n("div",[n("pre",[t._v(t._s(t.createPath))])]),n("h4",[t._v("启用的插件：")]),n("div",[n("pre",[t._v(t._s(t.pluginStr))])]),n("h4",[t._v("配置文件：")]),n("div",[n("pre",[t._v(t._s(t.configStr))])])],1),n("ButtonGroup",{staticStyle:{display:"table",margin:"50px auto"}},[0!=t.createStep?n("Button",{attrs:{size:"large",type:"primary"},on:{click:function(e){t.createStep--}}},[n("Icon",{attrs:{type:"ios-arrow-back"}}),t._v(" 上一步 ")],1):t._e(),1==t.createStep?n("Button",{attrs:{size:"large",type:"success"},on:{click:function(e){t.showAddPlugin=!0}}},[t._v(" + 添加插件 ")]):t._e(),2!=t.createStep?n("Button",{attrs:{size:"large",type:"primary"},on:{click:function(e){t.createStep++}}},[t._v(" 下一步 "),n("Icon",{attrs:{type:"ios-arrow-forward"}})],1):n("Button",{attrs:{size:"large",type:"success"},on:{click:t.createInstance}},[t._v("开始创建")])],1)],1)],1),n("TabPane",{attrs:{label:"导入",name:"name3"}},[n("ImportInstance")],1)],1)],1),n("Modal",{attrs:{title:"添加Plugin"},on:{"on-ok":t.addPlugin},model:{value:t.showAddPlugin,callback:function(e){t.showAddPlugin=e},expression:"showAddPlugin"}},[n("Form",{attrs:{model:t.formPlugin,"label-position":"top"}},[n("FormItem",{attrs:{label:"插件名称"}},[n("i-input",{attrs:{placeholder:"插件名称必须和插件注册时的名称一致"},model:{value:t.formPlugin.Name,callback:function(e){t.$set(t.formPlugin,"Name",e)},expression:"formPlugin.Name"}})],1),n("FormItem",{attrs:{label:"插件包地址"}},[n("i-input",{model:{value:t.formPlugin.Path,callback:function(e){t.$set(t.formPlugin,"Path",e)},expression:"formPlugin.Path"}})],1),n("Alert",{attrs:{"show-icon":"",type:"warning"}},[t._v(' 如果该插件是私有仓库，请到服务器上输入：echo "machine '+t._s(t.privateHost)+' login 用户名 password 密码" >> ~/.netrc 并且添加环境变量GOPRIVATE='+t._s(t.privateHost)+" ")]),n("FormItem",{attrs:{label:"插件配置信息"}},[n("i-input",{attrs:{type:"textarea",placeholder:"请输入toml格式"},model:{value:t.formPlugin.Config,callback:function(e){t.$set(t.formPlugin,"Config",e)},expression:"formPlugin.Config"}})],1)],1)],1),n("CreateInstance",{attrs:{info:t.createInfo},model:{value:t.showCreate,callback:function(e){t.showCreate=e},expression:"showCreate"}})],1)},h=[],d=(n("99af"),n("4de4"),n("caad"),n("a15b"),n("d81d"),n("07ac"),n("ac1f"),n("1276"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Modal",t._g(t._b({attrs:{title:t.info&&t.info.Path}},"Modal",t.$attrs,!1),t.$listeners),[n("Steps",{attrs:{current:t.currentStep,size:"small",status:t.status}},[n("Step",{attrs:{title:"解析请求"}}),n("Step",{attrs:{title:"创建目录"}}),n("Step",{attrs:{title:"写入文件"}}),n("Step",{attrs:{title:"执行go mod init"}}),n("Step",{attrs:{title:"执行go build"}}),n("Step",{attrs:{title:"启动实例"}}),n("Step",{attrs:{title:"完成"}})],1),n("div",[n("pre",[t._v(t._s(t.log))])]),n("div",{attrs:{slot:"footer"},slot:"footer"},[n("Checkbox",{model:{value:t.clearDir,callback:function(e){t.clearDir=e},expression:"clearDir"}},[t._v("安装前清空目录")]),n("Button",{attrs:{type:"primary",loading:"process"==t.status},on:{click:t.start}},[t._v("开始")])],1)],1)}),g=[],m=n("3835"),v=null,b={name:"CreateInstance",props:{info:Object},methods:{start:function(){var t=this;this.status="process",v=new EventSource("/instance/create?info="+JSON.stringify(this.info)+(this.clearDir?"&clear=true":"")),v.onopen=function(){return t.log=""},v.onmessage=function(e){t.log+=e.data+"\n","success"==e.data&&(t.status="finish",v.close())},v.addEventListener("exception",(function(e){t.log+=e.data+"\n",t.status="error",v.close()})),v.addEventListener("step",(function(e){var n=e.data.split(":"),a=Object(m["a"])(n,2),r=a[0],s=a[1];t.currentStep=0|r,t.log+=s+"\n"}))}},data:function(){return{clearDir:!0,currentStep:0,log:"",status:"wait"}}},w=b,P=Object(c["a"])(w,d,g,!1,null,"1f7c09b8",null),y=P.exports,S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("List",{attrs:{border:""}},t._l(t.instances,(function(e){return n("ListItem",{key:e.Name},[n("ListItemMeta",{attrs:{title:e.Name,description:e.Path}}),"string"==typeof e.Info?[t._v(t._s(e.Info))]:null!=e.Info?[t._v(" 引擎版本："+t._s(e.Info.Version)+" "),n("br"),t._v("启动时间： "),n("StartTime",{attrs:{value:e.Info.StartTime}})]:t._e(),n("template",{slot:"action"},[n("li",{on:{click:function(n){return t.changeConfig(e)}}},[n("Icon",{attrs:{type:"ios-settings"}}),t._v(" 修改配置 ")],1),t.hasGateway(e)?n("li",{on:{click:function(n){return t.openGateway(e)}}},[n("Icon",{attrs:{type:"md-browsers"}}),t._v(" 管理界面 ")],1):t._e(),n("li",{on:{click:function(n){t.currentItem=e,t.showRestart=!0}}},[n("Icon",{attrs:{type:"ios-refresh"}}),t._v(" 重启 ")],1),n("li",{on:{click:function(n){return t.shutdown(e)}}},[n("Icon",{attrs:{type:"ios-power"}}),t._v(" 关闭 ")],1)])],2)})),1),n("Modal",{attrs:{title:"重启选项"},on:{"on-ok":t.restart},model:{value:t.showRestart,callback:function(e){t.showRestart=e},expression:"showRestart"}},[n("Checkbox",{model:{value:t.update,callback:function(e){t.update=e},expression:"update"}},[t._v("go get -u")]),n("Checkbox",{model:{value:t.build,callback:function(e){t.build=e},expression:"build"}},[t._v("go build")])],1),n("Modal",{attrs:{title:"修改实例配置"},on:{"on-ok":t.submitConfigChange},model:{value:t.showConfig,callback:function(e){t.showConfig=e},expression:"showConfig"}},[n("i-input",{attrs:{type:"textarea",rows:20},model:{value:t.currentConfig,callback:function(e){t.currentConfig=e},expression:"currentConfig"}})],1)],1)},_=[],I=(n("d3b7"),n("25f0"),n("3f1c")),x=n.n(I),C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Poptip",{attrs:{trigger:"hover",content:"⌚️"+new Date(t.value).toLocaleString()}},[n("Time",{attrs:{time:new Date(t.value)}})],1)},k=[],$={name:"StartTime",props:{value:String}},j=$,N=Object(c["a"])(j,C,k,!1,null,"062b9730",null),O=N.exports,M={name:"InstanceList",components:{StartTime:O},data:function(){return{instances:[],showRestart:!1,update:!1,build:!1,showConfig:!1,currentItem:null,currentConfig:""}},mounted:function(){var t=this;window.ajax.getJSON("/instance/list").then((function(e){var n=function(n){var a=e[n];a.Config=x.a.parse(a.Config),t.hasGateway(a)?window.ajax.getJSON(t.gateWayHref(a)+"/api/sysInfo").then((function(t){a.Info=t})).catch((function(){a.Info="无法访问实例"})):a.Info="实例未配置网关插件",t.instances.push(a)};for(var a in e)n(a)}))},methods:{changeConfig:function(t){this.showConfig=!0,this.currentItem=t,this.currentConfig=x.a.stringify(t.Config)},submitConfigChange:function(){var t=this;try{this.currentItem.Config=x.a.parse(this.currentConfig),window.ajax.post("/instance/updateConfig?instance="+this.currentItem.Name,this.currentConfig).then((function(e){"success"==e?t.$Message.success("更新成功！"):t.$Message.error(e)})).catch((function(e){t.$Message.error(e)}))}catch(e){this.$Message.error(e)}},openGateway:function(t){window.open(this.gateWayHref(t),"_blank")},hasGateway:function(t){return t.Config.Plugins.hasOwnProperty("GateWay")},gateWayHref:function(t){return"http://"+location.hostname+":"+t.Config.Plugins.GateWay.ListenAddr.split(":").pop()},restart:function(){var t=this,e=this.currentItem,n=this.$Message.loading({content:"restart "+e.Name+"...",duration:0}),a=e.Name;this.update&&(a+="&update=true"),this.build&&(a+="&build=true");var r=new EventSource("/instance/restart?instance="+a);r.onmessage=function(e){"success"==e.data?(t.$Message.success("重启成功！"),r.onerror=null,r.close(),n()):t.$Message.info(e.data)},r.addEventListener("failed",(function(e){t.$Message.error(e.data),n()})),r.onerror=function(e){t.$Message.error(e.toString()),n(),r.close()}},shutdown:function(t){var e=this;window.ajax.get("/instance/shutdown?instance="+t.Name).then((function(t){"success"==t?e.$Message.success("已关闭实例"):e.$Message.error(t)}))}}},L=M,A=Object(c["a"])(L,S,_,!1,null,"0c3181b4",null),D=A.exports,T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("PathSelector",{attrs:{placeholder:"输入实例所在的路径"},model:{value:t.instancePath,callback:function(e){t.instancePath=e},expression:"instancePath"}}),n("i-input",{staticStyle:{width:"300px",margin:"40px auto"},attrs:{placeholder:t.defaultInstanceName,search:"","enter-button":"Import"},on:{"on-search":t.doImport},model:{value:t.instanceName,callback:function(e){t.instanceName=e},expression:"instanceName"}},[n("span",{attrs:{slot:"prepend"},slot:"prepend"},[t._v("实例名称")])])],1)},E=[],G=(n("8a79"),n("5319"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("i-input",t._g(t._b({ref:"input",attrs:{clearable:""},on:{"on-change":t.onInput}},"i-input",t.$attrs,!1),t.$listeners),[n("Button",{attrs:{slot:"prepend",icon:"md-arrow-round-up"},on:{click:t.goUp},slot:"prepend"})],1),n("CellGroup",{on:{"on-click":t.onSelectCand}},t._l(t.candidate,(function(t){return n("Cell",{key:t,attrs:{title:t,name:t}})})),1)],1)}),H=[],R=(n("841c"),{name:"PathSelector",data:function(){return{candidate:[],lastInput:"",searching:!1}},methods:{dir:function(){var t=this.$refs.input.value.split("/");return t.pop(),t.join("/")},goUp:function(){this.lastInput=this.$attrs.value=this.dir(),this.$refs.input.$emit("input",this.$attrs.value),this.search(this.lastInput)},onSelectCand:function(t){this.lastInput=this.$attrs.value=this.dir()+"/"+t+"/",this.$refs.input.$emit("input",this.$attrs.value),this.search(this.lastInput)},onInput:function(t){this.lastInput=t.target.value,this.search(this.lastInput)},search:function(t){var e=this;this.searching||window.ajax.getJSON("/instance/listDir?input="+t).then((function(n){e.candidate=n,e.lastInput!=t?e.search(e.lastInput):e.searching=!1})).catch((function(n){e.$Message.error(n),e.lastInput!=t?e.search(e.lastInput):e.searching=!1}))}}}),J=R,W=Object(c["a"])(J,G,H,!1,null,"3f293899",null),z=W.exports,B={name:"ImportInstance",components:{PathSelector:z},data:function(){return{instancePath:"",instanceName:""}},computed:{defaultInstanceName:function(){var t=this.instancePath.replace(/\\/g,"/"),e=t.split("/");return t.endsWith("/")&&e.pop(),e.pop()}},methods:{doImport:function(){var t=this;window.ajax.get("/instance/import?path="+this.instancePath+"&name="+this.instanceName).then((function(e){"success"==e?t.$Message.success("导入成功！"):t.$Message.error(e)}))}}},F=B,U=Object(c["a"])(F,T,E,!1,null,"1d6dc23e",null),Q=U.exports,V={components:{CreateInstance:y,InstanceList:D,ImportInstance:Q,PathSelector:z},data:function(){var t={};for(var e in this.$store.state.defaultPlugins)t[e]={Name:e,enabled:["GateWay","LogRotate","Jessica"].includes(e),Path:"github.com/langhuihui/monibuca/plugins/"+this.$store.state.defaultPlugins[e][0],Config:this.$store.state.defaultPlugins[e][1],Description:this.$store.state.defaultPlugins[e][2]};return{instanceName:"",createStep:0,showCreate:!1,createInfo:null,createPath:"/opt/monibuca",plugins:t,showAddPlugin:!1,formPlugin:{}}},computed:{pluginStr:function(){return Object.values(this.plugins).filter((function(t){return t.enabled})).map((function(t){return t.Path})).join("\n")},configStr:function(){return Object.values(this.plugins).filter((function(t){return t.enabled})).map((function(t){return"[Plugins.".concat(t.Name,"]\n").concat(t.Config||"")})).join("\n")},privateHost:function(){return this.formPlugin.Path&&this.formPlugin.Path.split("/")[0]||"仓库域名"}},methods:{goUp:function(){var t=this.createPath.split("/");t.pop(),this.createPath=t.join("/")},createInstance:function(){this.showCreate=!0,this.createInfo={Name:this.instanceName||this.createPath.split("/").pop(),Path:this.createPath,Plugins:Object.values(this.plugins).filter((function(t){return t.enabled})).map((function(t){return t.Path})),Config:this.configStr}},addPlugin:function(){this.plugins[this.formPlugin.Name]=this.formPlugin,this.formPlugin={}}}},K=V,q=(n("2285"),Object(c["a"])(K,f,h,!1,null,null,null)),X=q.exports;a["default"].use(p["a"]);var Y=[{path:"/",name:"instances",component:X}],Z=new p["a"]({mode:"history",base:"/",routes:Y}),tt=Z,et=n("2f62");a["default"].use(et["a"]);var nt=new et["a"].Store({state:{defaultPlugins:{GateWay:["gateway",'ListenAddr = ":8081"',"网关插件，提供各种API服务，包括信息采集和控制等，控制台页面展示（静态资源服务器）"],LogRotate:["logrotate",'Path = "log"\nSize = 0\nDays = 1',"日志分割插件，Size 代表按照字节数分割，0代表采用时间分割"],Jessica:["jessica",'ListenAddr = ":8080"',"WebSocket协议订阅，采用私有协议，搭配Jessibuca播放器实现低延时播放"],Cluster:["cluster",'Master = "localhost:2019"\nListenAddr = ":2019"',"集群插件，可以实现级联转发功能，Master代表上游服务器，ListenAdder代表源服务器监听端口，可只配置一项"],RTMP:["rtmp",'ListenAddr = ":1935"',"rtmp协议实现，基本发布和订阅功能"],RecordFlv:["record",'Path="./resource"',"录制视频流到flv文件"],HDL:["HDL",'ListenAddr = ":2020"',"Http-flv格式实现，可以对接CDN厂商进行回源拉流"],Auth:["auth",'Key = "www.monibuca.com"',"一个鉴权验证模块"],Qos:["QoS",'Suffix = ["high","medium","low"]',"质量控制插件，可以动态改变订阅的不同的质量的流"]}},mutations:{},actions:{},modules:{}}),at=n("f825"),rt=n.n(at);n("f8ce");a["default"].use(rt.a),a["default"].config.productionTip=!1,new a["default"]({router:tt,store:nt,render:function(t){return t(u)}}).$mount("#app")}});
//# sourceMappingURL=app.facdf5c9.js.map