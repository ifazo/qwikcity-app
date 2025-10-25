import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <div class="relative isolate overflow-hidden pt-14">
      <img
        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2830&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
        alt=""
        class="absolute inset-0 -z-10 size-full object-cover"
      />
      <div
        class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          class="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
        ></div>
      </div>
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl py-16 sm:py-20 lg:py-24">
          <div class="hidden sm:mb-8 sm:flex sm:justify-center">
            <div class="relative rounded-full px-3 py-1 text-sm/6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20">
              Announcing our next round of funding.{" "}
              <a href="#" class="font-semibold text-white">
                <span class="absolute inset-0" aria-hidden="true"></span>Read
                more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div class="text-center">
            <h1 class="text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl">
              Data to enrich your online business
            </h1>
            <p class="mt-8 text-lg font-medium text-pretty text-gray-400 sm:text-xl/8">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat.
            </p>
            <div class="mt-10 flex items-center justify-center gap-x-6">
              <button
                class="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
                onClick$={async () => {
                  const defaults = {
                    spread: 360,
                    ticks: 70,
                    gravity: 0,
                    decay: 0.95,
                    startVelocity: 30,
                    colors: ["006ce9", "ac7ff4", "18b6f6", "713fc2", "ffffff"],
                    origin: {
                      x: 0.5,
                      y: 0.35,
                    },
                  };

                  function loadConfetti() {
                    return new Promise<(opts: any) => void>(
                      (resolve, reject) => {
                        if ((globalThis as any).confetti) {
                          return resolve((globalThis as any).confetti as any);
                        }
                        const script = document.createElement("script");
                        script.src =
                          "https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js";
                        script.onload = () =>
                          resolve((globalThis as any).confetti as any);
                        script.onerror = reject;
                        document.head.appendChild(script);
                        script.remove();
                      }
                    );
                  }

                  const confetti = await loadConfetti();

                  function shoot() {
                    confetti({
                      ...defaults,
                      particleCount: 80,
                      scalar: 1.2,
                    });

                    confetti({
                      ...defaults,
                      particleCount: 60,
                      scalar: 0.75,
                    });
                  }

                  setTimeout(shoot, 0);
                  setTimeout(shoot, 100);
                  setTimeout(shoot, 200);
                  setTimeout(shoot, 300);
                  setTimeout(shoot, 400);
                }}
              >
                Get started
              </button>
              <a href="#" class="text-sm/6 font-semibold text-white">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          class="relative left-[calc(50%+3rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
        ></div>
      </div>
    </div>
  );
});
