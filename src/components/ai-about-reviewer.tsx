
"use client";

import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, Sparkles, AlertTriangle } from "lucide-react";
import { getAIAboutReview } from "@/lib/actions";
import type { ImproveAboutSectionOutput } from "@/ai/flows/improve-about-section";
import { useToast } from "@/hooks/use-toast";

export function AiAboutReviewer() {
  const [aboutText, setAboutText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [reviewResult, setReviewResult] = useState<ImproveAboutSectionOutput | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  const handleSubmit = async () => {
    if (!aboutText.trim()) {
      toast({
        title: "Input Required",
        description: "Please enter your about section text.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    setError(null);
    setReviewResult(null);

    const result = await getAIAboutReview(aboutText);

    if (result.success && result.data) {
      setReviewResult(result.data);
      toast({
        title: "Review Complete!",
        description: "AI suggestions are ready.",
      });
    } else {
      setError(result.error || "Failed to get review. Please try again.");
      toast({
        title: "Error",
        description: result.error || "Failed to get review. Please try again.",
        variant: "destructive",
      });
    }
    setIsLoading(false);
  };

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold flex items-center">
          <Sparkles className="h-6 w-6 mr-2 text-accent" />
          AI About Section Reviewer
        </CardTitle>
        <CardDescription>
          Get AI-powered suggestions to make your &apos;About Me&apos; section more impactful for recruiters.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Textarea
            placeholder="Paste your current 'About Me' section here..."
            value={aboutText}
            onChange={(e) => setAboutText(e.target.value)}
            rows={8}
            className="resize-none"
            disabled={isLoading}
          />
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-start space-y-4">
        <Button onClick={handleSubmit} disabled={isLoading} className="w-full sm:w-auto">
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Reviewing...
            </>
          ) : (
            "Review My About Section"
          )}
        </Button>

        {error && (
          <div className="p-4 rounded-md bg-destructive/10 text-destructive flex items-center w-full">
            <AlertTriangle className="h-5 w-5 mr-2" />
            <p className="text-sm">{error}</p>
          </div>
        )}

        {reviewResult && (
          <div className="space-y-6 w-full pt-4 border-t mt-4">
            <div>
              <h3 className="text-lg font-semibold mb-2 text-primary">Improved About Section:</h3>
              <div className="p-4 bg-muted/50 rounded-md whitespace-pre-wrap text-sm">
                {reviewResult.improvedAboutSection}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-primary">Suggestions:</h3>
              {reviewResult.suggestions.length > 0 ? (
                <ul className="list-disc list-inside space-y-1 text-sm pl-2">
                  {reviewResult.suggestions.map((suggestion, index) => (
                    <li key={index}>{suggestion}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-muted-foreground">No specific suggestions provided by the AI at this time. The improved text might already incorporate changes.</p>
              )}
            </div>
          </div>
        )}
      </CardFooter>
    </Card>
  );
}
