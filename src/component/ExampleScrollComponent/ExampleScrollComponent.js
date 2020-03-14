import { AbstractScrollComponent } from 'vue-transition-component';
import ExampleScrollComponentTransitionController from './ExampleScrollComponentTransitionController';

// @vue/component
export default {
  name: 'ExampleScrollComponent',
  extends: AbstractScrollComponent,
  methods: {
    handleAllComponentsReady() {
      this.transitionController = new ExampleScrollComponentTransitionController(this);
      this.isReady();
    },
  },
};
