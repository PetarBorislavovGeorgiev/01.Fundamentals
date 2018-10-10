function colorfulNumbers(n) {
    let html = ('<ul>\n');
    
    for (let index = 1; index <= n; index++) {
        let color = index % 2 == 0 ? 'blue' : 'green';
        html +=`  <li><span style='color:${color}'>${index}</span></li>`;
        
    }
    html += '</ul>';
    return html;
}
colorfulNumbers(10);
