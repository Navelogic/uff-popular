// Função para renderizar o cardápio na view-normal
function renderMenuInViewNormal(data) {
    const menuContainer = document.getElementById('menu-container');
    menuContainer.innerHTML = ''; // Limpar conteúdo anterior

    data.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('menu-item');

        // Título da refeição (ex: "Almoço", "Jantar")
        const title = document.createElement('h3');
        title.textContent = item.name;
        card.appendChild(title);

        // Detalhes da refeição
        const details = document.createElement('p');
        
        // Função auxiliar para adicionar conteúdo somente se existir
        function addDetail(label, value) {
            if (value) {
                details.innerHTML += `${label}: ${value}<br>`;
            }
        }

        addDetail('Prato Principal', item.main_course);
        addDetail('Guarnição', item.garrison);
        addDetail('Acompanhamentos', item.side_dishes);
        addDetail('Salada 1', item.salad1);
        addDetail('Salada 2', item.salad2);
        addDetail('Sobremesa', item.dessert);
        addDetail('Bebida', item.refreshment);

        card.appendChild(details);
        menuContainer.appendChild(card);
    });
}

async function fetchMenuData() {
    try {
        const response = await fetch('https://bandeco-f9emfcambxeydmft.brazilsouth-01.azurewebsites.net/meal');
        const data = await response.json();
        renderMenuInViewNormal(data);
    } catch (error) {
        console.error('Erro ao buscar dados da API:', error);
    }
}


// Dados de teste (substituindo a chamada da API)
/*
const data = [
    {
        "id": 1,
        "name": "Almoço",
        "main_course": "Empanado de frango",
        "garrison": "Lentilha",
        "side_dishes": "Arroz e Feijão preto",
        "salad1": "Beterraba",
        "salad2": "",
        "dessert": "Fruta",
        "refreshment": "",
        "observation": "",
        "date": "2024-08-09T16:44:50.867085"
    },
    {
        "id": 2,
        "name": "Jantar",
        "main_course": "Empanado de frango",
        "garrison": "Lentilha / chuchu com especiarias (gragoatá) / Chuchu com especiarias (PV)",
        "side_dishes": "Arroz e Feijão preto",
        "salad1": "Beterraba / Rúcula (Gragoatá) / Rúcula (PV)",
        "salad2": "",
        "dessert": "Fruta",
        "refreshment": "",
        "observation": "",
        "date": "2024-08-09T16:44:50.867085"
    }
];

// Renderizar o menu usando os dados de teste
renderMenuInViewNormal(data);
*/

fetchMenuData(); // Buscar dados da API e renderizar o cardápio na view-normal