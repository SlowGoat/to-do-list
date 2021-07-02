export default {
  methods: {
    submit(content) {
      this.unSeenList.push(content)

    },
    unSeenFrontBtnClick(index) {
      this.seenList.push(this.unSeenList[index])
      this.unSeenList.splice(index, 1)
    },
    unSeenDelete(index) {
      this.unSeenList.splice(index, 1)
    },
    seenFrontBtnClick(index) {
      this.unSeenList.push(this.seenList[index])
      this.seenList.splice(index, 1)
    },
    seenDelete(index) {
      this.seenList.splice(index, 1)
    },

  },
  beforeDestroy() {
    this.$setMemoryPmt("unSeenBookList", this.unSeenList)
    this.$setMemoryPmt("seenBookList", this.seenList)
  },
}