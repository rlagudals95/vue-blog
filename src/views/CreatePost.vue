<template>
  <div class="create-post">
    <div class="container">
      <div :class="{ invisible: !error }" class="err-message">
        <p><span>Error:</span>{{ this.errorMsg }}</p>
      </div>
    </div>
  </div>
</template>
<script>
import Quill from "quill";
window.Quill = Quill;
const ImageResize = require("quill-image-resize-module").default;
Quill.register("modules/imageResize", ImageResize);

export default {
  name: "CreatePost",
  data() {
    return {
      error: null,
      errorMsg: null,
      editorSettings: {
        modules: {
          ImageResize: {},
        },
      },
    };
  },
};
</script>
<style lang="scss" scoped>
</style>