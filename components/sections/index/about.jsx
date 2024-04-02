// Core packages
import Image from 'next/image'

// Section structure
import Section from '../../structure/section';
import Container from '../../structure/container';

// Section general blocks
import SectionTitle from '../../blocks/section.title.block'
import SectionGridBg from '../../blocks/section.grid.block'

// Section specific blocks
import BadgesBlock from '../../blocks/about.badges.block'
import CopyBlock from '../../blocks/about.copy.block'

// Section scss
import about from '../../../styles/sections/index/about.module.scss';

/**
 * Section: About
 * An overview of yourself.
 * Highlight your top level attributes and disciplines.
 * 
 * @returns {jsx} <About />
 */
export default function About() {
	return (
		<Section classProp={about.section}>	
			<Container spacing={['verticalXXXLrg']}>

				<section className={about.content}>
					<div className={about.image}>
						<img src="/img/profiel3.jpg" alt="Band picture"/>
						{/* <Image src="/img/family-photo.jpg" width={600} height={800}/> */}
					</div>
					<div className={about.copy} >
						<CopyBlock 
							title="About"
							containerClass={about.container}
							iconClass={about.icon}
							icon={[ 'fas', 'music' ]}
							copy="Embark on a sonic journey with our 5-piece heavy metal powerhouse, RipCage. Fronted by the commanding vocals of Jon, our lineup showcases the guitar mastery of Paul and Stefan, with Thomas laying down the thunder on bass, and the relentless beats from Robbert on drums. Together, we unleash tracks that rock you to the core and echo with a rebellious spirit, crafting a raw, intense, and unyielding sound."
						/>
						<BadgesBlock 
							title="Contact" 
							containerClass={about.container}
							list={methods} 
							fullContainer="fullContainer"
							block="methods" 
							iconClass={about.icon}
							icon="address-card"
							copy="Reach out to us on ripcageofficial@gmail.com or +31611385417, contact us on social media or at one of our gigs"
							headerIcon={`${about.icon}`}
						/>
					</div>
				</section>	
			</Container>
		</Section>
	)
}

				// <SectionTitle
				// 	title="EP Release"
				// 	preTitle="Synopsis"
				// 	subTitle="With a diverse skill set that includes UX design, UI design, full stack development, operational architecture, systems design, photography, and branding, I am a well-rounded digital professional."
				// />

const methods 	= [
	{ key: 'planet-moon', 		name: 'User Research', 		type: 'fad' },
	{ key: 'qrcode', 			name: 'Digital Strategy', 	type: 'fad' },
	{ key: 'window', 			name: 'Design Systems', 	type: 'fad' },
	{ key: 'cubes', 			name: 'Product Strategy', 	type: 'far' },
	{ key: 'layer-plus', 		name: 'Brand Strategy', 	type: 'fad' },
	{ key: 'solar-system', 		name: 'Operations', 		type: 'fad' },
]