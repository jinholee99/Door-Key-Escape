var square = 0;
var lock = 0;
var itemTake = 0;
var cursorChange = 0;
var openscroll = 0;

//timer
var numberOrder = 1;
var numberValue1 = 10;
var numberValue2 = 10;
var numberValue3 = 10;
var numberValue4 = 10;
var lock = 0;
var TimeUp = 0;
var accessGranted = 0;

//Timer Time
var x = 60;
var start = 0;


//key
var keyx = 500;
var keyy = 370;


var view = 0;

function preload()
{ 
	larrow = loadImage('https://dl.dropboxusercontent.com/s/dvcigveg30sxuek/arrow%20left.png');
  
	rarrow = loadImage('https://dl.dropboxusercontent.com/s/c0jhfdcfm4f155w/arrow%20right.png');
  
	r1v1 = loadImage('https://dl.dropboxusercontent.com/s/o0atxnirjy06pod/1-1.png');
  
	r1v2 = loadImage('https://dl.dropboxusercontent.com/s/0z4pdoi0n1o38qm/1-2.png');
  
	r2 = loadImage('https://dl.dropboxusercontent.com/s/7s8c1rnp7okdmhz/2.png');
	
	r3 = loadImage('https://dl.dropboxusercontent.com/s/cjksh71dpsgpcrc/Room%204.JPG');
  
	scroll1 = loadImage('https://dl.dropboxusercontent.com/s/34mheir72xhzrs0/scroll1.png');
  
	scroll2 = loadImage('https://dl.dropboxusercontent.com/s/jt01q0lmyg9qdx0/scroll2.png');
  
	scroll3 = loadImage('https://dl.dropboxusercontent.com/s/1i41dehla3dfm3t/Openscroll.png');
  
	key = loadImage('https://dl.dropboxusercontent.com/s/32o502v88s6e4mh/key.png');
  
	lock = loadImage('https://dl.dropboxusercontent.com/s/3oce5gm8mmfj15x/lock.png');
  
	spider = loadImage('https://dl.dropboxusercontent.com/s/wh0ukk3nnhbznn7/Spider.png');
	
	drain = loadImage('https://dl.dropboxusercontent.com/s/5aaq336eeu4pnis/Drain.jpg');
	
	lockers = loadImage('https://dl.dropboxusercontent.com/s/pyjml70hjlvv3kv/Lockers.jpg');
	
	windows = loadImage('https://dl.dropboxusercontent.com/s/trebontdzsfkm1r/Window.jpg');
	
	lose = loadImage('https://dl.dropboxusercontent.com/s/6mp83j1alkijauq/Lose.jpg');
	
	
	s1 = loadSound('https://dl.dropboxusercontent.com/s/8qkodup1awj4xx5/Tragedy.wav');
	
	s2 = loadSound('https://dl.dropboxusercontent.com/s/brkomca1wnk9zwz/Haste.wav');
	
	s3 = loadSound('https://dl.dropboxusercontent.com/s/psz5cm1d1lgbo1z/What%20Should%20I%20Do-.wav');
	
	s4 = loadSound('https://dl.dropboxusercontent.com/s/2sju98oofxa9kte/Plight.wav');
	
	s5 = loadSound('https://dl.dropboxusercontent.com/s/ilknwk4w3zorxd6/Finally%20Free.wav');
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
		p4();
	}
	else if (square == 5)
	{
		p5();
	}
	else if (square == 6)
	{
		p6();
	}
	else if (square == 7)
	{
		p7();
	}
	else if (square == 8)
	{
		userInterface(100,300,125,250,9,9,1,5);
		numberDisplay(155,60);
		  if (numberValue1 == 10)
		{
			numberOrder = 1;
		}
		else if (numberValue1 < 10 && numberValue2 == 10)
		{
			numberOrder = 2;
		}
		else if (numberValue2 < 10 && numberValue3 == 10)
		{
			numberOrder = 3;
		}
		else if (numberValue3 < 10 && numberValue4 == 10)
		{
			numberOrder = 4;
		}
		else if (numberValue4 < 10)
		{
			numberOrder = 0;
		}
	}
	else if (square == 9)
	{
		win();
	}
	else if (square == 10)
	{
		losegame();
	}
	else
	{
		intro();
	}
}

