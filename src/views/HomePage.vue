<template>
  <!-- Header -->
  <nav class="header_bar navbar navbar-expand navbar-light bg-light">
    <!-- 廣播 -->
    <div class="marquee_style d-flex align-items-center justify-content-center">
      <div class="borderStyle">
        <Vue3Marquee
          :duration="12"
          :gradient="true"
          :gradient-color="[70, 117, 135, 0.8]"
          gradient-length="10%"
        >
          <span
            class="text-white my-3 marquee-item"
            v-for="(item, index) in translate_News"
            :key="index"
          >
            {{ item.memberID }}
          </span>
        </Vue3Marquee>
      </div>
    </div>

    <!-- 4個連結圖標 -->
    <div class="d-flex align-items-center msg_style">
      <ul class="navbar-nav fbLink">
        <li class="nav-item_fb">
          <a class="nav-link" href="https://www.facebook.com" target="_blank">
            <img
              src="../assets/img/logo/png-FB.png"
              class="fbLogo"
              alt="https://www.facebook.com"
            />
          </a>
        </li>
        <li class="nav-item_fb">
          <a class="nav-link" href="https://www.youtube.com" target="_blank">
            <img src="../assets/img/logo/youTube.png.png" class="youTubeLogo" alt="" />
          </a>
        </li>
        <li class="nav-item_fb">
          <a class="nav-link" href="https://www.twitter.com" target="_blank">
            <img src="../assets/img/logo/twitter.png" class="youTubeLogo" alt="" />
          </a>
        </li>
        <li class="nav-item_fb">
          <a class="nav-link" href="mailto:example@example.com">
            <img src="../assets/img/logo//mail.png" class="fbLogo" alt="" />
          </a>
        </li>
      </ul>
    </div>
  </nav>
  <!-- logo -->
  <img class="logo_style" src="../assets/img/logo/logo.png" alt="" />
  <!-- 服務項目bar -->

  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container d-flex justify-content-between align-items-center">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav d-flex justify-content-center mx-xl-5 text-center text-dark">
          <li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
            <a class="nav-link" href="#">首頁</a>
          </li>
          <li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
            <a
              class="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              href="#"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
              >最新公告<i class="ms-1 fa-solid fa-caret-down"></i
            ></a>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="#">▸活動公告◂</a>
              <a class="dropdown-item" href="#">▸外掛影片展示◂</a>
            </div>
          </li>
          <li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
            <a
              class="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              href="#"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
              >自動發卡購買[24H]<i class="ms-1 fa-solid fa-caret-down"></i
            ></a>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="#">▸自動發卡購買◂</a>
              <a class="dropdown-item" href="#">▸自動發卡購買流程◂</a>
              <a class="dropdown-item" href="#">▸常見問題Q&A◂</a>
              <a class="dropdown-item" href="#">▸訂製開發腳本外掛流程◂</a>
              <a class="dropdown-item" href="#">▸隱私權政策◂</a>
              <a class="dropdown-item" href="#">▸服務條款◂</a>
            </div>
          </li>
          <li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
            <a
              class="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              href="#"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
              >線上遊戲輔助<i class="ms-1 fa-solid fa-caret-down"></i
            ></a>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <a class="dropdown-item" href="#">Something else here</a>
              <a class="dropdown-item" href="#">Another action</a>
            </div>
          </li>
          <li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
            <a class="nav-link" href="#">聯絡方式</a>
          </li>
          <li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
            <a class="nav-link" href="#">下載中心</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <!-- Close Header -->

  <!-- 外掛影片展示 -->
  <SlideItem></SlideItem>

  <!-- Start Service -->
  <div class="d-flex justify-content-center align-items-center mt-4 mb-5">
    <svg
      version="1.1"
      id="L6"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      width="100px"
      height="100px"
      viewBox="0 0 100 100"
      enable-background="new 0 0 100 100"
      xml:space="preserve"
    >
      <rect
        fill="#fff"
        stroke="rgb(70, 117, 135)"
        stroke-width="4"
        x="25"
        y="25"
        width="50"
        height="50"
      >
        <animateTransform
          attributeName="transform"
          dur="0.5s"
          from="0 50 50"
          to="180 50 50"
          type="rotate"
          id="strokeBox"
          attributeType="XML"
          begin="rectBox.end"
        />
      </rect>
      <rect x="27" y="27" fill="rgb(70, 117, 135)" width="46" height="50">
        <animate
          attributeName="height"
          dur="1.3s"
          attributeType="XML"
          from="50"
          to="0"
          id="rectBox"
          fill="freeze"
          begin="0s;strokeBox.end"
        />
      </rect>
    </svg>
    <h3>ROSA技術開發團隊</h3>
  </div>
  <section class="service-wrapper py-3">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-12 col-sm-4">
          <div class="d-flex">
            <i class="fs-2 fa-solid fa-desktop me-4"></i>
            <div>
              <h4 class="fw-bold">手游端游技術開發</h4>
              <p style="line-height: 2">
                ROSA外掛團隊為工作室與玩家提供精選質素最高的腳本外掛，讓人工智能為你提升帳號實力，使征服遊戲世界變得如此簡單省力
              </p>
            </div>
          </div>
        </div>
        <div class="col-12 col-sm-4">
          <div class="d-flex">
            <i class="fs-2 fa-solid fa-bolt me-4"></i>
            <div>
              <h4 class="fw-bold">手游端游技術開發</h4>
              <p style="line-height: 2">
                ROSA保利外掛團隊提供台港澳在地推廣與全球海外項目推廣與作者、技術開發團隊承接任何項目代理銷售服務，自主開發皆有
              </p>
            </div>
          </div>
        </div>
        <div class="col-12 col-sm-4">
          <div class="d-flex">
            <i class="fs-2 fa-brands fa-servicestack me-4"></i>
            <div>
              <h4 class="fw-bold">手游端游技術開發</h4>
              <p style="line-height: 2">
                ROSA開發團隊與客服7x20H(不含假日提供服務)，我們都以最真誠的態度去服務，同步更新、高校無比
                節省手機資源、您使用放心，我們努力用心
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="service-tag py-5 bg-secondary">
      <div class="col-md-12">
        <ul class="nav d-flex justify-content-center">
          <li class="nav-link mx-lg-4">
            <a
              class="filter-btn nav-link-service btn-outline-primary rounded-pill text-light px-4 light-300"
              href="#"
              data-filter=".project"
              >服務項目</a
            >
          </li>
          <li class="nav-link mx-lg-4">
            <a
              class="filter-btn nav-link-service btn-outline-primary rounded-pill text-light px-4 light-300"
              href="#"
              data-filter=".graphic"
              >保利技術開發團隊</a
            >
          </li>
          <li class="filter-btn nav-link mx-lg-4">
            <a
              class="filter-btn nav-link-service btn-outline-primary rounded-pill text-light px-4 light-300"
              href="#"
              data-filter=".ui"
              >招募遊戲測試員</a
            >
          </li>
          <li class="nav-link mx-lg-4">
            <a
              class="filter-btn nav-link-service btn-outline-primary rounded-pill text-light px-4 light-300"
              href="#"
              data-filter=".branding"
              >招募工作室合作</a
            >
          </li>
        </ul>
      </div>
    </div>
  </section>

  <section class="container overflow-hidden py-5">
    <div class="row gx-5 gx-sm-3 gx-lg-5 gy-lg-5 gy-3 pb-3 projects">
      <!-- Start Recent Work -->
      <div class="col-xl-3 col-md-4 col-sm-6 project ui branding">
        <a
          href="#"
          class="service-work card border-0 text-white shadow-sm overflow-hidden mx-5 m-sm-0"
        >
          <img class="service card-img" src="../assets/img/Albion/al1.jpg" alt="Card image" />
          <div class="service-work-vertical card-img-overlay d-flex align-items-end">
            <div class="service-work-content text-left text-light">
              <span class="btn btn-outline-light rounded-pill mb-lg-3 px-lg-4 light-300"
                >立即購買</span
              >
              <p class="card-text">阿爾比恩 Albion◈全自動輔助﹝0709更新版本﹞</p>
            </div>
          </div>
        </a>
      </div>
      <!-- End Recent Work -->

      <!-- Start Recent Work -->
      <div class="col-xl-3 col-md-4 col-sm-6 project ui graphic">
        <a
          href="#"
          class="service-work card border-0 text-white shadow-sm overflow-hidden mx-5 m-sm-0"
        >
          <img class="card-img" src="../assets/img/Albion/al6.jpeg" alt="Card image" />
          <div class="service-work-vertical card-img-overlay d-flex align-items-end">
            <div class="service-work-content text-left text-light">
              <span class="btn btn-outline-light rounded-pill mb-lg-3 px-lg-4 light-300"
                >立即購買</span
              >
              <p class="card-text">阿爾比恩 Albion◈全自動輔助﹝0707更新版本﹞</p>
            </div>
          </div>
        </a>
      </div>
      <!-- End Recent Work -->

      <!-- Start Recent Work -->
      <div class="col-xl-3 col-md-4 col-sm-6 project branding">
        <a
          href="#"
          class="service-work card border-0 text-white shadow-sm overflow-hidden mx-5 m-sm-0"
        >
          <img class="card-img" src="../assets/img/Albion/al3.jpg" alt="Card image" />
          <div class="service-work-vertical card-img-overlay d-flex align-items-end">
            <div class="service-work-content text-left text-light">
              <span class="btn btn-outline-light rounded-pill mb-lg-3 px-lg-4 light-300"
                >立即購買</span
              >
              <p class="card-text">阿爾比恩 Albion◈全自動輔助﹝0709更新版本﹞</p>
            </div>
          </div>
        </a>
      </div>
      <!-- End Recent Work -->

      <!-- Start Recent Work -->
      <div class="col-xl-3 col-md-4 col-sm-6 project ui graphic">
        <a
          href="#"
          class="service-work card border-0 text-white shadow-sm overflow-hidden mx-5 m-sm-0"
        >
          <img class="card-img" src="../assets/img/Albion/al4.jpeg" alt="Card image" />
          <div class="service-work-vertical card-img-overlay d-flex align-items-end">
            <div class="service-work-content text-left text-light">
              <span class="btn btn-outline-light rounded-pill mb-lg-3 px-lg-4 light-300"
                >立即購買</span
              >
              <p class="card-text">阿爾比恩 Albion◈全自動輔助﹝0709更新版本﹞</p>
            </div>
          </div>
        </a>
      </div>
      <!-- End Recent Work -->

      <!-- Start Recent Work -->
      <div class="col-xl-3 col-md-4 col-sm-6 project ui graphic">
        <a
          href="#"
          class="service-work card border-0 text-white shadow-sm overflow-hidden mx-5 m-sm-0"
        >
          <img class="card-img" src="../assets/img/Albion/al14.jpeg" alt="Card image" />
          <div class="service-work-vertical card-img-overlay d-flex align-items-end">
            <div class="service-work-content text-left text-light">
              <span class="btn btn-outline-light rounded-pill mb-lg-3 px-lg-4 light-300"
                >立即購買</span
              >
              <p class="card-text">阿爾比恩 Albion◈全自動輔助﹝0709更新版本﹞</p>
            </div>
          </div>
        </a>
      </div>
      <!-- End Recent Work -->

      <!-- Start Recent Work -->
      <div class="col-xl-3 col-md-4 col-sm-6 project branding">
        <a
          href="#"
          class="service-work card border-0 text-white shadow-sm overflow-hidden mx-5 m-sm-0"
        >
          <img class="card-img" src="../assets/img/Albion/al7.jpeg" alt="Card image" />
          <div class="service-work-vertical card-img-overlay d-flex align-items-end">
            <div class="service-work-content text-left text-light">
              <span class="btn btn-outline-light rounded-pill mb-lg-3 px-lg-4 light-300"
                >立即購買</span
              >
              <p class="card-text">阿爾比恩 Albion◈全自動輔助﹝0709更新版本﹞</p>
            </div>
          </div>
        </a>
      </div>
      <!-- End Recent Work -->

      <!-- Start Recent Work -->
      <div class="col-xl-3 col-md-4 col-sm-6 project branding">
        <a
          href="#"
          class="service-work card border-0 text-white shadow-sm overflow-hidden mx-5 m-sm-0"
        >
          <img class="card-img" src="../assets/img/Albion/al8.jpeg" alt="Card image" />
          <div class="service-work-vertical card-img-overlay d-flex align-items-end">
            <div class="service-work-content text-left text-light">
              <span class="btn btn-outline-light rounded-pill mb-lg-3 px-lg-4 light-300"
                >立即購買</span
              >
              <p class="card-text">阿爾比恩 Albion◈全自動輔助﹝0709更新版本﹞</p>
            </div>
          </div>
        </a>
      </div>
      <!-- End Recent Work -->

      <!-- Start Recent Work -->
      <div class="col-xl-3 col-md-4 col-sm-6 project ui graphic branding">
        <a
          href="#"
          class="service-work card border-0 text-white shadow-sm overflow-hidden mx-5 m-sm-0"
        >
          <img class="card-img" src="../assets/img/Albion/al10.jpeg" alt="Card image" />
          <div class="service-work-vertical card-img-overlay d-flex align-items-end">
            <div class="service-work-content text-left text-light">
              <span class="btn btn-outline-light rounded-pill mb-lg-3 px-lg-4 light-300"
                >立即購買</span
              >
              <p class="card-text">阿爾比恩 Albion◈全自動輔助﹝0709更新版本﹞</p>
            </div>
          </div>
        </a>
      </div>
      <!-- End Recent Work -->
    </div>
  </section>
  <!-- End Service -->

  <!-- Start View Work -->
  <section class="bg-secondary">
    <div class="container py-5">
      <div class="row d-flex justify-content-center text-center">
        <div class="col-lg-2 col-12 text-light align-items-center">
          <i class="display-1 bx bxs-box bx-lg"></i>
        </div>
        <div class="col-lg-7 col-12 text-light pt-2">
          <h3 class="h4 light-300">ROSA技術開發團隊</h3>
          <p class="light-300">端游開發、手游開發、網遊開發、FPS射擊遊戲開發、冷門項目</p>
        </div>
        <div class="col-lg-3 col-12 pt-4">
          <a href="#" class="btn btn-primary rounded-pill btn-block shadow px-4 py-2">瀏覽商品</a>
        </div>
      </div>
    </div>
  </section>
  <!-- End View Work -->

  <!-- Start Recent Work -->
  <section class="py-5 mb-5">
    <div class="container">
      <div class="recent-work-header row text-center pb-5">
        <h2 class="col-md-6 m-auto h2 semi-bold-600 py-5">近期開發新項目</h2>
      </div>
      <div class="row gy-5 g-lg-5 mb-4">
        <!-- Start Recent Work -->
        <div class="col-md-4 mb-3">
          <a href="#" class="recent-work card border-0 shadow-lg overflow-hidden">
            <img class="recent-work-img" src="../assets/img/Albion/al15.jpeg" alt="Card image" />
            <div class="recent-work-vertical card-img-overlay d-flex align-items-end">
              <div class="recent-work-content text-start mb-3 ml-3 text-dark">
                <h3 class="card-title light-300">阿爾比恩 Albion◈</h3>
                <p class="card-text">全自動釣魚外掛</p>
              </div>
            </div>
          </a>
        </div>
        <!-- End Recent Work -->

        <!-- Start Recent Work -->
        <div class="col-md-4 mb-3">
          <a href="#" class="recent-work card border-0 shadow-lg overflow-hidden">
            <img class="recent-work-img" src="../assets/img/Albion/al16.jpeg" alt="Card image" />
            <div class="recent-work-vertical card-img-overlay d-flex align-items-end">
              <div class="recent-work-content text-start mb-3 ml-3 text-dark">
                <h3 class="card-title light-300">阿爾比恩 Albion◈</h3>
                <p class="card-text">全自動釣魚外掛</p>
              </div>
            </div>
          </a>
        </div>
        <!-- End Recent Work -->

        <!-- Start Recent Work -->
        <div class="col-md-4 mb-3">
          <a href="#" class="recent-work card border-0 shadow-lg overflow-hidden">
            <img class="recent-work-img" src="../assets/img/Albion/al17.jpeg" alt="Card image" />
            <div class="recent-work-vertical card-img-overlay d-flex align-items-end">
              <div class="recent-work-content text-start mb-3 ml-3 text-dark">
                <h3 class="card-title light-300">阿爾比恩 Albion◈</h3>
                <p class="card-text">全自動釣魚外掛</p>
              </div>
            </div>
          </a>
        </div>
        <!-- End Recent Work -->

        <!-- Start Recent Work -->
        <div class="col-md-4 mb-3">
          <a href="#" class="recent-work card border-0 shadow-lg overflow-hidden">
            <img class="recent-work-img" src="../assets/img/Albion/al18.jpeg" alt="Card image" />
            <div class="recent-work-vertical card-img-overlay d-flex align-items-end">
              <div class="recent-work-content text-start mb-3 ml-3 text-dark">
                <h3 class="card-title light-300">阿爾比恩 Albion◈</h3>
                <p class="card-text">全自動釣魚外掛</p>
              </div>
            </div>
          </a>
        </div>
        <!-- End Recent Work -->

        <!-- Start Recent Work -->
        <div class="col-md-4 mb-3">
          <a href="#" class="recent-work card border-0 shadow-lg overflow-hidden">
            <img class="recent-work-img" src="../assets/img/Albion/al19.jpeg" alt="Card image" />
            <div class="recent-work-vertical card-img-overlay d-flex align-items-end">
              <div class="recent-work-content text-start mb-3 ml-3 text-dark">
                <h3 class="card-title light-300">阿爾比恩 Albion◈</h3>
                <p class="card-text">全自動釣魚外掛</p>
              </div>
            </div>
          </a>
        </div>
        <!-- End Recent Work -->

        <!-- Start Recent Work -->
        <div class="col-md-4 mb-3">
          <a href="#" class="recent-work card border-0 shadow-lg overflow-hidden">
            <img class="recent-work-img" src="../assets/img/Albion/al20.jpeg" alt="Card image" />
            <div class="recent-work-vertical card-img-overlay d-flex align-items-end">
              <div class="recent-work-content text-start mb-3 ml-3 text-dark">
                <h3 class="card-title light-300">阿爾比恩 Albion◈</h3>
                <p class="card-text">全自動釣魚外掛</p>
              </div>
            </div>
          </a>
        </div>
        <!-- End Recent Work -->
      </div>
    </div>
  </section>
  <!-- End Recent Work -->

  <!-- Start Footer -->
  <footer class="bg-secondary pt-4">
    <div class="container">
      <div class="row py-4">
        <div class="col-lg-3 col-12 align-left">
          <a class="navbar-brand" href="index.html">
            <i class="bx bx-buildings bx-sm text-light"></i>
            <span class="text-light h5">ＲＯＳＡ</span>
          </a>
          <p class="text-light my-lg-4 my-2">遊戲工作室建置規劃、裸架規劃、電腦組裝</p>
          <p class="text-light my-lg-4 my-2">工作室外掛開發訂製項目、外掛承接推廣、流量推廣</p>
          <ul class="list-inline footer-icons light-300">
            <li class="list-inline-item m-0">
              <a class="text-light" target="_blank" href="http://facebook.com/">
                <i class="bx bxl-facebook-square bx-md"></i>
              </a>
            </li>
            <li class="list-inline-item m-0">
              <a class="text-light" target="_blank" href="https://www.linkedin.com/">
                <i class="bx bxl-linkedin-square bx-md"></i>
              </a>
            </li>
            <li class="list-inline-item m-0">
              <a class="text-light" target="_blank" href="https://www.whatsapp.com/">
                <i class="bx bxl-whatsapp-square bx-md"></i>
              </a>
            </li>
            <li class="list-inline-item m-0">
              <a class="text-light" target="_blank" href="https://www.flickr.com/">
                <i class="bx bxl-flickr-square bx-md"></i>
              </a>
            </li>
            <li class="list-inline-item m-0">
              <a class="text-light" target="_blank" href="https://www.medium.com/">
                <i class="bx bxl-medium-square bx-md"></i>
              </a>
            </li>
          </ul>
        </div>

        <div class="col-lg-3 col-md-4 my-sm-0 mt-4">
          <h3 class="h4 pb-lg-3 text-light light-300">我們的團隊</h3>
          <ul class="list-unstyled text-light light-300">
            <li class="pb-2">
              <i class="bx-fw bx bxs-chevron-right bx-xs"></i
              ><a class="text-decoration-none text-light" href="index.html">首頁</a>
            </li>
            <li class="pb-2">
              <i class="bx-fw bx bxs-chevron-right bx-xs"></i
              ><a class="text-decoration-none text-light py-1" href="about.html">關於我們</a>
            </li>
            <li class="pb-2">
              <i class="bx-fw bx bxs-chevron-right bx-xs"></i
              ><a class="text-decoration-none text-light py-1" href="work.html">工作</a>
            </li>
            <li class="pb-2">
              <i class="bx-fw bx bxs-chevron-right bx-xs"></i
              ><a class="text-decoration-none text-light py-1" href="pricing.html">價格</a>
            </li>
            <li class="pb-2">
              <i class="bx-fw bx bxs-chevron-right bx-xs"></i
              ><a class="text-decoration-none text-light py-1" href="contact.html">聯絡我們</a>
            </li>
          </ul>
        </div>

        <div class="col-lg-3 col-md-4 my-sm-0 mt-4">
          <h2 class="h4 pb-lg-3 text-light light-300">商品</h2>
          <ul class="list-unstyled text-light light-300">
            <li class="pb-2">
              <i class="bx-fw bx bxs-chevron-right bx-xs"></i
              ><a class="text-decoration-none text-light py-1" href="#">品牌</a>
            </li>
            <li class="pb-2">
              <i class="bx-fw bx bxs-chevron-right bx-xs"></i
              ><a class="text-decoration-none text-light py-1" href="#">商業</a>
            </li>
            <li class="pb-2">
              <i class="bx-fw bx bxs-chevron-right bx-xs"></i
              ><a class="text-decoration-none text-light py-1" href="#">市場</a>
            </li>
            <li class="pb-2">
              <i class="bx-fw bx bxs-chevron-right bx-xs"></i
              ><a class="text-decoration-none text-light py-1" href="#">社群</a>
            </li>
            <li class="pb-2">
              <i class="bx-fw bx bxs-chevron-right bx-xs"></i
              ><a class="text-decoration-none text-light py-1" href="#">數位</a>
            </li>
            <li class="pb-2">
              <i class="bx-fw bx bxs-chevron-right bx-xs"></i
              ><a class="text-decoration-none text-light py-1" href="#">設計</a>
            </li>
          </ul>
        </div>

        <div class="col-lg-3 col-md-4 my-sm-0 mt-4">
          <h2 class="h4 pb-lg-3 text-light light-300">客戶端</h2>
          <ul class="list-unstyled text-light light-300">
            <li class="pb-2">
              <i class="bx-fw bx bx-phone bx-xs"></i
              ><a class="text-decoration-none text-light py-1" href="tel:010-020-0340"
                >010-020-0340</a
              >
            </li>
            <li class="pb-2">
              <i class="bx-fw bx bx-mail-send bx-xs"></i
              ><a class="text-decoration-none text-light py-1" href="mailto:info@company.com"
                >info@company.com</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="w-100 bg-primary py-3">
      <div class="container">
        <div class="row pt-2">
          <div class="col-lg-6 col-sm-12">
            <p class="text-lg-start text-center text-light light-300">
              版權 2024 © ROSA技術開發團隊. All Rights Reserved.
            </p>
          </div>
          <div class="col-lg-6 col-sm-12">
            <p class="text-lg-end text-center text-light light-300">
              Designed by
              <a
                rel="sponsored"
                class="text-decoration-none text-light"
                href="https://templatemo.com/"
                target="_blank"
                ><strong>ROSA Studio</strong></a
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <!-- End Footer -->
</template>

