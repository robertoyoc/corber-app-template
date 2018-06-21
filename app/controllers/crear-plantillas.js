import Controller from '@ember/controller';

export default Controller.extend({
    icon: "fa-cubes",
    actions: {
        changeIcon(icon) {
            this.set('icon', icon)
        },

        toggle(){
            this.toggleProperty('active')
        }
    }
});
