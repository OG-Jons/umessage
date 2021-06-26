import { db } from "../server/firebaseConfig";
import { messageConverter } from "./Message";

class Chat {
  constructor(id, groupChat, users) {
    this.id = id;
    this.groupChat = groupChat;
    this.users = users;
    this.messageCollection = db
      .collection("chat")
      .doc(this.id)
      .collection("messages");
  }

  toString() {
    return (
      "id: " +
      this.id +
      "groupchat: " +
      this.groupChat +
      "\n, users: " +
      this.users
    );
  }
  sendMessage(message) {
    console.log(message);
    this.messageCollection.withConverter(messageConverter);
  }

  getMessageCollection() {
    return this.messageCollection;
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
    return new Chat(snapshot.id, data.groupChat, data.users);
  },
};

async function getChatsFromUID(uid) {
  db.collection("chat")
  .where("users", "array-contains", uid)
  .withConverter(chatConverter)
  .get()  
  .then((querySnapshot) => {
    // console.log(querySnapshot.map(doc => doc.data()));
    // let tmp = querySnapshot.map(doc => doc.data());
    // console.log("test");
    // return tmp;

    let myPromise = new Promise((reolve)=>{
      var result = [];
        querySnapshot.forEach( (doc) => {
          // doc.data() is never undefined for query doc snapshots
          // console.log(doc.data());
          // console.log(doc.data());
          result.push(doc.data());
        });
        console.log("test");
        console.log(result);
    });
    return myPromise;
    }).catch((error) => {
      return ("Error getting documents: ", error);
    });
}

export { Chat, chatConverter, getChatsFromUID };
