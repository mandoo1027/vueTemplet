<template>
  <div class="data-management-page bg-biz-light-red">
    <div class="h-[277px] bg-[#822325]">
      <div class="inner h-full">
        <ul class="row h-full">
          <li class="col-4 flex items-center justify-center">
            <h2 class="text-[28px] font-bold text-white">Data Query</h2>
          </li>
          <li class="col-8 flex items-center gap-16">
            <ul class="ml-auto">
              <li class="mb-6 flex items-center">
                <label
                  class="w-[102px] shrink-0 text-sm font-bold text-white"
                  for=""
                  >검색한 리스트명</label
                >
                <div class="basic-input-wrap w-[330px]">
                  <input id="listName" type="text" placeholder="리스트명" />
                </div>
              </li>
              <li class="mb-6 flex items-center">
                <label
                  class="w-[102px] shrink-0 text-sm font-bold text-white"
                  for=""
                  >리스트 아이디</label
                >
                <div class="basic-input-wrap w-[330px]">
                  <input id="listId" type="text" placeholder="리스트 아이디" />
                </div>
              </li>
              <li class="flex items-center">
                <label
                  class="w-[102px] shrink-0 text-sm font-bold text-white"
                  for=""
                  >API Key</label
                >
                <div class="basic-input-wrap w-[330px]">
                  <input id="apiKey" type="text" placeholder="API Key" />
                </div>
              </li>
            </ul>
            <button
              class="h-[125px] w-[131px] flex flex-col items-center justify-center rounded-xl bg-[#BE3034]"
            >
              <span class="search-img h-[38px] w-[38px] shrink-0" />
              <span class="mt-2.5 text-base font-bold text-white"
                >리스트 조회</span
              >
            </button>
          </li>
        </ul>
      </div>
    </div>
    <div class="inner">
      <div class="py-24">
        <ul class="row gap-x-4">
          <li class="col data-box rounded-md bg-white">
            <h2 class="mb-8 text-lg font-bold">리스트 목록</h2>
          </li>
          <li class="col data-box rounded-md bg-white">
            <h2 class="blind">리드, 방문자 목록</h2>
            <section class="mb-5">
              <h3
                class="mb-2.5 flex items-center justify-between text-lg font-bold"
              >
                리드 목록
                <div class="flex gap-1">
                  <button
                    class="bg-biz-purple rounded-sm p-2 text-sm font-normal leading-none text-white"
                  >
                    선택저장
                  </button>
                  <button
                    class="bg-biz-green rounded-sm p-2 text-sm font-normal leading-none text-white"
                  >
                    현재 페이지 저장
                  </button>
                  <button
                    class="bg-biz-red rounded-sm p-2 text-sm font-normal leading-none text-white"
                  >
                    모두 저장
                  </button>
                </div>
              </h3>
              <div
                class="table-wrap table-responsive h-60 flex flex-col justify-between bg-white"
              >
                <table
                  class="red-table table-borderless table-striped mb-0 table"
                >
                  <thead>
                    <tr>
                      <th class="text-center" colspan="3">리드코드</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th class="text-center" scope="row">
                        <div>
                          <input
                            id="checkboxNoLabel"
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            aria-label="..."
                          />
                        </div>
                      </th>
                      <td class="text-center">afldkajfldkajfldak</td>
                      <td class="text-center">리드</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
            <section class="">
              <h3
                class="mb-2.5 flex items-center justify-between text-lg font-bold"
              >
                방문자 목록
                <div class="flex gap-1">
                  <button
                    class="bg-biz-purple rounded-sm p-2 text-sm font-normal leading-none text-white"
                  >
                    선택저장
                  </button>
                  <button
                    class="bg-biz-green rounded-sm p-2 text-sm font-normal leading-none text-white"
                  >
                    현재 페이지 저장
                  </button>
                  <button
                    class="bg-biz-red rounded-sm p-2 text-sm font-normal leading-none text-white"
                  >
                    모두 저장
                  </button>
                </div>
              </h3>
              <div
                class="table-wrap table-responsive h-60 flex flex-col justify-between bg-white"
              >
                <table
                  class="red-table table-borderless table-striped mb-0 table"
                >
                  <thead>
                    <tr>
                      <th class="text-center" colspan="3">방문자 코드</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th class="text-center" scope="row">
                        <div>
                          <input
                            id="checkboxNoLabel"
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            aria-label="..."
                          />
                        </div>
                      </th>
                      <td class="text-center">text</td>
                      <td class="text-center">text</td>
                    </tr>
                    <tr>
                      <th class="text-center" scope="row">
                        <div>
                          <input
                            id="checkboxNoLabel"
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            aria-label="..."
                          />
                        </div>
                      </th>
                      <td class="text-center">text</td>
                      <td class="text-center">text</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
          </li>
          <li class="col data-box rounded-md bg-white">
            <h2 class="mb-12 text-lg font-bold">이벤트 목록</h2>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
