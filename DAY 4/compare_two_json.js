
var q1 = {'name': 'Manisekar', 'age': 21};
var q2 = {'age': 21, 'name': 'Manisekar'};
const isEqual = (q1, q2) => {
    var flag = true;
if(Object.keys(q1).length === Object.keys(q2).length)
{
for(key in q1) 
{
if(q1[key] == q2[key]) 
{
  continue;
  }
  else 
  {
  flag = false;
   }
  }
}
else 
{
flag = false;
 }
  console.log(flag);
}
isEqual(q1, q2);