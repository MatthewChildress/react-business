import React from 'react';

interface FooterProps {
	text?: string;
	id?: number;
}

export const Footer: React.FC<FooterProps> = () => {
	return (
		<>
			<footer></footer>
		</>
	);
};

Footer.propTypes = {};
