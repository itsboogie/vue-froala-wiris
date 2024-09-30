<template>
  <main>
    <pre>{{ model }}</pre>
    <froala v-model:value="model" :tag="'textarea'" :config="config"></froala>
  </main>
</template>
<script setup lang="ts">
import "froala-editor/js/plugins.pkgd.min.js";
//Import third party plugins
import "froala-editor/js/third_party/embedly.min";
import "froala-editor/js/third_party/font_awesome.min";
import "froala-editor/js/third_party/image_tui.min";
// Import Froala Editor css files.
import { type FroalaOptions } from "froala-editor";
import "froala-editor/css/froala_editor.pkgd.min.css";
import "froala-editor/css/froala_style.min.css";
// the line below breaks the editor
import "@wiris/mathtype-froala/wiris";

const config: Partial<FroalaOptions> = {
  // Add MathType and ChemType buttons to the toolbar and the image menu:
  //toolbar: ['wirisEditor', 'wirisChemistry'],
  toolbarButtons: [
    ["undo", "redo", "bold", "wirisEditor", "wirisChemistry", "print"],
    ["alert", "clear", "insert"],
  ],
  imageEditButtons: ["wirisEditor", "wirisChemistry"],
  // Allow all tags, in order to allow MathML:
  htmlAllowedTags: [".*"],
  htmlAllowedAttrs: [".*"],
  // Allow empty tags on these next elements for proper formula rendering:
  htmlAllowedEmptyTags: ["mprescripts", "none"],
  // In case you are using a different Froala editor language than default,
  language: "de",
  // You can choose the language for the MathType editor, too:
  // @see: https://docs.wiris.com/en/mathtype/mathtype_web/sdk-api/parameters#regional_properties
  mathTypeParameters: {
    editorParameters: { language: "de-de" },
  },
};

const model = defineModel<string>();
</script>
