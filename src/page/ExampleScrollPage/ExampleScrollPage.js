import { AbstractPageScrollComponent, getEventBus, ADD_COMPONENTS } from 'vue-transition-component';
import ExampleScrollComponent from '../../component/ExampleScrollComponent';
import ExampleScrollPageTransitionController from './ExampleScrollPageTransitionController';

// @vue/component
export default {
  name: 'ExampleScrollPage',
  components: {
    ExampleScrollComponent,
  },
  extends: AbstractPageScrollComponent,
  methods: {
    handleAllComponentsReady() {
      this.transitionController = new ExampleScrollPageTransitionController(this);

      // When all components are ready we start adding the scrollComponents to the scroll tracker
      getEventBus().$emit(ADD_COMPONENTS, this.scrollComponents);

      this.isReady();
    },
  },
};
