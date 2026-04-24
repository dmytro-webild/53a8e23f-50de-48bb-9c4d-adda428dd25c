"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureCardNine from '@/components/sections/feature/FeatureCardNine';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import HeroLogoBillboard from '@/components/sections/hero/HeroLogoBillboard';
import MediaAbout from '@/components/sections/about/MediaAbout';
import MetricCardFourteen from '@/components/sections/metrics/MetricCardFourteen';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TestimonialCardFifteen from '@/components/sections/testimonial/TestimonialCardFifteen';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="bounce-effect"
        defaultTextAnimation="entrance-slide"
        borderRadius="soft"
        contentWidth="medium"
        sizing="mediumLarge"
        background="aurora"
        cardStyle="gradient-mesh"
        primaryButtonStyle="shadow"
        secondaryButtonStyle="glass"
        headingFontWeight="extrabold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "Home",          id: "hero"},
        {
          name: "Services",          id: "services"},
        {
          name: "About",          id: "about"},
        {
          name: "Contact",          id: "contact"},
      ]}
      brandName="Fast Home Plumbing"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroLogoBillboard
      background={{
        variant: "radial-gradient"}}
      logoText="Fast, Reliable Plumbing—Anytime You Need It."
      description="24/7 expert service when it matters most. Reliable solutions for every home plumbing need."
      buttons={[
        {
          text: "Call Now",          href: "tel:4077436256"},
        {
          text: "Book Service",          href: "#contact"},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/side-view-man-washing-fruit_23-2149535094.jpg"
      imageAlt="Professional plumber smiling tools home"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardNine
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          title: "Water Heater Installation",          description: "High-efficiency tank and tankless installation experts.",          phoneOne: {
            imageSrc: "http://img.b2bpic.net/free-vector/plumbing-icons-set_98292-1525.jpg",            imageAlt: "water heater installation home icon"},
          phoneTwo: {
            imageSrc: "http://img.b2bpic.net/free-photo/male-plumber-working-fix-problems-client-s-house_23-2150990696.jpg",            imageAlt: "water heater installation home icon"},
        },
        {
          title: "Leak Detection & Repair",          description: "Advanced detection to protect your home structure.",          phoneOne: {
            imageSrc: "http://img.b2bpic.net/free-photo/plumbing-professional-doing-his-job_23-2150721540.jpg",            imageAlt: "leak detection plumbing service icon"},
          phoneTwo: {
            imageSrc: "http://img.b2bpic.net/free-photo/top-view-plumber-checking-kitchen-fixtures_1098-17864.jpg",            imageAlt: "leak detection plumbing service icon"},
        },
        {
          title: "Water Quality Solutions",          description: "Professional filtration and water softening services.",          phoneOne: {
            imageSrc: "http://img.b2bpic.net/free-vector/minimalist-plumber-company-business-card-template_742173-8689.jpg",            imageAlt: "water quality filtration system icon"},
          phoneTwo: {
            imageSrc: "http://img.b2bpic.net/free-vector/isometric-water-purification-technology-composition-with-icons-barrel-bottling-factory-buildings-lab-analysis-aeration-vector-illustration_1284-81082.jpg",            imageAlt: "water quality filtration system icon"},
        },
        {
          title: "Emergency Plumbing",          description: "24/7 rapid response for your urgent plumbing emergencies.",          phoneOne: {
            imageSrc: "http://img.b2bpic.net/free-photo/cheerful-young-couple-cooking_23-2147766890.jpg",            imageAlt: "emergency plumbing service icon 24-7"},
          phoneTwo: {
            imageSrc: "http://img.b2bpic.net/free-photo/plumber-covering-his-mouth_1368-772.jpg",            imageAlt: "emergency plumbing service icon 24-7"},
        },
      ]}
      showStepNumbers={false}
      title="Our Professional Services"
      description="Comprehensive plumbing solutions tailored to your home needs."
    />
  </div>

  <div id="about" data-section="about">
      <MediaAbout
      useInvertedBackground={false}
      title="Why Choose Fast Home Plumbing?"
      description="With over 89 positive reviews and a 4.7-star rating, we pride ourselves on transparency, speed, and high-quality workmanship. We treat every home as if it were our own."
      imageSrc="http://img.b2bpic.net/free-photo/young-builder-man-construction-uniform-safety-helmet-looking-confident-pointing-with-index-fingers-down-self-satisfied_141793-28592.jpg"
      imageAlt="professional plumbing team uniform clean"
    />
  </div>

  <div id="product" data-section="product">
      <ProductCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      products={[
        {
          id: "1",          brand: "Standard",          name: "Drain Cleaning",          price: "$99+",          rating: 5,
          reviewCount: "20",          imageSrc: "http://img.b2bpic.net/free-vector/plumbing-icons-composition-flat_98292-1526.jpg"},
        {
          id: "2",          brand: "Pro",          name: "Water Heater Setup",          price: "$899+",          rating: 5,
          reviewCount: "15",          imageSrc: "http://img.b2bpic.net/free-photo/worker-repairing-water-heater_23-2149334232.jpg"},
        {
          id: "3",          brand: "Standard",          name: "Emergency Service",          price: "$150+",          rating: 4,
          reviewCount: "40",          imageSrc: "http://img.b2bpic.net/free-photo/plumbing-professional-doing-his-job_23-2150721539.jpg"},
        {
          id: "4",          brand: "Standard",          name: "Pipe Repair",          price: "$199+",          rating: 5,
          reviewCount: "10",          imageSrc: "http://img.b2bpic.net/free-photo/plumbing-professional-doing-his-job_23-2150721580.jpg"},
        {
          id: "5",          brand: "Pro",          name: "Filtration System",          price: "$599+",          rating: 5,
          reviewCount: "25",          imageSrc: "http://img.b2bpic.net/free-vector/flat-world-water-day-infographic-template_23-2149279244.jpg"},
        {
          id: "6",          brand: "Pro",          name: "Faucet Install",          price: "$149+",          rating: 5,
          reviewCount: "18",          imageSrc: "http://img.b2bpic.net/free-vector/plumber-flat-icons-collection-with-toilet-sink-water-heater_98292-3030.jpg"},
      ]}
      title="Service Options"
      description="Professional plumbing solutions for every budget."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardFourteen
      useInvertedBackground={false}
      title="Our Impact"
      tag="Trusted Quality"
      metrics={[
        {
          id: "1",          value: "24/7",          description: "Always Available"},
        {
          id: "2",          value: "4.7★",          description: "Star Rating"},
        {
          id: "3",          value: "89+",          description: "Satisfied Reviews"},
        {
          id: "4",          value: "Fast",          description: "Response Time"},
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFifteen
      useInvertedBackground={true}
      testimonial="Fast Home Plumbing saved the day when our water heater failed. They showed up quickly and were very professional and friendly."
      rating={5}
      author="Sarah J."
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/cheerful-young-couple-cooking_23-2147766890.jpg",          alt: "happy customer home plumbing review"},
        {
          src: "http://img.b2bpic.net/free-photo/smiling-young-woman-pouring-coffee-cup-hold-by-his-boyfriend-kitchen_23-2148120463.jpg",          alt: "reliable plumbing service customer review"},
        {
          src: "http://img.b2bpic.net/free-photo/side-view-man-working-as-plumber_23-2150746294.jpg",          alt: "satisfied homeowner plumbing installation"},
        {
          src: "http://img.b2bpic.net/free-photo/crazy-dealer-happy-expression_1194-3984.jpg",          alt: "plumbing repair testimonial happy customer"},
        {
          src: "http://img.b2bpic.net/free-photo/plumbing-professional-doing-his-job_23-2150721550.jpg",          alt: "great plumbing experience customer home"},
      ]}
      ratingAnimation="slide-up"
      avatarsAnimation="slide-up"
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitMedia
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "q1",          title: "Do you offer emergency services?",          content: "Yes, we provide 24/7 emergency plumbing services."},
        {
          id: "q2",          title: "Are you licensed and insured?",          content: "Absolutely, all our technicians are fully licensed and insured."},
        {
          id: "q3",          title: "Do you work on weekends?",          content: "Yes, our team is available to assist you 7 days a week."},
        {
          id: "q4",          title: "What areas do you serve?",          content: "We serve all surrounding areas within Casselberry, FL."},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/front-view-young-attractive-lady-blue-construction-suit-helmet-working-holding-heavy-metallic-detail-daytime-looking-into-distance-buildings-architecture-construction_140725-16239.jpg"
      imageAlt="professional plumbing team uniform clean"
      title="Common Questions"
      description="Answers to our most frequently asked questions."
      faqsAnimation="slide-up"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={true}
      background={{
        variant: "radial-gradient"}}
      tag="Contact Us"
      title="Need Help? Call (407) 743-6256"
      description="Open 24/7 at 917 FL-436 Suite 223, Casselberry, FL. Reach out today for fast service."
      imageSrc="http://img.b2bpic.net/free-photo/plumbing-professional-doing-his-job_23-2150721568.jpg"
      mediaAnimation="slide-up"
      inputPlaceholder="Enter your email"
      imageAlt="plumbing tool box professional workshop"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoReveal
      logoText="Fast Home Plumbing"
      leftLink={{
        text: "Privacy Policy",        href: "#"}}
      rightLink={{
        text: "Terms of Service",        href: "#"}}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
