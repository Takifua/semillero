<template>
    <button :class="classes">
      <span class="material-icons">face</span><slot /><i
        class="material-icons"
      >face</i>
    </button>
</template>

<script>
const validateProp = (prop) => {
  return prop !== undefined && prop !== null && prop !== false;
};
export default {
  name: "Boton",
  props: [
    "color",
    "focus",
    "outlined",
    "text",
    "disableShadow",
    "textColor",
    "disabled",
    "primary",
    "sm",
    "md",
    "lg",
    "secondary",
    "danger",
    "start",
    "end",
  ],
  computed: {
    classes() {
      const classes = ["btn"];
      if (validateProp(this.focus)) {
        classes.push("focus");
      }
      if (validateProp(this.outlined)) {
        classes.push("outlined");
      }
      if (validateProp(this.text)) {
        classes.push("text");
      }
      if (validateProp(this.disableShadow)) {
        classes.push("disableShadow");
      }
      if (validateProp(this.disabled)) {
        classes.push("disabled");
      }
      if (validateProp(this.primary)) {
        classes.push("primary");
      }
      if (validateProp(this.sm)) {
        classes.push("sm");
      }
      if (validateProp(this.secondary)) {
        classes.push("secondary");
      }
      if (validateProp(this.md)) {
        classes.push("md");
      }
      if (validateProp(this.lg)) {
        classes.push("lg");
      }
      if (validateProp(this.danger)) {
        classes.push("danger");
      }
      if (validateProp(this.start)) {
        classes.push("start");
      }
      if (validateProp(this.end)) {
        classes.push("end");
      }
      return classes;
    },
  },
};
</script>

<style>
.btn {
  border: none;
  background: none;
  box-shadow: 2px 2px 2px 0px gray;
  text-transform: capitalize;
  padding: 15px 25px;
  border-radius: 10px;
  background-color: #e9e9e9;
  transition: 0.2s;
  font-size: 25px;
  width: fit-content;
  color: var;
  cursor: pointer;
}
.btn.sm {
  font-size: 15px;
  font-weight: 600;
}
.btn.md {
  font-size: 20px;
}
.btn.lg {
  font-size: 30px;
}
.btn:hover,
.btn:focus,
.btn.focus {
  filter: brightness(80%);
}
.btn.outlined {
  background-color: transparent;
  color: blue;
  border: solid 2px blue;
  /* box-shadow: none; */
}
.btn.outlined:hover,
.btn.outlined:focus,
.btn.outlined.focus {
  background-color: white;
  filter: brightness(95%);
}
.btn.text {
  background-color: transparent;
  color: blue;
  box-shadow: none;
  font-weight: 500;
}
.btn.text:hover,
.btn.text:focus,
.btn.text.focus {
  background-color: white;
  filter: brightness(95%);
}
.btn.disabled {
  color: gray;
}

.btn.disabled:hover,
.btn.disabled:focus,
.btn.disabled.focus {
  background-color: none;
  filter: none;
  cursor: auto;
}
.btn.disableShadow {
  box-shadow: none;
}
.btn.primary {
  color: white;
  background: rgba(0, 0, 255, 0.644);
}
.btn.danger {
  color: white;
  background: red;
}
.btn.secondary {
  background: rgb(94, 94, 94);
  color: white;
}
.btn span {
  font-size: 0px;
}

.btn.start span {
  font-size: 25px;
  margin-right: 5px;
}

.btn i {
  font-size: 0;
}

.btn.end i {
  font-size: 25px;
  margin-left: 5px;
}
</style>
