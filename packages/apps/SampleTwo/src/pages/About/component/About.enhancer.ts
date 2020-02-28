import { memo, FunctionComponent } from 'react';
import { compose } from 'redux';
import { AboutWrapper } from '../wrapper/AboutWrapper';
import { Props } from './About';

const enhance = compose<FunctionComponent<Props>>(
	memo,
	AboutWrapper
);
export { enhance };
