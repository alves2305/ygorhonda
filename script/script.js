// FOTO PERFIL
const perfil = document.querySelector('.perfil');

if(perfil){

  perfil.addEventListener('click', () => {

    perfil.classList.toggle('perfil-ativa');

  });

}


// BOTÃO TOPO
const topoBtn = document.getElementById('topoBtn');

if(topoBtn){

  window.addEventListener('scroll', () => {

    if(window.scrollY > 300){

      topoBtn.style.display = 'block';

    }else{

      topoBtn.style.display = 'none';

    }

  });

  topoBtn.addEventListener('click', () => {

    window.scrollTo({
      top:0,
      behavior:'smooth'
    });

  });

}


// ANIMAÇÃO DOS CARDS
const cards = document.querySelectorAll('.card-moto');

window.addEventListener('scroll', () => {

  cards.forEach((card) => {

    const cardTop =
    card.getBoundingClientRect().top;

    if(cardTop < window.innerHeight - 100){

      card.classList.add('mostrar');

    }

  });

});


// // TEXTO DIGITANDO
// const elemento =
// document.getElementById('texto-digitando');

// if(elemento){

//   const texto =
//   'Não importa o quão alto seja o seu sonho, a gente chega lá!';

//   let i = 0;

//   function escrever(){

//     if(i < texto.length){

//       elemento.innerHTML += texto.charAt(i);

//       i++;

//       setTimeout(escrever, 40);

//     }

//   }

//   escrever();

// }


// LOADING
window.addEventListener('load', () => {

  const loading =
  document.getElementById('loading');

  if(loading){

    setTimeout(() => {

      loading.style.opacity = '0';

      setTimeout(() => {

        loading.style.display = 'none';

      }, 600);

    }, 2000);

  }

});

// PESQUISA DE MOTOS
const pesquisa =
document.getElementById('pesquisa');

const motos =
document.querySelectorAll('.card-moto');

if(pesquisa){

  pesquisa.addEventListener('input', () => {

    const valor =
    pesquisa.value
    .toLowerCase()
    .trim()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

    motos.forEach((moto) => {

      const nomeMoto =
      moto.querySelector('h3')
      .innerText
      .toLowerCase()
      .trim()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");

      if(nomeMoto.includes(valor)){

        moto.style.display = 'block';

      }else{

        moto.style.display = 'none';

      }

    });

  });

}


const enviarWhatsapp =
document.getElementById('enviarWhatsapp');

if(enviarWhatsapp){

  enviarWhatsapp.addEventListener('click', () => {

    const cpf =
    document.getElementById('cpf').value;

    const estadoCivil =
    document.getElementById('estadoCivil').value;

    const endereco =
    document.getElementById('endereco').value;

    const email =
    document.getElementById('email').value;

    const profissao =
    document.getElementById('profissao').value;

    const renda =
    document.getElementById('renda').value;

    const primeiraParcela =
    document.getElementById('primeiraParcela').value;

    const mensagem =
`Olá Rafael, gostaria de fazer agora meu consórcio.

CPF: ${cpf}
Estado civil: ${estadoCivil}
Endereço: ${endereco}
E-mail: ${email}
Profissão: ${profissao}
Renda mensal: ${renda}
Valor da primeira parcela: ${primeiraParcela}`;

    const numero =
    '5574999679596';

    const url =
`https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

    window.open(url, '_blank');

  });

}