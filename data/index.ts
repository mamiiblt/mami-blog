export const navbarData = {
  homeTitle: "mamiiblt's area",
}

export const footerData = {
  author: 'mamiiblt',
  aboutAuthor:
    'Hello, I am Muhammad Ali, also known as Mami.',
  authorInterest:
    "I am generally interested in areas such as mobile application development and reverse engineering, especially Java, JavaScript and C#.",
  aboutTheSite:
    "You can find everything about me, my projects and other things in this website!",
}

export const homePage = {
  title: 'Welcome To My Blog Site',
  description:
    'You can find the blogs I currently write in this pagr.',
}

export const blogsPage = {
  title: 'All Blogs',
  description: 'Here you will find all the blog posts I have written & published on this site.',
}

export const categoryPage = {
  title: 'Categories',
  description:
    'Blow this category is generated from all the tags are mentioned in the different blog post',
}

export const aboutPage = {
  title: 'Muhammed Ali BULUT',
  description: 'Independent Software Developer',
  aboutMe:
    "Hello, if you ask who I am, you can see me as someone who has devoted his life entirely to software development.",
}

export const seoData = {
  title: `mamiiblt's blog`,
  ogTitle: `a`,
  description: 'a',
  twitterDescription: 'a'
    'https://res.cloudinary.com/dmecmyphj/image/upload/v1673548905/nuxt-blog/cover_ntgs6u.webp',
  mySite: 'https//mamiiblt.me',
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
