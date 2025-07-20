import { cn } from "@/lib/utils";
import { Marquee } from "../magicui/marquee";

const reviews = [
  {
    name: "Dilshod",
    username: "@dilshod_uz",
    body: "Kitobzor orqali kerakli kitobimni topdim! Narxlar solishtirilgani juda qulay. Endi doim shu yerdan qidiraman.",
    img: "https://avatar.vercel.sh/dilshod",
  },
  {
    name: "Ziyoda",
    username: "@ziyoda_bahriddinova",
    body: "Sayt juda sodda va tushunarli. Menga yaqin do‘konda borligini ko‘rib hayron qoldim. Zo‘r loyiha!",
    img: "https://avatar.vercel.sh/ziyoda",
  },
  {
    name: "Rustam",
    username: "@rustamdev",
    body: "Bu platforma vaqtimni tejaydi. Kitoblar holati va narxi ko‘rsatilgani ayni muddao. Rahmat!",
    img: "https://avatar.vercel.sh/rustam",
  },
  {
    name: "Gulbahor",
    username: "@gulbaxor1101",
    body: "Yangidek kitoblarni topib, arzon narxda xarid qildim. Kitobxonlar uchun ayni kerakli servis!",
    img: "https://avatar.vercel.sh/gulbahor",
  },
  {
    name: "Javohir",
    username: "@javohir_q",
    body: "Tavsiya etilgan kitoblar ro‘yxati ancha foydali. Endi nima o‘qishni bilmay qolsam, shu yerga kiraman.",
    img: "https://avatar.vercel.sh/javohir",
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
        "relative h-full w-fit sm:w-36 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
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

export function MarqueeDemoVertical() {
  return (
    <div className="relative flex h-[500px] w-full flex-row items-center justify-center overflow-hidden">
      <Marquee pauseOnHover vertical className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover vertical className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee pauseOnHover vertical className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-background"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background"></div>
    </div>
  );
}
