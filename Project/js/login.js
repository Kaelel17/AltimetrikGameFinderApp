//Log In

function validate(e) {
  //   e.preventDefault();
  let email, pass;
  email = document.getElementById("email").value;
  console.log(email);
  pass = document.getElementById("password").value;
  console.log(pass);
  if (
    email ==
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        email
      ) &&
    pass == /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{4,16}$/.test(pass)
  );
  {
    // Perform login
    fetch("http://localhost:3000/users?email=" + email + "&password=" + pass),
      {};
  }

  //window.location = "game-finder.html";
}
