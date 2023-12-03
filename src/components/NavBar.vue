<template>
    <div class="navbar-parent">
      
        <div class="bouton">
            <button @click="scrollingButtons('Debut')">
                Presentation</button>
            <button @click="scrollingButtons('LaPresentation')">
                Information</button>
            <button @click="scrollingButtons('formulaireDeContact')">
                Contact</button> 
      </div>

    </div>

</template>


<script> 

    export default {

        data(){

            return{

                hautDePage: '',
                milieuxDePage: '',
                basDePage: '',

            }
        },

        methods: {
            scrollToContact(){

                // Trouver la div du formulaire de contact par son identifiant (id='...')
                let elementContact = document.getElementById('formulaireDeContact');

                // Scroll jusqu'au haut de l'element
                elementContact.scrollIntoView({behavior: 'smooth'});
            },

            scrollToInformation(){
                
                let elementInformation = document.getElementById('LaPresentation');

                elementInformation.scrollIntoView({behavior: 'smooth'});

            },

            scrollToPresentation(){

                let elementInformation = document.getElementById('Debut');

                elementInformation.scrollIntoView({behavior:'smooth'});
            },

            scrollingButtons(destinationId){
                // Trouver la div du formulaire de contact par son identifiant (id='...')
                let element = document.getElementById(destinationId);

                // Scroll jusqu'au haut de l'element
                element.scrollIntoView({behavior: 'smooth'});

            }
                
        }
        
    }

</script>



<style scoped>
.navbar-parent {
    width: 15%;
    height: 100%;
    
}

   
    /* Les éléments de la banderole */
.bouton{ 
    width: 15%;
    height: 150%;
    text-align: center;
    font-size: 1.125rem;
    line-height: 15rem;
    display: flex;
    flex-direction: column;
    gap: 10rem;
    
    position: fixed;
    left: 0;
    top:  0;
    background-color: rgb(104, 115, 131);
}

       
   /* Les boutons dans la banderole */
button{
    width: 98%;
    border-radius: 20px;
    border: 1px;
    background-color: #0b0b0b;
    position: relative;
    top: 13%;
    outline: solid rgb(68, 182, 186);
    transition: 1s;
    color: none; 
}

button:focus{
    transition: 1s;
    color: none;
    outline: 2px solid #851397;
    animation: anim-shadow .3s forwards; 
    box-shadow: inset rgba(0,0,0,0.35) 2px 2px 12px, #851397 0 0 10px;
}

/* button:active {
    background-color: red;
} */

</style>