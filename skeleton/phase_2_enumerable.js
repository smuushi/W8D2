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
};

const adderer = function(el) {
    return el + 1;
};

function addererer(el) {
    return el + 1;
};

const adderererer = (el) => {
    return el + 1;
};

// node
// > inject
// > function(acc, el) {
//     does something with acc and el... ;
// };

Array.prototype.myReduce = function(inject, initialValue) {
    if (initialValue === undefined) {
        initialValue = this[0];
        this.shift();
    };

    let accumulator = initialValue;
    
    // sum = this.myEach((el) => inject(sum, el));

    this.myEach( function(el) {
        debugger
        accumulator = inject(accumulator, el);

    });


    return accumulator;
};


// [1, 2, 3].myReduce(
//     (function(acc, el) { return acc + el })
// ); // => 6

// [1, 2, 3].myReduce(
//     (function(acc, el) { return acc + el }), 
//     (25)
// ); // => 31