var obj1 = {
  name1: "seo",
  print: function() {
    console.log(this.name1);   // this가 참조되는 위치
  }
}
var obj2 = { name1: "jeong", print: obj1.print };
var name1 = "kuk";
var print = obj1.print;
print();           // kuk
obj1.print();      // jeong
obj2.print();      // seo