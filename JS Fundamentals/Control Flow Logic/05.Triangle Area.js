function triangleArea(a, b, c) {
    let sq = (a + b + c)/2;
    let area = Math.sqrt(sq * (sq - a) * (sq - b) * (sq - c));
    console.log(area);
}
triangleArea(2, 3.5, 4);
