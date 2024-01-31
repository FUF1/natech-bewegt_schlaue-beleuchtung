/**
 * Bei Problemen: Beachte die Kommentare, welche du ausklappen kannst.
 */
// Es ist ein gutes Vorgehen, wenn du zu Beginn immer alle Pins auf einen klaren Wert setzt (z.B. Ein- oder Ausgeschaltet).
pins.digitalWritePin(DigitalPin.P0, 0)
basic.forever(function () {
    // Dieser Block hilft dir, passende Zahlenwerte für das Feld unten zu finden.
    basic.showNumber(input.lightLevel())
    // Hier wird die aktuell gemessene Lichtstärke mit deinem voreingestellten Wert (= Schwellenwert) verglichen. Wenn zu wenig Licht einfällt, wird die Lampe (P0) eingeschaltet.
    if (input.lightLevel() < 40) {
        // Mit diesem Block wird die Lampe eingeschaltet.
        pins.digitalWritePin(DigitalPin.P0, 1)
        // Das braucht es nicht unbedingt. Es hilft dir aber zu sehen, ob dein Programm funktioniert, wenn die Lampe z.B. defekt oder falsch angeschlossen ist.
        basic.showIcon(IconNames.Yes)
    } else {
        // Eine kurze Pause hilft, dass wenn das Licht mal kurz da ist (z.B. Auto-Scheinwerfer), die Lampe nicht gleich abstellt oder zu flackern beginnt.
        basic.pause(500)
        pins.digitalWritePin(DigitalPin.P0, 0)
        basic.showIcon(IconNames.No)
    }
})
