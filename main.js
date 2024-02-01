//ESERCIZIO 1

// Realizzare un oggetto che rappresenti un garage:
// Dovrà contenere una lista di automobili.
// Ciascuna automobile dovra’ avere una marca (es. Fiat) ed una lista di modelli (es. Pandino tattico rosso bello come Charizard).
// Scrivere un metodo che prenda in input una marca e stampi i modelli presenti nel garage di quella stessa marca.

// (Consiglione .filter( )  )

let garage={
    auto : [
        {marca : 'fiat', modello : ['Panda', '500', 'Tipo']},
        {marca :'audi', modello : ['a4', 'q3', 'TT']},
        {marca :'citroen', modello : ['c3', 'c4 picasso', 'c5 aircross']},
        {marca:'jaguar', modello : ['XF', 'I-pace', 'XE']}
    ],

    model : function (mod) {

        let list = this.auto.filter((modelli) => modelli.marca == mod || modelli.nomeAuto == mod);
  
        console.log(list);

        list.forEach((car) => {

            car.modello.forEach(modello => {

                console.log(modello);
            })

        } )
    } 

}

garage.model("citroen") 







//ESERCIZIO 2


// replicare uno smartphone.

let smartphone={
    'marca':'Iphone',
    'modello':'12 pro',
    'prezzo':600,
    'rubrica':[
        {'nome':'Danilo','numero':3425677738},
        {'nome':'Mimmo','numero':73664645389},
        {'nome':'Gio','numero':93837664839},
        {'nome':'Antonio','numero':7463678739},
    ],
    chiama: function(name){
        let filtered=this.rubrica.filter((contatto)=>contatto.nome==name)
        console.log(`Sto chiamando ${filtered[0].nome} al numero ${filtered[0].numero}`);
    },
    addContact: function(newName,newNumber){
        this.rubrica.push({'nome':newName,'numero':newNumber});
    },
    removeContact: function(number){
        let filtered= this.rubrica.filter((contatto)=>contatto.numero!=number);
        this.rubrica=filtered;
    }





}
console.log(smartphone);
smartphone.addContact('Mamma',46463773832);
console.log(smartphone);
smartphone.removeContact(7463678739);
console.log(smartphone);

//ESRCIZIO 3

// Per esercitarvi con gli oggetti...

// replicare un  bowling.
// aggiungere il metodo per rimuovere un giocatore


const BOWLING ={
    players:[
        {nome: 'Danilo', score:[]},
        {nome: 'Alessandro', score:[]},
        {nome: 'Mimmo', score:[]}
    ],
    setScore: function(nr){
        for(let i=0; i<nr; i++){
            BOWLING.players.forEach((el)=>el.score.push(Math.round(Math.random()*10)));
        }
    },
    setFinal: function(){
        for(let i=0;i<this.players.length;i++){
        BOWLING.players[i].final=BOWLING.players[i].score.reduce((ac,el)=>ac+el);
        }
    },
    decWinner: function(){
        this.players.sort((a,b)=>b.final-a.final);
        if(this.players[0].final>this.players[1].final){
            console.log(`Ha vinto ${this.players[0].nome} con un punteggio di ${this.players[0].final}`);
        }else{
            console.log(`Pareggio, giocate un'altra partita`)
        }
    },
    addplayer:function(a){
        this.players.push({nome:a,score:[]});
    },
    remPlayer:function(a){
        let fil=[];
        for(let i=0;i<this.players.length;i++){
            fil=this.players.filter((el)=>el.nome!=a);
        }
        this.players=fil;
    }
}
BOWLING.setScore(4);
BOWLING.setFinal();
BOWLING.decWinner();
BOWLING.remPlayer('Alessandro');
console.log(BOWLING.players);

