// 1. Selecionando os elementos do HTML
const botaoClique = document.getElementById('botaoClique');
const fotoGato = document.getElementById('fotoGato');
const textoSucesso = document.getElementById('textoSucesso');
const somMiado = document.getElementById('somMiado');
const botaoCuriosidade = document.getElementById('botaoCuriosidade');
const textoCuriosidade = document.getElementById('textoCuriosidade');

// Lista de fatos curiosos sobre gatos
const curiosidadesGatos = [
  "Os gatos passam cerca de 30% a 50% do dia se limpando e lambendo seus pelos.",
  "O cérebro de um gato é biologicamente mais similar ao de um humano do que ao de um cachorro.",
  "Gatos podem fazer cerca de 100 sons diferentes, enquanto cães fazem apenas cerca de 10.",
  "Um gato pode pular até seis vezes a sua própria altura!",
  "As garras das patas dianteiras de um gato são mais afiadas do que as das patas traseiras.",
  "O ronronar dos gatos tem uma frequência que pode ajudar na regeneração de tecidos e ossos.",
  "As impressões digitais dos gatos ficam no focinho! Cada nariz de gato é único no mundo.",
  "Os gatos têm 32 músculos in cada orelha, o que permite que eles as movam em várias direções."
];

// Variável para controlar o tempo entre a criação de uma patinha e outra
let ultimoElementoTempo = 0;

// 2. Função para mostrar o gatinho e o texto de sucesso ao clicar no botão
botaoClique.addEventListener('click', () => {
  fotoGato.style.display = 'inline-block';
  textoSucesso.style.display = 'block';
});

// 3. Função para o som do miado (ativado ao clicar na foto do gatinho)
fotoGato.addEventListener('click', () => {
  if (somMiado) {
    somMiado.currentTime = 0; 
    somMiado.play().catch(e => console.log("Gatinho_miando.mp3"));
  }
});

// 4. FUNÇÃO PARA EXIBIR CURIOSIDADE ALEATÓRIA
botaoCuriosidade.addEventListener('click', () => {
  // Sorteia um índice da nossa lista de curiosidades
  const indiceAleatorio = Math.floor(Math.random() * curiosidadesGatos.length);
  // Exibe o texto sorteado na tela
  textoCuriosidade.innerText = curiosidadesGatos[indiceAleatorio];
});

// 5. EFEITO DAS PATINHAS SEGUINDO O MOUSE
document.addEventListener('mousemove', (detalhesMouse) => {
  const tempoAtual = Date.now();
  
  if (tempoAtual - ultimoElementoTempo > 60) {
    const patinha = document.createElement('div');
    patinha.className = 'patinha-cursor';
    
    patinha.style.left = `${detalhesMouse.pageX}px`;
    patinha.style.top = `${detalhesMouse.pageY}px`;
    
    document.body.appendChild(patinha);
    
    setTimeout(() => {
      patinha.remove();
    }, 800);
    
    ultimoElementoTempo = tempoAtual;
  }
});

// 6. INTEGRAÇÃO COM A API PYTHON (ADMINISTRAÇÃO FELINA)
const botaoContratar = document.getElementById('botaoContratar');
const fichaContrato = document.getElementById('fichaContrato');

botaoContratar.addEventListener('click', () => {
  // O JavaScript faz uma requisição para o script Python rodando na sua máquina
fetch('http://localhost:5000/api/contratar')

    .then(response => response.json())
    .then(dados => {
      // Preenche os dados administrativos calculados pelo Python na tela
      document.getElementById('contratoCargo').innerText = dados.cargo;
      document.getElementById('contratoDepto').innerText = dados.departamento;
      document.getElementById('contratoSalario').innerText = dados.salario;
      document.getElementById('contratoPlr').innerText = dados.plr;
      document.getElementById('contratoMeta').innerText = dados.meta_do_mes;
      
      // Mostra a ficha de contrato
      fichaContrato.style.display = 'block';
    })
    .catch(erro => {
      console.error("Erro ao conectar com o Python:", erro);
      alert("Certifique-se de que o seu script Python (app.py) está rodando no terminal!");
    });
});
