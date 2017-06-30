import { Message } from './../../models/messages/message.interface';
import { USER_LIST } from './../profiles/profiles';

const userList = USER_LIST;

const messageList: Message[] = [];

userList.forEach((user) => {
    messageList.push({user: user, date: new Date(), lastMessage: "Hello from "+user.firstName})
    messageList.push({user: user, date: new Date(), lastMessage: "Hello from "+user.firstName})
})

// const messageList : Message[] = [
//     { user: userList[0], date: new Date() },
//     { user: userList[1], date: new Date() },
//     { user: userList[2], date: new Date() },
//     { user: userList[3], date: new Date() }
// ];

export const MESSAGE_LIST = messageList;