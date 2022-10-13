export const Chats = [
    {
        profileURL: '/assets/images/Fortune.jpg',
        sender: 'Fortune Alebiosu',
        message: [
            {
                _id: "fortunemsg1",
                content: 'Hello!',
                createdAt: 'Wed Oct 11 2022 22:26:24 GMT+0100 (West Africa Standard Time)',
            },
            {
                _id: "fortunemsg2",
                me: true,
                content: 'A new message!',
                createdAt: 'Wed Oct 11 2022 22:26:24 GMT+0100 (West Africa Standard Time)',
            }
        ],
        dateCreated: 'Wed Oct 11 2022 22:26:24 GMT+0100 (West Africa Standard Time)',
        id: 1,
        opened: false
    },
    {
        profileURL: '/assets/users/mubarak-showole.jpg',
        sender: 'Mubarak Showole',
        message: [],//'Hi John, nice connecting with you'
        dateCreated: 'Wed Oct 12 2022 20:26:24 GMT+0100 (West Africa Standard Time)',
        id: 2,
        opened: true
    },
    {
        profileURL: '/assets/users/favour-adeyemi.jpg',
        sender: 'Favour Adeyemi',
        message: [], //'What programming language do you work with?'
        dateCreated: 'Wed Oct 12 2021 22:26:24 GMT+0100 (West Africa Standard Time)',
        id: 3,
        opened: false
    }

]

export interface ChatProps {
    id: number,
    dateCreated: any,
    profileURL: string,
    sender: string,
    message: {
        _id: string,
        content: string,
        createdAt: string,
        me?: boolean,
    }[],
    opened: boolean
}