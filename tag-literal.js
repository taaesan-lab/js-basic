function sides(literals, ...expressions) {
   [a,p] = expressions;
   const s1 = (p + Math.sqrt((p * p) - (16 * a)))/4;
   const s2 = (p - Math.sqrt((p * p) - (16 * a)))/4;
   return [s2, s1];
}
let s1 = 10;
let s2 = 14;

const [x, y] = sides`The area is: ${s1 * s2}.\nThe perimeter is: ${2 * (s1 + s2)}.`;
console.log(x);
console.log(y);
