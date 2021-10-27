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

    <el-form-item label="hash-key">
      <el-input v-model="form.hashKey"></el-input>
    </el-form-item>

    <el-form-item label="hash-val">
      <div  v-for="(item ,index) in form.hashVal" style="margin-bottom: 10px;">
        <el-input v-model="form.hashVal[index].key"></el-input>
        <el-input v-model="form.hashVal[index].value"></el-input>
      </div>
      <el-button type="primary" @click="addHashVal()">+</el-button>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="hmSet()">保存</el-button>
      <el-button type="primary" @click="hmGet()">查询</el-button>
    </el-form-item>


    <el-form-item label="set-key">
      <el-input v-model="form.setKey"></el-input>
    </el-form-item>

    <el-form-item label="set-val">
      <div  v-for="(item ,index) in form.setVal">
        <el-input v-model="form.setVal[index]"></el-input>
      </div>
      <el-button type="primary" @click="addSetVal()">+</el-button>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="saveSet()">保存</el-button>
      <el-button type="primary" @click="getSet()">查询</el-button>
    </el-form-item>

    <el-form-item label="zset-key">
      <el-input v-model="form.zsetKey"></el-input>
    </el-form-item>

    <el-form-item label="zset-val">
      <div  v-for="(item ,index) in form.zsetVal">
        <el-input v-model="form.zsetVal[index].value"></el-input>
        <el-input v-model="form.zsetVal[index].score"></el-input>
      </div>
      <el-button type="primary" @click="addZSetVal()">+</el-button>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="saveZSet()">保存</el-button>
      <el-button type="primary" @click="getZSet()">查询</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  import {saveStr,getStr,lSet,lGet,hmSet,hmGet,sSet,sGet,zsAdd,zsGet} from "@/request/api"
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
          hashKey:'',
          hashVal:[{'key':'','value':''}],
          setKey:'',
          setVal:[''],
          zsetKey:'',
          zsetVal:[{'value':'','score':''}]
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
      addHashVal(){
        this.form.hashVal.push({'key':'','value':''})
      },
      addSetVal(){
        this.form.setVal.push('')
      },
      addZSetVal(){
        this.form.zsetVal.push({'value':'','score':''})
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
        let data = {'key':this.form.listKey,'value':this.form.listVal}
        lSet(data).then((res)=>{
          console.log(res)
        }).catch((err)=>{
          console.log("err==>",err);
        })
      },
      getList(){
        let data = {'key':this.form.listKey}
        lGet(data).then((res)=>{
          console.log(res)
        }).catch((err)=>{
          console.log("err==>",err);
        })
      },
      hmSet(){
        let dataItem = {}
        for(let item in this.form.hashVal){
          console.log('item',item)
          dataItem[this.form.hashVal[item].key] = this.form.hashVal[item].value
        }
        let data = {'key':this.form.hashKey,'value':dataItem}
        hmSet(data).then((res)=>{
          console.log(res)
        }).catch((err)=>{
          console.log("err==>",err);
        })
      },
      hmGet(){
        let data = {'key':this.form.hashKey,'colName':this.form.hashVal[0].key}
        hmGet(data).then((res)=>{
          console.log(res)
        }).catch((err)=>{
          console.log("err==>",err);
        })
      },
      saveSet(){
        let data = {'key':this.form.setKey,'value':this.form.setVal}
        sSet(data).then((res)=>{
          console.log(res)
        }).catch((err)=>{
          console.log("err==>",err);
        })
      },
      getSet(){
        let data = {'key':this.form.setKey}
        sGet(data).then((res)=>{
          console.log(res)
        }).catch((err)=>{
          console.log("err==>",err);
        })
      },
      saveZSet(){
      let data = {'key':this.form.zsetKey,'value':this.form.zsetVal}
        zsAdd(data).then((res)=>{
        console.log(res)
      }).catch((err)=>{
        console.log("err==>",err);
      })
    },
      getZSet(){
      let data = {'key':this.form.hashKey,'score1':1,'score2':100,}
        zsGet(data).then((res)=>{
        console.log(res)
      }).catch((err)=>{
        console.log("err==>",err);
      })
    },
    }
  }
</script>

<style>
</style>
