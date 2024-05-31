function renderUFFNoticias() {
    document.getElementById('view-normal').style.display = 'none';
    document.getElementById('view-dinamica').style.display = 'block';
    document.getElementById('content-dinamico').innerHTML = `
        <h2>UFF: Notícias - Grupo</h2>
        <p>Debates, fofocas, gatinhos e muita gente para conversar. Aqui a discussão é livre (seguindo as regras, é claro).</p>
        <img class="logo" src="img/uffnoticiasgrupo.png" alt="Logo do grupo UFF: Notícias">
        <div class="social-icons">
            <img class="direcao" src="../svg/whatsapp.svg" alt="Ícone do WhatsApp" onclick="window.open('https://chat.whatsapp.com/CUWqm6YLFhJ8M4a1BqrDJ2')">
            <img class="direcao" src="../svg/telegram.svg" alt="Ícone do Telegram" onclick="window.open('https://t.me/uffnoticias')">
        </div>
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
        <p>Canal onde só administradores podem falar. Melhor escolha caso você queira ficar mais atualizado só com as notícias.</p>
        <img class="logo" src="img/uffnoticiascanal.png" alt="Logo do canal UFF: Notícias">
        <div class="social-icons">
        <img class="direcao" src="../svg/whatsapp.svg" alt="Ícone do WhatsApp" onclick="window.open('https://whatsapp.com/channel/0029VaeUeMGAe5VmRIlMT71x')">
        </div>
        <h4>Deseja se tornar um administrador e mandar notícias? Veja se você se encaixa.</h4>
        <ol>
            <li>Objetivo do Canal
                <ul>
                    <li>O canal tem como principal objetivo a divulgação de informações relevantes, acontecimentos e eventos relacionados às atividades acadêmicas, científicas, culturais e administrativas da universidade. Este espaço é dedicado a fomentar a cooperação, a transparência e a troca de informações entre todas as entidades e membros da comunidade universitária.</li>
                </ul>
            </li>
            <li>Participação e Colaboração
                <ul>
                    <li>Inclusão e Acesso: O canal está aberto para a participação de todas as entidades, departamentos, centros acadêmicos, grupos de pesquisa e outros coletivos da UFF.</li>
                    <li>Submissão de Notícias: Qualquer entidade pode submeter notícias, eventos, pesquisas e outras informações pertinentes. As submissões devem ser feitas através do e-mail: uffnoticias.contato@gmail.com</li>
                    <li>Revisão e Publicação: As notícias enviadas serão revisadas pela equipe de administradores do canal para garantir clareza, relevância e adequação ao público-alvo. A revisão não implicará em censura de conteúdo, mas sim em garantir que as informações sejam apresentadas de forma clara e objetiva.</li>
                </ul>
            </li>
            <li>Respeito e Diversidade de Opiniões
                <ul>
                    <li>Liberdade de Expressão: Todos os membros da comunidade universitária têm o direito de expressar suas opiniões e compartilhar suas perspectivas. A diversidade de opiniões é um valor fundamental que deve ser respeitado e incentivado.</li>
                    <li>Respeito Mútuo: Discussões e debates são bem-vindos, desde que ocorram de forma respeitosa. Ofensas pessoais, ataques ad hominem e qualquer forma de desrespeito não serão tolerados.</li>
                    <li>Proibição de Censura: Não será permitida a censura ou o boicote a notícias ou opiniões, desde que estas estejam em conformidade com os princípios de respeito e colaboração. A pluralidade de ideias deve ser vista como uma riqueza e não como um obstáculo.</li>
                </ul>
            </li>
            <li>Normas de Conduta
                <ul>
                    <li>Civilidade e Urbanidade: Todos os participantes devem manter um comportamento civilizado e urbano nas interações no canal. A comunicação deve ser clara, respeitosa e construtiva.</li>
                    <li>Fontes e Credibilidade: As informações divulgadas devem ser baseadas em fontes confiáveis e devidamente referenciadas. A disseminação de notícias falsas ou informações não verificadas é estritamente proibida e passível de banimento.</li>
                    <li>Feedback Construtivo: Críticas e sugestões são importantes para o aprimoramento contínuo do canal. Todos os feedbacks devem ser construtivos e direcionados ao aprimoramento das atividades e da comunicação. Mande para o e-mail: uffnoticias.contato@gmail.com</li>
                </ul>
            </li>
        </ol>
        <div class="social-icons">
        <img class="direcao" src="../svg/gmail.svg" alt="Ícone do Gmail" onclick="window.open('mailto:uffnoticias.contato@gmail.com?subject=Gostaria de fazer parte ou tenho uma notícia/sugestão/reclamação')">
        </div>
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