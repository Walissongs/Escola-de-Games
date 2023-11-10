//Swiper slider
var swiper = new Swiper(".bg-slider-thumbs", {
    spaceBetween: 0,
    slidesPerView: 0,
});
var swiper2 = new Swiper(".bg-slider", {
    spaceBetween: 0,
    thumbs: {
        swiper: swiper,
    },
});

//Navigation bar effects on scroll

//Responsive navigation menu toggle

document.addEventListener('scroll', checkBoxes);

function checkBoxes() {
  const triggerBottom = window.innerHeight / 5 * 4;
  const boxes = document.querySelectorAll('.box');

  boxes.forEach(box => {
    const boxTop = box.getBoundingClientRect().top;
    const boxBottom = box.getBoundingClientRect().bottom;

    if (boxTop < triggerBottom && boxBottom > 0) {
      box.classList.add('show');
    } else {
      box.classList.remove('show');
    }
  });
}


function goFullscreen(id) {
  var element = document.getElementById(id);
  
  if (element.requestFullscreen) {
    element.requestFullscreen();
  } else if (element.mozRequestFullScreen) {  // Firefox
    element.mozRequestFullScreen();
  } else if (element.webkitRequestFullscreen) {  // Chrome, Safari and Opera
    element.webkitRequestFullscreen();
  } else if (element.msRequestFullscreen) {  // IE/Edge
    element.msRequestFullscreen();
  }
}




function removeBlock(buttonElement) {
  const boxElement = buttonElement.parentElement.parentElement;
  
  // Remove a classe 'show', fazendo a caixa voltar para translateX(400%)
  boxElement.classList.remove('show');
}







// Função para criar o efeito de digitação
const typeEffect = (selector, wordList) => {
  const dynamicText = document.querySelector(selector);
  if (!dynamicText) return; // Para garantir que o elemento exista

  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  const type = () => {
      const currentWord = wordList[wordIndex];
      const currentChar = currentWord.substring(0, charIndex);
      dynamicText.textContent = currentChar;
      dynamicText.classList.add("stop-blinking");

      if (!isDeleting && charIndex < currentWord.length) {
          charIndex++;
          setTimeout(type, 50);
      } else if (isDeleting && charIndex > 0) {
          charIndex--;
          setTimeout(type, 100);
      } else {
          isDeleting = !isDeleting;
          dynamicText.classList.remove("stop-blinking");
          wordIndex = !isDeleting ? (wordIndex + 1) % wordList.length : wordIndex;
          setTimeout(type, 100);
      }
  }

  type();
}


// Inicialização para a segunda página:
typeEffect("p.texto1", ["Na Escola de Games, unimos criatividade e programação para capacitar jovens da região sudoeste goiana. Nossa missão é clara: promover a equidade tecnológica através do pensamento computacional e, ao mesmo tempo, incentivar a inclusão tecnológica e social. Queremos preparar jovens para o futuro, despertando seu interesse pela Ciência da Computação e desenvolvendo habilidades que são essenciais para essa área."]);

typeEffect("p.texto2", ["Nossos valores são alicerçados em nossa paixão por transformar e desenvolver a sociedade. Buscamos:Transformação e Desenvolvimento da Sociedade: A inclusão tecnológica é nossa ferramenta para a transformação social. Estamos empenhados em fazer a diferença. Formação e Integração Comunitária: Valorizamos a empatia e a conexão com nossa comunidade. Nosso objetivo é criar um ambiente inclusivo e solidário. Comprometimento e Responsabilidade: Incentivamos o protagonismo e a excelência em nossos alunos. Queremos que eles sejam responsáveis por seu próprio crescimento e aprendizado."]);


typeEffect("p.texto3", ["Nossa visão é sermos reconhecidos como um projeto de referência em Ciência da Computação. Não apenas ensinamos programação, mas capacitamos jovens a se tornarem líderes na indústria de tecnologia. Estamos determinados a deixar um impacto duradouro na região sudoeste goiana e além, preparando os jovens para um futuro brilhante na era digital."]);

typeEffect("p.texto4", ["Nesta seção, celebramos as incríveis criações dos nossos alunos. Eles transformaram suas habilidades de programação em jogos e projetos únicos, demonstrando sua criatividade e paixão. Cada projeto reflete seu talento e dedicação, elevando constantemente o padrão de excelência. Convidamos você a explorar essas realizações inspiradoras e a apreciar a diversidade de talentos da nossa comunidade de aprendizes. Por meio desses projetos, nossos alunos estão moldando o futuro da Ciência da Computação."]);


function openPopup(buttonElement) {
  // Pega o elemento pai do botão (que é 'button-container') e depois pega o pai desse elemento (que é a div 'box')
  const boxElement = buttonElement.parentElement.parentElement;

  // Altera a classe e o ID do elemento para transformá-lo em um popup
  boxElement.classList.remove('box');
  boxElement.classList.add('popup');
  boxElement.setAttribute('id', 'gamePopup');

  // Exibe o popup
  boxElement.style.display = 'flex';
}

function closePopup() {
  // Pega o elemento com o ID gamePopup
  const popupElement = document.getElementById('gamePopup');

  // Altera a classe e o ID do elemento
  popupElement.classList.remove('popup');
  popupElement.classList.add('box');
  popupElement.removeAttribute('id');

  // Oculta o popup
  popupElement.style.display = 'flex';
}


function showSection() {
  const sectionElement = document.getElementById("jogos");
  sectionElement.style.display = "flex";
}

function reloadIframe(buttonElement) {
  // Pega o contêiner do botão (neste caso, a div .box)
  const container = buttonElement.closest('.box');

  // Encontra o iframe dentro do contêiner .box
  const iframeElement = container.querySelector('iframe');

  // Recarrega o iframe
  iframeElement.src = iframeElement.src;
}
