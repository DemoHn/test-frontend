<template>
  <div
    ref="mapContainer"
    class="container"
  />
</template>

<script>
import mapboxgl from 'mapbox-gl';

const publicToken = process.env.VUE_APP_MAPBOX_TOKEN;
 
mapboxgl.accessToken = publicToken;

export default {
  props: {
    latitude: {
      type: Number,
      required: true,
      default: 0.0
    },
    longitude: {
      type: Number,
      required: true,
      default: 120.0
    }
  },
  mounted() {
    const lngLatTuple = [this.longitude, this.latitude]
    const map = new mapboxgl.Map({
      container: this.$refs.mapContainer,
      // just show the location, move, touch is not allowed
      interactive: false,
      center: lngLatTuple,
      zoom: 10,
      style: 'mapbox://styles/mapbox/streets-v9'
    });

    const marker = new mapboxgl.Marker()
      .setLngLat(lngLatTuple)
      .addTo(map);
  }
}
</script>

<style scoped>
div.container {
  width: 100%;
  /* hardcore height first, may update in responed to further requirement */
  height: 240px;
}
</style>

