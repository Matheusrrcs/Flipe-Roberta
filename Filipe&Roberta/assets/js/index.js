function atualizarDataHora() {

    const now = new Date(); // Data de hoje
    const past = new Date('2021-03-08'); // Outra data no passado
    const diff = Math.abs(now.getTime() - past.getTime()); // Subtrai uma data pela outra
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24)-1); // Divide o total pelo total de milisegundos correspondentes a 1 dia. (1000 milisegundos = 1 segundo).

    const html = document.getElementById('sub');

    html.innerText = ` Já se passou ${days} dias . 08.03.2021`
}

atualizarDataHora();
