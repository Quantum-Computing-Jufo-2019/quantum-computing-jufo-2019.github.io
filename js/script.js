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
function checkDeviceType(){
  html = document.getElementsByTagName("html")[0];

  setClassState(md.mobile(),html,"mobile");
  setClassState(md.phone(),html,"phone");
  setClassState(md.tablet(),html,"tablet")
}
function initGalleries(){
  $(".picture").bind("click",function(){
    toogleZoom();
  });
  $(".gallerie_controll").bind("click",function(){
    galleryControllClicked();
  });
}
function galleryControllClicked(){
  let this_controll = event.target;
  let gallerie = this_controll.parentElement.parentElement;
  let picture_container = $(gallerie).children()[1];
  let pictures = picture_container.childNodes;

  let controll_direction = $(this_controll).attr("data-controll-direction");

  let direction = undefined;
  if(controll_direction == "back"){
    direction = -1;
  }else if(controll_direction == "forward"){
    direction = 1;
  }

  let new_current_id = parseInt($(gallerie).attr("data-current_id"))+direction;

  let new_current_picture = undefined;
  for(let i= 0; i < pictures.length; i++){
    if($(pictures[i]).attr("data-id") == new_current_id){
      new_current_picture = pictures[i];
      //$(pictures[i]).css("scroll-snap-align","center");
    }else{
      //$(pictures[i]).css("scroll-snap-align","none");
    }
  }

  /*$(new_current_picture).show();
  console.log(new_current_picture);
  $(new_current_picture.previousElementSibling).show();
  $(new_current_picture.nextElementSibling).show();*/
  if(new_current_picture){
    //let offset = -1*($(picture_container).width()/4);
    let offset = 0;
    $(picture_container).scrollTo(new_current_picture,500,{offset: offset});
    //console.log(-1*($(picture_container).width()/8)+"px");
    //$(picture_container).scrollTo(-1*($(picture_container).width()/16),2000);

    $(gallerie).attr("data-current_id",new_current_id);
  }
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
      console.log("1");
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
      console.log("2");
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
      console.log("3");
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
      console.log("4");
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
      console.log("5");
      console.log("baum");
      $("#zoomed_image")[0].style.maxWidth = "";
      $("#zoomed_image")[0].style.maxWidth = "100%";
      $("#zoomed_image")[0].style.maxHeight = "";
      $("#zoomed_image")[0].style.maxHeight = "100%";
      //$("#zoomed_image").css("max-height", "");
      resolve();
    });
  }

  setToOrgiginalPos()
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
