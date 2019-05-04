const Command = require("./Command.js");

class TestCommand extends Command {
  constructor(chatService, queueService, discord, dbService) {
    super("test");
    super.help = "for testing - duh!";
    super.usage = "<prefix>test";
    super.alias = ["test"];
    this.chatService = chatService;
    this.queueService = queueService;
    this.discord = discord;
    this.dbService = dbService;
  }

  run(payload, msg) {
    console.log("Testing...");
    this.dbService.getPlaylist(payload).then((songs) => {
      songs.forEach((song) => {
        console.log(`${song.title} - ${song.artist}`);
        this.chatService.basicNote(msg.channel, `\`\`\`${song.title} - ${song.artist}\`\`\``);
      });
    });
  }
}

module.exports = TestCommand;
