import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Star } from "lucide-react";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Transform Your Workflow with Our SaaS Solution</h1>
            <p className="text-xl mb-8">Streamline processes, boost productivity, and drive growth.</p>
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">Get Started Free</Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="mx-auto bg-purple-100 rounded-full p-3 w-16 h-16 flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="flex flex-col items-center text-center pt-6">
                  <img src={testimonial.avatar} alt={testimonial.name} className="w-20 h-20 rounded-full mb-4" />
                  <p className="mb-4 italic">"{testimonial.quote}"</p>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.title}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Choose Your Plan</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`text-center ${plan.featured ? 'border-purple-500 border-2' : ''}`}>
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.title}</CardTitle>
                  <p className="text-4xl font-bold my-4">${plan.price}<span className="text-base font-normal">/mo</span></p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center justify-center">
                        <CheckCircle2 className="text-green-500 mr-2 h-5 w-5" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className={plan.featured ? 'bg-purple-600 hover:bg-purple-700' : ''} variant={plan.featured ? 'default' : 'outline'}>
                    Choose Plan
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <img src="/logo.svg" alt="Company Logo" className="h-8" />
            </div>
            <nav className="mb-4 md:mb-0">
              <ul className="flex space-x-4">
                <li><a href="#" className="hover:text-purple-400">About</a></li>
                <li><a href="#" className="hover:text-purple-400">Features</a></li>
                <li><a href="#" className="hover:text-purple-400">Pricing</a></li>
                <li><a href="#" className="hover:text-purple-400">Contact</a></li>
              </ul>
            </nav>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-purple-400"><i className="fab fa-twitter"></i></a>
              <a href="#" className="hover:text-purple-400"><i className="fab fa-facebook"></i></a>
              <a href="#" className="hover:text-purple-400"><i className="fab fa-linkedin"></i></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

const features = [
  {
    icon: <Star className="h-8 w-8 text-purple-600" />,
    title: "Intuitive Interface",
    description: "User-friendly design for seamless navigation and efficient task management."
  },
  {
    icon: <CheckCircle2 className="h-8 w-8 text-purple-600" />,
    title: "Advanced Analytics",
    description: "Gain valuable insights with our powerful data analysis tools."
  },
  {
    icon: <Star className="h-8 w-8 text-purple-600" />,
    title: "Seamless Integration",
    description: "Easily connect with your favorite tools and platforms."
  }
];

const testimonials = [
  {
    quote: "This SaaS solution has revolutionized our workflow. It's intuitive, powerful, and incredibly efficient.",
    name: "Jane Doe",
    title: "CEO, Tech Innovators",
    avatar: "https://i.pravatar.cc/150?img=1"
  },
  {
    quote: "The customer support is outstanding, and the product keeps getting better with each update.",
    name: "John Smith",
    title: "CTO, Future Systems",
    avatar: "https://i.pravatar.cc/150?img=2"
  }
];

const pricingPlans = [
  {
    title: "Basic",
    price: 29,
    features: ["Core Features", "5 Team Members", "10GB Storage", "Basic Support"],
    featured: false
  },
  {
    title: "Pro",
    price: 79,
    features: ["All Basic Features", "Unlimited Team Members", "50GB Storage", "Priority Support"],
    featured: true
  },
  {
    title: "Enterprise",
    price: 199,
    features: ["All Pro Features", "Advanced Security", "Custom Integrations", "Dedicated Account Manager"],
    featured: false
  }
];

export default Index;