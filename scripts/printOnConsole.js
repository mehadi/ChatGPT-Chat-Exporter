{
    const ajaxCall = () => {
        let allChatElements = document.getElementsByClassName("group w-full");

        // Select all the chat message elements
        const chatElements = document.querySelectorAll('.group');
        const chatData = [];
        let isUserMessage = true;

        for (const element of chatElements) {
            const messageElement = element.getElementsByClassName('whitespace-pre-wrap')[0];
            if (!messageElement) continue;

            const messageText = messageElement.innerText.trim();

            const chatItem = {
                user: isUserMessage ? 'User' : 'Bot',
                message: messageText
            };

            chatData.push(chatItem);
            isUserMessage = !isUserMessage;
        }

        // Print the JSON data
        console.log(JSON.stringify(chatData, null, 2));
    };

    ajaxCall();

}

