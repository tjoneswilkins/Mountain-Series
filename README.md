# Covid-19 Data Driven Generative Art
### Tully Jones-Wilkins, High School Student, The Delta School.
##### Data: "facts and statistics collected together for refrence or analysis." 
This definition is technical, blocky, one dimentional. Data is generally refered to as numbers, represententive of something conceptual, or too great to understand without systems of data. However, data can be used for many other things, say when you mix data statistics and literature. That product may be something like an word cloud, or autocomplete. 
![word cloud](https://tjoneswilkins.github.io/Mountain-Series/images/download.png)
###### Data is a tool 
When combined with other mediums it creates something bigger than the data. It can convey feelings, emotions, and thoughts. Think of the hammer, one dimentional, not many uses, limited creative uses. Combine the hammer with nails, and wood, and you can build a house. 

In this project I had one small, one dimentional data set. The confirmed Covid-19 case numbers for my home state of Arkansas.
 ![seechart](https://tjoneswilkins.github.io/Mountain-Series/images/Screen Shot 2020-05-16 at 2.57.14 PM.png)
 
For my project I combined the tool of data with an creative programing languange called **Processing**. Processing, a depreciating javascript platform was the perfect introduction to programming and creative coding for a newbie like me. Through the large community of artists on the platform it created the prefect environment for asking for help. Learning from others, and iterations of community designs. 

It began with data and statistical alalysis. Consolidating data into simple csv files and starting to introduce them into the processing sketch. 

```javascript
Table table;

void setup() {
   table = loadTable("arkansas_confirmed.csv","header");
}
void draw() {
  for (int col = 0; col < table.getColumnCount(); col+=1) {} 
      TableRow state = table.getRow(0);
      if (col == table.getColumnCount()){
        col = 0; 
      } 
      else {
        col++; 
      }
    data = table.getInt(0,col); 
  } 
```
After imputting data I wanted to find another medium to convey the data in an asthetically pleasing way. Enter the golden function. 
```javascript
  float n = noise( x/wow + frameCount/50.0 + y0);
  vertex( x, y0 - boo / (1 + pow(x-binc, 4) / 6e6) * n);
  
```
Imput that noise and vertex function and equation into a for loop setting variables and line color and you find yourself with the following generation. 
<iframe width="560" height="315" src="https://www.youtube.com/embed/pojIA3g3vlw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


<iframe width="560" height="315" src="https://www.youtube.com/embed/NNe2SFHWiwE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


<iframe width="560" height="315" src="https://www.youtube.com/embed/B45KWbGnHCI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
