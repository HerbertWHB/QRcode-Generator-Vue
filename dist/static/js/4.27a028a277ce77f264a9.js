webpackJsonp([4],{"pwJ/":function(e,a){},"xG+h":function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n={name:"IdCard",data:function(){return{userInfo:{avatar:"",name:"",sex:"",age:"",phone:"",campany:"",position:""},rules:{}}},methods:{FORMER_PAGE:function(){this.$router.go(-1)},SUBMIT:function(){var e=this;this.$refs.user.validate(function(a){a&&e.axios.post("/users/card",e.userInfo).then(function(e){console.log(e)})})},DEAL_AVATAR:function(e){var a=this,t=e.target.files[0];if(t){e.target.value=null;var n=new FileReader;n.onload=function(e){a.userInfo.avatar=e.target.result},n.readAsDataURL(t)}}}},r={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"page-card sub-page"},[t("z-header",{attrs:{title:"名片"}},[t("span",{staticClass:"iconfont icon-jiantouarrowhead7",attrs:{slot:"user"},on:{click:function(a){return e.FORMER_PAGE()}},slot:"user"})]),e._v(" "),t("scroll",{ref:"wrapper"},[t("div",{staticClass:"card_wrapper"},[t("el-form",{ref:"user",staticClass:"card-info",attrs:{model:e.userInfo,rules:e.rules,inline:!0,"label-width":"0.6rem"}},[t("label",{staticClass:"avatar_wrapper",attrs:{for:"avatar"}},[t("input",{staticStyle:{display:"none"},attrs:{type:"file",name:"avatar",id:"avatar",accept:"image/*"},on:{change:e.DEAL_AVATAR}}),e._v(" "),e.userInfo.avatar?t("img",{attrs:{src:e.userInfo.avatar,alt:"头像"}}):t("i",{staticClass:"iconfont icon-tianjia"})]),e._v(" "),t("el-form-item",{attrs:{label:"姓名"}},[t("el-input",{model:{value:e.userInfo.name,callback:function(a){e.$set(e.userInfo,"name",a)},expression:"userInfo.name"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"性别"}},[t("el-input",{model:{value:e.userInfo.sex,callback:function(a){e.$set(e.userInfo,"sex",a)},expression:"userInfo.sex"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"年龄"}},[t("el-input",{model:{value:e.userInfo.age,callback:function(a){e.$set(e.userInfo,"age",a)},expression:"userInfo.age"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"手机号"}},[t("el-input",{model:{value:e.userInfo.phone,callback:function(a){e.$set(e.userInfo,"phone",a)},expression:"userInfo.phone"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"学习"}},[t("el-input",{model:{value:e.userInfo.campany,callback:function(a){e.$set(e.userInfo,"campany",a)},expression:"userInfo.campany"}})],1),e._v(" "),t("el-form-item",{staticStyle:{"margin-top":"0.2rem"}},[t("el-button",{attrs:{type:"primary"},on:{click:function(a){return e.SUBMIT()}}},[e._v("生成二维码")])],1)],1)],1)])],1)},staticRenderFns:[]};var s=t("VU/8")(n,r,!1,function(e){t("pwJ/")},"data-v-8132fbea",null);a.default=s.exports}});
//# sourceMappingURL=4.27a028a277ce77f264a9.js.map