<template>
  <div class="login-page mx-auto">
    <figure class="logo mx-auto">
      <img src="/assets/images/common/logo.svg" alt="BIZDRM">
    </figure>
    <form action="" class="">
      <fieldset class="w-full">
        <legend class="blind">
          로그인
        </legend>
        <div class="input-wrap w-full">
          <input class="w-full border-4 border-black rounded-sm border-solid px-12 py-8 text-4xl" type="text" placeholder="아이디" required>
        </div>
        <div class="input-wrap mt-12 w-full">
          <input
            class="w-full border-4 border-black rounded-sm border-solid px-12 py-8 text-4xl"
            type="password"
            placeholder="비밀번호"
            required
          >
        </div>
      </fieldset>
      <div class="util-wrap">
        <div class="checkbox-wrap mt-20">
          <input id="remember" type="checkbox" name="">
          <label for="remember"><span class="check-img" />기억하기</label>
        </div>
        <a href="" class="mt-8 text-4xl text-black no-underline">아이디/비밀번호 찾기</a>
      </div>
      <div class="button-wrap mt-8">
        <button class="bg-biz-red w-full py-8 text-4xl leading-none text-white">
          로그인
        </button>
        <a href="/login/signup" class="bg-biz-gray mt-6 inline-block w-full py-8 text-center text-4xl leading-none text-white no-underline">회원가입</a>
      </div>
    </form>
  </div>
</template>