function p1()
{
	s2.stop();
	s3.stop();
	s4.stop();
	s5.stop();
	if (s1.isPlaying() == false && s2.isPlaying() == false && s3.isPlaying() == false && s4.isPlaying() == false && s5.isPlaying() == false)
    {
      s1.play();
    }
	
	cursor(ARROW);
	if (view == 0)
    {
		image(r1v1,0,0,800,600);
		image(rarrow,750,0,50,50);
		inv();
      
		image(key,keyx,keyy,20,20);
      
		if (mouseX >= 500 && mouseX <= 520 && mouseY >= 370 && mouseY <= 390 && keyx == 500)
        {
			cursor(HAND);
			if (mouseIsPressed)
            {
				keyx = 45;
				keyy = 545;
            }
        }
      
		if (mouseX >= 45 && mouseX <= 65 && mouseY >= 545 && mouseY <= 565 && keyx == 45)
        {
			cursor(HAND);
			if(mouseIsPressed)
            {
				keyx = 1000;
				keyy = 1000;
				cursorChange = 1;
            }
        }
      
		if (cursorChange == 1)
        {
			noCursor();
			image(key,mouseX,mouseY,20,20);
        }
      
		if (mouseX >= 750 && mouseX <= 800 && mouseY >= 0 && mouseY <= 50)
        {
			cursor(HAND);
			if (mouseIsPressed)
            {
				view = 1;
            }
        }
    }
	else if (view == 1)
    {
		image(r1v2,0,0,800,600);
		image(larrow,0,0,50,50);
		image(lock,300,300,20,20);
		inv();
      
		if (keyx != 500)
        {
			image(key,keyx,keyy,20,20);
        }
      
		if (mouseX >= 45 && mouseX <= 65 && mouseY >= 545 && mouseY <= 565 && keyx == 45)
		{
			cursor(HAND);
			if(mouseIsPressed)
			{
				keyx = 1000;
				keyy = 1000;
				cursorChange = 1;
			}
		}	
      
		if (cursorChange == 1)
		{
			noCursor();
			image(key,mouseX,mouseY,20,20);
			if (mouseX >= 300 && mouseX <= 320 && mouseY >= 300 && mouseY <= 320 && mouseIsPressed)
			{
				square = 2;
			}
		}
      
		if (mouseX >= 0 && mouseX <= 50 && mouseY >= 0 && mouseY <= 50)
		{
			cursor(HAND);
			if (mouseIsPressed)
			{
				view = 0;
            }
        }
    }
}

function p2()
{
	s1.stop();
	s3.stop();
	s4.stop();
	s5.stop();
	if (s1.isPlaying() == false && s2.isPlaying() == false && s3.isPlaying() == false && s4.isPlaying() == false && s5.isPlaying() == false)
    {
      s2.play();
    }
	
	view = 0;
	background(175,175,175);
	image(r2,0,0,800,600);
	cursor(ARROW); 
	inv();
  
	image(scroll2,243,300,80,60);
	image(scroll2,300,285,70,50);
	image(scroll1,445,275,70,50);
	image(scroll1,425,310,70,50)
  
	if (mouseX >= 248 && mouseX <= 313 && mouseY >= 322 && mouseY <= 333)
    {
		cursor(HAND);
		if (mouseIsPressed)
        {
			image(spider,200,-30);
        }
    }
  
	if (mouseX >= 303 && mouseX <= 360 && mouseY >= 308 && mouseY <= 317)
	{
		cursor(HAND);
		if (mouseIsPressed)
		{
			image(spider,200,-30);
		}
	}
  
	if (mouseX >= 415 && mouseX <= 512 && mouseY >= 296 && mouseY <= 307)
	{
		cursor(HAND);
		if (mouseIsPressed)
		{
			image(spider,200,-30);
		}
	}	
  
	if (mouseX >= 430 && mouseX <= 490 && mouseY >= 328 && mouseY <= 346)
	{
		cursor(HAND);
		if (mouseIsPressed)
		{
			square = 3;
		}
	}
	
	if (openscroll == 1 && mouseX >= 359 && mouseX <= 407 && mouseY >= 323 && mouseY <= 408)
	{
		cursor(HAND);
		if (mouseIsPressed)
		{
			square = 4
		}
	}
}

