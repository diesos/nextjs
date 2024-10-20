import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "This app is incredibly intuitive and fast! Keeping track of my notes has never been easier.",
    img: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    name: "John",
    username: "@john",
    body: "A top-notch app for managing notes. The design is sleek, and the performance is outstanding.",
    img: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "The user experience on this Note CRUD app is excellent. I use it daily to organize my tasks.",
    img: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "I can’t believe how much this app has simplified my work. I highly recommend it!",
    img: "https://randomuser.me/api/portraits/women/5.jpg",
  },
  {
    name: "James",
    username: "@james",
    body: "This app is perfect for keeping notes organized. It’s exactly what I needed.",
    img: "https://randomuser.me/api/portraits/men/6.jpg",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}
