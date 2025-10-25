import { component$, Slot } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import Footer from "~/components/ui/footer";
import Header from "~/components/ui/header";

export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: new Date().toISOString(),
  };
});

export default component$(() => {
  
  return (
    <>
      <Header />
      <main class="min-h-screen bg-gray-50">
        <Slot />
      </main>
      <Footer />
    </>
  );
});
