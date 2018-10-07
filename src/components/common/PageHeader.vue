<template>
  <Header>
    <Menu mode="horizontal" theme="dark" :active-name="nowPage" @on-select="selectNav">
      <div class="layout-logo"></div>
      <div class="layout-nav">
        <Row type="flex" justify="end">
          <Col span="23">
            <MenuItem v-for="(item, index) in mainNavList" :key="index" :name="item.to">
              {{ item.title }}
            </MenuItem>
          </Col>
          <Col span="1">
            <Dropdown trigger="click">
              <a href="javascript:void(0)">
                <Avatar shape="square" icon="ios-person" size="large" />
              </a>
              <DropdownMenu slot="list">
                <DropdownItem disabled>Hi, Admin!</DropdownItem>
                <DropdownItem>修改密码</DropdownItem>
                <DropdownItem>修改昵称</DropdownItem>
                <DropdownItem>退出</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </Col>
        </Row>
      </div>
    </Menu>
</Header>
</template>

<script>
export default {
  data() {
    return {
      mainNavList: [
        {
          title: '首页',
          to: '/home',
        },
        {
          title: '资料',
          to: '/data',
        },
        {
          title: '商品',
          to: '/product',
        },
        {
          title: '卡券',
          to: '/card',
        },
        {
          title: '订单',
          to: '/order',
        },
        {
          title: '用户',
          to: '/user',
        },
        {
          title: '员工',
          to: '/staff',
        },
        {
          title: '薪资',
          to: '/salary',
        },
        {
          title: '报表',
          to: '/report',
        },
        {
          title: '工具',
          to: '/tools',
        },
      ],
    };
  },
  computed: {
    nowPage() {
      const pageName = this.mainNavList.find(item => item.to === `/${this.$route.path.split('/')[1]}`);
      return (pageName && pageName.to) || '';
    },
  },
  methods: {
    selectNav(name) {
      this.$router.push(name);
    },
  },
};
</script>

<style scoped>
.layout-logo{
  width: 100px;
  height: 30px;
  background: transparent;
  border-radius: 3px;
  float: left;
  position: relative;
  top: 15px;
  left: 20px;
}
.layout-nav{
  margin-left: 30%;
}
.layout-nav a {
  color: rgba(255,255,255,.7);
}
.layout-nav .ivu-menu-item-active a {
  color: white;
}
</style>
