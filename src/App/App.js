import { FlowManager, AbstractRegistrableComponent, ScrollTrackerPlugin } from 'vue-transition-component';
import { DeviceStateEvent } from 'seng-device-state-tracker';
import Vue from 'vue';
import { mapMutations, mapState } from 'vuex';
import { SET_DEVICE_STATE } from '../store/module/app/app';

// @vue/component
export default {
  name: 'App',
  extends: AbstractRegistrableComponent,
  computed: {
    ...mapState({
      deviceState: state => state.app.deviceState,
    }),
  },
  mounted() {
    Vue.use(ScrollTrackerPlugin, {
      config: {
        // When this is enabled you should set the container(body) to a fixed height(100%).
        enableSmoothScroll: false,
        // When this is set to a container other than the window, you need to set
        // the html/body tag to a fixed height(100%) and overflow: hidden.
        // And set the container to a fixed height(100%) and overflow: auto.
        container: this.$refs.container,
        inViewProgressEnabled: false,
      },
    });
  },
  created() {
    this.$deviceStateTracker.addEventListener(
      DeviceStateEvent.STATE_UPDATE,
      this.handleDeviceStateUpdate,
    );
    this.setDeviceState(this.$deviceStateTracker.currentState);
  },
  methods: {
    ...mapMutations({
      setDeviceState: SET_DEVICE_STATE,
    }),
    onLeave(element, done) {
      FlowManager.transitionOut.then(() => FlowManager.done()).then(done);
    },
    handleDeviceStateUpdate(event) {
      this.setDeviceState(event.data.state);
    },
  },
};
