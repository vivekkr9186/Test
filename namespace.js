var testName;
(function (testName) {
    function sub(x, y) {
        console.log(x + y);
    }
    testName.sub = sub;
})(testName || (testName = {}));
