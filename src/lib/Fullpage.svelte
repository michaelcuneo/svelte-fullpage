<script lang="ts">
  import FullpageController from "./FullpageController.svelte";
  import Indicator from "./Indicator/Section.svelte";
  import { setContext } from "svelte";
  import { writable } from "svelte/store";
  import { quartOut } from "svelte/easing";
  import { FullpageActivity, FullpageExternalController } from "./stores";
  import type {
    easingFunction,
    FullpageExternalControllerStore,
    SectionContext,
  } from "$lib/types";

  let fullpageController: FullpageController | undefined = $state();

  const sectionCount = writable(0);
  const activeSectionStore = FullpageActivity(sectionCount);

  interface Props {
    scrollDuration?: number;
    controller?: FullpageExternalControllerStore;
    pageRoundingThresholdMultiplier?: number;
    disableDragNavigation?: boolean;
    disableArrowsNavigation?: boolean;
    easing?: easingFunction;
    children?: import("svelte").Snippet;
    [key: string]: any;
  }

  let {
    scrollDuration = 750,
    controller = $bindable(FullpageExternalController(activeSectionStore)),
    pageRoundingThresholdMultiplier = 8,
    disableDragNavigation = false,
    disableArrowsNavigation = false,
    easing = quartOut,
    children,
    ...rest
  }: Props = $props();

  let sections: Array<string> = $state([]);

  /*
    Passing data about section visibility to all sections, activeSectionStore notifies all child FullpageSections about
    changed active section, so previously active section will hide and newly active section will appear. Function getId
    is for determination sectionId for FullpageSection
     */
  const sectionContext: SectionContext = {
    activeSectionStore,
    registerSection: (title?: string): number => {
      const id = $sectionCount;
      $sectionCount++;
      sections = [...sections, title || `${id + 1}`];
      return id;
    },
    config: {
      scrollDuration,
      pageRoundingThresholdMultiplier,
      disableDragNavigation,
      disableArrowsNavigation,
      easing,
    },
  };
  setContext("section", sectionContext);
</script>

<div {...rest}>
  <FullpageController
    bind:this={fullpageController}
    externalController={controller}
    {activeSectionStore}
    {scrollDuration}
    {pageRoundingThresholdMultiplier}
    {disableDragNavigation}
    {disableArrowsNavigation}
    {easing}
  >
    {@render children?.()}
  </FullpageController>
  <Indicator
    {sections}
    activeSection={$activeSectionStore}
    on:goto={fullpageController.toSection}
  />
</div>

<style>
  div {
    height: 100%;
    width: 100%;
    max-height: 100%;
    position: relative;
  }
</style>
