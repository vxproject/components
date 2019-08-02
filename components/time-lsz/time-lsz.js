// components/time-lsz/time-lsz.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    time: { //时间段（秒）
      type: Number,
      value: 86400
    },
    border: {  //是否有边框   false 没有   true 有
      type: Boolean,
      value: false
    },
    radius: {  //是否圆润角   false 直角  true 圆润角
      type: Boolean,
      value: false
    },
    color: {  //时间的字体颜色
      type: String,
      value: '#a3a3a3'
    },
    size: {//时间的字体大小  (最大100号字体)
      type: Number,
      value: 28
    }

  },

  /**
   * 组件的初始数据
   */
  data: {
    hour: '00',
    minute: '00',
    second: '00',
    timer: null,
  },
  lifetimes: {
    attached() {
      if (this.data.size > 100) {
        this.setData({
          size: 28
        })
      }
      this.countDown(this.data.time)
    },
    ready() {


    },
    detached() {
      // 在组件实例被从页面节点树移除时执行
      clearInterval(this.data.timer);
    },
  },

  /**
   * 组件的方法列表
   */
  methods: {

    countDown(times) {

      this.data.timer = setInterval(_ => {
        var
          hour = 0,
          minute = 0,
          second = 0; //时间默认值
        if (times > 0) {

          hour = Math.floor(times / (60 * 60));
          minute = Math.floor(times / 60) - (hour * 60);
          second = Math.floor(times) - (hour * 60 * 60) - (minute * 60);
        }
        if (hour <= 9) hour = '0' + hour;
        if (minute <= 9) minute = '0' + minute;
        if (second <= 9) second = '0' + second;
        //
        this.setData({
          hour: hour,
          minute: minute,
          second: second,
        })
        times--;
      }, 1000);
      if (times <= 0) {
        this.setData({
          hour: '00',
          minute: '00',
          second: '00'
        })
        clearInterval(this.data.timer);
      }

    }
  }
})