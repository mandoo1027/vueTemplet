<template>
  <header class="sticky top-0 z-20 bg-white">
    <nav class="default-inner nav h-full flex justify-between">
      <a class="p-0" href="/main/main">
        <div class="logo" />
      </a>
      <div id="navbarSupportedContent" class="h-full flex">
        <ul class="nav-item-list ml-auto h-full flex">
          <li class="nav-item">
            <a class="nav-link h-full px-0" href="/main/main">HOME<span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link h-full px-0" href="#">서비스 소개</a>
          </li>
          <li class="nav-item">
            <a class="nav-link h-full px-0" href="#">고객지원</a>
          </li>
          <li class="nav-item">
            <a class="nav-link h-full px-0" href="/data/dataManagement">데이터 관리</a>
          </li>
          <li class="nav-item">
            <a class="nav-link h-full px-0" href="#">캠페인</a>
            <div class="sub-menu rounded-b-lg">
              <a class="sub-menu-item bg-biz-red py-3 text-center text-lg no-underline" href="/campaign/lead">리드</a>
              <a class="sub-menu-item bg-biz-red py-3 text-center text-lg no-underline" href="/campaign/list">리스트</a>
              <a class="sub-menu-item bg-biz-red py-3 text-center text-lg no-underline" href="/campaign/campaign">캠페인</a>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link h-full px-0" href="/plan/plan">플랜</a>
          </li>
        </ul>
        <!-- 로그인 전 후 디자인상으로는 텍스트만 바뀜. -->
        <!-- 1. 로그인 전 -->
        <div class="ml-12 flex items-center">
          <a href="/login/login" class="mr-10 flex items-center text-sm font-bold text-black no-underline"><span class="login-icon mr-1" />로그인</a>
          <a href="/login/signupForm" class="x items-center font-bold no-underline"><span class="logout-icon mr-1" />회원가입</a>
        </div>
        <!-- 2 . 로그인 후 -->
        <!-- <div class="flex items-center ml-12">
            <a href="/login/login" class="no-underline text-black font-bold text-sm flex items-center mr-10"
              ><span class="login-icon mr-1"></span>로그아웃</a
            >
            <a href="/login/login" class="no-underline text-biz-red font-bold text-sm flex items-center"
              ><span class="logout-icon mr-1"></span>김호진님</a
            >
          </div> -->
      </div>
    </nav>
  </header>
</template>
