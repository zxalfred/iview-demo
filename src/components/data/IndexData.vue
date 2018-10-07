<template>
  <Layout>
    <Sider>
      <page-sider />
    </Sider>
    <Content>
      <page-breadcrumb />
      <router-view />
    </Content>
  </Layout>
</template>

<script>
import PageBreadcrumb from '../common/PageBreadcrumb';
import PageSider from '../common/PageSider';

export default {
  components: {
    PageBreadcrumb,
    PageSider,
  },
};
</script>

