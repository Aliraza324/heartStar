import podcastImg from "../assets/images/how-it-works/how-it-works-img-2.jpg";
import articleImg from "../assets/images/insights/insight-2.jpg";
import eventImg from "../assets/images/insights/insight-3.jpg";

export const insightsContent = {
  eyebrow: "Wisdom & Announcements",
  heading: "Explore Latest Insights",
  description: "Evolve your awareness on your own terms. Tap into our intellectual library.",
};

export const insights = [
  {
    id: "podcast",
    image: podcastImg,
    eyebrow: "The Heartstar Podcast",
    title: "Holding Presence in High-Stakes Negotiations",
    description:
      "In this episode, Andreas breaks down the somatic biological hacks required to hold your state during intense board battles.",
    cta: "Listen To Episode",
  },
  {
    id: "article",
    image: articleImg,
    eyebrow: "Latest Article",
    title: "The Illusion of Cognitive Strategy",
    description: "Why mapping intellectual solutions fails when your physiological system enters a state of preservation under fire.",
    cta: "Read Intel Piece",
  },
  {
    id: "event",
    image: eventImg,
    eyebrow: "Upcoming Event",
    title: "Somatic Sovereignty: Iceland Retreat",
    description: "An exclusive 4-day integration cohort in the dramatic lava fields of Southern Iceland. July 2026. Very limited seat count.",
    cta: "Secure Invitation",
  },
];
