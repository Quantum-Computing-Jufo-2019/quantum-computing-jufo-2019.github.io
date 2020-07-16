function onload(){
  md = new MobileDetect(window.navigator.userAgent);
  checkDeviceType();
  initGalleries();
}
function setClassState(condition,element,class_name){
  if(condition){
    element.classList.add(class_name);
  }else{
    element.classList.remove(class_name);
  }
}
function initGalleries(){
  $(".picture").bind("click",function(){
    toogleZoom();
  });
  $(".gallerie_controll").bind("click",function(){
    galleryControllClicked();
  });
}

function toogleZoom(){
  if($(event.target).hasClass("zoom")){
    closeZoom();
  }else{
    zoomPicture(event.target);
  }
}
function zoomPicture(picture){
  //$(".picture").removeClass("zoom");
  $("html").addClass("zoom");
  //$(picture).addClass("zoom");
  pos = $(picture).offset();
  src = $(picture).attr("src");
  height = $(picture).height();
  width = $(picture).width();
  $("#zoomed_image").show();

  function setToOrgiginalPos(){
    return new Promise(function(resolve, reject) {
      $("#zoomed_image").attr("src",src);
      $("#zoomed_image").offset(pos);
      $("#zoomed_image").css("width",width);
      $("#zoomed_image").css("height",height);
      $("#zoomed_image").css("max-width",width);
      $("#zoomed_image").css("max-height",height);
      resolve();
    });
  }
  function centerImagePX(){
    return new Promise(function(resolve, reject) {
      $("#zoomed_image").animate({
        top: ($("html").height() - $("#zoomed_image").height())/2+"px",
        left: ($("html").width() - $("#zoomed_image").width())/2+"px",
      },function(){
        resolve();
      });
    });
  }
  function centerImagePC(){
    return new Promise(function(resolve, reject) {
      $("#zoomed_image").css({
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      });
      resolve();
    });
  }
  function extendPX(){
    return new Promise(function(resolve, reject) {
      $("#zoomed_image").css("width","");
      $("#zoomed_image").css("height","");
      $("#zoomed_image").animate({
        "max-width": $("html").width()+"px",
        "max-height": $("html").height()+"px",
      },function(){
        resolve();
      });
    });
  }
  function extendPC(){
    return new Promise(function(resolve, reject) {
      $("#zoomed_image")[0].style.maxWidth = "";
      $("#zoomed_image")[0].style.maxWidth = "100%";
      $("#zoomed_image")[0].style.maxHeight = "";
      $("#zoomed_image")[0].style.maxHeight = "100%";
      //$("#zoomed_image").css("max-height", "");
      resolve();
    });
  }
  function setSource(){
      return new Promise(function(resolve, reject) {
          let source = $(picture).attr("data-source");
          if(source){
            $("#zoomed_image_source").text("Quelle: "+source);
          }else{
              $("#zoomed_image_source").text("");
          }
         resolve();
      });
  }

  setSource()
  .then(setToOrgiginalPos)
  .then(centerImagePX)
  .then(centerImagePC)
  .then(extendPX)
  .then(extendPC);
}
function closeZoom(){
  $("html").removeClass("zoom");
  $("#zoomed_image").hide();
  $("#zoomed_image").removeAttr("style");
  $("#zoomed_image").removeAttr("src");
}
