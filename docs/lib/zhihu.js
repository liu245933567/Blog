// #region zhihu-image
/**
 * 获取知乎图片
 * @returns {Array<string>} 图片地址
 */
function getZhihuImage() {
  const imgEls = document.querySelectorAll('figure img');
  const srcs = [];
  imgEls.forEach((el) => {
    const original = el.getAttribute("data-original");
    const actualsrc = el.getAttribute("data-actualsrc");
    const isUrl = (u) => u && u.startsWith("http");

    if (isUrl(original) || isUrl(actualsrc)) {
      srcs.push({ original, actualsrc });
    }
  });
  console.log(JSON.stringify(srcs));

  return srcs;
}
// #endregion zhihu-image