var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var PhotoBook = /** @class */ (function () {
    function PhotoBook(pages) {
        if (pages !== undefined)
            this.numPages = pages;
        else
            this.numPages = 16;
    }
    PhotoBook.prototype.GetNumberPages = function () {
        console.log(this.numPages);
    };
    return PhotoBook;
}());
var BigPhotoBook = /** @class */ (function (_super) {
    __extends(BigPhotoBook, _super);
    function BigPhotoBook() {
        return _super.call(this, 64) || this;
    }
    return BigPhotoBook;
}(PhotoBook));
var a = new PhotoBook();
a.GetNumberPages();
var p = new PhotoBook(24);
p.GetNumberPages();
var b = new BigPhotoBook();
b.GetNumberPages();
