<template>
  <Breadcrumb class="breadcrumb">
    <BreadcrumbItem v-for="(item, index) in fullCrumbItem" :to="item.to" :key="index">
      {{item.title}}
    </BreadcrumbItem>
  </Breadcrumb>
</template>

<script>
export default {
  props: {
    crumbItem: {
      type: Array,
      default() {
        return [
          {
            title: '首页',
            to: '/home',
          },
        ];
      },
    },
  },
  computed: {
    fullCrumbItem() {
      let subArr = this.$store.state.crumbArr;
      subArr = subArr.map(value => ({ title: value }));
      return this.crumbItem.concat(subArr);
    },
  },
};
</script>

<style scoped>
.breadcrumb {
  margin: 20px 0 20px 20px;
}
</style>

