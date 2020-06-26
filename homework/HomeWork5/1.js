//第一題
var array = [1,2,3,4,5];
var sum = 0;
var aver= 0;

for(i=0;i<array.length;i++)
{
    sum +=array[i]; 
}
aver=sum/i;
console.log("平均值 = %d ",aver);

//第二題
a= 0 ;
for(i=0;i<array.length;i++)
{
    a += (array[i]-aver)*(array[i]-aver);//a= 每項-平均的平方相加
    
}
a=a/i;//a=a除項數
a=Math.sqrt(a);//再開根號
console.log("標準差 = %s",a);

//第三題
var give = 55;
count = 2;
location = 0;
var array2=[];
while(give > 1){
    count++;
    if(give % count == 0){
        array2[location] = count;
        give /= count;
        
        count = 2;
        location++;
    }
}
console.log("因式分解為: "  + array2 );
