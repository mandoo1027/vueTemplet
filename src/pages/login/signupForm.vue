<template>
  <div class="signup-page">
    <div class="inner">
      <figure class="logo">
        <img src="/assets/images/common/logo.svg" alt="BIZDRM">
      </figure>
      <form action="">
        <fieldset>
          <legend class="mb-20 text-center font-bold">
            비즈디알엠 회원가입
          </legend>
          <ul>
            <li class="basic-input-wrap mb-4">
              <label for="userId">아이디</label>
              <div class="flex">
                <input id="userId" type="text" placeholder="영문+숫자 포함 최소 6자" minlength="6" required>
                <button class="check-button py-3 font-bold text-sm text-white bg-biz-red" type="button">중복확인</button>
              </div>
              <p class="error-msg">
                중복된 아이디 입니다.
              </p>
            </li>
            <li class="basic-input-wrap mb-4">
              <label for="userPwd1">비밀번호</label>
              <div class="flex">
                <input id="userPwd1" type="password" placeholder="영문+숫자+특수문자 포함 최소 8자 이상" minlength="8" required>
              </div>
              <p class="error-msg">
                영문+숫자+특수문자 포함 최소 8자 이상으로 설정해 주세요.
              </p>
            </li>
            <li class="basic-input-wrap mb-16">
              <label for="userPwd2">비밀번호 확인</label>
              <div class="flex">
                <input id="userPwd2" type="password" placeholder="비밀번호를 입력해 주세요." minlength="8" required>
              </div>
              <p class="error-msg">
                비밀번호가 일치하지 않습니다.
              </p>
            </li>
            <li class="basic-input-wrap mb-6">
              <label for="userName">이름</label>
              <div class="flex">
                <input id="userName" type="text" placeholder="실명을 입력해 주세요.">
              </div>
            </li>
            <li class="basic-input-wrap mb-6">
              <label for="userBirth">생년월일</label>
              <div class="flex">
                <input id="userBirth" type="text" placeholder="년(4자)" minlength="4">
                <select id="" class="basic-select" name="">
                  <option value="none">
                    월
                  </option>
                  <option value="1">
                    1월
                  </option>
                  <option value="2">
                    2월
                  </option>
                  <option value="3">
                    3월
                  </option>
                  <option value="4">
                    4월
                  </option>
                  <option value="5">
                    5월
                  </option>
                  <option value="6">
                    6월
                  </option>
                  <option value="7">
                    7월
                  </option>
                  <option value="8">
                    8월
                  </option>
                  <option value="9">
                    9월
                  </option>
                  <option value="10">
                    10월
                  </option>
                  <option value="11">
                    11월
                  </option>
                  <option value="12">
                    12월
                  </option>
                </select>
                <input id="userBirth" type="text" placeholder="일">
              </div>
            </li>
            <li class="basic-input-wrap mb-6">
              <label for="userEmail">본인확인 이메일</label>
              <div class="flex">
                <input id="userEmail" type="email" placeholder="이메일을 입력해 주세요.">
              </div>
            </li>
            <li class="basic-input-wrap mb-16">
              <label for="userTel">휴대전화</label>
              <div class="flex">
                <input id="userTel" type="text" placeholder="전화번호를 입력해 주세요.">
              </div>
            </li>
          </ul>
        </fieldset>
        <div class="flex justify-between gap-6">
          <button onclick="location.href='/login/signupComplete'" class="w-full py-3 text-sm font-bold text-white bg-biz-red leading-none">
            가입하기
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
