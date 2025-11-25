const header = document.querySelector("header ul")

function init() {
    // converte o JSON para objeto e guarda na variável user
    
    const user = JSON.parse(sessionStorage.getItem ("user"))

    if (user) {
    header.innerHTML.HTML += `
        <li>Usuário: ${user.name}</li>
        <li><button id="logout">Sair</button></li>
    `

    // adicionar evento ao botão apenas se o usuário estiver logado
    const logoutButton = document.querySelector("#logout")
    logoutButton.addEventListener("click", logout)

    return 
}

header.innerHTML += `
    <li>
        <a href="./pages/login.html">Login</a>
    </li>
`
}

init()

function logout() {
    sessionStorage.removeItem("user")
    alert("Você deslogou. Até mais. Volte mais vezes! ")
    window.location.reload
}