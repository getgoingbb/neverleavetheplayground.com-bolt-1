// Structured Data for SEO
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
    "https://www.facebook.com/stephen.jepson.56/",
    "https://x.com/stephenjepson56?lang=bg",
    "https://www.youtube.com/user/StephenJepson/videos",
    "https://shop.neverleavetheplayground.com/"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "(US) 407-349-5587",
    "contactType": "customer service",
    "availableLanguage": "English"
  }
};

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://neverleavetheplayground.com/#stephen-jepson",
  "name": "Stephen Jepson",
  "jobTitle": "Health and Wellness Expert",
  "description": "Expert in health, wellness, and the transformative power of play for longevity",
  "url": "https://neverleavetheplayground.com/",
  "image": "https://neverleavetheplayground.com/about-me/stephen-jepson-lego-s2. copy copy copy.jpg",
  "sameAs": [
    "https://www.facebook.com/stephen.jepson.56/",
    "https://x.com/stephenjepson56?lang=bg",
    "https://www.youtube.com/user/StephenJepson/videos",
    "https://en.wikipedia.org/wiki/Stephen_Jepson",
    "https://shop.neverleavetheplayground.com/"
  ],
  "knowsAbout": [
    "Health and Wellness",
    "Longevity",
    "Brain Training",
    "Physical Fitness",
    "Play-based Exercise",
    "Cognitive Health",
    "Keynote Speaking",
    "Motivational Speaking",
    "Neuroplasticity Research",
    "Motor Skill Development"
  ],
  "worksFor": {
    "@type": "Organization",
    "name": "Never Leave The Playground"
  },
  "hasCredential": {
    "@type": "EducationalOccupationalCredential",
    "credentialCategory": "Health and Wellness Research",
    "recognizedBy": {
      "@type": "Organization",
      "name": "National Institutes of Health",
      "url": "https://www.nih.gov/"
    }
  }
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Never Leave The Playground",
  "url": "https://neverleavetheplayground.com/",
  "description": "Transform your health and longevity through the power of play with Stephen Jepson's revolutionary approach",
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

export const videoSchema = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  "name": "Stephen Jepson's Philosophy in Action - Growing Bolder Interview",
  "description": "Watch the viral interview that has inspired millions worldwide. Stephen Jepson demonstrates his unique methods to revolutionize balance, stability, and coordination, prevent falls, and build new brain cells.",
  "thumbnailUrl": "https://i.ytimg.com/vi/ycJwrwrYgGM/maxresdefault.jpg",
  "uploadDate": "2013-05-10T08:00:00+08:00",
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

export const breadcrumbSchema = (items: Array<{name: string, url: string}>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});