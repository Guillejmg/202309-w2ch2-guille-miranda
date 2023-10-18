export const strictEquals=(a,b)=>{
    const defineBoolean=Object.is(a,b);
    const A = {a};
    const B = {b};
    
    if (a === NaN){
      return A;
    }
    if(b === NaN){
      return B;
    }
    if (defineBoolean===true){
    return true;
    };
    return false;
};

console.log(strictEquals(1,1));
console.log(strictEquals(NaN,NaN));
console.log(strictEquals(0,-0));
console.log(strictEquals(-0,0));
console.log(strictEquals(1,'1'));
console.log(strictEquals(true,false));
console.log(strictEquals(false,false));
console.log(strictEquals('water','oil'));


