import MyInputBox from '@/components/myInputBox/index'
import DoubleList from '@/components/doubleList/index'

export default {
	created() {
		this.unSeenList = this.$getMemoryPmt("unSeenMovieList") ?? []
		this.seenList = this.$getMemoryPmt("seenMovieList") ?? []
	},
	components: {
		MyInputBox,
		DoubleList,
	}
}