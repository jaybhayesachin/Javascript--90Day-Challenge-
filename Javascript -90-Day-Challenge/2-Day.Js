var employee =["ram","sachin","raj","om"]
for (var i=0;i<employee.length;i++)
{
     document.write(employee[i]+"<br/>")
}

document.write("<hr/>")

var num=[11,22,33,44,55,66,77,88,99]
for (var k=0;k<num.length;k++)
{

document.write(num[k]+"<br/>")
}


                     //new array code 
var worker=new Array
worker[0]="sachin";
worker[1]="jaybhaye";
worker[2]="om";
worker[3]="sanap";
worker[4]="ajay";

var i;
for( var i=0;i<worker.length;i++)
{

     document.write(worker[i]+"<br/>")
}
                // array2
var cities=new Array("lonar","buldhana","chikhli")
for (i=0;i<cities.length;i++)
{

     document.write(cities[i]+"<br/>")
}

//int array
var empid=new Array(10,56,89,7854,452);
for (i=0;i<empid.length;i++);
{

     document.write(empid[i]+"<br/>")
}

CONCAT ARRAY
var sub1=["c","c++","python","java"]
var sub2=["c#","ADO","SQL"]

var result=sub1.concat(sub2);

document.write("<hr/>")

var country=["india","America","japan"]
var states=["maharashtra","MP","Kerala"]
var cities=["pune","satara","Nashik"]

var res1=country.concat(states,cities)
document.write(res1)


