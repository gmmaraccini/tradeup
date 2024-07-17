<template>
    <div class="container mt-5">
      <h1>Home</h1>
      <p>Teste Tradeup</p>
      <img src="@/assets/tradeup.png" alt="Logo" class="img-fluid">
      <router-link to="/search">
        <button class="btn btn-primary mt-3">Buscar CEP</button>
      </router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HomePage'
  };
  </script>
  
