import MyInputBox from '@/components/myInputBox/index'
import SingleList from '@/components/singleList/index'

export default {
	created() {
		this.toDoList = this.$getMemoryPmt("toDoList") ?? []
		this.doneList = this.$getMemoryPmt("doneList") ?? []
		
	},
	components: {
		MyInputBox,
		SingleList
	}
}