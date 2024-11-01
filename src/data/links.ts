import { faFilm, faGamepad, faMusic } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faGithub,
  faGoodreads,
  faInstagram,
  faLinkedin,
  faMastodon,
  faPinterest,
  faSpotify,
  faThreads,
  faUnsplash,
  faXbox,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

import { ILink } from "src/types";

const links: ILink[] = [
  {
    icon: faLinkedin,
    id: "linkedin",
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/saviomd",
  },
  {
    icon: faGithub,
    id: "github",
    name: "GitHub",
    url: "https://github.com/saviomd",
  },
  {
    icon: faFilm,
    id: "letterboxd",
    name: "Letterboxd",
    url: "https://letterboxd.com/saviomd",
  },
  {
    icon: faInstagram,
    id: "instagram",
    name: "Instagram",
    url: "https://www.instagram.com/saviomd",
  },
  {
    icon: faPinterest,
    id: "pinterest",
    name: "Pinterest",
    url: "https://www.pinterest.com/saviomd",
  },
  {
    icon: faUnsplash,
    id: "unsplash",
    name: "Unsplash",
    url: "https://unsplash.com/@saviomd",
  },
  {
    icon: faSpotify,
    id: "spotify",
    name: "Spotify",
    url: "https://open.spotify.com/user/saviomd",
  },
  {
    icon: faMusic,
    id: "setlistfm",
    name: "setlist.fm",
    url: "https://www.setlist.fm/user/saviomd",
  },
  {
    icon: faGoodreads,
    id: "goodreads",
    name: "Goodreads",
    url: "https://www.goodreads.com/saviomd",
  },
  {
    icon: faThreads,
    id: "threads",
    name: "Threads",
    url: "https://www.threads.net/@saviomd",
  },
  {
    icon: faMastodon,
    id: "mastodon",
    name: "Mastodon",
    url: "https://mastodon.social/@saviomd",
  },
  {
    icon: faXTwitter,
    id: "x",
    name: "Twitter / X",
    url: "https://twitter.com/saviomd",
  },
  {
    icon: faFacebook,
    id: "facebook",
    name: "Facebook",
    url: "https://www.facebook.com/saviomd",
  },
  {
    icon: faXbox,
    id: "xbox",
    name: "Xbox",
    url: "https://account.xbox.com/Profile?gamerTag=saviomd",
  },
  {
    icon: faGamepad,
    id: "trueachievements",
    name: "TrueAchievements",
    url: "https://www.trueachievements.com/gamer/saviomd",
  },
  {
    icon: faGamepad,
    id: "exophase",
    name: "Exophase",
    url: "https://www.exophase.com/xbox/user/saviomd",
  },
];

export default links;
