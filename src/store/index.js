import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        postList: [{
                id: 1,
                user: require('@/assets/usericon.png'),
                datetime: "2014-01-01",
                content: "Excellent meme!",
                image: require('@/assets/meem1.jpg'),
                likes: 0
            },
            {
                id: 2,
                user: require('@/assets/usericon.png'),
                datetime: "2014-01-01",
                content: "If a mosquito is biting you, and you flex that muscle, it will explode",
                image: "",
                likes: 0
            },
            {
                id: 3,
                user: require('@/assets/usericon.png'),
                datetime: "2014-01-02",
                content: "Exquisite meme! 10/10 would recommend",
                image: require('@/assets/meem2.jpg'),
                likes: 0
            },
            {
                id: 4,
                user: require('@/assets/usericon.png'),
                datetime: "2014-01-03",
                content: "Very inspirational!",
                image: require('@/assets/dog.jpg'),
                likes: 0
            },
            {
                id: 5,
                user: require('@/assets/usericon.png'),
                datetime: "2014-01-04",
                content: "Pringles aren't actually potato chips.",
                image: "",
                likes: 0

            },
            {
                id: 6,
                user: require('@/assets/usericon.png'),
                datetime: "2014-05-08",
                content: ":/",
                image: require('@/assets/disappearance.jpg'),
                likes: 0
            },
            {
                id: 7,
                user: require('@/assets/usericon.png'),
                datetime: "2014-05-07",
                content: "Goosebumps are meant to ward off predators.",
                image: "",
                likes: 0
            },
            {
                id: 8,
                user: require('@/assets/usericon.png'),
                datetime: "2014-05-07",
                content: "Meows are not innate cat language—they developed them to communicate with humans!",
                image: require('@/assets/cat.jpg'),
                likes: 0
            },
            {
                id: 9,
                user: require('@/assets/usericon.png'),
                datetime: "2015-03-03",
                content: "Humans could never “land” on Jupiter, Saturn, Uranus or Neptune because they are made of gas and have no solid surface.",
                image: "",
                likes: 0
            },
            {
                id: 10,
                user: require('@/assets/usericon.png'),
                datetime: "2015-04-03",
                content: "The green code in The Matrix was actually created from symbols in the code designer’s wife’s sushi cookbook.",
                image: "",
                likes: 0
            }

        ]
    },
    mutations: {
        increaseLikes(state, postId) {
            const post = state.postList.find(post => {
                return post.id == postId
            });
            post.likes += 1;
        },
        resetLikes: state => {
            state.postList.forEach(post => {
                post.likes = 0;
            })
        }
    },
    actions: {},
    modules: {},
});