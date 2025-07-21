import { SitemapStream, streamToPromise } from 'sitemap';
import { Readable } from 'stream';

interface SitemapLink {
  url: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
  lastmod?: string;
  img?: Array<{
    url: string;
    caption?: string;
    title?: string;
  }>;
  video?: Array<{
    thumbnail_loc: string;
    title: string;
    description: string;
    content_loc?: string;
    player_loc: string;
    duration?: number;
    publication_date?: string;
    family_friendly?: 'yes' | 'no';
    view_count?: number;
  }>;
  news?: {
    publication: {
      name: string;
      language: string;
    };
    publication_date: string;
    title: string;
    keywords?: string;
  };
}

export const generateSitemap = async (): Promise<string> => {
  const hostname = 'https://neverleavetheplayground.com';
  const currentDate = new Date().toISOString().split('T')[0]; // YYYY-MM-DD format
  
  const links: SitemapLink[] = [
    {
      url: '/',
      changefreq: 'weekly',
      priority: 1.0,
      lastmod: currentDate,
      img: [
        {
          url: 'https://shop.neverleavetheplayground.com/lovable-uploads/6899d407-7792-43de-a96f-7a440c293bf1.png',
          caption: 'Never Leave The Playground Logo',
          title: 'Stephen Jepson Never Leave The Playground'
        }
      ],
      video: [
        {
          thumbnail_loc: 'https://i.ytimg.com/vi/ycJwrwrYgGM/maxresdefault.jpg',
          title: 'Stephen Jepson Philosophy in Action - Growing Bolder Interview',
          description: 'Watch the viral interview that has inspired millions worldwide. Stephen Jepson demonstrates his unique methods to revolutionize balance, stability, and coordination, prevent falls, and build new brain cells.',
          content_loc: 'https://www.youtube.com/watch?v=ycJwrwrYgGM',
          player_loc: 'https://www.youtube.com/embed/ycJwrwrYgGM',
          duration: 765,
          publication_date: '2013-05-10T08:00:00+00:00',
          family_friendly: 'yes',
          view_count: 4000000
        }
      ],
      news: {
        publication: {
          name: 'Never Leave The Playground',
          language: 'en'
        },
        publication_date: currentDate,
        title: 'Never Leave The Playground - Stephen Jepson Health Revolution',
        keywords: 'Stephen Jepson, health revolution, brain health, longevity, playful movement, anti-aging, cognitive improvement, physical vitality, neuroplasticity'
      }
    },
    {
      url: '/about-me/',
      changefreq: 'monthly',
      priority: 0.9,
      lastmod: currentDate,
      img: [
        {
          url: 'https://images.pexels.com/photos/6111616/pexels-photo-6111616.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop',
          caption: 'Stephen Jepson demonstrating playful learning and cognitive engagement',
          title: 'About Stephen Jepson - Health and Wellness Expert'
        },
        {
          url: 'https://shop.neverleavetheplayground.com/lovable-uploads/6899d407-7792-43de-a96f-7a440c293bf1.png',
          caption: 'Never Leave The Playground Logo',
          title: 'Never Leave The Playground Branding'
        }
      ],
      video: [
        {
          thumbnail_loc: 'https://i.ytimg.com/vi/ycJwrwrYgGM/maxresdefault.jpg',
          title: 'Stephen Jepson Philosophy in Action',
          description: 'Learn about Stephen Jepson, the founder of Never Leave The Playground, and his inspiring journey in promoting health, longevity, and cognitive vitality through playful movement.',
          content_loc: 'https://www.youtube.com/watch?v=ycJwrwrYgGM',
          player_loc: 'https://www.youtube.com/embed/ycJwrwrYgGM',
          duration: 765,
          publication_date: '2013-05-10T08:00:00+00:00',
          family_friendly: 'yes'
        }
      ]
    },
    {
      url: '/keynote-speaker/',
      changefreq: 'monthly',
      priority: 0.9,
      lastmod: currentDate,
      img: [
        {
          url: 'https://shop.neverleavetheplayground.com/lovable-uploads/6899d407-7792-43de-a96f-7a440c293bf1.png',
          caption: 'Stephen Jepson Keynote Speaker Services',
          title: 'Book Stephen Jepson as Keynote Speaker'
        }
      ],
      video: [
        {
          thumbnail_loc: 'https://i.ytimg.com/vi/VkTwjxZ3KJg/maxresdefault.jpg',
          title: 'Expert Speaker on Fitness for Seniors and Groups of All Ages',
          description: 'A Professional Speaker on Health and Wellness - Stephen Jepson demonstrates his expertise in fitness for seniors and groups of all ages',
          content_loc: 'https://www.youtube.com/watch?v=VkTwjxZ3KJg',
          player_loc: 'https://www.youtube.com/embed/VkTwjxZ3KJg',
          duration: 318,
          publication_date: '2015-03-22T08:00:00+00:00',
          family_friendly: 'yes',
          view_count: 8900
        }
      ]
    },
    {
      url: '/activities/',
      changefreq: 'weekly',
      priority: 0.8,
      lastmod: currentDate,
      img: [
        {
          url: 'https://shop.neverleavetheplayground.com/lovable-uploads/6899d407-7792-43de-a96f-7a440c293bf1.png',
          caption: 'Stephen Jepson Activities for Brain and Body Health',
          title: 'Playful Activities for Health and Wellness'
        }
      ]
    },
    {
      url: '/public-videos/',
      changefreq: 'weekly',
      priority: 0.8,
      lastmod: currentDate,
      img: [
        {
          url: 'https://shop.neverleavetheplayground.com/lovable-uploads/6899d407-7792-43de-a96f-7a440c293bf1.png',
          caption: 'Stephen Jepson Public Videos Collection',
          title: 'Free Educational Videos on Health and Wellness'
        }
      ],
      video: [
        {
          thumbnail_loc: 'https://i.ytimg.com/vi/ycJwrwrYgGM/maxresdefault.jpg',
          title: 'Growing Bolder Interview (4M+ Views)',
          description: 'The viral interview that has inspired millions worldwide. Featured on PBS and NPR.',
          content_loc: 'https://www.youtube.com/watch?v=ycJwrwrYgGM',
          player_loc: 'https://www.youtube.com/embed/ycJwrwrYgGM',
          duration: 765,
          publication_date: '2013-05-10T08:00:00+00:00',
          family_friendly: 'yes',
          view_count: 4000000
        },
        {
          thumbnail_loc: 'https://i.ytimg.com/vi/M9vm5_-lE3U/maxresdefault.jpg',
          title: 'Play Your Way to a Healthier Life',
          description: 'Stephen demonstrates how play can lead to a healthier, longer life.',
          content_loc: 'https://www.youtube.com/watch?v=M9vm5_-lE3U',
          player_loc: 'https://www.youtube.com/embed/M9vm5_-lE3U',
          duration: 272,
          publication_date: '2014-06-15T08:00:00+00:00',
          family_friendly: 'yes',
          view_count: 15000
        },
        {
          thumbnail_loc: 'https://i.ytimg.com/vi/Y2eFlskZ0vg/maxresdefault.jpg',
          title: 'Stephen Jepson Philosophy',
          description: 'Learn about Stephen unique philosophy on health, wellness, and the power of play.',
          content_loc: 'https://www.youtube.com/watch?v=Y2eFlskZ0vg',
          player_loc: 'https://www.youtube.com/embed/Y2eFlskZ0vg',
          duration: 375,
          publication_date: '2013-08-20T08:00:00+00:00',
          family_friendly: 'yes',
          view_count: 8500
        },
        {
          thumbnail_loc: 'https://i.ytimg.com/vi/ll6aoSmWzKY/maxresdefault.jpg',
          title: 'The 5-in-1 Video',
          description: 'A comprehensive video combining five essential elements of Stephen health and wellness approach.',
          content_loc: 'https://www.youtube.com/watch?v=ll6aoSmWzKY',
          player_loc: 'https://www.youtube.com/embed/ll6aoSmWzKY',
          duration: 438,
          publication_date: '2013-11-05T08:00:00+00:00',
          family_friendly: 'yes',
          view_count: 18500
        },
        {
          thumbnail_loc: 'https://i.ytimg.com/vi/WhYhofOs3KU/maxresdefault.jpg',
          title: 'Activities Showcase',
          description: 'A showcase of various activities that promote health and longevity through play.',
          content_loc: 'https://www.youtube.com/watch?v=WhYhofOs3KU',
          player_loc: 'https://www.youtube.com/embed/WhYhofOs3KU',
          duration: 342,
          publication_date: '2014-02-10T08:00:00+00:00',
          family_friendly: 'yes',
          view_count: 12000
        },
        {
          thumbnail_loc: 'https://i.ytimg.com/vi/qTvUThjpvus/maxresdefault.jpg',
          title: 'Extended Health Benefits',
          description: 'An extended exploration of how play can transform your health and extend your life.',
          content_loc: 'https://www.youtube.com/watch?v=qTvUThjpvus',
          player_loc: 'https://www.youtube.com/embed/qTvUThjpvus',
          duration: 505,
          publication_date: '2014-09-12T08:00:00+00:00',
          family_friendly: 'yes',
          view_count: 22000
        }
      ]
    },
    {
      url: '/a-health-revolution/',
      changefreq: 'monthly',
      priority: 0.8,
      lastmod: currentDate,
      img: [
        {
          url: 'https://shop.neverleavetheplayground.com/lovable-uploads/6899d407-7792-43de-a96f-7a440c293bf1.png',
          caption: 'A Health Revolution Through Play',
          title: 'Stephen Jepson Health Revolution Movement'
        }
      ],
      video: [
        {
          thumbnail_loc: 'https://i.ytimg.com/vi/qTvUThjpvus/maxresdefault.jpg',
          title: 'Play Your Way to a Healthier Longer Life',
          description: 'Join Stephen Jepson health revolution, transforming your well-being through playful movement. Discover how simple, enjoyable activities can lead to improved memory, better concentration, and enhanced physical health.',
          content_loc: 'https://www.youtube.com/watch?v=qTvUThjpvus',
          player_loc: 'https://www.youtube.com/embed/qTvUThjpvus',
          duration: 505,
          publication_date: '2014-09-12T08:00:00+00:00',
          family_friendly: 'yes',
          view_count: 22000
        }
      ]
    },
    {
      url: '/slides/',
      changefreq: 'monthly',
      priority: 0.7,
      lastmod: currentDate,
      img: [
        {
          url: 'https://shop.neverleavetheplayground.com/lovable-uploads/6899d407-7792-43de-a96f-7a440c293bf1.png',
          caption: 'Stephen Jepson Educational Presentations and Slides',
          title: 'Professional Slide Presentations on Health and Wellness'
        }
      ],
      video: [
        {
          thumbnail_loc: 'https://i.ytimg.com/vi/ll6aoSmWzKY/maxresdefault.jpg',
          title: 'Mastering Skills Brain Health and Longevity',
          description: 'Learn how acquiring new motor skills is a powerful tool for enhancing brain function and promoting lifelong health.',
          content_loc: 'https://www.youtube.com/watch?v=ll6aoSmWzKY',
          player_loc: 'https://www.youtube.com/embed/ll6aoSmWzKY',
          duration: 438,
          publication_date: '2013-11-05T08:00:00+00:00',
          family_friendly: 'yes',
          view_count: 18500
        },
        {
          thumbnail_loc: 'https://i.ytimg.com/vi/Y2eFlskZ0vg/maxresdefault.jpg',
          title: 'Brain Health and Play Insights',
          description: 'Dive deeper into the scientific benefits of integrating playful activities into your daily routine.',
          content_loc: 'https://www.youtube.com/watch?v=Y2eFlskZ0vg',
          player_loc: 'https://www.youtube.com/embed/Y2eFlskZ0vg',
          duration: 375,
          publication_date: '2013-08-20T08:00:00+00:00',
          family_friendly: 'yes',
          view_count: 8500
        },
        {
          thumbnail_loc: 'https://i.ytimg.com/vi/M9vm5_-lE3U/maxresdefault.jpg',
          title: 'Future of Fitness',
          description: 'Stephen vision for a future where fitness is fun, accessible, and naturally integrates into a healthy lifestyle.',
          content_loc: 'https://www.youtube.com/watch?v=M9vm5_-lE3U',
          player_loc: 'https://www.youtube.com/embed/M9vm5_-lE3U',
          duration: 272,
          publication_date: '2014-06-15T08:00:00+00:00',
          family_friendly: 'yes',
          view_count: 15000
        }
      ]
    },
    {
      url: '/testimonials-media/',
      changefreq: 'monthly',
      priority: 0.7,
      lastmod: currentDate,
      img: [
        {
          url: 'https://shop.neverleavetheplayground.com/lovable-uploads/6899d407-7792-43de-a96f-7a440c293bf1.png',
          caption: 'Client Testimonials and Media Coverage',
          title: 'Stephen Jepson Reviews and Media Highlights'
        }
      ],
      video: [
        {
          thumbnail_loc: 'https://i.ytimg.com/vi/L3_bOVK-Dq8/maxresdefault.jpg',
          title: 'The Parkinson Outreach Group Testimonial',
          description: 'An incredibly unique, powerful, and motivating presentation. The Parkinson Outreach Group greatly benefited from Stephen insights and methods.',
          content_loc: 'https://www.youtube.com/watch?v=L3_bOVK-Dq8',
          player_loc: 'https://www.youtube.com/embed/L3_bOVK-Dq8',
          duration: 225,
          publication_date: '2012-09-01T08:00:00+00:00',
          family_friendly: 'yes',
          view_count: 5200
        },
        {
          thumbnail_loc: 'https://i.ytimg.com/vi/zLR0H7i1ZlI/maxresdefault.jpg',
          title: 'Alan P. Tilman Personal Testimonial',
          description: 'Personal testimonial about experience with Stephen program.',
          content_loc: 'https://www.youtube.com/watch?v=zLR0H7i1ZlI',
          player_loc: 'https://www.youtube.com/embed/zLR0H7i1ZlI',
          duration: 150,
          publication_date: '2012-09-01T08:00:00+00:00',
          family_friendly: 'yes',
          view_count: 3800
        },
        {
          thumbnail_loc: 'https://i.ytimg.com/vi/ycJwrwrYgGM/maxresdefault.jpg',
          title: 'Growing Bolder Interview - Over 4 Million Views',
          description: 'Stephen was featured on PBS television and NPR radio. This viral interview showcases his unique methods to revolutionize balance, stability, and coordination.',
          content_loc: 'https://www.youtube.com/watch?v=ycJwrwrYgGM',
          player_loc: 'https://www.youtube.com/embed/ycJwrwrYgGM',
          duration: 765,
          publication_date: '2013-05-10T08:00:00+00:00',
          family_friendly: 'yes',
          view_count: 4000000
        }
      ]
    },
    {
      url: '/contact/',
      changefreq: 'monthly',
      priority: 0.6,
      lastmod: currentDate,
      img: [
        {
          url: 'https://shop.neverleavetheplayground.com/lovable-uploads/6899d407-7792-43de-a96f-7a440c293bf1.png',
          caption: 'Contact Stephen Jepson for Speaking and Workshops',
          title: 'Get in Touch with Stephen Jepson'
        }
      ]
    }
  ];

  const stream = new SitemapStream({ 
    hostname,
    cacheTime: 600000, // 10 minutes
    xmlns: {
      news: true,
      video: true,
      image: true
    }
  });
  
  const xml = await streamToPromise(Readable.from(links).pipe(stream));
  
  return xml.toString();
};