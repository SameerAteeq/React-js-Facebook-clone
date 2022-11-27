import { AccessTime, AccountCircle, Add, AddPhotoAlternate, Bookmark, EmojiEmotions, EmojiFlags, Event, GifBox, Group, Groups, Home, LocationOn, Menu, Message, MoreHoriz, Notifications, OndemandVideo, People, Person, PersonAdd, PhotoLibrary, Redeem, Star, StickyNote2, Storefront, WorkHistory } from "@mui/icons-material";

export const NavbarMidIcons = [
    {
        id: 1,
        icon: <Home sx={{ fontSize: "36px" }} />,
        tooltip: "Home",
        link: "/",
        active: true,
    },
    {
        id: 2,
        icon: <People sx={{ fontSize: "36px" }} />,
        tooltip: "Friends",
        link: "/friends",
        active: true,

    },
    {
        id: 3,
        icon: <OndemandVideo sx={{ fontSize: "36px" }} />,
        tooltip: "Watch",
        link: "/watch",
        active: true,
    },
    {
        id: 4,
        icon: <Storefront sx={{ fontSize: "36px" }} />,
        tooltip: "Marketplace",
        link: "/marketplace",
        active: true,
    },
    {
        id: 5,
        icon: <Groups sx={{ fontSize: "36px" }} />,
        tooltip: "Groups",
        link: "/group",
        active: true,
    },
]

export const NavbarRightIcons = [
    {
        id: 1,
        icon: <Menu />,
        tooltip: "Menu"
    },
    {
        id: 2,
        icon: <Message />,
        tooltip: "Messenger",
        onclick
    },
    {
        id: 3,
        icon: <Notifications />,
        tooltip: "Notifications"
    },
    {
        id: 4,
        icon: <AccountCircle />,
        tooltip: "Account"
    },

]

export const HomeSidebarData = [
    {
        id: 1,
        name: "Muhammad Sameer",
        icon: <AccountCircle sx={{ fontSize: "24px", color: "#008ad3" }} />
    },
    {
        id: 2,
        name: "Find friends",
        icon: <People sx={{ fontSize: "24px", color: "#008ad3" }} />
    },
    {
        id: 3,
        name: "Groups",
        icon: <Groups sx={{ fontSize: "24px", color: "#008ad3" }} />
    },
    {
        id: 4,
        name: "Marketplace",
        icon: <Storefront sx={{ fontSize: "24px", color: "#008ad3" }} />
    },
    {
        id: 5,
        name: "Watch",
        icon: <OndemandVideo sx={{ fontSize: "24px", color: "#008ad3" }} />
    },
    {
        id: 6,
        name: "Memories",
        icon: <AccessTime sx={{ fontSize: "24px", color: "#008ad3" }} />
    },
    {
        id: 7,
        name: "Saved",
        icon: <Bookmark sx={{ fontSize: "24px", color: "#6e4c87" }} />
    },
    {
        id: 8,
        name: "Pages",
        icon: <EmojiFlags sx={{ fontSize: "24px", color: "#008ad3" }} />
    },
    {
        id: 9,
        name: "Events",
        icon: <Event />
    },
    {
        id: 10,
        name: "Mostt Recents",
        icon: <WorkHistory sx={{ fontSize: "24px", color: "#008ad3" }} />
    },
    {
        id: 11,
        name: "Favourites",
        icon: <Star sx={{ fontSize: "24px", color: "#008ad3" }} />
    },
]


export const fakeUsers = [
    {
        id: 1,
        name: "Muhammad Rizwan ",
        imgUrl: "https://images.unsplash.com/photo-1610088441520-4352457e7095?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fG1lbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: 2,
        name: "Muhammad Shariq",
        imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNtq1DC1ezyLmT4L0DDz2Z-jBOiQIhZtEHiRM0-HmMMFdgJFvc7EKdDmdGevVCXvnOjh8&usqp=CAU"
    },
    {
        id: 3,
        name: "Waqas Ameen",
        imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjb-Jsep9tAcYMGcwnDZl9MuXwtJ87LMh-KkFZT04M9XQRs6I0mWi4GJcUD7bTPEOAXRU&usqp=CAU"
    },
    {
        id: 4,
        name: "Huzaifa Sheikh",
        imgUrl: "https://images.unsplash.com/flagged/photo-1573740144655-bbb6e88fb18a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: 5,
        name: "Hamza Ahmed",
        imgUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: 6,
        name: "Muhammad Hassan",
        imgUrl: "https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: 7,
        name: "Ahsan Jamal Bhatti",
        imgUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
    },
]

