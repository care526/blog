<template>
  <div class="my-page">
    <div class="row" style="height: 100%">
      <el-menu
        style="width: 120px; height: 100%"
        :default-active="ptype"
        @select="phandleSelect"
      >
        <el-menu-item
          v-for="(plabel, pindex) in allLabel"
          :index="'' + pindex"
          :key="pindex"
        >
          {{ plabel.text }}
        </el-menu-item>
      </el-menu>
      <div class="flex1">
        <el-menu
          mode="horizontal"
          :default-active="ctype"
          @select="chandleSelect"
        >
          <el-menu-item
            v-for="(clabel, cindex) in subLabels"
            :index="'' + cindex"
            :key="cindex"
          >
            {{ clabel.text }}
          </el-menu-item>
        </el-menu>
        <div class="cards">
          <div class="row row-wp_w">
            <template v-for="(item, index) in subLabels[ctype].children">
              <el-card
                class="card"
                :body-style="{ width: '200px', padding: '8px' }"
                :key="index"
              >
                <img
                  :src="item.logo || 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png'"
                  style="width: 100%"
                  @click="go(item.link)"
                  :title="item.title"
                />
                <div class="ta_c fw fs_16">
                  {{ item.text }}
                </div>
              </el-card>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import allLabel from "./guideData";

export default {
  data() {
    return {
      allLabel: allLabel,
      subLabels: allLabel[0].children,
      ptype: "0",
      ctype: "0",
    };
  },

  watch: {
    ptype(value) {
      this.subLabels = allLabel[value].children;
    },
  },

  methods: {
    phandleSelect(key) {
      this.ctype = "0";
      this.ptype = "" + key;
    },

    chandleSelect(key) {
      this.ctype = "" + key;
    },
    go(link) {
      console.log(link);
      window.open(link);
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.cards {
  padding: 24px;
}
.card {
  margin: 0 24px 24px 0;
  cursor: pointer;
}
.my-page {
  position: fixed;
  top: 58px;
  left: 0;
  width: 100vw;
  font-size: 14px;
  height: calc(100vh - 60px);
  margin-top: 0 !important;
  background: rgb(248, 246, 243);
  z-index: 11;
}
</style>
