// Organization Schema
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Never Leave The Playground",
  "url": "https://neverleavetheplayground.com/",
  "logo": {
    "@type": "ImageObject",
    "url": "https://shop.neverleavetheplayground.com/lovable-uploads/6899d407-7792-43de-a96f-7a440c293bf1.png",
    "width": 600,
    "height": 60
  },
  "description": "Promoting health, wellness, and longevity through the power of play and movement",
  "founder": {
    "@type": "Person",
    "name": "Stephen Jepson",
    "@id": "https://neverleavetheplayground.com/#stephen-jepson"
  },
  "sameAs": [
    "https://shop.neverleavetheplayground.com/",
    "https://www.facebook.com/stephen.jepson.56/",
    "https://x.com/stephenjepson56?lang=bg",
    "https://www.youtube.com/user/StephenJepson/videos"
  ]
};

// Person Schema
export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://neverleavetheplayground.com/#stephen-jepson",
  "name": "Stephen Jepson",
  "jobTitle": "Health and Wellness Expert",
  "description": "Expert in health, wellness, and the transformative power of play for longevity",
  "url": "https://neverleavetheplayground.com/",
  "image": "https://images.pexels.com/photos/6111616/pexels-photo-6111616.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
  "sameAs": [
    "https://www.facebook.com/stephen.jepson.56/",
    "https://x.com/stephenjepson56?lang=bg",
    "https://www.youtube.com/user/StephenJepson/videos",
    "https://en.wikipedia.org/wiki/Stephen_Jepson"
  ],
  "knowsAbout": [
    "Health and Wellness",
    "Longevity",
    "Brain Training",
    "Physical Fitness",
    "Play-based Exercise",
    "Cognitive Health",
    "Keynote Speaking",
    "Motivational Speaking"
  ]
};

// Website Schema
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Never Leave The Playground",
  "url": "https://neverleavetheplayground.com/",
  "description": "Transform your health and longevity through the power of play. Stephen Jepson's revolutionary approach combines fun activities with cutting-edge science.",
  "publisher": {
    "@type": "Organization",
    "name": "Never Leave The Playground"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://neverleavetheplayground.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

// Video Schema
export const videoSchema = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  "name": "Stephen Jepson Philosophy in Action - Growing Bolder Interview",
  "description": "Watch the viral interview that has inspired millions worldwide. Stephen Jepson demonstrates his unique methods to revolutionize balance, stability, and coordination.",
  "thumbnailUrl": "https://i.ytimg.com/vi/ycJwrwrYgGM/maxresdefault.jpg",
  "uploadDate": "2013-05-10T08:00:00+00:00",
  "duration": "PT12M45S",
  "publisher": {
    "@type": "Organization",
    "name": "Growing Bolder",
    "logo": {
      "@type": "ImageObject",
      "url": "https://shop.neverleavetheplayground.com/lovable-uploads/6899d407-7792-43de-a96f-7a440c293bf1.png",
      "width": 600,
      "height": 60
    }
  },
  "embedUrl": "https://www.youtube.com/embed/ycJwrwrYgGM",
  "interactionStatistic": {
    "@type": "InteractionCounter",
    "interactionType": { "@type": "WatchAction" },
    "userInteractionCount": "4000000"
  }
};

// News & Interviews Schema for Google Slides
export const newsInterviewsSchema = {
  "@context": "https://schema.org",
  "@type": "PresentationDigitalDocument",
  "name": "Stephen Jepson News & Interviews Collection",
  "description": "Comprehensive collection of Stephen Jepson's media coverage, television interviews, radio appearances, and press features showcasing his health and wellness expertise.",
  "url": "https://docs.google.com/presentation/d/1Z6nVAYPKb5UmhSNWpm8MWYx5PNxvdFT3q0zYtlC5StQ/edit?usp=sharing",
  "author": {
    "@type": "Person",
    "name": "Stephen Jepson",
    "url": "https://neverleavetheplayground.com/about-me/",
    "sameAs": [
      "https://en.wikipedia.org/wiki/Stephen_Jepson",
      "https://www.youtube.com/user/StephenJepson/videos"
    ]
  },
  "publisher": {
    "@type": "Organization",
    "name": "Never Leave The Playground",
    "url": "https://neverleavetheplayground.com/",
    "logo": {
      "@type": "ImageObject",
      "url": "https://shop.neverleavetheplayground.com/lovable-uploads/6899d407-7792-43de-a96f-7a440c293bf1.png"
    }
  },
  "about": [
    "Media Coverage",
    "Television Interviews", 
    "Radio Appearances",
    "Press Features",
    "Speaking Events",
    "Health and Wellness",
    "PBS Interviews",
    "NPR Radio Shows"
  ],
  "educationalLevel": "Professional",
  "learningResourceType": "Presentation",
  "inLanguage": "en-US",
  "isAccessibleForFree": true,
  "datePublished": "2025-01-13",
  "keywords": "Stephen Jepson media coverage, PBS interviews, NPR radio, television appearances, press features, health expert interviews, wellness speaker media"
};