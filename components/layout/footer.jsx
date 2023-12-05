import { useState, useEffect } from 'react'

import Container from '../structure/container'
import Icon from '../utils/icon.util'
import moment from 'moment'

import css from '../../styles/structure/footer.module.scss'

import content from '../../content/footer.json'
import settings from '../../content/_settings.json'

export default function Footer() {
	moment.locale("en-gb")

	const dateSortFunction = (a, b) => {
		return moment(a.date, "DD-MM-YYYY").isBefore(moment(b.date, "DD-MM-YYYY")) ? 1 : -1;
	};
	
	
	
	return (
		<footer className={css.container}>
			<Container spacing={['verticalXXLrg', 'bottomLrg']}>
				<section className={css.sections}>
					<ul className={css.thanks}>
						<li><h4>Gigs</h4></li>
						{
						content.gigs.sort(dateSortFunction).map( ({ date, event, venue, city }, index) => {

							return (
								<li key={index}>
									<p>{venue} {venue && event ? "|" : ""} {event}</p>
									<h3>{date}</h3>
									<p>{city}</p>
								</li>
							)
						})
						}
					</ul>

					<ul className={css.social}>
						<li><h4>Social</h4></li>
						<li className={css.socialList}>
							{
							content.social.map( ({ url, icon }, index) => {
								return (
									<a  key={index} href={url} rel="noreferrer" target="_blank"><Icon icon={[ icon === "at" ? 'fas' : 'fab', icon ]} /></a>
								)
							})
							}
						</li>
					</ul>
				</section>
				
			</Container>
			<canvas id="gradient-canvas" className={''} data-transition-in ></canvas>
		</footer>
	)
}
