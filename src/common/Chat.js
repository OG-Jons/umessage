import { RestoreOutlined } from "@material-ui/icons";
import { db } from "../server/firebaseConfig";
import { Message, messageConverter } from "./Message";

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
    const messages = async () => {
      await this.messageCollection.withConverter(messageConverter).get().then((querySnapshot) => {
        let messages = [];
        querySnapshot.forEach((message) => {
          messages.push(message.data());
        });
        console.log(messages)
        return messages;
      });
    }

    let returnString = "id: " +
      this.id +
      "groupchat: " +
      this.groupChat +
      "\n, users: " +
      this.users +
      "\n, messages: " +
      messages().then(messages => returnString + messages);
      // "\n, messages: ";
      // messages().then(message => returnString.concat(message.toString()))

    return returnString;
  }

  sendMessage(message) {
    console.log(message);
    this.messageCollection.withConverter(messageConverter).set(new Message(null, message, "null", "test"));
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
  var result = [];
  await db.collection("chat")
    .where("users", "array-contains", uid)
    .withConverter(chatConverter)
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        result.push(doc.data());
      })
    }).catch((error) => {
      return ("Error getting documents: ", error);
    });
  return result;
}

export { Chat, chatConverter, getChatsFromUID };
