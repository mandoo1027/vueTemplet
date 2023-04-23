<template>
  <div class="bg-biz-light-red dashboard-page flex">
    <nav class="dashboard-nav w-[380px] bg-[#543438] py-10">
      <ul class="ml-auto w-[263px]">
        <li>
          <p class="mb-2.5 flex items-center pl-10">
            <span class="chart-icon h-[27px] w-[27px] shrink-0" />
            <span class="ml-[17px] text-base text-white">통계</span>
          </p>
          <ul id="myTab" class="nav nav-tabs flex-col border-0" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                id="all-chart-tab"
                class="nav-link active w-full flex items-center border-0 text-left text-sm text-white"
                data-bs-toggle="tab"
                data-bs-target="#all-chart"
                type="button"
                role="tab"
                aria-controls="all-chart"
                aria-selected="true"
              >
                전체 통계
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                id="daily-reprot-tab"
                class="nav-link w-full flex items-center border-0 text-left text-sm text-white"
                data-bs-toggle="tab"
                data-bs-target="#daily-reprot"
                type="button"
                role="tab"
                aria-controls="daily-reprot"
                aria-selected="false"
              >
                Daily Report
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                id="list-tab"
                class="nav-link w-full flex items-center border-0 text-left text-sm text-white"
                data-bs-toggle="tab"
                data-bs-target="#compare"
                type="button"
                role="tab"
                aria-controls="compare"
                aria-selected="false"
              >
                캠페인 성과 비교하기
              </button>
            </li>
          </ul>
        </li>
        <li class="mt-4">
          <button class="flex items-center pl-10">
            <span class="excel-icon h-[36px] w-[36px] shrink-0" />
            <span class="ml-[17px] text-base text-white">엑셀 다운로드</span>
          </button>
        </li>
        <li class="mt-9">
          <div class="mr-[17px] border-2 border-[#F14A4A] rounded-md bg-white py-2">
            <ul class="flex justify-center gap-[29px]">
              <li class="flex flex-col items-center">
                <p class="text-sm leading-[1.87]">
                  520 명
                </p>
                <div class="bar-chart">
                  <span class="bar-chart-value" style="height: 20px" />
                </div>
                <label for="lead" class="mt-[7px] text-sm leading-[1.87]">LEAD</label>
              </li>
              <li class="flex flex-col items-center">
                <p class="text-sm leading-[1.87]">
                  2800 회
                </p>
                <div class="bar-chart">
                  <span class="bar-chart-value" style="height: 80px" />
                </div>
                <label for="advertising" class="mt-[7px] text-sm leading-[1.87]">광고노출</label>
              </li>
            </ul>
            <p class="mt-px text-center text-sm font-bold leading-[1.87] text-[#E91C36]">
              SPECIAL PLAN
            </p>
          </div>
        </li>
      </ul>
    </nav>
    <!-- CONTENT -->
    <div id="myTabContent" class="tab-content flex-1">
      <!-- 1. 전체 통계 -->
      <div id="all-chart" class="tab-pane show active" role="tabpanel" aria-labelledby="all-chart-tab">
        <div class="inner">
          <select id="" class="basic-select border-[#AA2024]" name="">
            <option value="1">
              캠페인 이름 노출되는 곳
            </option>
            <option value="2">
              캠페인 이름 노출되는 곳2
            </option>
            <option value="3">
              캠페인 이름 노출되는 곳3
            </option>
            <option value="4">
              캠페인 이름 노출되는 곳4
            </option>
          </select>
          <ul class="row campaign-visit-click-graph mb-[23px] mt-[29px]">
            <li class="col-7 px-2">
              <div class="mb-[11px] flex justify-between">
                <p class="text-base font-bold">
                  캠페인 방문, 클릭 수 추이
                </p>
                <ul id="myTab" class="nav nav-tabs nav-pills nav-fill" role="tablist">
                  <li class="nav-item" role="presentation">
                    <button
                      id="clickValue-tab"
                      class="nav-link"
                      data-bs-toggle="tab"
                      data-bs-target="#clickValue"
                      type="button"
                      role="tab"
                      aria-controls="clickValue"
                      aria-selected="false"
                    >
                      클릭 수 보기
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      id="visitsValue-tab"
                      class="nav-link active"
                      data-bs-toggle="tab"
                      data-bs-target="#visitsValue"
                      type="button"
                      role="tab"
                      aria-controls="visitsValue"
                      aria-selected="true"
                    >
                      방문 수 보기
                    </button>
                  </li>
                </ul>
              </div>
              <div id="Graph" class="tab-content h-[376px] rounded-lg bg-white p-4">
                <div id="clickValue" class="tab-pane fade h-full" ro le="tabpanel" aria-labelledby="clickValue-tab">
                  <div class="h-full w-full flex">
                    <canvas id="" class="mt-auto" />
                  </div>
                </div>
                <div id="visitsValue" class="tab-pane show active h-full" role="tabpanel" aria-labelledby="visitsValue-tab">
                  <div class="h-full w-full flex">
                    <canvas id="CampaignLineGraph" class="mt-auto" />
                  </div>
                </div>
              </div>
            </li>
            <li class="col-5 px-2">
              <div class="mt-[40px] w-full rounded-lg bg-white p-4">
                <div id="calendar" />
              </div>
            </li>
          </ul>
          <ul class="row pt-[23px]">
            <li class="col-3 px-2">
              <p class="mb-[11px] text-base font-bold">
                누적 캠페인 방문 수
              </p>
              <div class="red-gradient h-[105px] flex items-center rounded-md px-[23px]">
                <p class="flex flex-col">
                  <b class="text-lg font-bold text-white">321명</b>
                  <span class="mt-[2px] text-base text-white">전체 80.2%</span>
                </p>
              </div>
            </li>
            <li class="col-3 px-2">
              <p class="mb-[11px] text-base font-bold">
                누적 버튼 클릭 수
              </p>
              <div class="red-gradient h-[105px] flex items-center rounded-md px-[23px]">
                <p class="flex flex-col">
                  <b class="text-lg font-bold text-white">159명</b>
                  <span class="mt-[2px] text-base text-white">전체 52.2%</span>
                </p>
              </div>
            </li>
            <li class="col-3 px-2">
              <p class="mb-[11px] text-base font-bold">
                캠페인 평균 체류 시간
              </p>
              <div class="red-gradient h-[105px] flex items-center rounded-md px-[23px]">
                <p>
                  <b class="text-lg font-bold text-white">3분</b>
                </p>
              </div>
            </li>
            <li class="col-3 px-2">
              <p class="mb-[11px] text-base font-bold">
                평균 PV(Page View)
              </p>
              <div class="red-gradient h-[105px] flex items-center rounded-md px-[23px]">
                <p>
                  <b class="text-lg font-bold text-white">15페이지</b>
                </p>
              </div>
            </li>
          </ul>
          <ul class="row mt-[26px]">
            <li class="col-6 py-2">
              <p class="mb-[11px] text-base font-bold">
                이탈률 추이
              </p>
              <div class="w-full rounded-lg bg-white p-4">
                <canvas id="DeviationRateTrendLine" />
              </div>
            </li>
            <li class="col-6 py-2">
              <p class="mb-[11px] text-base font-bold">
                캠페인 체류시간 추이
              </p>
              <div class="w-full rounded-lg bg-white p-4">
                <canvas id="TimeOfStayLine" />
              </div>
            </li>
          </ul>
          <ul class="row mt-[26px]">
            <li class="col-6 py-2">
              <p class="mb-[11px] text-base font-bold">
                유입 경로
              </p>
              <div class="w-full flex rounded-lg bg-white p-4">
                <div class="relative w-[125px]">
                  <p class="doughnut-value">
                    100%
                  </p>
                  <canvas id="VisitRoute" />
                </div>
                <ul class="ml-[26px] flex flex-1 flex-col justify-center gap-2">
                  <li class="flex items-center justify-between">
                    <p class="flex items-center">
                      <span class="mr-[13px] h-[8px] w-[8px] shrink-0 rounded-[50%] bg-[#AA2024]" />
                      <span class="text-sm">문자</span>
                    </p>
                    <span class="text-sm font-bold">60%</span>
                  </li>
                  <li class="flex items-center justify-between">
                    <p class="flex items-center">
                      <span class="mr-[13px] h-[8px] w-[8px] shrink-0 rounded-[50%] bg-[#4250D8]" />
                      <span class="text-sm">이메일</span>
                    </p>
                    <span class="text-sm font-bold">30%</span>
                  </li>
                  <li class="flex items-center justify-between">
                    <p class="flex items-center">
                      <span class="mr-[13px] h-[8px] w-[8px] shrink-0 rounded-[50%] bg-[#D9D9D9]" />
                      <span class="text-sm">기타</span>
                    </p>
                    <span class="text-sm font-bold">10%</span>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <!-- 2. Daily Report -->
      <div id="daily-reprot" class="tab-pane fade" role="tabpanel" aria-labelledby="daily-reprot-tab">
        Daily Report
      </div>
      <!-- 3. 캠페인 성과 비교 -->
      <div id="compare" class="tab-pane fade" role="tabpanel" aria-labelledby="compare-tab">
        캠페인 성과 비교하기
      </div>
    </div>
  </div>
</template>
