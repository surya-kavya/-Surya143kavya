function giveHug() {

    const messages = [
        "Sending you the biggest hug ever! ❤️",
        "I wish I could hug you right now! 🥺",
        "Close your eyes and feel my hug! 🫂",
        "You are my favourite person! ❤️",
        "One day, I'll give you the longest hug! 💗"
    ];

    const random = Math.floor(Math.random() * messages.length);

    document.getElementById("message").innerHTML = messages[random];

}
