"use client";
import { useState } from "react";
type Props = { src: string; alt: string; className?: string };
export default function RoomImage({ src, alt, className = "" }: Props) {
  const [failed, setFailed] = useState(false);
  return <img className={className} src={failed ? "/images/room-placeholder.svg" : src} alt={alt} loading="lazy" onError={() => setFailed(true)} />;
}
