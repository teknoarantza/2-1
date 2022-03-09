basic.forever(function () {
    if (input.soundLevel() < 10) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Sad)
    }
})
