function carregarFavicons() {
  fetch("favicons.html")
    .then((response) => response.text())
    .then((data) => {
      console.log("Favicons carregados com sucesso:", data);
      document.head.insertAdjacentHTML("beforeend", data);
    })
    .catch((error) => console.error("Erro ao carregar favicons:", error));
}
window.addEventListener("DOMContentLoaded", carregarFavicons);

// Renderização de conteúdo dinâmico
console.log("Esperando para renderizar conteúdo dinâmico...");

function renderUFFNoticias() {
  document.getElementById("aviso-legal").style.display = "none";
  personalDocument();

  document.getElementById("content-dinamico").innerHTML = `
        <h2>UFF: Notícias - Grupo</h2>
        <p>Debates, fofocas, gatinhos e muita gente para conversar. Aqui a discussão é livre (seguindo as regras, é claro).</p>
        <img class="logo" src="img/uffnoticiasgrupo.png" alt="Logo do grupo UFF: Notícias">
        <div class="social-icons rounded-lg">
            <a href="https://chat.whatsapp.com/EXg3JWt52DnIkmIZMcwEbs" target="_blank" class="inline-flex items-center justify-center gap-2 px-4 bg-zap text-white rounded-lg hover:bg-green-700 transition-all">
                <img class="w-4 h-4" src="svg/whatsapp-nobg.svg" alt="Ícone do WhatsApp">
                <span class="font-medium bg-zap">Entrar no Grupo</span>
                <img class="w-4 h-4 invert" src="img/expand-arrows.png" alt="Ícone do WhatsApp">
            </a>
        </div>
        <hr style="margin-block: 8px"/>
        <h3 class=" mt-8">Regras do Grupo</h3>
        <ul>
            <li>Respeite os outros membros do grupo.</li>
            <li>Evite postar conteúdo que não seja relacionado à UFF.</li>
            <li>Proibido figurinhas de cunho sexual ou discriminatório.</li>
            <li>Proibido conteúdo de violência explícita.</li>
        </ul>
        <hr>
        <h2>UFF: Notícias - Canal</h2>
        <p>Canal onde só administradores podem falar. Melhor escolha caso você queira ficar mais atualizado só com as notícias.</p>
        <img class="logo" src="img/uffnoticiascanal.png" alt="Logo do canal UFF: Notícias">
        <div class="social-icons rounded-lg">
            <a href="https://whatsapp.com/channel/0029VaeUeMGAe5VmRIlMT71x" target="_blank" class="inline-flex items-center justify-center gap-2 px-4 bg-zap text-white rounded-lg hover:bg-green-700 transition-all">
                <img class="w-4 h-4" src="svg/whatsapp-nobg.svg" alt="Ícone do WhatsApp">
                <span class="font-medium bg-zap">Entrar no Canal</span>
                <img class="w-4 h-4 invert" src="img/expand-arrows.png" alt="Ícone do WhatsApp">
            </a>
        </div>
    `;
  console.log("Renderizou UFF Notícias");
}

