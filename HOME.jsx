import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="bg-[#0D1B2A] text-white min-h-screen font-sans">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4 border-b border-gray-700">
        <div className="text-2xl font-bold">Coste</div>
        <nav className="space-x-4">
          <a href="#services" className="hover:underline">Services</a>
          <a href="#about" className="hover:underline">About</a>
          <a href="#solutions" className="hover:underline">Solutions</a>
          <a href="#careers" className="hover:underline">Careers</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
        <Button className="bg-[#00BCD4] text-black font-semibold hover:bg-[#00a5bb]">Let’s Talk</Button>
      </header>

      {/* Hero Section */}
      <section className="text-center py-20 px-6 bg-gradient-to-b from-[#0D1B2A] to-[#1C1C1C]">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Powering Secure, Scalable Tech for the Future</h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-6">
          From software to cybersecurity — Coste builds the digital backbone your business needs.
        </p>
        <div className="space-x-4">
          <Button className="bg-[#00BCD4] text-black font-semibold hover:bg-[#00a5bb]">Explore Solutions</Button>
          <Button variant="outline" className="border-[#00BCD4] text-[#00BCD4] hover:bg-[#00BCD4] hover:text-black">See Our Work</Button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-6 bg-[#1C1C1C]">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            "Web Development",
            "Hardware Maintenance",
            "System Architecture",
            "Database Management",
            "Android App Development",
            "Cybersecurity",
            "Custom Software"
          ].map((service, idx) => (
            <Card key={idx} className="bg-[#0D1B2A] border-gray-700">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{service}</h3>
                <p className="text-gray-400 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 bg-[#0D1B2A]">
        <h2 className="text-3xl font-bold text-center mb-8">Let’s Build Something Secure</h2>
        <form className="max-w-2xl mx-auto grid gap-4">
          <input type="text" placeholder="Name" className="p-3 rounded bg-[#1C1C1C] text-white border border-gray-700" />
          <input type="email" placeholder="Email" className="p-3 rounded bg-[#1C1C1C] text-white border border-gray-700" />
          <textarea placeholder="Your Message" className="p-3 rounded bg-[#1C1C1C] text-white border border-gray-700" rows="4"></textarea>
          <Button className="bg-[#00BCD4] text-black font-semibold hover:bg-[#00a5bb]">Send Message</Button>
        </form>
      </section>

      {/* Footer */}
      <footer className="py-6 px-6 bg-[#1C1C1C] text-sm text-center text-gray-400">
        © {new Date().getFullYear()} Coste. All rights reserved. | Tech First. Secure Always.
      </footer>
    </main>
  );
}
