export default {
  methods: {
    submit(content) {
      this.toDoList.push(content)

    },
    todoFrontClcik(index) {
      this.doneList.push(this.toDoList[index])
      this.toDoList.splice(index, 1)
      
    },
    todoDelete(index) {
      this.toDoList.splice(index, 1)
    },
    doneFrontClcik(index) {
      this.toDoList.push(this.doneList[index])
      this.doneList.splice(index, 1)
    },
    doneDelete(index) {
      this.doneList.splice(index, 1)
    },
  },
  beforeDestroy() {
    this.$setMemoryPmt("toDoList", this.toDoList)
    this.$setMemoryPmt("doneList", this.doneList)
  },
}