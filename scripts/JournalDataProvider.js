/*
 *   Journal data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

// This is the original data.
const journal = [
    {
        id: 1,
        date: "07/12/2020",
        concept: "GitHub",
        entry: "we practiced the GitHub workflow for group projects",
        mood: "alert"
    },
    {
        id: 2,
        date: "07/14/2020",
        concept: "JavaScript",
        entry: "We talked about how to use JavaScript to dynamically populate our page",
        mood: "Ok"
    },
    {
        id: 3,
        date: "07/15/2020",
        concept: "JavaScript",
        entry: "how to import and export from one module to another",
        mood: "tired"
    }

]

/*
    You export a function that provides a version of the
    raw data in the format that you want
*/
export const useJournalEntries = () => {
    const sortedByDate = journal.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
}