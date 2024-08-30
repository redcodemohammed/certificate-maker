<script setup lang="ts">
const route = useRoute("index");
</script>

<template>
  <div>
    <h1>Nuxt Routing set up successfully!</h1>
    <p>Current route: {{ route.path }}</p>
    <a
      href="https://nuxt.com/docs/getting-started/routing"
      target="_blank"
    >Learn more about Nuxt Routing</a>

    <Card>
      <CardTitle class="font-poppins">
        Hey
      </CardTitle>
      <CardContent>Hello</CardContent>
      <CardFooter>
        <Button>Hey</Button>
      </CardFooter>
    </Card>
  </div>
</template>
