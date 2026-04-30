/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import HealthPlans from './components/HealthPlans';
import Differentiators from './components/Differentiators';
import SocialProof from './components/SocialProof';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ConversionBalloon from './components/ConversionBalloon';
import AIConsultant from './components/AIConsultant';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <HealthPlans />
        <Differentiators />
        <SocialProof />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppButton />
      <ConversionBalloon />
      <AIConsultant />
    </div>
  );
}
