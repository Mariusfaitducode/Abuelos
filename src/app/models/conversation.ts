

export class Conversation{


    uid: string = '';
    users: string[] = [];
    
    messages: {
        uid: string,
        content: string,
        date: string,
        senderId: string,
    }[] = [];
    
    date: string = '';
}


export class Message{
    
    message : string = '';
    conversationId : string = '';
    senderId : string = '';
    receiverId : string = '';
}