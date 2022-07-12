import React from 'react';

interface ContainerProps {
	text?: string;
	id?: number;
}

export const Container: React.FC<ContainerProps> = () => {
	return (
		<>
			<div></div>
		</>
	);
};

Container.propTypes = {};
