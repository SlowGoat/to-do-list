export default {
  methods: {
    frontBtnClick(index) {
      this.$emit('frontBtnClick', index)
    },
    behindBtnClick(index) {
      this.$emit('behindBtnClick', index)
    },
  }
}