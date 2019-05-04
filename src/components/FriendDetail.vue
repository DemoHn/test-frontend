<template>
  <div class="view">
    <div class="col">
      <span class="label">Avatar:</span>
      <span class="item">
        <avatar
          :size="avatarSize"
          :source="avatar"
        />
      </span>
    </div>
    <div class="col">
      <span class="label">Name:</span>
      <span class="item">{{ name }}</span>
    </div>
    <div class="col">
      <span class="label">E-mail:</span>
      <span class="item">{{ email }}</span>
    </div>
    <div class="col">
      <span class="label">Location:</span>
      <span class="item" />
    </div>
    <map-marker
      :latitude="mapLat"
      :longitude="mapLng"
    />
  </div>
</template>

<script>
import MapMarker from './MapMarker.vue'
import Avatar from './Avatar.vue'

const avatarSize = 80

export default {
  components: {
    'map-marker': MapMarker,
    'avatar': Avatar,
  },
  props: {
    avatar: {
      type: String,
      default: '',
      required: false
    },
    name: {
      type: String,
      default: '',
      required: false
    },
    email: {
      type: String,
      default: '',
      required: false
    },
    location: {
      type: Object,
      required: true,
      default: function() {
        return [0.0, 0.0]
      }
    }
  },
  data() {
    return {
      avatarSize,
    }
  },
  computed: {
    mapLng() {
      return this.location[0]
    },
    mapLat() {
      return this.location[1]
    }
  }
}
</script>

<style scoped>
div.view {
  display: flex;
  flex-direction: column;
}

div.view div.col {
  display: flex;
  align-items: center;
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;
}

div.col span.label {
  flex-basis: 25%;
  text-align: right;
  font-size: 14px;
  color: #3b3b3b;
}

div.col span.item {
  flex-basis: 75%;
  padding-left: 1rem;
  font-size: 15px;
  color: #2a2a2a;
}
</style>

