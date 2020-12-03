// const selectors = ['.FbsYi', '.vdo_floating', '#vdo_ads_frame', '.ts-inpage-push-dating']

let selectors = [];

console.log("ADBLOCK JAPSCAN ================================")

chrome.storage.sync.get(['selectors'], result => {
    selectors = result.selectors
    console.log(selectors)
    deleteAdd()
    window.setInterval(deleteAdd, 1000)
});


const deleteAdd = () => {
    selectors.forEach(selector => {
        let adds = document.querySelectorAll(selector)
        adds.forEach(add => {
            if (add.innerHTML !== '') console.log(add)
            add.style.display = 'none'
            add.innerHTML = ''
            add.src = ''
        })
    });
}

