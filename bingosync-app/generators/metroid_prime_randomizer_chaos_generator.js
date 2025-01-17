bingoGenerator = require("./generators/generator_bases/simple_generator.js");

var bingoList = [
    "1 Beam Combo",
    "1 Elite Pirate",
    "1 Major Boss",
    "1 Power Bomb Expansion",
    "1 Sheegoth",
    "1 Suit",
    "100 Missiles",
    "12 E-Tanks",
    "130 Missiles",
    "2 Beam Combos",
    "2 Elite Pirates",
    "2 Major Bosses",
    "2 Mini-Bosses",
    "2 Plated Beetles",
    "2 Power Bomb Expansions",
    "2 Sheegoths",
    "2 Suits",
    "3 Beam Combos",
    "3 E-Tanks",
    "3 Elite Pirates",
    "3 Major Bosses",
    "3 Mini-Bosses",
    "3 Power Bomb Expansions",
    "3 Sheegoths",
    "3 Suits",
    "30% Scan Completion",
    "4 Beam Combos",
    "4 Major Bosses",
    "4 Mini-Bosses",
    "4 Power Bomb Expansions",
    "4 Sheegoths",
    "40 Missiles",
    "5 Mini-Bosses",
    "6 E-Tanks",
    "70 Missiles",
    "9 E-Tanks",
    "Activate the Observatory",
    "All Beams (4)",
    "All Hall of the Elders Bomb Slots",
    "All Morph Ball Systems (4)",
    "Boost Ball",
    "Both Visors",
    "Break 3 Super Missile Walls",
    "Break 3 walls with Power Bomb",
    "Break 5 Super Missile Walls",
    "Check all 3 Beam Locations",
    "Cloaked Drone",
    "Defeat 1 Large Enemy with Flamethrower",
    "Defeat 13 different Metroids",
    "Defeat 3 Ice Pirates with Ice Spreader",
    "Defeat 3 Plasma Pirates with Flamethrower",
    "Defeat 3 Power Pirates with Super Missiles",
    "Defeat 3 Wave Pirates with Wavebuster",
    "Defeat 5 different Metroids",
    "Defeat 9 different Metroids",
    "Defeat Flying Pirates in 3 Rooms",
    "Defeat Flying Pirates in 6 Rooms",
    "Defeat Flying Pirates in 9 Rooms",
    "Defeat Ghosts in 2 Rooms",
    "Defeat Ghosts in 4 Rooms",
    "Defeat Ghosts in 6 Rooms",
    "Defeat Shadow Pirates in 2 Rooms",
    "Defeat Shadow Pirates in 4 Rooms",
    "Defeat Shadow Pirates in 6 Rooms",
    "Defeat all Hunter Metroids (Fungal Hall A)",
    "Flaahgra",
    "Flamethrower",
    "Get 1 Duplicate or Nothing Item",
    "Get Arbor Chamber Item",
    "Get Biohazard Containment Item",
    "Get Dynamo Item (upper)",
    "Get Elder Chamber Item",
    "Get Furnace Item (upper)",
    "Get Gravity Chamber Item (lower)",
    "Get Gravity Chamber Item (upper)",
    "Get Life Grove Tunnel Item",
    "Get Magmoor Workstation Item",
    "Get Main Plaza Tree Item",
    "Get Metroid Quarantine B Item",
    "Get Phazon Mining Tunnel Item",
    "Get Phendrana Shorelines Item (Spider Track)",
    "Get Plasma Processing Item",
    "Get Processing Center Access Item",
    "Get Quarantine Monitor Item",
    "Get Research Core Item",
    "Get Research Lab Hydra Item",
    "Get Ruined Courtyard Item",
    "Get Ruined Gallery Item (morph track)",
    "Get Storage Cave Item",
    "Get Storage Depot A Item",
    "Get Sunchamber Ghosts Item",
    "Get Tower of Light Item",
    "Get Training Chamber Item",
    "Grapple Beam",
    "Gravity Suit",
    "Hive Mecha",
    "Ice Beam",
    "Ice Spreader",
    "Incinerator Drone",
    "Life Grove Ghosts",
    "Main Power Bombs",
    "Meta Ridley",
    "Morph Ball Bombs",
    "Omega Pirate",
    "Phazon Elite",
    "Phazon Suit",
    "Plasma Beam",
    "Plated Beetle",
    "Space Jump Boots",
    "Spider Ball",
    "Super Missiles",
    "Thardus",
    "Thermal Visor",
    "Use 1 Chozo Save Station",
    "Use 1 Magmoor Save Station",
    "Use 1 Map Station",
    "Use 1 Mines Save Station",
    "Use 1 Missile Station",
    "Use 1 Phendrana Save Station",
    "Use 10 Spinners (must have Boost)",
    "Use 2 Chozo Save Stations",
    "Use 2 Magmoor Save Stations",
    "Use 2 Map Stations",
    "Use 2 Mines Save Stations",
    "Use 2 Missile Stations",
    "Use 2 Phendrana Save Stations",
    "Use 3 Map Stations",
    "Use 5 Spinners (must have Boost)",
    "Use 7 Spinners (must have Boost)",
    "Use a Save Station in each Region",
    "Use the Frigate Save Station",
    "Varia Suit",
    "Wave Beam",
    "Wavebuster",
    "X-Ray Visor"
];
