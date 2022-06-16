/**
 * 通过rem实现页面自适应
 */
(function (doc, win) {
  let docEl = doc.documentElement
  let resizeEvt = 'orientationchange' in win ? 'orientationchange' : 'resize'
  let resizeFun = function () {
    var clientWidth = docEl.clientWidth
    if (!clientWidth) return
    docEl.style.fontSize = 100 * (clientWidth / 375) + 'px'
  }
  if (!doc.addEventListener) return
  win.addEventListener(resizeEvt, resizeFun, false)
  doc.addEventListener('DOMContentLoaded', resizeFun, false)
}(document, window))
