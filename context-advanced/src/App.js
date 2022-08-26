import BookList from "./component/BookList";
import NavBar from "./component/Navbar";
import ThemeToggle from "./component/ThemeToggle";
import ThemeContextProvider from "./contexts/ThemeContext";

function App() {
	return (
		<div className="App">
			 
			<ThemeContextProvider> 
				<NavBar />
				<BookList />
				<ThemeToggle/>
			</ThemeContextProvider>{" "}
		</div>
	);
}

export default App;
