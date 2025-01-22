<template>
  <div class="card">
    <header>
      <h2><slot name="header"></slot></h2>
      <p><slot name="description"></slot></p>
    </header>
    <main>
      <h3><slot name="content"></slot></h3>
    </main>
  </div>
</template>
<style lang="scss" scoped>
.card {
  background: white;
  padding: 1rem 1.5rem;
  min-height: 20vh;
  width: calc(100% - 3rem);
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h2 {
    font-family: "Poppins";
    font-weight: 600;
    font-size: 1rem;
    margin: 0;
  }
  h3 {
    font-family: "Poppins";
    font-weight: 900;
    font-size: 0.9rem;
    margin: 0;
  }
  p {
    font-family: "Poppins";
    font-size: 0.75rem;
    margin: 0;
    color: #9a9a9a;
  }
}
</style>
