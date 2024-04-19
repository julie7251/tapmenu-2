// $(document).ready(function () {
//   const tabtitel = $(".tab-nav li a");
//   tabtitel.click(function (e) {
//     e.preventDefault();
//     tabtitel.removeClass("active");
//     $(this).addClass("active");
//     $(".tabitem").hide();
//     let target = $(this).attr("href");
//     $(target).show()
//   });
//   tabtitel.eq(0).trigger("click")
// });
// 자바스크립트
// window.onload(function(){

// })
window.addEventListener("load", function () {
  const tabtitle = this.document.querySelectorAll(".tab-nav li a");
  tabtitle.forEach(function (element) {
    element.addEventListener("click", function (e) {
      e.preventDefault();
      tabtitle.forEach(function (item) {
        item.classList.remove("active");
      });
      this.classList.add("active");

      const tabItems = document.querySelectorAll(".tabitem");
      tabItems.forEach(function (tab) {
        tab.style.display = "none";
      });
      const target = this.getAttribute("href");
      document.querySelector(target).style.display = "block";
    });
  });
  tabtitle[0].click();
});
