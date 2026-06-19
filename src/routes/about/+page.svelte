<script>
  import { isDarkMode } from '$lib/stores.js';

  function toggleDarkMode() {
    isDarkMode.update(value => !value);
  }
</script>

<main class={$isDarkMode ? 'dark' : ''}>
  <button class="theme-toggle" on:click={toggleDarkMode}>
    {$isDarkMode ? '☀️' : '🌙'}
  </button>
  <div class="content">
    <h1 class="title">About</h1>
    <p class="description">This is a test repository</p>
    <a href="/" class="button">Back to Home</a>
  </div>
</main>

<style>
  main {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fffacd; /* Light yellow background */
    margin: 0;
    padding: 0;
    position: relative;
    transition: background-color 0.3s ease;
  }

  main.dark {
    background-color: #4b0082; /* Dark purple background */
  }

  .theme-toggle {
    position: absolute;
    top: 20px;
    right: 20px;
    background: none;
    border: 2px solid #4b0082;
    color: #4b0082;
    padding: 10px;
    border-radius: 50%;
    cursor: pointer;
    font-size: 1.2rem;
    transition: all 0.3s ease;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  main.dark .theme-toggle {
    border-color: #fffacd;
    color: #fffacd;
  }

  .theme-toggle:hover {
    transform: scale(1.1);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  }

  .content {
    text-align: center;
  }

  .title {
    color: #4b0082; /* Dark purple text */
    font-size: 3rem;
    font-weight: bold;
    text-align: center;
    margin: 0 0 1rem 0;
    font-family: 'Arial', sans-serif;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
    transition: color 0.3s ease;
  }

  main.dark .title {
    color: #fffacd; /* Light yellow text */
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  }

  .description {
    color: #4b0082; /* Dark purple text */
    font-size: 1.5rem;
    text-align: center;
    margin: 0 0 2rem 0;
    font-family: 'Arial', sans-serif;
    font-weight: normal;
    transition: color 0.3s ease;
  }

  main.dark .description {
    color: #fffacd; /* Light yellow text */
  }

  .button {
    display: inline-block;
    background-color: #4b0082; /* Dark purple background */
    color: #fffacd; /* Light yellow text */
    padding: 12px 24px;
    text-decoration: none;
    border-radius: 6px;
    font-size: 1.2rem;
    font-weight: bold;
    font-family: 'Arial', sans-serif;
    transition: all 0.3s ease;
    border: 2px solid #4b0082;
  }

  main.dark .button {
    background-color: #fffacd; /* Light yellow background */
    color: #4b0082; /* Dark purple text */
    border-color: #fffacd;
  }

  .button:hover {
    background-color: #fffacd;
    color: #4b0082;
    border-color: #4b0082;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(75, 0, 130, 0.3);
  }

  main.dark .button:hover {
    background-color: #4b0082;
    color: #fffacd;
    border-color: #4b0082;
    box-shadow: 0 4px 8px rgba(255, 250, 205, 0.3);
  }
</style> 