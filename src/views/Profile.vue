<template>
  <div class="profile">
    <Modal v-if="modalActive" :modalMassage="modalMessage" v-on:close-modal="closeModal"/>
      <div class="container">
          <h2>Account Setting</h2>
          <div class="profile-info">
              <div class="initials">
                  <p class=initial-in>{{this.$store.state.profileInitials}}</p>
                </div>
              <div class="admin-badge">
                  <adminIcon class="icon" />
                  <span>admin</span>
              </div>
              <div class="input">
                  <label for="firstName">First Name:</label>
                  <input type="text" id="firstName" v-model="firstName" /> 
              </div>
              <div class="input">
                  <label for="firstName">Last Name:</label>
                  <input type="text" id="lastName" v-model="lastName" /> 
              </div>
              <div class="input">
                  <label for="uesrname">Username:</label>
                  <input type="text" id="userName" v-model="firstName" /> 
              </div>
              <div class="input">
                  <label for="firstName">Email:</label>
                  <input type="text" id="firstName" v-model="firstName" /> 
              </div>
              <button>Save Change</button>
          </div>
      </div>
  </div>
</template>

<script>
import Modal from "../conponents/Modal.vue"
import adminIcon from "../assets/Icons/user-crown-light.svg"

export default {
  name: "Profile",
  components: {Modal,adminIcon},
  data () {
    return {
      modalMessage:"Change were saved!",
      modalActive: false,
    }
  },
  methods: {
    closeModal () {
      this.modalActive = !this.modalActive
    }
  },
  computed : {
    firseName: {
      get () {
        return this.$store.state.profileFirstName;
      },
      set (payload) {
        this.$store.commit("changeFirstName",payload);
      }
    },
     lastName: {
      get () {
        return this.$store.state.profileLastName;
      },
      set (payload) {
        this.$store.commit("changeLasttName",payload);
      }
    },
     username: {
      get () {
        return this.$store.state.profileUsername;
      },
      set (payload) {
        this.$store.commit("changeUsername",payload);
      }
    },
  },

}
</script>

<style lang="scss" scoped>
  .profile {
    .container {
      max-width: 1000px;
      padding: 60px 25px;
    }

    h2 {
      text-align: center;
      margin-bottom: 16px;
      font-weight: 300;
      font-size: 32px;
    }

    .profile-info {
      border-radius: 8px;
      box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1) ;
      padding : 32px;
      background-color: #f1f1f1;
      display: flex;
      flex-direction: column;
      max-width: 600px;
      margin: 32px auto;

      .initials {
        position : initial;
        width: 80px;
        height: 80px;
        font-size: 32px;
        background-color: #303030;
        margin-bottom: 10px;
        color: #ffffff;
        display: flex;
        align-self: center;  
        justify-content: center;
        border-radius: 50%;
        vertical-align: center;
      }
      .initial-in {
        margin: auto;
      }
      
      .admin-badge {
        display: flex;
        align-self: center;
        color: #fff;
        font-size: 14px;
        padding: 8px 24px;
        border-radius: 20px;
        background-color: #303030;
      }

      .icon {
        width: 14px;
        height: auto;
        margin-right: 8px;
      }
    }
    
    .input {
      margin: 16px 0;

      label {
        font-size: 14px;
        display: block;
        padding-bottom: 6px;
      }
      input {
        width: 100%;
        border: none;
        background-color: #f2f7f6;
        padding: 8px;
        height: 50px;
        @media (min-width : 900px) {

        }

        &:focus{
          outline: none;
        }
      }
    }
    button {
      align-self: center;
    }
  }
</style>