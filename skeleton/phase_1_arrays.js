Array.prototype.uniq = function() {
    let uniqArray = [];
    this.forEach(function(el) {
        if (!uniqArray.includes(el)) {
            uniqArray.push(el);
        };
    });
    return uniqArray;
};

Array.prototype.twoSum = function() {
    let pairs = [];
    for (let i = 0; i < this.length ; i++) {
        for (let j = i + 1 ; j < this.length ; j++) {
            if (this[i] + this[j] === 0) {
                pairs.push([i, j]); 
            };
        };
    };
    return pairs;

};

Array.prototype.transpose = function() {
    const amountOfNewArrays = this[0].length;
    let transposedOuterArray = [];
    for (let i = 0; i < amountOfNewArrays; i++) {
        let transposedInnerArray = [];
        this.forEach((originalSubArray) => transposedInnerArray.push(originalSubArray[i]));
        transposedOuterArray.push(transposedInnerArray);
    };
    return transposedOuterArray;
};