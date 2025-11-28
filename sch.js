document.addEventListener('DOMContentLoaded', () => {

    const contentArea = document.getElementById('content-area');
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    const pages = {

        trangchu: `
        <div class="bg-white p-10 rounded-xl shadow-2xl">
            <h1 class="text-4xl font-bold text-blue-700 mb-4">Chào mừng đến với HCMUE</h1>
            <p class="text-gray-700 leading-relaxed">
                Trường Đại học Sư phạm TP.HCM là một trong những trường đại học hàng đầu Việt Nam...
            </p>
        </div>
        `,

        tuyensinh: `
        <div class="bg-white p-8 rounded-xl shadow-xl">
            <h1 class="text-3xl font-bold text-blue-700 mb-4">Thông Tin Tuyển Sinh</h1>
            <p class="text-gray-700">
                Thông tin tuyển sinh sẽ được cập nhật liên tục...
            </p>
        </div>
        `,

        daotao: `
        <div class="bg-white p-8 rounded-xl shadow-xl">
            <h1 class="text-3xl font-bold text-blue-700 mb-4">Các Chương Trình Đào Tạo</h1>
            <p class="text-gray-700">
                Các ngành đào tạo của trường được chia thành nhiều khối chuyên ngành...
            </p>
        </div>
        `,

        nghiencuu: `
        <div class="bg-white p-8 rounded-xl shadow-xl">
            <h1 class="text-3xl font-bold text-blue-700 mb-4">Hoạt Động Nghiên Cứu</h1>
            <p class="text-gray-700">
                Nhà trường chú trọng các hoạt động nghiên cứu khoa học...
            </p>
        </div>
        `,

        lienhe: `
        <div class="bg-white p-8 rounded-xl shadow-2xl">
            <h1 class="text-4xl font-extrabold text-blue-700 mb-6">Liên Hệ</h1>

            <div class="grid md:grid-cols-2 gap-8">

                <div class="bg-blue-50 p-6 rounded-lg border border-blue-200 shadow-inner">
                    <h2 class="text-2xl font-bold text-blue-700 mb-3">Thông Tin Liên Lạc</h2>
                    <ul class="space-y-3 text-gray-700">
                        <li><strong>📍 Địa chỉ:</strong> 280 An Dương Vương, Quận 5</li>
                        <li><strong>☎️ Điện thoại:</strong> (028) 38352020</li>
                        <li><strong>📧 Email:</strong> p.ctctsv@hcmue.edu.vn</li>
                    </ul>
                </div>

                <div class="bg-blue-50 p-6 rounded-lg border border-blue-200 shadow-inner">
                    <h2 class="text-2xl font-bold text-blue-700 mb-3">Gửi Tin Nhắn</h2>
                    <form class="space-y-4">
                        <input type="text" placeholder="Họ và tên" class="w-full p-3 border rounded-lg">
                        <input type="email" placeholder="Email" class="w-full p-3 border rounded-lg">
                        <textarea rows="4" placeholder="Nội dung" class="w-full p-3 border rounded-lg"></textarea>
                        <button type="button" class="w-full hcmue-bg-blue text-white font-bold py-2 rounded-lg">Gửi</button>
                    </form>
                </div>

            </div>
        </div>
        `

    };

    // Render trang
    function renderPage(pageId) {
        contentArea.innerHTML = pages[pageId] || pages.trangchu;
        window.scrollTo(0, 0);
    }

    // Navigation
    function setupNavigation() {
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', e => {
                e.preventDefault();

                const page = link.dataset.page;
                renderPage(page);

                mobileMenu.classList.add('hidden');
            });
        });
    }

    // Load trang ban đầu
    renderPage("trangchu");
    setupNavigation();
});
