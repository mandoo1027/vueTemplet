<template>
  <main class="bg-gray-f5">
    <div class="add-lead-page">
      <div class="inner">
        <form action="">
          <fieldset>
            <legend class="mb-10 text-center text-2xl font-bold">
              리드추가
            </legend>
            <ul>
              <li class="basic-input-wrap mb-8 flex gap-x-10">
                <div class="flex-1">
                  <label for="userName">이름</label>
                  <div class="flex">
                    <input id="userName" type="text" placeholder="이름을 입력해 주세요.">
                  </div>
                </div>
                <div class="flex-1">
                  <label for="userGender">성별</label>
                  <div class="flex">
                    <div class="radio-box flex-1">
                      <input id="female" type="radio" name="gender" checked>
                      <label for="female">여성</label>
                    </div>
                    <div class="radio-box flex-1">
                      <input id="male" type="radio" name="gender">
                      <label for="male">남성</label>
                    </div>
                  </div>
                </div>
              </li>
              <li class="basic-input-wrap mb-8 flex gap-x-10">
                <div class="flex-1">
                  <label for="userAge">나이</label>
                  <div class="flex">
                    <input id="userAge" type="text" inputmode="numeric" placeholder="나이를 입력해 주세요.">
                  </div>
                </div>
                <div class="flex-1">
                  <label for="userTel">전화번호</label>
                  <div class="flex">
                    <input id="userTel" type="text" placeholder="010-0000-0000">
                  </div>
                </div>
              </li>
              <li class="basic-input-wrap mb-8 flex gap-x-10">
                <div class="flex-1">
                  <label for="userBirth">생년월일</label>
                  <div class="flex">
                    <input id="userBirth" type="text" placeholder="YYYY-MM-DD">
                  </div>
                </div>
                <div class="flex-1">
                  <label for="userCompany">회사명</label>
                  <div class="flex">
                    <input id="userCompany" type="text" placeholder="회사명을 입력해 주세요.">
                  </div>
                </div>
              </li>
              <li class="basic-input-wrap mb-8">
                <label for="userEmail">이메일</label>
                <div class="flex">
                  <input id="userEmail" type="email" placeholder="example@domain.com">
                </div>
              </li>
              <li class="basic-input-wrap mb-8">
                <label for="userAdrNum">우편번호</label>
                <div class="flex">
                  <input id="userAdrNum" type="text" placeholder="우편번호를 입력해 주세요." readonly>
                  <button class="bg-biz-red find-address-button py-3 text-sm font-bold text-white" type="button">
                    우편번호 검색
                  </button>
                </div>
              </li>
              <li class="basic-input-wrap mb-8">
                <label for="userAdr1">주소1</label>
                <div class="flex">
                  <input id="userAdr1" type="text" placeholder="주소를 입력해 주세요.">
                </div>
              </li>
              <li class="basic-input-wrap mb-12">
                <label for="userAdr2">주소2</label>
                <div class="flex">
                  <input id="userAdr2" type="text" placeholder="주소를 입력해 주세요.">
                </div>
              </li>
            </ul>
          </fieldset>
          <div class="button-wrap flex justify-center gap-x-6">
            <a href="/campain/lead" class="bg-gray-d9 inline-block w-full rounded-md py-3 text-center text-sm font-bold leading-none no-underline">취소</a>
            <a
              href="/campain/lead"
              class="bg-biz-red inline-block w-full rounded-md py-3 text-center text-sm font-bold leading-none text-white no-underline"
            >저장</a>
          </div>
        </form>
      </div>
    </div>
  </main>
</template>
