import { motion, useReducedMotion } from "motion/react";
import { Star, Quote, CheckCircle2 } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { useKitMotion } from "@/components/kit/kitMotion";

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export type Testimonial = {
  name: string;
  caption?: string;
  quote?: string;
  rating?: number;
  imageSrc?: string;
  videoSrc?: string;
  imageAlt?: string;
};

type TestimonialVideoCoverflowProps = {
  label?: string;
  title?: string;
  description?: string;
  items?: Testimonial[];
  interval?: number;
  angle?: number;
  ariaLabel?: string;
  className?: string;
};

const defaultItems: Testimonial[] = [
  {
    name: "Ahmed K.",
    caption: "Verified Google Review",
    quote: "Very clean place. Fresh everything!",
    rating: 5,
  },
  {
    name: "Sarah M.",
    caption: "Verified Google Review",
    quote: "This store gives very fresh meat!",
    rating: 5,
  },
  {
    name: "Omar D.",
    caption: "Verified Google Review",
    quote: "The best goat meat in Philadelphia. Excellent service.",
    rating: 5,
  },
  {
    name: "Fatima R.",
    caption: "Verified Google Review",
    quote: "Absolutely love this place! The quality is amazing.",
    rating: 5,
  },
  {
    name: "David L.",
    caption: "Verified Google Review",
    quote: "High quality products and very friendly staff, highly recommended.",
    rating: 5,
  },
];

const TestimonialVideoCoverflow = ({
  label = "Our Community",
  title = "Why shoppers return to Al-Madina",
  description = "Real reviews from our valued local customers in Philadelphia.",
  items = defaultItems,
  ariaLabel,
  className,
}: TestimonialVideoCoverflowProps) => {
  const reduce = useReducedMotion();
  const kit = useKitMotion();
  const list = items && items.length > 0 ? items : defaultItems;
  const words = title ? title.split(/\s+/) : [];

  return (
    <section
      aria-label={ariaLabel ?? title ?? label ?? "Testimonials"}
      className={cn("relative overflow-x-clip bg-background py-[var(--section-space)] text-foreground", className)}
    >
      <div className="mx-auto flex w-[var(--container)] flex-col items-center gap-[clamp(2rem,4vw,3.5rem)]">
        {(label || title) && (
          <div className="mx-auto flex w-full max-w-[48rem] flex-col items-center gap-[clamp(0.75rem,1.6vw,1.25rem)] text-center">
            {label && (
              <motion.p
                initial={reduce ? false : { opacity: 0, y: "0.5rem" }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: kit.base, ease: kit.ease }}
                className="font-mono text-[length:var(--text-label)] uppercase leading-none tracking-[var(--label-tracking)] text-foreground before:content-['/']"
              >
                {label}
              </motion.p>
            )}

            {title && (
              <h2 className="text-balance text-[length:var(--text-h1)] leading-[var(--heading-leading)] tracking-[var(--heading-tracking)] [font-weight:var(--heading-weight)] [overflow-wrap:anywhere]">
                <div className="sr-only">{title}</div>
                <div aria-hidden="true">
                  {words.map((word, i) => (
                    <div key={i} className={cn("-mb-[0.15em] inline-block overflow-hidden pb-[0.15em] align-bottom", i < words.length - 1 && "mr-[0.25em]")}>
                      <motion.div
                        initial={reduce ? false : { y: "110%" }}
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

            {description && (
              <p className="max-w-[32rem] text-balance text-[length:var(--text-body)] text-muted-foreground">
                {description}
              </p>
            )}

            <motion.div
              initial={reduce ? false : { opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: kit.base, ease: kit.ease, delay: 0.2 }}
              className="mt-1 inline-flex items-center gap-2.5 rounded-full border border-border/80 bg-secondary/30 px-4 py-1.5 text-foreground backdrop-blur-sm"
            >
              <div className="flex items-center gap-0.5 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-4 fill-amber-400 text-amber-400 shrink-0" />
                ))}
              </div>
              <span className="font-mono text-[length:var(--text-small)] uppercase tracking-wider text-muted-foreground font-medium">
                5.0 / 5.0 Star Google Rating
              </span>
            </motion.div>
          </div>
        )}

        <div className="w-full max-w-[72rem]">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 md:gap-8">
            {list.map((item, index) => (
              <motion.div
                key={index}
                initial={reduce ? false : { opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -5% 0px" }}
                transition={{
                  duration: kit.base,
                  ease: kit.ease,
                  delay: index * 0.08,
                }}
                whileHover={reduce ? undefined : { y: -5, transition: { duration: 0.2 } }}
                className={cn(
                  "group relative flex flex-col justify-between rounded-[calc(var(--radius)*1.5)] border border-border/80 bg-card p-6 md:p-8 shadow-xs transition-all duration-300 hover:border-primary/40 hover:shadow-md",
                  index >= 3 && list.length === 5 ? "sm:col-span-1" : ""
                )}
              >
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(item.rating ?? 5)].map((_, i) => (
                        <Star key={i} className="size-4 fill-amber-400 text-amber-400 shrink-0" />
                      ))}
                    </div>
                    <Quote aria-hidden="true" className="size-5 text-muted-foreground/30 transition-colors group-hover:text-primary/40 shrink-0" />
                  </div>

                  <p className="text-[length:var(--text-body-lg)] font-medium leading-relaxed text-foreground">
                    "{item.quote}"
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-border/60 pt-4">
                  <div className="flex flex-col gap-0.5">
                    <p className="font-mono text-[length:var(--text-label)] font-semibold uppercase tracking-[var(--label-tracking)] text-primary">
                      — {item.name}
                    </p>
                    <span className="font-mono text-[length:var(--text-small)] text-muted-foreground">
                      {item.caption || "Verified Customer"}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 font-mono text-xs text-emerald-600 dark:text-emerald-400">
                    <CheckCircle2 className="size-3.5 shrink-0" />
                    <span>Verified</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialVideoCoverflow;
