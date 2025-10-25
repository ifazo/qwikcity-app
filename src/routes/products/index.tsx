import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <h1>Products Page</h1>
    </>
  );
});

export const head: DocumentHead = {
  title: "Products - Qwik city",
  meta: [
    {
      name: "Products",
      content: "Explore our range of products",
    },
  ],
};
