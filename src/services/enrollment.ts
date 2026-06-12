export interface EnrollmentPayload {
  fullName: string;
  mobileNumber: string;
  emailAddress: string;
  collegeName: string;
  degree: string;
  currentYear: string;
  courseInterested: string;
  preferredMode: string;
  additionalMessage: string;
  source?: string;
  status?: string;
  createdAt?: string;
}

export interface EnrollmentResponse {
  success: boolean;
  message: string;
}

export const submitEnrollment = async (payload: EnrollmentPayload): Promise<EnrollmentResponse> => {
  // TODO: Connect to Google Apps Script endpoint for Google Sheets integration
  // const GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_SCRIPT_WEB_APP_URL';

  // Prepare payload for future CRM / Lead Management
  const enhancedPayload = {
    ...payload,
    source: "Website",
    status: "New",
    createdAt: new Date().toISOString()
  };

  try {
    // Simulated API call delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Uncomment and implement when endpoint is ready:
    /*
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(enhancedPayload),
    });

    if (!response.ok) {
      throw new Error('Failed to submit enrollment');
    }
    */
    console.log(enhancedPayload)

    return {
      success: true,
      message: "Thank you for your interest! Your enrollment details have been submitted successfully. A mentor will contact you shortly."
    };
  } catch (error) {
    return {
      success: false,
      message: "An error occurred while submitting your enrollment. Please try again later or contact us directly."
    };
  }
};
