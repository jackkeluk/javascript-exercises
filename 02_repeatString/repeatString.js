const repeatString = function(string, num) {
    let i = 1;
    let word = string;
    if(num > 0)
    {
         for(i; i < num; i++)
            {
                word += string;
             }
    }

    else if(num < 0)
    {
        word = "ERROR";
    }

    else{
        word = "";
    }

    return word;
};

// Do not edit below this line
module.exports = repeatString;
