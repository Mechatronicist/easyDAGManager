    import tailwindcss from "@tailwindcss/vite";

    export default defineNuxtConfig({
      compatibilityDate: "2025-12-12",
      devtools: { enabled: false },
      css: ['~/assets/css/main.css'],
      vite: {
        plugins: [
          tailwindcss(),
        ],
      },
    });