import {
  component$,
  Slot,
  useContextProvider,
  useStore,
  useVisibleTask$,
} from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import Footer from "~/components/ui/footer";
import Header from "~/components/ui/header";
import { AppContext } from "~/context/store";

export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: new Date().toISOString(),
  };
});

export default component$(() => {
  const store = useStore({
    user: null,
    cart: [],
  });

  useContextProvider(AppContext, store);

  useVisibleTask$(() => {
    const data = localStorage.getItem("app-store");
    if (data) {
      const parsed = JSON.parse(data);
      store.user = parsed.user ?? null;
      store.cart = parsed.cart ?? [];
    }
  });

  useVisibleTask$(({ track }) => {
    track(() => store.user);
    track(() => store.cart);

    const toSave = {
      user: store.user,
      cart: store.cart,
    };

    localStorage.setItem("app-store", JSON.stringify(toSave));
  });

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
