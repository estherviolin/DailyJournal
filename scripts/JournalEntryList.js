import { getEntries, useJournalEntries } from "./JournalDataProvider.js"
import { JournalEntryComponent } from "./EntryHTMLConverter.js"
import { HideEntriesButton } from "./HideEntriesButton.js"
import { ShowEntriesButton } from "./ShowEntriesButton.js"

const contentTarget = document.querySelector(".displayEntries")
const eventHub = document.querySelector(".content")



let entries = []
//add event listener for when show entries button is clicked
eventHub.addEventListener("showEntriesClicked", customEvent => {
    EntryListComponent()
    //also render hide entries button
    HideEntriesButton()
})

//listen for change to app state when save is clicked and update HTML rendering
eventHub.addEventListener("entryStateChanged", () => {
    const newEntries = useJournalEntries()
    render(newEntries)
})

//hide entries next
eventHub.addEventListener("hideEntriesClicked", hideButtonClicked => {
    contentTarget.innerHTML = `
    `
    ShowEntriesButton()
    
    
})

//function that iterates through array and turns into HTML list
export const EntryListComponent = () => {
    // Use the journal entry data from the data provider component
    getEntries()//from the API
        .then(() => {
            const entries = useJournalEntries()
            render(entries) //render to DOM
        })
   
    }

    //render function
const render = (entriesArray) => {
        //loop through entries array returning each entry as passed through converter function
        const allEntriesHTML = entriesArray.map(
            (currentEntryObj) => {
                return JournalEntryComponent(currentEntryObj) 
                }
        ).join("") //remove commas
        
        // DOM reference to where all entries will be rendered
        contentTarget.innerHTML = allEntriesHTML
    }


      
    


   