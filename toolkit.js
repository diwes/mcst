let exec = require('child_process').exec, child;
let fs = require("fs");
if (process.argv[2] != null) {
    if (process.argv[2].toLowerCase() === "v") {
        console.log("1.0");
    }
    if (process.argv[2].toLowerCase() === "eula:true")
    {
        fs.writeFile("./builds/"+process.argv[3]+"/eula.txt", "eula=true", (err) => {
            console.log("eula created")
        });
    }
    if (process.argv[2].toLowerCase() === "sp:enable")
    {
        fs.writeFile("./builds/"+process.argv[3]+"/server.properties", "generator-settings=\n" +
            "op-permission-level=4\n" +
            "allow-nether=true\n" +
            "resource-pack-hash=\n" +
            "level-name=world\n" +
            "allow-flight=false\n" +
            "announce-player-achievements=true\n" +
            "server-port=25565\n" +
            "max-world-size=29999984\n" +
            "level-type=DEFAULT\n" +
            "level-seed=\n" +
            "force-gamemode=false\n" +
            "server-ip=127.0.0.1\n" +
            "network-compression-threshold=256\n" +
            "max-build-height=256\n" +
            "spawn-npcs=true\n" +
            "white-list=false\n" +
            "spawn-animals=true\n" +
            "hardcore=false\n" +
            "snooper-enabled=true\n" +
            "online-mode=false\n" +
            "resource-pack=\n" +
            "pvp=true\n" +
            "difficulty=1\n" +
            "enable-command-block=false\n" +
            "gamemode=0\n" +
            "player-idle-timeout=0\n" +
            "max-players=2000\n" +
            "spawn-monsters=true\n" +
            "generate-structures=true\n" +
            "view-distance=10\n" +
            "motd=By Lunk_Play & FlexIce", (error) => {
            console.log("maked")
        });
    }
} else {
    console.log("Command does not exists");
}