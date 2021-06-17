import { db } from "../server/firebaseConfig";

class Chat {
  constructor(groupChat, users, messages) {
    this.groupChat = groupChat;
    this.users = users;
    this.messages = messages;
  }

  toString() {
    return (
      "groupchat: " +
      this.groupChat +
      "\n, users: " +
      this.users +
      "\n, messages:" +
      this.messages
    );
  }
  sendMessage(message){
    //TODO: Logic
  }  
}

// Firestore data converter
var chatConverter = {
  toFirestore: function (chat) {
    return {
      groupChat: chat.groupChat,
      users: chat.users,
      messages: chat.messages,
    };
  },
  fromFirestore: function (snapshot, options) {
    const data = snapshot.data(options);
    // return new Chat(data.groupChat, data.users, data.messages);
    // return new Chat(data.groupChat, data.users, snapshot.collection('messages'));
    // return new Chat(data.groupChat, data.users, snapshot.listCollections());
    return new Chat(data.groupChat, data.users, "not working"); //TODO: return messages 
  },
};

function getChatsFromUID(uid) {//TODO: fix function
  db.collection("chat")
    .where("users", "array-contains", uid)
    // .doc("bu6oma6GIOiqAIPRLWk9")
    .withConverter(chatConverter)
    .get()
    .then((doc) => {
      if (doc.exists) {
        return doc.data();
      } else {
        console.log("No such document!");
      }
    })
    .catch((error) => {
      console.log("Error getting document:", error);
    });
}
export { Chat, chatConverter, getChatsFromUID };
