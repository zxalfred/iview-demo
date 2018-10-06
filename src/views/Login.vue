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
        <Form ref="loginForm" :model="loginForm" :rules="loginFormRules">
          <FormItem prop="username">
            <Input type="text" v-model="loginForm.username" placeholder="Username" size="large" on-enter="submitLogin" autofocus>
              <Icon type="ios-person-outline" slot="prepend"></Icon>
            </Input>
          </FormItem>
          <FormItem prop="password">
            <Input type="password" v-model="loginForm.password" placeholder="password" size="large" on-enter="submitLogin">
              <Icon type="ios-lock-outline" slot="prepend"></Icon>
            </Input>
          </FormItem>
          <FormItem>
            <Button size="large" type="success" :loading="isLoading" @click="submitLogin" long>Sign in</Button>
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
        username: '',
        password: '',
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
  methods: {
    submitLogin() {
      this.$refs.loginForm.validate(async (valid) => {
        if (valid) {
          this.loading = true;
          const result = await this.$service.login.login(this.loginForm);
          if (result.result) {
            this.$Message.success('登录成功');
            this.$router.push('/home');
          }
        }
        this.loading = false;
      });
    },
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

