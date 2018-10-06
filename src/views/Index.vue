<template>
  <div class="layout">
    <Layout>
      <PageHeader />
      <router-view />
    </Layout>
  </div>
</template>
<script>
import PageHeader from '@/components/common/PageHeader';

export default {
  components: {
    PageHeader,
  },
};
</script>

<style scoped>
.layout {
  background: #f5f7f9;
  position: relative;
  overflow: hidden;
  width: 100%;
}
</style>
