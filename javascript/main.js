const avisoLegal = document.getElementById("aviso-legal");
const viewNormal = document.getElementById("view-normal");
const viewDinamica = document.getElementById("view-dinamica");
const contentDinamico = document.getElementById("content-dinamico");

function personalDocument() {
  viewNormal.style.display = "none";
  viewDinamica.style.display = "block";
  avisoLegal.style.display = "none";
  window.scrollTo(0, 0);
}

function renderViewNormal() {
  viewNormal.style.display = "grid";
  viewDinamica.style.display = "none";
  avisoLegal.style.display = "flex";
  contentDinamico.innerHTML = "";
}

function renderUFFNoticias() {
  personalDocument();
  contentDinamico.innerHTML = `
  <div class="text-center">
    <img class="logo mx-auto rounded-lg shadow-lg max-w-xs" src="img/uffnoticiasgrupo.png" alt="Logo do grupo UFF: Notícias">
      <h2 class="text-3xl font-bold mt-4">UFF: Notícias - Grupo</h2>
        <p>Debates, fofocas e muita gente para conversar. Aqui a discussão é livre (seguindo as regras, é claro).</p>
        <a href="https://chat.whatsapp.com/EXg3JWt52DnIkmIZMcwEbs" target="_blank" class="btn btn-success text-white mt-2">
        <img class="w-6 h-6" src="https://logopng.com.br/logos/whatsapp-33.svg" alt="Ícone do WhatsApp">
          Entrar no Grupo
        </a>
  </div>

  <div class="divider my-12"></div>
  
  <div class="text-center">
    <img class="logo mx-auto rounded-lg shadow-lg max-w-xs" src="img/uffnoticiascanal.png" alt="Logo do canal UFF: Notícias">
    <h2 class="text-3xl font-bold mt-4">UFF: Notícias - Canal</h2>
      <p>Canal onde só administradores podem falar. Melhor escolha caso você queira ficar mais atualizado só com as notícias.</p>
      <a href="https://whatsapp.com/channel/0029VaeUeMGAeVaeUeMGAe5VmRIlMT71x" target="_blank" class="btn btn-success text-white mt-2">
        <img class="w-6 h-6" src="https://logopng.com.br/logos/whatsapp-33.svg" alt="Ícone do WhatsApp">
          Entrar no Canal
      </a>
  </div>
  
  <div class="divider my-12"></div>
  
  <div class="card bg-base-200">
    <div class="card-body">
      <h3 class="card-title">Regras do Grupo</h3>
        <ul class="list-disc pl-5">
          <li>Clima leve, mas com respeito 🤝 — brincar pode, ofender não. Se alguém se sentir mal, pare na hora.</li>
          <li>Assunto livre 🎉 — pode falar de festas, memes e perrengues, mas evite spam.</li>
          <li>Divulgação só se for de interesse do grupo 📢 — eventos da UFF, festas, oportunidades acadêmicas, rifas e conteúdo político (relacionado a UFF). Quer vender? Temos os grupos de Bazar e Vendas!</li>
          <li>Evite floodar 💬</li>
          <li>Papo pessoal vai no privado 📲</li>
          <li>Admins podem intervir ⚖️ — em caso de desrespeito, haverá advertência e, se insistir, remoção.</li>
        </ul>
    </div>
  </div>
  `;
}

