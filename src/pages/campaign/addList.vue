<template>
  <main class="bg-gray-f5">
    <div class="add-list-page">
      <div class="inner">
        <form action="">
          <fieldset>
            <legend class="mb-10 text-center text-2xl font-bold">
              리스트 추가
            </legend>
            <ul>
              <li class="basic-input-wrap mb-12">
                <label for="userAdr2">리스트명</label>
                <div class="flex">
                  <input id="userAdr2" type="text" placeholder="리스트명을 입력해 주세요.">
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
