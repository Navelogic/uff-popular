function renderUFFNoticias() {
    document.getElementById('view-normal').style.display = 'none';
    document.getElementById('view-dinamica').style.display = 'block';
    document.getElementById('content-dinamico').innerHTML = `
        <h2>UFF: Notícias - Grupo</h2>
        <p>Debates, fofocas, gatinhos e muita gente para conversar. Aqui a discusão é livre (seguindo as regras, é claro).</p>
        <img src="img/uffnoticiasgrupo.png" alt="Logo do grupo UFF: Notícias">
        <h3>Regras do Grupo</h3>
        <ul>
            <li>Respeite os outros membros do grupo.</li>
            <li>Evite postar conteúdo que não seja relacionado à UFF.</li>
            <li>Proibido figurinhas de cunho sexual ou discriminatório.</li>
            <li>Proibido conteúdo de violência explícita.</li>
            <li>Proibido conteúdo de drogas e armas.</li>
        </ul>
        <hr>
        <h2>UFF: Notícias - Canal</h2>
        <p>Canal onde só administradores podem falar. Melhor escolha caso você queira ficar mais atualizado só com as noticias.<p>
    `;
    console.log('Renderizou UFF Notícias');
}

function renderUFFBazareVendas() {
    document.getElementById('view-normal').style.display = 'none';
    document.getElementById('view-dinamica').style.display = 'block';
    document.getElementById('content-dinamico').innerHTML = `
        <h2>UFF: Bazar/Vendas</h2>
        <p>Bem-vindo ao grupo UFF: Bazar/Vendas. Aqui você pode comprar e vender itens entre a comunidade da Universidade Federal Fluminense.</p>
        <img src="img/uffbazarevendas1.png" alt="Logo do grupo UFF: Bazar/Vendas">
    `;
    console.log('Renderizou UFF: Bazar/Vendas');
}

function renderViewNormal() {
    document.getElementById('view-normal').style.display = 'block';
    document.getElementById('view-dinamica').style.display = 'none';
    document.getElementById('content-dinamico').innerHTML = '';
    console.log('Voltou para a visualização padrão');
}