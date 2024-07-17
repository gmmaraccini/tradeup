<template>
  <div class="container mt-5">
    <h1>Buscar CEP</h1>
    <the-mask v-model="cep" mask="#####-###" type="text" class="form-control" placeholder="Digite o CEP" />
    <button class="btn btn-primary mt-2" @click="searchCep">Buscar</button>
    <p v-if="error" class="text-danger mt-2">{{ error }}</p>
    <div v-if="address.cep" class="mt-3">
      <p><strong>Logradouro:</strong> {{ address.logradouro }}</p>
      <div class="form-group">
        <label for="number"><strong>Número:</strong></label>
        <input v-model="number" type="text" id="number" placeholder="Número" class="form-control" />
      </div>
      <p><strong>Cidade:</strong> {{ address.localidade }}</p>
      <p><strong>UF:</strong> {{ address.uf }}</p>
    </div>
    <router-link to="/">
      <button class="btn btn-secondary mt-3">Voltar</button>
    </router-link>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { TheMask } from 'vue-the-mask';

export default {
  name: 'SearchPage',
  components: {
    TheMask
  },
  data() {
    return {
      cep: '',
      error: null,
      number: ''
    };
  },
  computed: {
    ...mapGetters(['getAddress']),
    address() {
      return this.getAddress;
    }
  },
  methods: {
    ...mapActions(['fetchAddress']),
    async searchCep() {
      this.error = null;
      if (!/^\d{5}-?\d{3}$/.test(this.cep)) {
        this.error = 'CEP inválido. Formato esperado: 00000-000';
        return;
      }
      try {
        await this.fetchAddress(this.cep);
        if (!this.address.cep) {
          this.error = 'CEP não encontrado.';
        }
      } catch (err) {
        this.error = 'Erro ao buscar o CEP.';
      }
    }
  }
};
</script>

