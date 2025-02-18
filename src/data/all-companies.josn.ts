 interface Template {
   img: string;
   company: string;
   description: string;
   link: string;
 };
 const one: Template = {
   img: "/logos/behance.svg",
   company: "Behance",
   description: "Behance is a creative platform where artists, designers, and creative professionals showcase their work, gain exposure, and connect with a global community of like-minded individuals.",
   link: "/board/company-profile",
 };
 const two: Template = {
   img: "/logos/marvel.svg",
   company: "Marvel",
   description: "Marvel is a design and prototyping platform that allows users to create interactive and visually appealing protypes for websites and mobile applications, making it easier to bring digital ideas to life and collaborate with team members.",
   link: "/board/company-profile",
 };
 const three = {
  img: "/logos/app_store.svg",
  company: "Apple",
  description: "The App Store is a digital marketplace developed by Apple, where users can browse, download, and install various mobile applications for their iOS devices, offering a wide range of utility, entertainment, and productivity apps.",
  link: "/board/company-profile",
};
const four = {
  img: "/logos/chrome.svg",
  company: "Chrome",
  description: "Chrome is a popular web browser developed by Google, known for its speed, security, and user-friendly interface. It provides a seamless browsing experience with various features and extensions to enhance productivity and customization.",
  link: "/board/company-profile",
};
const five = {
  img: "/logos/github.svg",
  company: "GitHub",
  description: "GitHub is a web-based platform for version control and collaboration, primarily used for hosting and managing software development projects. It offers a centralized location for developers to store, share, and collaborate on code repositories.",
  link: "/board/company-profile",
};
const six = {
  img: "/logos/medium.svg",
  company: "Medium",
  description: "Medium is an online publishing platform that allows users to share their ideas, stories, and expertise through written articles. It provides a space for writers, journalists, and bloggers to reach a wide audience and engage in discussions on various topics.",
  link: "/board/company-profile",
};
const seven = {
  img: "/logos/ms_xbox.svg",

  company: "Xobx",
  description: "Xbox is a gaming brand and platform developed by Microsoft, offering a range of gaming consoles, online services, and a vast library of video games. It provides an immersive gaming experience, social features, and entertainment options for gamers of all ages.",
  link: "/board/company-profile",
};
const eight = {
  img: "/logos/spotify.svg",
  company: "Spotify",
  description: "Spotify is a popular music streaming platform that offers access to millions of songs from various genres and artists. Users can create personalized playlists, discover new music, and enjoy a seamless listening experience across multiple devices.",
  link: "/board/company-profile",
};
 export const bycompany = {
   one,
   two,
   three,
   four,
   five,
   six,
   seven,
   eight
 };
 export const all = Object.values(bycompany);
