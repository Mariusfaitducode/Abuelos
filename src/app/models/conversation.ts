

export class Conversation{


    uid: string = "";
    users: string[] = [];
    messages: {
        uid: string,
        content: string,
        date: string,
        sender: string,
    }[] = [];
    // lastMessage: {
    //     uid: string,
    //     content: string,
    //     date: string,
    //     sender: string,
    // } = {
    //     uid: "",
    //     content: "",
    //     date: "",
    //     sender: "",
    // };
    date: string = "";
}