//journal form component

import { saveEntry } from "./JournalDataProvider.js"
import {useMoods, getMoods} from "./MoodDataProvider.js"

const eventHub = document.querySelector(".content")
const contentTarget = document.querySelector(".journalForm")

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "Submit") {

        const entryConcept = document.querySelector("#journalConcepts")
        const entryContent = document.querySelector("#journalEntry")
        const entryMood = document.querySelector("#journalMood")
        const entryDate = document.querySelector("#journalDate")


        const newEntry = {
            date: entryDate.value,
            concept: entryConcept.value,
            entry: entryContent.value,
            mood: entryMood.value
        }

        saveEntry(newEntry)
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
                            return `<option id="mood--${ mood.id }">${ mood.label }</option>`
                        }
                    ).join("")
                }
            </div>
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