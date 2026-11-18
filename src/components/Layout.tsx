import { Outlet } from "react-router-dom";
import NavbarSlashLinks from "@/components/navbars/NavbarSlashLinks";
import FooterWordmarkMarquee from "@/components/sections/footer/FooterWordmarkMarquee";

export default function Layout() {
  return (
    <div className="relative isolate min-h-svh flex flex-col bg-background text-foreground" data-button="default" data-card="deep" data-pattern="none">
      <header data-webild-section="Header">
        <NavbarSlashLinks
          brand="Al-Madina Market"
          navItems={[
            {
              name: "Halal Meats",
              href: "#product"
            },
            {
              name: "Groceries",
              href: "#gallery-corner-masks"
            },
            {
              name: "Meat Packages",
              href: "#pricing-workshop-tickets"
            },
            {
              name: "Reviews",
              href: "#testimonial"
            },
            {
              name: "Store Info",
              href: "#faq-slash-list"
            },
            {
              name: "Contact",
              href: "#contact-reserve-form"
            }
          ]}
          primaryButton={{
            text: "Call (215) 613-6596",
            href: "tel:(215) 613-6596"
          }}
          introDelay={3}
        />
      </header>
      <main className="flex-grow" data-button="default" data-card="deep" data-pattern="none">
        <Outlet />
      </main>
      <footer data-webild-section="Footer" data-section="footer">
        <FooterWordmarkMarquee
          wordmark="Al-Madina"
          stickerText="100% Halal Certified"
          newsletterTitle="Stay Updated on Fresh Arrivals"
          emailLabel="Email Address*"
          emailPlaceholder="info@almadinafoodmarket.com"
          submitText="Subscribe"
          imageSrc="https://img.b2bpic.net/free-photo/close-up-view-fresh-raw-red-meats-brown-wooden-cutting-board-knife-garlics-dark-color-background_179666-46985.jpg?_wi=2"
          imageAlt="Fresh premium cut halal beef on a wooden cutting board"
          caption="/Philadelphia's premier halal meat counter and market"
          columns={[
            {
              title: "Visit Us",
              items: [
                {
                  label: "8001 Castor Ave, Philadelphia, PA 19152",
                  href: "https://maps.app.goo.gl/uR2gX13ZgXW6"
                },
                {
                  label: "Get Directions",
                  href: "https://maps.app.goo.gl/uR2gX13ZgXW6"
                }
              ]
            },
            {
              title: "Store Hours",
              items: [
                {
                  label: "Mon–Sat: 9 AM–8 PM",
                  href: "#contact-reserve-form"
                },
                {
                  label: "Sun: 9 AM–6 PM",
                  href: "#contact-reserve-form"
                }
              ]
            },
            {
              title: "Contact",
              items: [
                {
                  label: "(215) 613-6596",
                  href: "tel:(215) 613-6596"
                },
                {
                  label: "info@almadinafoodmarket.com",
                  href: "mailto:info@almadinafoodmarket.com"
                }
              ]
            },
            {
              title: "Reviews",
              items: [
                {
                  label: "4.8 ★ Rating on Google",
                  href: "#testimonial"
                },
                {
                  label: "264 Verified Customer Reviews",
                  href: "#testimonial"
                },
                {
                  label: "Read Testimonials",
                  href: "#testimonial"
                }
              ]
            },
            {
              title: "Explore",
              items: [
                {
                  label: "Halal Meats",
                  href: "#product"
                },
                {
                  label: "Market Showcase",
                  href: "#gallery-corner-masks"
                },
                {
                  label: "Meat Packages",
                  href: "#pricing-workshop-tickets"
                },
                {
                  label: "Visitor FAQs",
                  href: "#faq-slash-list"
                },
                {
                  label: "Contact Store",
                  href: "#contact-reserve-form"
                }
              ]
            }
          ]}
          copyright="© 2026 Al-Madina Food & Meat Market. All rights reserved."
          credit="Philadelphia's Premier Halal Market"
          successText="Thank you for subscribing to Al-Madina updates!"
          ariaLabel="Footer"
        />
      </footer>
    </div>
  );
}
