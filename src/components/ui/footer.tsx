import { component$ } from "@builder.io/qwik";
import { useServerTimeLoader } from "~/routes/layout";

export default component$(() => {
  const serverTime = useServerTimeLoader();

  return (
    <footer class="bg-gray-800 text-gray-300 py-6 mt-8">
      <div class="container mx-auto text-center px-4">
        <p>
          &copy; {new Date().getFullYear()} My Qwik App. All rights reserved.
        </p>
        <p class="text-sm mt-2">
          Built with ❤️ using{" "}
          <a
            href="https://qwik.builder.io"
            target="_blank"
            class="text-blue-400 hover:underline"
          >
            Qwik
          </a>
        </p>
        <p class="text-sm mt-2">Server Time: {serverTime.value.date}</p>
      </div>
    </footer>
  );
});
