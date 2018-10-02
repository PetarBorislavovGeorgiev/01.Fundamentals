function figureAreaname(w, h, W , H) {
    let area1 = w * h;
    let area2 = W * H;
    let area3 = Math.min(w, W) * Math.min(h, H);
    let area = area1 + area2 - area3;

    return area;
}
figureAreaname(2, 4, 5, 3);
