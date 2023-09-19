<template>
  <div>
    {{ label }}
    <input
      :type="inputType"
      :name="name"
      :value="value"
      @input="onInput"
      @change="onChange"
      class="form-control mb-2"
    />
  </div>
</template>

<script>
export default {
  name: "CustomInput",
  props: {
    label: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
    inputType: {
      type: String,
      required: true,
    },
  },
  computed: {
    name() {
      return this.label.toLowerCase();
    },
  },
  methods: {
    onInput(event) {
      // Can add validation here
      this.$emit("input", event.target.value);
    },
    onChange(event) {
      // Supports .lazy
      // Can add validation here
      this.$emit("change", event.target.value);
    },
  },
};
</script>
