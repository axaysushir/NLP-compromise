// JavaScript Array methods.
let userlist = [
    {
        "id": "d9218fe4-ae03-48ae-af68-92b9289a42f3",
        "full_name": "Vivek Ganesan",
        "email": "vivek.ganesan@ampyard.com",
        "created_timestamp": "2021-05-25T19:36:14.756Z",
        "updated_timestamp": "2021-05-25T19:36:14.756Z",
        "external_id": "0055g000007E8QPAA0",
        "permissions": [
            "MANAGE_LICENSES",
            "MANAGE_USERS"
        ]
    },
    {
        "id": "bb24b9d5-30f9-4898-a10c-d494cda28b99",
        "full_name": "Jake Williams",
        "email": "caliberoviv@gmail.com",
        "created_timestamp": "2021-06-01T00:47:02.219Z",
        "updated_timestamp": "2021-06-01T00:47:02.219Z",
        "external_id": "0055g000009VUq1AAG",
        "permissions": [
            "MANAGE_LICENSES",
            "MANAGE_USERS"
        ]
    },
    {
        "id": "63edccdc-7f47-412c-ac46-144781f76263",
        "full_name": "Data.com Clean",
        "email": "automatedclean@00d5g000004jslgea2",
        "created_timestamp": "2021-06-01T01:45:21.520Z",
        "updated_timestamp": "2021-06-01T01:45:21.520Z",
        "external_id": "0055g000007aXQjAAM",
        "permissions": [
            "MANAGE_USERS"
        ]
    },
    {
        "id": "7e0f3823-9093-44cc-a6f6-c8a5465a9b27",
        "full_name": "Integration User",
        "email": "integration@example.com",
        "created_timestamp": "2021-06-01T02:15:28.422Z",
        "updated_timestamp": "2021-06-01T02:15:28.422Z",
        "external_id": "0055g000007aXQfAAM",
        "permissions": [
            "MANAGE_LICENSES"
        ]
    },
    {
        "id": "b02e1ab0-b3d9-4fd6-a9c1-58380bfa6979",
        "full_name": "Platform Integration User",
        "email": "noreply@00d5g000004jslgea2",
        "created_timestamp": "2021-06-01T23:54:36.720Z",
        "updated_timestamp": "2021-06-01T23:54:36.720Z",
        "external_id": "0055g000007aXQiAAM",
        "permissions": [
            "MANAGE_LICENSES",
            "MANAGE_USERS"
        ]
    },
    {
        "id": "edf8e9ce-4037-4ea2-a9e6-70f75d8ba948",
        "full_name": "Automated Process",
        "email": "autoproc@00d5g000004jslgea2",
        "created_timestamp": "2021-06-01T23:57:29.933Z",
        "updated_timestamp": "2021-06-01T23:57:29.933Z",
        "external_id": "0055g000007aXQgAAM",
        "permissions": [
            "MANAGE_LICENSES",
            "MANAGE_USERS"
        ]
    },
    {
        "id": "7f2570d1-a37e-4272-a4dd-c9f3be7c3bfc",
        "full_name": "Security User",
        "email": "insightssecurity@example.com",
        "created_timestamp": "2021-06-03T02:03:56.862Z",
        "updated_timestamp": "2021-06-03T02:03:56.862Z",
        "external_id": "0055g000007aXQlAAM",
        "permissions": []
    }
]


// let data = () => {
//     userlist.map(user => {
//         return console.log(user)
//     })
// }
// data()

let userId = 'd9218fe4-ae03-48ae-af68-92b9289a42f3'
let d = () => {
    userlist.filter((user) => {
        if (user.id === userId) {
        console.log(user.id, user.permissions)

        }
    } )
}
d() // d9218fe4-ae03-48ae-af68-92b9289a42f3 [ 'MANAGE_LICENSES', 'MANAGE_USERS' ]

// foreach
let e = () => {
    userlist.forEach((user) => {
        if (user.id === userId) {
        console.log(user.id, user.permissions)

        }
    } )
}
e() 
// d9218fe4-ae03-48ae-af68-92b9289a42f3 [ 'MANAGE_LICENSES', 'MANAGE_USERS' ]

// MAP method
let f = () => {
    userlist.map((user) => {
        if (user.id === userId) {
        console.log(user.id, user.permissions)

        }
    } )
}
f() 
// d9218fe4-ae03-48ae-af68-92b9289a42f3 [ 'MANAGE_LICENSES', 'MANAGE_USERS' ]

// flatMap - flat result in new array.
let g = () => {
    userlist.flatMap((user) => {
        if (user.id === userId) {
        console.log(user.id, user.permissions)

        }
    } )
}
g() 
// d9218fe4-ae03-48ae-af68-92b9289a42f3 [ 'MANAGE_LICENSES', 'MANAGE_USERS' ]