<script>
  function launchBunker() {
    const provider = document.getElementById('provider').value;
    const win = window.open(provider, '_blank');
    if (!win) {
      alert("Please enable pop-ups.");
    }
  }
</script>
