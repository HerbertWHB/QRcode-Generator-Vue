<template>
  <div class="page-view page-beautifier">
    <z-header title='美化器'>
      <span slot="user" class="iconfont icon-jiantouarrowhead7" @click="FORMER_PAGE()"></span>
    </z-header>
    <div class="beautifier-wrapper">
      <vue-qr
        ref="vueqr"
        class ="qrcode"
        :text ="text"
        :size ="config.size"
        :margin ="config.margin"
        :colorDark ="config.colorDark"
        :colorLight ="config.colorLight"
        :eyeColorOut ="config.eyeColorOut"
        :eyeColorIn ="config.eyeColorIn"
        :colorGradient ="config.colorGradient"
        :gradientType ="config.gradientType"
        :bgSrc="config.bgSrc"
        :gifBgSrc="config.gifBgSrc"
        :fgSrc ="config.fgSrc"
        :logoSrc="config.logoSrc"
        :logoScale="config.logoScale"
        :logoMargin ="config.logoMargin"
        :logoCornerRadius ="config.logoCornerRadius"
        :whiteMargin ="config.whiteMargin"
        :dotScale ="config.dotScale"
        :dotType ="config.dotType"
        :autoColor ="config.autoColor"
        :binarize ="config.binarize"
        :binarizeThreshold ="config.binarizeThreshold"
        :angle="config.angle"
        :eyeStyle ="config.eyeStyle"
        :maskedDots ="config.maskedDots"
        :bindElement ="config.bindElement"
        :callback ="CALLBACK"
        :correctLevel="config.correctLevel"
        :codeType="config.codeType"
      />
      <!-- tab页签 -->
      <div class="tab">
        <mt-navbar v-model="selected">
          <mt-tab-item id="1">基本</mt-tab-item>
          <mt-tab-item id="2">模板</mt-tab-item>
          <mt-tab-item id="3">嵌入</mt-tab-item>
          <mt-tab-item id="4">码眼</mt-tab-item>
        </mt-navbar>
      </div>
      <scroll ref="scroll" class="scroll">
        <div class="tab-content">
          <mt-tab-container v-model="selected">
            <!------------------------------------------------------ 基础设置 -------------------------->
            <mt-tab-container-item id="1" class="basic-setting">
              <el-form label-width="1rem">
                <!-- 前景色 -->
                <el-form-item label="前景色">
                  <el-color-picker v-model="config.colorDark"  :predefine="predefineColors" :disabled="!!config.fgSrc" />
                </el-form-item>
                <!-- 渐变类型 -->
                <el-form-item label="渐变类型">
                  <el-select v-model="config.gradientType" class="gradientType">
                    <el-option v-for="(item,index) in gradintTypeList" :key="index" :label="item.label" :value="item.value" />
                  </el-select>
                </el-form-item>
                <!-- 渐变色 -->
                <el-form-item label="渐变色">
                  <el-color-picker v-model="config.colorGradient"  :predefine="predefineColors" :disabled="!!config.fgSrc" />
                </el-form-item>
                <!-- 背景色 -->
                <el-form-item label="背景色">
                  <el-color-picker v-model="config.colorLight"  :predefine="predefineColors" />
                </el-form-item>
                <!-- 外边距 -->
                <el-form-item label="缩放">
                  <el-slider v-model="config.margin" :max="180" />
                </el-form-item>
                <el-form-item label="码点大小">
                  <el-slider v-model="config.dotScale" :step="0.1" show-stops :min="0.2" :max="1" />
                </el-form-item>
                <!-- 旋转 -->
                <el-form-item label="旋转">
                  <el-select v-model="config.angle">
                    <el-option v-for="(item,index) in angleList" :key="index" :label="item.label" :value="item.value" />
                  </el-select>
                </el-form-item>
                <!-- 二维码容错 -->
                <el-form-item label="纠错等级">
                  <el-select v-model="config.correctLevel">
                    <el-option v-for="(item,index) in correctLevelList" :key="index" :label="item.label" :value="item.value" />
                  </el-select>
                </el-form-item>
                <!-- 码点样式 -->
                <el-form-item label="码点样式">
                  <el-radio v-model="config.dotType" :label = 0>直角</el-radio>
                  <el-radio v-model="config.dotType" :label = 1>圆角</el-radio>
                </el-form-item>
                <el-form-item style="text-align:right;">
                  <el-button type="primary" size="mini" @click="CLEAR_DESIGN">重设样式</el-button>
                </el-form-item>
              </el-form>
            </mt-tab-container-item>
            <!--------------------------------------------- 模板 ------------------------------------------->
            <mt-tab-container-item id="2" class="custom-template">
              <div  class="temp_wrapper">
                <div v-show="TEMP_IMG.length" v-for="(item,index) in TEMP_IMG" :key="index" class="temp_item">
                  <img :src="item" alt="" @click="APPLY_TEMP(index)">
                </div>
              </div>
              <div style="text-align:center;">
                <el-button type="primary" size="mini" @click="CLEAR_DESIGN">重设样式</el-button>
              </div>
            </mt-tab-container-item>
            <!-------------------------------------------- 嵌入 ------------------------------------------------->
            <mt-tab-container-item id="3" class="embed">
              <el-form label-width="0.8rem">
                <!-- 前景图 -->
                <el-form-item label="前景图">
                  <el-button @click="SHOW_IMG('FG')">在线图库</el-button>
                  <img v-show="config.fgSrc" ref="FG_IMG" :src="config.fgSrc">
                  <el-button v-show="config.fgSrc" size="mini" type="danger" icon="el-icon-delete" circle @click="DEL_IMG()" />
                </el-form-item>
                <!-- 前景图 -->
                <el-form-item label="背景图">
                  <el-button @click="SHOW_IMG('BG')">在线图库</el-button>
                  <img v-show="config.bgSrc || config.gifBgSrc" ref="BG_IMG" :src="config.bgSrc || config.gifBgSrc">
                  <el-button v-show="config.bgSrc || config.gifBgSrc" size="mini" type="danger" icon="el-icon-delete" circle @click="DEL_IMG()" />
                </el-form-item>
                <!-- 前景图 -->
                <el-form-item label="LOGO">
                  <el-button @click="SHOW_IMG('LOGO')">在线图库</el-button>
                  <img v-show="config.logoSrc" ref="LOGO_IMG" :src="config.logoSrc">
                  <el-button v-show="config.logoSrc" size="mini" type="danger" icon="el-icon-delete" circle @click="DEL_IMG()" />
                </el-form-item>
                <!-- logo圆角 -->
                <el-form-item label="圆角设置" v-show="this.config.logoSrc">
                  <el-slider v-model="config.logoCornerRadius" :min="0" :max="config.size / 10"></el-slider>
                </el-form-item>
                <el-form-item label="LOGO边距" v-show="this.config.logoSrc">
                  <el-slider v-model="config.logoMargin" :min="0" :max="config.size / 10"></el-slider>
                </el-form-item>
                <!-- 样式重设 -->
                <el-form-item style="text-align:right;">
                  <el-button type="primary" size="mini" @click="CLEAR_DESIGN">重设样式</el-button>
                </el-form-item>
              </el-form>
            </mt-tab-container-item>
            <!----------------------------------------- 码眼-------------------------------- -->
            <mt-tab-container-item id="4">
              <el-form label-width="1rem" :inline="true">
                <el-form-item label="码眼外框">
                  <el-color-picker v-model="config.eyeColorOut"  :predefine="predefineColors" />
                </el-form-item>
                <el-form-item label="码眼内框">
                  <el-color-picker v-model="config.eyeColorIn"  :predefine="predefineColors" />
                </el-form-item>
                <el-form-item label="码眼样式">
                  <div class="eye_pic_wrapper">
                    <img v-for="(item, index) in EYE_LIST" :key="index" :src="item" alt="code_eye" @click="SELECT_EYE(index)">
                  </div>
                </el-form-item>
                <!-- 样式重设 -->
                <el-form-item label=" ">
                  <el-button type="primary" size="mini" @click="CLEAR_DESIGN">重设样式</el-button>
                </el-form-item>
              </el-form>
            </mt-tab-container-item>
          </mt-tab-container>
        </div>
      </scroll>
    </div>
    <!-- 图片dialog -->
    <el-dialog title="选择图片" :visible.sync="dialogVisible" class="dialog_wrapper" width="100%">
      <div class="img_wrapper">
        <!-- 插入图片 -->
        <div  class="img_item" v-for="(item,index) in IMG_LIST" :key="index">
          <img :src="item" @click="SELETE_IMG(index)">
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import VueQr from 'vue-qr'
export default {
  name: 'beautifier',
  data () {
    return {
      selected: '1', // 选中标志
      text: '', // 编码内容
      dialogVisible: false, // dialog框展示隐藏
      flag: null,
      IMG_LIST: [], // 存储图片
      TEMP_IMG: window.Config.TEMP_LIST, // 模板
      FG_LIST: window.Config.FG_LIST, // 前景图
      LOGO_LIST: window.Config.LOGO_LIST, // logo图
      BG_LIST: window.Config.BG_LIST, // 背景图
      EYE_LIST: window.Config.EYE_LIST, // 码眼图
      predefineColors: window.Config.predefineColors, // 预设颜色
      correctLevelList: window.Config.correctLevelList, // 纠错级别
      gradintTypeList: window.Config.gradintTypeList, // 渐变类型
      angleList: window.Config.angleList, // 旋转角度
      config: {
        size: 400,
        codeType: 0, // 二维码整体样式
        margin: 0, // margin>=size/2时，或者margin<0时，margin置为0
        colorDark: '#000000', // 实点颜色
        colorLight: '#ffffff', // 背景区颜色
        colorGradient: '#000000', // 渐变颜色
        eyeColorIn: '#000', // 内框颜色
        eyeColorOut: '#000', // 外框颜色
        gradientType: 0, // 渐变类型
        fgSrc: '', // 前景图
        gifBgSrc: '', // gif背景图
        bgSrc: '', // 背景图
        logoSrc: '', // logo图
        logoScale: 1, // logo缩放比例
        logoMargin: 0, // logo外边距
        logoCornerRadius: 0, // logo圆角半径
        whiteMargin: true, // 是否显示白色边框
        dotScale: 1, // 码点缩放比例,0-1之间，否则强制转换为0.35
        dotType: 0, // 码点样式，圆角、方形等
        autoColor: false, // 取背景图的主要色调作为colorDark
        binarize: false, // 二值化
        binarizeThreshold: 128,
        angle: 0, // 旋转角度
        eyeStyle: 0, // 码眼样式
        maskedDots: false,
        bindElement: true,
        correctLevel: 2
      },
      // 初始化配置
      initConfig: {
        size: 400,
        codeType: 0, // 二维码整体样式
        margin: 0, // margin>=size/2时，或者margin<0时，margin置为0
        colorDark: '#000000', // 实点颜色
        colorLight: '#ffffff', // 背景区颜色
        colorGradient: '#000000', // 渐变颜色
        eyeColorIn: '#000', // 内框颜色
        eyeColorOut: '#000', // 外框颜色
        gradientType: 0, // 渐变类型
        fgSrc: '', // 前景图
        gifBgSrc: '', // gif背景图
        bgSrc: '', // 背景图
        logoSrc: '', // logo图
        logoScale: 1, // logo缩放比例
        logoMargin: 0, // logo外边距
        logoCornerRadius: 0, // logo圆角半径
        whiteMargin: true, // 是否显示白色边框
        dotScale: 1, // 码点缩放比例,0-1之间，否则强制转换为0.35
        dotType: 0, // 码点样式，圆角、方形等
        autoColor: false, // 取背景图的主要色调作为colorDark
        binarize: false, // 二值化
        binarizeThreshold: 128,
        angle: 0, // 旋转角度
        eyeStyle: 0, // 码眼样式
        maskedDots: false,
        bindElement: true,
        correctLevel: 2
      },
      // 个性化配置
      tempConfig: [
        {
          margin: 100, // margin>=size/2时，或者margin<0时，margin置为0
          colorDark: '#df3d3e', // 实点颜色
          bgSrc: '/static/image/BG_IMG/BG_03.png', // 背景图
          angle: 45 // 旋转角度
        },
        {
          margin: 130,
          colorDark: '#035d01',
          colorGradient: '#328401',
          bgSrc: '/static/image/BG_IMG/BG_05.png'
        }
      ]
    }
  },
  methods: {
    /**
     * 返回上一步
     */
    FORMER_PAGE () {
      this.$router.go(-1)
    },
    // 显示图片
    SHOW_IMG (flag) {
      this.flag = flag
      if (flag === 'FG') {
        this.IMG_LIST = this.FG_LIST
      } else if (flag === 'BG') {
        this.IMG_LIST = this.BG_LIST
      } else {
        this.IMG_LIST = this.LOGO_LIST
      }
      this.dialogVisible = true
    },
    /**
     * 选择图片
     */
    SELETE_IMG (index) {
      if (this.flag === 'FG') {
        this.config.fgSrc = this.FG_LIST[index]
      } else if (this.flag === 'BG') {
        this.config.bgSrc = this.config.gifBgSrc = ''
        if (/^(\s|\S)+(jpg|png|JPG|PNG)+$/.test(this.BG_LIST[index])) {
          this.config.bgSrc = this.BG_LIST[index]
        } else {
          this.config.gifBgSrc = this.BG_LIST[index]
        }
      } else {
        this.config.logoSrc = this.LOGO_LIST[index]
      }
    },
    /**
     * 删除图片
     */
    DEL_IMG () {
      if (this.flag === 'FG') {
        this.config.fgSrc = ''
      } else if (this.flag === 'BG') {
        this.config.bgSrc = ''
        this.config.gifBgSrc = ''
      } else {
        this.config.logoSrc = ''
      }
    },
    // 选择码眼样式
    SELECT_EYE (index) {
      this.config.eyeStyle = index
    },
    // 回调
    CALLBACK (url, qid) {
      // console.log(qid)
    },
    // 应用模板
    APPLY_TEMP (index) {
      this.CLEAR_DESIGN()
      if (index < 2) {
        for (let key in this.tempConfig[index]) {
          if (this.config[key] !== this.tempConfig[index][key]) {
            this.config[key] = this.tempConfig[index][key]
          }
        }
      } else {
        this.config.codeType = index - 1
      }
    },
    // 清楚配置
    CLEAR_DESIGN () {
      for (let key in this.config) {
        this.config[key] = this.initConfig[key]
      }
    }
  },
  components: {
    VueQr
  },
  created () {
    if (this.$route.params.data === undefined) {
      this.$router.go(-1)
    } else {
      this.text = this.$route.params.data
    }
  }
}
</script>

