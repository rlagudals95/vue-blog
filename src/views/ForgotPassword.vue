<template>
  <div class="reset-password">
    <!-- close-modal 함수를 closeModal이란 props로 넘겨줌 -->
    <Modal v-if="modalActive" v-on:close-modal="closeModal" /> 
    <Loading v-if="loading" />
    <div class = "form-wrap">
        <form class="reset">
            <h2>Reset Password</h2>
            <p>Forgot your password? Enter yout email to reset it</p>
            <div class="inputs">
                <div class="input">
                    <input type="text" placeholder="Email" v-model="email">
                    <email class="icon" />
                </div>
            </div>
            <button>Reset</button>
            <div class="angle"></div>    
        </form>
        <div class="background"></div>
    </div>
  </div>
</template> 

<script>
import email from "../assets/Icons/envelope-regular.svg" 
import Modal from "../conponents/Modal.vue"
import Loading from "../conponents/Loading.vue"

export default {
  name: 'ForgotPassword',
  components: {email, Modal, Loading},
  data () {
    return {
      email: null,
      modalActive: false,
      modalMassage: "",
      loading: false,
    }
  },
  methods : {
    closeModal() {
      this.modalActive = !this.modalActive; // modal toggle
      this.email = "";     
    }
  }
}
</script>

<style lang="scss" scoped>
.reset-password {
  .form-wrap {
    overflow: hidden;
    display: flex;
    height: 100vh;
    justify-content: center;
    align-self: center;
    margin: 0 auto;
    @media (min-width: 900px) {
        width: 100%;
    }

    .reset {
      h2 {
        margin-bottom: 8ox;
      }
      p {
        text-align: center;
        margin-bottom: 32px;
      }
    }


    form {
        padding: 0 10px;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex: 1;
        @media (min-width: 900px) {
            padding: 0 50px;
        }

        h2 {
            text-align: center;
            font-size: 32px;
            color: #303030;
            margin-bottom: 40px;
            @media (min-width:900px) {
                font-size: 40px;
            }
        }


        .inputs {
            width: 100%;
            max-width: 350px;

            .input {
                position: relative;
                display: flex;
                justify-content: center;
                margin-bottom: 8px;
                input {
                    width : 100%;
                    border: none;
                    background-color: #f2f7f6;
                    padding: 4px 4px 4px 30px;
                    height: 50px;

                    &:focus {
                        outline: none;
                    }
                }

                .icon {
                    width: 12px;
                    position: absolute;
                    left: 6px;
                }
            }
        }

        .forgot-password {
            text-decoration: none;
            color: #000;
            cursor: pointer;
            font-size: 14px;
            margin: 16px 0 32px;
            border-bottom : 1px solid transparent;
            transition: 0,5s ease all;

            &:hover {
                border-color: #303030;
            }
        }

        .angle {
            display: none;
            position: absolute;
            background-color: #fff;
            transform: rotateZ(3deg);
            right: -30px;
            height: 101%;
            z-index: 2;
            width: 14%;
            @media (min-width:900px) {
                display: initial;
            }
        }
    }

    .background {
        display: none;
        flex: 2;
        background-size: cover;
        background-image: url("../assets/background.png");
        width: 100%;
        height: 100%;
        @media (min-width: 900px) {
            display: initial;
        }
    }
}
}
</style>