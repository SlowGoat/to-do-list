<template>

  <div class="content">
    <div class="title">{{`${title}(${list.length})`}}</div>
    <!-- 列表区域 -->
    <div class="list_area">

      <!-- 默认占位 -->
      <div v-if="list.length === 0" class="holder_tip">
        {{holderTip}}
      </div>

      <div class="list_item" v-for="(item, index) in list">
        <img :src="styleSelect === 0 ? require(`@/assets/done.png`) : require(`@/assets/cancel.png`)" @click="frontBtnClick(index)">
        <div class="list_content" :class="{'grey_content': styleSelect === 1}">{{item}}</div>
        <img :src="styleSelect === 0 ? require(`@/assets/delete_blue.png`) : require(`@/assets/delete_green.png`)" @click="behindBtnClick(index)">
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
