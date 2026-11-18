import HeroWordmarkWindow from "@/components/sections/hero/HeroWordmarkWindow";
import ProductBestsellerTrack from "@/components/sections/product/ProductBestsellerTrack";
import GalleryCornerMasks from "@/components/sections/gallery/GalleryCornerMasks";
import TeamTiltPortraits from "@/components/sections/team/TeamTiltPortraits";
import PricingWorkshopTickets from "@/components/sections/pricing/PricingWorkshopTickets";
import TestimonialVideoCoverflow from "@/components/sections/testimonial/TestimonialVideoCoverflow";
import FaqSlashList from "@/components/sections/faq/FaqSlashList";
import ContactReserveForm from "@/components/sections/contact/ContactReserveForm";
import LoaderPanelFlick from "@/components/loaders/LoaderPanelFlick";

export default function HomePage() {
  return (
    <>
      <LoaderPanelFlick
        images={[
          "https://img.b2bpic.net/free-photo/raw-meat-grill-arrangement_23-2148917727.jpg",
          "https://img.b2bpic.net/free-photo/raw-t-bone-steak-with-herbs-salt-dark-background_84443-72359.jpg",
          "https://img.b2bpic.net/free-photo/close-up-view-fresh-raw-red-meats-brown-wooden-cutting-board-knife-garlics-dark-color-background_179666-46985.jpg",
          "https://img.b2bpic.net/free-photo/top-view-meat-with-salt-spices-slate_23-2148610982.jpg",
          "https://img.b2bpic.net/free-photo/cardboard-box-with-vegetables-fruits_23-2148667903.jpg"
        ]}
        label="/100% Halal Certified"
        caption="/Fresh Cuts Daily in Philadelphia"
      />

      <div id="hero" data-webild-section="HeroWordmarkWindow" data-webild-section-id="HeroWordmarkWindow-1" data-section="hero" data-scene>
        <HeroWordmarkWindow
          title="Al-Madina"
          description="Philadelphia's choice for 100% certified Halal meats and authentic Middle Eastern groceries."
          imageSrc="https://img.b2bpic.net/free-photo/high-angle-raw-t-bone-steak_23-2148440928.jpg"
          imageAlt="raw t-bone steak with spices"
          leftLabel="/100% Halal Certified"
          rightLabel="/4.8 Star Rating"
          marquee={[
            "100% Halal Meats",
            "Fresh Produce Daily",
            "Castor Ave Philly"
          ]}
          introDelay={3}
          handoff
        />
      </div>

      <div id="product" data-webild-section="ProductBestsellerTrack" data-webild-section-id="ProductBestsellerTrack-1" data-section="product" data-scene>
        <ProductBestsellerTrack
          label="/Halal Butchery"
          title="Finest Halal meats cut fresh daily"
          items={[
            {
              name: "Fresh Halal Beef",
              price: "Call",
              imageSrc: "https://img.b2bpic.net/free-photo/view-raw-fresh-red-meat-with-green-pepper-black-board-knife-garlics-lemon-spices-wooden-hammer-lemon-wine-bottle-oil-pastel-red-background_179666-46928.jpg",
              imageAlt: "Above view of raw fresh red meat with green and pepper on black board knife garlics lemon spices wooden hammer lemon wine bottle on oil pastel red background"
            },
            {
              name: "Premium Lamb",
              price: "Call",
              imageSrc: "https://img.b2bpic.net/free-photo/raw-meat-seasoned-baking-pan_23-2148599748.jpg",
              imageAlt: "Raw meat seasoned  in baking pan"
            },
            {
              name: "Fresh Goat Meat",
              price: "Call",
              imageSrc: "https://img.b2bpic.net/free-photo/close-up-view-fresh-raw-red-meats-brown-wooden-cutting-board-knife-garlics-dark-color-background_179666-46985.jpg",
              imageAlt: "raw beef on wooden cutting board"
            },
            {
              name: "Halal Chicken",
              price: "Call",
              imageSrc: "https://img.b2bpic.net/free-photo/raw-beef-meat_74190-4079.jpg",
              imageAlt: "close up of raw beef"
            },
            {
              name: "Fresh Sausages",
              price: "Call",
              imageSrc: "https://img.b2bpic.net/free-photo/raw-meat-color-background_1220-7392.jpg",
              imageAlt: "raw beef steak on beige"
            },
            {
              name: "Custom Meat Cuts",
              price: "Call",
              imageSrc: "https://img.b2bpic.net/free-photo/male-hand-gloves-cutting-juicy-grapefruit-marble-table_2831-7925.jpg",
              imageAlt: "Male hand in gloves cutting juicy grapefruit on marble table."
            }
          ]}
          button={{
            text: "Call for Pricing",
            href: "tel:(215) 613-6596"
          }}
        />
      </div>

      <div id="gallery-corner-masks" data-webild-section="GalleryCornerMasks" data-webild-section-id="GalleryCornerMasks-1" data-section="gallery-corner-masks">
        <GalleryCornerMasks
          label="Inside Our Market"
          title="Fresh Halal Meats and Middle Eastern Groceries"
          ariaLabel="Photo gallery of Al-Madina Food & Meat Market"
          items={[
            {
              imageSrc: "https://img.b2bpic.net/free-photo/fresh-beef-steak-with-rosemary-sprigs-peppercorns-isolated-white-background_60438-3495.jpg",
              imageAlt: "Fresh beef steak with rosemary sprigs and peppercorns isolated on white background",
              caption: "Hand-cut Halal beef"
            },
            {
              imageSrc: "https://img.b2bpic.net/free-photo/top-view-fresh-meat-slice-with-tomatoes-pepper-dark-blue-background-kitchen-animal-cow-chicken-food-color-meat_179666-45998.jpg",
              imageAlt: "Top view fresh meat slice with tomatoes and pepper on dark blue background kitchen animal cow chicken food color meat",
              caption: "Custom cut steaks"
            },
            {
              imageSrc: "https://img.b2bpic.net/free-photo/front-view-peppers-tomatoes-wicker-basket-bowl-dark-background_140725-139453.jpg",
              imageAlt: "Front view peppers and tomatoes in wicker basket bowl on dark background",
              caption: "Fresh produce selection"
            },
            {
              imageSrc: "https://img.b2bpic.net/free-photo/top-view-meat-with-salt-spices-slate_23-2148610982.jpg",
              imageAlt: "raw meat with spices on slate",
              caption: "Premium lamb cuts"
            },
            {
              imageSrc: "https://img.b2bpic.net/free-photo/top-view-two-tattooed-hands-three-steaks-white-craft-paper-old-wooden-table_346278-541.jpg",
              imageAlt: "hands preparing raw steaks",
              caption: "Expert butcher service"
            },
            {
              imageSrc: "https://img.b2bpic.net/free-photo/photorealistic-view-woman-harvesting-organic-sustainable-garden_23-2151462910.jpg",
              imageAlt: "Photorealistic view of woman harvesting in an organic sustainable garden",
              caption: "Daily fresh arrivals"
            },
            {
              imageSrc: "https://img.b2bpic.net/free-photo/grilled-steak-with-fresh-herb-garnish-dark-slate-plate-closeup_84443-91405.jpg",
              imageAlt: "Grilled steak with fresh herb garnish on dark slate plate closeup",
              caption: "Quality cuts daily"
            },
            {
              imageSrc: "https://img.b2bpic.net/free-photo/medium-shot-woman-reading_23-2149081060.jpg",
              imageAlt: "Medium shot woman reading",
              caption: "Authentic pantry staples"
            }
          ]}
        />
      </div>

      <div id="team-tilt-portraits" data-webild-section="TeamTiltPortraits" data-webild-section-id="TeamTiltPortraits-1" data-section="team-tilt-portraits">
        <TeamTiltPortraits
          label="Our Market Team"
          title="Meet the experts behind our Halal counter"
          items={[
            {
              name: "Lauren Coleman",
              role: "Head Grocery Specialist",
              imageSrc: "https://img.b2bpic.net/free-photo/female-staff-standing-meat-counter_107420-63669.jpg",
              imageAlt: "Female staff standing at meat counter"
            },
            {
              name: "Connor Hughes",
              role: "Head Halal Butcher",
              imageSrc: "https://img.b2bpic.net/free-photo/unrecognizable-tattoed-butcher-black-gloves-offers-piece-luxury-whale-meat-white-craft-paper_346278-669.jpg",
              imageAlt: "man holding raw beef steak"
            },
            {
              name: "Abigail Reid",
              role: "Customer Service Lead",
              imageSrc: "https://img.b2bpic.net/free-photo/beautiful-woman-carrying-shopping-bags_23-2148660763.jpg",
              imageAlt: "smiling woman with shopping bags"
            },
            {
              name: "Caleb Henderson",
              role: "Senior Meat Craftsman",
              imageSrc: "https://img.b2bpic.net/free-photo/butcher-pepper-tied-piece-steak-meat-smoke-closeup_346278-622.jpg",
              imageAlt: "man seasoning raw beef"
            },
            {
              name: "Megan Foster",
              role: "Fresh Produce Lead",
              imageSrc: "https://img.b2bpic.net/free-photo/front-view-cute-girl-looking-away_23-2148436134.jpg",
              imageAlt: "smiling woman in plaid shirt"
            },
            {
              name: "Callum Turner",
              role: "Store General Manager",
              imageSrc: "https://img.b2bpic.net/free-photo/smiling-african-american-man-posing-library_74855-1619.jpg",
              imageAlt: "smiling man in white shirt"
            },
            {
              name: "Layla Mansour",
              role: "Middle Eastern Foods Buyer",
              imageSrc: "https://img.b2bpic.net/free-photo/dreamy-woman-with-shopping-bags_23-2147652116.jpg",
              imageAlt: "woman shopping with colorful bags"
            },
            {
              name: "Zahra Al-Sayed",
              role: "Quality Control Lead",
              imageSrc: "https://img.b2bpic.net/free-photo/smiling-woman-standing-supermarket_107420-96366.jpg",
              imageAlt: "woman shopping in a supermarket"
            }
          ]}
          stickerText="Cut fresh daily"
        />
      </div>

      <div id="pricing-workshop-tickets" data-webild-section="PricingWorkshopTickets" data-webild-section-id="PricingWorkshopTickets-1" data-section="pricing-workshop-tickets">
        <PricingWorkshopTickets
          label="Meat Packages"
          title="Custom cuts and bulk packages"
          description="Order custom halal meat cuts and bulk packages prepared by our expert master butchers in Castor Ave."
          featuredTag="Most Popular"
          items={[
            {
              label: "Weekly Essentials",
              name: "Halal Poultry Pack",
              price: "Call",
              period: "for pricing",
              features: [
                "Fresh chicken cuts",
                "Cleaned and prepped",
                "Custom portion packaging"
              ],
              cta: {
                text: "Call store",
                href: "tel:2156136596"
              }
            },
            {
              label: "Family Favorite",
              name: "Beef & Lamb Combo",
              price: "Call",
              period: "for pricing",
              features: [
                "Hand-selected cuts",
                "Prime beef and lamb",
                "Trimmed to preference"
              ],
              cta: {
                text: "Call store",
                href: "tel:2156136596"
              },
              featured: true
            },
            {
              label: "Special Event",
              name: "Whole Lamb Order",
              price: "Call",
              period: "for pricing",
              features: [
                "100% Zabiha Halal",
                "Custom butcher cuts",
                "Advance reservation"
              ],
              cta: {
                text: "Call store",
                href: "tel:2156136596"
              }
            }
          ]}
        />
      </div>

      <div id="testimonial" data-webild-section="TestimonialVideoCoverflow" data-webild-section-id="TestimonialVideoCoverflow-1" data-section="testimonial">
        <TestimonialVideoCoverflow
          label="Our Community"
          title="Why shoppers return to Al-Madina"
          items={[
            {
              name: "Lauren Coleman",
              caption: "Local Patron",
              quote: "Very clean place. Fresh everything! The custom cut beef and fresh produce are always top quality.",
              imageSrc: "https://img.b2bpic.net/free-photo/professional-businesswoman-having-video-call_23-2148452681.jpg"
            },
            {
              name: "Connor Hughes",
              caption: "Regular Shopper",
              quote: "This store gives very fresh meat! The butchers prepare everything exactly to order with great skill.",
              imageSrc: "https://img.b2bpic.net/free-photo/hairstyle-clothes-wall-happiness-closeup_1153-2255.jpg"
            },
            {
              name: "Abigail Reid",
              caption: "Local Patron",
              quote: "The best goat meat in Philadelphia. Excellent service and wonderful selection of fresh bread and spices.",
              imageSrc: "https://img.b2bpic.net/free-photo/eastern-woman-shopping_1303-5242.jpg"
            },
            {
              name: "Caleb Henderson",
              caption: "Loyal Customer",
              quote: "Absolutely love this place! The quality is amazing, the store is clean, and staff are super friendly.",
              imageSrc: "https://img.b2bpic.net/free-photo/front-view-man-arranging-cookies-display_23-2148366703.jpg"
            },
            {
              name: "Megan Foster",
              caption: "Regular Shopper",
              quote: "Incredible selection of premium halal lamb and Arabic groceries. Always clean and welcoming.",
              imageSrc: "https://img.b2bpic.net/free-photo/fashion-portrait-beautiful-girl-city_1301-5235.jpg"
            }
          ]}
        />
      </div>

      <div id="faq-slash-list" data-webild-section="FaqSlashList" data-webild-section-id="FaqSlashList-1" data-section="faq-slash-list">
        <FaqSlashList
          label="/Store FAQ"
          title="Before your visit"
          description="Quick details on our certified Halal meats, weekly hours, and Castor Avenue store location in Philadelphia."
          sticker="fresh daily"
          items={[
            {
              title: "Is all meat at Al-Madina certified Halal?",
              description: "Yes, 100% of our beef, lamb, goat, and chicken is strictly certified Halal and freshly prepared daily."
            },
            {
              title: "Where is the market located?",
              description: "We are located at 8001 Castor Ave, Philadelphia, PA 19152, with convenient parking right outside."
            },
            {
              title: "What are your store hours?",
              description: "We are open Monday through Saturday from 9 AM to 8 PM, and Sunday from 9 AM to 6 PM."
            },
            {
              title: "Do you offer custom butcher cuts?",
              description: "Yes, our butchers prepare custom cuts for beef, lamb, goat, and poultry directly at the counter upon request."
            }
          ]}
        />
      </div>

      <div id="contact-reserve-form" data-webild-section="ContactReserveForm" data-webild-section-id="ContactReserveForm-1" data-section="contact-reserve-form">
        <ContactReserveForm
          label="Visit Us"
          title="Visit Our Philadelphia Market"
          description="Stop by for fresh Halal meats and authentic groceries, or send a message for custom butcher cut inquiries."
          submitText="Send Inquiry"
          successText="Thank you, we will contact you shortly."
          details={[
            "8001 Castor Ave, Philadelphia PA",
            "(215) 613-6596",
            "Mon–Sat 9AM–8PM, Sun 9AM–6PM"
          ]}
          imageAlt="Fresh premium raw Halal meat displayed at Al-Madina market counter"
          stickerText="100% Fresh Halal"
          labels={{
            name: "Your Name",
            email: "Email Address",
            date: "Target Visit Date",
            guests: "Quantity Required",
            note: "Custom Cut Details"
          }}
        />
      </div>
    </>
  );
}
