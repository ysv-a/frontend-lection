const dropcss = require('dropcss');
const fs = require('fs');


let css = fs.readFileSync('css.txt').toString();
let css2 = css
    .replace(/\\\:/gm, '__0')
    .replace(/\\\//gm, '__1')
    .replace(/\\\?/gm, '__2')
    .replace(/\\\(/gm, '__3')
    .replace(/\\\)/gm, '__4');

let html = fs.readFileSync('html.txt').toString();
let html2 = html.replace(/class=["'][^"']*["']/gm, m =>
    m
    .replace(/\:/gm, '__0')
    .replace(/\//gm, '__1')
    .replace(/\?/gm, '__2')
    .replace(/\(/gm, '__3')
    .replace(/\)/gm, '__4')
);

const complete_path =  'critical_part_mini.css';

let clean = dropcss({
    css: css2,
    html: html2,
});

clean.css = clean.css
    .replace(/__0/gm, '\\:')
    .replace(/__1/gm, '\\/')
    .replace(/__2/gm, '\\?')
    .replace(/__3/gm, '\\(')
    .replace(/__4/gm, '\\)');

fs.writeFile(complete_path, clean.css, function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
}); 

