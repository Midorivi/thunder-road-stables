import type { LucideIcon } from 'lucide-react';
import { Camera, HeartHandshake, LandPlot, ShieldCheck } from 'lucide-react';
import { asset } from '../lib/utils';

export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Our Story', to: '/our-story' },
  { label: 'Boarding', to: '/boarding' },
  { label: 'Training', to: '/training' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Horse of the Month', to: '/horse-of-the-month' },
];

export const contactDetails = {
  name: 'Debra Rothwell',
  phone: '(631) 680-9904',
  phoneHref: 'tel:+16316809904',
  address: ['1394 Main Rd', 'Jamesport, NY 11947'],
  instagramHandle: '@thunderroadstables',
  instagramHref: 'https://www.instagram.com/thunderroadstables/',
  facebookHref: 'https://www.facebook.com/profile.php?id=61587355632278',
};

export const allGalleryImages = [
  ...Array.from({ length: 15 }, (_, index) => asset(`/gallery/photo-${index + 1}.jpg`)),
  asset('/gallery/news-1.jpg'),
  asset('/gallery/news-2.jpg'),
  asset('/gallery/news-3.jpg'),
  asset('/gallery/news-4.jpg'),
  asset('/gallery/ribbon-1.jpg'),
  asset('/gallery/fb-cover.jpg'),
];

export const homePreviewImages = [
  asset('/gallery/photo-7.jpg'),
  asset('/gallery/photo-8.jpg'),
  asset('/gallery/news-1.jpg'),
  asset('/gallery/photo-11.jpg'),
];

export const instagramPreviewImages = [asset('/gallery/photo-2.jpg'), asset('/gallery/photo-9.jpg'), asset('/gallery/news-3.jpg')];

export const homeFeatures: Array<{ title: string; description: string; icon: LucideIcon }> = [
  {
    title: 'Flexible Boarding Options',
    description:
      'Full Board, Rough Board, 24/7 Turnout, or 24/7 Turnout with stall reserved. Outside trainers, farriers, and veterinarians are welcome. High quality grain and first or second cut hay to choose from. We work with you to find the right fit.',
    icon: ShieldCheck,
  },
  {
    title: 'Hands-On, Personal Care',
    description:
      'Our experienced staff and live-on-site manager provide daily care and nightly checks. The fields, paddocks, and barns are kept in good order. A body work expert is on the premises. Every horse gets individual attention.',
    icon: HeartHandshake,
  },
  {
    title: 'Eyes on Your Horse, Always',
    description:
      'Text updates, photos, and videos of your horse when you cannot be at the farm. Stall camera installation options coming soon, giving you 24/7 access to check in from anywhere.',
    icon: Camera,
  },
  {
    title: '108 Acres to Roam',
    description:
      'Two outdoor riding arenas, one indoor arena, and a new larger indoor arena approved for construction. A harness racing practice track. Boarders are welcome to ride the entire property, with ponds and open views along the way.',
    icon: LandPlot,
  },
];

export const testimonials = [
  {
    quote: 'I visited yesterday and felt the peaceful caring of the place through those horses I met over the well kept fences.',
    author: 'Diane Brockett',
  },
  {
    quote: 'Beautiful piece of property. I used to keep one of my horses on the farm. So glad it is being kept as a horse farm.',
    author: 'Renee Kusnier',
  },
  {
    quote: 'This is the piece of heaven that everybody loves out here.',
    author: 'Councilwoman Joann Waski',
  },
];

export const boardingOptions = [
  {
    name: 'Rough Board',
    price: '$580',
    period: '/month',
    description: 'Boarders provide their own hay, shavings, feed, and daily care.',
  },
  {
    name: '24/7 Turnout No Stall',
    price: '$870',
    period: '/month',
    description: 'Includes run-in shelter and grain. Winter hay is billed at $1.50 per flake.',
  },
  {
    name: '24/7 Turnout With Stall',
    price: '$1,050',
    period: '/month',
    description: 'Includes run-in shelter, grain, hay, and a dry stall kept in reserve. Overnight stall use is $15.00.',
  },
  {
    name: 'Full Board',
    price: '$1,400',
    period: '/month',
    description: 'Includes 5 flakes of first-cut hay per day and 5 bags of shavings each week. Extra hay or shavings can be arranged as needed.',
    featured: true,
  },
];

export const boardingExtras = {
  callout:
    "Long Island's largest equestrian boarding facility. 108 acres, 90 stalls, and personal care for every horse. We adjust care to fit each horse's needs.",
  ringFees: [
    { label: 'Boarders', value: '$30 per use, max $120 per month' },
    { label: 'Visitors', value: '$40 per use' },
  ],
  dailyCare: [
    { label: 'Daily full care', value: '$25 per day' },
    { label: 'Outside trainers welcome', value: 'By arrangement' },
  ],
  aLaCarte: [
    'Grooming',
    'Cold leg hosing',
    'Deworming',
    'Second-cut hay',
    'Hoof cleaning and oiling',
    'Other individual services upon request',
  ],
};

