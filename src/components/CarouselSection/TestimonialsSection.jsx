import image1 from '../../assets/New Images/man.jpg';
import image2 from '../../assets/New Images/woman.jpg';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Jacob Joshua",
      handle: "@jacobb",
      text: "Creativ made it simple to connect with skilled freelancers. My website redesign was a success thanks to their platform!",
      avatar: image1
    },
    {
      name: "Jessica James",
      handle: "@jessie",
      text: "Impressed by the variety of freelancers on Creativ. Got a top-notch writer who understood my needs perfectly.",
      avatar: image2
    },
    {
      name: "Chioma Ike",
      handle: "@chioma",
      text: "Creativ exceeded my expectations. I hired a video editor who delivered exceptional quality within my budget.",
      avatar: image1
    },
    {
      name: "Cynthia Richard",
      handle: "@cynth",
      text: "User-friendly interface, prompt communication. Creativ helped me find a talented illustrator to bring my ideas to life.",
      avatar: image2
    },
    {
      name: "Ekoja Obe",
      handle: "@obe",
      text: "I've tried several freelancer platforms, but Creativ stands out. Their options and ease of use led me to a fantastic animator.",
      avatar: image1
    },
    {
      name: "Samson Orji",
      handle: "@sam",
      text: "Found the perfect designer for my project on Creativ! Easy to navigate, great talent pool, and excellent results.",
      avatar: image2
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-[#d9d6f9] via-white to-[#d9d6f9] shadow-xl rounded-2xl">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          What our clients say about us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-[#e9e6ff] p-6 rounded-xl relative">
              {/* X Icon */}
              <div className="absolute top-6 right-6">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" fill="currentColor" />
                </svg>
              </div>

              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-3">
                  <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.handle}</p>
                </div>
              </div>

              <p className="text-gray-700">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
