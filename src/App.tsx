import { useState } from 'react'
import './App.css'
import { fixUrl } from './utils'

function App() {
	const [maybeData, setMaybeData] = useState<string[] | null>(null)

	const getData: (() => Promise<void>) = async () => {
		const response = await fetch(fixUrl('/fruits'))
		const data = await response.json()
		// om response.json misslyckas: kontrollera din URL, kontrollera om du får en HTML-sida
		setMaybeData(data)
	}

	return (
		<div className="app">
			<header> My awesome fullstack app </header>
			<main>
				<button onClick={getData}> Get data from API </button>
				<section> {maybeData ? (
					maybeData.map(fruit => (<p key={fruit}> {fruit} </p>))
				) : 'No data yet...'} </section>
				<img src={fixUrl("/img/hamster-14.jpg")} />
			</main>
		</div>
	)
}

export default App
