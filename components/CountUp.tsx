"use client";

import { useEffect, useState } from "react";

export default function CountUp({
  value,
  start,
}: {
  value: string;
  start: boolean;
}) {
  const [display, setDisplay] = useState("");

  useEffect(() => {
    if (!start) return;

    let i = 0;
    setDisplay("");

    const interval = setInterval(() => {
      i++;
      setDisplay(value.slice(0, i));

      if (i >= value.length) clearInterval(interval);
    }, 40);

    return () => clearInterval(interval);
  }, [start, value]);

  return <span>{display}</span>;
}