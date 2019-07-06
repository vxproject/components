/**
 *  字段解释
 title: '', 提示的标题
 content: '', 提示的内容
 showCancel: true,是否显示取消按钮
 cancelText: '', 最多 4 个字符
 cancelColor: '',  必须是 16 进制格式
 confirmText: '', 最多 4 个字符
 confirmColor: '',
 */


/**
 * 对话
 */
function Dialogue({
  title = '提示',
  content = '提示内容',
  cancelText = '取消',
  cancelColor = '#666666',
  confirmText = '确定',
  confirmColor = '#576B95',
}, confirm, cancel) {
  wx.showModal({
    title: title,
    content: content,
    success: res => {
      if (res.confirm) {
        typeof confirm == "function" && confirm(res)
      }
      if (res.cancel) {
        typeof cancel == "function" && cancel(res)
      }
    }
  })
}
/**
 * 提示
 */
function Prompt({
  title = '提示',
  content = '提示内容',
  showCancel = false,
  confirmText = '确定',
  confirmColor = '#576B95',
}, confirm) {
  wx.showModal({
    title: title,
    content: content,
    showCancel: showCancel,
    success: res => {
      typeof confirm == "function" && confirm(res)
    }
  })
}

module.exports = {
  Prompt,
  Dialogue
}