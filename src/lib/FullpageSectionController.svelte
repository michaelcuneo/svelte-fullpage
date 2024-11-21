<script lang="ts">
  import { tweened } from "svelte/motion";
  import type {
    easingFunction,
    FullpageActivityStore,
    navigationFunction,
  } from "$lib/types";

  interface Props {
    activeSlideStore: FullpageActivityStore;
    isSlidable: boolean;
    isActive: boolean;
    // Configuration
    disableCentering: boolean;
    scrollDuration: number;
    disableDragNavigation: boolean;
    disableArrowsNavigation: boolean;
    pageRoundingThresholdMultiplier: number;
    easing: easingFunction;
    externalController: any;
    children?: import("svelte").Snippet;
    [key: string]: any;
  }

  let {
    activeSlideStore,
    isSlidable,
    isActive,
    disableCentering,
    scrollDuration,
    disableDragNavigation,
    disableArrowsNavigation,
    pageRoundingThresholdMultiplier,
    easing,
    externalController = $bindable(),
    children,
    ...rest
  }: Props = $props();
  externalController.goto = (sectionId: number) => {
    activeSlideStore.toPage(sectionId);
    setScroll();
  };

  let section: any = $state();
  const sectionScroll = tweened(0, {
    duration: scrollDuration,
    easing,
  });

  let recentScroll = 0;
  let dragPosition: number;
  let dragStartScroll: number;
  let dragging: boolean;

  const slideRight = () => {
    activeSlideStore.nextPage();
    setScroll();
  };

  const slideLeft = () => {
    activeSlideStore.previousPage();
    setScroll();
  };

  export const toSlide: navigationFunction = (event) => {
    const slideId = event.detail;
    activeSlideStore.toPage(slideId);
    setScroll();
  };

  const setScroll = () => {
    sectionScroll.set($activeSlideStore * section.clientWidth);
  };

  const updateSlideScroll = (scroll: number) => {
    if (section) {
      requestAnimationFrame(() => {
        section.scrollLeft = scroll;
      });
    }
  };

  // handling arrow event
  const handleKey = (event: KeyboardEvent) => {
    if (!isActive) return;
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      event.preventDefault();
    }
    if (!disableArrowsNavigation) {
      switch (event.key) {
        case "ArrowLeft":
          slideLeft();
          break;
        case "ArrowRight":
          slideRight();
          break;
      }
    }
  };

  const handleWheel = (event: WheelEvent) => {
    const now = Date.now();
    const deltaX = event.deltaX;
    if (Math.abs(deltaX) > 20 && now - recentScroll >= scrollDuration) {
      handleWheelEnd(deltaX);
      recentScroll = now;
    }
  };

  const handleWheelEnd = (wheelDelta: number) => {
    const hasScrolledLeft = wheelDelta < 0;
    hasScrolledLeft ? slideLeft() : slideRight();
  };

  const handleDragStart = (event: PointerEvent) => {
    if (disableDragNavigation) return;
    dragPosition = event.clientX;
    dragStartScroll = section.scrollLeft;
    dragging = true;
  };

  const handleDragging = (event: PointerEvent) => {
    if (dragging) {
      sectionScroll.set(dragStartScroll - (event.clientX - dragPosition), {
        duration: 0,
      });
    }
  };

  const handleDragEnd = () => {
    dragging = false;
    const hasScrolledLeft = dragStartScroll > section.scrollLeft;
    const scrollDelta =
      (hasScrolledLeft
        ? section.scrollLeft - section.clientWidth
        : section.scrollLeft) % section.clientWidth;
    const hasExceededScrollRoundThreshold =
      Math.abs(scrollDelta) >
      section.clientWidth / pageRoundingThresholdMultiplier;
    if (hasExceededScrollRoundThreshold) {
      hasScrolledLeft ? slideLeft() : slideRight();
    } else {
      setScroll();
    }
  };

  $effect(() => {
    updateSlideScroll($sectionScroll);
  });
</script>

<svelte:window onkeydown={handleKey} onpointerupcapture={handleDragEnd} />

<div
  bind:this={section}
  class:slidable={isSlidable}
  class:svelte-fp-flexbox-center={!isSlidable && !disableCentering}
  onwheel={handleWheel}
  onpointerdown={handleDragStart}
  onpointermove={handleDragging}
  {...rest}
>
  {@render children?.()}
</div>

<style>
  div {
    height: 100%;
    width: 100%;
    position: relative;
    flex: 1;
    touch-action: none;
    overflow: hidden;
    user-select: none;
  }
  .slidable {
    display: flex;
    flex-direction: row;
  }
  .svelte-fp-flexbox-center {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
