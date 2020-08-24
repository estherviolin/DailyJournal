// const eventHub = document.querySelector(".content")

// eventHub.addEventListener("entryStateChanged")



let entryTags = []

export const getEntryTags = () => {
    return fetch("http://localhost:8088/entryTags")
        .then(res => res.json())
        .then(parsedEntryTags => {
            entryTags = parsedEntryTags           
        })
        
}

export const useEntryTags = () => {
    return entryTags.slice()
}


export const saveEntryTags = (obj) => {
    const jsonEntry = JSON.stringify(obj)

    return fetch("http://localhost:8088/entryTags", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body:jsonEntry
    })
    // .then(getEntryTags)
    // .then(dispatchStateChangeEvent)
}





//     getJournalEntries()
//         .then(getEntryTags)
//         .then(() => {
//             const allEntries = useJournalEntries()
//             const entryTagArr = useEntryTags
//         })
//         .then(() => {
//             const matchingEntryTagObj = allEntries.map(entry => entry.id === entryTagObj.entryId)
//         })
            


// }
