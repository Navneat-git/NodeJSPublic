const _=require('lodash');

var data=['person','persons',1,2,3,2,1,1,'name','age','2','1'];
var filter=_.uniq(data);
console.log('Unique result through lodash funation '+ filter);

console.log(_.isString('nodejs'));
console.log(_.isString(2));
console.log(_.isString(false));
console.log(_.isString(true));
