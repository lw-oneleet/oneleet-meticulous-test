
<script lang="ts">
	let { children } = $props();
</script>


<svelte:head>
{#if !import.meta.env.PROD}
  <script
    data-recording-token="3hbo7NE81YeZsDZg0sCVt7jMAvAS9ma9JEiBFDfC"
    data-is-production-environment="false"
    src="https://snippet.meticulous.ai/v1/meticulous.js"
  ></script>
{/if}
</svelte:head>


{@render children()}