<script>
import { useColorMode } from '@vueuse/core'
import SlideItem from '../components/CarouselComponent.vue'

export default {
  components: {
    SlideItem
  },
  data() {
    return {
      colorMode: useColorMode().value,
      // 最新消息列表(測試用)
      translate_News: [
        {
          memberID:
            '近期詐騙猖獗，仿造本網站"ROSA"請勿受騙上當，請認準本網站網址https://www.xxx.com/，任何問題請諮詢客服人員',
          money: 1000
        }
        // { memberID: '13579', money: 2000 },
        // { memberID: '24688', money: 3000 }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.header_bar {
  background-color: rgb(70, 117, 135) !important;
  display: flex;
  justify-content: center;
  width: 100%;
}
// 廣播
.marquee_style {
  // flex: 1;
  // display: flex;
  // text-align: center;
  margin-right: 100px;
  & .borderStyle {
    max-width: 100%;
    width: 650px;
  }
  // 廣播字體
  & .marquee-item {
    margin-right: 10px;
    font-size: 14px;
  }
}
// 猴子logo
.logo_style {
  width: 300px;
  height: 200px;
  object-fit: cover; /* 图片覆盖容器 */
}
// FB logo
.fbLink {
  // 社群icon間距
  .nav-item_fb {
    margin: 0 10px; /* 添加左右間距 */
  }
  & .fbLogo {
    width: 40px;
  }
  & .youTubeLogo {
    width: 42px;
  }
}
// 服務項目 ul
.navbar-expand-lg .navbar-collapse {
  justify-content: center;
}
.nav-link {
  color: #212121 !important;
  font-weight: 500;
  transition: all 200ms linear;
  position: relative;
  padding: 5px 0 !important;
  display: inline-block;
}

.nav-item:hover .nav-link {
  color: #8167a9 !important;
}

.nav-item.active .nav-link {
  color: #777 !important;
}
// 項目間距
.nav-item {
  margin: 0 30px; /* 添加左右間距 */
  position: relative;
  transition: all 200ms linear;
}

.nav-item:after {
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 100%;
  height: 2px;
  content: '';
  color: #212121;
  background-color: #8167a9;
  opacity: 0;
  transition: all 200ms linear;
}

.nav-item:hover:after {
  bottom: 0;
  opacity: 1;
}

.nav-item.active:hover:after {
  opacity: 0;
}

.nav-item .dropdown-menu {
  display: none;
}

/* 當父元素被懸停時，顯示下拉選單 */
.nav-item:hover .dropdown-menu {
  display: block;
  position: absolute;
  float: none;
  min-width: 10rem;
  margin-top: 0;
}

.dropdown-menu {
  padding: 10px !important;
  margin: 0;
  font-size: 13px;
  letter-spacing: 1px;
  color: #212121;
  background-color: #fcfaff;
  border: none;
  border-radius: 3px;
  box-shadow: 0 5px 10px 0 rgba(138, 155, 165, 0.15);
  transition: all 200ms linear;
}

.dropdown-toggle::after {
  display: none;
}

.dropdown-item {
  padding: 3px 15px;
  color: #212121;
  border-radius: 2px;
  transition: all 200ms linear;
}

.dropdown-item:hover,
.dropdown-item:focus {
  color: #fff;
  background-color: rgba(129, 103, 169, 0.6);
}
.nav-link-service {
  color: #fffefe !important;
  padding: 10px 25px !important;
  font-weight: 500;
  transition: all 200ms linear;
  position: relative;
  display: inline-block;
  text-decoration: none;
}
// card-img
.card-img {
  width: 300px;
  height: 200px;
  object-fit: cover; /* 图片覆盖容器 */
}

@media (max-width: 800px) {
  .marquee_style {
    margin-right: 0px;
  }
  .borderStyle {
    display: none;
  }
}
</style>
