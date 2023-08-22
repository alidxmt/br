

var data = [[11,12,123,134,15],[21,22,233,214,25],[31,322,533,334,35],[41,42,843,44,45],[51,52,53,54,55],[61,62,63,64,65],[11,12,113,14,15],[21,22,623,24,25],[31,32,33,34,35],[41,242,43,44,45],[51,52,53,54,55],[61,62,163,64,65],[11,12,513,14,15],[21,22,23,24,25],[31,32,33,34,35],[41,42,243,44,45],[51,52,53,54,55],[61,62,463,64,65],[21,22,233,24,25],[31,32,533,34,35],[41,42,843,44,45],[51,52,53,54,55],[61,62,63,64,65],[11,12,113,14,15],[21,22,623,24,25],[31,32,313,324,35],[41,242,43,44,45],[51,52,53,54,55],[61,62,163,64,65],[11,12,513,14,15],[21,22,23,24,25],[31,32,33,34,35],[41,42,243,44,45],[51,52,53,54,55],[61,62,463,64,65],[11,12,123,14,15],[21,22,233,24,25],[31,32,533,34,35],[41,42,843,44,45],[51,52,53,54,55],[61,62,63,624,65],[11,12,113,14,15],[21,22,623,24,25],[31,32,33,34,35],[41,242,43,44,45],[51,52,53,54,55],[61,62,163,64,65],[11,12,513,14,15],[21,22,23,24,25],[31,32,33,34,35],[41,42,243,44,45],[51,52,53,54,55],[61,62,463,64,65],[41,42,843,44,45],[51,52,53,54,55],[61,62,63,64,65],[11,12,113,14,15],[21,22,623,24,25],[31,32,33,34,35],[41,242,43,44,45],[51,52,53,54,55],[61,62,163,64,65],[11,12,513,14,15],[21,22,23,214,25],[31,32,33,34,35],[41,42,243,44,45],[51,52,53,54,55],[61,62,463,64,65],[11,12,123,14,15],[21,22,233,24,25],[31,32,533,34,35],[41,42,843,44,45],[51,52,53,54,55],[61,62,63,64,65],[11,12,113,14,15],[21,22,623,24,25],[31,32,33,34,35],[41,242,43,44,45],[51,52,53,54,55],[61,62,163,64,65],[11,12,513,14,15],[21,22,23,24,25],[31,32,33,34,35],[41,42,243,44,45],[51,52,53,54,55],[61,62,463,64,65],[11,12,123,14,15],[21,22,233,24,25],[31,32,533,34,35],[41,42,843,44,45],[51,52,53,54,55],[41,42,243,44,45],[51,52,53,54,55],[61,62,463,64,65]];

function sumArrayElements(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}




function convertToThreeDigitNumber(number) {
  return number.toString().padStart(4, '0');
}

const svg = d3.select("#container");


rectSize = 19
rowdist = 0 
//svg.attr("width", rectSize*12);
//svg.attr("height", parseInt(data.length/10+1)*rectSize);

for (let i = 0; i < data.length; i++) {
rectX = i%10 * rectSize
rectY = parseInt(i/10)*rectSize
const rectGroup = svg.append("g")
.attr("transform", `translate(${rectX}, ${rectY})`)
.on("click", function() {
  val = " aaaaa:"+convertToThreeDigitNumber(data[i][0])+" | bbbb:"+convertToThreeDigitNumber(data[i][1])+" | cccc:"+convertToThreeDigitNumber(data[i][2])+"<br> dddd:"+convertToThreeDigitNumber(data[i][3])+" | eeee:"+convertToThreeDigitNumber(data[i][4]) +" | fffff:"+convertToThreeDigitNumber(data[i][3])
d3.selectAll("rect").style("stroke", "none")
d3.select(this).selectAll("rect").style("stroke", "yellow").style("stroke-width", "4px");
  
;
 
 
});

        if (parseInt(i/10)>4) {
            rowdist = 10
        }
          // Create the rectangle
          rectGroup
            .append("rect")
            .attr("x",64+rectX*1.001+"px")
            .attr("y",rowdist+120+rectY*2/10+"px")
            .attr("width", rectSize*1.6)
            .attr("height", rectSize)
            .style("fill",  data[i][2]>300 ? ("rgb("+Math.round(255-(data[i][2] / 1000)*160)+","+Math.round((data[i][2] / 1000)*0)+","+0+")") : "rgb(200,200,200)")
            .style("stroke", "none")
            .attr("class", "kureh");

          // Text for the top position
          
          rectGroup
            .append("text")
            .attr("x",64+rectX*1.001+rectSize*18/24+"px")
            .attr("y",120+rowdist+rectY*2/10+rectSize*7/12+"px")
            .attr("text-anchor", "middle")
            .text(data[i][2])
            .style("font-size", rectSize/4+"px")
            .style("fill", "white")
            .attr("class", "kurehtext");

        }
      
 

// Attach the click event listener to the circle

function colorrectchange(z) {var els = document.querySelectorAll(".kureh");
for (var i = 0; i < els.length; i++) 
    els[i].style.fill = "rgb("+z+")"}

function hame(x) {
    colorrectchange('60,80,40');
  console.log('I am clickings! --hame');
   
    }

function goneh(x) {colorrectchange('100,100,100')}
function dama(x) {colorrectchange('150,200,10');console.log('I am clickings!--dama')}
function feshar(x) {colorrectchange('10,200,100');console.log('I am clickings! --feshar')}
function madeh(x) {colorrectchange('100,100,230');console.log('I am clickings! --madeh')}
function gaz(x) {colorrectchange('120,100,200');console.log('I am clickings! --gaz')}
function zaman(x) {colorrectchange('100,200,200');console.log('I am clickings! --zaman')}





  funx= [hame,hame,goneh,goneh,dama,dama,feshar,feshar,madeh,madeh,gaz,gaz,zaman,zaman]


// Select all elements with a specific class
var elements = document.querySelectorAll(".btntop");
console.log('----'+elements.length)
// Loop through the selected elements
for (var i = 0; i < elements.length; i++) {
  // Do something with each element
  console.log("-----"+elements[i])
  elements[i].style.cursor = "pointer";
  elements[i].addEventListener("click", funx[i].bind(null, 5));
//
} 
