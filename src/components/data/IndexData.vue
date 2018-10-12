<template>
  <Layout>
    <Sider hide-trigger :width="250">
      <PageSider :siderContent="siderList" />
    </Sider>
    <Content>
      <page-breadcrumb :crumbItem="crumbList" />
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
  data() {
    return {
      crumbList: [
        {
          title: '首页',
          to: '/home',
        },
      ],
      siderList: [
        {
          title: '城市管理',
          children: [
            {
              title: '城市信息',
              to: '/data/city',
            },
          ],
        },
        {
          title: '门店管理',
          children: [
            {
              title: '门店信息',
              to: '/data/shop',
            },
          ],
        },
        {
          title: '主题管理',
          children: [
            {
              title: '房间主题',
              to: '/data/room-theme',
            },
          ],
        },
        {
          title: '房间管理',
          children: [
            {
              title: '房间类型',
              to: '/data/room-type',
            },
            {
              title: '房间信息',
              to: '/data/room',
            },
          ],
        },
        {
          title: '价格管理',
          children: [
            {
              title: '动态价格模型',
              to: '/data/price-model',
            },
            {
              title: '作用范围',
              to: '/data/price',
            },
            {
              title: '动态价格规则',
              to: '/data/price-rule',
            },
            {
              title: '动态价格折扣试算',
              to: '/data/price-rule-attempt',
            },
          ],
        },
        {
          title: '设施管理',
          children: [
            {
              title: '设施信息',
              to: '/data/room-facility',
            },
          ],
        },
      ],
    };
  },
};
</script>
