// 1. Selecionando os elementos do HTML
const botaoClique = document.getElementById('botaoClique');
const fotoGato = document.getElementById('fotoGato');
const textoSucesso = document.getElementById('textoSucesso');
const somMiado = document.getElementById('somMiado');
const botaoCuriosidade = document.getElementById('botaoCuriosidade');
const textoCuriosidade = document.getElementById('textoCuriosidade');
const botaoContratar = document.getElementById('botaoContratar');
const fichaContrato = document.getElementById('fichaContrato');

// Banco de dados de curiosidades
const curiosidadesGatos = [
  "Os gatos passam cerca de 30% a 50% do dia se limpando e lambendo seus pelos.",
  "O cérebro de um gato é biologicamente mais similar ao de um humano do que ao de um cachorro.",
  "Gatos podem fazer cerca de 100 sons diferentes, enquanto cães fazem apenas cerca de 10.",
  "Um gato pode pular até seis vezes a sua própria altura!",
  "As garras das patas dianteiras de um gato são mais afiadas do que as das patas traseiras.",
  "O ronronar dos gatos tem uma frequência que pode ajudar na regeneração de tecidos e ossos.",
  "As impressões digitais dos gatos ficam no focinho! Cada nariz de gato é único no mundo.",
  "Os gatos têm 32 músculos em cada orelha, o que permite que eles as movam em várias direções."
];

// BANCO DE DADOS ADMINISTRATIVO FELINO (Migrado do Python para rodar online 24/7!)
const cargos = ["CEO (Chief Executive Meow)", "Diretor de Recursos Humanos (Gatos)", "Gerente de Logística de Sachês", "Analista de Soneca Sênior", "Estagiário de Derrubar Copos"];
const departamentos = ["Finanças e Petiscos", "Operações de Arranhar Sofás", "Qualidade do Ronronar", "Vendas de Olhares Fofos"];
const metas = ["Dormir 18 horas hoje", "Derrubar 3 canetas da mesa", "Pedir comida 5 minutos após já ter comido", "Arranhar o tapete novo"];

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
    somMiado.play().catch(e => console.log("Áudio aguardando interação ou publicação."));
  }
});

// 4. Função para exibir curiosidade aleatória
botaoCuriosidade.addEventListener('click', () => {
  const indiceAleatorio = Math.floor(Math.random() * curiosidadesGatos.length);
  textoCuriosidade.innerText = curiosidadesGatos[indiceAleatorio];
});

// 5. SIMULADOR DE RH FELINO (Processado direto no navegador do usuário)
botaoContratar.addEventListener('click', () => {
  // Sorteia de forma aleatória igual o Python fazia
  const cargoSorteado = cargos[Math.floor(Math.random() * cargos.length)];
  const deptoSorteado = departamentos[Math.floor(Math.random() * departamentos.length)];
  const metaSorteada = metas[Math.floor(Math.random() * metas.length)];
  
  // Gera um salário aleatório entre 50 e 500 sachês
  const salarioSaches = Math.floor(Math.random() * (500 - 50 + 1)) + 50;
  const plrGramas = (salarioSaches * 0.1).toFixed(2);

  // Preenche as informações na tela do usuário instantaneamente
  document.getElementById('contratoCargo').innerText = cargoSorteado;
  document.getElementById('contratoDepto').innerText = deptoSorteado;
  document.getElementById('contratoSalario').innerText = `${salarioSaches} sachês/mês`;
  document.getElementById('contratoPlr').innerText = `${plrGramas} gramas de catnip`;
  document.getElementById('contratoMeta').innerText = metaSorteada;
  
  // Exibe a ficha na tela
  fichaContrato.style.display = 'block';
});

// 6. EFEITO DAS PATINHAS SEGUINDO O MOUSE
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
