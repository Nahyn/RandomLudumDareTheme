const themeList = [
    "Delay the inevitable",
    "Fragile",
    "Make connections",
    "Mutation",
    "Teleportation",
    "A single resource",
    "Folklore",
    "Shelter",
    "Infestation",
    "Road trip",
    "Tunnels",
    "Overgrown",
    "Out of order",
    "Space is limited",
    "Combine",
    "Garden",
    "Sky pirates",
    "Echoes",
    "You are the power source",
    "Crossroads",
    "Repair",
    "Branching out",
    "Momentum",
    "Strength in numbers",
    "Decay",
    "Treasure Map",
    "Fill the void",
    "Some assembly required",
    "Playing both sides",
    "One use only",
    "Replication",
    "Automation",
    "Layers",
    "Corruption",
    "Color is a mechanic",
    "Overflow",
    "You control the environment, not the character",
    "Leave something behind",
    "Snowball effect",
    "A faithful companion",
    "Become the enemy",
    "Read the manual",
    "Outnumbered",
    "One tool, many purposes",
    "Clockwork",
    "Parasite",
    "Different every time",
    "Mirror",
    "Out of bounds"
]

function getRandomNumber(_max) {
    return Math.floor(Math.random() * (_max + 1))
}

function getRandomTheme(_count = 1) {
    const result = [];

    for (let i = 0; i < _count; i++) {
        let randomTheme
        console.log(`Random number : ${i}`)

        while (randomTheme != undefined && !result.some(_aaaa => _aaaa == randomTheme)) {
            randomTheme = themeList[getRandomNumber(themeList.length)]
            console.log(randomTheme)

            if (!result.some(_aaaa => _aaaa == randomTheme)) {
                result.push(randomTheme)
            }
        }
    }

    return result;
}