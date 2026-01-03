"use client";

import { useEffect, useState } from "react";

type Props = {
  className?: string;
};

export default function OnlineStatusDot({ className }: Props) {
  const [online, setOnline] = useState(true);

  useEffect(() => {
    const checkInternet = async () => {
      if (!navigator.onLine) {
        setOnline(false);
        return;
      }

      const controller = new AbortController();
      const timeoutId = window.setTimeout(() => controller.abort(), 2500);
      try {
        await fetch("/api/ping", {
          method: "GET",
          cache: "no-store",
          signal: controller.signal,
        });
        setOnline(true);
      } catch {
        setOnline(false);
      } finally {
        window.clearTimeout(timeoutId);
      }
    };

    const handleBrowserStatusChange = () => {
      void checkInternet();
    };

    void checkInternet();
    window.addEventListener("online", handleBrowserStatusChange);
    window.addEventListener("offline", handleBrowserStatusChange);

    const intervalId = window.setInterval(() => {
      void checkInternet();
    }, 10_000);

    return () => {
      window.clearInterval(intervalId);
      window.removeEventListener("online", handleBrowserStatusChange);
      window.removeEventListener("offline", handleBrowserStatusChange);
    };
  }, []);

  return (
    <span
      className={className}
      data-online={online ? "true" : "false"}
      title={online ? "オンライン" : "オフライン"}
      aria-label={online ? "オンライン" : "オフライン"}
    />
  );
}
