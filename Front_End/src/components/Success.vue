<script>
export default {
   methods: {
      addPlayer() {
         // Redirect to the page where you add a player again
         this.$router.push({ path: '/admindashboard' });
      }
   }
}
</script>

<template>
   <div class="success-page">
      <h1>You have successfully added the player!</h1>
      <button @click="addPlayer">Add Again</button>
   </div>
</template>

<style scoped>

.success-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}

h1 {
  font-size: 2rem;
  margin-bottom: 2rem;
}

button {
  padding: 1rem 2rem;
  background-color: #2196F3;
  color: white;
  font-size: 1.2rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #1976D2;
}



</style>