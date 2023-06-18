// split the string at the first occurrence of x
// return the larger of the two resulting strings
// i.e. HappyxDeveloper => Developer
function splitAtX(string) {
    const index = string.indexOf('x'); 

    const a = string.slice(0,index);

    const b = string.slice(index+1);
    
    return (a.length > b.length) ? a : b;
}