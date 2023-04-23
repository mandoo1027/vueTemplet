<template>
  <div class="bg-gray-f5 list-page">
    <div class="inner">
      <section>
        <h2 class="mb-4 flex justify-between text-2xl font-bold">
          리스트
          <a
            href="/compain/addList"
            class="bg-biz-red ml-25 inline-block rounded-md px-6 py-3 text-sm font-bold leading-none text-white no-underline"
          >리스트추가</a>
        </h2>
        <div class="table-wrap table-responsive mb-8 h-full flex flex-col justify-between bg-white">
          <table class="table-borderless basic-table table-hover table">
            <thead>
              <tr>
                <th class="text-center" scope="col">
                  #
                </th>
                <th class="text-center" scope="col">
                  리스트제목
                </th>
                <th class="text-center" scope="col">
                  리드
                </th>
                <th class="text-center" scope="col">
                  수정날짜
                </th>
                <th class="text-center" scope="col">
                  생성날짜
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
                <td class="text-center">
                  잠재고객
                </td>
                <td class="text-center">
                  351
                </td>
                <td class="text-center">
                  2023-02-12 17:51
                </td>
                <td class="text-center">
                  2023-01-12 11:21
                </td>
                <td class="text-center">
                  <button type="button" class="setting" />
                </td>
              </tr>
              <tr>
                <th class="text-center" scope="row">
                  2
                </th>
                <td class="text-center">
                  신규고객
                </td>
                <td class="text-center">
                  1,432
                </td>
                <td class="text-center">
                  2023-02-12 17:51
                </td>
                <td class="text-center">
                  2023-01-12 11:21
                </td>
                <td class="text-center">
                  <button type="button" class="setting" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <nav aria-label="Page navigation">
          <ul class="justify-content-center pagination gap-x-2">
            <li class="active page-item">
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
    </div>
  </div>
</template>
