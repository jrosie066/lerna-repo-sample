import React from 'react';

type Props = {
}

const HomeWrapper = (WrappedComponent: any) => {
	const HomePageWrapper = (props: Props) => {
		return <WrappedComponent {...props} />;
	};
	return HomePageWrapper;
};
export { HomeWrapper };
