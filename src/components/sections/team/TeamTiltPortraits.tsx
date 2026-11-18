import { motion, useReducedMotion } from "motion/react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { useKitMotion } from "@/components/kit/kitMotion";
import ImageScrollParallax from "@/components/animation/ImageScrollParallax";
import DepthTiltCard from "@/components/library/effects/DepthTiltCard";
import ToastedSticker from "@/components/kit/ToastedSticker";

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

type Member = { name: string; role?: string; imageSrc: string; imageAlt?: string };

type TeamTiltPortraitsProps = {
  label?: string;
  title?: string;
  items?: Member[];
  stickerText?: string;
  ariaLabel?: string;
  className?: string;
};

const photo = (id: number) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&w=800`;

const defaultItems: Member[] = [
  { name: "Rosa Delgado", role: "Head baker", imageSrc: photo(17981389) },
  { name: "Theo Brandt", role: "Grill lead", imageSrc: photo(6605421) },
  { name: "Mei Tanaka", role: "Front of house", imageSrc: photo(7006690) },
  { name: "Jonah Price", role: "Barista", imageSrc: photo(8327756) },
];

const TeamTiltPortraits = ({ label = "Our people", title = "The crew behind the counter", items = defaultItems, stickerText = "made with love", ariaLabel, className }: TeamTiltPortraitsProps) => {
  const reduce = useReducedMotion() ?? false;
  const kit = useKitMotion();
  const list = items.slice(0, 12);
  const words = title ? title.split(/\s+/) : [];

  const rise = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: "0.75rem" },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "0px 0px -10% 0px" },
    transition: { duration: kit.base, ease: kit.ease, delay },
  });

  if (!list.length) return null;

  return (
    <section aria-label={ariaLabel ?? title ?? label ?? "Team"} className={cn("relative overflow-x-clip bg-background py-[var(--section-space)] text-foreground", className)}>
      <div className="mx-auto flex w-[var(--container)] flex-col items-center gap-[clamp(1.5rem,3vw,3rem)]">
        {(label || title) && (
          <div className="flex max-w-[48rem] flex-col items-center gap-[clamp(1rem,1.6vw,1.5rem)] text-center">
            {label && (
              <motion.p {...rise(0)} className="font-mono text-[length:var(--text-label)] uppercase leading-none tracking-[var(--label-tracking)] text-foreground before:content-['/']">
                {label}
              </motion.p>
            )}
            {title && (
              <h2 className="text-balance text-[length:var(--text-h1)] leading-[var(--heading-leading)] tracking-[var(--heading-tracking)] [font-weight:var(--heading-weight)] [overflow-wrap:anywhere]">
                <div className="sr-only">{title}</div>
                <div aria-hidden="true">
                {words.map((word, i) => (
                  <div key={i} className={cn("inline-block overflow-hidden pb-[0.08em] align-bottom", i < words.length - 1 && "mr-[0.25em]")}>
                    <motion.div
                      initial={reduce ? false : { y: "100%" }}
                      whileInView={{ y: 0 }}
                      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
                      transition={{ duration: kit.base, ease: kit.ease, delay: 0.05 + i * 0.05 }}
                      className="inline-block"
                    >
                      {word}
                    </motion.div>
                  </div>
                ))}
                </div>
              </h2>
            )}
          </div>
        )}

        <ul className="flex w-full flex-wrap justify-center gap-x-[var(--gap)] gap-y-[clamp(2rem,4vw,3rem)]">
          {list.map((item, index) => (
            <motion.li {...rise(0.1 + (index % 4) * 0.08)} key={index} className="relative flex basis-[calc((100%-var(--gap))/2)] flex-col gap-[clamp(0.75rem,1.2vw,1rem)] lg:basis-[calc((100%-3*var(--gap))/4)]">
              {index === 0 && stickerText && <ToastedSticker text={stickerText} glyph="heart" delay={0.4} className="absolute -right-[clamp(0.75rem,2vw,1.5rem)] -top-[clamp(0.75rem,2vw,1.5rem)] size-[clamp(4.5rem,8vw,6.5rem)]" />}
              <DepthTiltCard maxTilt={8} className="w-full">
                <ImageScrollParallax imageSrc={item.imageSrc} imageAlt={item.imageAlt ?? item.name} strength={0.1 + (index % 3) * 0.06} className="aspect-[3/4] rounded-[calc(var(--radius)*1.5)] bg-tint-1" />
              </DepthTiltCard>
              <div className="flex flex-col gap-[0.375rem]">
                <h3 className="text-[length:var(--text-h3)] leading-[1.1] tracking-[var(--heading-tracking)] [overflow-wrap:anywhere]">{item.name}</h3>
                {item.role && <p className="font-mono text-[length:var(--text-label)] uppercase leading-[1.3] tracking-[var(--label-tracking)] text-muted-foreground">{item.role}</p>}
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TeamTiltPortraits;
