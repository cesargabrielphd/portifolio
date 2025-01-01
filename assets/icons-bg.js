let heroContainer = document.querySelector(".image-hero-container");
let figureElement = heroContainer.querySelector("figure");
// Lista de ícones com um número máximo de repetições permitido

const iconsList = [
  "/img/icons-bg/produtorio.png",
  "/img/icons-bg/integral.png",
  "/img/icons-bg/binomio-newthon",
].map((src) => ({ src, maxRepeats: 5 }));

let usageCount = {}; // Objeto para rastrear repetições de cada ícone
iconsList.forEach((icon) => {
  usageCount[icon.src] = 0; // Inicializa o contador de cada ícone
});

let numIcons = 30; // Número total de ícones a serem exibidos

for (let i = 0; i < numIcons; i++) {
  // Filtra os ícones que ainda não excederam o limite de repetições
  let availableIcons = iconsList.filter(icon => usageCount[icon.src] < icon.maxRepeats);

  if (availableIcons.length === 0) break; // Para o loop se não houver mais ícones disponíveis

  // Seleciona aleatoriamente um ícone da lista disponível
  let randomIcon = availableIcons[Math.floor(Math.random() * availableIcons.length)];
  usageCount[randomIcon.src]++; // Incrementa o contador do ícone selecionado

  // Cria o elemento div para o ícone
  let icon = document.createElement("div");
  icon.classList.add("icon");
  icon.style.backgroundImage = `url(${randomIcon.src})`;

  // Gera posições aleatórias dentro do contêiner
  let randomX = Math.random() * 100; // Posição horizontal (em %)
  let randomY = Math.random() * 100; // Posição vertical (em %)
  icon.style.left = `${randomX}%`;
  icon.style.top = `${randomY}%`;

  // Gera uma rotação aleatória entre -180 e 180 graus
  let randomRotation = Math.floor(Math.random() * 360 - 180);
  icon.style.transform = `rotate(${randomRotation}deg)`;

  // Insere o ícone antes do <figure>
  heroContainer.insertBefore(icon, figureElement);
}
