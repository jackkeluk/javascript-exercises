const removeFromArray = function(array, ...args) 
{

    const filtered = array.filter(element => !args.includes(element));
    console.log(filtered);
    return filtered;
    

};

// Do not edit below this line
module.exports = removeFromArray;
