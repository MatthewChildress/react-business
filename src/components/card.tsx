import React from 'react';

interface CardProps {
	text?: string;
	id?: number;
}

export const Card: React.FC<CardProps> = () => {
	return (
		<>
			<div></div>
		</>
	);
};

Card.propTypes = {};
