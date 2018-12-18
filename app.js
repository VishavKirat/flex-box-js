
const allPanels = document.querySelectorAll(".panel");

const pannelArray= Array.from(allPanels);

pannelArray.forEach(function(panel){
  panel.addEventListener("mouseover",function(e){
    e.preventDefault();
    RemoveOpenClass();
    this.classList.add('open');

  });
})

function RemoveOpenClass(){
  pannelArray.forEach(function(item){
    if(item.classList.contains('open')){
      item.classList.remove('open');
    }
  })
}
