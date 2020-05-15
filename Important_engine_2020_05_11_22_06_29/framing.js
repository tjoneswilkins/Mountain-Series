// Tully Jones-Wilkins; 5/13/20
float binc= 0;
float ainc =0; 
Table table;
int col, row;
float elev,xdata;
float data;
int y0; // sets default val for y 
// colors 

color[] colors = {
#9D00FF,#FFFF00,#FF0000,#00FF00,#00FFFF,#FF00FF,
#CC00FF,#FFFF33,#FD1C03,#00FF33,#099FFF,#FF00CC,#FFFFFF,
#6E0DD0,#F2EA02,#FF3300,#00FF66,#0062FF,#FF0099,
#9900FF,#E6FB04,#FF6600,#33FF00,#0033FF,#CC00FF,#FFFFFF,
//---------------------------------------------
#9D00FF,#FFFF00,#FF0000,#00FF00,#00FFFF,#FF00FF,#FFFFFF,
#CC00FF,#FFFF33,#FD1C03,#00FF33,#099FFF,#FF00CC,
#6E0DD0,#F2EA02,#FF3300,#00FF66,#0062FF,#FF0099,#FFFFFF,
#9900FF,#E6FB04,#FF6600,#33FF00,#0033FF,#CC00FF,
};


// for stroke beauty 
int step = 80;
float noiseScale = 0.02;
int offset = 300;
// offset vars 
int ofs =0;
int ofs_v =1;

void setup(){ 
  size(1080,720); 
  fill(0); 
  stroke(#FD1C03);
  strokeWeight(3); 
  smooth(3);
  table = loadTable("arkansas copy 2.csv","header");
}
void draw(){ 
  background(0);
  collu(); // calling data 
  idfk(); // incrementint the "binc" 
  
  int k=0; 
    if(k == 50){ 
     k=0; 
  }
  for (int y0 = 250; y0 < 600; y0+=7){
     k++;
     stroke(colors[k]); 
     //fill(colors[k],80);
     lines(y0);  // draw lines, assigns neon  
     noStroke(); 
    }
  
   
  frame();   // drawing frame
}
void collu(){
  for (float col = 0; col < table.getColumnCount(); col+= 0.5) {} 
    TableRow state = table.getRow(0);
    if (col >= table.getColumnCount()-1){
      col = 0; 
    } else {
      col+= 1; 
      //println(col);
    } 
}

void idfk(){
    binc += 10/2; 
  if (binc > width) { 
    binc = -50; 
    ainc += 10/6; 
  if (ainc > width) { 
    ainc = -50; 
    }
  }
}
void frame(){ 
  int diff = 50; 
noFill(); 
stroke(255); 
beginShape();
fill(255);
vertex(0,0);
vertex(width,0);
vertex(width,height);
vertex(0,height);
vertex(0,0);
beginContour(); 
vertex(diff,diff); 
vertex(diff,height-diff);
vertex(width-diff,height-diff);
vertex(width-diff,diff); 
endContour();
endShape(CLOSE);
  
  
}
void lines(float y0){ 
  float boo = map(binc, -50, width,0,500);
    beginShape();
      noFill(); 
  //for ( int y0 = 170; y0 < 670; y0 += 10 ) {
    for ( float x = 0; x < width; x+=1 ) {
        float n = noise( x/70.0 + frameCount/1000.0 + y0);
        vertex( x, y0 - boo / (1 + pow(x-binc, 4) / 6e6) * n);
  }
  vertex( width, height*2 );
  vertex( 0, height*2 );

endShape(); 
//} 
}

  
