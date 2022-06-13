// const wraper = document.querySelector(".wraper")



// fetch("https://jsonplaceholder.typicode.com/posts")
// .then(res => res.json())
// .then(json => {
//     console.log(json)
//     const text = json.map(val => {
//         return `<div class="singlbx">
//             <div class="one">
//                 <span onclick="goto('${val.id}')">
//                     ${val.id}
//                     ${val.title}
//                 </span>
//             </div>
//             <div class="two">
//                 <span onclick="goto('${val.id}')">
//                     ${val.body}
//                 </span>
//             </div>
//         </div>`
//     }).join(" ")
//     wraper.innerHTML = text
// })


// const goto = (id) => {
//     location.href = `post.html?idpass=${id}`
// }





const wraper = document.querySelector(".wraper")



fetch("https://jsonplaceholder.typicode.com/posts")
.then(res => res.json())
.then(json => {
    console.log(json)
    const text = json.map(val => {
        return `<div class="singlbx">
            <div class="one">
                <span onclick="goto('${val.id}')">
                    ${val.id}
                    ${val.title}
                </span>
            </div>
            <div class="two">
                <span onclick="goto('${val.id}')">
                    ${val.body}
                </span>
            </div>
        </div>`
    }).join(" ")
    wraper.innerHTML = text
})


const goto = (id) => {
    location.href = `post.html?id=${id}`
}
