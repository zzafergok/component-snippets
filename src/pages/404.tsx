/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import notFound from '../assets/images/404.png';

type Props = {};

function ErrorPage({}: Props) {
	return (
		<div
			css={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
		>
			<img src={notFound} alt="404" />
		</div>
	);
}

export default ErrorPage;
