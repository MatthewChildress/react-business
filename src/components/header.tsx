import React from 'react';

interface HeaderProps {
	text?: string;
	id?: number;
}

export const Header: React.FC<HeaderProps> = () => {
	return (
		<>
			<header></header>
		</>
	);
};

Header.propTypes = {};
