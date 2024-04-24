function getAverage(a, b, c) {
    var total = a + b;
    var count = 2;
    if (typeof c !== 'undefined') {
        total += c;
        count++;
    }
    var result = total / count;
    return 'result : ' + result;
}
getAverage(10, 20, 30);
getAverage(10, 20);
