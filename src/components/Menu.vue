<template>
  <el-row class="tac">
      <el-menu
        :default-active="active"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        v-for="imenu in menu">
        <el-submenu :index="imenu.id.toString()">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>{{imenu.name}}</span>
          </template>
          <el-menu-item :index="menuItem.id.toString()" v-for="menuItem in imenu.functionList"  @click=handleChange(menuItem)>{{menuItem.name}}</el-menu-item>
        </el-submenu>
      </el-menu>
  </el-row>
</template>

<script>
  import {getFun} from "@/request/api"

  export default {
  name: 'Menu',
  components: {

    },
  data () {
    return {
      menu:[],
      active:''
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
      this.$router.push({ path: menu.path })
    },
    // 查询菜单
    queryFun(){
      let _this = this
      getFun().then((res)=>{
        _this.menu = res
        _this.$router.push({ path: _this.menu[0].functionList[0].path })
        _this.active = _this.menu[0].functionList[0].id.toString()
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
  width: 240px;
  /*min-height: 400px;*/
}
</style>
