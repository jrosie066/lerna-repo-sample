import React from 'react';
import { useStyles } from './About.styles';

export type Props = {
}

const About = (props: Props) => {
	console.log(props);
	const classes = useStyles();
	return (
		<div className={classes.root}>
			add stuff here
		</div>
	);
};

export { About };
