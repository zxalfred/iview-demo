<template>
  <Menu ref="pageSider" theme="light" width="250px" :open-names="openName" :active-name="$route.path">
    <Submenu v-for="(submenu, subIndex) in siderContent" :key="subIndex" :name="submenu.title">
      <template slot="title">
        <Icon type="ios-add-circle" />
        {{ submenu.title }}
      </template>
      <MenuItem v-for="(menuItem, menuIndex) in submenu.children"
      :name="menuItem.to"
      :to="menuItem.to"
      :key="menuIndex">
        {{ menuItem.title }}
      </MenuItem>
    </Submenu>
</Menu>
</template>

<script>
export default {
  props: {
    siderContent: {
      type: Array,
    },
  },
  data() {
    return {
      openNameSet: new Set(),
    };
  },
  computed: {
    openName() {
      return Array.from(this.openNameSet);
    },
  },
  watch: {
    openNameSet() {
      this.$nextTick(() => {
        this.$refs.pageSider.updateOpened();
      });
    },
  },
  mounted() {
    const that = this;
    this.siderContent.forEach((subItem) => {
      subItem.children.forEach((item) => {
        if (item.to === that.$route.path) {
          that.openNameSet = new Set().add(subItem.title);
        }
      });
    });
  },
};
</script>


<style scoped>
.ivu-menu {
  height: 100vh;
}
</style>

