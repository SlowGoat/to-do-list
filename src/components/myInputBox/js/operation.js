export default {
  methods: {
    submit() {
      
      this.$emit('submit', this.content)
      this.content = ""
    }
  }
}