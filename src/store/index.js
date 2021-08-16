import Vue from "vue";
import Vuex from "vuex";
import firebase from "firebase/app";
import "firebase/auth";
import db from "../firebase/firebaseInit";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sampleBlogCards: [
      {
        blogTitle: "Blog Cards #1",
        blogCoverPhoto: "stock-1",
        blogDate: "May 1, 2021",
      },
      {
        blogTitle: "Blog Cards #2",
        blogCoverPhoto: "stock-2",
        blogDate: "May 1, 2021",
      },
      {
        blogTitle: "Blog Cards #3",
        blogCoverPhoto: "stock-3",
        blogDate: "May 1, 2021",
      },
      {
        blogTitle: "Blog Cards #4",
        blogCoverPhoto: "stock-4",
        blogDate: "May 1, 2021",
      },
    ],

    // blog
    blogHTML: "Write your blog title here...",
    blogTitle: "",
    blogPhotoName: "",
    blogPhotoFileURL: "",
    blogPhotoPreview: null,
    //
    editPost: null,
    user: null,
    profileEmail: null,
    profileFirstName: null,
    profileLastName: null,
    profileUserName: null,
    profileId: null,
    profileInitials: null,
    profileAdmin: null,
  },
  mutations: {
    newBlogPost(state, payload) {
      state.blogHTML = payload;
      console.log('HTML', state.blogHTML)
    },
    updateBlogTitle(state, payload) {
      state.blogHTML = payload;
    },
    toggleEditPost(state, payload) {
      // vuex의 state값을 변경해 줄 때 쓰는 것 같다
      state.editPost = payload;
      console.log(state.editPost);
    },
    updateUser(state, payload) {
      state.user = payload;
    },
    setProfileAdmin(state, payload) {
      state.profileAdmin = payload;
      console.log('admin : ', state.profileAdmin);
    },
    setProfileInfo(state, doc) {
      state.profileId = doc.id;
      state.profileEmail = doc.data().email;
      state.profileFirstName = doc.data().firstName;
      state.profileLastName = doc.data().lastName;
      state.profileUserName = doc.data().username;
    },
    setProfileInitials(state) {
      state.profileInitials =
        state.profileFirstName.split("")[0] +
        state.profileLastName.split("")[0];
      // state.profileFirstName.match(/(\b\s)?/g).join("") +
      // state.profileLastName.match(/(\b\s)?/g).join("");
    },
    changeFirstName(state, payload) {
      state.profileFirstName = payload;
    },
    changeLastName(state, payload) {
      state.profileLastName = payload;
    },
    changeUsername(state, payload) {
      state.profileUserName = payload;
    },
  },
  actions: {
    async getCurrentUser({ commit }, user) {
      console.log("getC");
      const dataBase = await db
        .collection("user")
        .doc(firebase.auth().currentUser.uid);
      const dbResults = await dataBase.get();
      commit("setProfileInfo", dbResults);
      commit("setProfileInitials");
      console.log(dbResults);
      console.log("action");
      const token = await user.getIdTokenResult();
      const admin = await token.claims.aud;

      commit('setProfileAdmin', admin);
    },
    async updateUserSettings({ commit, state }) {
      const database = await db.collection('user').doc(state.profileId);
      await database.update({
        email: state.profileEmail,
        firstName: state.profileFirstName,
        lastName: state.profileLastName,
        username: state.profileUserName
      });
      commit("setProfileInitials");
    }
  },
  modules: {},
});
