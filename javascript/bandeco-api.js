// Função para renderizar o cardápio na view-normal
function renderMenuInViewNormal(data) {
    const menuContainer = document.getElementById('menu-container');
    menuContainer.innerHTML = '';

    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    let selectedMeal;

    // Definir se é hora de almoço ou jantar
    if (currentHour >= 10 && currentHour < 15) {
        selectedMeal = data.find(item => item.name === "Almoço");
    } else if (currentHour >= 15 && currentHour < 20) {
        selectedMeal = data.find(item => item.name === "Jantar");
    }

    if (selectedMeal) {
        const card = document.createElement('div');
        card.classList.add('menu-item');

        const title = document.createElement('h3');
        title.textContent = selectedMeal.name;
        card.appendChild(title);


        const details = document.createElement('p');
        

        function addDetail(label, value) {
            if (value) {
                details.innerHTML += `${label}: ${value}<br>`;
            }
        }

        addDetail('Prato Principal', selectedMeal.main_course);
        addDetail('Guarnição', selectedMeal.garrison);
        addDetail('Acompanhamentos', selectedMeal.side_dishes);
        addDetail('Salada 1', selectedMeal.salad1);
        addDetail('Salada 2', selectedMeal.salad2);
        addDetail('Sobremesa', selectedMeal.dessert);
        addDetail('Bebida', selectedMeal.refreshment);

        card.appendChild(details);
        menuContainer.appendChild(card);
    } else {
        menuContainer.innerHTML = '<p>Nenhuma refeição disponível no momento.</p>';
    }
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

renderMenuInViewNormal(data);
*/

fetchMenuData();