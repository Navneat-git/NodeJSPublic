var fs=require('fs');
var os=require('os');

var user=os.userInfo();
console.log(user);
console.log(user.username);

fs.appendFile('testfile.txt', 'Hi '+user.username +'!\n', ()=>{

    console.log('file created successfully');
});
