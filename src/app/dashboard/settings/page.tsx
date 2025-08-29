import { Suspense } from "react";
import Settings from "@/pages/dashboard/Settings";

export default function SettingsPage() {
  return (
    <Suspense fallback={<div>Loading settings...</div>}>
      <Settings />
    </Suspense>
  );
}
