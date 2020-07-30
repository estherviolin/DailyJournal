//button to hide past entries

const contentTarget = document.querySelector(".entriesButton")
const eventHub = document.querySelector(".content")

//listens for click on hideEntriesButton
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "hideEntries") {
        const hideButtonClicked = new CustomEvent("hideEntriesClicked")
        eventHub.dispatchEvent(hideButtonClicked)
    }

})

// function to render shownotes button on initial page load
export const HideEntriesButton = () => {
    contentTarget.innerHTML = `
    <button id="hideEntries">Hide Entries</button>
    `

}