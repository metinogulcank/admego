import React from 'react'

const Hero = () => {
  return (
    <section className="hero" id="hero">
		<nav>
			<h1 className="logo">ADMEGO</h1>
			<ul>
				<li><a href="#hero">Ana Sayfa</a></li>
				<li><a href="#about">Hakkımızda</a></li>
				<li><a href="#service">Hizmetler</a></li>
				<li><a href="#contact">İletişim</a></li>
			</ul>
			<a href="#contact" className="btn">İletişime Geç</a>
		</nav>

		<div className="content">
			
			<h1><span className="colored_text">ADMEGO</span></h1>
			
		</div>
	</section>
  )
}

export default Hero
