<template>
  <header>
      <nav class="container">
        <div class="branding">
            <router-link class="header" :to="{name: 'Home'}">HMK1022</router-link>
        </div>
            <div class="nav-links">
                <ul class="nav_ul" v-show="!mobile">
                    <router-link class="link" :to="{name: 'Home'}">Home</router-link>
                    <router-link class="link" :to="{name : 'Blogs'}">Blogs</router-link>
                    <router-link class="link" :to="{name : 'Blogs'}">Create Post</router-link>
                    <router-link v-if="!this.$store.state.user"  class="link" :to="{name : 'Login'}">Login/Resister</router-link>
                </ul>
                <div v-if="user" @click="toggleProfileMenu" class="profile" ref="profile">
                    <!-- this.$store.state.user>> user라고 줄여 써도 된다 -->
                    <span>{{this.$store.state.profileInitials}}</span>
                    <div v-show="profileMenu" class="profile-menu">
                        <div class="info">
                            <p class="initials">{{this.$store.state.profileInitials}}</p>
                            <div class="right">
                                <p>{{this.$store.state.profileFirstName}} {{this.$store.state.profileLastName}}</p>
                                <p>{{this.$store.state.profileUserName}}</p>
                                <p>{{this.$store.state.profileEmail}}</p>
                            </div>
                        </div>
                        <div class="options">
                            <div class="option">
                                <router-link class="option" to="#">
                                    <userIcon class="icon"/>
                                    <p>Profile</p>    
                                </router-link>
                            </div>
                            <div class="option">
                                <router-link class="option" to="#">
                                    <adminIcon class="icon"/>
                                    <p>Admin</p>    
                                </router-link>
                            </div>
                            <div @click="signOut" class="option">
                                    <signOutIcon class="icon"/>
                                    <p>Sign Out</p>                                  
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </nav>
             <menuIcon @click="toggleMobileNav" class="menu-icon" v-show="mobile" /> 
            <!-- mobile -->
            <transition name="mobile-nav" >
                <!-- mobileNav가 true일때만 보임 -->
                <ul  class= "mobile-nav" v-show="mobileNav">
                    <router-link class="link" :to="{name : 'Home'}">Home</router-link>
                    <router-link class="link" :to="{name : 'Blogs'}">Blogs</router-link>
                    <router-link class="link" to="#">Create Post</router-link>
                    <router-link class="link" :to="{name : 'Login'}">Login/Resister</router-link>
                </ul>
            </transition>
     </header>
</template>

<script>
import menuIcon from '../assets/Icons/bars-regular.svg'
import userIcon from '../assets/Icons/user-alt-light.svg'
import adminIcon from '../assets/Icons/user-crown-light.svg'
import signOutIcon from '../assets/Icons/sign-out-alt-regular.svg'
import firebase from "firebase/app"
import "firebase/auth"

export default {  
    name: 'navigation',
    components: {
         menuIcon,
         userIcon,
         adminIcon,
         signOutIcon
    },
    data () {
        return {
            profileMenu: null,
            mobile: null,
            mobileNav: null,
            windowWidth : null,
        };
    },

    created() {// created는 어떤 조건에 흠.... 함수선언??
        //window에 함수 선언
        console.log('created')
        window.addEventListener('resize', this.checkScreen);
        this.checkScreen();
    }
    
    ,
    methods: {
        checkScreen () {
            this.windowWidth = window.innerWidth;
            // 스크린 크기에따라 nav 바뀌는 상태값
            if(this.windowWidth <= 750){
                
                this.mobile = true;
               
                return
            }
            this.mobile = false;
            this.mobileNav = false
            return
        },

        toggleMobileNav(){
            // 햄버거 버튼 토글
            this.mobileNav = !this.mobileNav;
        },
        toggleProfileMenu(e) {
            if(e.target === this.$refs.profile){console.log('이것도 수정')}
                 this.profileMenu = !this.profileMenu;    
        },
        signOut() {
            firebase.auth().signOut();
            window.location.reload();
        },
    },
    computed : { // nav가 생길때 마다 발동 ex) 로그인 or 회원가입시 >> 그 외의 페이지(nav가 생길때)
        user() {
           console.log('유저정보',this.$store.state.user)
           return this.$store.state.user;  // 로그인 시 user를 리턴해 유저프로필을 오른쪽 상단에 띄워준다
        },
    }

}
</script>

<style lang="scss" scoped>
    .container {
        display: flex;
        justify-content: space-between;
    }

    header{
        background-color: #fff;
        padding: 0 25px;
        box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);
        z-index: 99;
   

    .link {
        font-weight: 500;
        padding: 0 8px;
        transition: 0.3s color ease;

        &:hover {
            color : #1eb8b8;
        }
    }

    nav {
        display: flex;
        padding: 25px 0;


        .branding {
            display: flex;
            align-items: center;

            .header {
                font-weight: 600;
                font-size:  24px;
                color: #000;
                text-decoration: none;
            }
        .nav-links {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            flex: 1;   
            }
        }

    }
              .nav-links {
                  display: flex;
              }
              // 수정할 부분
                .nav_ul {
                    margin-right: 32px;    
                    .link {
                        margin-right: 32px;
                    }
                    .link:last-child {
                        margin-right: 0;
                    }
                }

                .profile {
                    position:relative;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    color: #fff;
                    background-color: #303030;
                    span {
                        pointer-events: none;
                    }

                .profile-menu {
                    position: absolute;
                    top: 50px;
                    right: 0;
                    width: 250px;
                    background-color: #303030;
                    box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);
                }

                .info {
                    display: flex;
                    align-items: center;
                    padding: 15px;
                    background-color: #303030;
                    border-bottom: 1px solid #fff;

                    .initials {
                        position: initial;
                        width: 40px;
                        height: 40px;
                        background-color: #fff;
                        color: #303030;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        border-radius: 50%;
                    }
                    .right {
                        flex: 1;   
                        margin-left: 24px;

                        p:nth-child(1){
                            font-size: 14px;
                        }
                        p:nth-child(2),
                        p:nth-child(3){
                            font-size: 12px;
                        }
                    }
                }
                .options {
                    padding: 15px;
                    .option{
                        text-decoration: none;
                        color: #fff;
                        display: flex;
                        align-items: center;
                        margin-bottom: 12px;

                        .icon {
                            width: 18px;
                            height: auto;
                        }
                        p {
                          font-size: 14px;
                          margin-left: 12px; 
                        }

                        &:last-child {
                            margin-bottom: 0px;
                        }
                    }
                }
             }
                // 수정할 부분
    .menu-icon {
        cursor: pointer;
        position: absolute;
        top: 32px;
        right: 25px;
        height: 25px;
        width: auto;
    }

    .mobile-nav {
        padding: 20px;
        width: 70%;
        max-width: 250px;
        display: flex;
        flex-direction: column;
        position: fixed;
        height: 100%;
        background-color: #303030;
        top: 0;
        left: 0;

    .link {
        padding: 15px 0;
        color: #fff;

    }
    }

    .mobile-nav-enter-active,
    .mobile-nav-leave-active {
        transition: all 1s ease;
    }
    
    .mobile-nav-enter {
        transform : translateX(-250px);
    }
    
    .mobile-nav-enter-to {

        transform:translateX(0);
    }

    .mobile-nav-leave-to {
        transform: translateX(-250px);

    }


 }
    
</style>
