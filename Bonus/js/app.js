
//creo un array con i membri del team
const membriTeam = [
    
    creaMembroTeam ('Wayne Barnett', 'Founder & CEO', './Bonus/img/wayne-barnett-founder-ceo.jpg'),
    creaMembroTeam ('Angela Caroll', 'Chief Editor', './Bonus/img/angela-caroll-chief-editor.jpg'),
    creaMembroTeam ('Walter Gordon', 'Office Manager', './Bonus/img/walter-gordon-office-manager.jpg'),
    creaMembroTeam ('Angela Lopez', 'Social Media Manager', './Bonus/img/angela-lopez-social-media-manager.jpg'),
    creaMembroTeam ('Scott Estrada', 'Developer', './Bonus/img/scott-estrada-developer.jpg'),
    creaMembroTeam ('Barbara Ramo', 'Graphic Designer', './Bonus/img/barbara-ramos-graphic-designer.jpg'),
]


//recupero dal dom dove stamperò i miei elementi
let listaElName = document.querySelector('.name')
let listaElRole = document.querySelector('.role')
let listaElPic = document.querySelector('.pic')

//funzione forEach per recuperre simgolarmente i membri e stamparli
membriTeam.forEach(onLoop)

function onLoop(membroTeam, i, array) {
//    console.log(membroTeam)
   listaElName.innerHTML += `<li>${membroTeam.nome}</li>`
   listaElRole.innerHTML += `<li>${membroTeam.ruolo}</li>`
//    listaElPic.innerHTML +=  `<img>${membroTeam.foto}</img>`   prova sbagliata
    let img = document.createElement("img"); 
    img.src = membriTeam.foto; 
    let src = document.getElementById("pic-profile"); 
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







  


  

