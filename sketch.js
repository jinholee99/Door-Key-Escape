var square = 0;
var keyx = 180;
var keyy = 450;
var lockx = 500;
var locky = 340;
var doorx = 287.5;
var doory = 83;
var bsx = 415;
var cursorChange = 0;
var lockState = 0;
var door = 0;
var keyclicked = 0;
var lock = 0;
var bszoom = 0;
var mzoom = 0;


function preload()
{
  lock = loadImage('https://dl.dropboxusercontent.com/s/3oce5gm8mmfj15x/lock.png');
  
  unlock = loadImage('https://dl.dropboxusercontent.com/s/3052kcqyjzmxtqx/unlock.png');
  
  lockkey = loadImage('https://dl.dropboxusercontent.com/s/32o502v88s6e4mh/key.png');
  
  creepyintro = loadImage('https://dl.dropboxusercontent.com/s/a1qxp3e0b4uv8qh/Creepy%20Intro.jpg');
  
  cdoor = loadImage('https://dl.dropboxusercontent.com/s/d2ati4xtqn2yhhx/cdoor.png');
  
  odoor = loadImage('https://dl.dropboxusercontent.com/s/uyagjotoviel65e/odoor.png');
  
  room1 = loadImage('https://dl.dropboxusercontent.com/s/ma2z0775fw1n9h1/room.jpg');
  
  arrow = loadImage('https://dl.dropboxusercontent.com/s/yrgvkdo5pvpoc4i/arrow.png');

  chair = loadImage('https://dl.dropboxusercontent.com/s/i72czmnpumq329h/Chair.png');
  
  room2 = loadImage('https://dl.dropboxusercontent.com/s/1u9h8numfvfappt/Room2.jpg');
  
  bookshelf = loadImage('https://dl.dropboxusercontent.com/s/sl6jmc0w5jlcwmc/bookshelf.jpg');
  
  magnify = loadImage('https://dl.dropboxusercontent.com/s/f04zsj9omqph6nt/magnify.png');

  monitor = loadImage('https://dl.dropboxusercontent.com/s/6n28rm3zt47ifhx/monitor.png');
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
    
	image(room1,0,0,800,600);
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
    if (lockState == 0)
    {
		  image(lockkey,mouseX,mouseY);
    }
		ui();
		keyx = 1000;
		keyy = 1000;
	}
  
	if (lockState == 1)
	{
		image(unlock,500,340,25,25);
		door = 1;
    cursor(ARROW);
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
  image(room2,0,0);
  image(bookshelf,bsx,130,250,372);
  image(magnify,bsx,100,30,30);
  image(monitor,100,350,200,150);
  
  //SHELF
  if (bsx == 415 && mouseX >= 415 && mouseX <= 675 && mouseY >= 130 && mouseY <= 502 && bszoom == 0 && mzoom == 0)
  {
    cursor(HAND);
    if (mouseIsPressed)
    {
      lock = 1;
    }
  }
  else if (bsx == 550 && mouseX >= 550 && mouseX <= 800 && mouseY >= 130 && mouseY <= 502 && bszoom == 0 && mzoom == 0)
  {
    cursor(HAND);
    if (mouseIsPressed)
    { 
      lock = 1;
    }
  }
  
  //MAGNIFY
  if (bsx == 415 && mouseX >= 415 && mouseX <= 445 && mouseY >= 100 && mouseY <= 130 && bszoom == 0)
  {
    cursor(HAND);
    if (mouseIsPressed)
    {
      lock = 1;
    }
  }
  else if (bsx == 550 && mouseX >= 550 && mouseX <= 580 && mouseY >= 100 && mouseY <= 130 && bszoom == 0)
  {
    cursor(HAND);
    if (mouseIsPressed)
    {
      lock = 1;
    }
  }
  
  //SHELF ZOOM
  if (bszoom == 1)
  {
    image(bookshelf,0,0,500,744);
    fill(150,50,50);
    stroke(0);
    rect(550,50,100,50);
    fill(255);
    text("X",600,75);
    
    if (mouseX >= 550 && mouseX <= 650 && mouseY >= 50 && mouseY <= 100 && mzoom == 0)
    {
      cursor(HAND);
      if (mouseIsPressed)
      {
        bszoom = 0;
      }
    }
  }
  
  //MONITOR
  if (mouseX >= 100 && mouseX <= 300 && mouseY >= 350 && mouseY <= 500 && mzoom == 0 && bszoom == 0)
  {
    cursor(HAND);
    if (mouseIsPressed)
    {
      mzoom = 1;
    }
  }
  
  //MONITOR ZOOM
  if (mzoom == 1)
  {
    image(monitor,100,100,600,400);
    fill(150,50,50);
    rect(700,100,100,50);
    fill(255);
    text("X",750,125);
    
    if (mouseX >= 700 && mouseX <= 800 && mouseY >= 100 && mouseY <= 150 && bszoom == 0)
    {
      cursor(HAND);
      if (mouseIsPressed)
      {
        mzoom = 0;
      }
    }
  }
  
  inv();
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
  //SHELF
  if (bsx == 415 && mouseX >= 415 && mouseX <= 675 && mouseY >= 130 && mouseY <= 502 && lock == 1)
  {
    lock = 0;
    bsx = 550;
  }
  else if (bsx == 550 && mouseX >= 550 && mouseX <= 800 && mouseY >= 130 && mouseY <= 502 && lock == 1)
  {
    lock = 0;
    bsx = 415;
  }
  
  //MAGNIFY
  if (bsx == 415 && mouseX >= 415 && mouseX <= 445 && mouseY >= 100 && mouseY <= 130 && lock == 1)
  {
    lock = 0;
    bszoom = 1;
  }
  else if (bsx == 550 && mouseX >= 550 && mouseX <= 580 && mouseY >= 100 && mouseY <= 130 && lock == 1)
  {
    lock = 0;
    bszoom = 1;
  }
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