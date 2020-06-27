/* 參考李安博同學版本後 在自己寫出來 */
/* 能夠理解此程式碼 */
class vector
{
    constructor(a,b,c)
    {
        this.a=a
        this.b=b
        this.c=c
    }
    add(v2)
    {
        return [this.a+v2.a,this.b+v2.b,this.c+v2.c]
    }
    sub(v2)
    {
        return [this.a-v2.a,this.b-v2.b,this.c-v2.c]
    }
    dot(v2)
    {
        //方便閱讀  將每個相乘算出  再相加出最後答案
        return [this.a*v2.a,'+',this.b*v2.b,'+',this.c*v2.c,'=',this.a*v2.a+this.b*v2.b+this.c*v2.c]
    }
    neg()
    {
        return [0-this.a,0-this.b,0-this.c]
    }
    
}
var v1=new vector(9,8,7)
var v2=new vector(5,4,3)
console.log("v1 = %s",[v1.a,v1.b,v1.c])
console.log("\nv2 = %s",[v2.a,v2.b,v2.c])
console.log("\nv1 + v2 = %s",v1.add(v2))
console.log("\nv1 - v2 = %s",v1.sub(v2))
console.log("\nv1 ‧ v2 = %s",v1.dot(v2))
console.log("\nv1' = %s",v1.neg())
module.exports=vector