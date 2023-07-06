import {scale_independent,show,overlay,stack,beside,from_url,rcross,make_cross,turn_upside_down} from 'rune';
const url = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgy4bIv9_sx3L4v4eVn7KkSlD5DG9lQrgLfzaPOXDN4ikr4VHisSwytIeWcltq14YaM30&usqp=CAU";
import {scale_independent,show,overlay,stack,beside,from_url,rcross,make_cross,turn_upside_down} from 'rune';
const url = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgy4bIv9_sx3L4v4eVn7KkSlD5DG9lQrgLfzaPOXDN4ikr4VHisSwytIeWcltq14YaM30&usqp=CAU";
function up_split(painter, n) {
    if (n === 0) {
        return painter;
    } else {
        const smaller = up_split(painter, n - 1);
        return stack(beside(smaller, smaller), painter);
    }
} 
function right_split(painter, n) {
    if (n === 0) {
        return painter;
    } else {
        const smaller = right_split(painter, n - 1);
        return beside(painter, below(smaller, smaller));
    }
} 

function corner_split(painter, n) {
    if (n === 0) {
        return painter;
    } else {
        const up = up_split(painter, n - 1);
        const right = right_split(painter, n - 1);
        const top_left = beside(up, up);
        const bottom_right = stack(right, right);
        const corner = corner_split(painter, n - 1);
        return stack(beside(top_left, corner),
                     beside(painter, bottom_right));
    }
}

show(corner_split(heart, 4));

//Standard Answer:https://sourceacademy.nus.edu.sg/sicpjs/2.2.4#fig-2.14

