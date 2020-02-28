import { memo, FunctionComponent } from 'react';
import { compose } from 'redux';
import { HomeWrapper } from '../wrapper/HomeWrapper';
import { Props } from './Home';

const enhance = compose<FunctionComponent<Props>>(
	memo,
	HomeWrapper
);
export { enhance };
