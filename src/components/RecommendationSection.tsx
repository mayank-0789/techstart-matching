import { Button } from "@/components/ui/button";
import { ArrowUpRight, Sparkles, FileText, MousePointerClick, Star } from "lucide-react";

export const RecommendationSection = () => {
  return (
    <section className="grid md:grid-cols-2">
      {/* Job Seekers Section */}
      <div className="p-12 bg-white">
        <h3 className="text-lg font-semibold mb-2">Got talent?</h3>
        <h2 className="text-4xl font-bold mb-12">Why job seekers love us</h2>
        
        <div className="space-y-8">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-pink-100 rounded-lg">
              <ArrowUpRight className="w-6 h-6 text-black" />
            </div>
            <p className="text-lg">
              Connect directly with founders at top startups - no third party recruiters allowed.
            </p>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3 bg-pink-100 rounded-lg">
              <FileText className="w-6 h-6 text-black" />
            </div>
            <p className="text-lg">
              Everything you need to know, all upfront. View salary, stock options, and more before applying.
            </p>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3 bg-pink-100 rounded-lg">
              <MousePointerClick className="w-6 h-6 text-black" />
            </div>
            <p className="text-lg">
              Say goodbye to cover letters - your profile is all you need. One click to apply and you're done.
            </p>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3 bg-pink-100 rounded-lg">
              <Star className="w-6 h-6 text-black" />
            </div>
            <p className="text-lg">
              Unique jobs at startups and tech companies you can't find anywhere else.
            </p>
          </div>
        </div>

        <div className="mt-12 flex gap-4">
          <Button variant="outline" className="rounded-full">Learn more</Button>
          <Button className="rounded-full">Sign up</Button>
        </div>
      </div>

      {/* Recruiters Section */}
      <div className="p-12 bg-pink-50">
        <h3 className="text-lg font-semibold mb-2">Need talent?</h3>
        <h2 className="text-4xl font-bold mb-12">Why recruiters love us</h2>
        
        <div className="space-y-8">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-pink-100 rounded-lg">
              <ArrowUpRight className="w-6 h-6 text-black" />
            </div>
            <p className="text-lg">
              Tap into a community of 10M+ engaged, startup-ready candidates.
            </p>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3 bg-pink-100 rounded-lg">
              <FileText className="w-6 h-6 text-black" />
            </div>
            <p className="text-lg">
              Everything you need to kickstart your recruiting — set up job posts, company branding, and HR tools within 10 minutes, all for free.
            </p>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3 bg-pink-100 rounded-lg">
              <MousePointerClick className="w-6 h-6 text-black" />
            </div>
            <p className="text-lg">
              A free applicant tracking system, or free integration with any ATS you may already use.
            </p>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3 bg-pink-100 rounded-lg">
              <Sparkles className="w-6 h-6 text-black" />
            </div>
            <p className="text-lg">
              Let us handle the heavy-lifting with RecruiterCloud. Our new AI-Recruiter scans 500M+ candidates, filters it down based on your unique calibration, and schedules your favorites on your calendar in a matter of days.
            </p>
          </div>
        </div>

        <div className="mt-12 flex gap-4">
          <Button variant="outline" className="rounded-full">Learn more</Button>
          <Button className="rounded-full">Sign up</Button>
        </div>
      </div>
    </section>
  );
};