<template>
  <div class="content mh-100">
    <PageBreadcrumb />
    <Card dis-hover :bordered="false" class="main-card">
      <Row type="flex" justify="center">
        <Col span="6">
          <Card>
            <div class="card-content">
              <Icon :size="50" type="md-people" style="margin-right: 20px" />
              用户数： <strong>7</strong>
            </div>
          </Card>
        </Col>
      </Row>
    </Card>
  </div>
</template>

<script>
import PageBreadcrumb from '@/components/common/PageBreadcrumb';

export default {
  components: {
    PageBreadcrumb,
  },
};
</script>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  padding: 0 25px 25px;
}
.main-card {
  flex: auto;
}
.card-content {
  text-align: center;
}
</style>

