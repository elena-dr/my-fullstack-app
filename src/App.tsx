
import './App.css'
import { Link, Routes, Route } from 'react-router-dom'
import Start from './components/startPage/Start'
import Contest from './components/contest/Contest'
import Gallery from './components/gallery/Gallery'



function App() {

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
						<Route path="*" element={<Start />} />
						<Route path="/contest" element={<Contest />} />
						<Route path="/gallery" element={<Gallery />} />
						
					</Routes>
</div>
			</main>
			
			
		</div>
	)
}

export default App
