<template>
  <div class="HeaderBar">
    <el-row
      align="middle"
      justify="space-around"
      style="width:100%;"
      type="flex"
    >
      <el-col>
        <a href="/">
          <img alt src="@/assets/img/logo.png">
        </a>
      </el-col>
      
      <el-col class="header-info">
        <!-- <el-badge :value="3">
          <el-button size="small">消息</el-button>
        </el-badge> -->
        <div style="margin-left:20px;" @click="userOpen">
          <el-dropdown v-if="user.id" trigger="click" :disabled="!user.id" @command="clickMenu">
            <el-avatar fit="cover" :src="user.id ? `https://Localhost:8088/${user.id}.png?t=${new Date().getTime()}` : ''" shape="square" />
            <el-dropdown-menu slot="dropdown">
              <template>
                <el-dropdown-item
                  v-for="item of MenuList"
                  :key="item.handler"
                  :divided="item.divided"
                  :command="item.handler"
                >{{ item.name }}</el-dropdown-item>
              </template>
            </el-dropdown-menu>
          </el-dropdown>
          <el-avatar v-else icon="el-icon-user-solid" fit="cover" shape="square" />
        </div>
      </el-col>
    </el-row>
    <!-- <SetDialog
      v-if="settingVisible"
      :setting-visible.sync="settingVisible"
      :user="user"
    /> -->
  </div>
</template>

<script>
import cookieTool from 'js-cookie';

export default {
    name: 'HeaderBar',
    data() {
        return {
            user: 'd',
            params: {
                keyword: '',
                illustType: 'illust'
            },
            typeList: [
                {
                    name: '插图',
                    value: 'illust'
                },
                {
                    name: '漫画',
                    value: 'manga'
                },
                {
                    name: '作者',
                    value: 'artist'
                }
            ]
        }
    },
    methods: {
      userOpen() {
            this.$store.dispatch('setLoginBoolean');
            // if (!cookieTool.get('jwt')) {
            //     this.$store.dispatch('setLoginBoolean');
            // }
        }
    },
    
}
</script>

<style scoped lang="less">
     .HeaderBar {
  background-color: #fff;
  height: 100%;
  width: 100%;
  display: flex;
  overflow: hidden;
  /deep/.el-select .el-input {
    width: 80px;
  }
  /deep/.input-with-select {
    width: 25vw;
    background-color: #fff;
  }

  .input-with-select:hover {
    background-color: rgba(0, 0, 0, 0.08);
  }
  .header-info {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
}
.user-tools {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-bottom: 20px;
  .tool {
    height: 2rem;
    width: 2rem;
    border-radius: 2px;
    border: 1px solid #dcdfe6;
    text-align: center;
  }
}
</style>