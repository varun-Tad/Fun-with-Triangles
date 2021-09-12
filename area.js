const input = document.querySelectorAll('.input');
const button = document.querySelector(".btn");
const output = document.querySelector(".output");




function calculateArea()
{
 
     var area =  1/2 * (input[0].value * input[1].value);
     output.innerText = ` The area of the triangle is ${area}cm²`;


}




button.addEventListener('click',calculateArea);
