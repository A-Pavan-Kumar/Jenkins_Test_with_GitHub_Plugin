<script>
  function showDateTime() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' };
    const formattedDateTime = now.toLocaleDateString('en-US', options);

    console.log("Current date and time:", formattedDateTime);
    console.log("Hello, World!");
  }

  showDateTime();
</script>