function p3()
{
	s1.stop();
	s2.stop();
	s4.stop();
	s5.stop();
	if (s1.isPlaying() == false && s2.isPlaying() == false && s3.isPlaying() == false && s4.isPlaying() == false && s5.isPlaying() == false)
    {
      s3.play();
    }
	background(255);
	cursor(ARROW);
	image(r2,0,0,800,600);
	image(scroll3,300,200,200,300);
	inv();
	
	fill(150,25,25);
	rect(500,200,100,25);
	fill(255);
	textSize(10);
	text("X",550,215);
  
	if (mouseX >= 500 && mouseX <= 600 && mouseY >= 200 && mouseY <= 225)
	{
		cursor(HAND);
		if (mouseIsPressed)
		{
			square = 2;
			openscroll = 1;
		}
	}	
}

function p4()
{
	s1.stop();
	s2.stop();
	s3.stop();
	s5.stop();
	if (s1.isPlaying() == false && s2.isPlaying() == false && s3.isPlaying() == false && s4.isPlaying() == false && s5.isPlaying() == false)
    {
      s4.play();
    }
	if (x > 0 && accessGranted == 0)
	{
		text(""+round(x)+"",25,200);
	}
	else if (accessGranted == 1)
	{
		square = 9;
	}
	
	if (x <= 0 && accessGranted == 0)
	{
		square = 10;
	}
	x = x - 0.015;
	
	background(255);
	cursor(ARROW);
	image(r3,0,0,800,600);
	
	if (mouseX >= 96 && mouseX <= 211 && mouseY >= 141 && mouseY <= 464)
	{
		cursor(HAND);
		if (mouseIsPressed)
		{
			square = 6;
		}
	}
	
	if (mouseX >= 274 && mouseX <= 430 && mouseY >= 478 && mouseY <= 500)
	{
		cursor(HAND);
		if (mouseIsPressed)
		{
			square = 5;
		}
	}
	
	if (mouseX >= 747 && mouseX <= 800 && mouseY >= 146 && mouseY <= 290)
	{
		cursor(HAND);
		if (mouseIsPressed)
		{
			square = 7;
		}
	}
	
	if (mouseX >= 635 && mouseX <= 648 && mouseY >= 306 && mouseY <= 330)
	{
		cursor(HAND);
		if (mouseIsPressed)
		{
			square = 8;
		}
	}

	inv();
	
	if (x > 0)
	{
		textSize(25);
		fill(255);
		text(round(x),700,25);
		textSize(10)
	}
}

//drain
function p5()
{
	if (x > 0 && accessGranted == 0)
	{
		text(""+round(x)+"",25,200);
	}
	else if (accessGranted == 1)
	{
		square = 9;
	}

	if (x <= 0 && accessGranted == 0)
	{
		square = 10;
	}
	
	x = x - 0.015;
	
	background(255);
	cursor(ARROW);
	image(drain,0,0,800,600);
	
	fill(150,25,25);
	rect(700,0,100,25);
	fill(255);
	text("X",752,16);
	
	if (mouseX >= 700 && mouseX <= 800 && mouseY >= 0 && mouseY <=25)
	{
		cursor(HAND);
		if (mouseIsPressed)
		{
			square = 4;
		}
	}
	
	if (x > 0)
	{
		textSize(25);
		fill(255);
		text(round(x),700,25);
		textSize(10)
	}
	
	inv();
}

//lockers
function p6()
{
	if (x > 0 && accessGranted == 0)
	{
		text(""+round(x)+"",25,200);
	}
	else if (accessGranted == 1)
	{
		square = 9;
	}

	if (x <= 0 && accessGranted == 0)
	{
		square = 10;
	}
	
	x = x - 0.015;
	background(255);
	cursor(ARROW);
	image(lockers,0,0,800,600);
	
	fill(150,25,25);
	rect(700,0,100,25);
	fill(255);
	text("X",752,16);
	
	if (mouseX >= 700 && mouseX <= 800 && mouseY >= 0 && mouseY <=25)
	{
		cursor(HAND);
		if (mouseIsPressed)
		{
			square = 4;
		}
	}
	
	
	if (x > 0)
	{
		textSize(25);
		fill(255);
		text(round(x),700,25);
		textSize(10)
	}
	
	inv();
}

