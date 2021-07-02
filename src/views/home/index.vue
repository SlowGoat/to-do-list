<template>
  <div class="container">
    <!-- 左半部 -->
    <div class="container_left">
      <!-- 导航栏 -->
      <div class="navigation_bar">
        <!-- 旋转头像区 -->
        <div class="avatar">
          
          <img src="@/assets/pika.jpg">
          
        </div>

        <!-- 菜单按钮区域 -->
        <div class="menu">
          <div 
            class="menu_item" 
            :class="{'menu_item_active': index === menuIndex}"
            v-for="(item, index) in menuList" @click="menuItemClick(index)">
            <img :src="item.iconUrl">
            <div class="menu_name">{{item.name}}</div>
          </div>
        </div>
      </div>
    </div>
    <!-- 右边router-view -->
    <router-view></router-view>
  </div>
</template>

<script>
import Initial from "./js/initial";
import Operation from "./js/operation";
import Property from "./js/property";
export default {
  mixins: [Initial, Operation, Property],
};
</script>

<style lang="scss" scoped src="./scss/index.scss"></style>
