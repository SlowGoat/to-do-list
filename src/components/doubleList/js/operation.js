export default {
  methods: {
    unSeenFrontBtnClick(index) {
      this.$emit('unSeenFrontBtnClick', index)
    },
    unSeenDelete(index) {
      this.$emit('unSeenDelete', index)
    },
    seenFrontBtnClick(index) {
      this.$emit('seenFrontBtnClick', index)
    },
    seenDelete(index) {
      this.$emit('seenDelete', index)
    },
  }
}