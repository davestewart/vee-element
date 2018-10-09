<template>
  <div class="home">
    <h2>Home</h2>
    <p>Vee Validate is a plugin for Vue that extends Element UI to enable pluggable validators by way of drivers.</p>
    <p>This means you don't have to use Element's built-in Async Validator with its verbose syntax; you can use alternative validation engines, such as Vee Validator to validate forms with a more concise syntax:</p>
    <pre>required|alpha|min:2|max:5</pre>
    <p>Additionally, the Vee Validate driver provides item-relative and form-relative validation messages, which makes by-item error messages more readable for the user.</p>
    <p>Finally, the driver setup is designed to be flexible; not only can you assign drivers on a per-form basis (which helps with a progressive, site-wide migration) but you can even swap out drivers at run-time – as per this demo!</p>
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
