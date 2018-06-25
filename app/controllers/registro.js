import Controller from '@ember/controller';
export default Controller.extend({

  cities: ['Obstétrico', 'General de Pachuca', 'Santa Monica pachuca'],


  actions: {
    chooseDestination(name) {

      if (name === "Obstétrico") {
        document.getElementById("Maps").src = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1873.1660269934114!2d-98.774651!3d20.12019!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d10a73b6409e29%3A0x914f58299ad73aa1!2sHospital+Obst%C3%A9trico!5e0!3m2!1ses-419!2smx!4v1529449446130";
       document.getElementById("btnIniciar").style="display:block;";
      }
      if (name === "General de Pachuca") {
        document.getElementById("Maps").src= "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3150.4139445769083!2d-98.72252484638344!3d20.11339986944395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1a761c4c4e0fb%3A0xde26bbc77015c3c5!2sHospital+General+de+Pachuca!5e0!3m2!1ses-419!2smx!4v1529449537909";
        document.getElementById("btnIniciar").style="display:block;";

      }
      if (name === "Santa Monica pachuca") {
        document.getElementById("Maps").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d936.5470424301683!2d-98.73329965942325!3d20.126195845082414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d109ef5d989fc1%3A0xbd6861ae9356bf2c!2sHospital+Santa+Monica!5e0!3m2!1ses-419!2smx!4v1529449629253";
        document.getElementById("btnIniciar").style="display:block;";
      }
    },

    toLogin(){
      window.$('#exampleModal').modal('hide')
      // window.$('body').removeClass('modal-open')
      // window.$('.modal-backdrop.fade.show').removeAttr('class')
      this.transitionToRoute('login')
    },
    checkType(email){
      let position = email.search('@')
      let type = email.substring(position+1, email.length)
      console.log(type)
      switch(type){
        case 'gmail.com':
          alert('es gmail')
        default:
          alert('no se que es')
      }


    },

   TipoCorreo (c){
     console.log(c) ;  
   }

  }


});

