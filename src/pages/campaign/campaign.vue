<template>
  <div class="bg-biz-light-red campaign-page">
    <div class="inner">
      <div class="container">
        <ul class="row gap-x-4">
          <li class="col campaign-box rounded-md bg-white">
            <form action="">
              <h2 class="text-biz-red mb-8 text-center text-lg font-bold">
                캠페인 대상
              </h2>
              <ul>
                <li class="basic-input-wrap mb-6">
                  <label for="userApi">API Key</label>
                  <div class="flex">
                    <input id="userApi" class="rounded-md" type="text" placeholder="API 키를 입력해 주세요.">
                  </div>
                </li>
                <li class="basic-input-wrap mb-4">
                  <label for="listId">List 아이디</label>
                  <div class="flex">
                    <input id="listId" class="rounded-md" type="text" placeholder="List 아이디를 입력해 주세요.">
                  </div>
                </li>
              </ul>
              <div>
                <button class="bg-biz-red w-full rounded-md py-3 text-sm font-bold leading-none text-white">
                  리스트 조회하기
                </button>
              </div>
            </form>
            <section class="mt-12">
              <h3 class="mb-3 flex items-center justify-between text-lg font-bold">
                리드 목록
                <div class="flex gap-1">
                  <button class="bg-biz-purple rounded-sm p-2 text-sm font-normal leading-none text-white" type="button">
                    선택전송
                  </button>
                  <button class="bg-biz-green ml-25 rounded-sm p-2 text-sm font-normal leading-none text-white" type="button">
                    현재 페이지 전송
                  </button>
                  <button class="bg-biz-red ml-25 rounded-sm p-2 text-sm font-normal leading-none text-white" type="button">
                    모두전송
                  </button>
                </div>
              </h3>
              <div class="table-wrap table-responsive mb-4 h-full flex flex-col justify-between bg-white">
                <table class="red-table table-borderless table-striped mb-0 table">
                  <thead>
                    <tr>
                      <th class="text-center" colspan="3">
                        리드코드
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th class="text-center" scope="row">
                        <div>
                          <input id="checkboxNoLabel" class="form-check-input" type="checkbox" value="" aria-label="...">
                        </div>
                      </th>
                      <td class="text-center">
                        afldkajfldkajfldak
                      </td>
                      <td class="text-center">
                        리드
                      </td>
                    </tr>
                    <tr>
                      <th class="text-center" scope="row">
                        <div>
                          <input id="checkboxNoLabel" class="form-check-input" type="checkbox" value="" aria-label="...">
                        </div>
                      </th>
                      <td class="text-center">
                        afldkajfldkajfldak
                      </td>
                      <td class="text-center">
                        리드
                      </td>
                    </tr>
                    <tr>
                      <th class="text-center" scope="row">
                        <div>
                          <input id="checkboxNoLabel" class="form-check-input" type="checkbox" value="" aria-label="...">
                        </div>
                      </th>
                      <td class="text-center">
                        afldkajfldkajfldak
                      </td>
                      <td class="text-center">
                        리드
                      </td>
                    </tr>
                    <tr>
                      <th class="text-center" scope="row">
                        <div>
                          <input id="checkboxNoLabel" class="form-check-input" type="checkbox" value="" aria-label="...">
                        </div>
                      </th>
                      <td class="text-center">
                        afldkajfldkajfldak
                      </td>
                      <td class="text-center">
                        리드
                      </td>
                    </tr>
                    <tr>
                      <th class="text-center" scope="row">
                        <div>
                          <input id="checkboxNoLabel" class="form-check-input" type="checkbox" value="" aria-label="...">
                        </div>
                      </th>
                      <td class="text-center">
                        afldkajfldkajfldak
                      </td>
                      <td class="text-center">
                        리드
                      </td>
                    </tr>
                    <tr>
                      <th class="text-center" scope="row">
                        <div>
                          <input id="checkboxNoLabel" class="form-check-input" type="checkbox" value="" aria-label="...">
                        </div>
                      </th>
                      <td class="text-center">
                        afldkajfldkajfldak
                      </td>
                      <td class="text-center">
                        리드
                      </td>
                    </tr>
                    <tr>
                      <th class="text-center" scope="row">
                        <div>
                          <input id="checkboxNoLabel" class="form-check-input" type="checkbox" value="" aria-label="...">
                        </div>
                      </th>
                      <td class="text-center">
                        afldkajfldkajfldak
                      </td>
                      <td class="text-center">
                        리드
                      </td>
                    </tr>
                    <tr>
                      <th class="text-center" scope="row">
                        <div>
                          <input id="checkboxNoLabel" class="form-check-input" type="checkbox" value="" aria-label="...">
                        </div>
                      </th>
                      <td class="text-center">
                        afldkajfldkajfldak
                      </td>
                      <td class="text-center">
                        리드
                      </td>
                    </tr>
                    <tr>
                      <th class="text-center" scope="row">
                        <div>
                          <input id="checkboxNoLabel" class="form-check-input" type="checkbox" value="" aria-label="...">
                        </div>
                      </th>
                      <td class="text-center">
                        afldkajfldkajfldak
                      </td>
                      <td class="text-center">
                        리드
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <nav aria-label="Page navigation">
                <ul class="pagination justify-content-center gap-x-2">
                  <li class="page-item active">
                    <a class="page-link" href="#">1</a>
                  </li>
                </ul>
                <!-- <ul class="pagination justify-content-center gap-x-2">
                    <li class="page-item disabled">
                      <a class="page-link" href="#" tabindex="-1" aria-disabled="true"> <span aria-hidden="true">&laquo;</span></a>
                    </li>
                    <li class="page-item active"><a class="page-link" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item">
                      <a class="page-link" href="#"><span aria-hidden="true">&raquo;</span></a>
                    </li>
                  </ul> -->
              </nav>
            </section>
          </li>
          <li class="campaign-box col rounded-md bg-white">
            <form action="">
              <h2 class="text-biz-red mb-8 text-center text-lg font-bold">
                캠페인 설정
              </h2>
              <ul class="mb-5">
                <li class="form-check form-check-inline items-center">
                  <input id="msg" class="form-check-input" type="radio" name="connectSetting" value="msg">
                  <label class="form-check-label" for="msg">문자</label>
                </li>
                <li class="form-check form-check-inline items-center">
                  <input id="email" class="form-check-input" type="radio" name="connectSetting" value="email">
                  <label class="form-check-label" for="email">이메일</label>
                </li>
                <li class="form-check form-check-inline items-center">
                  <input id="both" class="form-check-input" type="radio" name="connectSetting" value="both" checked>
                  <label class="form-check-label" for="both">문자&이메일</label>
                </li>
              </ul>
              <ul>
                <li class="basic-input-wrap mb-6">
                  <label for="userApi">메세지 유형 선택</label>
                  <div class="flex">
                    <select id="" class="basic-select" name="">
                      <option value="1">
                        자동응답
                      </option>
                      <option value="2">
                        자동응답2
                      </option>
                      <option value="3">
                        자동응답3
                      </option>
                    </select>
                  </div>
                </li>
                <li class="basic-input-wrap mb-4">
                  <label for="listId">서비스 명 입력</label>
                  <div class="flex">
                    <input id="listId" type="text" placeholder="메세지에 들어갈 서비스 명을 입력하세요.">
                  </div>
                </li>
                <li class="basic-input-wrap mb-4">
                  <label for="listId">URL 입력</label>
                  <div class="flex">
                    <input id="listId" type="text" placeholder="메세지에 들어갈 홈페이지 URL을 입력하세요.">
                  </div>
                </li>
                <li class="basic-input-wrap mb-12">
                  <label for="listId">메시지 API Key 입력</label>
                  <div class="flex">
                    <input id="listId" type="text" placeholder="메시지 발송 API Key를 입력해 주세요.">
                  </div>
                  <p class="error-msg text-right">
                    메세지는 API 연동으로 전송됩니다.
                  </p>
                </li>
              </ul>
              <div>
                <button class="bg-biz-red w-full rounded-md py-3 text-sm font-bold leading-none text-white">
                  메세지 전송
                </button>
              </div>
            </form>
          </li>
          <li class="campaign-box col rounded-md bg-white">
            <h2 class="text-biz-red mb-12 text-center text-lg font-bold">
              전송 문자 & 메일 샘플 미리보기
            </h2>
            <div class="sample-box border text-sm leading-normal">
              <span class="text-biz-blue">[이름]</span>님,<br>
              <span class="text-biz-blue">[서비스 명]</span>쿠폰 이벤트에 신청해 주셔서 감사합니다.<br>
              이용방법 및 기타 문의는 메세지 남겨 주시면 연락 드리겠습니다.<br>
              <br>
              ► 더 알아보기<br>
              <span class="text-biz-blue">[홈페이지 URL]</span><br>
              <br>
              감사합니다.<br>
            </div>
            <p class="mt-7 text-sm leading-normal text-[#777777]">
              ※ [ ]사이 내용은 캠페인 설정에 따라 자동으로 입력됩니다.<br>
              <br>
              ※ 지나치게 긴 내용이나 반복된 메세지는 스팸차단 될 수 있으므로, 300자 내외로 작성하는 것을 권장드립니다.
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
