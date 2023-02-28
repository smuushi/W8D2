Array.prototype.myEach = function(someFunction) {

    for (let i = 0 ; i < this.length ; i++) {
        const theElement = this[i];
        someFunction(theElement);
    };

};

const hey = function() {
    console.log("hello ");
};
//////////////////////////////////////
Array.prototype.myMap = function(callbackk) {
    let mappedArray = [];
    // this.myEach((el) => mappedArray.push(callbackk(el)));
    this.myEach( function(el) {
        mappedArray.push(callbackk(el));
    });
    return mappedArray;
};

const adder = function(el) {
    let added = el;
    added = added + 1;
    return added;
}

const adderer = function(el) {
    return el + 1;
}

function addererer(el) {
    return el + 1;
}

const addererer = (el) => {
    return el + 1;
};