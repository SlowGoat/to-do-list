<template>
  <div>
    <!-- 输入框区域 -->
    <div class="input_box">
      <!-- 传入的模块名 -->
      <div class="module_name">{{moduleName}}</div>
      <!-- 输入框 -->
      <input type="text" :placeholder="holderText" @keyup.enter="submit" v-model="content"/>
      <!-- 对应模块icon -->

      <div class="module_icon">{{moduleTip}}</div>
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
