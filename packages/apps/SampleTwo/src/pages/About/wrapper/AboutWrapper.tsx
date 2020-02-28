import React from 'react';

type Props = {
}

const AboutWrapper = (WrappedComponent: any) => {
	const AboutPageWrapper = (props: Props) => {
		return <WrappedComponent {...props} />;
	};
	return AboutPageWrapper;
}
export { AboutWrapper };
