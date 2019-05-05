function gallerie_controll_clicked(){
  let this_controll = event.target;
  let gallerie = this_controll.parentElement.parentElement;
  let picture_container = $(gallerie).children()[1];
  let pictures = picture_container.childNodes;

  console.log(gallerie);

  let controll_direction = $(this_controll).attr("data-controll-direction");
  console.log("controll_direction="+controll_direction);

  let direction = undefined;
  if(controll_direction == "back"){
    direction = -1;
  }else if(controll_direction == "forward"){
    direction = 1;
  }

  let new_current_id = parseInt($(gallerie).attr("data-current_id"))+direction;

  console.log(picture_container);
  let new_current_picture = undefined;
  for(let i= 0; i < pictures.length; i++){
    console.log(pictures[i]);
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
