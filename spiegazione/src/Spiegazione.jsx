const Spiegazione = () => {
  return (
    <div>
      <h2>Primo Passaggio</h2>
      devDependencies per testing con react e vite
      <ul>
        <li>@testing-library/jest-dom</li>
        <li>@testing-library/react</li>
        <li>@testing-library/user-event jsdom</li>
        <li>vitest</li>
      </ul>
      <h2>Secondo Passaggio</h2>
      <p>creare una cartella tests con dentro un js con una riga di comando "import @testing-library/jest-dom"</p>

 <h2>Secondo Passaggio</h2>
<p>creare in vite confing il seguente oggetto</p>
      test: { global: true, environment: "jsdom", setupFiles: ".src/tests/setup.js", css: true }

      andare in package.json e creare in scripts "test": "vitest"
    </div>
  )
}
export default Spiegazione
