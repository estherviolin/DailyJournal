const contentTarget = document.querySelector(".entriesButton")
const eventHub = document.querySelector(".content")

//listens for click on showNotesButton
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "showEntries") {
        const customEvent = new CustomEvent("showEntriesClicked")
        eventHub.dispatchEvent(customEvent)
    }

})

// function to render shownotes button on initial page load
export const ShowEntriesButton = () => {
    contentTarget.innerHTML = `
    <div>
    <button class="button" id="showEntries">Show Entries</button>
    </div>
    `

}