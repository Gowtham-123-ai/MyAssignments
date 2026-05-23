let num = [56,78,90,23,90,76,43,56]
for (let i=0; i<num.length;i++)
{
    for (let j=i+1; j<num.length; j++)
    {
        if(num[i]===num[j])
        {
            console.log(num[i])
        }
    }
}
num[5]="webkit"
console.log(num)
num.pop()
console.log(num)
num.push("firefox")
console.log(num)
num.shift()
console.log(num)