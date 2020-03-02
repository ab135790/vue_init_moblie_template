// rem 响应式布局公式
/* eslint-disable */
(function (doc, win) {
	let docEl = doc.documentElement;
	let resizeEt = 'orientationchange' in window ? 'orientationchange' : 'resize';
	let recalc = function () {
		let clientWidth = docEl.clientWidth;
		if (!clientWidth) return;
		if (clientWidth >= 750) {
			docEl.style.fontSize = '100px';
		} else {
			docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
		}
	};
	if (!doc.addEventListener) return;
	win.addEventListener(resizeEt, recalc, false);
	doc.addEventListener('DOMContentLoaded', recalc, false);
	recalc();
})(document, window);
