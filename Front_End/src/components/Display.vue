

<template>
    <div class="cricket-ground">
        <div class="player-row">
            <h2 class="role">Wicketkeepers</h2>
            <ul class="players">
                <li v-for="player in wicketkeepers" :key="player.name" class="each">{{ player.name }}<br>{{ player.team }}
                </li>
            </ul>
        </div>
        <div class="player-row">
            <h2 class="role">Batters</h2>
            <ul class="players">
                <li v-for="player in batters" :key="player.name">{{ player.name }}<br>{{ player.team }}</li>
            </ul>
        </div>
        <div class="player-row">
            <h2 class="role">Bowlers</h2>
            <ul class="players">
                <li v-for="player in bowlers" :key="player.name" class="each">{{ player.name }}<br>{{ player.team }}</li>
            </ul>
        </div>
        <div class="plyer-row">
            <h2 class="role">Allrounders</h2>
            <ul class="players">
                <li v-for="player in allrounders" :key="player.name" class="each">{{ player.name }}<br>{{ player.team }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>

export default {
    computed: {
        batters() {
            return this.players[0].Batters;
        },
        bowlers() {
            return this.players[1].Bowlers;
        },
        allrounders() {
            return this.players[2].Allrounders;
        },
        wicketkeepers() {
            return this.players[3].Wicketkeepers;
        },
        players() {
            return this.$store.getters.getPlayers;
        },
    },

}
</script>


<style>
.cricket-ground {
    margin: 7%;
    background-size: cover;
    background-color: green;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: cover;
    padding: 50px;
}

.player-row {
    display: block;
    align-items: center;
    justify-content: cover;
}

.role {
    display: block;
    text-align: center;
    color: #181D31;
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 10px;
}

.players {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
    list-style: none;
}

.players li {
    background-color: #BFEAF5;
    border-radius: 10px;
    width: 120px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
}

.payers li:hover {
    background-color: #e6e6e6;
}

.player li:active {
    background-color: #d9d9d9;
}
</style>