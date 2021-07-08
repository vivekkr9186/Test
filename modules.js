var test;
(function (test) {
    function add(x, y) {
        console.log(x + y);
    }
    test.add = add;
})(test || (test = {}));
