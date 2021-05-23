function receivesAFunction(spy) {
    spy();
}
   
function returnsANamedFunction() {
    function makeBreakfast() {return " "}
    return makeBreakfast;
}

function returnsAnAnonymousFunction() {
    return function(){}
}
