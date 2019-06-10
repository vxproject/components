// components/radio-lsz/radio-lsz.js
Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  /**
   * 组件的属性列表
   */
  properties: {
    array: { //选项列表
      type: Array,
      value: []
    },
    type: { //选框类型有效值  radio（单选） checkbox（多选）
      type: String,
      value: 'radio'
    },
    checked: { //是否设置默认选中(仅单选有效)
      type: Boolean,
      value: false
    },
    checkedindex: { //默认选中的下标 （仅 checked为true 时有效）
      type: Number,
      value: 0
    },
    checkType: { //选择框类型（直角:box ，圆角:roundCorner，圆:circle）
      type: String,
      value: 'roundCorner'
    }


  },

  /**
   * 组件的初始数据
   */
  data: {
    flag: false, //false 代表 选择框 隐藏
    newArray: [], //复选框使用
  },
  lifetimes: {
    attached() { //组件初始化
      console.info('attached')
      let array = this.data.array;
      let checked = this.data.checked; //默认选择 

      let type = this.data.type; //选择框类型

      array.forEach(item => {
        item.flag = false;
      })
      if (type == 'radio' && checked) {
        let index = this.data.checkedindex; //选中的下标
        array[index].flag = true;
      }
      this.setData({
        array: array
      })

      console.info(this.data.array)
    },
    ready() { //渲染页面时
    

    },
    detached() {
      // 在组件实例被从页面节点树移除时执行
    },
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 选择框公用方法
    radioshow() { //弹框显示
      this.setData({
        flag: true
      })
    },
    catchtouchmove(){
    
     return;
    },

    // 私有方法
    _hidden() { //弹框隐藏  (将选择的选项 传递)
      let event = '';

      if (this.data.type == 'radio') {
        event = {
          index: '暂无选项',
          item: '暂无选项'
        };
        if (this.data.array[this.data.checkedindex].flag) {
          let index = this.data.checkedindex;
          event.index = index;
          event.item = this.data.array[index];
        }
      }

      if (this.data.type == 'checkbox') {
        event = [{
          index: '暂无选项',
          item: '暂无选项'
        }];
        if (this.data.newArray.length) {
          event = this.data.newArray;
        }
      }
      this.setData({
        flag: false
      })
      this.triggerEvent('cancel', event);

    },
    _chooseOne(e) {
      let type = this.data.type; //选择框类型
      let index = e.currentTarget.dataset.index; //当前选择的下标
      let array = this.data.array;
      if (type == 'radio') { //单选
        let checkFlag = array[index].flag;
        array.forEach(item => {
          item.flag = false;
        })
        array[index].flag = !checkFlag;
        this.setData({
          array: array,
          checkedindex: index
        })
      }
      if (type == 'checkbox') { //多选
        let newArray = [];
        array[index].flag = !array[index].flag;
        array.forEach((item, index) => {
          let obj = {};
          if (item.flag) {
            obj.index = index;
            obj.item = item;
            newArray.push(obj);
          }
        })
        this.setData({
          array: array,
          newArray: newArray
        })
      }
    }
  }
})