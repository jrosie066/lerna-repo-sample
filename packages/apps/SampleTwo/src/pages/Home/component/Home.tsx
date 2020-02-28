import React from 'react';
import { useStyles } from './Home.styles';

export type Props = {
}

const Home = (props: Props) => {
	console.log(props);
	const classes = useStyles();
	return (
		<div className={classes.root}>
			add stuff here
		</div>
	);
};

export { Home };
