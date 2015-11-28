var test = {a: 1, b:2, c: 3};
console.log(test.a);
console.log(test.b);
console.log(test.a + test.b + test.c);

//객체 프로퍼터에 접근하는 방법은 "."
//객체 안에 객체가 있을 수 있나요?
var test2 = {a: test, b: 4};
console.log(test2.a);
console.log(test2.a.a);
console.log(test2.a.b);

// JSON
// 서버가 값을 주고 받는데, 이게 객체와 비슷합니다

for(key in test) {
	// key >> 'a'
	console.log('key: '+key+' value:'+test[key]);
}