<style lang="scss" scoped>
.page-beautifier {
  width: 100%;
  height: 100%;
  .icon-jiantou {
    display: inline-block;
    transform: rotate(180deg);
  }
  .beautifier-wrapper {
    width: 100%;
    height: calc(100vh - 0.44rem);
    padding-top: 0.2rem;
    background: #a3d2e8;
    font-family: "Microsoft YaHei";
    .qrcode {
      width: 2.6rem;
      height: 2.6rem;
      margin: 0 auto 0.2rem;
    }
    // 分页菜单
    .tab {
      width: 100%;
      .mint-navbar{
        line-height: 0.5rem;
        height: 0.5rem;
        background: rgba(36,170,249,0.3);
        .mint-tab-item {
          color: #fff;
          &.is-selected{
            position: relative;
            margin-bottom: 0;
            color: #26a2ff;
            overflow: hidden;
          }
          &.is-selected :after {
            content: '';
            position: absolute;
            left: 0.38rem;
            top: 0.45rem;
            width: 0.2rem;
            height: 0.2rem;
            transform: rotate(45deg);
            background: #26a2ff;
          }
        }
      }
    }
    // scroll
    .scroll {
      top: 3.94rem;
    }
    // 操作菜单内容
    .tab-content {
      padding: 0.2rem 0.3rem;
      color: #000000;
    }
  }
}
// dialog样式
.dialog_wrapper {
  .img_wrapper {
    display: flex;
    .img_item {
      flex: 1 1 50%;
      text-align: center;
      img {
        width: 0.5rem;
        height: 0.5rem;
        margin: 0.15rem;
      }
    }
  }
}
// 嵌入模块----------------------------------------------------------------------
.embed {
  .el-form {
    .el-form-item {
      img {
        width: 0.3rem;
        height: 0.3rem;
        vertical-align: middle;
      }
    }
  }
}
// 码眼--------------------------------------------------------------------------------
.eye_pic_wrapper {
  display: flex;
  img {
    width: 0.3rem;
    height: 0.3rem;
    margin-right: 0.1rem;
  }
}
// 模板
.temp_wrapper {
  display: flex;
  flex-wrap: wrap;
  .temp_item {
    flex: 0 0 50%;
    img {
      padding: 0.1rem;
    }
  }
}
</style>
<style lang="scss">
// 样式对冲
.el-slider {
  width: 1.8rem;
}
.el-dialog {
  position: absolute;
  margin: 0 auto;
  bottom: 0;
  margin-top: 0 !important;
  background: #a3d2e8;
  .el-dialog__header {
    border-radius: 0.1rem;
    border-bottom: 0.01rem solid #ddd;
    text-align: center;
    .el-dialog__title {
      color: #fff;
    }
  }
  .el-dialog__body {
    padding: 0.24rem 0.2rem;
    overflow-y: auto;
  }
}
</style>
