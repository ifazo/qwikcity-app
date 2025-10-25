import { component$, useSignal } from "@builder.io/qwik";
import { Link, useLocation } from "@builder.io/qwik-city";

export const navigation = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "Categories", href: "/categories" },
  { name: "Dashboard", href: "/dashboard" },
];

export default component$(() => {
  const loc = useLocation();
  const openCart = useSignal<string | null>(null);

  return (
    <div class="bg-white">
      <header class="relative bg-white">
        <nav aria-label="Top" class="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div class="border-b border-gray-200 px-4 pb-14 sm:px-0 sm:pb-0">
            <div class="flex h-16 items-center justify-between">
              {/* Logo */}
              <div class="flex flex-1">
                <Link href="/">
                  <span class="sr-only">Your Company</span>
                  <img alt="logo" src="/logo.svg" class="h-8 w-auto" />
                </Link>
              </div>

              {/* Navigation */}
              <div class="absolute inset-x-0 bottom-0 sm:static sm:flex-1 sm:self-stretch">
                <div class="flex h-14 space-x-8 overflow-x-auto border-t px-4 pb-px sm:h-full sm:justify-center sm:overflow-visible sm:border-t-0 sm:pb-0">
                  {navigation.map((item) => {
                    const isActive =
                      loc.url.pathname === item.href ||
                      (item.href !== "/" &&
                        loc.url.pathname.startsWith(item.href));

                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        class={[
                          "flex items-center text-sm font-medium border-b-2 pt-px transition-colors duration-200 ease-out",
                          isActive
                            ? "border-indigo-600 text-indigo-600"
                            : "border-transparent text-gray-700 hover:text-gray-800 hover:border-gray-300",
                        ].join(" ")}
                      >
                        {item.name}
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Right side icons */}
              <div class="flex flex-1 items-center justify-end">
                <Link href="#" class="p-2 text-gray-400 hover:text-gray-500">
                  <span class="sr-only">Search</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                    />
                  </svg>
                </Link>

                <div class="ml-4 flow-root lg:ml-8">
                  <Link
                    href="#"
                    class="group -m-2 flex items-center p-2 text-gray-400 hover:text-gray-500"
                  >
                    <span class="sr-only">Cart</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="size-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                      />
                    </svg>
                    <span class="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                      0
                    </span>
                    <span class="sr-only">items in cart</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
});
