let pressedKeys = new Set()
let hotKeys = new Set()


addEventListener('click', function(e) {
    chrome.storage.local.get(['hotKeys'], (result) => {
        hotKeys = new Set(result.hotKeys)
    })

    if (isKeyPressed()) {
        e.target.remove()
    }
})

addEventListener('keydown', function(e) {
    pressedKeys.add(e.code)
})

addEventListener('keyup', function(e) {
    pressedKeys.delete(e.code)
})

function isKeyPressed() {
    if (hotKeys.size === 0) {
        return false
    }
    if (pressedKeys.size != hotKeys.size) {
        return false
    }
    for (let pressedKey of pressedKeys) {
        if (!hotKeys.has(pressedKey)) {
            return false
        }
    }
    return true
}
