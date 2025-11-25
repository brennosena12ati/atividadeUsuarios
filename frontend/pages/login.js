const button = document.querySelector("button")
button.addEventListener("click", login)

async function login(event) {
    event.preventDefault()
    const email = document.querySelector("#email").value
    const password = document.querySelector("#password").value

    if (email === "" || password === "") {
        alert("Preencha todas as informações!")
        return
    }

    const user = {
        email,

        password
    }

    const response = await fetch("http://localhost:3333/login", {
        method: "POST",
        headers: {
            "Content-Type": "appLication/json"
        },
        body: JSON.stringify({ user })
    }).then(response => response.json())

    // se existir um response.messagem sigifica que o usuário errou, portanto mostramos a menssagem
    if (response.message) {
        alert(response.message)
        window.location.reload()
        return
    }

    // se o usuário acertar, guardamos no sessionStorage o id e o name
    const { id, name } = response
    
    // JSON.stringify converte o objeto em JSON
    sessionStorage.setItem("user", JSON.stringify({ id, name }))

    alert("Login realizado com sucesso!")

    window.location.href = "../index.html"
}