import { keyframes } from 'styled-components'

export const themeColors = {
	primary: '#7FC4FD',
	secondary: '#000000',
	gray: '#666666',
	lightGray: '#EEEEEE',
	midGray: '#AAAAAA',
}

export const themeFont = {
	family: `'Roboto', sans-serif`,
	weight: {
		light: '300',
		normal: '400',
		semiBold: '700',
		bold: '900',
	},
	sizes: {
		normal: '1rem',
		h1: '4rem',
		h2: '3.5rem',
		xl: '1.5rem',
	},
}

export const themeBreakpoints = {
	xxsDown: '375px',
	xsUp: '376px',
	xsDown: '575px',
	smUp: '576px',
	smDown: '767px',
	mdUp: '768px',
	mdDown: '991px',
	lgUp: '992px',
	lgDown: '1199px',
	xlUp: '1200px',
	xlDown: '1499px',
	xxlUp: '1500px',
}

export const LoaderAnimation = keyframes`
    from {
        top: 36px;
        left: 36px;
        width: 0;
        height: 0;
        opacity: 1;
    }
    to {
        top: 0px;
        left: 0px;
        width: 72px;
        height: 72px;
        opacity: 0;
    }
`

export const fadeIn = keyframes`
    from {
        opacity:0;
    }
    to {
        opacity:1;
    }
`
export const fadeOut = keyframes`
    from {
        opacity:1;
    }
    to {
        opacity:0;
    }
`

export const imageUp = keyframes`
    from{
        background-position-y:center;
    }
    to{
        background-position-y:-50px;
    }
`
export const imageDown = keyframes`
    from{
        background-position-y:-50px;
    }
    to{
        background-position-y:center;
    }
`
