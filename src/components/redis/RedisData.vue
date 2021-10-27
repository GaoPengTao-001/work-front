<template>
  <!-- 组件模板内容 -->
  <el-form ref="form"  :inline="true" :model="form" label-width="80px" class="demo-form-inline">
    <el-form-item label="string-key">
      <el-input v-model="form.strKey"></el-input>
    </el-form-item>
    <el-form-item label="string-val">
      <el-input v-model="form.strVal"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="saveStr()">保存</el-button>
      <el-button type="primary" @click="getStr()">查询</el-button>
    </el-form-item>

    <el-form-item label="list-key">
      <el-input v-model="form.listKey"></el-input>
    </el-form-item>

    <el-form-item label="list-val">
      <div  v-for="(item ,index) in form.listVal">
        <el-input v-model="form.listVal[index]"></el-input>
      </div>
      <el-button type="primary" @click="add()">+</el-button>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="saveList()">保存</el-button>
      <el-button type="primary" @click="getList()">查询</el-button>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">立即创建</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  import {saveStr,getStr} from "@/request/api"
  export default {
    // 组件名称
    name: "RedisData",
    // 组件数据
    data: function() {
      return {
        form: {
          strKey: '',
          strVal: '',
          listKey:'',
          listVal: [''],
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: ''
        }
      }
    },
    props:[],
    //组件生命周期
    created: function(e) {

    },
    //组件内部方法
    methods: {
      add(){
        this.form.listVal.push('')
      },
      saveStr(){
        let data = {'key':this.form.strKey,'value':this.form.strVal}
        saveStr(data).then((res)=>{
          console.log(res)
        }).catch((err)=>{
          console.log("err==>",err);
        })
      },
      getStr(){
        let data = {'key':this.form.strKey}
        getStr(data).then((res)=>{
          console.log(res)
        }).catch((err)=>{
          console.log("err==>",err);
        })
      },
      saveList(){

      },
      getList(){

      }

    }
  }
</script>

<style>
</style>