function renderUFFBazareVendas() {
  document.getElementById("aviso-legal").style.display = "none";

  personalDocument();

  document.getElementById("content-dinamico").innerHTML = `
        <h2>UFF: Bazar/Vendas</h2>
        <p>Bem-vindo ao grupo UFF: Bazar/Vendas. Aqui você pode comprar e vender itens entre a comunidade da Universidade Federal Fluminense. Conforme os grupos vão ficando lotados, novos vão surgindo.</p>
        <div class="bazar">
            <div class="grupo">
                <img src="img/BazareVendas1.png" alt="Logo do grupo UFF: Bazar/Vendas 1.0">
                <a href="https://chat.whatsapp.com/GmifC2jS4naLPkmyzTZRfM" target="_blank" class="inline-flex items-center justify-center gap-2 px-3 py-1 bg-zap text-white rounded-lg hover:bg-green-700 transition-all">
                    <img class="w-5 h-5" src="svg/whatsapp-nobg.svg" alt="Ícone do WhatsApp">
                    <span class="font-medium text-sm">Entrar</span>
                    <img class="w-5 h-5 invert" src="img/expand-arrows.png" alt="Acessar link">
                </a>
            </div>
            <div class="grupo">
                <img src="img/BazareVendas2.png" alt="Logo do grupo UFF: Bazar/Vendas 2.0">
                <a href="https://chat.whatsapp.com/EIroeF8YB306s2Y8OopaVH" target="_blank" class="inline-flex items-center justify-center gap-2 px-3 py-1 bg-zap text-white rounded-lg hover:bg-green-700 transition-all">
                    <img class="w-5 h-5" src="svg/whatsapp-nobg.svg" alt="Ícone do WhatsApp">
                    <span class="font-medium text-sm">Entrar</span>
                    <img class="w-5 h-5 invert" src="img/expand-arrows.png" alt="Acessar link">
                </a>
            </div>
            <div class="grupo">
                <img src="img/BazareVendas3.png" alt="Logo do grupo UFF: Bazar/Vendas 3.0">
                <a href="https://chat.whatsapp.com/EDLWtpJ8zaGGVHRvwrbll2" target="_blank" class="inline-flex items-center justify-center gap-2 px-3 py-1 bg-zap text-white rounded-lg hover:bg-green-700 transition-all">
                    <img class="w-5 h-5" src="svg/whatsapp-nobg.svg" alt="Ícone do WhatsApp">
                    <span class="font-medium text-sm">Entrar</span>
                    <img class="w-5 h-5 invert" src="img/expand-arrows.png" alt="Acessar link">
                </a>
            </div>
            <div class="grupo">
                <img src="img/BazareVendas4.png" alt="Logo do grupo UFF: Bazar/Vendas 4.0">
                <a href="https://chat.whatsapp.com/F9LeB58tXup1yywsJzKTeV" target="_blank" class="inline-flex items-center justify-center gap-2 px-3 py-1 bg-zap text-white rounded-lg hover:bg-green-700 transition-all">
                    <img class="w-5 h-5" src="svg/whatsapp-nobg.svg" alt="Ícone do WhatsApp">
                    <span class="font-medium text-sm">Entrar</span>
                    <img class="w-5 h-5 invert" src="img/expand-arrows.png" alt="Acessar link">
                    </a>
                    </div>
                    <div class="grupo">
                    <img src="img/BazareVendasUnificado.png" alt="Logo do grupo UFF: Bazar/Vendas Unificado">
                    <a href="https://t.me/+49xcZPKzKoIwMDgx" target="_blank" class="inline-flex items-center justify-center gap-2 px-3 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all">
                    <img class="w-5 h-5 invert" src="svg/telegram.svg" alt="Ícone do Telegram">
                    <span class="font-medium text-sm">Entrar</span>
                    <img class="w-5 h-5 invert" src="img/expand-arrows.png" alt="Acessar link">
                </a>
            </div>
        </div>
        <h3>Regras do Grupo</h3>
        <ul>
            <li>Respeite os outros membros do grupo.</li>
            <li>Proibido figurinhas de cunho sexual ou discriminatório.</li>
            <li>Proibido conteúdo de violência explícita.</li>
            <li>Permitido apenas anúncios de venda pertencente a discentes da UFF, independente do curso.</li>
            <li>Os administradores não se responsabilizam por transações entre comprador e anunciante.</li>
            <li>Sempre apresentar o preço do produto no momento do anúncio.</li>
            <li>Opiniões sobre valores devem ser tratados diretamente com o anunciante.</li>
        </ul>
    `;
  console.log("Renderizou UFF: Bazar/Vendas");
}

