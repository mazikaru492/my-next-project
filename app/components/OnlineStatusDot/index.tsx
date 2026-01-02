"use client";

import { useEffect, useState } from "react";

type Props = {
  className?: string;
};

export default function OnlineStatusDot({ className }: Props) {
  const [online, setOnline] = useState(true);

  useEffect(() => {
    const update = () => setOnline(navigator.onLine);

    update();
    window.addEventListener("online", update);
    window.addEventListener("offline", update);

    return () => {
      window.removeEventListener("online", update);
      window.removeEventListener("offline", update);
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
