document.getElementById("carbonForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Pegando os valores do formulário
    let kmCarro = parseFloat(document.getElementById("kmCarro").value) || 0;
    let arCondicionado = parseFloat(document.getElementById("arCondicionado").value) || 0;
    let eletronicos = parseFloat(document.getElementById("eletronicos").value) || 0;
    let carne = document.getElementById("carne").value;

    // Fatores de emissão
    let carbonoCarro = kmCarro * 0.25; // 0.25 kg CO₂ por km
    let carbonoAr = arCondicionado * 0.5; // 0.5 kg CO₂ por hora
    let carbonoEletronicos = eletronicos * 0.3; // 0.3 kg CO₂ por hora
    let carbonoCarne = (carne === "sim") ? 200 : 50; // 200 kg CO₂ se come carne, 50 se não

    // Cálculo total da pegada de carbono
    let pegadaTotal = carbonoCarro + carbonoAr + carbonoEletronicos + carbonoCarne;

    // Sugestões para reduzir impacto
    let sugestoes = "<ul>";
    if (kmCarro > 50) sugestoes += "<li>🚴‍♂️ Considere usar bicicleta ou transporte público com mais frequência.</li>";
    if (arCondicionado > 4) sugestoes += "<li>❄️ Reduza o tempo de uso do ar-condicionado para economizar energia.</li>";
    if (eletronicos > 6) sugestoes += "<li>🔌 Evite deixar aparelhos eletrônicos ligados sem necessidade.</li>";
    if (carne === "sim") sugestoes += "<li>🥗 Experimente reduzir o consumo de carne alguns dias por semana.</li>";
    sugestoes += "</ul>";

    // Exibir o resultado
    document.getElementById("resultado").innerHTML = `
        <p>Sua pegada de carbono estimada: <strong>${pegadaTotal.toFixed(2)} kg CO₂/mês</strong></p>
        <h3>🌱 Como reduzir seu impacto?</h3>
        ${sugestoes}
    `;
});
