<template>
  <div class="view">
    <div class="navbar">
      {{ title }}
    </div>
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
    props: {
        title: {
            default: '',
            type: String
        }
    }
}
</script>

<style>
#view {
    display: flex;
    flex-flow: column;
    height: 100vh;
    width: 100vh;
}

div.navbar {
  height: 3rem;
  border-bottom: 1px solid grey;
  box-shadow: 0px 0px 3px 0px rgba(148,148,148,0.57);
  align-items: center;
}

div.content {
  padding-top: 0.2rem;
}
</style>

