import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ScrollToTop from '../app/scroll-to-top';

const ScrollToTopWrapper = ({ children }) => {
	const { pathname } = useLocation();

	useEffect(() => {
		ScrollToTop();
	}, [pathname]);

	return children;
};

export default ScrollToTopWrapper;