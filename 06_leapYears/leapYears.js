const leapYears = function(year) {

let isLeapYear;

    if(year % 4 == 0)
    {
        if(year % 100 != 0 || year % 100 == 0 && year % 400 == 0 )
        {
            isLeapYear = true;
            
        }

        else
        {
            isLeapYear = false;
        }
    }

    else
    {
        isLeapYear = false;
    }
    console.log(isLeapYear);

    return isLeapYear;
};

// Do not edit below this line
module.exports = leapYears;
