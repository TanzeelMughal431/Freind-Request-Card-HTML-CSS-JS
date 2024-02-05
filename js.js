var a = document.getElementById("hf")
var b = document.getElementById("addbtn")
var g;
 

var cc = a.innerHTML

b.addEventListener("click",function(){
    var cc = a.innerHTML; // Store the current inner HTML
    switch(cc) {
        case "Stranger":
            a.innerHTML = "Friends";
            a.style.color = "green"
            b.style.backgroundColor = "gray"
            b.innerText = "Remove Friends"
            break;
        case "Friends":
            a.innerHTML = "Stranger";
            a.style.color = "red"
            b.style.backgroundColor = "green"
            b.innerText = "Add Friends"
           var g = a.style.padding;
           console.log(g)
           
            break;
        default:
            // Handle default case if needed
            break;
    }
}
)


