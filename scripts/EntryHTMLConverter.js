/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
export const JournalEntryComponent = (entry) => {
    return `
        <section id="entry--${entry.id}" class="journalEntry">
            <p class="journalDate">Date: ${entry.date}</p>
            <p class="journalConcept">Concept(s): ${entry.concept}</p>
            <p class="journalStuff">${entry.entry}</p>
            <p class="journalMood">Mood: ${entry.mood.label}</p>
            <div class="buttons">
                <button type="button" class="button edit" id="edit--${entry.id}">Edit</button>
                <button type="button" class="button delete" id="delete--${entry.id}">Delete</button>
            </div>
        </section>
    `
}