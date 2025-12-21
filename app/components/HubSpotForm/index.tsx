"use client";

import Script from "next/script";

type Props = {
  portalId: string;
  formId: string;
  region?: string;
};

export default function HubSpotForm({
  portalId,
  formId,
  region = "na2",
}: Props) {
  return (
    <>
      <Script
        id="hubspot-forms-embed"
        src={`https://js-${region}.hsforms.net/forms/embed/${portalId}.js`}
        strategy="afterInteractive"
      />
      <div
        className="hs-form-frame"
        data-region={region}
        data-form-id={formId}
        data-portal-id={portalId}
      />
    </>
  );
}
