<script>
import axios from 'axios';

export default{
    methods:{
        async submit(){
            this.error = false;
            await axios.post('http://localhost:3000/wkeeper',{
                  jerseyNo:this.jerseyNo,
                  name:this.name,
                  team:this.team,
                  matchesPlayed:this.matchesPlayed,
                  runsScored:this.runsScored,
                  strikeRate:this.strikeRate,
                  catches:this.catches,
                  stumpings:this.stumpings
            }).then((res) => {
                 this.$router.push({path:'/success'})
            }).catch(error => {
                 this.error=true
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
            strikeRate:'',
            catches:'',
            stumpings:'',
            error:false
        }
    }
}
</script>

<template>
    <div v-if="error" class="error">
        <p class="error-message">the player already exists</p>
    </div>
    <h1 class="heading">Add Wicketkeeper</h1>
    <form @submit.prevent="submit">
        <div class="reg-page">
            <div class="left-container">
                <div>
                    <label for="jersey">Jersey number: </label>
                    <input type="number" step="1" placeholder="jersey number" min="0" v-model="jerseyNo" required>
                </div>

                <div>
                    <label for="name">name: </label>
                    <input type="text" placeholder="name" v-model="name" required>
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
                    <label for="StrikeRate">Strike-rate: </label>
                    <input type="number" step="0.01" placeholder="strikerate" min="0" v-model="strikeRate" required>
                </div>

                <div>
                    <label for="catches">Catches: </label>
                    <input type="number" step="1" placeholder="catches" min="0" v-model="catches" required>
                </div>

                <div>
                    <label for="stumpings">Stumpings: </label>
                    <input type="number" placeholder="stumpings" min="0" v-model="stumpings" required>
                </div>


                <div class="button">
                    <button type="submit" id="apply" name="button">Add Player</button>
                </div>
            </div>
        </div>
    </form>
</template>