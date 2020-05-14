<template>
  <div class="rolehandle">
    <div class="role-search">
      <span>角色名称：</span>
      <el-input
        placeholder="请输入角色名称"
        prefix-icon="el-icon-search"
        v-model="search"
        style="width:200px;"
      >
      </el-input>
      <el-button type="primary">搜索</el-button>
    </div>
    <div class="role-add">
      <el-button type="primary" icon="el-icon-plus" class="role-button"
        >新增角色</el-button
      >
      <el-button
        type="primary"
        icon="el-icon-delete-solid"
        class="role-button role-del"
        >批量删除</el-button
      >
      <el-button type="primary" icon="el-icon-refresh-right" class="role-button"
        >刷新</el-button
      >
    </div>
    <div>
      <el-table
        :data="tableData"
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55"> </el-table-column>
        <el-table-column type="index" label="ID" width="100"> </el-table-column>
        <el-table-column label="日期" width="180">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.date }}</span>
          </template>
        </el-table-column>
        <el-table-column label="角色名称" prop="name" width="180">
        </el-table-column>
        <el-table-column label="备注" prop="address"> </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
              >编辑</el-button
            >
            <el-button
            class="batchdel"
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: "rolehandle",
  data() {
    return {
      search: "",
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ]
    };
  },
  mounted() {},
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
    handleSelectionChange(selection) {
      console.log(selection);
    }
  }
};
</script>

<style scoped lang="less">
.rolehandle {
  padding: 20px;
}
.role-search {
  display: flex;
  align-items: center;
  font-size: 12px;
}
.role-search /deep/ .el-input__inner {
  height: 30px;
}
.role-search /deep/ .el-input__icon {
  line-height: 30px;
}
.role-search /deep/ .el-button--primary {
  height: 30px;
  line-height: 0;
  font-size: 12px;
  background-color: #009686;
  border: 0;
}
/deep/input::-webkit-input-placeholder {
  font-size: 12px;
}
/deep/input::-moz-input-placeholder {
  font-size: 12px;
}
/deep/input::-ms-input-placeholder {
  font-size: 12px;
}
.role-add {
  padding-top: 20px;
}
.role-del {
  background-color: #009686;
  border: 0;
}
/deep/ .el-button {
  padding: 7px 20px;
  font-size: 12px;
}
/deep/ .batchdel{
    background-color: #009686;
    border: 0;
}
</style>
