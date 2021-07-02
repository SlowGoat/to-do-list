<template>
  <div>
    <div class="container">
      <!-- 导航栏 -->
      <div class="tabbar">
        <div @click="tabbarIndex = 0" class="tabbar_item" :class="{'item_active_left': tabbarIndex === 0}">{{`未看(${unSeenList.length})`}}</div>
        <div @click="tabbarIndex = 1" class="tabbar_item" :class="{'item_active_right': tabbarIndex === 1}">{{`已看(${seenList.length})`}}</div>
      </div>

      <!-- 列表区 -->
      <div class="list_area" v-if="tabbarIndex === 0">
        <!-- 默认占位 -->
        <div v-if="unSeenList.length === 0" class="holder_tip">
          {{unSeenTip}}
        </div>

        <div class="list_item" v-for="(item, index) in unSeenList">
          <img src="@/assets/done.png" @click="unSeenFrontBtnClick(index)">
          <div class="list_content" >{{item}}</div>
          <img src="@/assets/delete_blue.png"  @click="unSeenDelete(index)">
        </div>
      </div>

      <div class="list_area" v-if="tabbarIndex === 1">
        <!-- 默认占位 -->
        <div v-if="seenList.length === 0" class="holder_tip">
          {{seenTip}}
        </div>

        <div class="list_item" v-for="(item, index) in seenList">
          <img src="@/assets/cancel.png" @click="seenFrontBtnClick(index)">
          <div class="list_content" >{{item}}</div>
          <img src="@/assets/delete_green.png"  @click="seenDelete(index)">
        </div>
      </div>
    </div>
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
