<template>
    <Layout class="layout mh-100">
      <Header>
        <PageHeader />
      </Header>
      <Content class="page-content mh-100">
        <router-view />
      </Content>
    </Layout>
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
}
.page-content {
  overflow: hidden;
}
</style>
