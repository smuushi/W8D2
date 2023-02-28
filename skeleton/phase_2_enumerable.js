Array.prototype.myEach = function(callback) {

    for (let i = 0 ; i < this.length ; i++) {
        const theElement = this[i];
        callback(theElement);
    }

}

const hey = function() {
    console.log("hello ")
}
