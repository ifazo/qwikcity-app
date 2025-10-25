import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <h1>Categories Page</h1>
    </>
  );
});

export const head: DocumentHead = {
  title: "Categories - Qwik city",
  meta: [
    {
      name: "Categories",
      content: "Explore our range of categories",
    },
  ],
};
