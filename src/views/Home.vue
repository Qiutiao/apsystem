<template>
  <div class="home">
    <div class="container">
      <el-form :model="formline" class="form-inline">
        <el-input v-model="formline.num" placeholder="请输入追溯码查询" class="input">
          <el-button slot="append" icon="el-icon-search" @click="onSubmit"></el-button>
        </el-input>
        <div class="btn-group">
          <div class="row-1 row">
            <el-button class="btn" @click="inputValue('1')" value="1">1</el-button>
            <el-button class="btn" @click="inputValue('2')" value="2">2</el-button>
            <el-button class="btn" @click="inputValue('3')" value="3">3</el-button>
            <el-button class="btn" @click="clear" value="clear">C</el-button>
          </div>
          <div class="row-2 row">
            <el-button class="btn" @click="inputValue('4')" value="4">4</el-button>
            <el-button class="btn" @click="inputValue('5')" value="5">5</el-button>
            <el-button class="btn" @click="inputValue('6')" value="6">6</el-button>
            <el-button class="btn" @click="delect" value="delect">&lt;</el-button>
          </div>
          <div class="row-3 row">
            <el-button class="btn" @click="inputValue('7')" value="7">7</el-button>
            <el-button class="btn" @click="inputValue('8')" value="8">8</el-button>
            <el-button class="btn" @click="inputValue('9')" value="9">9</el-button>
            <el-button class="btn" @click="inputValue('0')" value="0">0</el-button>
          </div>

        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    data() {
      return {
        formline: {
          num: ''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit! '+ this.formline.num);
      },
      inputValue(param){
        this.formline.num += param;
      },
      clear(){
        this.formline.num = '';
      },
      delect(){
        this.formline.num = this.formline.num.slice(0,this.formline.num.length-1);
      }
    }
  }
</script>

<style lang="less">
  .container {
    background: #3CB371;
    margin: 40px auto;
    padding: 40px;
    max-width: 400px;
    text-align: center;
  }

  .btn {
    width: 60px;
    height: 50px;
  }

  .row {
    padding-top: 20px;
  }
</style>