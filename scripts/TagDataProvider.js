export const findTag = (subject) => {
    return fetch(`http://localhost:8088/entries/tags?subject=${subject}`)
        .then(response => response.json())
}








/* from chapter:
export const findTag = (subject) => {
    return fetch(`${settings.apiURL}/tags?subject=${subject}`)
        .then(response => response.json())
}
*/
