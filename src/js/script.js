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

function closeZoom(){

}
