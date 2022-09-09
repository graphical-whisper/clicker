let i= 0
document.getElementById("counter").innerHTML = i

document.getElementById("tap").addEventListener("click",add)
function add(){
    i+=1
    console.log(i)
    document.getElementById("counter").innerHTML = i
}