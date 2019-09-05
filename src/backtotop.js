var backTop = document.getElementById("back-top");

window.addEventListener("scroll", function(e) {
  //alert("滚动了");
  //变量t就是滚动条滚动时，到顶部的距离
  var t = document.documentElement.scrollTop || document.body.scrollTop;
  // console.log(t)
  // if(t <= 0){
  // alert("到顶部了")
  // }
  if (t < 500) {
    backTop.style.display = "none";
  } else {
    backTop.style.display = "block";
  }
});
