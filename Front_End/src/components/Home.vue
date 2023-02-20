<script>
</script>

<template class="home">
  <div class="container-home">

    <div class="top">

      <div class="col-lg-6 left">
        <h1 class="big-heading">Create the winning fantasy IPL cricket team Here</h1>
        <p class="para">Get the team which can top the grand league on fantasy platforms</p>
        <div class="buttons">
          <button type="button" class="btn btn-dark btn-lg download-button"
            v-on:click="this.$router.push({ path: '/register' })">Create now</button>
          <button type="button" class="btn btn-lg download-button btn-outline-light"
            onclick="window.location.href='https://en.wikipedia.org/wiki/Fantasy_cricket'"> Learn more</button>
        </div>
      </div>

      <div class="col-lg-6 right">
        <div class="title-image-container">
          <img class="title-image" src="/team.jpg" alt="team-mockup">
          <img class="title-image2" src="/team.jpg" alt="team-mockup">
          <img class="title-image3" src="/team.jpg" alt="team-mockup">
        </div>
      </div>

    </div>

  </div>



  <!-- Features -->


  <div class="feature-box">

    <div class="features">
      <div class="feature-box col-lg-4">
        <i class="icon fas fa-check-circle fa-4x"></i>
        <h3 class="feature-title">Easy to use.</h3>
        <p>So easy to use, just select combination and get your team.</p>
      </div>

      <div class="feature-box col-lg-4">
        <i class="icon fas fa-bullseye fa-4x"></i>
        <h3 class="feature-title">Best Teams</h3>
        <p>We use efficient algorithms to create best team.</p>
      </div>

      <div class="feature-box col-lg-4">
        <i class="icon fas fa-heart fa-4x"></i>
        <h3 class="feature-title">Maximum success</h3>
        <p>Win big via playing fantasy on different platforms</p>
      </div>
    </div>


  </div>
</template>

<style>
/* Set margin and padding to 0 for all elements */

/* Style for the top section */
/* Set margin and padding to 0 for all elements */
* {
  box-sizing: border-box;
}

.container-home {
  padding: 100px 0;
  background-color: #FF8C8C;
}

/* Style for the top section */
.top {
  display: flex;
  flex-direction: row;
  background-size: cover;
}

.big-heading {
  font-size: 48px;
  margin-bottom: 30px;
}

.para {
  text-align: center;
  font-size: 30px;
  margin-bottom: 50px;
  color: #3A3845;
}

.buttons {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.right {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title-image-container {
  position: relative;
  width: 45%;
  height: 500px;
}

.title-image {
  width: 100%;
  height: 100%;
  transform: rotate(15deg);
  border-radius: 5%;
  position: absolute;
  right: 40%;
  z-index: 1;
}

.title-image2 {
  width: 100%;
  height: 100%;
  transform: rotate(15deg);
  border-radius: 5%;
  position: absolute;
  right: 20%;
  z-index: 2;
}

.title-image3 {
  width: 100%;
  height: 100%;
  transform: rotate(15deg);
  border-radius: 5%;
  position: absolute;
  right: 1%;
  z-index: 3;
}

/* Style for the features section */

.feature-box {
  background-color: #FF8C8C;
  text-align: center;
  padding: 40px;
}

.features {
  margin: 7%;
  background-color: #FFE6E6;
  padding: 20px;
  display: flex;
  flex-direction: row;
}

.feature-box i {
  margin-bottom: 20px;
  color: #007bff;
}

.feature-title {
  font-size: 32px;
  margin-bottom: 20px;
  color: #3A3845;
}

/* Style for the buttons */
.download-button {
  margin-right: 20px;
}

.btn-dark {
  background-color: #343a40;
  border-color: #343a40;
}

.btn-outline-light {
  color: #343a40 !important;
  border-color: #fff;
}
</style>

