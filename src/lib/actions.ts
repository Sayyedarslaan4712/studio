
"use server";

import { improveAboutSection, type ImproveAboutSectionInput, type ImproveAboutSectionOutput } from '@/ai/flows/improve-about-section';
import { z } from 'zod';

// AI About Section Reviewer Action
export async function getAIAboutReview(
  aboutText: ImproveAboutSectionInput
): Promise<{ success: boolean; data?: ImproveAboutSectionOutput; error?: string }> {
  try {
    const result = await improveAboutSection(aboutText);
    return { success: true, data: result };
  } catch (error) {
    console.error("Error in getAIAboutReview:", error);
    return { success: false, error: error instanceof Error ? error.message : "An unknown error occurred during AI review." };
  }
}

// Contact Form Action
const ContactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export type ContactFormState = {
  message: string;
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
  };
  success: boolean;
};

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const validatedFields = ContactFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      message: "Validation failed. Please check your input.",
      errors: validatedFields.error.flatten().fieldErrors,
      success: false,
    };
  }

  const { name, email, message } = validatedFields.data;

  // In a real application, you would send an email or save to a database here.
  // For this demo, we'll just log it and return a success message.
  console.log("Contact Form Submission:");
  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Message:", message);

  // Simulate a delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  return {
    message: "Thank you for your message! I'll get back to you soon.",
    success: true,
  };
}
