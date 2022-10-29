const listUser = async () =>{
    const response = await fetch('https://royaleapi.github.io/cr-api-data/json/cards.json');

    const users = await response.json();

    let table_body = ``;//alt+96
    users.forEach((user, index) => {
        table_body += `<tr>
            <td>${user.key}</td>
            <td>${user.name}</td>
            <td>${user.elixir}</td>
            <td>${user.type}</td>
            <td>${user.rarity}</td>
            <td>${user.description}</td>
        </tr>`
    });
    //document.getElementById("tablabody_royale").innerHTML = table_body;
    tablabody_royale.innerHTML = table_body;
}

btnPeticion.addEventListener("click",function(){
    listUser();
});
/*
document.addEventListener("load",function() {
    listUser();
});*/