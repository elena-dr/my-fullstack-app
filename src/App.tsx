import { useState, useEffect } from 'react'
import './App.css'
import { fixUrl } from './utils'
import { Link, Routes, Route } from 'react-router-dom'
import Start from './components/Start'
import Contest from './components/Contest'
import Gallery from './components/gallery/Gallery'



function App() {
	// const [maybeData, setMaybeData] = useState<string[] | null>(null)

		// const getData: (() => Promise<void>) = async () => {
	// 	const response = await fetch(fixUrl('/hamsters'))
	// 	const data = await response.json()
	// 	// om response.json misslyckas: kontrollera din URL, kontrollera om du får en HTML-sida
	// 	setMaybeData(data)
	// }

	return (
		<div className="app">
			<header> 
				<nav>
					<Link className="nav-link" to="/">Startsida</Link>
					<Link className="nav-link" to="/contest">Tävla</Link>
					<Link className="nav-link" to="/gallery">Galleri</Link>
				</nav>
			</header>
			<main>
				<div className="main-div">
					<Routes>
						<Route path="/" element={<Start />} />
						<Route path="/contest" element={<Contest />} />
						<Route path="/gallery" element={<Gallery />} />
						
					</Routes>
</div>
			</main>
			<footer className="footer">
<p>Lena Drozdova, Hamster War, 2022</p>
			</footer>
			
		</div>
	)
}

export default App
