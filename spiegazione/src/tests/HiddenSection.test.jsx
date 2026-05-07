// Questa saraò un file che testerà il component HiddenSection.jsx
// provere le capacita di questo compomente senza fisicamente montarlo nel broswer.
//interamente nel virtual DOM di react

// Andiamo ad effettuare dei test di tipo unit e integration su questo compomente

import { render, screen, fireEvent } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import HiddenSection from "../compoments/HiddenSection"

//describe è una funzione di vitest che crea una "SUITE" di test, cioè una famiglia di test

describe("Montaggio iniziale", () => {
  // in questa funzione (secondo parametro di descrive) vado a scrivere scrivo itesti individuali del compomente
  // adesso andiamo a prendere "it" da vitest che serve per scrivere un SINGOLO TEST all'interno di una SUITE
  it("checks if the compoments mounts correctly", () => {
    //questo secondo parametro di it contiene i 4 steps di ogni test
    // in questo primo test potremmo controllare che ci sia un h2
    // 4 STEPS:
    // 1) montaggio del compomente nel Virtual DOM
    render(<HiddenSection />)
    // 2) ricerca degli elementi
    const title = screen.getByText("Questo compomente si chiama hidden section") // <-- SCREEN è uno schermo virtualche che va a renderizzare il virtual DOM
    // 3) interazione cone l'elemente trovato (opzionale)
    // nel nostro caso non serve interagire con il titolo
    // 4) Verifica ipotesi tesi
    expect(title).toBeInTheDocument() // <-- verifica delle aspettative
  })

  it("checks the label of button = MOSTRA", () => {
    //1)
    render(<HiddenSection />)
    //2)
    const button = screen.getByText(/mostra/i)
    const missingButton = screen.queryByText(/nascondi/i) //<--ritorna null
    // 3) interazione, nulla per ora
    // 4) verifica
    expect(button).toBeInTheDocument()
    expect(missingButton).toBeNull() //<-- qui controlla che nel documento non ci sia il null
  })
})

describe("Interazioni Utente", () => {
  it("check the label of the button after click", () => {
    // 1)
    render(<HiddenSection />)
    // 2)
    const button = screen.getByText(/mostra/i)
    // 3) interazioni
    // clicchiamo il bottone
    fireEvent.click(button)
    // 4) cercoil bottone
    // 4a)cerco il nuovo bottone
    const newButton = screen.getByText(/nascondi/i)
    // 4b) cerco anche l'immagine
    const orsoPicture = screen.getByAltText(/immagine di un orso/i)

    expect(newButton).toBeInTheDocument()
    expect(orsoPicture).toBeInTheDocument()
  })
  it("checks if resets if double click the button", () => {
    render(<HiddenSection />)
    const button = screen.getByText(/mostra/i)
    fireEvent.click(button)
    fireEvent.click(button)
    const orsoPicture = screen.queryByAltText(/immagine di un orso/i)
    expect(orsoPicture).toBeNull()
  })
})
