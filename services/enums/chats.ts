export const Chats = [
    {
        profileURL: '/assets/images/Fortune.jpg',
        sender: 'Fortune Alebiosu',
        messages: [
            {
                _id: "fortunemsg1",
                content: 'Hello!',
                createdAt: 'Fri Oct 14 2022 14:18:27 GMT+0100 (West Africa Standard Time)',
            },
            {
                _id: "fortunemsg2",
                me: true,
                content: 'A new message!',
                createdAt: 'Fri Oct 14 2022 15:18:27 GMT+0100 (West Africa Standard Time)',
            },
            {
                _id: "fortunemsg3",
                me: true,
                content: 'How are you doing Fortune?',
                createdAt: 'Fri Oct 14 2022 16:18:27 GMT+0100 (West Africa Standard Time)',
            },
            {
                _id: "fortunemsg4",
                content: 'I am very fine and you?',
                createdAt: 'Fri Oct 14 2022 17:05:27 GMT+0100 (West Africa Standard Time)',
            },
            {
                _id: "fortunemsg5",
                me:true,
                content: 'That is very fine to hear, testing our application, my message limit and size. By the way this app is also beautiful.',
                createdAt: 'Fri Oct 14 2022 17:10:27 GMT+0100 (West Africa Standard Time)',
            }

        ],
        dateCreated: 'Wed Oct 11 2022 22:26:24 GMT+0100 (West Africa Standard Time)',
        id: 1,
        opened: false
    },
    {
        profileURL: '/assets/users/mubarak-showole.jpg',
        sender: 'Mubarak Showole',
        messages: [],//'Hi John, nice connecting with you'
        dateCreated: 'Wed Oct 12 2022 20:26:24 GMT+0100 (West Africa Standard Time)',
        id: 2,
        opened: true
    },
    {
        profileURL: '/assets/users/favour-adeyemi.jpg',
        sender: 'Favour Adeyemi',
        messages: [], //'What programming language do you work with?'
        dateCreated: 'Wed Oct 12 2021 22:26:24 GMT+0100 (West Africa Standard Time)',
        id: 3,
        opened: true
    }

]

export interface ChatProps {
    id: number,
    dateCreated: any,
    profileURL: string,
    sender: string,
    messages: {
        _id: string,
        content: string,
        createdAt: string,
        me?: boolean,
    }[],
    opened: boolean
}