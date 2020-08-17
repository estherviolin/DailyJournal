//journal form component

import { saveEntry, useJournalEntries, editEntry } from "./JournalDataProvider.js"
import {useMoods, getMoods} from "./MoodDataProvider.js"

const eventHub = document.querySelector(".content")
const contentTarget = document.querySelector(".journalForm")

eventHub.addEventListener("editClicked", customEvent => {
    const allEntries = useJournalEntries()
    const entryId = customEvent.detail.entryId
    const entryObjToEdit = allEntries.find(entryObj => entryId === entryObj.id)

    const entryConcept = document.querySelector("#journalConcepts")
    const entryContent = document.querySelector("#journalEntry")
    const entryMood = document.querySelector("#journalMood")
    const entryDate = document.querySelector("#journalDate")
    const id = document.querySelector("#entryId")

    entryConcept.value = entryObjToEdit.concept
    entryContent.value = entryObjToEdit.entry
    entryMood.value = entryObjToEdit.moodId
    entryDate.value = entryObjToEdit.date
    id.value = parseInt(entryId)
    
})

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "Submit") {

        const entryConcept = document.querySelector("#journalConcepts")
        const entryContent = document.querySelector("#journalEntry")
        const entryMood = document.querySelector("#journalMood")
        const entryDate = document.querySelector("#journalDate")
        const id = document.querySelector("#entryId")

        const moodId = parseInt(entryMood.value)
 
        if (entryConcept.value && entryContent.value && entryMood.value && entryDate.value) {
            const id = document.querySelector("#entryId")
            if (id.value === "") {
                const newEntry = {
                    date: entryDate.value,
                    concept: entryConcept.value,
                    entry: entryContent.value,
                    moodId: parseInt(entryMood.value)
                }

                saveEntry(newEntry)
            } else {
                    const editedEntry = {
                        date: entryDate.value,
                        concept: entryConcept.value,
                        entry: entryContent.value,
                        moodId:entryMood.value,
                        id: parseInt(id.value)
                    }
                    editEntry(editedEntry)
                    id.value=""
                }
                } else {
                    window.alert("Please fill all fields")
                }
    }
})


const render = (moods) => {
    contentTarget.innerHTML = `
        <h3 class="newEntryHeader">New Entry:</h3>
        <fieldset>
            <div class="inputWrapper">
            <label for="journalDate">Date of entry</label>
            <input type ="date" name="journalDate" id="journalDate">
            </div>
        </fieldset>
        <fieldset>
            <div class="inputWrapper">
            <label for="conceptsCovered">Concepts covered</label>
            <input type="text" id="journalConcepts">
            </div>
        </fieldset>
        <fieldset>
            <div class="inputWrapper">
            <label for="journalEntry">Journal Entry</label>
            <textarea id="journalEntry"></textarea>
            </div>
        </fieldset>
        <fieldset>
            <div class="inputWrapper">
            <label for="mood">Mood for the day</label>
            <select name="mood" id="journalMood">
                <option value="0">Select a mood...</option>
                ${
                    moods.map(
                        (mood) => {
                            return `<option value="${ mood.id }">${ mood.label }</option>`
                        }
                    ).join("")
                }
            </div>
            <input type="hidden" name="entryId" id="entryId">
        </fieldset>
        <input class="button" type="submit" value="Submit" id="Submit">

       
    `

}

export const JournalForm = () => {
    getMoods()
        .then(() => {
            const moods = useMoods()
            render(moods)
        })
    
}



