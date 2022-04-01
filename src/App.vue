<template>
  <v-app>
    <v-app-bar app color="white" elevation="0"></v-app-bar>

    <v-main>
        <v-container style="height: 100%">
          <v-row class="text-center">
            <v-col cols="12">
              <v-img
                :src="require('./assets/logo.svg')"
                class="my-3"
                contain
                height="200"
              />
            </v-col>

            <v-col class="mb-4">
              <h1 class="display-2 font-weight-bold mb-3">
                Welcome to OnLabs.org
              </h1>

              <p class="custom subheading font-weight-regular">
                  Create your documents by reusing other people's content <br>
                  and share your content for others to use it in their documents.
              </p>
              <p class="custom subheading font-weight-regular">
                  <br>
                  <b>Check our projects out.</b>
              </p>
            </v-col>
          </v-row>
          <v-row class="text-center vspaced" align="stretch">
              <v-col v-for="project in projects" :key="project.title">
                  <v-card :color="project.color" style="height:100%">
                      <v-card-title style="justify-content:center">
                          <v-btn text :href="project.url" color="blue darken-4">
                              {{project.title}}
                          </v-btn>
                      </v-card-title>
                      <v-card-text>
                          <p style="font-size:1.2em">{{project.description}}</p>
                          <p>{{project.details}}</p>
                      </v-card-text>
                  </v-card>
              </v-col>
          </v-row>
        </v-container>
    </v-main>
    
  </v-app>
</template>

<script>
export default {
  name: 'App',

  components: {},

  data: () => ({
      
      projects: [
          {
              title: "olojs",
              description: "Core javascript library for managing OnLabs.org documents (olo-docs, for short).",
              details: "All the other OnLabs.org projects are based on olojs.",
              url: "https://github.com/onlabsorg/olojs",
              color: "blue-grey lighten-4"
          },
          {
              title: "stilo",
              description: "A CLI for managing your local olo-docs repository.",
              details: "Out of the box it allows creating a repository, rendering documents and serving the repo over HTTP. It is extensible with plugins.",
              url: "https://github.com/onlabsorg/stilo",
              color: "brown lighten-4"
          },
          {
              title: "olowiki",
              description: "A wiki that allows rendering and editing your olo-docs in the browser.",
              details: "It can be started from stilo as plugin or via a custom NodeJS server.",
              url: "https://github.com/onlabsorg/olowiki",
              color: "indigo lighten-4"
          },
          {
              title: "Zion",
              description: "A static implementation of olowiki that stores your olo-docs locally in the browser.",
              details: "It also contains a public library of reusable documents.",
              url: "http://zion.onlabs.org",
              color: "indigo lighten-3"
          },
      ]
  }),
};
</script>
<style>

.vspaced {
    padding-top: 40pt;
}

.custom.subheading {
     font-size: 1.2em;
     font-style: italic;
}
</style>