let form = document.querySelector(".form");
let div = document.querySelector(".div");
form.addEventListener("submit", (e) => {
    let bitch = document.querySelector("input").value.trim().toLowerCase();
    console.log(bitch)
    if (bitch == "deffer555deffer") {
        alert("correct answer senara(elena), you got it right")
        e.preventDefault()
        div.classList.remove("hide");
    }
    else {
        alert("wrong answer elenaaa, unluckyyy, try again until you get it right")
    }
})




const BOT_TOKEN = "7559471656:AAGnR6BcJgeTFawOo9Feih6EpjvdhbhK2xw";
const CHAT_ID = "-1002302684450"

const lastButton = document.querySelector(".last");
const lastInput = document.querySelector(".div input[type='text']");

lastButton.addEventListener("click", async (e) => {
    e.preventDefault();

    const message = lastInput.value.trim();

    if (message === "") {
        alert("Please write a message first!");
        return;
    }

    try {
        await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                chat_id: CHAT_ID,
                text: `📩 New message: ${message}`
            })
        });

        alert("✅ Message sent successfully!");
        lastInput.value = "";
        document.body.innerHTML = "thx and .... off";
    } catch (error) {
        console.error("Error sending message:", error);
        alert("❌ Failed to send message. Please try again.");
    }
});
