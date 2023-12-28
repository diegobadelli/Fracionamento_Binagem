// Função para encontrar metragem mais próxima
function encontrarMetragemMaisProxima(metragens, metragemAlvo) {
    if (!metragens) {
        console.error("A array 'metragens' é nula ou indefinida.");
        return null;  // ou qualquer outro valor padrão que faça sentido para o seu caso
    }

    // Filtrar valores menores ou iguais à metragem alvo
    const valoresMenores = metragens.filter(valor => valor <= metragemAlvo);

    // Encontrar o maior valor entre os valores menores
    const metragemFinal = Math.max(...valoresMenores);

    return metragemFinal;
}

function calcularFracionamento() {
    let escolha = parseInt(document.querySelector('input[name="produto"]:checked').value);
    let produtoEscolhido = produtos[escolha - 1];

    let metragemMaquina = parseInt(document.getElementById('metragemMaquina').value);
    let metragemEtiqueta = parseInt(document.getElementById('metragemEtiqueta').value);
    let metragemFracionamento = parseInt(document.getElementById('metragemFracionamento').value);

    let metragemSegundaBobina = metragemMaquina - metragemFracionamento;
    let fatorCorrecao = metragemEtiqueta / metragemMaquina;
    let metragemRealPrimeiraBobina = metragemFracionamento * fatorCorrecao;
    let metragemRealSegundaBobina = metragemSegundaBobina * fatorCorrecao;
    let resultadoHTML = "";
    //console.log("Metragem real segunda bobina:", metragemRealSegundaBobina);
    //console.log("Metragens segunda bobina:", metragemSegundaBobina);

    // CAT5e
    const CAT5e = {
        "Caixas": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27],
        "Primeira Bobina": [0, 0, 1270, 1270, 1575, 1880, 2185, 2490, 2795, 3080, 3385, 3690, 3995, 4300, 4605, 4910, 5215, 5520, 5825, 6130, 6435, 6740, 7045, 7045, 7655, 7960, 8262],
        "Segunda Bobina": [0, 0, 1250, 1250, 1555, 1860, 2156, 2470, 2775, 3080, 3385, 3690, 3995, 4300, 4605, 4910, 5215, 5520, 5825, 6130, 6435, 6740, 7045, 7045, 7655, 7960, 8262]
    };

    // CAT6
    const CAT6 = {
        "Caixas": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22],
        "Primeira Bobina": [0, 0, 1270, 1270, 1575, 1880, 2185, 2490, 2795, 3100, 3505, 3810, 4115, 4420, 4725, 5030, 5335, 5640, 5640, 6250, 6555, 6890],
        "Segunda Bobina": [0, 0, 1270, 1270, 1575, 1880, 2185, 2490, 2795, 3100, 3405, 3810, 4115, 4420, 4725, 5030, 5335, 5640, 5640, 6250, 6555, 6890]
    };

    // SEM_FILLER
    const SemFiller = {
        "Caixas": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
        "Primeira Bobina": [0, 0, 1270, 1270, 1575, 1880, 2185, 2490, 2795, 3100, 3505, 3810, 4115, 4420, 4725, 5030, 5030, 5640, 5945, 6320],
        "Segunda Bobina": [0, 0, 1270, 1270, 1575, 1880, 2185, 2490, 2795, 3100, 3200, 3505, 3810, 4115, 4420, 4725, 5030, 5030, 5640, 5945, 6320]
    };

    if (produtoEscolhido == "CAT5e") {
        const metragensPrimeiraBobina = CAT5e["Primeira Bobina"];
        const metragemFinal1 = encontrarMetragemMaisProxima(metragensPrimeiraBobina, metragemRealPrimeiraBobina);

        const metragensSegundaBobina = CAT5e["Segunda Bobina"];
        const metragemFinal2 = encontrarMetragemMaisProxima(metragensSegundaBobina, metragemRealSegundaBobina);
        const metragemMaqBobina2 = metragemFinal2 * metragemMaquina / metragemEtiqueta;

        //console.log("Metragem final segunda bobina:", metragemFinal2);
        resultadoHTML = `Dados para Fracionamento: <br> <br>
          Primeira bobina Fracionada: ${metragemFinal1} m <br> <br>
          Segunda bobina Fracionada: ${metragemFinal2} m <br> <br>
          Metragem da segunda bobina na máquina: ${metragemMaqBobina2.toFixed(0)} m`;
    } else if (produtoEscolhido == "CAT6") {
        const metragensPrimeiraBobina = CAT6["Primeira Bobina"];
        const metragemFinal1 = encontrarMetragemMaisProxima(metragensPrimeiraBobina, metragemRealPrimeiraBobina);

        const metragensSegundaBobina = CAT6["Segunda Bobina"];
        const metragemFinal2 = encontrarMetragemMaisProxima(metragensSegundaBobina, metragemRealSegundaBobina);
        const metragemMaqBobina2 = metragemFinal2 * metragemMaquina / metragemEtiqueta;

        //console.log("Metragem final segunda bobina:", metragemFinal2);
        resultadoHTML = `Dados para Fracionamento: <br> <br>
          Primeira bobina Fracionada: ${metragemFinal1} m <br> <br>
          Segunda bobina Fracionada: ${metragemFinal2} m <br> <br>
          Metragem da segunda bobina na máquina: ${metragemMaqBobina2.toFixed(0)} m`;
    } else {
        const metragensPrimeiraBobina = SemFiller["Primeira Bobina"];
        const metragemFinal1 = encontrarMetragemMaisProxima(metragensPrimeiraBobina, metragemRealPrimeiraBobina);

        const metragensSegundaBobina = SemFiller["Segunda Bobina"];
        const metragemFinal2 = encontrarMetragemMaisProxima(metragensSegundaBobina, metragemRealSegundaBobina);
        const metragemMaqBobina2 = metragemFinal2 * metragemMaquina / metragemEtiqueta;

        //console.log("Metragem final segunda bobina:", metragemFinal2);
        resultadoHTML = `Dados para Fracionamento: <br> <br>
          Primeira bobina Fracionada: ${metragemFinal1} m <br> <br>
          Segunda bobina Fracionada: ${metragemFinal2} m <br> <br>
          Metragem da segunda bobina na máquina: ${metragemMaqBobina2.toFixed(0)} m`;
    }

    // Limpa o conteúdo anterior
    document.getElementById('output').innerHTML = '';

    // Adiciona o novo resultado
    document.getElementById('output').innerHTML = resultadoHTML;

    // Evita o comportamento padrão de enviar o formulário
    return false;
}

// Dados
const produtos = ["CAT5e", "CAT6", "Sem Filler"];

// Função para exibir lista de escolha do produto
function exibirListaProdutos() {
    const listaProdutos = document.getElementById('lista-produtos');
    produtos.forEach((produto, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<label><input type='radio' name='produto' value='${index + 1}'> ${produto}</label>`;
        listaProdutos.appendChild(listItem);
    });
}

// Chama a função para exibir a lista de escolha do produto
exibirListaProdutos();