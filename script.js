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

            // Cálculo total da pegada de carbono (mensal)
            let pegadaTotal = (carbonoCarro + carbonoAr + carbonoEletronicos) * 4 + carbonoCarne;

            // Sugestões para reduzir impacto
            let sugestoes = "<ul>";
            if (kmCarro > 50) sugestoes += "<li>Considere usar bicicleta ou transporte público com mais frequência</li>";
            if (arCondicionado > 4) sugestoes += "<li>Reduza o tempo de uso do ar-condicionado e mantenha a temperatura em 24°C</li>";
            if (eletronicos > 6) sugestoes += "<li>Desligue aparelhos eletrônicos quando não estiver usando e prefira modelos eficientes</li>";
            if (carne === "sim") sugestoes += "<li>Experimente ter dias sem carne ou reduza o consumo de carne vermelha</li>";
            sugestoes += "<li>Plante árvores ou contribua com projetos de compensação de carbono</li>";
            sugestoes += "</ul>";

            // Exibir o resultado com animação
            let resultadoDiv = document.getElementById("resultado");
            resultadoDiv.innerHTML = `
                <p>Sua pegada de carbono estimada é de <span class="carbon-value">${pegadaTotal.toFixed(2)} kg CO₂</span> por mês.</p>
                <h3><i class="fas fa-seedling"></i> Como reduzir seu impacto?</h3>
                ${sugestoes}
                <p style="margin-top: 15px; font-style: italic; color: var(--gray);">A pegada média global é de cerca de 400 kg CO₂/mês por pessoa.</p>
            `;
            
            resultadoDiv.style.display = "block";
            resultadoDiv.style.animation = "fadeIn 0.5s ease-out";
        });

        // Adicionando animação de fadeIn
        let style = document.createElement('style');
        style.textContent = `
            @keyframes fadeIn {
                from { opacity: 0; transform: translateY(10px); }
                to { opacity: 1; transform: translateY(0); }
            }
        `;
        document.head.appendChild(style);