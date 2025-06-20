function product(a,b,c){
    return a*b*c;
}
 
//console.log(product(2,-3,9));
function fun(x,y){
    let a = x(2,3,4);
    console.log(a-y);
}

fun(product,7);//callback : function using as argument