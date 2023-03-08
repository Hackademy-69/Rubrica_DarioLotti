// colonna cards

let colWrapper = document.querySelector('.colWrapper');

// buttons

let btnCust = document.querySelector('#btnCust') ;

let addContattiBtn = document.querySelector('#addContattiBtn') ;
let removedContattiBtn = document.querySelector('#removedContattiBtn');



// inputs
let nameInput = document.querySelector('#nameInput');
let numberInput = document.querySelector('#numberInput');


// variabile d'appoggio

let check = true ;





let rubrica = {
    
    lista_contatti : [
        
        
        { nome_utente : 'Carlo' , cell_utente : 3333333333 },
        { nome_utente : 'Alessio' , cell_utente : 555555555 },
        { nome_utente : 'Federico' , cell_utente : 66666366666 },

        
    ],
         
    
    mostraContatti : function(){
        
        colWrapper.innerHTML = '' ;
        
        this.lista_contatti.forEach((elemento) =>{
            
            let div = document.createElement('div') ;
            div.classList.add('card-custom') ;
            div.innerHTML = ` 
            
            <p class="my-1"> ${elemento.nome_utente}</p> 
            
          <p class="my-1"> ${elemento.cell_utente}  </p> 
          <i class=" icon fa-solid fa-trash-can"></i> ` ;
          
          colWrapper.appendChild(div) ;    
          
        });
        
      },


      
      addContatti : function(newName , newNumber){
        
        
        if(newName && newNumber){
          this.lista_contatti.push( {contact_name : newName, cell_number : newNumber} );
          this.mostraContatti();
          if(check == false){
            
            check = true;
            btnCust.innerHTML = 'Nascondi Contatti';
          } 
        } else{
          alert('Devi inserira SIA nome SIA numero!')
        }
      }  ,
      
       removedContatti : function (utente_rimosso) {
          let names = this.lista_contatti.map((contatto)=> contatto.contact_name) ;
        let index = names.indexOf(utente_rimosso);
        if(index >= 0){
          this.lista_contatti.splice(index, 1)
          this.mostraContatti();
          if(check ==false){
            check = true ;
            btnCust.innerHTML= 'Nascondi Contatti'
          }

        }
      
        }
    } ;
    
    
    
    btnCust.addEventListener('click', () => {
    
     if(check == false){

    rubrica.mostraContatti();
    check = true ;
    btnCust.innerHTML = 'Nascondi Contatti';

      } else {
    colWrapper.innerHTML = '';
    check = false ;
    btnCust.innerHTML = 'Mostra Contatti';

    }

    }) ;






 addContattiBtn.addEventListener('click', ()=>{
  rubrica.addContatti(nameInput.value, numberInput.value);
  nameInput.value = '';
  numberInput.value = '';
  
});