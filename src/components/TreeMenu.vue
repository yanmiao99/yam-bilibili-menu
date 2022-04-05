<!--
思路 :

1. 获取传递进来的数据
2. 使用 el-sub-menu 进行一个遍历 , 遍历传递过来的所有数据, 并且判断他是否有 children , 如果有children ,染病 menuType 为 1 的情况
   则使用 munuName 生成一个组
3. 递归判断是否有多级 children , 如果有 则继续生成下一级菜单
4. 判断到最后一个层级 , 如果说 menuType === 1 情况下,name这个肯定是可以 按钮 ,而不是一个组 所以, 这个应该用 el-menu-item 进行渲染

-->


<template>
  <div>
    <template v-for="item in treeData">
      <el-submenu
        :index="item._id"
        v-if="item.children && item.children.length > 0 && item.children[0].menuType.toString() === '1'">
        <template slot="title">
          <i :class="item.icon"></i>
          <span>{{item.menuName}}</span>
        </template>
        <TreeMenu :treeData="item.children"></TreeMenu>
      </el-submenu>
      <el-menu-item
          v-else-if="item.menuType.toString() === '1'"
          :index="item.path"
          :key="item._id"
      >
        {{item.menuName}}
      </el-menu-item>
    </template>
  </div>
</template>

<script>
export default {
  name: "TreeMenu",
  props:{
    treeData:{
      type:Array,
      default:function(){
        return []
      }
    }
  }
}
</script>

<style scoped>

</style>
