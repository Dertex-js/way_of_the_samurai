let store = {
    _state: {
        dialogsPage: {
            dialogs: [
                {id: 1, name: "Oleg"},
                {id: 2, name: "Azaliya"},
                {id: 3, name: "Denis"},
                {id: 4, name: "Artem"},
                {id: 5, name: "Tuna"},
                {id: 6, name: "Danis"}
            ],
            messages: [
                {id: 1, message: "Hi"},
                {id: 2, message: "How are u?"},
                {id: 3, message: "Have a nice day"}
            ],
        },
        profilePage: {
            posts: [
                {id: 1, message: "Hi, how are u?", likesCount: 12},
                {id: 2, message: "It's my first post", likesCount: 23}
            ],
            newPostText: "asdasda",
        },
        friendsNav: {
            friends: {
                friendTuna: {
                    name: "Tuna",
                    href: "https://sun1.ufanet.userapi.com/s/v1/ig2/xH4azlsKDTtUhRXxpDhtAfJkaI5qsYpfJRd_B8eygYMLqTV0L2Ao0pYIUXrJ5KSNw8XNKvHTcG_oJHpIGSH67pY7.jpg?size=50x50&quality=96&crop=1,133,329,329&ava=1",
                },
                friendDanis: {
                    name: "Danis",
                    href: "https://sun1.ufanet.userapi.com/s/v1/ig2/xWYzQR9QyqGCxIT02cAUmylgemcNOWEOaNLAWipRLvxXaS1MtmXeWadKjMk8qOGBWw5xgyqfVTKGEoIrjCUsiY5h.jpg?size=50x50&quality=95&crop=324,203,405,405&ava=1",
                },
                friendAzaliya: {
                    name: "Azaliya",
                    href: "https://sun1.ufanet.userapi.com/s/v1/ig2/XFqZ1dI_YYgKGn0Nndr5UzKPHpssWnAKlaVfZQx1wGpn8nWNCOtqaMzrLvgbrmWizBZQV5Tm4O_UUlH_vExv6v0l.jpg?size=50x50&quality=95&crop=288,531,1152,1152&ava=1",
                },
            }
        }
    },
    _callSubscriber() {
        console.log("ch")
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {
        if (action.type === "ADD-POST") {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ""
            this._callSubscriber(this._state)
        } else if (action.type === "UPDATE-NEW-POST-TEXT") {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state)
        }
    },
}

window.store = store
export default store;