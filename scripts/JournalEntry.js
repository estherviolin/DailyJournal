/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
export const JournalEntryComponent = (entry) => {
    return `
        <section id="entry--${entry.id}" class="journalEntry">
            <p class="journalDate">${entry.date}</p>
            <p class="journalConcept">${entry.concept}</p>
            <p class="journalStuff">${entry.entry}</p>
            <p class="journalMood">${entry.mood}</p>
            <button type="button" class="delete">Edit</button>
            <button type="button" class="edit">Delete</button>
        </section>
    `
}