//windows
function p7()
{
	if (x > 0 && accessGranted == 0)
	{
		text(""+round(x)+"",25,200);
	}
	else if (accessGranted == 1)
	{
		square = 9;
	}

	if (x <= 0 && accessGranted == 0)
	{
		square = 10;
	}
	
	x = x - 0.015;
	
	background(255);
	cursor(ARROW);
	image(windows,0,0,800,600);
	
	fill(150,25,25);
	rect(700,0,100,25);
	fill(255);
	text("X",752,16);
	
	if (mouseX >= 700 && mouseX <= 800 && mouseY >= 0 && mouseY <=25)
	{
		cursor(HAND);
		if (mouseIsPressed)
		{
			square = 4;
		}
	}
	
	if (x > 0)
	{
		textSize(25);
		fill(255);
		text(round(x),700,25);
		textSize(10)
	}
	
	inv();
}

function userInterface(a,b,c,d,pw1,pw2,pw3,pw4)
{
	if (x > 0 && accessGranted == 0)
	{
		text(""+round(x)+"",25,200);
	}
	else if (accessGranted == 1)
	{
		square = 9;
	}

	if (x <= 0 && accessGranted == 0)
	{
		square = 10;
	}
	
	x = x - 0.015;
	
	background(255);
	if (numberValue1 == pw1 && numberValue2 == pw2 && numberValue3 == pw3 && numberValue4 == pw4 && x > 0)
  {
    accessGranted = 1;
  }
  else if (numberOrder < 5)
  {
    if (accessGranted == 0 && numberOrder == 0)
    {
      numberValue1 = 10;
      numberValue2 = 10;
      numberValue3 = 10;
      numberValue4 = 10;
    }
    
    if (accessGranted == 1)
    {
      fill(0,255,0);
      ellipse(30,30,50,50);
    }
    if (accessGranted == 0)
    {
      fill(255,0,0);
      ellipse(30,30,50,50);
    }
    
    fill(100,150,255);
    rect(1,100,90,50);
    fill(255,255,255);
    text("reset",25,130);
  }
  
  textSize(20);
  strokeWeight(5);
  stroke(0,0,0);
  fill(200,200,200);
  rect(a,a/10,b,b-100);
  rect(a,a,b,b);
  strokeWeight(3);
  fill(255,255,255);
  rect(c+15,a-75,50,50);
  rect(c+70,a-75,50,50);
  rect(c+125,a-75,50,50);
  rect(c+180,a-75,50,50);
  rect(c,c,d,d);
  fill(230,230,230);
  
	fill(150,25,25);
	rect(700,0,100,25);
	fill(255);
	text("X",750,16);
	
	if (mouseX >= 700 && mouseX <= 800 && mouseY >= 0 && mouseY <= 25)
	{
		cursor(HAND);
		if (mouseIsPressed)
		{
			square = 4;
		}
	}
  
  //1
  fill(230,230,230);
  if (mouseX >= c && mouseX <= c+(d/3) && mouseY >= c && mouseY <= c+(d/3))
  {
    fill(150,150,150);
  }
  rect(c,c,d/3,d/3);
  text("1",c+(c/3),c+(c/3));
  fill(230,230,230);
  //2
  if (mouseX >= c+(d/3) && mouseX <= c+(2*d/3) && mouseY >= c && mouseY <= c+(d/3))
  {
    fill(150,150,150);
  }
  rect(c+(d/3),c,d/3,d/3);
  text("2",c+(3*c/3),c+(c/3));
  fill(230,230,230);
  //3
  if (mouseX >= c+(2*d/3) && mouseX <= c+(3*d/3) && mouseY >= c && mouseY <= c+(d/3))
  {
    fill(150,150,150);
  }
  rect(c+((d*2)/3),c,d/3,d/3);
  text("3",c+(5*c/3),c+(c/3));
  fill(230,230,230);
  //4
  if (mouseX >= c && mouseX <= c+(d/3) && mouseY >= c+(d/3) && mouseY <= c+(2*d/3))
  {
    fill(150,150,150);
  }
  rect(c,c+(d/3),d/3,d/3);
  text("4",c+(c/3),c+(3*c/3));
  fill(230,230,230);
  //5
  if (mouseX >= c+(d/3) && mouseX <= c+(2*d/3) && mouseY >= c+(d/3) && mouseY <= c+(2*d/3))
  {
    fill(150,150,150);
  }
  rect(c+(d/3),c+(d/3),d/3,d/3);
  text("5",c+(3*c/3),c+(3*c/3));
  fill(230,230,230);
  //6
  if (mouseX >= c+(2*d/3) && mouseX <= c+(3*d/3) && mouseY >= c+(d/3) && mouseY <= c+(2*d/3))
  {
    fill(150,150,150);
  }
  rect(c+((d*2)/3),c+(d/3),d/3,d/3);
  text("6",c+(5*c/3),c+(3*c/3));
  fill(230,230,230);
  //7
  if (mouseX >= c && mouseX <= c+(d/3) && mouseY >= c+(2*d/3) && mouseY <= c+d)
  {
    fill(150,150,150);
  }
  rect(c,c+((d*2)/3),d/3,d/3);
  text("7",c+(c/3),c+(5*c/3));
  fill(230,230,230);
  //8
  if (mouseX >= c+(d/3) && mouseX <= c+(2*d/3) && mouseY >= c+(2*d/3) && mouseY <= c+d)
  {
    fill(150,150,150);
  }
  rect(c+(d/3),c+((d*2)/3),d/3,d/3);
  text("8",c+(3*c/3),c+(5*c/3));
  fill(230,230,230);
  //9
  if (mouseX >= c+(2*d/3) && mouseX <= c+(3*d/3) && mouseY >= c+(2*d/3) && mouseY <= c+d)
  {
    fill(150,150,150);
  }
  rect(c+((d*2)/3),c+((d*2)/3),d/3,d/3);
  text("9",c+(5*c/3),c+(5*c/3));
  fill(230,230,230);
  
  
  //HAND
  //1
  if (mouseX >= c && mouseX <= c+(d/3) && mouseY >= c && mouseY <= c+(d/3))
  {
    cursor(HAND);
    if (mouseIsPressed)
    {
      lock = 1;
    }
  }
  //2
  else if (mouseX >= c+(d/3) && mouseX <= c+(2*d/3) && mouseY >= c && mouseY <= c+(d/3))
  {
    cursor(HAND);
    if (mouseIsPressed)
    {
      lock = 1;
    }
  }
  //3
  else if (mouseX >= c+(2*d/3) && mouseX <= c+(3*d/3) && mouseY >= c && mouseY <= c+(d/3))
  {
    cursor(HAND);
    if (mouseIsPressed)
    {
      lock = 1;
    }
  }
  //4
  else if (mouseX >= c && mouseX <= c+(d/3) && mouseY >= c+(d/3) && mouseY <= c+(2*d/3))
  {
    cursor(HAND);
    if (mouseIsPressed)
    {
      lock = 1;
    }
  }
  //5
  else if (mouseX >= c+(d/3) && mouseX <= c+(2*d/3) && mouseY >= c+(d/3) && mouseY <= c+(2*d/3))
  {
    cursor(HAND);
    if (mouseIsPressed)
    {
      lock = 1;
    }
  }
  //6
  else if (mouseX >= c+(2*d/3) && mouseX <= c+(3*d/3) && mouseY >= c+(d/3) && mouseY <= c+(2*d/3))
  {
    cursor(HAND);
    if (mouseIsPressed)
    {
      lock = 1;
    }
  }
  //7
  else if (mouseX >= c && mouseX <= c+(d/3) && mouseY >= c+(2*d/3) && mouseY <= c+d)
  {
    cursor(HAND);
    if (mouseIsPressed)
    {
      lock = 1;
    }
  }
  //8
  else if (mouseX >= c+(d/3) && mouseX <= c+(2*d/3) && mouseY >= c+(2*d/3) && mouseY <= c+d)
  {
    cursor(HAND);
    if (mouseIsPressed)
    {
      lock = 1;
    }
  }
  //9
  else if (mouseX >= c+(2*d/3) && mouseX <= c+(3*d/3) && mouseY >= c+(2*d/3) && mouseY <= c+d)
  {
    cursor(HAND);
    if (mouseIsPressed)
    {
      lock = 1;
    }
  }
  else if (mouseX >= 1 && mouseX <= 91 && mouseY >= 100 && mouseY <= 150 && accessGranted == 0)
  {
    cursor(HAND);
    if (mouseIsPressed)
    {
      lock = 1;
    }
  }
  else
  {
    cursor(ARROW);
  }
}

