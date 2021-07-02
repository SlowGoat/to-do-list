export default {
  data() {
    return {
      tabbarIndex: 0,
    }
  },
  props: {
    unSeenTip: String,
    seenTip: String,
    unSeenList: Array,
    seenList: Array,
  }
}