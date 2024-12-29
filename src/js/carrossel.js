

const imagens = document.querySelectorAll('.slide');
const setaVoltar = document.getElementById('seta-voltar');
const setaAvancar = document.getElementById('seta-avancar');
const btnNext = document.querySelectorAll('.swiper-button-next');
const btnPrev = document.querySelectorAll('.swiper-button-next');


let imagemAtual = 0;

// setaAvancar.addEventListener('click', () => {
//     console.log(imagemAtual);
//     imagens[imagemAtual].classList.remove('mostrar');
//     imagemAtual = (imagemAtual + 1) % imagens.length;
//     imagens[imagemAtual].classList.add('mostrar');

// });

// const creatDots = () => {
//   for (let i = 0; i < imagens.length; i++){
//     const dot = document.createElement('span');
//     dot.classList.add('dot');
//     dotsContainer.appendChild(dot);
//   }
//   dotsContainer.children[imagemAtual].classList.add('active');
// }

// const updateUI = () => {
//   imagens[imagemAtual].style.margingLeft = '0';
//   const dots = document.querySelectorAll('.dot');
//   dots.forEach((dot, index) => {
//     dot.classList.remove('active');
//   })
//   dots[imagemAtual].classList.add('active');

//   setaVoltar.disabled = imagemAtual === 0;
//   setaAvancar.disable = imagemAtual === imagens.length - 1;
// }
setaAvancar.addEventListener('click', () => {
    if (imagemAtual === imagens.length - 1) {
      return;
    }
    imagemAtual++;
    
    esconderImagemAberta();
  
    mostrarImagem();
  
    mostrarOuEsconderSetas();

    updateUI();
  });

// setaVoltar.addEventListener('click', () => {
//     imagens[imagemAtual].classList.remove('mostrar');
//     imagemAtual = (imagemAtual - 1 + imagens.length) % imagens.length;
//     imagens[imagemAtual].classList.add('mostrar');
// });
setaVoltar.addEventListener('click', () => {
    if (imagemAtual === 0) {
      return;
    }
    imagemAtual--;
    
    esconderImagemAberta();
  
    mostrarImagem();
  
    mostrarOuEsconderSetas();

    updateUI();
  });
  



function mostrarImagem() {
    imagens[imagemAtual].classList.add('mostrar');
  
  }
  function esconderImagemAberta() {
    const imagemAberta = document.querySelector('.mostrar');
    imagemAberta.classList.remove('mostrar');
  }
  
  function mostrarOuEsconderSetas(){
    const naoEhAPrimeiraImagem = imagemAtual !== 0;
    if(naoEhAPrimeiraImagem){
      setaVoltar.classList.add('opacidade');
    }else{
      setaVoltar.classList.remove('opacidade');
    }
  
    const chegouNaUltimaImagem = imagemAtual != 0 && imagemAtual === imagens.length - 1;
    if(chegouNaUltimaImagem){
      setaAvancar.classList.add('opacidade');
    }else{
      setaAvancar.classList.remove('opacidade');
    }
  };

  // creatDots();
  // updateUI();

