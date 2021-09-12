const inputs = document.querySelectorAll(".angle-inp");
var solutionButton = document.querySelector("#btn");
var answer = document.querySelector("#output");


function calculateSumOfAngles(angle1,angle2,angle3)
{

    const sumOfAngles = angle1 + angle2 + angle3;
    return sumOfAngles
}



function isTriangle()
{

  const sumOfAngles = calculateSumOfAngles(Number(inputs[0].value), Number(inputs[1].value), Number(inputs[2].value));
  if(sumOfAngles === 180)
  {
      answer.innerHTML= "The angles indeed do form a triangle 🎉";

  }
  else
  {
      answer.innerHTML= "The angles don't form a triangle 👎";
  }

}




solutionButton.addEventListener('click',isTriangle);