function getTriangleArea(a, h) {

	var greaterThanZero = a && h >= 0 ? '' : 'Nieprawidłowe dane';
	
	console.log(greaterThanZero);

return a*h/2

}

console.log(getTriangleArea(10, 6));

var triangle1Area = getTriangleArea(10, 15);

console.log('Triangle 1 area is '+triangle1Area);

var triangle2Area = getTriangleArea(13, 8);

console.log('Triangle 2 area is '+triangle2Area);

var triangle3Area = getTriangleArea(8, 2);

console.log('Triangle 3 area is '+triangle3Area);