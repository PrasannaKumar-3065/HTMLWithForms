let arr  = []
let render = () =>{
    let a = ""
    for(let i=0; i<arr.length; i++){
        a += "<tr> <td>"+arr[i].name+"</td> <td>"+arr[i].phno+"</td>  <td>"+arr[i].address+"</td> <td>"+arr[i].location+"</td> <td><button class='submit' onclick='edit("+i+")'>Edit</button><button class='submit' onclick='remove("+i+")'>Delete</button></td> </tr>"
    }
         document.getElementById("tbody").innerHTML = a
}

const nameVal = (name,id) =>{
    let count = 0
    for(let i=0; i<name.length; i++){
        if(name.charAt(i) >= 'a' && name.charAt(i) <= 'z' || name.charAt(i) >= 'A' && name.charAt(i) <= 'Z'){
            document.getElementById(id).style.color = "black"
        }
        else{
            count++;
            document.getElementById(id).style.color = "red" 
        }
    }
    if(count > 0){
        document.getElementById(id+"-error").innerHTML = "Numbers or Special Characters Not Allowed"
    }
    else{
        document.getElementById(id+"-error").innerHTML = ""
    }
}
const phnoVal = (name,id) =>{
    if(name.length >= 10){ 
        document.getElementById(id+"-error").innerHTML = "only 10 numbers allowed"
    }
    else{
        document.getElementById(id+"-error").innerHTML = ""
    }
}

const emailVal = (name,id) =>{
    let atCount = 0
    let capsCount = 0
    let dotCount = 0
    let spaceCount = 0
    let letters = 0
    let msg = ""
    for(let i=0; i<name.length; i++){
        if(name.charAt(i) == '@'){
            atCount++
        }
        else if(name.charAt(i) == '.'){
            dotCount++
        }
        else if(name.charAt(i) >= 'A' && name.charAt(i) <= 'Z'){
            capsCount++
        }
        else if(name.charAt(i) >= 'a' && name.charAt(i) <= 'z' || name.charAt(i) >= '0' && name.charAt(i) <= '9'){
            letters++
        }
        else{
            spaceCount++
        }
    }
    console.log(atCount+","+capsCount+","+dotCount+","+spaceCount)
    if(spaceCount > 0){    
        msg = "Should not contain spaces or special Characters"
    }
    else if(atCount==0){
            msg = "@required" 
    }
    else if(capsCount > 0){
        msg = "Caps not allowed"
    }
    else if(dotCount == 0){
            msg = ". Required"
    }
    
    document.getElementById(id+"-error").innerHTML= msg
}

const validate = (object) => {
    object.style.border = "solid black 2px"
    console.log(object)
    if(object.id == "name"){
        nameVal(object.value,object.id)
    }
    else if(object.id == "phno"){
        phnoVal(object.value,object.id)
    }
    else if(object.id == "email"){
        emailVal(object.value,object.id)
    }
    else if(object.id=="date"){
        dateValue(object.value,object.id)
    }
}

let check = () =>{
    event.preventDefault()
    let val = [];
    let errors = document.getElementsByClassName("error")
    let input = document.getElementsByClassName("form-input")
    for(let element of errors){
        if(element.innerText != ""){
            val.push(element)
        }
    }
    for(let element of input){
        if(element.value == ""){
            val.push(element)
        }
    }
    for(let element of val){
        element.style.border = "solid red 2px"
    }
    console.log(val)
    if(val.length == 0){
        if(this.id == null){
            add()
        }
        else{
            update()
        }
    }
    else{
        alert("Enter all details")
    }
}

let add = () =>{
    arr.push({'name':document.getElementById("name").value, 'phno':document.getElementById("phno").value, 'address':document.getElementById("add").value,'location':document.getElementById("location").value})
    console.log(arr.length) 
    render()
    reset()
}

let remove = (id) =>{
    arr.splice(id, 1)
    render()
}

let update = () =>{
    console.log(this.id)
    arr[this.id].name = document.getElementById("name").value
    arr[this.id].phno = document.getElementById("phno").value
    arr[this.id].address = document.getElementById("add").value
    arr[this.id].location = document.getElementById("location").value
    document.getElementById("submit").value = "Submit";
    this.id = null
    render()
    reset()
}

let edit = (id) =>{
    document.getElementById("name").value = arr[id].name
    document.getElementById("phno").value = arr[id].phno
    document.getElementById("add").value = arr[id].address
    document.getElementById("location").value = arr[id].location
    document.getElementById("submit").value = "Update";
    this.id = id
    
}

let reset = () =>{
    document.getElementById("name").value = ""
    document.getElementById("phno").value = ""
    document.getElementById("add").value = ""
    document.getElementById("location").value = ""
}
