<template>
  <div id="view">
    <div class="navbar">
      <span class="back">
        <span
          v-show="showBack"
          class="back-button"
        >
          <router-link to="/foo">BACK</router-link>
        </span>
      </span>
      <span class="title">
        <span class="title-text">
          {{ title }}
        </span>
      </span>
      <span class="forward">&nbsp;</span>
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
    },
    showBack: {
      type: Boolean,
      required: false,
      default: true
    },
    backLink: {
      type: String,
      required: false,
      default: ''
    }
  }
}
</script>

<style>
div.navbar {
  position: fixed;
  top: 0;
  height: 3rem;
  width: 100%;
  border-bottom: 1px solid grey;
  box-shadow: 0px 0px 3px 0px rgba(148,148,148,0.57);  
  background-color: white;  
  z-index: 100;
  display: flex;
  align-items: center;
}

div.navbar span.back {
  flex-basis: 15%;
  text-align: center;
}

/* reserved for alignment and Forward button in the future */
div.navbar span.forward {  
  flex-basis: 15%;
}

div.navbar span.title {  
  flex-basis: 70%;
  text-align: center;
}

div.navbar span.title .title-text {
  color: firebrick;
  font-size: 18px;
  font-weight: bold;
}

div.content {
  position: relative;
  margin-top: 3rem;
}
</style>