function numberDisplay(q,w)
{
	if (x > 0 && accessGranted == 0)
	{
		text(""+round(x)+"",25,200);
	}
	
	if (x <= 0 && accessGranted == 0)
	{
		square = 10;
	}
	
  if (numberValue1 < 10)
  {
    text(""+numberValue1+"",q+10,w);
  }
  if (numberValue2 < 10)
  {
    text(""+numberValue2+"",q+60,w);
  }
  if (numberValue3 < 10)
  {
    text(""+numberValue3+"",q+115,w);
  }
  if (numberValue4 < 10)
  {
    text(""+numberValue4+"",q+170,w);
  }
}

function win()
{
	s1.stop();
	s2.stop();
	s3.stop();
	s4.stop();
	if (s1.isPlaying() == false && s2.isPlaying() == false && s3.isPlaying() == false && s4.isPlaying() == false && s5.isPlaying() == false)
    {
      s5.play();
    }
	cursor(ARROW);
	background(255);
	textSize(50);
	text("You have successfully escaped!\nThank you for playing!",50,300)
}

function losegame()
{
	background(255);
	cursor(ARROW);
	image(lose,0,0,800,600);
	
	textSize(30);
	fill(255);
	text("Time is up, and mustard gas\nstarted pouring into the room,\nsuffocating you.\nGame over.",100,200);
}

