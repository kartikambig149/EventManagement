
import ServiceCard from "./ServiceCard";

const Services = () => {
  const services = [
    {
      title: "Corporate Events",
      description: "Professional planning and execution for your business events across India.",
      price: "From ₹1,50,000",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070",
      features: [
        "Conferences & Meetings",
        "Team Building Activities",
        "Product Launches",
        "Corporate Parties",
        "Award Ceremonies"
      ]
    },
    {
      title: "Wedding Planning",
      description: "Make your special day perfect with our comprehensive Indian wedding services.",
      price: "From ₹2,50,000",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070",
      features: [
        "Full Wedding Planning",
        "Day-of Coordination",
        "Venue Selection",
        "Vendor Management",
        "Custom Decoration"
      ]
    },
    {
      title: "Social Gatherings",
      description: "Create memorable moments with friends and family for all Indian celebrations.",
      price: "From ₹75,000",
      image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=2070",
      features: [
        "Birthday Parties",
        "Anniversary Celebrations",
        "Graduation Parties",
        "Retirement Events",
        "Festival Celebrations"
      ]
    },
    {
      title: "Virtual Events",
      description: "Engaging online events with seamless technical execution for pan-India audiences.",
      price: "From ₹50,000",
      image: "https://images.unsplash.com/photo-1609234656432-603fd648adf8?q=80&w=2070",
      features: [
        "Webinars & Workshops",
        "Virtual Conferences",
        "Online Team Building",
        "Hybrid Events",
        "Technical Support"
      ]
    }
  ];

  return (
    <section id="services" className="bg-eventia-light-gray">
      <div className="section-container">
        <h2 className="section-title text-eventia-black">Our Services</h2>
        <p className="section-subtitle text-eventia-dark-gray">
          Discover our range of professional event planning and management services tailored to your needs across India.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              price={service.price}
              image={service.image}
              features={service.features}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
