import React from 'react';

function Googlemap() {
  return (
    <section className="w-full h-screen">
      <div className="w-full h-full">
        <iframe
          title="Google Map"
          src="https://maps.google.com/maps?width=540&amp;height=400&amp;hl=en&amp;q=Reliance%20Jio%20office%20Pratapgarh%20UP%2023001%20,%20India+(SSL%20Cloud%20Solution)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          loading="lazy"
          allowFullScreen
          className="w-full h-full border-0"
        ></iframe>
      </div>
    </section>
  );
}

export default Googlemap;
