<template>
  <div class="Login">
    <el-form ref="loginForm" :model="loginForm" status-icon :rules="rules" label-width="100px" label-position="left">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="loginForm.username" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="loginForm.password" :maxlength="20" show-password type="password" autocomplete="off" />
      </el-form-item>
      <el-form-item>
        <el-button @click="$emit('typeChange','')">注册</el-button>
        <el-button type="primary" @click="submitForm('loginForm')">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  components: {},
  data() {
    var checkName = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('请输入密码用户名'));
      }
      callback();
    };
    // 密码验证
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      }
      callback();
    };
    var checkCode = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入验证码'));
      } else if (value.length < 4) {
        callback(new Error('验证码应为4位'));
      } else {
        callback();
      }
    };
    return {

      // QQifarm
      qqDialogVisible: false,
      ifarmUrl: '',
      // 验证码数据
      imageBase64: null,
      // 登录数据
      loginForm: {
        username: '',
        password: '',
        verifyCode: ''
      },
      // 验证码id
      valid: '',
      // 验证规则
      rules: {
        username: [
          { validator: checkName, trigger: 'blur' }
        ],
        password: [
          { validator: validatePass, trigger: 'blur' }
        ],
        verifyCode: [
          { validator: checkCode, trigger: 'blur' }
        ]
      }
    };
  },
  computed: {},
  watch: {},
  mounted() {
  },
  methods: {
    // 表单提交
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.loginAjax();
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    // 跳转登录
    toLogin() {
      this.resetForm('loginForm');
      this.$emit('typeChange');
    },
    // 重置数据
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    
    // 登录
    loginAjax() {
      const reqBody = {
        userInfo: {
          username: this.loginForm.username.trim(),
          password: this.loginForm.password
        },
        vid: this.vid,
        value: this.loginForm.verifyCode
      };
      this.$api.user.login(reqBody)
        .then(res => {
          if (res.status === 200) {
            localStorage.setItem('user', JSON.stringify(res.data.data));
            this.$store.dispatch('setUser', res.data.data);
            this.$store.dispatch('setLoginBoolean');
            this.$message.success(res.data.message);
          } else {
            this.$message.closeAll();
            this.$message.info(res.data.message);
          }
        })
        .catch(err => {
          console.error(err);
        });
      this.loading = false;
      this.getCode();
    }
  }
};
</script>

<style scoped lang="less">

</style>
