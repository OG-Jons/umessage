class Message {
	constructor (id, message, picture, uid ) {
		this.id = id;
		this.message = message;
		this.picture = picture;
		this.uid = uid;
	}

	toString() {
		return 'id: ' +
        this.id +
        'message: ' +
        this.message +
        '\n, picture: ' +
        this.picture +
        '\n, uid: ' +
        this.uid;
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
		return new Message(snapshot.id, data.message, data.picture, data.uid);
	}
};

export { Message, messageConverter};
