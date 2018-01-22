<template>
  <div>
    <p v-text="message"
       style="color:red" />
    <el-form label-position="right"
             label-width="80px"
             :model="formLabelAlign">
      <el-form-item label="用户名">
        <el-input v-model="formLabelAlign.user"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="formLabelAlign.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary"
                   @click="onSubmit">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Login',
  data() {
    return {
      message: '',
      formLabelAlign: {
        user: '',
        password: '',
      },
    };
  },
  methods: {
    onSubmit() {
      const result = axios.post(
        'http://localhost:3001/api/login',
        this.formLabelAlign,
      );

      result
        .then(({ data }) => {
          this.message = data.message;
        })
        .catch(() => {
          // this.message = message;
          this.message = '网络问题';
        });
      return result;
    },
  },
};
</script>

<style scoped>

</style>
