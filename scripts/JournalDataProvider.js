let entries = []

const eventHub = document.querySelector(".content")

//function to dispatch change event that app state changed
const dispatchStateChangeEvent = () => {
    const entryStateChangedEvent = new CustomEvent("entryStateChanged")
    eventHub.dispatchEvent(entryStateChangedEvent)
}

//function to get entries from the API
export const getEntries = () => {
    return fetch("http://localhost:8088/entries?_expand=mood")
        //turn it into JSON
        .then(response => response.json())
        .then(parsedEntries => {
            entries = parsedEntries            
        })
}

//function to delete an entry
export const deleteEntry = (noteId) => {
    return fetch(`http://localhost:8088/entries/${noteId}`, {
        method: "DELETE"
    })
    .then(getEntries)
    .then(dispatchStateChangeEvent)
}

//function to save entry after entered into form
export const saveEntry = (entryObj) => {
    const jsonEntry = JSON.stringify(entryObj) //turn object into string/strings
    return fetch("http://localhost:8088/entries", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: jsonEntry
    })
    .then(getEntries)
    .then(dispatchStateChangeEvent)
} 

//function to edit entry
export const editEntry = (entry) => {
    return fetch(`http://localhost:8088/entries/${entry.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(entry)
    })
    .then(getEntries)
    .then(dispatchStateChangeEvent)
}

export const useJournalEntries = () => {
    const sortedByDate = entries.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
}