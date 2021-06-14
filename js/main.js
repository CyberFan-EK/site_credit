// .firefox
// var isFF = true;
// var addRule = (function(style) {
//   var sheet = document.head.appendChild(style).sheet;
//   return function(selector, css) {
//     if (isFF) {
//       if (sheet.cssRules.length > 0) {
//         sheet.deleteRule(0);
//       }

//       try {
//         sheet.insertRule(selector + "{" + css + "}", 0);
//       } catch (ex) {
//         isFF = false;
//       }
//     }
//   };
// })(document.createElement("style"));

// .chrome styling
$(".calculate__calcsum-range input").on("input", function() {
  $(this).css(
    "background",
    "linear-gradient(to right, #1C841B 0%, #1C841B " +
      ((this.value - this.min) / (this.max - this.min)) * 100 +
      "%,  #C4C4C4 " +
      ((this.value - this.min) / (this.max - this.min)) * 100 +
      "%, #C4C4C4 100%)"
  );
});

window.addEventListener("load", () => {
  const range = document.getElementsByClassName(
    "calculate__calsum-range-input"
  );
  for (let item of range) {
    item.style.background = `linear-gradient(to right,#1c841b 0%,#1c841b ${((item.value -
      item.min) /
      (item.max - item.min)) *
      100}%, #c4c4c4 ${((item.value - item.min) / (item.max - item.min)) *
      100}%,#c4c4c4 100%)`;
  }
});
