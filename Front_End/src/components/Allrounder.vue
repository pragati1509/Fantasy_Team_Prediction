<script>
import axios from 'axios';
export default {
    methods:{
        async submit(){
            this.error = false;
            await axios.post('http://localhost:3000/allrounder',{
                jerseyNo : this.jerseyNo,
                name : this.name,
                team : this.team,
                matchesPlayed : this.matchesPlayed,
                runsScored : this.runsScored,
                wickets : this.wickets,
                average : this.average,
                economy : this.economy,
                error:this.error
            }).then(res =>{
                  this.$router.push({path:'/success'});
            }).catch(error => {
                  this.error = true;
            })
        }
    },
    data() {
        return {
            jerseyNo:'',
            name:'',
            team:'',
            matchesPlayed:'',
            runsScored:'',
            wickets:'',
            average:'',
            economy:'',
            error:false,
        }
    }
}
</script>

<template>
    <div v-if="error" class="error">
      <p class="error-message">the player already exists</p>
    </div>
    <h1 class="heading">Add Allrounder</h1>
    <form @submit.prevent="submit">
        <div class="reg-page">
            <div class="left-container">
               <div>
                <label for="jersey">Jersey number: </label>
                <input type="number" step="1" placeholder="jersey number" min="0" v-model="jerseyNo" required>
               </div>

               <div>
                <label for="name">name: </label>
                <input type="text" placeholder="name"  v-model="name" required>
               </div>

               <div>
                <label for="team">Team : </label>
                <input type="text" placeholder="Team Name" v-model="team" required>
               </div>

               <div>
                <label for="matches">Matches: </label>
                <input type="number" step="1" placeholder="Matches played" min="0" v-model="matchesPlayed" required>
               </div>

               <div>
                <label for="Runs">Runs: </label>
                <input type="number" step="1" placeholder="Runs scored" min="0" v-model="runsScored" required>
               </div>

               <div>
                <label for="wickets">Wickets: </label>
                <input type="number" placeholder="wickets" min="0" v-model="wickets" required>
               </div>

               <div>
                <label for="Average">Average: </label>
                <input type="number" step="0.01" placeholder="Average" min="0" v-model="average" required>
               </div>

               <div>
                <label for="economy">economy: </label>
                <input type="number" step="0.01" placeholder="economy" min="0" v-model="economy" required>
               </div>


                <div class="button">
                    <button type="submit" id="apply" name="button">Add Player</button>
                </div>
            </div>
        </div> 
    </form>
</template>