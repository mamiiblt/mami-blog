export const navbarData = {
  homeTitle: "mamiiblt's blog",
}

export const footerData = {
  author: 'Muhammed Ali',
  authorInterest:
    "If you want to contact me, you can contact me via Telegram, GitHub and email."
}

export const homePage = {
  title: 'Welcome 👋',
  description:
    'You can find the articles I have written about my projects and other things here.',
}

export const blogsPage = {
  title: 'All Articles',
  description: 'Here you will find all the article posts I have written & published on this site.',
}

export const categoryPage = {
  title: 'Categories',
  description:
    'Blow this category is generated from all the tags are mentioned in the different blog post',
}

export const aboutPage = {
  title: 'Muhammed Ali',
  description: 'Independent Software Developer',
  aboutMe:
    "Hello! I am Muhammad Ali (a.k.a. mami, mamiiblt). Usually I'm working mainly on Android development, Web, AI and some reverse engineering projects/ apps. When I'm not crafting code, you can find me summoning solutions to problems on online judges. Just don't ask me to cast any love spells, my magic only works on machines!",
}

export const seoData = {
  title: `mamiiblt's blog`,
  ogTitle: `Let's learn Javascript, Typescript, Vue, Nuxt, & Problem Solving - Riyads Blog | Riyad's Blog`,
  description: `Hi I am Riyad. A Software Engineer at AppsCode, with over 2.5+ years experience in software development. - Riyads Blog | Riyad's Blog`,
  twitterDescription: `Riyad's Blog, where I play around with Nuxt, Vue, and more and showcase my blog, resources, etc - Riyads Blog | Riyad's Blog`,
  image:
    'https://res.cloudinary.com/dmecmyphj/image/upload/v1673548905/nuxt-blog/cover_ntgs6u.webp',
  mySite: 'https://mamiiblt.me',
  twitterHandle: '@mamiiblt',
  mailAddress: 'mami@mamiiblt.me',
}

export const siteMetaData = [
  {
    name: 'description',
    content: seoData.description,
  },
  // Test on: https://developers.facebook.com/tools/debug/ or https://socialsharepreview.com/
  { property: 'og:site_name', content: seoData.mySite },
  { property: 'og:type', content: 'website' },
  {
    property: 'og:url',
    content: seoData.mySite,
  },
  {
    property: 'og:title',
    content: seoData.ogTitle,
  },
  {
    property: 'og:description',
    content: seoData.description,
  },
  {
    property: 'og:image',
    content: seoData.image,
  },
  // Test on: https://cards-dev.twitter.com/validator or https://socialsharepreview.com/
  { name: 'twitter:site', content: seoData.twitterHandle },
  { name: 'twitter:card', content: 'summary_large_image' },
  {
    name: 'twitter:url',
    content: seoData.mySite,
  },
  {
    name: 'twitter:title',
    content: seoData.ogTitle,
  },
  {
    name: 'twitter:description',
    content: seoData.twitterDescription,
  },
  {
    name: 'twitter:image',
    content: seoData.image,
  },
]
