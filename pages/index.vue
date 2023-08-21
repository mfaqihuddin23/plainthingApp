<script setup lang="ts">
const { data } = await useFetch('/api/users.post')
</script>


<template>
  <NuxtLayout name="default">
    <section class="bg-zinc-200">
      <div class="flex gap-[69px] justify-between pr-12">
        <div class="max-w-[326px] h-[1224px] relative flex grow flex-col items-center px-9 py-12 bg-gray-100 rounded-3xl border-2 border-gray-300">
          <div class="logo-comp">
            <svg width="175" height="41" viewBox="0 0 175 41" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M24.1296 2.02708L6.79578 2.02708C4.33051 2.02708 2.33201 4.02558 2.33201 6.49085L2.33201 33.0006C2.33201 36.1428 6.27201 37.5516 8.26441 35.1218L13.6211 28.5893C13.8353 28.3281 14.1553 28.1766 14.4932 28.1766L24.1296 28.1766C28.7566 28.1766 32.5075 24.4257 32.5075 19.7988L32.5075 10.4049C32.5075 5.77797 28.7566 2.02708 24.1296 2.02708Z" stroke="url(#paint0_linear_1608_524)" stroke-width="3.33598"/>
              <path d="M11.3467 15.3989C11.9917 16.3497 12.9332 17.0836 14.0074 17.5707C15.0836 18.0587 16.2922 18.3001 17.5015 18.2887C18.7107 18.2772 19.9132 18.0131 20.9767 17.503C22.0384 16.9938 22.9606 16.2382 23.5776 15.2689" stroke="url(#paint1_linear_1608_524)" stroke-width="3.35494" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M59.1873 18.4481C59.1873 19.3569 58.973 20.2143 58.5443 21.0202C58.1156 21.8261 57.4297 22.4863 56.4866 23.0007C55.5435 23.498 54.3346 23.7467 52.86 23.7467L49.6191 23.7467L49.6191 31L46.6869 31L46.6869 13.1238L52.86 13.1238C54.2318 13.1238 55.3892 13.3639 56.3323 13.844C57.2926 14.307 58.0042 14.9415 58.4672 15.7474C58.9473 16.5533 59.1873 17.4536 59.1873 18.4481ZM52.86 21.3546C53.9745 21.3546 54.8062 21.106 55.3549 20.6087C55.9036 20.0943 56.178 19.3741 56.178 18.4481C56.178 16.4933 55.072 15.5159 52.86 15.5159L49.6191 15.5159L49.6191 21.3546L52.86 21.3546ZM64.9161 11.9664L64.9161 31L61.9839 31L61.9839 11.9664L64.9161 11.9664ZM67.7884 23.8495C67.7884 22.4263 68.0799 21.166 68.663 20.0685C69.2631 18.9711 70.069 18.1223 71.0807 17.5221C72.1096 16.9048 73.2413 16.5962 74.4759 16.5962C75.5905 16.5962 76.5593 16.8191 77.3824 17.2649C78.2226 17.6936 78.8914 18.2338 79.3887 18.8854L79.3887 16.8277L82.3466 16.8277L82.3466 31L79.3887 31L79.3887 28.8909C78.8914 29.5596 78.2141 30.1169 77.3567 30.5627C76.4993 31.0086 75.5219 31.2315 74.4245 31.2315C73.207 31.2315 72.0924 30.9228 71.0807 30.3055C70.069 29.6711 69.2631 28.7966 68.663 27.682C68.0799 26.5502 67.7884 25.2728 67.7884 23.8495ZM79.3887 23.901C79.3887 22.9236 79.1829 22.0748 78.7714 21.3546C78.377 20.6344 77.854 20.0857 77.2024 19.7084C76.5508 19.3312 75.8477 19.1426 75.0932 19.1426C74.3387 19.1426 73.6357 19.3312 72.9841 19.7084C72.3325 20.0685 71.8009 20.6087 71.3894 21.3289C70.995 22.0319 70.7978 22.8721 70.7978 23.8495C70.7978 24.8269 70.995 25.6843 71.3894 26.4216C71.8009 27.159 72.3325 27.7248 72.9841 28.1192C73.6529 28.4965 74.3559 28.6851 75.0932 28.6851C75.8477 28.6851 76.5508 28.4965 77.2024 28.1192C77.854 27.742 78.377 27.1933 78.7714 26.4731C79.1829 25.7357 79.3887 24.8784 79.3887 23.901ZM87.6897 14.95C87.1582 14.95 86.7123 14.77 86.3522 14.4099C85.9921 14.0498 85.8121 13.604 85.8121 13.0724C85.8121 12.5408 85.9921 12.095 86.3522 11.7349C86.7123 11.3748 87.1582 11.1948 87.6897 11.1948C88.2042 11.1948 88.6414 11.3748 89.0015 11.7349C89.3616 12.095 89.5417 12.5408 89.5417 13.0724C89.5417 13.604 89.3616 14.0498 89.0015 14.4099C88.6414 14.77 88.2042 14.95 87.6897 14.95ZM89.1301 16.8277L89.1301 31L86.1979 31L86.1979 16.8277L89.1301 16.8277ZM100.13 16.5962C101.245 16.5962 102.239 16.8277 103.114 17.2907C104.006 17.7536 104.7 18.4395 105.197 19.3483C105.695 20.2572 105.943 21.3546 105.943 22.6406L105.943 31L103.037 31L103.037 23.0779C103.037 21.809 102.72 20.8402 102.085 20.1714C101.451 19.4855 100.585 19.1426 99.4873 19.1426C98.3899 19.1426 97.5153 19.4855 96.8637 20.1714C96.2293 20.8402 95.9121 21.809 95.9121 23.0779L95.9121 31L92.9798 31L92.9798 16.8277L95.9121 16.8277L95.9121 18.4481C96.3922 17.8651 97.0009 17.4107 97.7383 17.0849C98.4927 16.7591 99.2901 16.5962 100.13 16.5962ZM113.104 19.2197L113.104 27.0647C113.104 27.5962 113.224 27.9821 113.464 28.2221C113.722 28.445 114.15 28.5565 114.751 28.5565L116.551 28.5565L116.551 31L114.236 31C112.916 31 111.904 30.6913 111.201 30.074C110.498 29.4567 110.146 28.4536 110.146 27.0647L110.146 19.2197L108.475 19.2197L108.475 16.8277L110.146 16.8277L110.146 13.3039L113.104 13.3039L113.104 16.8277L116.551 16.8277L116.551 19.2197L113.104 19.2197ZM126.584 16.5962C127.664 16.5962 128.625 16.8277 129.465 17.2907C130.322 17.7536 130.991 18.4395 131.471 19.3483C131.968 20.2572 132.217 21.3546 132.217 22.6406L132.217 31L129.31 31L129.31 23.0779C129.31 21.809 128.993 20.8402 128.359 20.1714C127.724 19.4855 126.858 19.1426 125.761 19.1426C124.664 19.1426 123.789 19.4855 123.137 20.1714C122.503 20.8402 122.186 21.809 122.186 23.0779L122.186 31L119.254 31L119.254 11.9664L122.186 11.9664L122.186 18.4738C122.683 17.8737 123.309 17.4107 124.063 17.0849C124.835 16.7591 125.675 16.5962 126.584 16.5962ZM137.449 14.95C136.917 14.95 136.472 14.77 136.112 14.4099C135.751 14.0498 135.571 13.604 135.571 13.0724C135.571 12.5408 135.751 12.095 136.112 11.7349C136.472 11.3748 136.917 11.1948 137.449 11.1948C137.963 11.1948 138.401 11.3748 138.761 11.7349C139.121 12.095 139.301 12.5408 139.301 13.0724C139.301 13.604 139.121 14.0498 138.761 14.4099C138.401 14.77 137.963 14.95 137.449 14.95ZM138.889 16.8277L138.889 31L135.957 31L135.957 16.8277L138.889 16.8277ZM149.89 16.5962C151.004 16.5962 151.999 16.8277 152.873 17.2907C153.765 17.7536 154.459 18.4395 154.957 19.3483C155.454 20.2572 155.703 21.3546 155.703 22.6406L155.703 31L152.796 31L152.796 23.0779C152.796 21.809 152.479 20.8402 151.844 20.1714C151.21 19.4855 150.344 19.1426 149.247 19.1426C148.149 19.1426 147.275 19.4855 146.623 20.1714C145.989 20.8402 145.671 21.809 145.671 23.0779L145.671 31L142.739 31L142.739 16.8277L145.671 16.8277L145.671 18.4481C146.151 17.8651 146.76 17.4107 147.498 17.0849C148.252 16.7591 149.049 16.5962 149.89 16.5962ZM165.153 16.5962C166.25 16.5962 167.219 16.8191 168.059 17.2649C168.917 17.6936 169.585 18.2338 170.066 18.8854L170.066 16.8277L173.024 16.8277L173.024 31.2315C173.024 32.5347 172.749 33.6921 172.2 34.7038C171.652 35.7327 170.854 36.5386 169.808 37.1216C168.78 37.7046 167.545 37.9961 166.105 37.9961C164.184 37.9961 162.589 37.5417 161.32 36.6329C160.051 35.7413 159.331 34.5238 159.16 32.9805L162.066 32.9805C162.289 33.7179 162.761 34.3094 163.481 34.7553C164.218 35.2183 165.093 35.4498 166.105 35.4498C167.288 35.4498 168.239 35.0897 168.96 34.3695C169.697 33.6493 170.066 32.6033 170.066 31.2315L170.066 28.8651C169.568 29.5339 168.891 30.0998 168.034 30.5627C167.193 31.0086 166.233 31.2315 165.153 31.2315C163.918 31.2315 162.787 30.9228 161.758 30.3055C160.746 29.6711 159.94 28.7966 159.34 27.682C158.757 26.5503 158.465 25.2728 158.465 23.8495C158.465 22.4263 158.757 21.166 159.34 20.0685C159.94 18.9711 160.746 18.1223 161.758 17.5221C162.787 16.9048 163.918 16.5962 165.153 16.5962ZM170.066 23.901C170.066 22.9236 169.86 22.0748 169.448 21.3546C169.054 20.6344 168.531 20.0857 167.879 19.7084C167.228 19.3312 166.525 19.1426 165.77 19.1426C165.016 19.1426 164.313 19.3312 163.661 19.7084C163.009 20.0685 162.478 20.6087 162.066 21.3289C161.672 22.0319 161.475 22.8721 161.475 23.8495C161.475 24.8269 161.672 25.6843 162.066 26.4216C162.478 27.159 163.009 27.7248 163.661 28.1192C164.33 28.4965 165.033 28.6851 165.77 28.6851C166.525 28.6851 167.228 28.4965 167.879 28.1192C168.531 27.742 169.054 27.1933 169.448 26.4731C169.86 25.7357 170.066 24.8784 170.066 23.901Z" fill="#21004A"/>
              <defs>
              <linearGradient id="paint0_linear_1608_524" x1="25.6076" y1="3.60962" x2="-2.23122" y2="33.3543" gradientUnits="userSpaceOnUse">
              <stop offset="0.00824319" stop-color="#FB95DE"/>
              <stop offset="0.2696" stop-color="#EC34D9"/>
              <stop offset="0.6088" stop-color="#8214E3"/>
              <stop offset="0.9847" stop-color="#681CE3"/>
              </linearGradient>
              <linearGradient id="paint1_linear_1608_524" x1="12.1634" y1="5.89146" x2="27.4168" y2="28.2643" gradientUnits="userSpaceOnUse">
              <stop stop-color="#24BCD7"/>
              <stop offset="1" stop-color="#50E9FF"/>
              </linearGradient>
              </defs>
            </svg>
          </div>
          <div class="bg-zinc-200 h-[1px] w-full my-12"></div>
          <div class=" flex-col justify-start items-start gap-3 inline-flex tab">
            <button class="flex tablinks px-7 py-[18px] text-slate-900 justify-start items-center gap-3 w-full active" onclick="openCity(event, 'newproposal')">
              <div class="w-6 h-6 relative icon-active hidden">
                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_1044_4151)">
                  <path d="M18.2585 4.59791C18.2585 4.03484 18.0388 3.50478 17.6405 3.10653L15.652 1.118C15.2593 0.725234 14.7018 0.5 14.147 0.5H14.0261V4.71875H18.2586L18.2585 4.59791Z" fill="white"/>
                  <path d="M12.8408 15.0095C12.9754 14.601 13.2102 14.2206 13.5165 13.9123L18.2772 9.17075V6.125H13.3365C12.9479 6.125 12.6562 5.81052 12.6562 5.42188V0.5H2.10938C0.946219 0.5 0 1.44622 0 2.60938V22.3906C0 23.5538 0.946219 24.5 2.10938 24.5H16.149C17.3122 24.5 18.2772 23.5538 18.2772 22.3906V17.1429L17.5045 17.8969C17.1914 18.2072 16.8248 18.4331 16.4114 18.5712L14.1757 19.3175L13.8351 19.3361C13.272 19.3361 12.7392 19.0621 12.4082 18.6035C12.08 18.1468 11.9908 17.555 12.1693 17.0201L12.8408 15.0095ZM3.51562 13.1562H10.524C10.9127 13.1562 11.2272 13.4707 11.2272 13.8594C11.2272 14.248 10.9127 14.5625 10.524 14.5625H3.51562C3.12698 14.5625 2.8125 14.248 2.8125 13.8594C2.8125 13.4707 3.12698 13.1562 3.51562 13.1562ZM2.8125 11.0469C2.8125 10.6582 3.12698 10.3438 3.51562 10.3438H10.524C10.9127 10.3438 11.2272 10.6582 11.2272 11.0469C11.2272 11.4355 10.9127 11.75 10.524 11.75H3.51562C3.12698 11.75 2.8125 11.4355 2.8125 11.0469ZM2.8125 16.6719C2.8125 16.2832 3.12698 15.9688 3.51562 15.9688H10.524C10.9127 15.9688 11.2272 16.2832 11.2272 16.6719C11.2272 17.0605 10.9127 17.375 10.524 17.375H3.51562C3.12698 17.375 2.8125 17.0605 2.8125 16.6719ZM13.3365 20.1875C13.7252 20.1875 14.0397 20.502 14.0397 20.8906C14.0397 21.2793 13.7252 21.5938 13.3365 21.5938H9.1178C8.72916 21.5938 8.41467 21.2793 8.41467 20.8906C8.41467 20.502 8.72916 20.1875 9.1178 20.1875H13.3365ZM3.51562 8.9375C3.12698 8.9375 2.8125 8.62302 2.8125 8.23438C2.8125 7.84573 3.12698 7.53125 3.51562 7.53125H13.3365C13.7252 7.53125 14.0397 7.84573 14.0397 8.23438C14.0397 8.62302 13.7252 8.9375 13.3365 8.9375H3.51562Z" fill="white"/>
                  <path d="M14.1145 15.6316L13.5028 17.4668C13.4111 17.7417 13.6727 18.0032 13.9476 17.9114L15.7818 17.2988L14.1145 15.6316Z" fill="white"/>
                  <path d="M19.5753 9.84253L14.9446 14.4733L16.9417 16.4704C17.9883 15.4236 20.0248 13.3868 21.5722 11.8394L19.5753 9.84253Z" fill="white"/>
                  <path d="M23.5867 7.82576C23.3396 7.57718 22.9756 7.43506 22.5897 7.43506C22.2038 7.43506 21.8399 7.57718 21.5913 7.82646L20.5696 8.8482L22.5664 10.845C23.1257 10.2856 23.5123 9.89895 23.5882 9.82315C24.1374 9.27307 24.1374 8.37711 23.5867 7.82576Z" fill="white"/>
                  <path d="M23.5881 9.82322L23.5882 9.82312C23.59 9.82134 23.5908 9.82054 23.5923 9.81909C23.5908 9.82059 23.59 9.82139 23.5881 9.82322Z" fill="white"/>
                  <path d="M23.5923 9.8191C23.5945 9.81685 23.5972 9.81423 23.5985 9.81287C23.5971 9.81427 23.5945 9.81685 23.5923 9.8191Z" fill="white"/>
                  <path d="M23.5984 9.81289C23.6029 9.80835 23.603 9.80825 23.5984 9.81289V9.81289Z" fill="white"/>
                  </g>
                  <defs>
                  <clipPath id="clip0_1044_4151">
                  <rect width="24" height="24" fill="white" transform="translate(0 0.5)"/>
                  </clipPath>
                  </defs>
                </svg>
              </div>
              <div class="w-6 h-6 relative icon-default block"> 
                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_1044_4151)">
                  <path d="M18.2585 4.59791C18.2585 4.03484 18.0388 3.50478 17.6405 3.10653L15.652 1.118C15.2593 0.725234 14.7018 0.5 14.147 0.5H14.0261V4.71875H18.2586L18.2585 4.59791Z" fill="#081226"/>
                  <path d="M12.8408 15.0095C12.9754 14.601 13.2102 14.2206 13.5165 13.9123L18.2772 9.17075V6.125H13.3365C12.9479 6.125 12.6562 5.81052 12.6562 5.42188V0.5H2.10938C0.946219 0.5 0 1.44622 0 2.60938V22.3906C0 23.5538 0.946219 24.5 2.10938 24.5H16.149C17.3122 24.5 18.2772 23.5538 18.2772 22.3906V17.1429L17.5045 17.8969C17.1914 18.2072 16.8248 18.4331 16.4114 18.5712L14.1757 19.3175L13.8351 19.3361C13.272 19.3361 12.7392 19.0621 12.4082 18.6035C12.08 18.1468 11.9908 17.555 12.1693 17.0201L12.8408 15.0095ZM3.51562 13.1562H10.524C10.9127 13.1562 11.2272 13.4707 11.2272 13.8594C11.2272 14.248 10.9127 14.5625 10.524 14.5625H3.51562C3.12698 14.5625 2.8125 14.248 2.8125 13.8594C2.8125 13.4707 3.12698 13.1562 3.51562 13.1562ZM2.8125 11.0469C2.8125 10.6582 3.12698 10.3438 3.51562 10.3438H10.524C10.9127 10.3438 11.2272 10.6582 11.2272 11.0469C11.2272 11.4355 10.9127 11.75 10.524 11.75H3.51562C3.12698 11.75 2.8125 11.4355 2.8125 11.0469ZM2.8125 16.6719C2.8125 16.2832 3.12698 15.9688 3.51562 15.9688H10.524C10.9127 15.9688 11.2272 16.2832 11.2272 16.6719C11.2272 17.0605 10.9127 17.375 10.524 17.375H3.51562C3.12698 17.375 2.8125 17.0605 2.8125 16.6719ZM13.3365 20.1875C13.7252 20.1875 14.0397 20.502 14.0397 20.8906C14.0397 21.2793 13.7252 21.5938 13.3365 21.5938H9.1178C8.72916 21.5938 8.41467 21.2793 8.41467 20.8906C8.41467 20.502 8.72916 20.1875 9.1178 20.1875H13.3365ZM3.51562 8.9375C3.12698 8.9375 2.8125 8.62302 2.8125 8.23438C2.8125 7.84573 3.12698 7.53125 3.51562 7.53125H13.3365C13.7252 7.53125 14.0397 7.84573 14.0397 8.23438C14.0397 8.62302 13.7252 8.9375 13.3365 8.9375H3.51562Z" fill="#081226"/>
                  <path d="M14.1145 15.6316L13.5028 17.4668C13.4111 17.7417 13.6727 18.0032 13.9476 17.9114L15.7818 17.2988L14.1145 15.6316Z" fill="#081226"/>
                  <path d="M19.5753 9.84253L14.9446 14.4733L16.9417 16.4704C17.9883 15.4236 20.0248 13.3868 21.5722 11.8394L19.5753 9.84253Z" fill="#081226"/>
                  <path d="M23.5867 7.82576C23.3396 7.57718 22.9756 7.43506 22.5897 7.43506C22.2038 7.43506 21.8399 7.57718 21.5913 7.82646L20.5696 8.8482L22.5664 10.845C23.1257 10.2856 23.5123 9.89895 23.5882 9.82315C24.1374 9.27307 24.1374 8.37711 23.5867 7.82576Z" fill="white"/>
                  <path d="M23.5881 9.82322L23.5882 9.82312C23.59 9.82134 23.5908 9.82054 23.5923 9.81909C23.5908 9.82059 23.59 9.82139 23.5881 9.82322Z" fill="white"/>
                  <path d="M23.5923 9.8191C23.5945 9.81685 23.5972 9.81423 23.5985 9.81287C23.5971 9.81427 23.5945 9.81685 23.5923 9.8191Z" fill="white"/>
                  <path d="M23.5984 9.81289C23.6029 9.80835 23.603 9.80825 23.5984 9.81289V9.81289Z" fill="white"/>
                  </g>
                  <defs>
                  <clipPath id="clip0_1044_4151">
                  <rect width="24" height="24" fill="white" transform="translate(0 0.5)"/>
                  </clipPath>
                  </defs>
                </svg>
              </div>
              <div class="text-base font-normal capitalize">New Proposal</div>
            </button>
            <button class="flex tablinks px-7 py-[18px] text-slate-900 justify-start items-center gap-3 w-full" onclick="openCity(event, 'document')">
              <div class="w-6 h-6 relative icon-active hidden">
                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_1044_4148)">
                  <path d="M15.6094 7.03125C14.7047 7.03125 13.9688 6.29527 13.9688 5.39062V0H5.57812C4.15655 0 3 1.15655 3 2.57812V21.4219C3 22.8435 4.15655 24 5.57812 24H18.7031C20.1247 24 21.2812 22.8435 21.2812 21.4219V7.03125H15.6094ZM6.84375 16.875H10.2525C10.6408 16.875 10.9556 17.1898 10.9556 17.5781C10.9556 17.9664 10.6408 18.2812 10.2525 18.2812H6.84375C6.45544 18.2812 6.14062 17.9664 6.14062 17.5781C6.14062 17.1898 6.45544 16.875 6.84375 16.875ZM6.14062 13.8281C6.14062 13.4398 6.45544 13.125 6.84375 13.125H17.1562C17.5446 13.125 17.8594 13.4398 17.8594 13.8281C17.8594 14.2164 17.5446 14.5312 17.1562 14.5312H6.84375C6.45544 14.5312 6.14062 14.2164 6.14062 13.8281ZM17.1562 9.375C17.5446 9.375 17.8594 9.68981 17.8594 10.0781C17.8594 10.4664 17.5446 10.7812 17.1562 10.7812H6.84375C6.45544 10.7812 6.14062 10.4664 6.14062 10.0781C6.14062 9.68981 6.45544 9.375 6.84375 9.375H17.1562Z" fill="white"/>
                  <path d="M15.2344 5.89064C15.2344 6.01988 15.3395 6.12502 15.4688 6.12502H20.8272C20.6986 5.88755 20.5331 5.66944 20.3343 5.48133L15.8145 1.2053C15.6391 1.03936 15.4437 0.900938 15.2344 0.791626V5.89064H15.2344Z" fill="white"/>
                  </g>
                  <defs>
                  <clipPath id="clip0_1044_4148">
                  <rect width="24" height="24" fill="white" transform="translate(0 0.5)"/>
                  </clipPath>
                  </defs>
                </svg>
              </div>
              <div class="w-6 h-6 relative icon-default block">
                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_1044_4148)">
                  <path d="M15.6094 7.03125C14.7047 7.03125 13.9688 6.29527 13.9688 5.39062V0H5.57812C4.15655 0 3 1.15655 3 2.57812V21.4219C3 22.8435 4.15655 24 5.57812 24H18.7031C20.1247 24 21.2812 22.8435 21.2812 21.4219V7.03125H15.6094ZM6.84375 16.875H10.2525C10.6408 16.875 10.9556 17.1898 10.9556 17.5781C10.9556 17.9664 10.6408 18.2812 10.2525 18.2812H6.84375C6.45544 18.2812 6.14062 17.9664 6.14062 17.5781C6.14062 17.1898 6.45544 16.875 6.84375 16.875ZM6.14062 13.8281C6.14062 13.4398 6.45544 13.125 6.84375 13.125H17.1562C17.5446 13.125 17.8594 13.4398 17.8594 13.8281C17.8594 14.2164 17.5446 14.5312 17.1562 14.5312H6.84375C6.45544 14.5312 6.14062 14.2164 6.14062 13.8281ZM17.1562 9.375C17.5446 9.375 17.8594 9.68981 17.8594 10.0781C17.8594 10.4664 17.5446 10.7812 17.1562 10.7812H6.84375C6.45544 10.7812 6.14062 10.4664 6.14062 10.0781C6.14062 9.68981 6.45544 9.375 6.84375 9.375H17.1562Z" fill="#081226"/>
                  <path d="M15.2344 5.89064C15.2344 6.01988 15.3395 6.12502 15.4688 6.12502H20.8272C20.6986 5.88755 20.5331 5.66944 20.3343 5.48133L15.8145 1.2053C15.6391 1.03936 15.4437 0.900938 15.2344 0.791626V5.89064H15.2344Z" fill="#081226"/>
                  </g>
                  <defs>
                  <clipPath id="clip0_1044_4148">
                  <rect width="24" height="24" fill="white" transform="translate(0 0.5)"/>
                  </clipPath>
                  </defs>
                </svg>
              </div>
              <div class=" text-base font-normal capitalize">Document</div>
            </button>
            <button class="flex tablinks px-7 py-[18px] text-slate-900 justify-start items-center gap-3 w-full" onclick="openCity(event, 'archived')">
              <div class="w-6 h-6 relative icon-active hidden">
                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_1044_4177)">
                  <path d="M19.875 3.5H15.75V2.75C15.75 1.50734 14.7427 0.5 13.5 0.5H10.5C9.25734 0.5 8.25 1.50734 8.25 2.75V3.5H4.125C3.08948 3.5 2.25 4.33948 2.25 5.375V6.875C2.25 7.28923 2.58577 7.625 3 7.625H21C21.4142 7.625 21.75 7.28923 21.75 6.875V5.375C21.75 4.33948 20.9105 3.5 19.875 3.5ZM9.75 2.75C9.75 2.33656 10.0866 2 10.5 2H13.5C13.9134 2 14.25 2.33656 14.25 2.75V3.5H9.75V2.75Z" fill="white"/>
                  <path d="M3.67333 9.125C3.5395 9.125 3.43286 9.23684 3.43924 9.37053L4.05799 22.3569C4.11517 23.5588 5.10236 24.5 6.30517 24.5H17.6949C18.8977 24.5 19.8849 23.5588 19.942 22.3569L20.5608 9.37053C20.5672 9.23684 20.4605 9.125 20.3267 9.125H3.67333ZM15 11C15 10.5856 15.3356 10.25 15.75 10.25C16.1644 10.25 16.5 10.5856 16.5 11V20.75C16.5 21.1644 16.1644 21.5 15.75 21.5C15.3356 21.5 15 21.1644 15 20.75V11ZM11.25 11C11.25 10.5856 11.5856 10.25 12 10.25C12.4144 10.25 12.75 10.5856 12.75 11V20.75C12.75 21.1644 12.4144 21.5 12 21.5C11.5856 21.5 11.25 21.1644 11.25 20.75V11ZM7.50002 11C7.50002 10.5856 7.83564 10.25 8.25002 10.25C8.66439 10.25 9.00002 10.5856 9.00002 11V20.75C9.00002 21.1644 8.66439 21.5 8.25002 21.5C7.83564 21.5 7.50002 21.1644 7.50002 20.75V11Z" fill="white"/>
                  </g>
                  <defs>
                  <clipPath id="clip0_1044_4177">
                  <rect width="24" height="24" fill="white" transform="translate(0 0.5)"/>
                  </clipPath>
                  </defs>
                </svg>
              </div>
              <div class="w-6 h-6 relative icon-default block">
                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_1044_4177)">
                  <path d="M19.875 3.5H15.75V2.75C15.75 1.50734 14.7427 0.5 13.5 0.5H10.5C9.25734 0.5 8.25 1.50734 8.25 2.75V3.5H4.125C3.08948 3.5 2.25 4.33948 2.25 5.375V6.875C2.25 7.28923 2.58577 7.625 3 7.625H21C21.4142 7.625 21.75 7.28923 21.75 6.875V5.375C21.75 4.33948 20.9105 3.5 19.875 3.5ZM9.75 2.75C9.75 2.33656 10.0866 2 10.5 2H13.5C13.9134 2 14.25 2.33656 14.25 2.75V3.5H9.75V2.75Z" fill="#081226"/>
                  <path d="M3.67333 9.125C3.5395 9.125 3.43286 9.23684 3.43924 9.37053L4.05799 22.3569C4.11517 23.5588 5.10236 24.5 6.30517 24.5H17.6949C18.8977 24.5 19.8849 23.5588 19.942 22.3569L20.5608 9.37053C20.5672 9.23684 20.4605 9.125 20.3267 9.125H3.67333ZM15 11C15 10.5856 15.3356 10.25 15.75 10.25C16.1644 10.25 16.5 10.5856 16.5 11V20.75C16.5 21.1644 16.1644 21.5 15.75 21.5C15.3356 21.5 15 21.1644 15 20.75V11ZM11.25 11C11.25 10.5856 11.5856 10.25 12 10.25C12.4144 10.25 12.75 10.5856 12.75 11V20.75C12.75 21.1644 12.4144 21.5 12 21.5C11.5856 21.5 11.25 21.1644 11.25 20.75V11ZM7.50002 11C7.50002 10.5856 7.83564 10.25 8.25002 10.25C8.66439 10.25 9.00002 10.5856 9.00002 11V20.75C9.00002 21.1644 8.66439 21.5 8.25002 21.5C7.83564 21.5 7.50002 21.1644 7.50002 20.75V11Z" fill="#081226"/>
                  </g>
                  <defs>
                  <clipPath id="clip0_1044_4177">
                  <rect width="24" height="24" fill="white" transform="translate(0 0.5)"/>
                  </clipPath>
                  </defs>
                </svg>
              </div>
              <div class="text-base font-normal capitalize">archived</div>
            </button>
          </div>
          <div class="left-[99px] top-[916px] absolute text-black text-base font-medium capitalize">Log out</div>
          <div class="w-6 h-6 left-[60px] top-[916px] absolute"></div>
        </div>
        <div class="form-wrap flex flex-col grow py-12">
          <div id="newproposal" class="tabcontent">
            <div class="flex justify-between">
              <div class="text-black text-2xl font-bold capitalize">New Proposal</div>
              <div class="flex justify-between gap-5">
                <button class="px-10 py-3 bg-slate-400 rounded-[43px] justify-start items-center gap-3 inline-flex">
                  <div class="text-white text-sm font-normal capitalize">Cancel</div>
                </button>
                <button class="px-10 py-3 bg-slate-900 rounded-[43px] justify-between items-center gap-3 inline-flex">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.3125 4.6875C9.70941 4.6875 9.21875 4.19684 9.21875 3.59375V0H3.625C2.67728 0 1.90625 0.771031 1.90625 1.71875V14.2812C1.90625 15.229 2.67728 16 3.625 16H12.375C13.3227 16 14.0938 15.229 14.0938 14.2812V4.6875H10.3125ZM4.46875 11.25H6.74125C7.00012 11.25 7.21 11.4599 7.21 11.7188C7.21 11.9776 7.00012 12.1875 6.74125 12.1875H4.46875C4.20988 12.1875 4 11.9776 4 11.7188C4 11.4599 4.20988 11.25 4.46875 11.25ZM4 9.21875C4 8.95988 4.20988 8.75 4.46875 8.75H11.3438C11.6026 8.75 11.8125 8.95988 11.8125 9.21875C11.8125 9.47762 11.6026 9.6875 11.3438 9.6875H4.46875C4.20988 9.6875 4 9.47762 4 9.21875ZM11.3438 6.25C11.6026 6.25 11.8125 6.45988 11.8125 6.71875C11.8125 6.97762 11.6026 7.1875 11.3438 7.1875H4.46875C4.20988 7.1875 4 6.97762 4 6.71875C4 6.45988 4.20988 6.25 4.46875 6.25H11.3438Z" fill="white"/>
                    <path d="M10.1562 3.5938C10.1562 3.67996 10.2263 3.75005 10.3125 3.75005H13.8848C13.7991 3.59174 13.6888 3.44633 13.5562 3.32093L10.543 0.470239C10.4261 0.359614 10.2958 0.267333 10.1563 0.194458V3.5938H10.1562Z" fill="white"/>
                  </svg>
                  <div class="text-white text-sm font-normal capitalize">Save Proposal</div>
                </button>
              </div>
            </div>
            <div class="bg-slate-300 h-[1px] w-full my-12"></div>
            <div class="flex-col gap-9 flex">
              <div class="flex-col gap-2 flex">
                <label for="Title" class="text-slate-400 text-sm font-normal leading-snug">Proposal Title</label>
                <input type="text" id="" class="bg-transparent px-6 py-5 rounded-xl border border-neutral-300 gap-2.5 inline-flex text-slate-900 text-base font-normal leading-relaxed" placeholder="Proposal Title" required>
              </div>
              <div class="flex-col gap-2 flex">
                <label for="Title" class="text-slate-400 text-sm font-normal leading-snug">Proposal Subtitle</label>
                <input type="text" id="" class="bg-transparent px-6 py-5 rounded-xl border border-neutral-300 gap-2.5 inline-flex text-slate-900 text-base font-normal leading-relaxed" placeholder="Proposal Subtitle" required>
              </div>
              <div class="flex-col gap-2 flex">
                <label for="Title" class="text-slate-400 text-sm font-normal leading-snug">Prepared For</label>
                <input type="text" id="" class="bg-transparent px-6 py-5 rounded-xl border border-neutral-300 gap-2.5 inline-flex text-slate-900 text-base font-normal leading-relaxed" placeholder="Client Name" required>
              </div>
              <div class="flex-col gap-2 flex">
                <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Project Description</label>
                <textarea id="" rows="8" class="bg-transparent px-6 py-5 rounded-xl border border-neutral-300 gap-2.5 inline-flex text-slate-900 text-base font-normal leading-relaxed" placeholder="Description of project"></textarea>
              </div>
              <div class="flex-col gap-2 flex">
                <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Objective</label>
                <textarea id="" rows="8" class="bg-transparent px-6 py-5 rounded-xl border border-neutral-300 gap-2.5 inline-flex text-slate-900 text-base font-normal leading-relaxed" placeholder="Objective of project"></textarea>
              </div>
              <div class="flex-col gap-2 flex">
                <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Goals</label>
                <textarea id="" rows="8" class="bg-transparent px-6 py-5 rounded-xl border border-neutral-300 gap-2.5 inline-flex text-slate-900 text-base font-normal leading-relaxed" placeholder="Goals of project"></textarea>
              </div>
              <div class="flex-col justify-start items-start gap-2 flex">
                <label for="Title" class="text-slate-400 text-sm font-normal leading-snug">Project Timeline</label>
                <div class="justify-start items-start gap-2 inline-flex">
                  <input type="text" id="" class="bg-transparent px-6 py-[10px] rounded-xl border border-neutral-300 gap-2.5 inline-flex text-slate-900 text-base font-normal leading-relaxed" placeholder="Proses Name" required>
                  <div class="justify-start items-start gap-6 flex">
                    <div class="flex-col justify-start items-start gap-2 inline-flex">
                      <div class="px-6 py-2.5 rounded-xl border border-neutral-300 justify-start items-start gap-2.5 inline-flex">
                        <div class="text-slate-900 text-base font-normal leading-relaxed">1 Days</div>
                        <div class="w-6 h-6 justify-center items-center flex">
                          <div class="w-6 h-6 relative flex-col justify-start items-start flex">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M6 9L12 15L18 9" stroke="#393D4E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <select id="category" class="bg-transparent px-6 py-2.5 rounded-xl border border-neutral-300 text-slate-900 text-base font-normal leading-relaxed">
                      <!-- <option >Select category</option> -->
                      <option value="TV">TV/Monitors</option>
                      <option value="PC">PC</option>
                      <option value="GA">Gaming/Console</option>
                      <option value="PH">Phones</option>
                    </select>
                  </div>
                  <button class="px-3 py-2.5 rounded-xl border border-neutral-300 justify-start items-start gap-2.5 flex">
                    <div class="w-6 h-6 relative flex-col justify-start items-start flex">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 5V19" stroke="#393D4E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M5 12H19" stroke="#393D4E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </div>
                  </button>
                </div>
              </div>

              <div class="flex-col gap-16 flex">
                <div class="flex-col gap-2 flex">
                  <label for="Title" class="text-slate-400 text-sm font-normal leading-snug">Budget Breakdown</label>
                  <input type="text" id="" class="bg-transparent px-6 py-5 rounded-xl border border-neutral-300 gap-2.5 inline-flex text-slate-900 text-base font-normal leading-relaxed" placeholder="Part Name" required>
                  <div class="justify-start items-start gap-6 inline-flex">
                      <div class="flex-col justify-start items-start gap-2 inline-flex">
                          <div class="px-3 py-2.5 rounded-xl border border-neutral-300 justify-start items-start gap-2.5 inline-flex">
                              <div class="text-slate-900 text-base font-normal leading-relaxed">1</div>
                              <div class="w-6 h-6 justify-center items-center flex">
                                  <div class="w-6 h-6 relative flex-col justify-start items-start flex"></div>
                              </div>
                          </div>
                      </div>
                      <div class="flex-col justify-start items-start gap-2 inline-flex">
                          <div class="w-[257px] px-6 py-2.5 rounded-xl border border-neutral-300 justify-start items-start gap-2.5 inline-flex">
                              <div class="text-slate-900 text-base font-normal leading-relaxed">Home Page</div>
                              <div class="w-6 h-6 relative"></div>
                          </div>
                      </div>
                      <div class="flex-col justify-start items-start gap-2 inline-flex">
                          <div class="justify-start items-start gap-2 inline-flex">
                              <div class="px-3 py-2.5 rounded-xl border border-neutral-300 justify-start items-start gap-2.5 flex">
                                  <div class="text-slate-900 text-base font-normal leading-relaxed">$</div>
                                  <div class="w-6 h-6 justify-center items-center flex">
                                      <div class="w-6 h-6 relative flex-col justify-start items-start flex"></div>
                                  </div>
                              </div>
                              <div class="h-[46px] px-3 py-2.5 rounded-xl border border-neutral-300 justify-start items-start gap-2.5 flex">
                                  <div class="text-slate-900 text-base font-normal leading-relaxed">1000</div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="justify-start items-start gap-6 inline-flex">
                      <div class="flex-col justify-start items-start gap-2 inline-flex">
                          <div class="px-3 py-2.5 rounded-xl border border-neutral-300 justify-start items-start gap-2.5 inline-flex">
                              <div class="text-slate-900 text-base font-normal leading-relaxed">1</div>
                              <div class="w-6 h-6 justify-center items-center flex">
                                  <div class="w-6 h-6 relative flex-col justify-start items-start flex"></div>
                              </div>
                          </div>
                      </div>
                      <div class="flex-col justify-start items-start gap-2 inline-flex">
                          <div class="w-[257px] px-6 py-2.5 rounded-xl border border-neutral-300 justify-start items-start gap-2.5 inline-flex">
                              <div class="text-slate-900 text-base font-normal leading-relaxed">Home Page</div>
                              <div class="w-6 h-6 relative"></div>
                          </div>
                      </div>
                      <div class="flex-col justify-start items-start gap-2 inline-flex">
                          <div class="justify-start items-start gap-2 inline-flex">
                              <div class="px-3 py-2.5 rounded-xl border border-neutral-300 justify-start items-start gap-2.5 flex">
                                  <div class="text-slate-900 text-base font-normal leading-relaxed">$</div>
                                  <div class="w-6 h-6 justify-center items-center flex">
                                      <div class="w-6 h-6 relative flex-col justify-start items-start flex"></div>
                                  </div>
                              </div>
                              <div class="h-[46px] px-3 py-2.5 rounded-xl border border-neutral-300 justify-start items-start gap-2.5 flex">
                                  <div class="text-slate-900 text-base font-normal leading-relaxed">1000</div>
                              </div>
                              <button class="px-3 py-2.5 rounded-xl border border-neutral-300 justify-start items-start gap-2.5 flex">
                                <div class="w-6 h-6 relative flex-col justify-start items-start flex">
                                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 5V19" stroke="#393D4E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M5 12H19" stroke="#393D4E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                  </svg>
                                </div>
                              </button>
                          </div>
                      </div>
                  </div>
                </div>
                <div class="flex-col justify-start items-start gap-2 flex">
                    <div class="w-[985px] px-6 py-5 rounded-xl border border-neutral-300 justify-start items-start gap-2.5 inline-flex">
                        <div class="text-slate-900 text-base font-normal leading-relaxed">Illustration</div>
                    </div>
                    <div class="justify-start items-start gap-6 inline-flex">
                        <div class="flex-col justify-start items-start gap-2 inline-flex">
                            <div class="rounded-xl border justify-start items-start gap-2.5 inline-flex">
                                <div class="text-slate-900 text-base font-normal leading-relaxed">QTY</div>
                            </div>
                            <div class="px-3 py-2.5 rounded-xl border border-neutral-300 justify-start items-start gap-2.5 inline-flex">
                                <div class="text-slate-900 text-base font-normal leading-relaxed">1</div>
                                <div class="w-6 h-6 justify-center items-center flex">
                                    <div class="w-6 h-6 relative flex-col justify-start items-start flex"></div>
                                </div>
                            </div>
                        </div>
                        <div class="flex-col justify-start items-start gap-2 inline-flex">
                            <div class="rounded-xl border justify-start items-start gap-2.5 inline-flex">
                                <div class="text-slate-900 text-base font-normal leading-relaxed">Item Name</div>
                            </div>
                            <div class="w-[257px] px-6 py-2.5 rounded-xl border border-neutral-300 justify-start items-start gap-2.5 inline-flex">
                                <div class="text-slate-900 text-base font-normal leading-relaxed">Hero Illustration</div>
                                <div class="w-6 h-6 relative"></div>
                            </div>
                        </div>
                        <div class="flex-col justify-start items-start gap-2 inline-flex">
                            <div class="rounded-xl border justify-start items-start gap-2.5 inline-flex">
                                <div class="text-slate-900 text-base font-normal leading-relaxed">Item Price</div>
                            </div>
                            <div class="justify-start items-start gap-2 inline-flex">
                                <div class="px-3 py-2.5 rounded-xl border border-neutral-300 justify-start items-start gap-2.5 flex">
                                    <div class="text-slate-900 text-base font-normal leading-relaxed">$</div>
                                    <div class="w-6 h-6 justify-center items-center flex">
                                        <div class="w-6 h-6 relative flex-col justify-start items-start flex"></div>
                                    </div>
                                </div>
                                <div class="h-[46px] px-3 py-2.5 rounded-xl border border-neutral-300 justify-start items-start gap-2.5 flex">
                                    <div class="text-slate-900 text-base font-normal leading-relaxed">1000</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="justify-start items-start gap-6 inline-flex">
                        <div class="flex-col justify-start items-start gap-2 inline-flex">
                            <div class="px-3 py-2.5 rounded-xl border border-neutral-300 justify-start items-start gap-2.5 inline-flex">
                                <div class="text-slate-900 text-base font-normal leading-relaxed">1</div>
                                <div class="w-6 h-6 justify-center items-center flex">
                                    <div class="w-6 h-6 relative flex-col justify-start items-start flex"></div>
                                </div>
                            </div>
                        </div>
                        <div class="flex-col justify-start items-start gap-2 inline-flex">
                            <div class="w-[257px] px-6 py-2.5 rounded-xl border border-neutral-300 justify-start items-start gap-2.5 inline-flex">
                                <div class="text-slate-900 text-base font-normal leading-relaxed">Hero Illustration</div>
                                <div class="w-6 h-6 relative"></div>
                            </div>
                        </div>
                        <div class="flex-col justify-start items-start gap-2 inline-flex">
                            <div class="justify-start items-start gap-2 inline-flex">
                                <div class="px-3 py-2.5 rounded-xl border border-neutral-300 justify-start items-start gap-2.5 flex">
                                    <div class="text-slate-900 text-base font-normal leading-relaxed">$</div>
                                    <div class="w-6 h-6 justify-center items-center flex">
                                        <div class="w-6 h-6 relative flex-col justify-start items-start flex"></div>
                                    </div>
                                </div>
                                <div class="h-[46px] px-3 py-2.5 rounded-xl border border-neutral-300 justify-start items-start gap-2.5 flex">
                                    <div class="text-slate-900 text-base font-normal leading-relaxed">1000</div>
                                </div>
                                <div class="px-3 py-2.5 rounded-xl border border-neutral-300 justify-start items-start gap-2.5 flex">
                                    <div class="w-6 h-6 justify-center items-center flex">
                                        <div class="w-6 h-6 relative flex-col justify-start items-start flex"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-[985px] px-6 py-[21px] bg-slate-300 rounded-xl border border-neutral-300 justify-center items-center gap-2.5 inline-flex">
                    <div class="w-6 h-6 justify-center items-center flex">
                        <div class="w-6 h-6 relative flex-col justify-start items-start flex"></div>
                    </div>
                    <div class="text-slate-900 text-base font-normal leading-relaxed">Add Part Name</div>
                </div>
            </div>
          </div>
          </div>

          <div id="document" class="tabcontent hidden">
            <h3>Paris</h3>
            <p>Paris is the capital of France.</p> 
          </div>

          <div id="archived" class="tabcontent hidden">
            <h3>Tokyo</h3>
            <p>Tokyo is the capital of Japan.</p>
          </div>
        </div>
      </div>
    </section>
    
  </NuxtLayout>
</template>


