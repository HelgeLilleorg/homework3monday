import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    productList: [{
      id: 1,
      user: {
          src: "../assets/usericon.png"
      },
      datetime: "2014-01-01",
      content: "Excellent meme!",
      image: {
          src: "meem1.jpg"
      }
  },
  {
      id: 2,
      user: {
          src: "usericon.png"
      },
      datetime: "2014-01-01",
      content: "If a mosquito is biting you, and you flex that muscle, it will explode",
      image: {
          src: ""
      }
  },
  {
      id: 3,
      user: {
          src: "usericon.png"
      },
      datetime: "2014-01-02",
      content: "Exquisite meme! 10/10 would recommend",
      image: {
          src: "meem2.jpg"
      }
  },
  {
      id: 4,
      user: {
          src: "usericon.png"
      },
      datetime: "2014-01-03",
      content: "Very inspirational!",
      image: {
          src: "Dog.jpg"
      }

  },
  {
      id: 5,
      user: {
          src: "usericon.png"
      },
      datetime: "2014-01-04",
      content: "Pringles aren't actually potato chips.",
      image: {
          src: ""
      }

  },
  {
      id: 6,
      user: {
          src: "usericon.png"
      },
      datetime: "2014-05-08",
      content: ":/",
      image: {
          src: "disappearance.jpg"
      }

  },
  {
      id: 7,
      user: {
          src: "usericon.png"
      },
      datetime: "2014-05-07",
      content: "Goosebumps are meant to ward off predators.",
      image: {
          src: ""
      }

  },
  {
      id: 8,
      user: {
          src: "usericon.png"
      },
      datetime: "2014-05-07",
      content: "Meows are not innate cat language—they developed them to communicate with humans!",
      image: {
          src: "cat.jpg"
      }

  },
  {
      id: 9,
      user: {
          src: "usericon.png"
      },
      datetime: "2015-03-03",
      content: "Humans could never “land” on Jupiter, Saturn, Uranus or Neptune because they are made of gas and have no solid surface.",
      image: {
          src: ""
      }

  },
  {
      id: 10,
      user: {
          src: "usericon.png"
      },
      datetime: "2015-04-03",
      content: "The green code in The Matrix was actually created from symbols in the code designer’s wife’s sushi cookbook.",
      image: {
          src: ""
      }

  }

]
    },
  mutations: {},
  actions: {},
  modules: {},
});
