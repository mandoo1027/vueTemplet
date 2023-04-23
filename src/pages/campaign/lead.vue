<template>
  <div class="lead-page bg-gray-f5">
    <section>
      <h2 class="mb-4 flex justify-between text-2xl font-bold">
        리드
        <a href="/campain/addLead" class="bg-biz-red ml-25 inline-block rounded-md px-6 py-3 text-sm font-bold leading-none text-white no-underline">리드추가</a>
      </h2>
      <div class="flex gap-8">
        <article class="overflow-hidden rounded-t-lg bg-white">
          <h3 class="blind">
            표
          </h3>
          <div class="table-responsive h-full flex flex-col justify-between pb-4">
            <table class="basic-table table-hover table-borderless table">
              <thead>
                <tr>
                  <th class="text-center" scope="col">
                    #
                  </th>
                  <th class="text-left" scope="col">
                    이메일
                  </th>
                  <th class="text-center" scope="col">
                    최종 수정일
                  </th>
                  <th class="text-center" scope="col">
                    설정
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th class="text-center" scope="row">
                    1
                  </th>
                  <td>jkhreel23@naver.com</td>
                  <td class="text-center">
                    2023-02-12 17:51
                  </td>
                  <td class="text-center">
                    <button type="button" class="setting" />
                  </td>
                </tr>
                <tr>
                  <th class="text-center" scope="row">
                    2
                  </th>
                  <td>ejslkdn@gmail.com</td>
                  <td class="text-center">
                    2023-02-12 17:51
                  </td>
                  <td class="text-center">
                    <button type="button" class="setting" />
                  </td>
                </tr>
                <tr>
                  <th class="text-center" scope="row">
                    3
                  </th>
                  <td>jkhreel23@naver.com</td>
                  <td class="text-center" />
                  <td class="text-center">
                    <button type="button" class="setting" />
                  </td>
                </tr>
              </tbody>
            </table>
            <nav aria-label="Page navigation mt-auto">
              <ul class="pagination justify-content-center gap-x-2">
                <li class="page-item active">
                  <a class="page-link" href="#">1</a>
                </li>
              </ul>
              <!-- <ul class="pagination justify-content-center  gap-x-2">
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
          </div>
        </article>
        <article class="user-detail-info bg-white">
          <h3 class="text-2xl font-bold">
            jkhreel23@naver.com
          </h3>
          <ul id="myTab" class="nav nav-tabs nav-pills nav-fill" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                id="profile-tab"
                class="nav-link active"
                data-bs-toggle="tab"
                data-bs-target="#profile"
                type="button"
                role="tab"
                aria-controls="profile"
                aria-selected="true"
              >
                프로필
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                id="activity-info-tab"
                class="nav-link"
                data-bs-toggle="tab"
                data-bs-target="#activity-info"
                type="button"
                role="tab"
                aria-controls="activity-info"
                aria-selected="false"
              >
                활동정보
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                id="list-tab"
                class="nav-link"
                data-bs-toggle="tab"
                data-bs-target="#list"
                type="button"
                role="tab"
                aria-controls="list"
                aria-selected="false"
              >
                리스트
              </button>
            </li>
          </ul>
          <div id="myTabContent" class="tab-content">
            <div id="profile" class="tab-pane show active" role="tabpanel" aria-labelledby="profile-tab">
              <dl class="flex items-center">
                <dt class="text-sm font-bold">
                  이름
                </dt>
                <dd class="text-sm">
                  김현민
                </dd>
              </dl>
              <dl class="flex items-center">
                <dt class="text-sm font-bold">
                  전화번호
                </dt>
                <dd class="text-sm">
                  010-5462-0848
                </dd>
              </dl>
              <dl class="flex items-center">
                <dt class="text-sm font-bold">
                  성별
                </dt>
                <dd class="text-sm">
                  남
                </dd>
              </dl>
              <dl class="flex items-center">
                <dt class="text-sm font-bold">
                  회사
                </dt>
                <dd class="text-sm">
                  아이에이엠파트너즈
                </dd>
              </dl>
              <dl class="flex items-center">
                <dt class="text-sm font-bold">
                  생년월일
                </dt>
                <dd class="text-sm">
                  1996-02-12
                </dd>
              </dl>
              <dl class="flex items-center">
                <dt class="text-sm font-bold">
                  우편번호
                </dt>
                <dd class="text-sm">
                  06954
                </dd>
              </dl>
              <dl class="flex items-center">
                <dt class="text-sm font-bold">
                  주소
                </dt>
                <dd class="text-sm">
                  서울시 동작구 대방동 114-4
                </dd>
              </dl>
              <dl class="flex items-center">
                <dt class="text-sm font-bold">
                  상세주소
                </dt>
                <dd class="text-sm" />
              </dl>
              <dl class="flex items-center">
                <dt class="text-sm font-bold">
                  리드점수
                </dt>
                <dd class="text-sm">
                  12
                </dd>
              </dl>
            </div>
            <div id="activity-info" class="tab-pane fade" role="tabpanel" aria-labelledby="activity-info-tab">
              활동정보
            </div>
            <div id="list" class="tab-pane fade" role="tabpanel" aria-labelledby="list-tab">
              리스트
            </div>
          </div>
        </article>
      </div>
    </section>
  </div>
</template>