export const messengerChat = [
    {
        id: 1,
        icon: <Add sx={{ fontSize: "24px", color: "#008ad3" }} />,
        tooltip: "Open more actions"
    },
    {
        id: 2,
        icon: <PhotoLibrary sx={{ fontSize: "24px", color: "#008ad3" }} />,
        tooltip: "Attach a file"
    },
    {
        id: 3,
        icon: <StickyNote2 sx={{ fontSize: "24px", color: "#008ad3" }} />,
        tooltip: "Choose a sticker"
    },
    {
        id: 4,
        icon: <GifBox sx={{ fontSize: "24px", color: "#008ad3" }} />,
        tooltip: "Choose a gif"
    },
]

export const StoriesData = [
    {
        id: 1,
        name: "Muhammad Rizwan",
        imgUrl: "https://images.unsplash.com/photo-1610088441520-4352457e7095?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fG1lbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        storyImg: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        view: "24k"
    },
    {
        id: 2,
        name: "Muhammad Shariq",
        imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNtq1DC1ezyLmT4L0DDz2Z-jBOiQIhZtEHiRM0-HmMMFdgJFvc7EKdDmdGevVCXvnOjh8&usqp=CAU",
        storyImg: "https://images.unsplash.com/photo-1668895048775-042ffa95a139?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4Nnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
        view: "12k"
    },
    {
        id: 3,
        name: "Waqas Ameen",
        imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjb-Jsep9tAcYMGcwnDZl9MuXwtJ87LMh-KkFZT04M9XQRs6I0mWi4GJcUD7bTPEOAXRU&usqp=CAU",
        storyImg: "https://images.unsplash.com/photo-1667648237074-5c37fc417172?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3MXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
        view: "142k"
    },
    {
        id: 4,
        name: "Huzaifa Sheikh",
        imgUrl: "https://images.unsplash.com/flagged/photo-1573740144655-bbb6e88fb18a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        storyImg: "https://images.unsplash.com/photo-1669023025155-f22f78d4c457?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1N3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
        view: "362k"
    },
    {
        id: 5,
        name: "Ahsan Jamal Bhatti",
        imgUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        storyImg: "https://images.unsplash.com/photo-1668879109759-696729a15215?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0NXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
        view: "102k"
    },

]


export const PostUploadIcons = [
    {
        id: 1,
        icon: <PhotoLibrary sx={{ fontSize: "24px", color: "#7bdc3f" }} />,
        tooltip: "Photo/video"
    },
    {
        id: 2,
        icon: <Person sx={{ fontSize: "24px", color: "#008ad3" }} />,
        tooltip: "Tag people"
    },
    {
        id: 3,
        icon: <EmojiEmotions sx={{ fontSize: "24px", color: "#Dce433" }} />,
        tooltip: "Feeling/activity"
    },
    {
        id: 4,
        icon: <LocationOn sx={{ fontSize: "24px", color: "#Be2525" }} />,
        tooltip: "Check in"
    },
    {
        id: 5,
        icon: <EmojiFlags sx={{ fontSize: "24px", color: "#008ad3" }} />,
        tooltip: "Life events"
    },
    {
        id: 6,
        icon: <MoreHoriz sx={{ fontSize: "24px", color: "#gray" }} />,
        tooltip: "More"
    },
]

export const friendsSidebar = [
    {
        id: 1,
        name: "Home",
        icon: <Group sx={{ fontSize: "24px", color: "#008ad3" }} />,
        link: "/friends"
    },
    {
        id: 2,
        name: "Freind Request",
        icon: <PersonAdd sx={{ fontSize: "24px" }} />,
        link: "/friends/request"
    },
    {
        id: 3,
        name: "Suggestions",
        icon: <PersonAdd sx={{ fontSize: "24px" }} />
    },
    {
        id: 4,
        name: "All Friends",
        icon: <Group sx={{ fontSize: "24px" }} />
    },
    {
        id: 5,
        name: "Birthday",
        icon: <Redeem sx={{ fontSize: "24px" }} />
    },
    {
        id: 6,
        name: "Custom List",
        icon: <Group sx={{ fontSize: "24px" }} />
    },

]

export const UserLinks = [
    {
        id: 1,
        name: "Posts",
        link: "post"
    },
    {
        id: 2,
        name: "About",
        link: "about"
    },
    {
        id: 3,
        name: "Friends",
        link: "friends"
    },
    {
        id: 4,
        name: "Photos",
        link: "photos"
    },
    {
        id: 5,
        name: "Videos",
        link: "photos"
    },
    {
        id: 6,
        name: "Check-in",
        link: "photos"
    },
]