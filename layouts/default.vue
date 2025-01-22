<template>
  <div class="default">
    <header>
      <nav>
        <ul>
          <li>
            <NuxtLink to="/"><span class="default__logo">Manie</span></NuxtLink>
          </li>
          <li><NuxtLink to="/a-propos">Qui sommes nous ?</NuxtLink></li>
          <li><NuxtLink to="/contact">Contact</NuxtLink></li>
        </ul>
        <ul>
          <li><NuxtLink to="/mon-espace">Se connecter</NuxtLink></li>
          <li class="default__sign-up">
            <NuxtLink to="/mon-espace">S'enregistrer</NuxtLink>
          </li>
        </ul>
      </nav>
    </header>
  </div>
  <main>
    <NuxtPage />
  </main>
</template>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Ms+Madi&family=Poppins:wght@400;600;900&display=swap");
.default {
  padding: 0.3rem 2rem;
  &__logo {
    font-family: "Poppins";
    font-weight: 900;
    font-size: 2rem;
    color: rgb(202, 101, 101);
  }
  header {
    display: flex;

    nav {
      display: flex;
      justify-content: space-between;
      width: 100%;
      ul {
        display: flex;
        list-style: none;
        gap: 2rem;
        align-items: center;
        padding: 0;
        li {
          font-family: "Poppins";
          font-size: 0.8rem;
          font-weight: 400;
          color: black;
          a {
            color: black;
            text-decoration: none;
            font-weight: 400;
          }
          .router-link-exact-active {
            color: inherit;
            text-decoration: none;
            font-weight: 600;
          }
        }
      }
      ul:nth-of-type(2) li:last-child a {
        background-color: black;
        padding: 0.5rem;
        border-radius: 5px;
        color: white;
        a {
          color: white;
        }
      }
    }
  }
}
</style>
