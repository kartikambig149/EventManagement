
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    position: "CEO, TechStart Inc.",
    content: "Eventia transformed our company retreat into an unforgettable experience. Their attention to detail and creative approach exceeded our expectations.",
    image: "https://randomuser.me/api/portraits/women/1.jpg"
  },
  {
    name: "Michael Chen",
    position: "Marketing Director",
    content: "Working with Eventia for our product launch was the best decision we made. They handled everything professionally and the event was a huge success!",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Emily Rodriguez",
    position: "Newlywed",
    content: "Our wedding was absolutely perfect thanks to Eventia. They took care of every detail and allowed us to truly enjoy our special day without any stress.",
    image: "https://randomuser.me/api/portraits/women/63.jpg"
  },
  {
    name: "David Wilson",
    position: "Conference Organizer",
    content: "Eventia managed our annual conference, and the feedback from attendees was overwhelmingly positive. Their team is responsive, professional, and detail-oriented.",
    image: "https://randomuser.me/api/portraits/men/85.jpg"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="testimonials" className="bg-white">
      <div className="section-container">
        <h2 className="section-title">What Our Clients Say</h2>
        <p className="section-subtitle">
          Hear from those who have experienced our event management services firsthand.
        </p>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <Card className="border shadow-sm hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex flex-col items-center text-center">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="w-20 h-20 rounded-full mb-4 border-2 border-eventia-purple"
                        />
                        <p className="text-lg italic mb-4">{testimonial.content}</p>
                        <div>
                          <p className="font-semibold">{testimonial.name}</p>
                          <p className="text-sm text-gray-500">{testimonial.position}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center mt-6 gap-4">
            <button 
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-eventia-light-purple hover:bg-eventia-purple/20 text-eventia-purple transition-colors"
              aria-label="Previous testimonial"
            >
              <ArrowLeft size={24} />
            </button>
            <button 
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-eventia-light-purple hover:bg-eventia-purple/20 text-eventia-purple transition-colors"
              aria-label="Next testimonial"
            >
              <ArrowRight size={24} />
            </button>
          </div>

          {/* Indicators */}
          <div className="flex justify-center space-x-2 mt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full ${
                  index === currentIndex ? "bg-eventia-purple" : "bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
