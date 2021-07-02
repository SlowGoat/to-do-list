export default {
  methods: {
    menuItemClick(index) {

      if(index === this.menuIndex) return

      this.menuIndex = index;

      switch (index) {
        case 0:
          this.$router.push("/home/myday");
          break;
        case 1:
          this.$router.push("/home/read");
          break;
        case 2:
          this.$router.push("/home/movie");
          break;
      }


      
    },
  },
};
