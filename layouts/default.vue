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
  &__logo {
    font-family: $font-family-primary;
    font-weight: $font-weight-bold;
    font-size: 2rem;
    color: $color-quaternary;
  }
  header {
    display: flex;

    nav {
      @include flex(space-between, row);
      width: 100%;
      ul {
        @include flex(space-between, row);
        list-style: none;
        gap: 2rem;
        padding: $padding-none;
        li {
          font-family: $font-family-primary;
          font-size: $font-size-small;
          font-weight: $font-weight-regular;
          color: $black;
          a {
            color: $black;
            text-decoration: none;
            font-weight: $font-weight-regular;
          }
          .router-link-exact-active {
            color: inherit;
            text-decoration: none;
            font-weight: $font-weight-medium;
          }
        }
      }
      ul:nth-of-type(2) li:last-child a {
        background-color: $black;
        padding: $padding-small;
        border-radius: 5px;
        color: $white;
        a {
          color: $white;
        }
      }
    }
  }
}
</style>
