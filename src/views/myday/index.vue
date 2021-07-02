<template>
  <div class="container">
    <!-- 中央居中区域 -->
    <div class="main">
      <!-- 输入框区域 -->
      <MyInputBox :moduleName="moduleName" :holderText="holderText" :moduleTip="moduleTip" @submit="submit"></MyInputBox>
      <!-- 下半区 -->
      <div class="bottom">
        <SingleList :title="titleLeft" :list="toDoList" :styleSelect="styleLeft" :holderTip="holderTipLeft" @frontBtnClick="todoFrontClcik" @behindBtnClick="todoDelete"></SingleList>
        <SingleList class="right_item"  :title="titleRight" :list="doneList" :styleSelect="styleRight" :holderTip="holderTipRight" @frontBtnClick="doneFrontClcik" @behindBtnClick="doneDelete"></SingleList>

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
