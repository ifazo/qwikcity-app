import Toastify from "toastify-js";

let toastCount = 0;

export const tostifyCustomClose = (el: HTMLElement) => {
  const parent = el.closest(".toastify");
  const close = parent?.querySelector(".toast-close") as HTMLElement | null;
  close?.click();
};

export const showCustomToast = (
  type: "success" | "warning" | "error" | "info" | "gray" | "default",
  message?: string
) => {
  const colorMap = {
    success: {
      bg: "bg-teal-100 dark:bg-teal-800/10",
      border: "border-teal-200 dark:border-teal-900",
      text: "text-teal-800 dark:text-teal-500",
      close: "text-teal-800 dark:text-teal-200",
    },
    info: {
      bg: "bg-blue-100 dark:bg-blue-800/10",
      border: "border-blue-200 dark:border-blue-900",
      text: "text-blue-800 dark:text-blue-500",
      close: "text-blue-800 dark:text-blue-200",
    },
    warning: {
      bg: "bg-yellow-100 dark:bg-yellow-800/10",
      border: "border-yellow-200 dark:border-yellow-900",
      text: "text-yellow-800 dark:text-yellow-500",
      close: "text-yellow-800 dark:text-yellow-200",
    },
    error: {
      bg: "bg-red-100 dark:bg-red-800/10",
      border: "border-red-200 dark:border-red-900",
      text: "text-red-800 dark:text-red-500",
      close: "text-red-800 dark:text-red-200",
    },
    gray: {
      bg: "bg-gray-50 dark:bg-white/10",
      border: "border-gray-200 dark:border-white/10",
      text: "text-gray-600 dark:text-neutral-400",
      close: "text-gray-800 dark:text-white",
    },
    default: {
      bg: "bg-gray-100 dark:bg-white/10",
      border: "border-gray-200 dark:border-white/20",
      text: "text-gray-800 dark:text-white",
      close: "text-gray-800 dark:text-white",
    },
  };

  const color = colorMap[type] ?? colorMap.default;

  const markup = `
    <div class="max-w-xs ${color.bg} ${color.border} ${color.text} text-sm rounded-lg border relative" role="alert">
      <div class="flex p-4 items-start">
        <div class="flex-1 pr-6">
          ${message ?? "Hello, world! This is a toast message."}
        </div>
        <button onclick="tostifyCustomClose(this)" type="button"
          class="absolute top-3 right-3 inline-flex shrink-0 justify-center items-center size-5 rounded-lg ${color.close} opacity-50 hover:opacity-100 focus:outline-hidden focus:opacity-100"
          aria-label="Close">
          <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 6 6 18"></path>
            <path d="m6 6 12 12"></path>
          </svg>
        </button>
      </div>
    </div>
  `;

  const index = toastCount++;

  const toast = Toastify({
    text: markup,
    duration: 3000,
    close: false,
    escapeMarkup: false,
    className: `
      fixed right-5 z-[9999]
      transition-all duration-300 ease-in-out
      w-80 text-sm
      shadow-lg
      pointer-events-auto
    `,
    style: {
      top: `${index * 90 + 20}px`,
      background: "transparent",
      boxShadow: "none",
    },
  });

  toast.showToast();

  setTimeout(() => {
    toastCount = Math.max(toastCount - 1, 0);
  }, 3000);
};
