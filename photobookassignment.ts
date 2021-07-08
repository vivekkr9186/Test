class PhotoBook{
private numPages: Number;
constructor( pages?: number){
if (pages !== undefined)
this.numPages=pages;
else
this.numPages=16;
}
public GetNumberPages():void {
console.log(this.numPages);
}
}class BigPhotoBook extends PhotoBook{
constructor(){
super(64);
}
}var a = new PhotoBook();
a.GetNumberPages();
var p = new PhotoBook(24);
p.GetNumberPages();
var b = new BigPhotoBook();
b.GetNumberPages();

