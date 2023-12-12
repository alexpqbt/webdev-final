let myUname="UCLM";
let myPword="@uclm";

function login(){
    let uname = document.getElementById("username").value;
    let pword = document.getElementById("pword").value;

    if (myUname == uname && myPword == pword){
            document.write("Sucvessful Login!");
    }else {
        alert("Unsuccessful Login!");
    }
}