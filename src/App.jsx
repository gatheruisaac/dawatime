import MedicationList from './components/medication/MedicationList'
import './App.css'

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Dawa Time</h1>
        <p>Your medication reminder companion</p>
      </header>
      
      <main className="app-main">
        <MedicationList />
      </main>
    </div>
  )
}

export default App