var user1 = {name: "john", age: 10, item: ['item1', 'item2']};
var user2 = {name: "bye", age: 15, item: ['item1', 'item3']};
var user3 = {name: "anda", age: 50, item: ['item3', 'item4']};
var user4 = {name: "djrmasl", age: 32, item: ['item1', 'item5']};

var users = [];
users.push(user1);
users.push(user2);
users.push(user3);
users.push(user4);

//users.pop(); 뒤에부터 한명씩 삭제한다.
//users.splice(2,1); 2번부터 1개씩 삭제한다. 

console.log(users);

for(var i=0; i<users.length; i++) {

	if (users[i].name === 'john') {

		console.log('이름은'+users[i].name+"입니다");
		console.log('나이는'+users[i].age+"입니다");
		console.log('아이템은'+users[i].item+"입니다");
		console.log('------------------------------');
	break;
	}
}
