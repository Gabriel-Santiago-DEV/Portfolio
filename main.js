const form = document.querySelector(".campo-formulario");

form.addEventListener("submit", function (event) {
    // Impede o envio do formulário
    event.preventDefault();

    // Captura os dados do formulário
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const assunto = document.getElementById("assunto").value;
    const mensagem = document.getElementById("mensagem").value;

    // Limpa o formulário após o envio
    form.reset();

    // Alerta de sucesso
    alert("Mensagem enviada com sucesso!");
});
