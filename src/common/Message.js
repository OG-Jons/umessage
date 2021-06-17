class Message {
    constructor (message, picture, uid ) {
        this.message = message;
        this.picture = picture;
        this.uid = uid;
    }
    toString() {
        return this.message + ', ' + this.picture + ', ' + this.uid;
    }
}

// Firestore data converter
var messageConverter = {  
    toFirestore: function(message) {
        return {
            message: message.message,
            picture: message.picture,
            uid: message.uid};
    },
    fromFirestore: function(snapshot, options){
        const data = snapshot.data(options);
        return new Message(data.name, data.state, data.country);
    }
};

export { Message, messageConverter};
