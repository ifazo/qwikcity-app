import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { QwikLogo } from "./qwik";

export default component$(() => {
  return (
     <header class="bg-blue-600 text-white py-4 shadow-md">
      <div class="container mx-auto flex justify-between items-center px-4">
        <h1 class="text-xl font-semibold">
          <Link href="/"><QwikLogo height={50} width={143} /></Link>
        </h1>

        <nav class="space-x-4">
          <Link href="/" class="hover:underline">Home</Link>
          <Link href="/about" class="hover:underline">About</Link>
          <Link href="/contact" class="hover:underline">Contact</Link>
        </nav>
      </div>
    </header>
  );
});
