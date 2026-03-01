const ottPartners = [
  { name: 'Prime Video', image: '/images/Scroll_bar/Prime video_.png' },
  { name: 'JioHotstar', image: '/images/Scroll_bar/JioHotstar.jpg' },
  { name: 'Voot', image: '/images/Scroll_bar/Voot.jpg' },
  { name: 'Shemaroo', image: '/images/Scroll_bar/Shemaroo.jpg' },
  { name: 'EkTV', image: '/images/Scroll_bar/EkTV_.png' },
  { name: 'OTTplay', image: '/images/Scroll_bar/OTTPlay.png' },
  { name: 'Playbox TV', image: '/images/Scroll_bar/PlayBoxTV.jpg' },
  { name: 'Sony Liv', image: '/images/Scroll_bar/SonyLIV_2020.png' },
  { name: 'Zee5', image: '/images/Scroll_bar/Z5.png' },
];

function LogoSet() {
  return (
    <div className="flex shrink-0">
      {ottPartners.map((partner) => (
        <div key={partner.name} className="flex-shrink-0 flex items-center justify-center" style={{ margin: '0 25px' }}>
          <img
            src={partner.image}
            alt={partner.name}
            loading="lazy"
            className="object-contain rounded-xl"
            style={{ width: '100px', height: '100px' }}
          />
        </div>
      ))}
    </div>
  );
}

export default function OTTScrollBar() {
  return (
    <section className="py-12" style={{ backgroundColor: 'var(--bg-tertiary)' }}>
      <div className="container-custom mb-8">
        <p className="text-center text-sm font-medium text-[var(--text-muted)] uppercase tracking-widest">
          OTT Partners & Streaming Platforms
        </p>
      </div>
      <div className="container-custom relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-16 z-10" style={{ background: 'linear-gradient(to right, var(--bg-tertiary), transparent)' }} />
        <div className="absolute right-0 top-0 bottom-0 w-16 z-10" style={{ background: 'linear-gradient(to left, var(--bg-tertiary), transparent)' }} />
        <div className="flex w-max animate-marquee">
          <LogoSet />
          <LogoSet />
        </div>
      </div>
    </section>
  );
}
