// const eventHub = document.querySelector(".content")


// eventHub.addEventListener("entryStateChanged")

let tags = []

export const getTags = () => {
    return fetch(`http://localhost:8088/tags`)
        .then(response => response.json())
        .then(res => {
            tags = res
        })
}

export const useTags = () => {
    return tags.slice()
}

export const saveTags = (obj) => {
    const jsonEntry = JSON.stringify(obj)

    return fetch("http://localhost:8088/tags", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body:jsonEntry
    })
    .then(res => res.json())
    // .then(getTags)
    // .then(dispatchStateChangeEvent)
}



// findTag(tag)  // tag variable will have a string value
//     .then(matches => {  // `matches` variable value will be array of matching objects
//         let matchingTag = null

//         if (matches.length > 0) {
//             matchingTag = matches[0].id
//         }

//         if (matchingTag === null) {
//             // Tag doesn't exist. Create it then assign it to entry.
//             saveTag(tag)
//                 .then(new_tag => {
//                     saveEntryTag(entry.id, new_tag.id)
//                 })
//         }
//         else {
//             // Tag does exist. Assign it to entry.
//             saveEntryTag(entry.id, matchingTag)
//         }
//     })





// getEntries()
//         .then(useJournalEntries)
//         .then(tag => {entryObj.tag === tag})

    

















/* from chapter:
export const findTag = (subject) => {
    return fetch(`${settings.apiURL}/tags?subject=${subject}`)
        .then(response => response.json())
}
*/
