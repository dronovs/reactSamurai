import { rerenderEntireTree } from "../render";

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'HELLO REACT', likes: 10},
            {id: 2, message: 'World', likes: 100},
            {id: 3, message: 'It is my first post', likes: 1011},
            {id: 4, message: 'YO', likes: 1232},
        ],
        newPostText: '',
    },
    dialogsPage: {
        dialogs: [
            { id: 1, name: 'Mufasa', photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdlMd7stpWUCmjpfRjUsQ72xSWikidbgaI1w&usqp=CAU', },
            { id: 2, name: 'Luperkal', photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeuBfEFCjbdnfEYIE_BVX33Y07b5xhOoldDg&usqp=CAU', },
            { id: 3, name: 'GulDan', photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRil82tJpnOXxZI0hW_X4kxmkW2pwpHhNmmIA&usqp=CAU', },
            { id: 4, name: 'Malfuryon', photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6Tjcu9ErCJoP45FrpB2urGKq-wO8SAb7_VA&usqp=CAU', },
            { id: 5, name: 'Illidan', photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxd0SYP37P4j1qbCoZbzFDMFChum1YT6wOQA&usqp=CAU', },
            { id: 6, name: 'Valakas', photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREyp_VZGuEpwMI2l7MXxKZyIu9AcN6VgQElQ&usqp=CAU', },
            { id: 7, name: 'Me', photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjC6Ue7qOOofEJSHWyTnCYJ1Go2gNWyRtMhA&usqp=CAU', },
        ],
        messages: [
            {id: 1, message: 'HELLO'},
            {id: 2, message: 'How are you doing?'},
            {id: 3, message: 'Look what I have done)'},
            {id: 4, message: 'Is it good?'},
            {id: 5, message: 'Good enough'},
        ],
    },
    friendsAside: {
        friends: [
            { id: 1, name: 'Mufasa', photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdlMd7stpWUCmjpfRjUsQ72xSWikidbgaI1w&usqp=CAU', },
            { id: 2, name: 'Luperkal', photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeuBfEFCjbdnfEYIE_BVX33Y07b5xhOoldDg&usqp=CAU', },
            { id: 3, name: 'GulDan', photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRil82tJpnOXxZI0hW_X4kxmkW2pwpHhNmmIA&usqp=CAU', },
            { id: 4, name: 'Malfuryon', photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6Tjcu9ErCJoP45FrpB2urGKq-wO8SAb7_VA&usqp=CAU', },
            { id: 5, name: 'Illidan', photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxd0SYP37P4j1qbCoZbzFDMFChum1YT6wOQA&usqp=CAU', },
            { id: 6, name: 'Valakas', photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREyp_VZGuEpwMI2l7MXxKZyIu9AcN6VgQElQ&usqp=CAU', },
            { id: 7, name: 'Me', photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjC6Ue7qOOofEJSHWyTnCYJ1Go2gNWyRtMhA&usqp=CAU', },
        ]
    }
}


export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likes: 111,
    };

    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
}

export default state;