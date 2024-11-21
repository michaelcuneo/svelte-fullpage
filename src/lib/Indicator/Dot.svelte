<script lang="ts">
  import { createEventDispatcher } from "svelte";

  interface Props {
    activeDot?: number;
    index?: number;
    title?: string;
  }

  let { activeDot = $bindable(0), index = 0, title = "" }: Props = $props();

  const dispatch = createEventDispatcher();

  const goto = () => {
    dispatch("goto", index);
  };
</script>

<li>
  <button aria-label={title} title={title || ""} onclick={goto}>
    <i class:svelte-fp-active-dot={activeDot === index}></i>
  </button>
</li>

<style>
  li {
    margin: 1rem;
    padding: 0;
    width: 1rem;
    height: 1rem;
  }
  button {
    height: 100%;
    width: 100%;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background: transparent;
  }
  i {
    width: 40%;
    height: 40%;
    transition:
      width 1s,
      height 1s;
    border-radius: 50%;
    background-color: #767676;
  }
  .svelte-fp-active-dot {
    width: 100%;
    height: 100%;
  }

  @media only screen and (max-width: 600px) {
    li {
      margin: 0.5rem;
    }
  }
</style>
