<template>
  <Card class="card" dis-hover>
    <Row>
      <Col span="24">
        <div class="logo">
          <h3>
            <img src="/login.ico">
            <span class="title">iView Demo</span>
          </h3>
        </div>
        <Form :model="loginForm" :rules="loginFormRules">
          <FormItem prop="user">
            <Input type="text" v-model="loginForm.user" placeholder="Username" size="large" autofocus>
              <Icon type="ios-person-outline" slot="prepend"></Icon>
            </Input>
          </FormItem>
          <FormItem prop="password">
            <Input type="password" v-model="loginForm.password" placeholder="password" size="large">
              <Icon type="ios-lock-outline" slot="prepend"></Icon>
            </Input>
          </FormItem>
          <FormItem>
            <Button size="large" type="success" :loading="isLoading" long>Sign in</Button>
          </FormItem>
        </Form>
      </Col>
    </Row>
  </Card>
</template>

<script>
export default {
  data() {
    return {
      loginForm: {
        user: '',
      },
      loginFormRules: {
        user: [
          { required: true, message: 'Please fill in the user name', trigger: 'blur' },
        ],
        password: [
          { required: true, message: 'Please fill in the password.', trigger: 'blur' },
        ],
      },
      isLoading: false,
    };
  },
  mounted() {
  },
};
</script>


<style scoped>
.card {
  margin: auto;
  min-width: 300px;
  padding: 34px 34px;
  background: white;
  text-align: center;
  position: relative;
}
.title {
  font-size: 20px;
  position: relative;
  top: -13px;
}
.logo {
  margin-bottom: 10px;
}
.logo img{
  width: 40px;
  height: auto;
}
</style>

