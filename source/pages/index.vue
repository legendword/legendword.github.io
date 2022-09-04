<template>
  <div class="main">
    <div class="jumbotron-container">
      <div class="jumbotron">
        Simple, elegant, and effective apps, free for everyone.
      </div>
    </div>
    <div class="projects-container-title">
      Browse {{ projects.length }} projects
    </div>
    <div class="projects-container">
      <n-grid x-gap="12" :cols="4">
        <n-gi v-for="i in 100" :key="i">
          <div class="project">
            <div class="project-title">
              <a
                :href="`https://legendword.github.io/projects/${i}`"
                style="text-decoration: none; color: inherit"
                >Project {{ i }}</a
              >
            </div>
            <div class="project-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              quae, quod, voluptatum, voluptas quibusdam voluptates quidem
              voluptatibus quos quia quas voluptate. Quisquam, quae. Quisquam
              quae, quod, voluptatum, voluptas quibusdam voluptates quidem
              voluptatibus quos quia quas voluptate. Quisquam, quae.
            </div>
          </div>
        </n-gi>
      </n-grid>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import NGrid from "naive-ui";
import NGi from "naive-ui";
import projects from "../data/projects.json";

export default defineComponent({
  name: "IndexPage",
  components: {
    NGrid,
    NGi,
  },
  data() {
    return {
      projects,
    };
  },
  methods: {},
});
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

.projects-container-title {
  font-size: 1.5rem;
  margin: 2rem 0;
}
</style>
