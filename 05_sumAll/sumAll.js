const sumAll = function(a, b)
{
    let result = 0;
    let rangeArray = [];
    let x;
    let y;

    console.log(a, b)

    if(a > b)
    {
        x = b;
        y = a;
        console.log("a is greater than b");
        console.log(x, y);
    }

    else{

        x = a;
        y = b;

    }

    if(a < 0 || b < 0 || typeof(a) != 'number' || typeof(b) != 'number')
    {
        console.log("ERROR");
        return result = "ERROR";
    }

    for(let i = 0; i <= y - x; i++)
    {
        rangeArray[i] = x + i;
        
    }

    for(let o = 0; o <= y - x; o++)
    {
       result += rangeArray[o]  
       
    }
    console.log(rangeArray);


    console.log(result);
    return result;

};

// Do not edit below this line
module.exports = sumAll;
