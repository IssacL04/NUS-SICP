import {scale_independent,show,overlay,stack,beside,from_url,rcross,make_cross,turn_upside_down} from 'rune';
const url = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgy4bIv9_sx3L4v4eVn7KkSlD5DG9lQrgLfzaPOXDN4ikr4VHisSwytIeWcltq14YaM30&usqp=CAU";
function beside_frac(pic,n) {
    return n===1
        ? pic 
        : beside(pic,stack(beside_frac(pic,n-1),beside_frac(pic,n-1)));
}
function beside_split(pic,n) {
    return n===2
        ? pic 
        : beside(pic,stack(beside_frac(pic,n-1),beside_frac(pic,n-1)));
}
function up_frac1(pic, n){
    return n===1
        ? pic
        : stack(pic,beside(up_frac1(pic,n-1),up_frac1(pic,n-1)));
}
function up_frac(pic,n){
    if(n===1){
        return pic;
    }
    else{
        return turn_upside_down(up_frac1(pic,n));
    }
}
function up_split1(pic, n){
    return n===2
        ? pic
        : stack(pic,beside(up_frac1(pic,n-1),up_frac1(pic,n-1)));
}
function up_split(pic,n){
    if(n===2){
        return pic;
    }
    else{
        return turn_upside_down(up_split1(pic,n));
    }
}

function mosaic(r1,r2,r3,r4){
    return(stack(beside(r1,r2),beside(r3,r4)));
}
function corner_frac(pic,n){
    if(n===1){
        return pic;
    }
    else{
        return(mosaic(up_split(turn_upside_down(pic),n-1),corner_frac(pic,n-1),pic,beside_split(pic,n-1)));
    }
}
show(corner_frac(from_url(url),4));