function renderUFFBazareVendas() {
  personalDocument();
  contentDinamico.innerHTML = `
  <div class="text-center">
    <h2 class="text-3xl font-bold">UFF: Bazar/Vendas</h2>
      <p>Bem-vindo ao grupo UFF: Bazar/Vendas. Aqui você pode comprar e vender itens. Conforme os grupos vão ficando lotados, novos vão surgindo.</p>
  </div>
  
  <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-8 text-center">
    <div class="card card-compact bg-base-200">
      <figure>
        <img src="img/BazareVendas1.png" alt="Bazar 1.0" />
      </figure>
    <div class="card-body">
      <a href="https://chat.whatsapp.com/GmifC2jS4naLPkmyzTZRfM" target="_blank" class="btn btn-sm btn-success text-white">
      Entrar
      </a>
    </div>
  </div>
  
  <div class="card card-compact bg-base-200">
    <figure>
      <img src="img/BazareVendas2.png" alt="Bazar 2.0" />
    </figure>
    <div class="card-body">
      <a href="https://chat.whatsapp.com/EIroeF8YB306s2Y8OopaVH" target="_blank" class="btn btn-sm btn-success text-white">
        Entrar
      </a>
    </div>
  </div>
  
  <div class="card card-compact bg-base-200">
    <figure>
      <img src="img/BazareVendas3.png" alt="Bazar 3.0" />
    </figure>
    <div class="card-body">
      <a href="https://chat.whatsapp.com/EDLWtpJ8zaGGVHRvwrbll2" target="_blank" class="btn btn-sm btn-success text-white">
        Entrar
      </a>
    </div>
  </div>
  
  <div class="card card-compact bg-base-200">
    <figure>
      <img src="img/BazareVendas4.png" alt="Bazar 4.0" />
    </figure>
    <div class="card-body">
      <a href="https://chat.whatsapp.com/F9LeB58tXup1yywsJzKTeV" target="_blank" class="btn btn-sm btn-success text-white">
        Entrar
      </a>
    </div>
  </div>
  
  <div class="card card-compact bg-base-200">
    <figure>
      <img src="img/BazareVendasUnificado.png" alt="Bazar Unificado" />
    </figure>
    <div class="card-body">
      <a href="https://t.me/+49xcZPKzKoIwMDgx" target="_blank" class="btn btn-sm btn-info text-white">
        Entrar
      </a>
    </div>
  </div>
</div>

<div class="card bg-base-200">
  <div class="card-body">
    <h3 class="card-title">Regras dos grupos</h3>
      <ul class="list-disc pl-5">
        <li>🤝 Respeito acima de tudo — não serão toleradas ofensas pessoais, preconceito, machismo, racismo, LGBTfobia ou qualquer forma de discriminação.</li>
        <li>🚫 Proibido compartilhar figurinhas, imagens, vídeos ou mensagens de cunho sexual, discriminatório ou com violência explícita.</li>
        <li>⚖️ É expressamente proibida a venda de itens ilícitos, pirataria, drogas, bebidas alcoólicas para menores, animais vivos ou qualquer produto que infrinja a lei.</li>        
        <li>💬 Discussões sobre valores ou negociações adicionais devem ser tratadas diretamente no privado com o anunciante.</li>
        <li>🛒 Os administradores não se responsabilizam por nenhuma transação. A negociação é de inteira responsabilidade das partes envolvidas.</li>
      </ul>
  </div>
</div>
`;
}

function renderUFFRepublicas() {
  personalDocument();
  contentDinamico.innerHTML = `
  <div class="text-center">
    <img class="logo mx-auto rounded-lg shadow-lg max-w-xs" src="img/Repúblicas.jpg" alt="Logo do grupo UFF Repúblicas">
    <h2 class="text-3xl font-bold mt-4">UFF: Repúblicas</h2>
      <p>Grupo e planilha para ajudar a encontrar repúblicas, vagas e colegas de quarto na comunidade da UFF.</p>
        <div class="flex flex-wrap justify-center gap-4 mt-4">
          <a href="https://chat.whatsapp.com/FUlmRiUx53gD9UoNA9tjiA" target="_blank" class="btn btn-success text-white">
            Entrar no Grupo
          </a>
          
          <a href="https://docs.google.com/spreadsheets/d/1klKCA3yUyyc0wq_IeCPf02DFtXqEykV9uHdMGlHtU5o/edit?usp=sharing" target="_blank" class="btn btn-info text-white">
            Acessar relatos de repúblicas
          </a>
          
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSfpW2pKFkR295MmgHl97Piivd1ZbnGeK4mZsR2fEAHUWFXpcw/viewform" target="_blank" class="btn btn-warning text-white">
            Cadastrar relato
          </a>
        </div>
  </div>
  
  <div class="divider my-12"></div>
  
  <div class="card bg-base-200">
    <div class="card-body">
      <h3 class="card-title">Regras do Grupo</h3>
        <ul class="list-disc pl-5">
          <li>Foco em moradia para estudantes da UFF.</li>
          <li>Proibido spam ou conteúdo não relacionado.</li>
          <li>Respeito mútuo entre todos os membros.</li>
          <li>Os administradores não se responsabilizam por negociações.</li>
        </ul>
    </div>
  </div>
`;
}

function renderPatadeApoio() {
  personalDocument();
  contentDinamico.innerHTML = `
  <div class="text-center">
    <img class="logo mx-auto rounded-lg shadow-lg max-w-xs" src="img/patadeapoio.png" alt="Logo do grupo Pata de Apoio">
      <h2 class="text-3xl font-bold mt-4">Pata de Apoio</h2>
        <p class="font-bold text-warning">😺 Não somos um abrigo!</p>
        <p>🐾 Projeto destinado ao resgate, cuidados, alimentação e adoções responsáveis em Niterói e RJ.</p>
        <p>🐾 Composto por voluntários.</p>
        
        <div class="flex justify-center gap-4 mt-4">
          <a href="https://www.instagram.com/patadeapoio/" target="_blank" class="btn text-white" style="background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%);">
            Instagram
          </a>
          
          <a href="https://chat.whatsapp.com/GmSvnZLLlX8AyyjzUPjXDG" target="_blank" class="btn btn-success text-white">
            WhatsApp
          </a>
          
        </div>
  </div>
  
  <div class="divider my-12"></div>
  
  <div class="card bg-base-200">
    <div class="card-body">
      <h3 class="card-title">Regras do Grupo</h3>
        <ul class="list-disc pl-5">
          <li>Respeite os outros membros do grupo.</li>
          <li>Proibido figurinhas de cunho sexual ou discriminatório.</li>
          <li>Proibido conteúdo de violência explícita.</li>
          <li>Proibido flodar mensagens.</li>
          <li>Antes de enviar qualquer post de adoção, confira se não se trata de um golpe.</li>
        </ul>
    </div>
  </div>
`;
}

