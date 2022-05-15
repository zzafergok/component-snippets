import { Routes, Route } from 'react-router-dom';

import Home from './pages/home';
import Components from './pages/components';
import Documents from './pages/documents';
import Contact from './pages/contact';
import ErrorPage from './pages/404';

import InputIndex from './components/input/index';
import RadioIndex from './components/radio/index';
import SwitchIndex from './components/switch/index';
import ButtonIndex from './components/button/index';
import FormIndex from './components/form/index';

import Index from './layout/index';

type Props = {};

function AllRoutes({}: Props) {
	return (
		<>
			<Index>
				<Routes>
					<Route path="*" exact element={<ErrorPage />} />
					<Route path="/" exact element={<Home />} />
					<Route path="components" exact element={<Components />} />
					<Route path="documents" element={<Documents />} />
					<Route path="contact" element={<Contact />} />
					<Route path="components/input" element={<InputIndex />} />
					<Route path="components/radio" element={<RadioIndex />} />
					<Route path="components/switch" element={<SwitchIndex />} />
					<Route path="components/button" element={<ButtonIndex />} />
					<Route path="components/form" element={<FormIndex />} />
				</Routes>
			</Index>
		</>
	);
}

export default AllRoutes;
