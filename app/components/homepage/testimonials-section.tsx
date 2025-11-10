"use client";
import { AnimatedTestimonials } from "../../../components/ui/animated-testimonials";

const testimonials = [
  {
    quote: "Youme AI has completely transformed how I create content. My video titles get 3x more clicks now, and the AI-generated thumbnails are absolutely incredible!",
    name: "Sarah Johnson",
    designation: "Content Creator • 500K Subscribers",
    src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=500&fit=crop",
  },
  {
    quote: "The AI-generated thumbnails and descriptions have saved me hours of work every week. The quality is outstanding and my engagement has skyrocketed!",
    name: "Mike Chen",
    designation: "YouTube Educator • 1M Subscribers",
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop",
  },
  {
    quote: "Best investment for my channel. The social media posts feature alone is worth it. My content reaches so many more people now!",
    name: "Emily Rodriguez",
    designation: "Tech Reviewer • 750K Subscribers",
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&h=500&fit=crop",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold mb-4">Loved by Content Creators</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Join thousands of creators who are growing their channels with Youme AI
          </p>
        </div>
        
        <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
      </div>
    </section>
  );
}
