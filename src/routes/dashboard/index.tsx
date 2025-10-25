import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <h1>Dashboard Page</h1>
    </>
  );
});

export const head: DocumentHead = {
  title: "Dashboard - Qwik city",
  meta: [
    {
      name: "Dashboard",
      content: "Explore your dashboard",
    },
  ],
};
