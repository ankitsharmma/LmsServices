import React from 'react'
import Contactbanner from './contactbaneer';
import ContactCards from './Contactcard';
import ContactForm from './Contactform';
import Googlemap from './Googlemap';

function Contactpage() {
  return (
<>
<Contactbanner/>

<ContactForm/>
<ContactCards/>
<Googlemap/>
</>
  )
}

export default Contactpage;