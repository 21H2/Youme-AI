import { getAuth } from "@clerk/react-router/ssr.server";
import { ConvexHttpClient } from "convex/browser";
import { api } from "convex/_generated/api";
import Footer from "~/components/homepage/footer";
import HeroSection from "~/components/homepage/hero-section";
import FeaturesSectionDemo from "~/components/homepage/features-section-demo";
import { MacbookSection } from "~/components/homepage/macbook-section";
import ScrollStack, { ScrollStackItem } from "~/components/ScrollStack";
import ProfileCard from "~/components/ProfileCard";
import type { Route } from "./+types/home";

export function meta({ }: Route.MetaArgs) {
  const title = "YouTube AI Assistant - Streamline Your Video Content Creation";
  const description =
    "AI-powered assistant for YouTube creators. Generate optimized titles, descriptions, thumbnails, and social media posts for your videos using advanced AI technology.";
  const keywords = "YouTube, AI Assistant, Content Creation, Video Optimization, AI Thumbnails, OpenAI, GPT-4, Video Transcription, Content Generator";
  const siteUrl = "https://youtube-ai-assistant.com/";
  const imageUrl =
    "https://jdj14ctwppwprnqu.public.blob.vercel-storage.com/youtube-ai-assistant-og.png";

  return [
    { title },
    {
      name: "description",
      content: description,
    },

    // Open Graph / Facebook
    { property: "og:type", content: "website" },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:image", content: imageUrl },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { property: "og:url", content: siteUrl },
    { property: "og:site_name", content: "YouTube AI Assistant" },
    { property: "og:image", content: imageUrl },

    // Twitter Card
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    {
      name: "twitter:description",
      content: description,
    },
    { name: "twitter:image", content: imageUrl },
    {
      name: "keywords",
      content: keywords,
    },
    { name: "author", content: "YouTube AI Team" },
    { name: "favicon", content: "/youtube-ai-logo.png" },
  ];
}

export async function loader(args: Route.LoaderArgs) {
  const { userId } = await getAuth(args);
  
  // Fetch initial stats from Convex
  const convexUrl = process.env.VITE_CONVEX_URL || "https://charming-bird-938.convex.cloud";
  const convex = new ConvexHttpClient(convexUrl);
  
  let initialStats = null;
  try {
    initialStats = await convex.query(api.stats.getHeroStats);
  } catch (error) {
    console.error("Error fetching stats:", error);
    // Continue without stats if there's an error
  }

  return {
    isSignedIn: !!userId,
    initialStats,
  };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return (
    <>
      <HeroSection loaderData={loaderData}/>
      <ScrollStack
        className="my-16"
        itemDistance={150}
        itemScale={0.05}
        itemStackDistance={40}
        stackPosition="30%"
        scaleEndPosition="15%"
        baseScale={0.9}
        useWindowScroll={true}
      >
        <ScrollStackItem itemClassName="bg-gradient-to-br from-purple-500 to-pink-500">
          <h2 className="text-4xl font-bold text-white">AI-Powered Content</h2>
          <p className="text-white/90 mt-4">Generate engaging content with advanced AI</p>
        </ScrollStackItem>
        <ScrollStackItem itemClassName="bg-gradient-to-br from-blue-500 to-cyan-500">
          <h2 className="text-4xl font-bold text-white">Smart Analytics</h2>
          <p className="text-white/90 mt-4">Track your content performance in real-time</p>
        </ScrollStackItem>
        <ScrollStackItem itemClassName="bg-gradient-to-br from-green-500 to-emerald-500">
          <h2 className="text-4xl font-bold text-white">Easy Sharing</h2>
          <p className="text-white/90 mt-4">Share your content across all platforms</p>
        </ScrollStackItem>
      </ScrollStack>
      <FeaturesSectionDemo />
      <MacbookSection />
      <div className="flex justify-center items-center py-20 bg-background">
        <ProfileCard
          avatarUrl="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&h=400&fit=crop"
          miniAvatarUrl="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop"
          name="Youme AI"
          title="AI Content Creator"
          handle="youmeai"
          status="Active"
          contactText="Get Started"
          showUserInfo={true}
          onContactClick={() => window.location.href = '/dashboard'}
        />
      </div>
      <Footer />
    </>
  );
}
