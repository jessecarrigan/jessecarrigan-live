/**
 * @typedef PortfolioData
 * @property {string} imgSrc - URL of the image
 * @property {string} title - Title of the card
 * @property {string[]} skills - Array of your skills, e.g., ['React', 'CSS', 'JavaScript']
 * @property {string} description - Description of the card
 * @property {string} demoURL - URL of a demo page
 * @property {string} repoURL - URL of the repository, e.g., https://github.com/user/repo
 * @property {string} anim - Animation that will play when the card loads, e.g., fade-up, fade-right, fade-left, fade-down
 * @property {number} averageBrightness - Brightness level of the card's background color, e.g., 0.1
 */

/**
 * @type {PortfolioData[]}
 */
export const portfolioData = [
	{
		imgSrc: 'https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2021/06/copy-of-the-6-best-restaurant-website-templates-1.png',
		title: 'Restaurant',
		skills: ['React', 'StyledComponents'],
		description:
			'Laboris ex laboris mollit esse fugiat aute cillum nostrud enim dolor sit. Reprehenderit et non nulla irure aute nostrud commodo aute.',
		demoURL: '',
		repoURL: '',
		anim: 'fade-right',
	},
	{
		imgSrc: 'https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/299377097/original/7eb7dcebe244fcf5ad75d92b0969fc116946bd57/create-professional-amd-responsive-wordpress-website.jpg',
		title: 'E-commerce',
		skills: ['JavaScript', 'Bootstrap'],
		description:
			'Laboris ex laboris mollit esse fugiat aute cillum nostrud enim dolor sit. Reprehenderit et non nulla irure aute nostrud commodo aute.',
		demoURL: '',
		repoURL: '',
		anim: 'fade-up',
		averageBrightness: 0.1,
	},
	{
		imgSrc: 'https://www.websitetalkingheads.com/wp-content/uploads/2020/06/real-estate-website-design.png',
		title: 'Real Estate',
		skills: ['Astro', 'Tailwind'],
		description:
			'Laboris ex laboris mollit esse fugiat aute cillum nostrud enim dolor sit. Reprehenderit et non nulla irure aute nostrud commodo aute.',
		demoURL: '',
		repoURL: '',
		anim: 'fade-left',
	},
];

const skillIcons = {
	JavaScript: 'skill-icons:javascript',
	React: 'skill-icons:react-dark',
	Astro: 'skill-icons:astro',
	CSS: 'skill-icons:css',
	Sass: 'skill-icons:sass',
	StyledComponents: 'skill-icons:styledcomponents',
	Bootstrap: 'skill-icons:bootstrap',
	Tailwind: 'skill-icons:tailwindcss-dark',
};

/**
 * @description Maps portfolioData to include skill icons
 */
export const getPortfolioData = portfolioData.map((item) => ({
	...item,
	skills: item.skills.map((skill) => skillIcons[skill]),
}));
