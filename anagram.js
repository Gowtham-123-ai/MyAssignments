function anagram(str1,str2)
{

let sorted1 = str1.toLowerCase().split("").sort().join()
let sorted2 = str2.toLowerCase().split("").sort().join()

if(sorted1===sorted2)
{
    console.log("true")
}
else 
{
    console.log("false")
}
}
anagram('hello', 'world')
anagram('listen', 'silent')
