<template>
  <Content class="page-content">
      <PageBreadcrumb :crumbItem="crumbHead" />
      <div class="content">
        <router-view />
      </div>
  </Content>
</template>

<script>
import PageBreadcrumb from './PageBreadcrumb';

export default {
  components: {
    PageBreadcrumb,
  },
  props: {
    crumbHead: {
      type: Array,
    },
  },
};
</script>


<style scoped>
.page-content {
  display: flex;
  flex-direction: column;
  padding: 0 25px 25px;
}
.content {
  flex: auto;
  padding: 25px;
  background: white;
  overflow: auto;
}
</style>

