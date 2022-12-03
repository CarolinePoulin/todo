<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Accueil from './components/Accueil.vue'

</script>

<template>
  <header>
    <img alt="Application logo" class="logo" src="@/assets/checklist.png" width="125" height="125" />

    <div class="wrapper">
      <Accueil msg="Connectez-vous!" />

      <nav>

      </nav>

      <div class="form">
        <form id="form" action="/src/views/Application.vue" @submit="validateForm" method="post" novalidate="true">
          <div>
            <p v-if="errors.length">
              <b>Veuillez corriger les erreurs suivantes):</b>
              <ul>
                <li v-for="error in errors">{{ error }}</li>
              </ul>
            </p>
          </div>
          <div class="input-control">
            <label for="emailInput" class="form-label">Adresse courriel:</label>
            <input type="email" class="form-control" id="emailInput" v-model="emailInput" name="emailInput">
            <div id="errorMessage"></div>
          </div>
          <div class="input-control">
            <label for="passwordInput" class="form-label">Mot de passe:</label>
            <input type="password" class="form-control" id="passwordInput" v-model="passwordInput" name="passwordInput">
            <div id="errorMessage"></div>
          </div>
          <div>
            <button type="submit" class="submit btn btn-primary">Soumettre</button>
          </div>
        </form>
      </div>

    </div>
  </header>

  <RouterView /> 
<!--  <script src="services/validation.js"></script>  -->
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

div.greetings {
  text-align: center;
}

div.form {
  width: 500px;
  display: block;
  text-align: center;
  margin: 0 auto;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 2rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

/* @media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
} */
</style>
