let myUname = "UCLM";
let myPword = "@uclm";

function login() {
  let uname = document.getElementById("username").value;
  let pword = document.getElementById("pword").value;

  if (myUname == uname && myPword == pword) {
    alert("Successful Login!");
  } else {
    alert("Unsuccessful Login!");
  }
}

document
  .querySelector("button[type='submit']")
  .addEventListener("click", login);
