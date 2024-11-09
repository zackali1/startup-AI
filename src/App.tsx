import { useState } from 'react';
import { Mic, MicOff, Send, Sparkles, ChevronRight, Star, Zap, Target, MessageSquare } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useToast } from "@/hooks/use-toast";

function App() {
  const [isRecording, setIsRecording] = useState(false);
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const { toast } = useToast();

  const benefits = [
    {
      icon: <Star className="h-6 w-6" />,
      title: "Discover Unique Startup Ideas Instantly",
      description: "Generate tailored ideas in seconds. No more struggling to come up with something new—let our AI inspire you."
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "In-Depth Competition Analysis",
      description: "Get a realistic view of the competitive landscape, so you know exactly what you're up against."
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Guided Implementation Plan",
      description: "Follow a clear, step-by-step guide that turns your idea into a reality, covering every stage from concept to launch."
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "Voice and Text Input",
      description: "Seamlessly enter prompts by typing or speaking—our AI is ready to listen and respond in real time."
    }
  ];

  const steps = [
    { title: "Enter Your Prompt", description: "Type a few words or record your voice describing your idea, concept, or market." },
    { title: "Let Our AI Work Its Magic", description: "Our powerful AI processes your input to generate a relevant, unique startup idea." },
    { title: "Understand the Market", description: "View an in-depth competition analysis with a clear percentage rating so you can assess viability." },
    { title: "Follow the Roadmap", description: "Access a step-by-step guide that shows you exactly how to bring your idea to life." }
  ];

  const toggleRecording = () => {
    setIsRecording(!isRecording);
    toast({
      title: isRecording ? "Recording stopped" : "Recording started",
      description: isRecording ? "Your voice input has been captured" : "Speak your startup idea...",
    });
  };

  const handleGenerate = () => {
    if (!prompt.trim()) {
      toast({
        title: "Input required",
        description: "Please enter a prompt or use voice input",
        variant: "destructive",
      });
      return;
    }
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 w-full bg-background/80 backdrop-blur-sm border-border border-b z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Sparkles className="h-6 w-6 text-primary" />
            <span className="font-bold text-xl text-foreground">StartupAI</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#benefits" className="text-muted-foreground hover:text-primary transition">Benefits</a>
            <a href="#how" className="text-muted-foreground hover:text-primary transition">How It Works</a>
            <a href="#faq" className="text-muted-foreground hover:text-primary transition">FAQ</a>
            <Button className="gradient-button">Get Started for Free</Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 hero-gradient">
        <div className="container mx-auto text-center max-w-3xl">
          <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#e233ff] to-[#3347ff]">
            Transform Your Ideas into Reality
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Convert your voice into high-performing startup ideas in seconds using AI.
            Save time, boost engagement, and grow your presence effortlessly.
          </p>
          
          {/* Main Input Card */}
          <Card className="p-6 mb-8 bg-card border-border">
            <div className="flex items-center space-x-2">
              <textarea
                className="flex-1 bg-muted resize-none p-3 rounded-lg border-border border focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                placeholder="Describe your startup idea..."
                rows={3}
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
              />
              <div className="flex flex-col space-y-2">
                <Button
                  size="icon"
                  variant={isRecording ? "destructive" : "outline"}
                  onClick={toggleRecording}
                  className="transition-all duration-200 hover:scale-105"
                >
                  {isRecording ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
                </Button>
                <Button
                  size="icon"
                  onClick={handleGenerate}
                  disabled={isGenerating}
                  className="gradient-button transition-all duration-200 hover:scale-105"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>
          <Button size="lg" className="gradient-button text-lg px-8">
            Try Voice Post Free
          </Button>
        </div>
      </section>

      {/* Rest of the sections with updated styling */}
      <section id="benefits" className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us for Your Startup Journey?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-200 bg-card border-border">
                <div className="flex items-start space-x-4">
                  <div className="text-primary">{benefit.icon}</div>
                  <div>
                    <h3 className="font-semibold text-xl mb-2 text-foreground">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how" className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="space-y-6">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0">
                  {index + 1}
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2 text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>What types of ideas can I generate with this tool?</AccordionTrigger>
              <AccordionContent>
                You can generate ideas across a wide range of industries and categories. Simply describe what you have in mind, and our AI will tailor a startup idea to fit.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>How accurate is the competition analysis?</AccordionTrigger>
              <AccordionContent>
                Our AI pulls data from reliable sources to assess market competition and provides a percentage to reflect the competitive landscape. While no tool can be 100% accurate, our analysis offers a reliable overview.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Is this service free to use?</AccordionTrigger>
              <AccordionContent>
                We offer a free trial with access to core features. For advanced competition analysis and in-depth guides, you can explore our premium options.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">Start Your Journey Today</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Ideas, insights, and guidance are just a prompt away. Take the first step toward building something great.
          </p>
          <Button size="lg" className="gradient-button text-lg px-8">
            Generate Your First Idea Now!
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-background">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <Sparkles className="h-5 w-5 text-primary" />
              <span className="font-semibold text-foreground">StartupAI</span>
            </div>
            <div className="flex space-x-6">
              <a href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition">Privacy</a>
              <a href="/terms" className="text-sm text-muted-foreground hover:text-primary transition">Terms</a>
              <a href="/support" className="text-sm text-muted-foreground hover:text-primary transition">Support</a>
            </div>
            <div className="text-sm text-muted-foreground">
              © 2024 StartupAI. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;