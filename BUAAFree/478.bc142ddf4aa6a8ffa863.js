webpackJsonp([478],{exO1:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=o("4YfN"),s=o.n(i),n={data:function(){return{img:"",dec:"",show:!1,nonetworkimg:"",nonetworktext:"",door_id:"",cademic:"",schoolLogo:"",schoolname:"",time:"",desc:"",base:{},qrcode:"",title:"",text:"二维码生成中...",qrcodeCtrl:!1,showinfo:!1,load:!0,err:!1,normal_sock:null,oQRCode:null,timer:null,rules:"",condition:{color:"",content:""},door:{id:"",name:"",remark:""},otherData:"",citys:""}},created:function(){if(void 0==this.getUrlInfo().door_id)return this.show=!0,this.nonetworktext="页面不存在",void(this.nonetworkimg="/site/static/images/network.png");this.door_id=this.getUrlInfo().door_id,this.img="/site/static/images/load.gif",this.dec="加载中",this.ajaxs()},methods:{getUrlInfo:function(){var t={};return(location.href.split("?")[1]?location.href.split("?")[1].split("&"):[]).map(function(e){t[e.split("=")[0]]=e.split("=")[1]}),t},getAgain:function(){this.qrcodeCtrl=!1,this.load=!0,this.err=!1,this.normal_sock.send("get_qrcode")},ajaxs:function(){var t=this;this.appFetch({method:"post",url:"buaahealthcodemasterGetinfo",data:{door_id:this.door_id}},function(e){if(t.img="",t.dec="",0==e.e){t.citys=e.d.city,t.showinfo=!0,t.show=!1,t.base=e.d.user,t.rules=e.d.rules,t.condition=e.d.condition,e.d.door&&(t.door=e.d.door),t.otherData=e.d.otherData,"green"==t.condition.color&&(t.desc="绿色码规则"),"red"==t.condition.color&&(t.desc="红色码规则"),"yellow"==t.condition.color&&(t.desc="黄色码规则"),t.time=e.d.time;var o=t;t.normal_sock=new normal_socket({debug:!1,security:"http"!=location.protocol.split(":")[0],url:appConfig.baseUrl.split("/")[2]+"/sock/user",open:function(){},loading:function(){o.img="/site/static/images/load.gif",o.dec="扫码中",null!=o.timer&&clearTimeout(o.timer)},close:function(){this.log("websocket已中断,请重新建立"),o.timer=setTimeout(function(){o.qrcodeCtrl=!1,o.err=!1,o.load=!0,o.normal_sock.init()},1e3)},qrcode:function(t){if(null!=o.timer&&clearTimeout(o.timer),o.qrcodeCtrl=!0,o.load=!1,o.err=!1,null==o.oQRCode){var e={width:172,height:172,color:"#34A853"};o.oQRCode=new QRCode("qrcode",t.qrcode,e)}else o.oQRCode.clear(),o.oQRCode.makeCode(t.qrcode,"22222");t.expires_in&&(o.timer=setTimeout(function(){o.normal_sock.send("get_qrcode")},1e3*t.expires_in-1e3))},login:function(t){window.location.reload()},success:function(t){t=JSON.parse(t);o.normal_sock.send("get_qrcode"),"success"==t.action?(o.img="/site/static/images/successload.png",o.dec="扫码成功",setTimeout(function(){o.img="",o.dec=""},1500)):(o.img="/site/static/images/cha.png",o.dec=t.message,setTimeout(function(){o.img="",o.dec=""},1500))},error:function(t){o.qrcodeCtrl=!1,o.err=!0,o.load=!1}})}else t.show=!0,t.nonetworktext=e.e+"</br>"+e.m,t.nonetworkimg="/site/static/images/xitongcuowu.png"},function(){t.img="",t.dec="",t.show=!0,t.nonetworktext="网络错误",t.nonetworkimg="/site/static/images/network1.png"},1),this.appFetch({method:"get",url:"getinfo",data:{}},function(e){0==e.e?(t.schoolLogo=e.d.site_logo,t.schoolname=e.d.school_name,Vue.nextTick(function(){var t=$(window).height();$(".center-qrcode").outerHeight(t)})):(t.show=!0,t.nonetworktext=e.e+"</br>"+e.m,t.nonetworkimg="/site/static/images/xitongcuowu.png")},function(){t.show=!0,t.nonetworktext="网络错误",t.nonetworkimg="/site/static/images/network1.png"},1)},getExamInfo:function(t){var e=this;this.appFetch({method:"get",url:"rssList",data:{}},function(t){e.img="",e.dec="",0==t.e?(e.show=!1,e.showCtrl=!0,e.list=t.d.list):(e.show=!0,e.nonetworktext=t.e+"</br>"+t.m,e.nonetworkimg="/site/static/images/xitongcuowu.png")},function(){e.showCtrl=!1,e.show=!0,e.img="",e.dec="",e.nonetworkimg="/site/static/images/network1.png",e.nonetworktext="网络错误"},t)},openCademic:function(){},ajax:function(){var t=this;this.appFetch({method:"get",url:"getinfo",data:{}},function(e){t.show=!1,t.img="",t.dec="",0==e.e?(console.log(2222,e.d),t.schoolLogo=e.d.backend_pic):(t.show=!0,t.nonetworktext=e.e+"</br>"+e.m,t.nonetworkimg="/site/static/images/xitongcuowu.png")},function(){t.show=!0,t.nonetworktext="网络错误",t.nonetworkimg="/site/static/images/network1.png",t.img="",t.dec=""},1)}},mounted:function(){}},a=o("6RUx"),r=o("UjTL"),c=o("fwLW"),d=s()({name:"buaamasterqrcode",components:{gUserinfo:a.a,network:r.a,pophint:c.default}},n),l={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"newQrcode"},[o("div",{directives:[{name:"show",rawName:"v-show",value:!t.show&&t.showinfo,expression:"!show && showinfo"}]},[o("div",{staticClass:"epide_outer"},[o("div",{staticClass:"logo"},[o("div",[o("img",{attrs:{src:t.appConfig.imgUrl+t.schoolLogo,alt:""}})]),t._v(" "),o("span",[t._v(t._s(t.schoolname))])]),t._v(" "),o("div",{staticClass:"bjc"},[o("img",{attrs:{src:"/site/static/images/smlogin/mengceng2.png",alt:""}}),t._v(" "),o("div",{staticClass:"users"},[o("ul",[o("li",[o("span",[t._v("姓名")]),o("span",[t._v(t._s(t.base.realname))])]),t._v(" "),o("li",[o("span",[t._v("学工号")]),o("span",[t._v(t._s(t.base.role&&t.base.role.number))])])]),t._v(" "),o("ul",[o("li",{staticStyle:{width:"100%"}},[o("span",[t._v("单位")]),o("span",[t._v(t._s(t.base.departs))])])])])])]),t._v(" "),o("div",{staticClass:"content mastercontent"},[o("div",{staticClass:"location_tit"},[o("div",{staticClass:"qrcode-wrap master"},[o("div",{staticClass:"title-master"},[o("span",{staticClass:"left"},[t._v("通行码")]),o("span",{staticClass:"right"},[o("em",[t._v("扫码时间："+t._s(t.time))])])]),t._v(" "),o("div",{staticClass:"code_img qr-box qr-publice buaa_code_img"},[o("div",{class:{border:!t.qrcodeCtrl}},[o("div",{directives:[{name:"show",rawName:"v-show",value:t.qrcodeCtrl,expression:"qrcodeCtrl"}],attrs:{id:"qrcode"}}),t._v(" "),o("span",{directives:[{name:"show",rawName:"v-show",value:t.load,expression:"load"}]},[t._v("二维码生成中...")]),t._v(" "),o("span",{directives:[{name:"show",rawName:"v-show",value:t.err,expression:"err"}],on:{click:function(e){return t.getAgain()}}},[t._v("二维码生成失败，点击重新生成")])])])]),t._v(" "),t.door.name?o("div",{staticClass:"line"}):t._e(),t._v(" "),t.door.name?o("div",{staticClass:"buaaszwz"},[o("div",{staticClass:"szwz-header"},[o("span",{staticClass:"left"},[t._v("所在位置")]),t._v(" "),o("span",{staticClass:"right"},[t._v(t._s(t.door.name))])])]):t._e(),t._v(" "),t.otherData?o("div",{staticClass:"line"}):t._e(),t._v(" "),t.otherData?o("div",{staticClass:"other-foot"},[o("span",{domProps:{innerHTML:t._s(t.otherData)}})]):t._e(),t._v(" "),o("div",{staticClass:"line"}),t._v(" "),o("div",{staticClass:"mastervia-city"},[o("em",[t._v("您14天内途经的城市：")]),o("span",[t._v(t._s(t.citys))])]),t._v(" "),t._m(0)])])]),t._v(" "),t.show?o("network",{attrs:{nonetworkimg:t.nonetworkimg,nonetworktext:t.nonetworktext}}):t._e(),t._v(" "),o("pophint",{attrs:{img:t.img,dec:t.dec,appkey:"healthcode"}})],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"buaalianxidianhua"},[e("em"),e("span",[this._v("若对通行码有疑问，请联系82317005")]),e("em")])}]},m=o("C7Lr")(d,l,!1,null,null,null);e.default=m.exports}});