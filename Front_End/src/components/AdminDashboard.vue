<script>
export default {
  methods: {
    batter() {
      this.$router.push({ path: '/batter' })
    },
    bowler() {
      this.$router.push({ path: '/bowler' })
    },
    allrounder() {
      this.$router.push({ path: '/allrounder' })
    },
    wicketkeeper() {
      this.$router.push({ path: '/wicketkeeper' })
    }
  }
}
</script>

<template>
  <section class="white-section" id="features">

    <div class="container-fluid">
      <div class="row">
        <h1 class="heading">Add record of a player</h1>
        <div class="feature-box col-lg-3">
          <i class="fa fa-address-card" aria-hidden="true" ></i>
          <button type="button" class="btn btn-success btn-lg" v-on:click="batter"><i class="fa fa-plus-circle" ></i> Add
            Batter</button>

        </div>

        <div class="feature-box col-lg-3">
          <i class="fa fa-address-card" aria-hidden="true" ></i>
          <button type="button" class="btn btn-success btn-lg" v-on:click="allrounder"><i class="fa fa-plus-circle"></i> Add
            Allrounder</button>

        </div>

        <div class="feature-box col-lg-3">
          <i class="fa fa-address-card" aria-hidden="true" ></i>
          <button type="button" class="btn btn-success btn-lg" v-on:click="bowler"><i class="fa fa-plus-circle"></i> Add
            bowler</button>

        </div>

        <div class="feature-box col-lg-3">
          <i class="fa fa-address-card" aria-hidden="true" ></i>
          <button type="button" class="btn btn-success btn-lg" v-on:click="wicketkeeper"><i class="fa fa-plus-circle"></i> Add
            Wicketkeeper</button>

        </div>
      </div>


    </div>
  </section>

</template>

<style>
.fa-address-card {
  font-size: 10em;
  display: block;
  align-items: center;
}
.feature-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-size: cover;
  padding: 40px;
  background-color: #FF8C8C;
  align-items: center;
}
.container-fluid {
  color: #000;

}
.row {
  margin: 0 auto;
  padding: 20px;
}
</style>