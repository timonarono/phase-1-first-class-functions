function receivesAFunction(callback){
return  callback (function callBack(){
console.log("jump")
})
}
 const named =  function (){
    console.log("jump")

}
function returnsANamedFunction() {
    return named
}
function unNamed(anonymous){
    return anonymous

}
function returnsAnAnonymousFunction()
{
    return unNamed(() =>console.log("jump"))
}