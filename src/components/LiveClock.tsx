import { useState, useEffect } from "react";

export const LiveClock = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      setTime(new Date().toLocaleTimeString("en-US", { hour12: false }));
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="text-xs font-mono text-muted-foreground tabular-nums">
      {time}
    </span>
  );
};
