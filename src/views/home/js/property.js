export default {
  data() {
    return {
      menuList: [
        {name: '我的一天', iconUrl: require('@/assets/myday.png')},
        {name: '阅读', iconUrl: require('@/assets/book.png')},
        {name: '电影', iconUrl: require('@/assets/movie.png')},
      ],
      menuIndex: 0,
    }
  }
}