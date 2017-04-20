var square = 0;
var keyx = 180;
var keyy = 450;
var lockx = 500;
var locky = 340;
var doorx = 287.5;
var doory = 83;
var cursorChange = 0;
var lockState = 0;
var door = 0;
var keyclicked = 0;

function preload()
{
  lock = loadImage('https://dl.dropboxusercontent.com/s/3oce5gm8mmfj15x/lock.png');
  
  unlock = loadImage('https://dl.dropboxusercontent.com/s/3052kcqyjzmxtqx/unlock.png');
  
  lockkey = loadImage('https://dl.dropboxusercontent.com/s/32o502v88s6e4mh/key.png');
  
  creepyintro = loadImage('https://dl.dropboxusercontent.com/s/a1qxp3e0b4uv8qh/Creepy%20Intro.jpg');
  
  cdoor = loadImage('https://dl.dropboxusercontent.com/s/d2ati4xtqn2yhhx/cdoor.png');
  
  odoor = loadImage('https://dl.dropboxusercontent.com/s/uyagjotoviel65e/odoor.png');
  
  room = loadImage('https://dl.dropboxusercontent.com/s/ma2z0775fw1n9h1/room.jpg');
  
  arrow = loadImage('https://dl.dropboxusercontent.com/s/yrgvkdo5pvpoc4i/arrow.png');
}

function setup()
{
  createCanvas(800,600);
}

function draw()
{
  if (square == 1)
  {
	  p1();
  }
  else if (square == 2)
  {
	  p2();
  }
  else if (square == 3)
  {
	  p3();
  }
  else if (square == 4)
  {
	  win();
  }
  else
  {
    intro();
  }
}

function p1()
{
	background(100,100,100);
	image(room,0,0,800,600);
	image(cdoor,doorx,doory,300,516);
	if (door == 1)
	{
		image(odoor,287.5,83,300,516);
		image(arrow,475,300,25,25);
	}
  
	inv();
	cursor(ARROW);
  
	image(lock,lockx,locky,25,25);
	image(lockkey,keyx,keyy,25,25);
  
	if (mouseX >= 180 && mouseX <= 205 && mouseY >= 450 && mouseY <= 475)
	{
		if (keyclicked == 0)
		{
			cursor(HAND);
		}
		
		if (mouseIsPressed)
		{
			keyx = 40;
			keyy = 540;
			keyclicked = 1;
		}
	}
	else if (mouseX >= 40 && mouseX <= 65 && mouseY >= 540 && mouseY <= 565)
	{
	   if (keyclicked == 1)
	   {
		cursor(HAND);
	   }
	   if (mouseIsPressed)
	   {
		   cursorChange = 1;
	   }
	}
	else if (cursorChange == 1 && mouseX >= 695 && mouseX <= 795 && mouseY >= 5 && mouseY <= 30)
	{
	  cursor(HAND);
	  if (mouseIsPressed)
	  {
		cursorChange = 0;
		keyx = 40;
		keyy = 540;
	  }
	}
	else if (cursorChange == 1 && mouseX >= 500 && mouseX <= 525 && mouseY >= 340 && mouseY <= 365 && mouseIsPressed)
	{
		keyx = 1000;
		keyy = 1000;
		lockx = 1000;
		locky = 1000;
		
		lockState = 1;
	}
	else if (door == 1 && mouseX >= 475 && mouseX <= 500 && mouseY >= 300 && mouseY <= 325)
	{
		cursor(HAND);
		if (mouseIsPressed)
		{
			square = 2;
		}
	}
	else
	{
		cursor(ARROW);
	}
  
	if (cursorChange == 1)
	{
		noCursor();
		image(lockkey,mouseX,mouseY)
		ui();
		keyx = 1000;
		keyy = 1000;
	}
  
	if (lockState == 1)
	{
		image(unlock,500,340,25,25);
		door = 1;
	}
	
	if (door == 1)
	{
		doorx = 1000;
		doory = 1000;
	}
	
}

function p2()
{
	background(175,175,175);
	cursor(ARROW);
}

function p3()
{
	background(150,150,150);
}

function win()
{
	
}

function ui()
{
	fill(150,50,50);
	rect(695,5,100,25);
	textSize(10);
	fill(255,255,255);
	text("X",740,20);
}

function mouseReleased()
{

}

function intro()
{
	background(50,50,50);
	image(creepyintro,0,0,800,600);


  
	fill(150,0,0);
	stroke(250,0,0);
	if (mouseX >= 300 && mouseX <= 500 && mouseY >= 400 && mouseY <= 450)
	{
		cursor(HAND);
		fill(130,0,0);
		stroke(200,0,0);
		strokeWeight(5);
	
	if (mouseIsPressed)
	{
		square = 1;
	}
  }
  else
  {
		cursor(ARROW);
  }
	rect(300,400,200,50);
  
	fill(255,255,255);
	stroke(255,255,255);
	strokeWeight(1);
	textSize(15);
	text("START",375,430);
  
	fill(255,255,255);
	stroke(255,255,255);
	strokeWeight(3);
	textSize(50);
	text("ESCAPE ROOM",425,595);
}

function inv()
{
	fill(50,50,50);
	rect(0,500,800,100);
  
	//slot 1
	fill(100,100,100);
	rect(5,505,90,90);

	//slot 2
	fill(100,100,100);
	rect(105,505,90,90);
	
	//slot 3
	fill(100,100,100);
	rect(205,505,90,90);

	//slot 3
	fill(100,100,100);
	rect(305,505,90,90);
  
	//slot 4
	fill(100,100,100);
	rect(405,505,90,90);
  
	//slot 5
	fill(100,100,100);
	rect(505,505,90,90);
  
	//slot 6
	fill(100,100,100);
	rect(605,505,90,90);
  
	//slot 7
	fill(100,100,100);
	rect(705,505,90,90);
}