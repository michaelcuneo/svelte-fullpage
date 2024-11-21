<script lang="ts">
  import FullpageSectionController from "./FullpageSectionController.svelte";
  import Indicator from "./Indicator/Slide.svelte";
  import { getContext, onMount, setContext } from "svelte";
  import { FullpageActivity, FullpageExternalController } from "./stores";
  import { writable } from "svelte/store";
  import type {
    FullpageExternalControllerStore,
    FullpageSection,
    SectionContext,
    SlideContext,
  } from "$lib/types";

  const { registerSection, activeSectionStore, config }: SectionContext =
    getContext("section");
  const slideCount = writable(0);
  const activeSlideStore = FullpageActivity(slideCount);

  interface Props {
    title?: string;
    controller?: FullpageExternalControllerStore;
    disableCentering?: boolean;
    children?: import("svelte").Snippet;
    [key: string]: any;
  }

  let {
    title = "",
    controller = $bindable(FullpageExternalController(activeSlideStore)),
    disableCentering = false,
    children,
    ...rest
  }: Props = $props();

  let fullpageSection: FullpageSection | undefined = $state();
  let sectionId: number | undefined = $state();
  let slides: Array<string> = $state([]);

  // Passing data about slide visibility to all slides, same principle as setContext('section',{...}) in Fullpage.svelte
  const slideContext: SlideContext = {
    activeSlideStore,
    registerSlide: (title?: string): void => {
      const id = $slideCount;
      $slideCount++;
      slides = [...slides, title || `${id + 1}`];
    },
  };
  setContext("slide", slideContext);

  onMount(() => {
    sectionId = registerSection(title);
  });

  let isActive = $derived(sectionId === $activeSectionStore);
  let isSlidable = $derived($slideCount > 0);
</script>

<section {...rest}>
  <FullpageSectionController
    bind:this={fullpageSection}
    externalController={controller}
    {activeSlideStore}
    {isSlidable}
    {isActive}
    {disableCentering}
    scrollDuration={config.scrollDuration}
    disableDragNavigation={config.disableDragNavigation}
    disableArrowsNavigation={config.disableArrowsNavigation}
    pageRoundingThresholdMultiplier={config.pageRoundingThresholdMultiplier}
    easing={config.easing}
  >
    {@render children?.()}
  </FullpageSectionController>
  {#if isSlidable}
    <Indicator
      {slides}
      activeSlide={$activeSlideStore}
      on:goto={fullpageSection?.toSlide}
    />
  {/if}
</section>

<style>
  section {
    height: 100%;
    width: 100%;
    position: relative;
  }
</style>
