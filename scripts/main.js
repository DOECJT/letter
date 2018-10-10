const app = new Vue({
  el: '#app',
  data: {
    date: new Date(),
    status: 0,
    isPlaying: true
  },
  methods: {
    start() {
      this.status = 1;
      setTimeout(() => {
        this.status = 2;
      }, 500);
    },
    toggleBgm() {
      this.isPlaying = !this.isPlaying;
      if (this.isPlaying) {
        this.$refs.song.play();
      } else {
        this.$refs.song.pause();
      }
    }
  }
});