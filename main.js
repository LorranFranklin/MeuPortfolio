  //Selecione todos os elementos que correspondem ao seletor fornecido
function scrollToElement(elementSelector, instance = 0) {
  const elements = document.querySelectorAll(elementSelector);
  /*Verifique se existem elementos correspondentes ao seletor e se a instância solicitada existe*/
  if (elements.length > instance) {
    //Role até a instância especificada do elemento
    elements[instance].scrollIntoView({ behavior : 'smooth'});
  }
}

const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");

link1.addEventListener('click', () => {
  scrollToElement('#sobre');
});

link2.addEventListener('click', () => {
  scrollToElement('.header');
});

link3.addEventListener('click', () => {
  scrollToElement('#projetos');
});