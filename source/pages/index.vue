<template>
  <div class="main">
    <div class="jumbotron-container">
      <div class="jumbotron">
        Simple, elegant, and effective apps, free for everyone.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
.main {
  width: 100%;
  height: 100%;
}

.jumbotron-container {
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 2rem 0;
}

.jumbotron {
  font-size: 2rem;
  text-align: center;
  width: min(80%, 800px);
  background: var(--color-secondary);
  color: #fff;
  padding: 2rem 1rem;
  border-radius: 8px;
}
</style>
