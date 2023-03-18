let players = [2, 5, 3, 7, 8, 0, 9, 1, 4, 6];
let winner = Number(prompt("Enter Winner"));
let pos = 0;
for (i = 0; i < players.length; i++) {
    if (players[i] == winner) {
        pos = i;
    }
}
let temp = players[0];
players[0] = players[pos];
players[pos] = temp;
console.log(players);