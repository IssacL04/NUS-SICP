import {scale_independent,show,stack,beside,from_url,rcross,make_cross,turn_upside_down} from 'rune';
function beside_frac(pic,n) {
    return n===1
        ? pic 
        : beside(pic,stack(beside_frac(pic,n-1),beside_frac(pic,n-1)));
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


// Test
show(beside_frac(make_cross(rcross),5));
// Test
show(up_frac(make_cross(rcross),5));
