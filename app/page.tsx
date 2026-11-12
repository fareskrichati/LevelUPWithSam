import { booksy } from '@/lib/booksy';
import SalonContent from './salon-content';
import { ArrowUpRight, Scissors, MapPin, Phone } from 'lucide-react';

export default function Home() {
  return (
    <div className="site-shell">
      <header className="header">
        <a className="wordmark" href="#home" aria-label="Level up with Sam home"><Scissors size={23} strokeWidth={1.4}/><span>LEVEL UP <em>with Sam</em></span></a>
        <nav className="top-nav" aria-label="Main navigation"><a href="#service-menu">Services</a><a href="#reviews">Reviews</a><a href="#visit">Visit</a><a className="nav-book" href={booksy}>Book on Booksy <ArrowUpRight size={16}/></a></nav>
      </header>
      <main id="home">
        <section className="hero" aria-labelledby="hero-title">
          <div className="portrait-wrap">
            <div className="portrait" role="img" aria-label="Sam styling a client's long blonde hair" />
            <div className="portrait-caption"><span>GOOD HAIR. GREAT ENERGY.</span><span>By Sam <ArrowUpRight size={16}/></span></div>
          </div>
          <div className="hero-copy">
            <p className="eyebrow"><span/> YOUR NEXT CHAPTER STARTS HERE</p>
            <h1 id="hero-title">Level up<br/><em>with Sam.</em></h1>
            <p className="intro">This is where the magic happens.</p>
            <p className="description">Personalized haircuts, effortless styling, and beautiful color in San Diego. Expert care for a look that feels like you—just leveled up.</p>
            <div className="booking">
              <a className="book-button" href={booksy}>Book on Booksy <ArrowUpRight size={20}/></a>
              <p>Choose your service and time on Booksy</p>
              <a className="book-button hero-call" href="tel:+13165162052">Call Sam · (316) 516-2052 <Phone size={20}/></a>
            </div>
            <div className="rating"><span className="stars" aria-label="5 stars">★★★★★</span><span><strong>5.0</strong> <span className="rating-divider">/</span> 34 Google reviewers</span></div>
          </div>
        </section>
        <section className="services" aria-label="Hair services"><span className="services-label">A LITTLE REFRESH.<br/>A BIG DIFFERENCE.</span><div className="service-list"><span>Haircuts & styling</span><i>✦</i><span>Color & highlights</span><i>✦</i><span>Balayage</span><i>✦</i><span>Hair treatments</span></div></section>
        <SalonContent/>
        <section className="visit" id="visit" aria-labelledby="visit-title">
          <div className="visit-info"><p className="eyebrow">COME IN. LEAVE CONFIDENT.</p><h2 id="visit-title">Visit <em>Sam.</em></h2><p className="visit-description">Your next look starts here. Find Sam on Carmel Country Road in San Diego for personalized cuts, color, styling, and hair treatments.</p>
          <a className="contact-line" href="https://www.google.com/maps/search/?api=1&query=12750+Carmel+Country+Rd+A101+Studio+26+San+Diego+CA+92130" target="_blank" rel="noopener noreferrer"><MapPin size={21}/><span>12750 Carmel Country Rd, A101, Ste 26<br/>San Diego, CA 92130-2159</span><ArrowUpRight size={20}/></a>
          <a className="contact-line" href="tel:+13165162052"><Phone size={20}/><span>+1 (316) 516-2052</span><ArrowUpRight size={20}/></a>

          <div className="visit-details"><div><h3>Find the studio</h3><p>Head to A101, Suite 26 at the address above. Open the map for directions, or call Sam if you need help finding the studio.</p></div><div><h3>Before your appointment</h3><p>Bring inspiration photos and share your hair goals. Add any questions or details about your current color in your booking notes so Sam knows what you have in mind.</p></div></div>
          </div>
          <div className="visit-map"><iframe className="map" title="Map to Level up with Sam in San Diego" src="https://www.google.com/maps?q=12750+Carmel+Country+Rd+A101+San+Diego+CA+92130&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /><a className="text-link" href="https://www.google.com/maps/search/?api=1&query=12750+Carmel+Country+Rd+A101+Studio+26+San+Diego+CA+92130" target="_blank" rel="noopener noreferrer">Get directions <ArrowUpRight size={18}/></a></div>
        </section>
      </main>
      <footer><span>LEVEL UP WITH SAM</span><span>Good hair looks Great with Sam</span><span>San Diego, CA</span></footer>
    </div>
  );
}
