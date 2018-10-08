<template>
  <Breadcrumb class="breadcrumb">
    <BreadcrumbItem v-for="(item, index) in crumbItem" :to="item.to" :key="index">
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
};
</script>

<style scoped>
.breadcrumb {
  margin: 20px 0 20px 20px;
}
</style>

