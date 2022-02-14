export default {
    props: {
    },
    mounted() {
        this.startTime();
    },
    methods: {
        startTime: function () {
            const today = new Date();
            let h = today.getHours();
            let m = today.getMinutes();
            let s = today.getSeconds();
            m = this.checkTime(m);
            s = this.checkTime(s);
            document.getElementById('clock').innerHTML = h + ":" + m + ":" + s;
            setTimeout(this.startTime, 1000);
        },
        checkTime: function (i) {
            if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
            return i;
        }
    },
    template: /*html*/`
    <div class="drag" id="dragClock">
        <div class="clock" id="clock"></div>
    </div>
  `
}
