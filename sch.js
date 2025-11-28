document.addEventListener('DOMContentLoaded', () => {
        const contentArea = document.getElementById('content-area');
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');

        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        const pages = {
            trangchu: `
                <div class="bg-white p-8 rounded-xl shadow-2xl transition duration-500 transform hover:scale-[1.01]">
                    <h1 class="text-4xl font-extrabold hcmue-text-yellow mb-4 border-b-4 hcmue-border-yellow inline-block pb-1">Đại học Sư phạm TP. Hồ Chí Minh</h1>
                    <p class="text-gray-600 mb-6 text-lg">Chào mừng đến với ngôi trường của những nhà giáo tương lai!</p>
                    
                    <div class="grid md:grid-cols-2 gap-8 mt-8">
                        <div class="bg-gray-50 p-6 rounded-lg shadow-inner">
                            <h2 class="text-2xl font-bold hcmue-text-blue mb-3 flex items-center">
                                <span class="text-3xl mr-3 hcmue-text-yellow">🎯</span> Sứ Mệnh
                            </h2>
                            <p class="text-gray-700">Đào tạo đội ngũ nhà giáo, cán bộ quản lý giáo dục chất lượng cao; nghiên cứu khoa học giáo dục, khoa học cơ bản, ứng dụng nhằm phục vụ sự nghiệp đổi mới giáo dục và phát triển đất nước.</p>
                        </div>

                        <div class="bg-gray-50 p-6 rounded-lg shadow-inner">
                            <h2 class="text-2xl font-bold hcmue-text-blue mb-3 flex items-center">
                                <span class="text-3xl mr-3 hcmue-text-yellow">🌟</span> Tầm Nhìn
                            </h2>
                            <p class="text-gray-700">Trở thành trường đại học sư phạm trọng điểm quốc gia, tiên phong trong đổi mới giáo dục, đạt chuẩn khu vực và quốc tế.</p>
                        </div>
                    </div>

                    <div class="mt-12">
                        <h2 class="text-3xl font-bold hcmue-text-blue mb-6">Tin Tức Nổi Bật</h2>
                        <div class="grid md:grid-cols-3 gap-6">
                            <div class="bg-white border rounded-lg p-4 shadow hover:shadow-xl transition duration-300">
                                <p class="text-xs text-gray-500 mb-2">25/11/2025</p>
                                <h3 class="font-semibold text-lg hcmue-text-blue">Khai giảng năm học mới 2025-2026</h3>
                                <p class="text-gray-600 text-sm mt-2 line-clamp-3">Lễ Khai giảng diễn ra long trọng với sự tham dự của đại diện Bộ Giáo dục và Đào tạo cùng hơn 5000 tân sinh viên...</p>
                                <a href="#" class="text-sm hcmue-text-yellow hover:underline mt-2 inline-block">Xem chi tiết</a>
                            </div>
                            <div class="bg-white border rounded-lg p-4 shadow hover:shadow-xl transition duration-300">
                                <p class="text-xs text-gray-500 mb-2">10/11/2025</p>
                                <h3 class="font-semibold text-lg hcmue-text-blue">Hội thảo Khoa học Quốc tế về Ngôn ngữ</h3>
                                <p class="text-gray-600 text-sm mt-2 line-clamp-3">Hội thảo thu hút các chuyên gia từ 15 quốc gia, tập trung thảo luận về các xu hướng nghiên cứu ngôn ngữ học hiện đại...</p>
                                <a href="#" class="text-sm hcmue-text-yellow hover:underline mt-2 inline-block">Xem chi tiết</a>
                            </div>
                            <div class="bg-white border rounded-lg p-4 shadow hover:shadow-xl transition duration-300">
                                <p class="text-xs text-gray-500 mb-2">01/11/2025</p>
                                <h3 class="font-semibold text-lg hcmue-text-blue">Công bố điểm chuẩn tuyển sinh 2025</h3>
                                <p class="text-gray-600 text-sm mt-2 line-clamp-3">Điểm chuẩn các ngành sư phạm ổn định, cho thấy sức hút của nghề giáo trong bối cảnh mới...</p>
                                <a href="#" class="text-sm hcmue-text-yellow hover:underline mt-2 inline-block">Xem chi tiết</a>
                            </div>
                        </div>
                    </div>
                </div>
            `,
            tuyensinh: `
                <div class="bg-white p-8 rounded-xl shadow-2xl">
                    <h1 class="text-4xl font-extrabold text-red-600 mb-6 border-b-4 border-red-600 inline-block pb-1">Thông Tin Tuyển Sinh 2026</h1>
                    <p class="text-gray-700 mb-8">HCMUE tuyển sinh đại học chính quy với nhiều phương thức xét tuyển đa dạng.</p>

                    <div class="space-y-6">
                        <div class="border-l-4 border-red-600 pl-4 bg-red-50 p-4 rounded-lg">
                            <h2 class="text-2xl font-semibold text-red-600 mb-2">1. Xét tuyển thẳng và Ưu tiên xét tuyển</h2>
                            <p class="text-gray-700">Áp dụng cho các thí sinh đạt giải học sinh giỏi quốc gia, quốc tế hoặc có thành tích đặc biệt.</p>
                        </div>
                        <div class="border-l-4 border-red-600 pl-4 bg-red-50 p-4 rounded-lg">
                            <h2 class="text-2xl font-semibold text-red-600 mb-2">2. Xét kết quả thi THPT Quốc gia</h2>
                            <p class="text-gray-700">Sử dụng kết quả các tổ hợp môn trong kỳ thi Tốt nghiệp THPT để xét tuyển.</p>
                        </div>
                        <div class="border-l-4 border-red-600 pl-4 bg-red-50 p-4 rounded-lg">
                            <h2 class="text-2xl font-semibold text-red-600 mb-2">3. Xét tuyển bằng kết quả học bạ</h2>
                            <p class="text-gray-700">Dành cho một số ngành ngoài sư phạm. Chi tiết về điều kiện xét tuyển sẽ được công bố vào tháng 3.</p>
                        </div>
                    </div>

                    <div class="mt-10">
                        <h2 class="text-3xl font-bold hcmue-text-blue mb-4">Lịch Trình Quan Trọng (Dự kiến)</h2>
                        <ul class="list-disc list-inside space-y-3 pl-5 text-gray-700">
                            <li class="font-medium">Mở cổng đăng ký xét tuyển thẳng: <span class="text-red-600 font-bold">Tháng 4</span></li>
                            <li>Phát hành Hồ sơ Tuyển sinh (bản cứng): <span class="font-medium">Tháng 5</span></li>
                            <li class="font-medium">Công bố điểm chuẩn chính thức: <span class="text-red-600 font-bold">Tháng 8</span></li>
                            <li>Nhập học và Khai giảng: <span class="font-medium">Tháng 9</span></li>
                        </ul>
                    </div>
                </div>
            `,
            daotao: `
                <div class="bg-white p-8 rounded-xl shadow-2xl">
                    <h1 class="text-4xl font-extrabold text-green-700 mb-6 border-b-4 border-green-700 inline-block pb-1">Chương Trình Đào Tạo</h1>
                    <p class="text-gray-700 mb-8">Trường đào tạo đa ngành với trọng tâm là các ngành Sư phạm và các ngành ngoài Sư phạm chất lượng cao.</p>

                    <div class="grid md:grid-cols-3 gap-6 mb-10">
                        <div class="bg-green-50 p-5 rounded-lg border border-green-200">
                            <h3 class="text-xl font-bold text-green-700">Đại học Chính quy</h3>
                            <p class="text-sm text-gray-600 mt-1">Bao gồm các ngành Sư phạm và ngoài Sư phạm.</p>
                        </div>
                        <div class="bg-green-50 p-5 rounded-lg border border-green-200">
                            <h3 class="text-xl font-bold text-green-700">Sau Đại học</h3>
                            <p class="text-sm text-gray-600 mt-1">Thạc sĩ và Tiến sĩ các chuyên ngành Giáo dục, Khoa học Xã hội và Tự nhiên.</p>
                        </div>
                        <div class="bg-green-50 p-5 rounded-lg border border-green-200">
                            <h3 class="text-xl font-bold text-green-700">Đào tạo Quốc tế</h3>
                            <p class="text-sm text-gray-600 mt-1">Các chương trình liên kết, trao đổi sinh viên với các trường nước ngoài.</p>
                        </div>
                    </div>

                    <h2 class="text-3xl font-bold hcmue-text-blue mb-4">Các Khoa Chuyên Môn</h2>
                    <ul class="space-y-3">
                        ${['Khoa Toán và Tin học', 'Khoa Ngữ Văn', 'Khoa Lịch sử', 'Khoa Địa lý', 'Khoa Vật lý', 'Khoa Hóa học', 'Khoa Sinh học', 'Khoa Giáo dục Tiểu học', 'Khoa Tiếng Anh', 'Khoa Tâm lý học'].map(khoa => `
                            <li class="flex items-center p-3 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition duration-200">
                                <span class="text-xl mr-3 text-green-600">📚</span> ${khoa}
                            </li>
                        `).join('')}
                    </ul>
                </div>
            `,
            nghiencuu: `
                <div class="bg-white p-8 rounded-xl shadow-2xl">
                    <h1 class="text-4xl font-extrabold text-purple-700 mb-6 border-b-4 border-purple-700 inline-block pb-1">Nghiên Cứu Khoa Học</h1>
                    <p class="text-gray-700 mb-8">HCMUE là trung tâm nghiên cứu uy tín trong lĩnh vực khoa học giáo dục và khoa học cơ bản.</p>

                    <div class="grid md:grid-cols-2 gap-8">
                        <div>
                            <h2 class="text-2xl font-bold text-purple-700 mb-3">Các Lĩnh Vực Trọng Điểm</h2>
                            <ul class="list-disc list-inside space-y-2 pl-4 text-gray-700">
                                <li>Phương pháp giảng dạy mới</li>
                                <li>Giáo dục hòa nhập và đặc biệt</li>
                                <li>Khoa học dữ liệu và AI trong giáo dục</li>
                                <li>Nghiên cứu ứng dụng trong Khoa học Tự nhiên</li>
                            </ul>
                        </div>
                        <div>
                            <h2 class="text-2xl font-bold text-purple-700 mb-3">Tạp chí & Ấn phẩm</h2>
                            <div class="space-y-3">
                                <p class="p-3 bg-purple-50 rounded-md shadow-inner text-gray-800">Tạp chí Khoa học Đại học Sư phạm TP. Hồ Chí Minh</p>
                                <p class="p-3 bg-purple-50 rounded-md shadow-inner text-gray-800">Các công bố quốc tế (ISI/Scopus)</p>
                                <p class="p-3 bg-purple-50 rounded-md shadow-inner text-gray-800">Sách chuyên khảo và giáo trình mới</p>
                            </div>
                        </div>
                    </div>
                </div>
            `,
            lienhe: `
                <div class="bg-white p-8 rounded-xl shadow-2xl">
                    <h1 class="text-4xl font-extrabold text-yellow-600 mb-6 border-b-4 border-yellow-600 inline-block pb-1">Liên Hệ và Bản Đồ</h1>
                    
                    <div class="grid md:grid-cols-2 gap-8">
                        <div>
                            <h2 class="text-2xl font-bold hcmue-text-blue mb-3">Thông Tin Cơ Bản</h2>
                            <p class="text-gray-700 mb-4">Mọi thắc mắc, vui lòng liên hệ qua các kênh chính thức của trường.</p>
                            
                            <ul class="space-y-4">
                                <li class="flex items-start">
                                    <span class="text-xl hcmue-text-yellow mr-3">📍</span>
                                    <div>
                                        <p class="font-semibold hcmue-text-blue">Địa chỉ chính:</p>
                                        <p class="text-gray-700">280 An Dương Vương, Phường 4, Quận 5, TP.HCM</p>
                                    </div>
                                </li>
                                <li class="flex items-start">
                                    <span class="text-xl hcmue-text-yellow mr-3">📞</span>
                                    <div>
                                        <p class="font-semibold hcmue-text-blue">Điện thoại:</p>
                                        <p class="text-gray-700">(028) 38352020 (Phòng Hành chính Tổng hợp)</p>
                                    </div>
                                </li>
                                <li class="flex items-start">
                                    <span class="text-xl hcmue-text-yellow mr-3">📧</span>
                                    <div>
                                        <p class="font-semibold hcmue-text-blue">Email:</p>
                                        <p class="text-gray-700">p.ctctsv@hcmue.edu.vn (Phòng Công tác Sinh viên)</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h2 class="text-2xl font-bold hcmue-text-blue mb-3">Vị Trí Trường (Bản đồ Placeholder)</h2>
                            <div class="w-full h-64 bg-gray-200 flex items-center justify-center rounded-lg shadow-inner border hcmue-border-yellow">
                                <p class="text-gray-500">Bản đồ (Google Maps nhúng)</p>
                            </div>
                        </div>
                    </div>
                </div>
            `,
        };

        function renderPage(pageId) {
            const content = pages[pageId] || pages.trangchu;
            contentArea.innerHTML = content;
            window.scrollTo(0, 0);
        }

        function handleNavigation(event) {
            const target = event.currentTarget.dataset.page;
            if (target) {
                renderPage(target);
                window.location.hash = target;
                mobileMenu.classList.add('hidden');
                event.preventDefault();
            }
        }

        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', handleNavigation);
        });

        function initializePage() {
            const hash = window.location.hash.substring(1);
            const pageId = hash in pages ? hash : 'trangchu';
            renderPage(pageId);
        }

        initializePage();

        window.addEventListener('hashchange', initializePage);
    });
