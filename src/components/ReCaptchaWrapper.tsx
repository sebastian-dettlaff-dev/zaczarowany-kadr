"use client";   
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

export default function ReCaptchaWrapper({ children }: { children: React.ReactNode }) {
  const recaptchaKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string;

  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={recaptchaKey}
      language="pl"
      scriptProps={{
        async: false,
        defer: false,
        appendTo: "head",
        nonce: undefined
      }}
    >
      {children}
    </GoogleReCaptchaProvider>
  );
}