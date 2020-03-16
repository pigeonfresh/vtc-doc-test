<style src="./ExampleScrollPage.scss" module lang="scss"></style>
<script src="./ExampleScrollPage.js"></script>

<template>
  <div :class="[$style.exampleScrollPage]">
    <ExampleScrollComponent
      ref="ref1"
      @isReady="handleScrollComponentReady"
    />
    <ExampleScrollComponent
      ref="ref2"
      @isReady="handleScrollComponentReady"
    />
  </div>
</template>
