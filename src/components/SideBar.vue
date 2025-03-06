<script lang="ts" setup>
// import logo from '@/assets/logo.png'
</script>
<template>
  <nav class="nav flex-column sidebar">
    <ul class="list-unstyled ps-0 mx-auto">
      <li><button class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="true">專案維護</button></li>
      <li><button class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="true">路線維護</button></li>
      <li><button class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="true">站點維護</button></li>
      <li><button class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="true">班表維護</button></li>
      <li><button class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="true">結帳作業</button></li>
      <li><button class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#table-collapse" aria-expanded="true">報表管理</button>
      <div class="collapse" id="table-collapse">
        <ul class="list-unstyled ps-0">
          <li>廠商班別類別統計</li>
          <li>專案類別A報表</li>
          <li>廠商對帳路線類別</li>
          <li>司機對帳路線類別</li>
          <li>路線完成狀態明細</li>
          <li>廠商對帳路線類別</li>
        </ul>
      </div></li>
      <li><button class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="true">系統管理</button></li>
      <li><button class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="true">權限設定</button></li>
    </ul>
  </nav>
</template>
<style scoped>
.sidebar {
  width: 280px;
  background: #e4d97b;
  color: white;
  padding: 20px;
  position: fixed;
  height: 100vh;
}</style>

