give1=1;give2=100;
count=0;

for(i=give1;i<=give2;i++)
{
    isPrime=0;
    for(j=2;j<i;j++)
    {
        if(i%j==0)
        {
            isPrime = 1
            break;
        }

    }
    if(i<2)isPrime=1;
    if(isPrime==0)count+=1;
}
console.log("(%d,%d) have %d 個質數",give1,give2,count)

