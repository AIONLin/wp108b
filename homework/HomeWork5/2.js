//第一題 
var a1=[[2,3],[4,9]];
var a2=[[9,7],[8,8]];
var b1=[];

for(i=0;i<a1.length;i++)
{
    b1[i]=[];
    for(j=0;j<a1[i].length;j++)
    {
        b1[i][j]= a1[i][j]+a2[i][j];
    }
}
console.log("相加     : ",b1);

//第二題
var a3=[[6,3],[11,9]];
var b2 =[];

for(i=0;i<2;i++)
{
    b2[i]=[];
    for(j=0;j<2;j++)
    {
        b2[i][j]= 0 - a3[i][j];
    }
}
console.log("加負號   : ",b2);

//第三題
var a4 = [[7,8,9], [32,21,77]];
var b3 = [];

for(i = 0; i <=a4.length; i++){
    b3[i] = [];
   for(j = 0; j < 2; j++){
        b3[i][j] = a4[j][i];
   }
}

console.log("轉換矩陣 : ",b3);