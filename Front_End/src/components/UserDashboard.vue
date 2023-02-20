

<script>
import axios from 'axios';

export default {
   methods: {
      validTeam() {
         const teamsize = this.combination.batters + this.combination.bowlers +
            this.combination.allrounders + this.combination.wicketkeepers;
         if (teamsize === 11)
            return true;
     
         return false;
      },
      async chooseBatter(){
         await axios.get('http://localhost:3000/batter',{
            params:{
               team1 : this.teams.team1,
               team2: this.teams.team2,
               limit:this.combination.batters,
            }
         }).then((res) => {
            const btrdata = res.data;
            this.players.push({Batters:btrdata});
         }).catch((err) => {
            console.log(err);
         })
      },
      async chooseBowler(){
         await axios.get('http://localhost:3000/bowler',{
            params:{
               team1 : this.teams.team1,
               team2: this.teams.team2,
               limit:this.combination.bowlers,
            }
         }).then((res) => {
            const bwldata = res.data;
            this.players.push({Bowlers:bwldata});
         }).catch((err) => {
            console.log(err);
         })
      },
      async chooseAllrounder(){
         await axios.get('http://localhost:3000/allrounder',{
            params:{
               team1 : this.teams.team1,
               team2: this.teams.team2,
               limit:this.combination.allrounders,
            }
         }).then((res) => {
            const alldata = res.data;
            this.players.push({Allrounders:alldata});
         }).catch((err) => {
            console.log(err);
         })
      },
      async chooseWicketkeeper(){
         await axios.get('http://localhost:3000/wkeeper',{
            params:{
               team1 : this.teams.team1,
               team2: this.teams.team2,
               limit:this.combination.wicketkeepers,
            }
         }).then((res) => {
            const wkdata = res.data;
            this.players.push({Wicketkeepers:wkdata});
         }).catch((err) => {
            console.log(err);
         })
      },
      createTeam(){
         this.showTeamButtons = true;
         document.getElementById("show-teams").focus();
      },
      teamsubmit() {
         this.teamsSelected = true;
      },
      async playersubmit() {
         if(!this.validTeam()){
            this.invalidteam=true;
            document.getElementsByClassName("error").focus();
         }else{
            await this.chooseBatter();
            await this.chooseBowler();
            await this.chooseAllrounder();
            await this.chooseWicketkeeper();
            this.$store.dispatch('setPlayers', this.players);
            this.$router.push('/display')
         }
      },
   },
   data() {
      return {
         teamsSelected: false,
         showTeamButtons: false,
         teams: {
            team1: 'CSK',
            team2: 'MI'
         },
         combination: {
            batters: 0,
            bowlers: 0,
            allrounders: 0,
            wicketkeepers: 0
         },
         players:[],
         invalidteam: false,
      }
   }
}
</script>

<template>

   <div class="container">
      <h1>Create Your Best Fantasy Team This IPL</h1>
      <p class="subtitle">Choose the best players and dominate the league</p>
      <button class="create-team-button" v-on:click="createTeam">Create Team Now</button>
   </div>


   <div v-if="showTeamButtons" class="team-select" id="show-teams" tabindex="0">
      <h1>Select your teams from here</h1>
      <form @submit.prevent="teamsubmit">
         <div class="team-selection-container">
            <label for="team1">Team 1:</label>
            <select class="team-selection" id="team1" v-model="teams.team1">
               <option value="CSK">CSK</option>
               <option value="DC">DC</option>
               <option value="KKR">KKR</option>
               <option value="MI">MI</option>
            </select>
         </div>
         <div class="team-selection-container">
            <label for="team2">Team 2:</label>
            <select class="team-selection" id="team2" v-model="teams.team2">
               <option value="CSK">CSK</option>
               <option value="DC">DC</option>
               <option value="KKR">KKR</option>
               <option value="MI">MI</option>
            </select>
         </div>
         <div class="team-selection-container">
            <button type="submit" class="create-team-button" v-on:click="teamsubmit">submit</button>
         </div>
      </form>
   </div>

   <div class="error" v-if="invalidteam">
      <p class="error-message">the team size must be equal to 11</p>
   </div>

   <div v-if="teamsSelected" class="team-select">

      <h1>Select your combination of players</h1>

      <div class="team-selection-container">
         <label for="batters">Batters:</label>
         <select class="team-selection" id="batters" v-model.number="combination.batters">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
         </select>
      </div>

      <div class="team-selection-container">
         <label for="bowlers">Bowlers:</label>
         <select class="team-selection" id="bowlers" v-model.number="combination.bowlers">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
         </select>
      </div>

      <div class="team-selection-container">
         <label for="allrounders">All-rounders:</label>
         <select class="team-selection" id="allrounders" v-model.number="combination.allrounders">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
         </select>
      </div>

      <div class="team-selection-container">
         <label for="wicketkeepers">Wicket-keepers:</label>
         <select class="team-selection" id="wicketkeepers" v-model.number="combination.wicketkeepers">
            <option value="1">1</option>
            <option value="2">2</option>
         </select>
      </div>

      <div class="team-selection-container">
         <button type="submit" class="create-team-button" v-on:click="playersubmit">submit</button>
      </div>

   </div>

</template>

<style>
.container {
   margin-top: 3%;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   background: linear-gradient(to right, #FF3B3F, #EF2F33);
   background: url('/cric-bg.jpg') no-repeat center center;
   background-size: cover;
   height: 100vh;
   font-family: 'Segoe UI', sans-serif;
}

h1 {
   font-size: 3rem;
   font-weight: bold;
   text-align: center;
   justify-content: center;
   color: #3C4048;
   text-shadow: 2px 2px #333333;
   margin-bottom: 1rem;
}

.subtitle {
   font-size: 1.8rem;
   text-align: center;
   color: #3C4048;
   text-shadow: 1px 1px #333333;
   margin-bottom: 2rem;
}

.create-team-button {
   background-color: #FF3B3F;
   color: #3C4048;
   font-size: 1.2rem;
   font-weight: bold;
   padding: 1rem 2rem;
   border: none;
   border-radius: 5px;
   cursor: pointer;
   transition: background-color 0.2s;
}

.create-team-button:hover {
   background-color: #EF2F33;
}

.team-select {
   margin: 6%;
   padding: 20px;
   background-color: #EAC7C7;
}

.team-selection-container {
   margin-top: 30px;
   display: flex;
   align-items: center;
   justify-content: center;
   margin-bottom: 10px;
}

.team-selection-container label {
   font-size: 18px;
   font-weight: bold;
   color: #333;
   text-shadow: 1px 1px #ccc;
   text-transform: uppercase;
}

.team-selection {
   margin-left: 20px;
   appearance: none;
   background-color: #FFFFFF;
   border: none;
   border-radius: 4px;
   color: #444;
   font-size: 1.2rem;
   padding: 8px 12px;
   width: 150px;
   box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
   transition: all 0.2s;
   cursor: pointer;
}

.team-selection:focus {
   outline: none;
   box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
   background-color: #fff;
}

.team-selection:hover {
   background-color: #fff;
}
</style>