function renderSobre() {
  personalDocument();
  contentDinamico.innerHTML = `
  
  <div class="text-center">
    <h2 class="text-3xl font-bold">Sobre o Projeto</h2>
    <p>Este é um agregador de links para grupos e canais da comunidade da Universidade Federal Fluminense, criado para facilitar o acesso e a integração dos estudantes.</p>
    
    <a href="https://github.com/Navelogic/uff-popular" target="_blank" class="btn btn-neutral mt-4">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg>
        Repositório no GitHub
    </a>
  </div>
  
  <div class="divider my-12"></div>
  
  <div>
    <h2 class="text-3xl font-bold text-center">Guia: Adicionando um Novo Grupo</h2>
      <p class="text-center mb-6">Siga os passos abaixo para adicionar um novo card de grupo na página inicial e criar sua respectiva página de detalhes.</p>
        <div class="mockup-code mb-4">
          <pre data-prefix="1"><code>// PASSO 1: Adicionar o Card na tela inicial</code></pre>
          <pre data-prefix="2"><code>// Encontre a div com id="view-normal" e adicione este bloco HTML.</code></pre>
          <pre data-prefix="3"><code>// Altere a imagem, título, descrição e a função onclick().</code></pre>
          <pre data-prefix="4" class="bg-success text-success-content"><code>&lt;!-- Card Novo Grupo --&gt;</code></pre>
          <pre data-prefix="5"><code>&lt;div class="card bg-base-100 shadow-xl image-full"&gt;</code></pre>
          <pre data-prefix="6"><code>    &lt;figure&gt;&lt;img src="..." alt="..." /&gt;&lt;/figure&gt;</code></pre>
          <pre data-prefix="7"><code>    &lt;div class="card-body"&gt;</code></pre>
          <pre data-prefix="8"><code>        &lt;h2 class="card-title"&gt;Nome do Novo Grupo&lt;/h2&gt;</code></pre>
          <pre data-prefix="9"><code>        &lt;p&gt;Descrição do novo grupo.&lt;/p&gt;</code></pre>
          <pre data-prefix="10"><code>        &lt;div class="card-actions justify-end"&gt;</code></pre>
          <pre data-prefix="11" class="bg-warning text-warning-content"><code>            &lt;button class="btn btn-primary" onclick="renderNovoGrupo()"&gt;Ver mais&lt;/button&gt;</code></pre>
          <pre data-prefix="12"><code>        &lt;/div&gt;</code></pre>
          <pre data-prefix="13"><code>    &lt;/div&gt;</code></pre>
          <pre data-prefix="14"><code>&lt;/div&gt;</code></pre>
        </div>
        
        <div class="mockup-code">
          <pre data-prefix="1"><code>// PASSO 2: Criar a função de renderização no JavaScript</code></pre>
          <pre data-prefix="2"><code>// Dentro da tag &lt;script&gt;, adicione uma nova função.</code></pre>
          <pre data-prefix="3"><code>// Copie a estrutura de uma função existente (ex: renderPatadeApoio).</code></pre>
          <pre data-prefix="4" class="bg-warning text-warning-content"><code>function renderNovoGrupo() {</code></pre>
          <pre data-prefix="5"><code>    personalDocument();</code></pre>
          <pre data-prefix="6"><code>    contentDinamico.innerHTML = \`</code></pre>
          <pre data-prefix="7" class="bg-success text-success-content"><code>        &lt;!-- Coloque aqui todo o HTML da página de detalhes do novo grupo --&gt;</code></pre>
          <pre data-prefix="8"><code>        &lt;div class="text-center"&gt;</code></pre>
          <pre data-prefix="9"><code>            &lt;h2 class="text-3xl font-bold"&gt;Página do Novo Grupo&lt;/h2&gt;</code></pre>
          <pre data-prefix="10"><code>            &lt;!-- ... resto do conteúdo, links, regras, etc ... --&gt;</code></pre>
          <pre data-prefix="11"><code>        &lt;/div&gt;</code></pre>
          <pre data-prefix="12"><code>    \`;</code></pre>
          <pre data-prefix="13"><code>}</code></pre>
        </div>
    </div>
  `;
}