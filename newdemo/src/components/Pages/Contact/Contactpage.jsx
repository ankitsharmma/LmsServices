import React from 'react'
import ContactBanner from './ContactBanner';
import ContactCards from './Contactcard';
import ContactForm from './Contactform';
import Googlemap from './Googlemap';

function Contactpage() {
  return (
<>
<ContactBanner/>

<ContactForm/>
<ContactCards/>
<Googlemap/>
</>
  )
}

export default Contactpage;
