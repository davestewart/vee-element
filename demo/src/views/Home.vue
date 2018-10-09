<template>
  <div class="home">
    <h2>Home</h2>
    <p>Vee Validate is a plugin for Vue that extends Element UI to enable pluggable validators by way of drivers.</p>
    <p>This means you don't have to use the built-in Async Validator with its verbose syntax, you could use instead Vee Validator to validate forms with a more concise form as follows:</p>
    <pre>required|alpha|min2|max:5</pre>
    <p>Additionally, drivers can be assigned per-form to enable a progressive migration, and are flexible enough to be swapped at runtime (though you generally don't need to do this!)</p>
    <p>Check out the demos and review the source code to see Vee Element's features in action.</p>
  </div>
</template>

<style scoped>
.home {
  margin-left: 115px;
  line-height: 1.4em;
  font-size: .9em;
  color: #292f33;
}

pre {
  padding: .6em 1em;
  margin: 25px 10px;
  background: rgba(0, 0, 0, .05);
  border-radius: 4px;
}
</style>
