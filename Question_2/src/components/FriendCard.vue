<template>
  <div class="container">
    <div class="card">
      <avatar
        :source="avatar"
        :size="size"
      />
      <span class="label">
        <span class="label-text">
          {{ name }}
        </span>
      </span>
    </div>
  </div>
</template>

<script>
import Avatar from './Avatar.vue';

const imageSize = 80;

export default {
  components: {
    'avatar': Avatar,
  },
  props: {
    avatar: {
      type: String,
      default: null,
      required: false,
    },
    name: {
      type: String,
      required: true,
      default: '',
    }
  },
  data() {
    return {
      size: imageSize
    }
  },
}
</script>

<style scoped>
div.container {
  display: flex;
}

div.container div.card {
  border: 1px solid #cecece;
  border-radius: 3px;
  margin: 0.5rem 0.5rem;
  padding: 0.5rem 0.25rem;
  width: 100%;
  background-color: #f2f2f254;  
  display: flex;
  align-items: center;
}

div.card span.label {
  display: inline-block;
  margin-left: 1rem;  
}

div.card span.label .label-text {
  font-size: 18px;
  color: #4b4b4b; 
}
</style>
