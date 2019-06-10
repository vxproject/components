const music = [
  { title: '西游记-猴哥', url: 'https://6c73-lszmusic-dsdxp-1259095491.tcb.qcloud.la/song/%E8%A5%BF%E6%B8%B8%E8%AE%B0-%E7%8C%B4%E5%93%A5.mp3?sign=0688b2393a36dd55764309b3402caeef&t=1556170709',flag:false },
  { title: '梁祝(轻)', url: 'https://6c73-lszmusic-dsdxp-1259095491.tcb.qcloud.la/music/%E6%A2%81%E7%A5%9D.mp3?sign=7b8e93ee352a2cfda523559243211362&t=1556170726', flag: false},
  { title: '梦中的婚礼(轻)', url: 'https://6c73-lszmusic-dsdxp-1259095491.tcb.qcloud.la/music/%E6%A2%A6%E4%B8%AD%E7%9A%84%E5%A9%9A%E7%A4%BC.mp3?sign=9edfdd57d3e29ce36356d540a9b07033&t=1556170738', flag: false },
  { title: '月光(轻)', url: 'https://6c73-lszmusic-dsdxp-1259095491.tcb.qcloud.la/music/%E7%BA%AF%E9%9F%B3%E4%B9%90-Luna%20%E6%9C%88%E5%85%89.mp3?sign=311b8b1e0b52e233e927431b267c35a3&t=1556170756', flag: false },
  { title: '罗密欧与朱丽叶(轻)', url: 'https://6c73-lszmusic-dsdxp-1259095491.tcb.qcloud.la/music/%E7%BD%97%E5%AF%86%E6%AC%A7%E4%B8%8E%E6%9C%B1%E4%B8%BD%E5%8F%B6.mp3?sign=b0d7a67afcac203633f908d386752a1c&t=1556170772', flag: false},
  { title: '雪的梦幻(轻)', url: 'https://6c73-lszmusic-dsdxp-1259095491.tcb.qcloud.la/music/%E9%9B%AA%E7%9A%84%E6%A2%A6%E5%B9%BB.mp3?sign=da04b14ca65ab7bdfbee28122d66d9da&t=1556170787', flag: false},
  { title: '再也没有', url: 'https://6c73-lszmusic-dsdxp-1259095491.tcb.qcloud.la/song/%E7%BF%BB%E5%94%B1%E5%A4%A9%E5%9B%A2-%E3%80%8A%E5%86%8D%E4%B9%9F%E6%B2%A1%E6%9C%89%E3%80%8B%E7%88%86%E7%BA%A2%E6%8A%96%E9%9F%B3%E7%A5%9E%E6%9B%B2%2C%E5%94%B1%E7%9A%84%E6%92%95%E5%BF%83%E8%A3%82%E8%82%BA%2C%E7%88%B1%E4%B8%8A%E4%BA%86-%E9%9F%B3%E4%B9%90%E9%A9%BF%E7%AB%99.mp3?sign=bb8d84651c4224a015b7be47d3177527&t=1556334016', flag: false },
  { title: '五百年', url: 'https://6c73-lszmusic-dsdxp-1259095491.tcb.qcloud.la/song/%E7%8E%8B%E7%AB%8B%E5%86%9B-%E4%BA%94%E7%99%BE%E5%B9%B4%E6%A1%91%E7%94%B0%E6%B2%A7%E6%B5%B7.mp3?sign=47ab4f8ce79db9a6563c723e660ec33e&t=1556334086', flag: false },
  { title: '一家人', url: 'https://6c73-lszmusic-dsdxp-1259095491.tcb.qcloud.la/song/Frida%20Amundsen-You%20Are%20Not%20Alone.mp3?sign=fb04c97d7e0e8651c306ab518516a254&t=1556334130', flag: false },
  { title: '都说', url: 'https://6c73-lszmusic-dsdxp-1259095491.tcb.qcloud.la/song/%E9%99%88%E4%BE%9D%E6%A2%A6-%E9%83%BD%E8%AF%B4.mp3?sign=5456b946a886846782893a23224fc89a&t=1556334284', flag: false },
 
  { title: 'VR', url: 'https://6c73-lszmusic-dsdxp-1259095491.tcb.qcloud.la/song/we%20are.mp3?sign=7a4f3fd52279ae849799764b78c883b6&t=1556334404', flag: false },
  { title: 'You Rase Me  Up', url: 'https://6c73-lszmusic-dsdxp-1259095491.tcb.qcloud.la/song/you%20rase.mp3?sign=520113bbfbb4d9536c39dd5e3a220f04&t=1556334446', flag: false },
]

const  video=[
  { title: '个人', url:'cloud://lszmusic-dsdxp.6c73-lszmusic-dsdxp/video/me.mp4',flag:false},
  { title: '加油站', url: 'cloud://lszmusic-dsdxp.6c73-lszmusic-dsdxp/video/加油.mp4', flag: false },
  { title: '妈，你想我吗', url: 'cloud://lszmusic-dsdxp.6c73-lszmusic-dsdxp/video/妈，你想我吗？.mp4', flag: false },
  { title: '文达', url: 'cloud://lszmusic-dsdxp.6c73-lszmusic-dsdxp/video/文达.mp4', flag: false },
  { title: '经历了什么', url: 'cloud://lszmusic-dsdxp.6c73-lszmusic-dsdxp/video/1c622c9ac38fc1d6d234159bb8d2bb8d.mp4', flag: false },
  { title: '为了活着，必须坚持', url: 'cloud://lszmusic-dsdxp.6c73-lszmusic-dsdxp/video/印度女孩.mp4', flag: false },

]
module.exports = {
  music,video
}