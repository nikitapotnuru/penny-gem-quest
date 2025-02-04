import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Star } from "lucide-react";

const Shop = () => {
  const subscriptionPlans = [
    {
      title: "Weekly Plan",
      price: "₹499",
      period: "per week",
      features: [
        "Basic financial content access",
        "Weekly newsletter",
        "Community forum access",
      ],
    },
    {
      title: "Monthly Plan",
      price: "₹1,499",
      period: "per month",
      features: [
        "All Weekly Plan features",
        "One-on-one coaching session",
        "Exclusive webinars",
        "Ad-free experience",
      ],
      popular: true,
    },
    {
      title: "Yearly Plan",
      price: "₹14,999",
      period: "per year",
      features: [
        "All Monthly Plan features",
        "Priority support",
        "Custom financial planning",
        "Exclusive workshops",
        "2 months free",
      ],
    },
  ];

  const affiliateProducts = [
    {
      title: "Financial Planning Masterclass",
      description: "Complete guide to personal finance management",
      price: "₹2,999",
      link: "#",
    },
    {
      title: "Investment Tracking Tool",
      description: "Premium tool for portfolio management",
      price: "₹1,499",
      link: "#",
    },
  ];

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">Shop</h1>

      {/* Premium Subscriptions */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Premium Subscriptions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {subscriptionPlans.map((plan) => (
            <Card key={plan.title} className={`relative ${plan.popular ? 'border-primary' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm">
                  Most Popular
                </div>
              )}
              <CardHeader>
                <CardTitle>{plan.title}</CardTitle>
                <CardDescription>
                  <span className="text-2xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground"> {plan.period}</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full mt-6">Subscribe Now</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Affiliate Products */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Recommended Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {affiliateProducts.map((product) => (
            <Card key={product.title}>
              <CardHeader>
                <CardTitle>{product.title}</CardTitle>
                <CardDescription>{product.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-xl font-bold mb-4">{product.price}</p>
                <Button asChild className="w-full">
                  <a href={product.link} target="_blank" rel="noopener noreferrer">
                    Learn More
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Reward Points */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Reward Points Program</h2>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Star className="h-5 w-5 text-primary" />
              Your Points: 250
            </CardTitle>
            <CardDescription>Earn points and redeem them for exclusive rewards</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">How to Earn Points</h3>
                <ul className="space-y-2">
                  <li>Complete courses: 50 points</li>
                  <li>Refer a friend: 100 points</li>
                  <li>Make a purchase: 10% of purchase value in points</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Available Rewards</h3>
                <ul className="space-y-2">
                  <li>500 points: 10% off any subscription</li>
                  <li>1000 points: Free month of Premium access</li>
                  <li>2000 points: One-on-one coaching session</li>
                </ul>
              </div>
              <Button variant="outline" className="w-full">View All Rewards</Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default Shop;