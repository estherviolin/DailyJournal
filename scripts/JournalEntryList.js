/*
 *  Purpose:
 *    To render as many journal entry components as
 *    there are items in the collection exposed by the
 *    data provider component
 */
//the function that makes a copy of the journal entry array
import { useJournalEntries } from "./JournalDataProvider.js"

//the function that turns an object into HTML
import { JournalEntryComponent } from "./JournalEntry.js"


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