function renderPatadeApoio() {
  document.getElementById("aviso-legal").style.display = "none";

  personalDocument();

  document.getElementById("content-dinamico").innerHTML = `
        <h2>Pata de Apoio</h2>
        <br>
        <p>😺 Não somos um abrigo!<p>
        <p>🐾 Projeto destinado ao resgate, cuidados, alimentação e adoções responsáveis em Niterói e RJ.<p>
        <p>🐾 Composto por voluntários</p>
        <img class="logo" src="img/patadeapoio.png" alt="Logo do grupo Pata de Apoio">
        <div class="social-icons flex justify-center gap-4">
            <a href="https://www.instagram.com/patadeapoio/" target="_blank" class="inline-flex items-center bg-insta justify-center gap-2 px-4 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white rounded-lg hover:from-purple-600 hover:via-pink-600 hover:to-orange-600 transition-all">
                <img class="w-4 h-4" src="svg/instagram.svg" alt="Ícone do Instagram">
                <span class="font-medium">Instagram</span>
                <img class="w-4 h-4 invert" src="img/expand-arrows.png" alt="Ícone do WhatsApp">
            </a>
            <a href="https://chat.whatsapp.com/GmSvnZLLlX8AyyjzUPjXDG" target="_blank" class="inline-flex items-center justify-center gap-2 px-4 bg-zap text-white rounded-lg hover:bg-green-700 transition-all">
                <img class="w-4 h-4" src="svg/whatsapp-nobg.svg" alt="Ícone do WhatsApp">
                <span class="font-medium">WhatsApp</span>
                <img class="w-4 h-4 invert" src="img/expand-arrows.png" alt="Ícone do WhatsApp">
            </a>
        </div>
        <h3>Regras do Grupo</h3>
        <ul>
            <li>Respeite os outros membros do grupo.</li>
            <li>Proibido figurinhas de cunho sexual ou discriminatório.</li>
            <li>Proibido conteúdo de violência explícita.</li>
            <li>Proibido flodar mensagens.</li>
            <li>Antes de enviar qualquer post de adoção conferir se não se trata de um golpe.</li>
        </ul>
`;
  console.log("Renderizou Pata de Apoio");
}

function renderCentral() {
  personalDocument();

  document.getElementById("content-dinamico").innerHTML = `
        <h2>Central Avisy</h2>
        <br>
        <p>Aqui é onde toda a ação acontece! Juntamos todos os grupos oficiais da Avisy em um lugar só pra você não perder nadinha do que rola na nossa comunidade.<p>
        <img class="logo" src="img/central.png" alt="Logo do grupo Central Avisy">
        <div class="social-icons">
            <a href="https://chat.whatsapp.com/BikQlKaqOvS9DSEd5ZZQZ3" target="_blank" class="inline-flex items-center justify-center gap-2 px-4 bg-zap text-white rounded-lg hover:bg-green-700 transition-all">
                <img class="w-4 h-4" src="svg/whatsapp-nobg.svg" alt="Ícone do WhatsApp">
                <span class="font-medium">Entrar no Grupo</span>
                <img class="w-4 h-4 invert" src="img/expand-arrows.png" alt="Ícone do WhatsApp">
            </a>
        </div>
        <h3>Regras do Grupo</h3>
        <ul>
            <li>Respeite os outros membros do grupo.</li>
            <li>Proibido figurinhas de cunho sexual ou discriminatório.</li>
            <li>Proibido conteúdo de violência explícita.</li>
            <li>Proibido flodar mensagens.</li>
            <li>Antes de enviar qualquer post de adoção conferir se não se trata de um golpe.</li>
        </ul>
`;
  console.log("Renderizou Central Avisy");
}

function renderViewNormal() {
  document.getElementById("view-normal").style.display = "block";
  document.getElementById("view-dinamica").style.display = "none";
  document.getElementById("content-dinamico").innerHTML = "";
  console.log("Voltou para a visualização padrão");
}

// Funções de apoio

function personalDocument() {
  document.getElementById("view-normal").style.display = "none";
  document.getElementById("view-dinamica").style.display = "block";
}

function atualizarHora() {
  document.getElementById(
    "hora-atual"
  ).innerHTML = `Hora Atual: ${horaAtual()}`;
}

function horaAtual() {
  const agora = new Date();
  const hora = agora.getHours();
  const minuto = agora.getMinutes().toString().padStart(2, "0");
  return `${hora}:${minuto}`;
}
