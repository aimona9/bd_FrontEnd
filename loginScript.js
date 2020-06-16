function loginRequest()
{
    alert("Login button was clicked");   

    var username = document.getElementById("user").value;
    var password = document.getElementById("pass").value;

    console.log(username);
    console.log(password);
    var ck_user = "test";
    var ck_pass = "admin1";
    
    if (username == ck_user && password == ck_pass)
    {
        console.log("Correct username and password");
        setTimeout(() => {
            window.location.replace = 'https://wypozyczalniastrojowteatrlnych.herokuapp.com/main.html';
        })
    
        window.open('https://wypozyczalniastrojowteatrlnych.herokuapp.com/main.html');
        //window.open('https://wypozyczalniastrojowteatrlnych.herokuapp.com/main.html');
        //window.open('','_self').close()
                
    }
    else if (username == null || password == null)
    {
        console.log("Wrong username and password");
        alert("Please type in password or username");
    }
    else
    {
        console.log("Wrong username and password");
        alert("Login failed. Please try again with a valid username and password");
    }   
} 
