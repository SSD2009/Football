var canvas=new fabric.canvas('mycanvas')
ball_x=0;
ball_y=0;
goal_x=1000;
goal_y=250;

block_image_width = 5;
block_image_height = 5;

function load_img(){
	fabric.Image.fromURL("images.png",function(Img){
		goalobj=Img;
		goalobj.scaleToWidth(75);
		goalobj.scaleToHeight(50);
		goalobj.set({
			top:goal_y,
			left:goal_x
		});
		canvas.add(goalobj);
	});
	new_image();
}

function new_image()
{
	fabric.Image.fromURL("football.jpg",function(Img){
		ballobj=Img;
		ballobj.scaleToWidth(25);
		ballobj.scaleToHeight(25);
		ballobj.set({
			top:ball_y,
			left:ball_x
		});
		canvas.add(ballobj);
	});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);

	if((ball_x==goal_x) && (ball_y==goal_y)){
		canvas.remove(ballobj);
		document.getElementById("hd3").innerHTML="You scored ! Good Job!!";
		document.getElementById("mycanvas").style.borderColor="red";
	}

	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		if(ball_y<=5)
		{
			ball_y=ball_y-block_image_height;
			console.log("Block image height = "+block_image_height);
			console.log("When up is pressed. x = "+ball_x+" y = "+ball_y);
			canvas.remove(ballobj);
			new_image();
		}
	}

	function down()
	{
		if(ball_y<=475)
		{
			ball_y=ball_y+block_image_height;
			console.log("Block image height = "+block_image_height);
			console.log("When down is pressed. x = "+ball_x+" y = "+ball_y);
			canvas.remove(ballobj);
			new_image();
		}
	}

	function left()
	{
		if(ball_x >5)
		{	
			ball_x=ball_x-block_image_width;
			console.log("Block image width = "+block_image_width);
			console.log("When left is pressed. x = "+ball_x+" y = "+ball_y);
			canvas.remove(ballobj);
			new_image();
		
		}
	}

	function right()
	{
		if(ball_x <=1075)
		{
			ball_x=ball_x+block_image_width;
			console.log("Block image width = "+block_image_width);
			console.log("When right is pressed. x = "+ball_x+" y = "+ball_y);
			canvas.remove(ballobj);
			new_image();
		}
	}
	
}

