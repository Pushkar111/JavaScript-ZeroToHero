const outputDiv = document.getElementById("output");

const selectPlayer = async () => {
    outputDiv.innerHTML += "<p>=== Selecting player ===</p>";
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const players = ["Kohli", "Dhoni", "Rahul", "Rohit", "Pant", "Jadeja", "Bumrah", "Shami", "Surya", "Iyer", "Chahal", "Kuldeep"];
            resolve(players);
        }, 2000);
    });
};

const startMatch = async (players) => {
    outputDiv.innerHTML += "<p>=== Starting match ===</p>";

    return new Promise((resolve) => {
        setTimeout(() => {
            const scoreBoard = Object.values(players).map((player) => {
                return {
                    name: player,
                    score: Math.floor(Math.random() * 100),
                };
            });
            resolve(scoreBoard);
        }, 2000);
    });
};

const playMatch = async () => {
    outputDiv.innerHTML += "<p>===---===---===---=== Playing match ===---===---===---===</p>";

    let players = await selectPlayer();
    outputDiv.innerHTML += `<p>Players selected: ${players.join(", ")}</p>`;

    let scoreBoard = await startMatch(players);
    outputDiv.innerHTML += `<p>Match started and ScoreBoard is : </p>`;
    
    scoreBoard.forEach((player) => {
        outputDiv.innerHTML += `<p>${player.name}: ${player.score}</p>`;
    });
};

playMatch();
