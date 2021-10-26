<template>
  <el-row class="tac">
    <el-col :span="12">
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        v-for="imenu in menu">
        <el-submenu :index="imenu.id">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>{{imenu.name}}</span>
          </template>
          <el-menu-item :index="menuItem.id" v-for="menuItem in imenu.functionList"  @click=handleChange(menuItem)>{{menuItem.name}}</el-menu-item>
        </el-submenu>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
  import {getFun} from "@/request/api"

  export default {
  name: 'Menu',
  data () {
    return {
      menu:[]
    }
  },
  created() {
    this.queryFun();
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    handleChange(menu) {
      console.log(menu.id);

    },
    // 查询菜单
    queryFun(){
      getFun().then((res)=>{
        console.log(res)
        this.menu = res
        console.log(this.menu)
      }).catch((err)=>{
        console.log("err==>",err);
      })


    }
  }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
