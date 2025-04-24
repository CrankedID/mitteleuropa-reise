'use client';

import dynamic from "next/dynamic";

const DynamicMap = dynamic(() => import("./ReisekarteClient"), {
  ssr: false,
});

export default function Reisekarte() {
  return <DynamicMap />;
}
