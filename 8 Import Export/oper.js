//every indivisual file in nodejs is module
const add = (a,b) => {
    return a+b;
};
const sub = (a,b) => {
    return a-b;
};

//single pass karna ho to 
// module.exports = add;


//multiple pass karna ho to 
// module.exports.add = add;
// module.exports.sub = sub;

//we can do it in one line also

module.exports = {add, sub};

//this will do same 