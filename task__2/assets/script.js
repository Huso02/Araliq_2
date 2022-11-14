class Message {
    constructor(author, text) {
        this.author = author;
        this.text = text;
        this.sendTime = this.gettime();
    }
    gettime() {
        let time = new Date
        return `${time.getHours()}:${time.getMinutes()}`
    }
    toString() {
        return `${this.sendTime}: ${this.author} : ${this.text}`
    }
}
class Messenger {
    messages = []
    show_history() {
        this.messages.map(h => console.log(h.toString()));
    }
    send=(author,text)=>{
        let message = new Message(author,text);
        this.messages.push(message);
    }
}

let messenger = new Messenger()
messenger.send('Adil', 'ilk mesaj')
messenger.send('Məryəm', 'İkinci mesaj')
messenger.show_history()