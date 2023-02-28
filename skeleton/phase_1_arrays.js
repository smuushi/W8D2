Array.prototype.uniq = function() {
    let uniqArray = [];
    this.forEach(function(el) {
        if (!uniqArray.includes(el)) {
            uniqArray.push(el);
        };
    });
    return uniqArray;
}