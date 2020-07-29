import { getEntries, useJournalEntries } from "./JournalDataProvider.js"
import { JournalEntryComponent } from "./JournalEntry.js"

const contentTarget = document.querySelector(".previousEntries")
const eventHub = document.querySelector(".content")

//add event listener for when show entries button is clicked
eventHub.addEventListener("showEntriesClicked", customEvent => {
    EntryListComponent()
})

//hide entries next

//function that iterates through array and turns into HTML list
export const EntryListComponent = () => {
    // Use the journal entry data from the data provider component
    const entries = useJournalEntries()

    // DOM reference to where all entries will be rendered
    const entryLog = document.querySelector("#entryLog")
    
    // let EntryHTMLReps = ""
    // for (const entry of entries) {
    //     /*
    //         Invoke the component that returns an
    //         HTML representation of a single entry
    //     */    
    //    EntryHTMLReps += JournalEntryComponent(entry)
       
    // }
    // 
    entryLog.innerHTML += `

    <article>
        ${entries.map(entry => JournalEntryComponent(entry))}
    </article>
    
    `
}