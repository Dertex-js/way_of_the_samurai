let state = {
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
                href: "https://sun2.ufanet.userapi.com/s/v1/ig2/Pe5ATZjEpflHLLGjbxPOL_z93ULU8S1YHAbFoa6v0xjc2MZ1Fwpcyaz_f4gIJwPHAV6ewDp2qgN0r3kEa8JyhIDM.jpg?size=50x50&quality=96&crop=85,85,683,683&ava=1",
            },
        }
    }
}

export default state;