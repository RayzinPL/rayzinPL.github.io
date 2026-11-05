console.log("Olá! Bem-vindo ao portfólio de Daniel Gonçalves.");

const footer = document.querySelector("footer p");

if (footer) {
    footer.textContent = `© ${new Date().getFullYear()} Daniel Gonçalves. Desenvolvido com curiosidade e código.`;
}
