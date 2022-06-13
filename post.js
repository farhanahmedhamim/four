

// const title = document.querySelector(".title")
// const desc = document.querySelector(".desc")
// const warning = document.querySelector(".warning")


// const idname = location.href.split("=")[1]



// try {
//     fetch(`https://jsonplaceholder.typicode.com/posts/${idname}`)
//     .then(res => res.json())
//     .then(json => {
//         console.log(json)
//         if (Object.keys(json).length > 0) {
//             title.innerHTML = json.title
//             desc.innerHTML = json.body
//         } else {
//             warning.classList.add("active")
//         }
//     })
//     .catch( error => {
//         warning.classList.add("active")
//     })
// } catch (error) {
//     warning.classList.add("active")
// }





const title = document.querySelector(".title")
const desc = document.querySelector(".desc")
const warning = document.querySelector(".warning")



const inname = location.href.split("=")[1]


try {
    fetch(`https://jsonplaceholder.typicode.com/posts/${inname}`)
    .then( res => res.json())
    .then(json => {
        console.log(json)

        if (Object.keys(json).length > 0) {
            title.innerHTML = json.title
            desc.innerHTML = json.body
        } else {
            warning.classList.add("active")
        }
    })
    .catch( error => {
        warning.classList.add("active")
    })
} catch (error) {
    warning.classList.add("active")
}