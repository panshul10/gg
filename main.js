var canvas = new fabric.Canvas('myCanvas');
block_image_width = 30;
block_image_height = 30;
Player_x = 10;
Player_y = 10;


var Player_object = "";


function Player_update()
{
    fabric.image.fromURL("player.png", function(Img)
    {
        Player_object = Img;
        player_object.scaleToWidth(150); 
        player_object.scaleToHeight(140);
        player_object.set({
            top : Player_y,
            left : Player_x
        });
        canvas.add(player_object);


    });
}

function new_image(get_image)
{
    fabric.Image.fromURL(get_image, function(Img) 
    { 
        block_image_object = Img; 
        block_image_object.scaleToWidth(block_image_width); 
        block_image_object.scaleToHeight(block_image_height); 
        block_image_object.set({ top:player_y, left:player_x }); 
        canvas.add(block_image_object); 
    });

}