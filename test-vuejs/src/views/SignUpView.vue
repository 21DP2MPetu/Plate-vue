<script setup>

    var email;
    var username;
    var password;

    function SignUp() {
        console.log(email);
        console.log(username);
        console.log(password);
    }

    function Pass() {
        if (CheckPass() == true) {
            var preal = document.getElementById("password");
            preal.classList.add("correct");
            preal.classList.remove("wrong");
        } else {
            var preal = document.getElementById("password");
            preal.classList.add("wrong");
            preal.classList.remove("correct");
        }
    }

    function Username() {
        if (CheckUsername() == true) {
            var ureal = document.getElementById("username");
            ureal.classList.add("correct");
            ureal.classList.remove("wrong");
        } else {
            var ureal = document.getElementById("username");
            ureal.classList.add("wrong");
            ureal.classList.remove("correct");
        }
    }
    
    function Email() {
        if (CheckEmail() == true) {
            var ereal = document.getElementById("email");
            ereal.classList.add("correct");
            ereal.classList.remove("wrong");
        } else {
            var ereal = document.getElementById("email");
            ereal.classList.add("wrong");
            ereal.classList.remove("correct");
        }
    }

    function CheckPass() {
        if (password.length < 8) {
            return false;
        } else {
            return true;
        }
    }

    function CheckUsername() {
        if (username.length < 8) {
            return false;
        } else {
            return true;
        }
    }

    function CheckEmail() {
        if (!email.includes('@') || !email.includes('.')) {
            return false;
        } else {
            return true;
        }
    }


</script>

<template>
    <div class="container">
      <h1 class="light_blue">Register</h1>
      <p id="email">Email: <input @input="Email" v-model="email" type="text"></p>
      <p id="username">Username: <input @input="Username" v-model="username" type="text"></p>
      <p id="password">Password: <input @input="Pass" v-model="password" type="password"></p>
      <button @click="SignUp" class="button_light_blue">SIGN UP</button>
    </div>
</template>