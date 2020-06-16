function handleLogout()
{
  alert("The logout button was clicked");
  window.localStorage.clear();
  window.location.reload(true);
  //window.location.replace('https://wypozyczalniastrojowteatrlnych.herokuapp.com');
  window.open('https://wypozyczalniastrojowteatrlnych.herokuapp.com');
}
    