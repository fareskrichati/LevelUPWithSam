'use client';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { ArrowUpRight, Phone } from 'lucide-react';
import { booksy, booksyService } from '@/lib/booksy';
const google='https://www.google.com/maps/search/?api=1&query=Level+up+with+Sam&query_place_id=ChIJPeFnbPkJ3IARtwCSnptxzpw';
const groups: { name: string; items: [string, string, string, number][] }[] = [
 {name:'Hair Cut & Styling',items:[['Blowout Hair','$60+','45 min',18550741],['Female Haircut','$85+','40 min',18550742],['Bang Trim','$10','15 min',18550748],["Kid’s Haircut",'$35','30 min',18550754],["Men’s Haircut",'$50+','30 min',18550755]]},
 {name:'Hair Color',items:[['All Over Color','$125+','1 hr',18550739],['Balayage','$250','3 hr',18550746],['Color Correction','Consultation','3 hr',18550749],['Root Touch-Up','$100','45 min',18550750],['Hair Toner','$65','30 min',18550751],['Partial Highlight','$150+','1 hr 30 min',18550753]]},
 {name:'Hair Treatment',items:[['Keratin Hair Treatment','$350','2 hr 30 min',18550756],['Brazilian Blowout','$325','1 hr 30 min',18550758],['Man Brazilian Blowout','$225+','1 hr',18667209],['Deep Conditioning Treatment','$45','30 min',18550743],['Full Highlights','$275+','2 hr',18550744]]},
 {name:'Hair Maintenance',items:[['Hair Wash','$25','20 min',18550738]]},
 {name:'Head Massage',items:[['Head Massage','$15','10 min',18610527]]},
 {name:'Head Shave',items:[['Head Shave','$35','20 min',18610494]]},
 {name:'Packages',items:[['Hair Color & Cut','$185+','1 hr 25 min',18657365],['Touch Up & Blowout','$155+','1 hr 30 min',18657667],['Toner & Man Cut','$115+','1 hr',18657671]]}
];
const reviews=[
 {name:'Mike Duerr',date:'September 3, 2026',source:'Google',quote:'Sam is awesome! My hair was a mess and he created the perfect shape for me.',initials:'MD'},
 {name:'Jennifer Johnston-Jones',date:'July 15, 2026',source:'Google',quote:'Sam is an artist and so gifted! My hair went from dead to brilliant in one appointment.',initials:'JJ'},
 {name:'E A',date:'June 28, 2026',source:'Google',quote:'Sam has been my hairstylist since 2019.',initials:'EA'},
 {name:'Ella Helders',date:'July 30, 2026',source:'Google',quote:'Fantastic hair dresser. Sam really knows what he is doing.',initials:'EH'},
 {name:'Kayra Nergis',date:'July 3, 2026',source:'Google',quote:'Great hair stylist even with my curly hair! Had a wonderful time speaking with him as well.',initials:'KN'},
 {name:'Julie Lucas',date:'June 26, 2026',source:'Google',quote:'Sam did a fantastic job with my Keratin treatment. I highly recommend him !',initials:'JL'},
 {name:'Tugce Atil Ege',date:'Female haircut · Confirmed client',source:'Booksy',quote:'I love my haircut! Sam was so nice and did amazing 😊',initials:'TE'},
 {name:'May',date:'Blowout hair · Confirmed client',source:'Booksy',quote:'Excellent as always',initials:'M'},
];
export default function SalonContent(){

 return <>
 <section className="section-block" id="service-menu"><div className="section-heading"><div><p className="eyebrow">THE SERVICE MENU</p><h2>Find your <em>next look.</em></h2></div></div>
 <Accordion className="service-accordion">{groups.map(group=><AccordionItem className="service-dropdown" value={group.name} key={group.name}><AccordionTrigger className="service-dropdown-trigger"><span>{group.name}</span><span className="service-count">{group.items.length} {group.items.length===1?'service':'services'}</span></AccordionTrigger><AccordionContent className="service-dropdown-content">{group.items.map(([name,price,duration,variantId])=><div className="menu-item" key={name}><div><h4>{name}</h4><p>{duration} <span>·</span> {price}</p></div><a href={booksyService(variantId)} target="_blank" rel="noopener noreferrer" aria-label={`Book ${name} on Booksy`}>Book <ArrowUpRight size={16}/></a></div>)}</AccordionContent></AccordionItem>)}</Accordion><p className="source-note">Menu prices and durations from <a href="https://levelupwithsamsandiego.zoca.com/services" target="_blank" rel="noopener noreferrer">Sam’s service menu</a>. Prices marked + are starting prices; final pricing and availability are confirmed when booking.</p></section>
 <section className="section-block reviews-section" id="reviews"><div className="section-heading"><div><p className="eyebrow">KIND WORDS. GREAT HAIR.</p><h2>In their <em>own words.</em></h2></div><div className="review-scores"><a href={google} target="_blank" rel="noopener noreferrer"><strong>5.0 ★</strong> Google · 34 reviews</a><a href={booksy} target="_blank" rel="noopener noreferrer"><strong>4.8 ★</strong> Booksy · 20 reviews</a></div></div>
 <div className="review-grid">{reviews.map(r=><article className="review-card" key={r.name}><div className="review-platform"><span>{r.source}</span>{r.source==='Google'&&<span className="gold-stars" aria-label="5 stars">★★★★★</span>}</div><blockquote>“{r.quote}”</blockquote><div className="review-author"><span className="avatar">{r.initials}</span><div><strong>{r.name}</strong><p>{r.date}</p></div></div><a className="review-link" href={r.source==='Google'?google:booksy} target="_blank" rel="noopener noreferrer">Read on {r.source} <ArrowUpRight size={14}/></a></article>)}</div><p className="source-note">Selected review excerpts. Google reviews reproduced from <a href="https://levelupwithsamsandiego.zoca.com/#reviews" target="_blank" rel="noopener noreferrer">Sam’s existing website</a>; additional reviews from Booksy. Ratings are a snapshot, not a live feed.</p></section>
 <section className="section-block book-section" id="book-now"><div className="book-intro"><div className="book-title"><p className="eyebrow">YOUR NEXT GOOD HAIR DAY</p><h2>Book <em>now.</em></h2><p>Choose your service and time on Booksy.</p></div></div>
 <div className="hours"><p className="eyebrow">MAKE TIME FOR YOURSELF</p><h3>Working hours</h3><dl>{['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'].map((day,index)=><div key={day}><dt>{day}</dt><dd>{index<5?'9:00 AM – 5:00 PM':'Closed'}</dd></div>)}</dl><p className="hours-note">All hours are in San Diego local time. Check Booksy for available times.</p><a className="text-link" href={booksy} target="_blank" rel="noopener noreferrer">Find your next appointment <ArrowUpRight size={18}/></a></div>
 <div className="booking-card"><h3>Book on Booksy</h3><p>View services and reserve your appointment with Sam.</p><div className="booking-actions">
   <a className="book-button" href={booksy} target="_blank" rel="noopener noreferrer">Book on Booksy <ArrowUpRight size={19}/></a>
   <h3 className="booking-alternative">Or Call Sam</h3>
   <a className="book-button" href="tel:+13165162052">Call Sam · (316) 516-2052 <Phone size={19}/></a>
 </div></div></section>
 </>;
}
