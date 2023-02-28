Array.prototype.uniq = function() {
    let uniqArray = [];
    this.forEach(function(el) {
        if (!uniqArray.includes(el)) {
            uniqArray.push(el);
        };
    });
    return uniqArray;
}

Array.prototype.twoSum = function() {
    let pairs = [];
    for (let i = 0; i < this.length ; i++) {
        for (let j = i + 1 ; j < this.length ; j++) {
            if (this[i] + this[j] === 0) {
                pairs.push([i, j]); 
            }
        }
    }
    return pairs;

}