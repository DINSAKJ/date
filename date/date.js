
var new_dict = {"Mon": 0, "Tue": 0, "Wed" : 0,"Thu":0,"Fri":0,"Sat":0,"Sun":0}; 
var weekday=new Array(7);
    weekday[0]="Sun";
    weekday[1]="Mon";
    weekday[2]="Tue";
    weekday[3]="Wed";
    weekday[4]="Thur";
    weekday[5]="Fri";
    weekday[6]="Sat";
function name(parm) {
  for([key, val] of Object.entries(parm)) {
   console.log(key, val);
   var date_day=new Date(key);
   var day_index=date_day.getDay();
   console.log(day_index);
    //console.log(weekday[day_index]);
    new_dict[weekday[day_index]]=new_dict[weekday[day_index]]+val;
  
}
console.log(new_dict);
for([key, val] of Object.entries(new_dict)) {
 // console.log(key);
  if (val===0){
  n= weekday.indexOf(key);
  new_dict[key]=Math.round(new_dict[key]=(new_dict[weekday[n-1]]+new_dict[weekday[n+1]])/2);
  
}
}
return new_dict
}
console.log(new_dict);
name({"2020-01-01":4,"2020-01-02":4,"2020-01-03":6,"2020-01-04":8,"2020-01-05":2,"2020-01-06":6,"2020-01-07":2,"2020-01-08":2,})
console.log(new_dict);