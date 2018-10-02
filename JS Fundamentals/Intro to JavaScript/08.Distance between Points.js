function distanceBetweenPoints(x1, y1, x2, y2) {
    let distanceX = Math.pow(x1 - x2, 2);
    let distanceY = Math.pow(y1 - y2, 2);
    let distance = Math.sqrt(distanceX + distanceY);
    return distance;
}
distanceBetweenPoints(2, 4, 5, 0);
distanceBetweenPoints(2.34, 15.66, -13.55, -2.9985);