function intro()
{    
	background(0);
	//textFont("Amatic SC");
	textSize(50)
	fill(150,0,0);
	text("THE LETTER KEEPER",270,595);
	textSize(25);
	text("CLICK                          TO START...",0,20);
	
	if (mouseX >= 83 && mouseX <= 227 && mouseY >= 0 && mouseY  <= 23)
	{
		cursor(HAND);
		fill(255,0,0)
		if (mouseIsPressed)
		{
			square = 1;
		}
	}
	else
	{
		cursor(ARROW);
		fill(150,0,0);
	}
	
	text("ANYWHERE",90,20);
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
	
function mouseReleased()
{
if (numberOrder == 1)
  {
    if (mouseX >= 125 && mouseX <= 125+(250/3) && mouseY >= 125 && mouseY <= 125+(250/3) && lock == 1)
    {
      lock = 0;
      numberValue1 = 1;
    }
    //2
    else if (mouseX >= 125+(250/3) && mouseX <= 125+(2*250/3) && mouseY >= 125 && mouseY <= 125+(250/3) && lock == 1)
    {
      lock = 0;
      numberValue1 = 2;
    }
    //3
    else if (mouseX >= 125+(2*250/3) && mouseX <= 125+(3*250/3) && mouseY >= 125 && mouseY <= 125+(250/3) && lock == 1)
    {
      lock = 0;
      numberValue1 = 3;
    }
    //4
    else if (mouseX >= 125 && mouseX <= 125+(250/3) && mouseY >= 125+(250/3) && mouseY <= 125+(2*250/3) && lock == 1)
    {
      lock = 0;
      numberValue1 = 4;
    }
    //5
    else if (mouseX >= 125+(250/3) && mouseX <= 125+(2*250/3) && mouseY >= 125+(250/3) && mouseY <= 125+(2*250/3) && lock == 1)
    {
      lock = 0;
      numberValue1 = 5;
    }
    //6
    else if (mouseX >= 125+(2*250/3) && mouseX <= 125+(3*250/3) && mouseY >= 125+(250/3) && mouseY <= 125+(2*250/3) && lock == 1)
    {
      lock = 0;
      numberValue1 = 6;
    }
    //7
    else if (mouseX >= 125 && mouseX <= 125+(250/3) && mouseY >= 125+(2*250/3) && mouseY <= 125+250 && lock == 1)
    {
      lock = 0;
      numberValue1 = 7;
    }
    //8
    else if (mouseX >= 125+(250/3) && mouseX <= 125+(2*250/3) && mouseY >= 125+(2*250/3) && mouseY <= 125+250 && lock == 1)
    {
      lock = 0;
      numberValue1 = 8;
    }
    //9
    else if (mouseX >= 125+(2*250/3) && mouseX <= 125+(3*250/3) && mouseY >= 125+(2*250/3) && mouseY <= 125+250 && lock == 1)
    {
      lock = 0;
      numberValue1 = 9;
    }
  }
  
  
  else if (numberOrder == 2)
  {
    if (mouseX >= 125 && mouseX <= 125+(250/3) && mouseY >= 125 && mouseY <= 125+(250/3) && lock == 1)
    {
      lock = 0;
      numberValue2 = 1;
    }
    //2
    else if (mouseX >= 125+(250/3) && mouseX <= 125+(2*250/3) && mouseY >= 125 && mouseY <= 125+(250/3) && lock == 1)
    {
      lock = 0;
      numberValue2 = 2;
    }
    //3
    else if (mouseX >= 125+(2*250/3) && mouseX <= 125+(3*250/3) && mouseY >= 125 && mouseY <= 125+(250/3) && lock == 1)
    {
      lock = 0;
      numberValue2 = 3;
    }
    //4
    else if (mouseX >= 125 && mouseX <= 125+(250/3) && mouseY >= 125+(250/3) && mouseY <= 125+(2*250/3) && lock == 1)
    {
      lock = 0;
      numberValue2 = 4;
    }
    //5
    else if (mouseX >= 125+(250/3) && mouseX <= 125+(2*250/3) && mouseY >= 125+(250/3) && mouseY <= 125+(2*250/3) && lock == 1)
    {
      lock = 0;
      numberValue2 = 5;
    }
    //6
    else if (mouseX >= 125+(2*250/3) && mouseX <= 125+(3*250/3) && mouseY >= 125+(250/3) && mouseY <= 125+(2*250/3) && lock == 1)
    {
      lock = 0;
      numberValue2 = 6;
    }
    //7
    else if (mouseX >= 125 && mouseX <= 125+(250/3) && mouseY >= 125+(2*250/3) && mouseY <= 125+250 && lock == 1)
    {
      lock = 0;
      numberValue2 = 7;
    }
    //8
    else if (mouseX >= 125+(250/3) && mouseX <= 125+(2*250/3) && mouseY >= 125+(2*250/3) && mouseY <= 125+250 && lock == 1)
    {
      lock = 0;
      numberValue2 = 8;
    }
    //9
    else if (mouseX >= 125+(2*250/3) && mouseX <= 125+(3*250/3) && mouseY >= 125+(2*250/3) && mouseY <= 125+250 && lock == 1)
    {
      lock = 0;
      numberValue2 = 9;
    }
  }
  
  
  else if (numberOrder == 3)
  {
    if (mouseX >= 125 && mouseX <= 125+(250/3) && mouseY >= 125 && mouseY <= 125+(250/3) && lock == 1)
    {
      lock = 0;
      numberValue3 = 1;
    }
    //2
    else if (mouseX >= 125+(250/3) && mouseX <= 125+(2*250/3) && mouseY >= 125 && mouseY <= 125+(250/3) && lock == 1)
    {
      lock = 0;
      numberValue3 = 2;
    }
    //3
    else if (mouseX >= 125+(2*250/3) && mouseX <= 125+(3*250/3) && mouseY >= 125 && mouseY <= 125+(250/3) && lock == 1)
    {
      lock = 0;
      numberValue3 = 3;
    }
    //4
    else if (mouseX >= 125 && mouseX <= 125+(250/3) && mouseY >= 125+(250/3) && mouseY <= 125+(2*250/3) && lock == 1)
    {
      lock = 0;
      numberValue3 = 4;
    }
    //5
    else if (mouseX >= 125+(250/3) && mouseX <= 125+(2*250/3) && mouseY >= 125+(250/3) && mouseY <= 125+(2*250/3) && lock == 1)
    {
      lock = 0;
      numberValue3 = 5;
    }
    //6
    else if (mouseX >= 125+(2*250/3) && mouseX <= 125+(3*250/3) && mouseY >= 125+(250/3) && mouseY <= 125+(2*250/3) && lock == 1)
    {
      lock = 0;
      numberValue3 = 6;
    }
    //7
    else if (mouseX >= 125 && mouseX <= 125+(250/3) && mouseY >= 125+(2*250/3) && mouseY <= 125+250 && lock == 1)
    {
      lock = 0;
      numberValue3 = 7;
    }
    //8
    else if (mouseX >= 125+(250/3) && mouseX <= 125+(2*250/3) && mouseY >= 125+(2*250/3) && mouseY <= 125+250 && lock == 1)
    {
      lock = 0;
      numberValue3 = 8;
    }
    //9
    else if (mouseX >= 125+(2*250/3) && mouseX <= 125+(3*250/3) && mouseY >= 125+(2*250/3) && mouseY <= 125+250 && lock == 1)
    {
      lock = 0;
      numberValue3 = 9;
    }
  }
  
  
  else if (numberOrder == 4)
  {
    if (mouseX >= 125 && mouseX <= 125+(250/3) && mouseY >= 125 && mouseY <= 125+(250/3) && lock == 1)
    {
      lock = 0;
      numberValue4 = 1;
    }
    //2
    else if (mouseX >= 125+(250/3) && mouseX <= 125+(2*250/3) && mouseY >= 125 && mouseY <= 125+(250/3) && lock == 1)
    {
      lock = 0;
      numberValue4 = 2;
    }
    //3
    else if (mouseX >= 125+(2*250/3) && mouseX <= 125+(3*250/3) && mouseY >= 125 && mouseY <= 125+(250/3) && lock == 1)
    {
      lock = 0;
      numberValue4 = 3;
    }
    //4
    else if (mouseX >= 125 && mouseX <= 125+(250/3) && mouseY >= 125+(250/3) && mouseY <= 125+(2*250/3) && lock == 1)
    {
      lock = 0;
      numberValue4 = 4;
    }
    //5
    else if (mouseX >= 125+(250/3) && mouseX <= 125+(2*250/3) && mouseY >= 125+(250/3) && mouseY <= 125+(2*250/3) && lock == 1)
    {
      lock = 0;
      numberValue4 = 5;
    }
    //6
    else if (mouseX >= 125+(2*250/3) && mouseX <= 125+(3*250/3) && mouseY >= 125+(250/3) && mouseY <= 125+(2*250/3) && lock == 1)
    {
      lock = 0;
      numberValue4 = 6;
    }
    //7
    else if (mouseX >= 125 && mouseX <= 125+(250/3) && mouseY >= 125+(2*250/3) && mouseY <= 125+250 && lock == 1)
    {
      lock = 0;
      numberValue4 = 7;
    }
    //8
    else if (mouseX >= 125+(250/3) && mouseX <= 125+(2*250/3) && mouseY >= 125+(2*250/3) && mouseY <= 125+250 && lock == 1)
    {
      lock = 0;
      numberValue4 = 8;
    }
    //9
    else if (mouseX >= 125+(2*250/3) && mouseX <= 125+(3*250/3) && mouseY >= 125+(2*250/3) && mouseY <= 125+250 && lock == 1)
    {
      lock = 0;
      numberValue4 = 9;
    }
  }
  
  else if (numberOrder == 0)
  {
    lock = 0;
  }
  
  if (mouseX >= 1 && mouseX <= 91 && mouseY >= 100 && mouseY <= 150 && lock == 1)
  {
    lock = 0;
    numberValue1 = 10;
    numberValue2 = 10;
    numberValue3 = 10;
    numberValue4 = 10;
  }
}