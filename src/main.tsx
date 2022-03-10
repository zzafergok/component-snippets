import React from 'react';
import ReactDOM from 'react-dom';
import '../src/assets/styles/index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

import 'remixicon/fonts/remixicon.css';

ReactDOM.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
	document.getElementById('root')
);
