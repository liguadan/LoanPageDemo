<template>
    <div>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
        <!--<van-dialog v-model="isDialogShow" style="width:7.06rem;text-align:center;" :show-confirm-button="false" :overlay="false" :closeOnClickOverlay="true" :close-on-click-overlay="true">-->
            <!--<p style="margin-top:1rem;line-height:0.86rem;">{{dialogText}}</p>-->
            <!--<van-button @click="closeDialog"-->
                        <!--style="margin:1.2rem 0 0.86rem;color:#fff;background:#369FFF;height:1.15rem;line-height:1.15rem;width:5.76rem;"-->
                        <!--type="default">确&nbsp;&nbsp;定-->
            <!--</van-button>-->
        <!--</van-dialog>-->
        <error-loading v-if="isLoading"></error-loading>
    </div>
</template>
<script>
import ErrorLoading from "./components/loading.vue";
import { mapState } from "vuex";
import Store from "store";
import { Config } from "./utils/index";

export default {
  data() {
    return {
      serviceIOS: false,
      serviceAndroid: false
    };
  },
  components: {
    ErrorLoading
  },
  name: "app",
  computed: {
    ...mapState(["isLoading"]),
    ...mapState(["isDialogShow"]),
    ...mapState(["dialogText"]),
    ...mapState(["invalidToken"])
  },

  created() {
    let that = this;
    let agent = window.navigator.userAgent;
    that.serviceIOS = !!agent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
    that.serviceAndroid =
      agent.indexOf("Android") > -1 || agent.indexOf("Adr") > -1;
    Store.set(Config.store.serviceTypeIsIos, that.serviceIOS);
    Store.set(Config.store.serviceTypeIsAndroid, that.serviceAndroid);
  },
  watch: {
    isLoading: function(val, oldVal) {
      let that = this;
      if (val != oldVal && that.invalidToken) {
        if (that.serviceIOS) {
          window.webkit.messageHandlers.jsToOcWithPrams.postMessage({
            needLogin: "3"
          });
        }
      }
    }
  },
  methods: {
    closeDialog() {
      this.$store.commit("isDialogShow", false);
    }
  }
};
</script>
<style scoped>
.loading {
  margin: 0 auto;
  margin-top: 39%;
  background: rgba(0, 0, 0, 0.5);
}
</style>
