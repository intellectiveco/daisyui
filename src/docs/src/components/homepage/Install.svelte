<script>
import { t } from "$lib/i18n"
let isClipboardButtonPressed = false
const copyText = (text) => {
  navigator.clipboard.writeText(text)
  isClipboardButtonPressed = true
  setTimeout(() => {
    isClipboardButtonPressed = false
  }, 2000)
}
</script>

<p class="mx-auto mb-2 mt-5 w-full text-start">1. {$t("install-step-1")}:</p>
<div role="tablist" class="tabs tabs-lifted">
  <input
    type="radio"
    name="install[packagemanager]"
    role="tab"
    class="tab checked:text-neutral-content [--tab-bg:oklch(var(--n))] [--tab-border-color:oklch(var(--n))]"
    aria-label="NPM"
    checked="checked" />
  <div
    role="tabpanel"
    class="bg-neutral text-neutral-content rounded-box tab-content relative w-full p-4 text-left shadow-lg">
    <div class="absolute right-3 top-3 z-[1]">
      <div data-tip="{isClipboardButtonPressed ? 'copied' : 'copy'}" class="tooltip tooltip-accent">
        <button
          class="btn btn-sm btn-square btn-neutral cursor-copy"
          aria-label="copy"
          onclick="{() => copyText('npm i -D daisyui@latest')}">
          {#if isClipboardButtonPressed}
            <svg
              class="h-5 w-5 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32">
              <path
                d="M 16 2 C 14.742188 2 13.847656 2.890625 13.40625 4 L 5 4 L 5 29 L 27 29 L 27 4 L 18.59375 4 C 18.152344 2.890625 17.257813 2 16 2 Z M 16 4 C 16.554688 4 17 4.445313 17 5 L 17 6 L 20 6 L 20 8 L 12 8 L 12 6 L 15 6 L 15 5 C 15 4.445313 15.445313 4 16 4 Z M 7 6 L 10 6 L 10 10 L 22 10 L 22 6 L 25 6 L 25 27 L 7 27 Z M 21.28125 13.28125 L 15 19.5625 L 11.71875 16.28125 L 10.28125 17.71875 L 14.28125 21.71875 L 15 22.40625 L 15.71875 21.71875 L 22.71875 14.71875 Z">
              </path>
            </svg>
          {:else}
            <svg
              class="h-5 w-5 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32">
              <path
                d="M 16 3 C 14.742188 3 13.847656 3.890625 13.40625 5 L 6 5 L 6 28 L 26 28 L 26 5 L 18.59375 5 C 18.152344 3.890625 17.257813 3 16 3 Z M 16 5 C 16.554688 5 17 5.445313 17 6 L 17 7 L 20 7 L 20 9 L 12 9 L 12 7 L 15 7 L 15 6 C 15 5.445313 15.445313 5 16 5 Z M 8 7 L 10 7 L 10 11 L 22 11 L 22 7 L 24 7 L 24 26 L 8 26 Z">
              </path>
            </svg>
          {/if}
        </button>
      </div>
    </div>
    <pre data-prefix="$"><code>npm i -D daisyui@latest</code></pre>
  </div>
  <input
    type="radio"
    name="install[packagemanager]"
    role="tab"
    class="tab checked:text-neutral-content [--tab-bg:oklch(var(--n))] [--tab-border-color:oklch(var(--n))]"
    aria-label="PNPM" />
  <div
    role="tabpanel"
    class="bg-neutral text-neutral-content rounded-box tab-content relative w-full p-4 text-left shadow-lg">
    <div class="absolute right-3 top-3 z-[1]">
      <div data-tip="{isClipboardButtonPressed ? 'copied' : 'copy'}" class="tooltip tooltip-accent">
        <button
          class="btn btn-sm btn-square btn-neutral cursor-copy"
          aria-label="copy"
          onclick="{() => copyText('pnpm add -D daisyui@latest')}">
          {#if isClipboardButtonPressed}
            <svg
              class="h-5 w-5 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32">
              <path
                d="M 16 2 C 14.742188 2 13.847656 2.890625 13.40625 4 L 5 4 L 5 29 L 27 29 L 27 4 L 18.59375 4 C 18.152344 2.890625 17.257813 2 16 2 Z M 16 4 C 16.554688 4 17 4.445313 17 5 L 17 6 L 20 6 L 20 8 L 12 8 L 12 6 L 15 6 L 15 5 C 15 4.445313 15.445313 4 16 4 Z M 7 6 L 10 6 L 10 10 L 22 10 L 22 6 L 25 6 L 25 27 L 7 27 Z M 21.28125 13.28125 L 15 19.5625 L 11.71875 16.28125 L 10.28125 17.71875 L 14.28125 21.71875 L 15 22.40625 L 15.71875 21.71875 L 22.71875 14.71875 Z">
              </path>
            </svg>
          {:else}
            <svg
              class="h-5 w-5 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32">
              <path
                d="M 16 3 C 14.742188 3 13.847656 3.890625 13.40625 5 L 6 5 L 6 28 L 26 28 L 26 5 L 18.59375 5 C 18.152344 3.890625 17.257813 3 16 3 Z M 16 5 C 16.554688 5 17 5.445313 17 6 L 17 7 L 20 7 L 20 9 L 12 9 L 12 7 L 15 7 L 15 6 C 15 5.445313 15.445313 5 16 5 Z M 8 7 L 10 7 L 10 11 L 22 11 L 22 7 L 24 7 L 24 26 L 8 26 Z">
              </path>
            </svg>
          {/if}
        </button>
      </div>
    </div>
    <pre data-prefix="$"><code>pnpm add -D daisyui@latest</code></pre>
  </div>
  <input
    type="radio"
    name="install[packagemanager]"
    role="tab"
    class="tab checked:text-neutral-content [--tab-bg:oklch(var(--n))] [--tab-border-color:oklch(var(--n))]"
    aria-label="Yarn" />
  <div
    role="tabpanel"
    class="bg-neutral text-neutral-content rounded-box tab-content relative w-full p-4 text-left shadow-lg">
    <div class="absolute right-3 top-3 z-[1]">
      <div data-tip="{isClipboardButtonPressed ? 'copied' : 'copy'}" class="tooltip tooltip-accent">
        <button
          class="btn btn-sm btn-square btn-neutral cursor-copy"
          aria-label="copy"
          onclick="{() => copyText('yarn add -D daisyui@latest')}">
          {#if isClipboardButtonPressed}
            <svg
              class="h-5 w-5 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32">
              <path
                d="M 16 2 C 14.742188 2 13.847656 2.890625 13.40625 4 L 5 4 L 5 29 L 27 29 L 27 4 L 18.59375 4 C 18.152344 2.890625 17.257813 2 16 2 Z M 16 4 C 16.554688 4 17 4.445313 17 5 L 17 6 L 20 6 L 20 8 L 12 8 L 12 6 L 15 6 L 15 5 C 15 4.445313 15.445313 4 16 4 Z M 7 6 L 10 6 L 10 10 L 22 10 L 22 6 L 25 6 L 25 27 L 7 27 Z M 21.28125 13.28125 L 15 19.5625 L 11.71875 16.28125 L 10.28125 17.71875 L 14.28125 21.71875 L 15 22.40625 L 15.71875 21.71875 L 22.71875 14.71875 Z">
              </path>
            </svg>
          {:else}
            <svg
              class="h-5 w-5 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32">
              <path
                d="M 16 3 C 14.742188 3 13.847656 3.890625 13.40625 5 L 6 5 L 6 28 L 26 28 L 26 5 L 18.59375 5 C 18.152344 3.890625 17.257813 3 16 3 Z M 16 5 C 16.554688 5 17 5.445313 17 6 L 17 7 L 20 7 L 20 9 L 12 9 L 12 7 L 15 7 L 15 6 C 15 5.445313 15.445313 5 16 5 Z M 8 7 L 10 7 L 10 11 L 22 11 L 22 7 L 24 7 L 24 26 L 8 26 Z">
              </path>
            </svg>
          {/if}
        </button>
      </div>
    </div>
    <pre data-prefix="$"><code>yarn add -D daisyui@latest</code></pre>
  </div>
  <input
    type="radio"
    name="install[packagemanager]"
    role="tab"
    class="tab checked:text-neutral-content [--tab-bg:oklch(var(--n))] [--tab-border-color:oklch(var(--n))]"
    aria-label="Bun" />
  <div
    role="tabpanel"
    class="bg-neutral text-neutral-content rounded-box tab-content relative w-full p-4 text-left shadow-lg">
    <div class="absolute right-3 top-3 z-[1]">
      <div data-tip="{isClipboardButtonPressed ? 'copied' : 'copy'}" class="tooltip tooltip-accent">
        <button
          class="btn btn-sm btn-square btn-neutral cursor-copy"
          aria-label="copy"
          onclick="{() => copyText('bun add -D daisyui@latest')}">
          {#if isClipboardButtonPressed}
            <svg
              class="h-5 w-5 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32">
              <path
                d="M 16 2 C 14.742188 2 13.847656 2.890625 13.40625 4 L 5 4 L 5 29 L 27 29 L 27 4 L 18.59375 4 C 18.152344 2.890625 17.257813 2 16 2 Z M 16 4 C 16.554688 4 17 4.445313 17 5 L 17 6 L 20 6 L 20 8 L 12 8 L 12 6 L 15 6 L 15 5 C 15 4.445313 15.445313 4 16 4 Z M 7 6 L 10 6 L 10 10 L 22 10 L 22 6 L 25 6 L 25 27 L 7 27 Z M 21.28125 13.28125 L 15 19.5625 L 11.71875 16.28125 L 10.28125 17.71875 L 14.28125 21.71875 L 15 22.40625 L 15.71875 21.71875 L 22.71875 14.71875 Z">
              </path>
            </svg>
          {:else}
            <svg
              class="h-5 w-5 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32">
              <path
                d="M 16 3 C 14.742188 3 13.847656 3.890625 13.40625 5 L 6 5 L 6 28 L 26 28 L 26 5 L 18.59375 5 C 18.152344 3.890625 17.257813 3 16 3 Z M 16 5 C 16.554688 5 17 5.445313 17 6 L 17 7 L 20 7 L 20 9 L 12 9 L 12 7 L 15 7 L 15 6 C 15 5.445313 15.445313 5 16 5 Z M 8 7 L 10 7 L 10 11 L 22 11 L 22 7 L 24 7 L 24 26 L 8 26 Z">
              </path>
            </svg>
          {/if}
        </button>
      </div>
    </div>
    <pre data-prefix="$"><code>bun add -D daisyui@latest</code></pre>
  </div>
</div>
<p class="mx-auto mb-2 mt-5 w-full text-start">2. {$t("install-step-2")}:</p>
<div class="my-2 w-full max-w-4xl">
  <div role="tablist" class="tabs tabs-lifted">
    <input
      type="radio"
      name="install[jstype]"
      role="tab"
      class="tab checked:text-neutral-content [--tab-bg:oklch(var(--n))] [--tab-border-color:oklch(var(--n))]"
      aria-label="CommonJS"
      checked="checked" />
    <div
      role="tabpanel"
      class="bg-neutral text-neutral-content rounded-box tab-content relative w-full p-4 text-left shadow-lg">
      <pre dir="ltr"><code>
module.exports = {`{`}
  <span class="text-neutral-content/30">//...</span>
  plugins: [
    <span class="badge badge-lg">require('daisyui'),</span>
  ],
{`}`}</code></pre>
    </div>
    <input
      type="radio"
      name="install[jstype]"
      role="tab"
      class="tab checked:text-neutral-content [--tab-bg:oklch(var(--n))] [--tab-border-color:oklch(var(--n))]"
      aria-label="ESM" />
    <div
      role="tabpanel"
      class="bg-neutral text-neutral-content rounded-box tab-content relative w-full p-4 text-left shadow-lg">
      <pre dir="ltr"><code><span class="badge badge-lg">import daisyui from "daisyui"</span>
export default {`{`}
  <span class="text-neutral-content/30">//...</span>
  plugins: [
    <span class="badge badge-lg">daisyui,</span>
  ],
{`}`}</code></pre>
    </div>
  </div>
</div>
