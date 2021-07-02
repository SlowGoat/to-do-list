import MyInputBox from '@/components/myInputBox/index'
import DoubleList from '@/components/doubleList/index'

export default {
	created() {
		this.unSeenList = this.$getMemoryPmt("unSeenBookList") ?? []
		this.seenList = this.$getMemoryPmt("seenBookList") ?? []
	},
	components: {
		MyInputBox,
		DoubleList,
	}
}