function adduser(){
    P1= document.getElementById("P1").value;
    P2= document.getElementById("P2").value;
    localStorage.setItem("P1", P1);
    localStorage.setItem("P2", P2);
    window.location = "game_page.html";
}