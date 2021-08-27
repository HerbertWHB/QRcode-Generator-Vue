<template>
    <div class="page-view page-active-code">
        <z-header title='活码管理'>
            <span slot="user" class="iconfont icon-jiantouarrowhead7" @click="FORMER_PAGE()"></span>
            <span slot="scan" class="iconfont icon-tianjia" @click="ADD_MODIFY()"></span>
        </z-header>
        <scroll ref="scroll" class="scroll scroll-top">
            <div class="index_wrapper">
              <div class="nodata" v-if="!ActiveCode.length">暂无数据</div>
              <div class="code_container" v-else v-for="(item, index) in ActiveCode" :key="index">
                  <div id='qrcode' class="qrcode_block">
                    <img :src="item.base64" alt="">
                  </div>
                  <div class="code_info">
                      <p>活码ID:{{ item.id }}</p>
                      <p>网址: {{ item.content }}</p>
                      <p>名称：{{ item.name }}</p>
                      <div class="button_wrapper">
                        <button @click="ADD_MODIFY(index)" style="color:#409eff;">修改</button>
                        <button @click="DELETE_CODE(index)" style="color:red;">删除</button>
                      </div>
                  </div>
              </div>
            </div>
        </scroll>
        <el-dialog :visible.sync="dialogVisible" title="活码管理" width="80%">
            <el-form ref="form" :model="dataForm" label-width="0.6rem" :rules="rules">
                <el-form-item label="名称" prop="name">
                    <el-input v-model="dataForm.name"></el-input>
                </el-form-item>
                <el-form-item label="地址" prop="content">
                    <el-input v-model="dataForm.content"></el-input>
                </el-form-item>
                <el-form-item style="text-align:right;">
                    <el-button type="primary" @click="dataFormSubmit">提交</el-button>
                </el-form-item>
            </el-form>
        </el-dialog>
    </div>
</template>
<script>
export default {
  name: 'activeCode',
  data () {
    return {
      dialogVisible: false,
      ActiveCode: [],
      rules: {
        name: {required: true, message: '请填写名称', trigger: 'blur'},
        content: {required: true, message: '请填写网址', trigger: 'blur'}
      },
      dataForm: {
        id: '',
        name: '',
        content: ''
      }
    }
  },
  methods: {
    FORMER_PAGE () {
      this.$router.go(-1)
    },
    // 查询活码列表
    QUERY_CODE () {
      this.axios.post('/code/query').then(res => {
        this.$indicator.close()
        if (res.state === 1) {
          this.ActiveCode = res.data || []
        }
      }).catch(err => {
        this.$indicator.close()
        console.log(err)
      })
    },
    // 新增/修改
    ADD_MODIFY (index) {
      if (index + 1) {
        this.dataForm.id = this.ActiveCode[index].id
        this.dataForm.name = this.ActiveCode[index].name
        this.dataForm.content = this.ActiveCode[index].content
        this.dialogVisible = true
      } else {
        this.dataForm.id = ''
        this.dataForm.name = ''
        this.dataForm.content = ''
        this.dialogVisible = true
      }
    },
    // 删除活码
    DELETE_CODE (index) {
      let id = this.ActiveCode[index].id
      this.$messagebox.confirm('确定删除？').then(action => {
        if (action === 'confirm') {
          this.$indicator.open()
          this.axios.post('/code/delete', {id: id}).then(res => {
            if (res.state === 1) {
              this.QUERY_CODE()
              setTimeout(() => {
                this.$toast(res.msg)
              }, 500)
            }
          }).catch(err => {
            console.log(err)
          })
        }
      }).catch(err => {
        if (err === 'cancel') {
          this.$indicator.close()
        }
      })
    },
    // 表单提交
    dataFormSubmit () {
      this.$refs['form'].validate(valid => {
        if (valid) {
          this.dataForm.id
            ? this.axios.post('/code/update', this.dataForm).then(res => {
              if (res.state === 1) {
                this.QUERY_CODE()
                this.dialogVisible = false
              } else {
              }
            })
            : this.axios.post('/code/insert', this.dataForm).then(res => {
              if (res.state === 1) {
                this.QUERY_CODE()
                this.dialogVisible = false
                setTimeout(() => {
                }, 1000)
              } else {
                setTimeout(() => {
                  this.dialogVisible = false
                }, 1000)
              }
            })
        }
      })
    }
  },
  created () {
    this.$indicator.open()
    this.$nextTick(() => {
      this.QUERY_CODE()
    })
  },
  mounted () {
  }
}
</script>

<style lang="scss" scoped>
.index_wrapper{
    width: 100%;
    .nodata {
        text-align: center;
        line-height: 4rem;
    }
    .code_container {
        height: 1.5rem;
        padding: 0.25rem 0.15rem;;
        background: #f1f4f5;
        border-bottom: 0.01rem solid #ddd;
        .qrcode_block {
            display: inline-block;
            width: 1rem;
            height: 1rem;
            border:0.01rem solid #ddd;
        }
        .code_info {
          position: relative;
          display: inline-block;
          vertical-align: top;
          width: 2.35rem;
          height: 1rem;
          padding: 0.1rem;
          background: #fff;
          p {
            font-size: 0.12rem;
            padding: 0.02rem 0;
            font-family: "Microsoft YaHei"
          }
          .button_wrapper {
            position: absolute;
            right: 0.1rem;
            bottom: 0.1rem;
            text-align: right;
            button {
              background: none;
              outline: none;
              border: none;
            }
          }
        }
    }
}
</style>
