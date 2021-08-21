canvas=new fabric.Canvas("myCanvas");
 var block_image_width=30;
  var block_image_height=30;
player_x=10;
player_y=10;
player_width=30;
player_height=30;
player_object="";
object="";
function objectupload(upload){
fabric.Image.fromURL(upload, function (img){
    object=img;
    object.scaleToWidth(50);
    object.scaleToHeight(50);
    object.set({
        top:player_y,
        left:player_x
    }

    );
    canvas.add(object);
})
}
function playerupload(){
    fabric.Image.fromURL("player.png", function (img){
        player_object=img;
        player_object.scaleToWidth(50);
        player_object.scaleToHeight(50);
        player_object.set({
            top:player_y,
            left:player_x
        }
    
        );
        canvas.add(player_object);
    })
    }
