<template>
  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
    <van-swipe-item>1</van-swipe-item>
    <van-swipe-item>2</van-swipe-item>
    <van-swipe-item>3</van-swipe-item>
    <van-swipe-item>4</van-swipe-item>
  </van-swipe>
</template>
<script>
  import {saveStr,getStr,lSet,lGet,hmSet,hmGet,sSet,sGet,zsAdd,zsGet} from "@/request/api"
  import {Button} from 'vant'
  export default {
    // 组件名称
    name: "Test",
    components: {
      [Button.name]: Button
    },
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

    }
  }
</script>

<style>
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }
</style>
