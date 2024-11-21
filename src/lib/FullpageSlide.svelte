<script lang="ts">
  import { getContext, onMount } from "svelte";
  import type { SlideContext } from "$lib/types";

  interface Props {
    title?: string;
    disableCentering?: boolean;
    children?: import("svelte").Snippet;
    [key: string]: any;
  }

  let {
    title = "",
    disableCentering = false,
    children,
    ...rest
  }: Props = $props();

  const { registerSlide }: Omit<SlideContext, "activeSlideStore"> =
    getContext("slide");

  // After DOM is ready ged slideId
  onMount(() => {
    registerSlide(title);
  });
</script>

<div class:svelte-fp-flexbox-center={!disableCentering} {...rest}>
  {@render children?.()}
</div>

<style>
  div {
    height: 100%;
    width: 100%;
    min-width: 100%;
    position: relative;
  }
  .svelte-fp-flexbox-center {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
