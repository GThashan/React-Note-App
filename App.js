import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home'
import Blog from './pages/Blog'


const App = () => {
	return(
		<div>
			<BrowserRouter>
			<Routes>
               <Route path='/' element={<Home />}></Route>
               <Route path='/Blog' element={<Blog />}></Route>
			</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