export const storyMoments = [
  {
    eyebrow: 'The girl with the model horses',
    title: '"This was every wish on every shooting star."',
    paragraphs: [
      'Deb Rothwell was the kid who lined up model horses around the house and galloped around the yard instead of skipping. Growing up in Walton, New York, near the Catskills, she followed her uncle around his quarter horse farm like a shadow. She never had a horse of her own growing up, but rode everybody else\u2019s at any given moment.',
      'She became an elementary school teacher, then spent 25 years as a stay-at-home mom raising two sons. The horse dream never left.',
      '"The same girl who wished for a horse on every birthday candle and shooting star now has a whole horse farm." That\u2019s how she announced it. "This was every wish on every shooting star. This was every birthday candle I blew out. This was it."',
    ],
    image: asset('/gallery/news-4.jpg'),
  },
  {
    eyebrow: 'A shared chapter',
    title: 'Ken grew up in this world too.',
    paragraphs: [
      'Ken Rothwell\u2019s father managed Parr Meadows in Yaphank. Ken spent his childhood around horses, riding out to Belmont Park on race days. His father\u2019s lesson was simple: if a horse is yours, it is yours for life.',
      'Deb and Ken have been married for 30 years. Their sons fell in love with a horse named Lotti during riding lessons in Middle Island, and in 2015 Lotti became the first horse Deb ever owned. Lucky followed in 2020, a rescue from South Dakota carrying his own history. Both live at the farm now.',
      '"This has really been our dream together," Ken says. "This is our little slice of heaven that we\u2019ve created here."',
    ],
    image: asset('/gallery/ribbon-1.jpg'),
  },
  {
    eyebrow: 'Why "Thunder Road"',
    title: '"This farm is my promised land right here on earth."',
    paragraphs: [
      'In Deb\u2019s words: "Thunder Road by Bruce Springsteen has long been my favorite song. It speaks to me about busting out of a mundane situation and finding the promised land. This farm is my promised land right here on earth."',
      '"The lyrics even speak of heaven waiting down by the tracks. In my case, the heaven of watching the harness racing horses on the practice track and hearing their hoof steps carry across the farm."',
      'She almost second-guessed the name. But then, feeling lonesome for her dad one day, she came across a reel about how a Native American tribe says when you lose your father, he comes back in the thunder. "That solidified my choice. Thunder Road Stables it shall be."',
    ],
    image: asset('/gallery/news-4.jpg'),
  },
  {
    eyebrow: 'The property',
    title: 'Potato farm. Entenmann\u2019s. B.J. Farms. Now this.',
    paragraphs: [
      'The 108-acre property at 1394 Main Road started as a potato farm. In the late 1970s, Robert Entenmann (yes, the cookie and cake family) converted it into a thoroughbred facility called Big E Farm. Deb jokes that if you look closely, you might still find a donut or crumb cake growing wild in the fields.',
      'Suffolk County purchased the development rights in 1979. The land will never be developed. It changed hands a few more times before Brian and Jennifer Nixon ran it as B.J. Farms for over 30 years.',
      'Deb and Ken had been boarding Lotti and Lucky here for four years when the Nixons decided to sell. They closed on February 13, 2026 for $3.5 million, kept all six employees, and got to work. The Blizzard of 2026 hit their first month. "If we could make it through the blizzard," Ken said, "the summer will be easy."',
    ],
    image: asset('/gallery/ribbon-1.jpg'),
  },
];

export const storyHistory = [
  'The land started as a potato farm on the North Fork.',
  'It later became Entenmann’s Big E Farm.',
  'For more than thirty years, local horse people knew it as B.J. Farms.',
  'Deb and Ken boarded their own horses here before buying the property.',
  'They closed on February 13, 2026 and got to work right away.',
  'The Blizzard of 2026 hit almost immediately and tested everyone on the farm.',
  'They kept all six staff members and built the next chapter with the same care the farm deserved.',
];

export const teamHighlights = [
  'All six employees from the previous ownership stayed on.',
  'An experienced manager lives on site.',
  'Daily care and nightly checks are part of the routine.',
  'The people on the farm know the horses, the paddocks, and the work.',
];

export const horseOfTheMonthPlaceholder = {
  title: 'Horse of the Month is on the way.',
  body: 'This page will soon spotlight one horse at a time, with photos and a short story from the farm.',
};

export const springsteenLine = '“Show a little faith, there\'s magic in the night.”';
