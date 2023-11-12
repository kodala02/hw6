const app = Vue.createApp({
    data() {
      return {
        showDetails: false,
        edit: false,
        message: 'My Contacts',
        contacts: [
          {
            name: 'Kemal Aydin',
            email: 'kemal.aydin@franklin.edu',
            age: 44,
            link: 'https://www.linkedin.com/in/kaydin/',
          },
          {
            name: 'John Doe',
            email: 'john.doe@example.com',
            age: 30,
            link: 'https://www.linkedin.com/in/johndoe/',
          },
          // Add more contacts here
        ],
      };
    },
    methods: {
      toggleDetails() {
        this.showDetails = !this.showDetails;
      },
      toggleEdit() {
        this.edit = !this.edit;
      },
      increaseAge(contact) {
        contact.age++;
      },
      decreaseAge(contact) {
        contact.age--;
      },
    },
  });
  
  app.mount('#app');
  