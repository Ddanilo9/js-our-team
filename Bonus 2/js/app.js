
//creo un array con i membri del team
const membriTeam = [
    
    creaMembroTeam ('Wayne Barnett', 'Founder & CEO', './img/wayne-barnett-founder-ceo.jpg'),
    creaMembroTeam ('Angela Caroll', 'Chief Editor', './img/angela-caroll-chief-editor.jpg'),
    creaMembroTeam ('Walter Gordon', 'Office Manager', './img/walter-gordon-office-manager.jpg'),
    creaMembroTeam ('Angela Lopez', 'Social Media Manager', '.img/angela-lopez-social-media-manager.jpg'),
    creaMembroTeam ('Scott Estrada', 'Developer', './img/scott-estrada-developer.jpg'),
    creaMembroTeam ('Barbara Ramo', 'Graphic Designer', './img/barbara-ramos-graphic-designer.jpg'),
]


//recupero dal dom dove stamperò i miei elementi
let listaElName = document.querySelector('.name')
let listaElRole = document.querySelector('.role')
let listaElPic = document.querySelector('.pic')

//funzione forEach per recuperre simgolarmente i membri e stamparli
membriTeam.forEach(onLoop)

function onLoop(membroTeam, i, array) {
//    console.log(membroTeam)
//    listaElName.innerHTML += `<li>${membroTeam.nome}</li>`
//    listaElRole.innerHTML += `<li>${membroTeam.ruolo}</li>`
  
    let boxCol = document.createElement("div"); 
    boxCol.classList.add('col') 
    let divEl = document.querySelector(".row"); 
    divEl.appendChild(boxCol); 

    let img = document.createElement("img"); 
    img.classList.add('img')
    img.src = membroTeam.foto; 
    let src = document.querySelector(".col"); 
    src.appendChild(img); 
}



//funzione per creare un membro
function creaMembroTeam(nome, ruolo, foto) {
    const membroTeam = {
        nome: nome,
        ruolo: ruolo,
        foto: foto
    }
    return membroTeam
}







  


  

