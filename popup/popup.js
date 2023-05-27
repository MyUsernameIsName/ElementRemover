let hotKeys = new Set()
let pressedKeys = new Set()

addEventListener('keydown', function(e) {
    if (pressedKeys.size === 0) {
        hotKeys.clear()
    }
    hotKeys.add(e.code)
    pressedKeys.add(e.code)
    setHotKeys()
})

addEventListener('keyup', function(e) {
    pressedKeys.delete(e.code)
})

function setHotKeys() {
    let hotKeysArray = Array.from(hotKeys)
    chrome.storage.local.set({
        'hotKeys': hotKeysArray
    })
    document.getElementById('settings').innerHTML = hotKeysArray.join('+')
}
