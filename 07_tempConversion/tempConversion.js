const ftoc = function(tempF) 
{
  let tempC = tempF - 32
  tempC *= (5/9);
  console.log(tempC);

  tempC *= 10;
  tempC = Math.round(tempC);
  tempC /= 10;

  console.log(tempC);

  return tempC;

};

const ctof = function(tempC) 
{

  let tempF = tempC * (9/5);
  tempF += 32;

  
  console.log(tempF);

  tempF *= 10;
  tempF = Math.round(tempF);
  tempF /= 10;

  console.log(tempF);

  return tempF;

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
