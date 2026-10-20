/**
 * ============================================================================
 * DỮ LIỆU THƯ & LỜI CHÚC DÀNH CHO MẸ - 20/10 (BẢN CON Ở PHƯƠNG XA)
 * ============================================================================
 * Nội dung bức thư gửi Mẹ được cài đặt mặc định là bức thư chân thành và xúc động
 * của người con ở phương xa gửi về Mẹ kính yêu nhân ngày 20/10.
 */

const LETTER_DATA = {
    // Thông tin mặc định hiển thị giữa trái tim
    defaultCenterText: "Con Yêu Mẹ",
    defaultSubText: "Người phụ nữ tuyệt vời nhất đời con",
    defaultSignature: "Con ở xa nhớ Mẹ nhiều ❤️",

    // Bức thư chính: Bản "Con ở phương xa" gửi Mẹ
    mainLetter: {
        title: "Thư Gửi Mẹ Từ Nơi Phương Xa",
        body: `Mẹ yêu dấu,

Hôm nay 20/10, con ở xa chưa thể về bên Mẹ để tự tay trao tặng Mẹ bó hoa thơm hay ôm Mẹ một cái thật chặt. Nhưng từ nơi phương xa này, từng nhịp tim và suy nghĩ của con lúc nào cũng hướng về Mẹ và mái ấm gia đình.

Trời dạo này bắt đầu trở lạnh, Mẹ nhớ giữ ấm, ăn uống đủ bữa và ngủ thật ngon giấc nhé Mẹ. Mẹ đừng tiếc con mà nhận phần vất vả về mình nữa. Con đang nỗ lực từng ngày để sớm về thăm Mẹ, được ăn bữa cơm ấm áp mẹ nấu – hương vị ngon nhất trần gian.

Con ở xa nhớ và thương Mẹ vô cùng! 💌`,
        sign: "Con ở xa nhớ Mẹ nhiều ❤️"
    },

    presets: [
        {
            id: 0,
            tabTitle: "Con ở phương xa",
            title: "Thư Gửi Mẹ Từ Nơi Phương Xa",
            body: `Mẹ yêu dấu,

Hôm nay 20/10, con ở xa chưa thể về bên Mẹ để tự tay trao tặng Mẹ bó hoa thơm hay ôm Mẹ một cái thật chặt. Nhưng từ nơi phương xa này, từng nhịp tim và suy nghĩ của con lúc nào cũng hướng về Mẹ và mái ấm gia đình.

Trời dạo này bắt đầu trở lạnh, Mẹ nhớ giữ ấm, ăn uống đủ bữa và ngủ thật ngon giấc nhé Mẹ. Mẹ đừng tiếc con mà nhận phần vất vả về mình nữa. Con đang nỗ lực từng ngày để sớm về thăm Mẹ, được ăn bữa cơm ấm áp mẹ nấu – hương vị ngon nhất trần gian.

Con ở xa nhớ và thương Mẹ vô cùng! 💌`,
            sign: "Con ở xa nhớ Mẹ nhiều ❤️"
        }
    ]
};

// Lời chúc riêng chia thành 3 phần: Cảm ơn, Kỷ niệm, Lời hứa
const DEDICATED_WISHES = {
    title: "Lời Chúc Yêu Thương Dành Cho Mẹ",
    subtitle: "Từng dòng chữ viết bằng tất cả lòng biết ơn và kính trọng",
    sections: [
        {
            id: "cam-on",
            tag: "1. LỜI CẢM ƠN",
            icon: "fa-solid fa-heart",
            accentColor: "from-pink-500/20 to-rose-500/20",
            borderColor: "border-pink-400/40",
            heading: "Cảm Ơn Mẹ Vì Một Đời Hy Sinh",
            content: "Con cảm ơn Mẹ vì những đêm thao thức khi con ốm, vì những bữa cơm ngon mẹ nấu dù ngày làm việc có mệt nhoài. Cảm ơn Mẹ đã luôn lặng thầm nhận về mình những vất vả, nhọc nhằn để nhường cho con những gì trọn vẹn nhất. Tình yêu bao la của Mẹ là món quà vô giá mà cả cuộc đời này con không bao giờ đền đáp hết."
        },
        {
            id: "ky-niem",
            tag: "2. KỶ NIỆM ẤM ÁP",
            icon: "fa-solid fa-camera-retro",
            accentColor: "from-amber-500/20 to-rose-500/20",
            borderColor: "border-amber-400/40",
            heading: "Những Ký Ức Đẹp Bên Mẹ",
            content: "Con vẫn nhớ như in những buổi chiều tan trường được Mẹ đón, nhớ ánh mắt dịu hiền và cái xoa đầu ấm áp mỗi khi con làm được điều tốt. Từng kỷ niệm ấu thơ bên Mẹ như một dòng suối trong lành mát rượi, tiếp thêm sức mạnh cho con vượt qua mọi chông gai của cuộc sống."
        },
        {
            id: "loi-hua",
            tag: "3. LỜI HỨA CỦA CON",
            icon: "fa-solid fa-hand-holding-heart",
            accentColor: "from-rose-500/20 to-purple-500/20",
            borderColor: "border-purple-400/40",
            heading: "Lời Hứa Trưởng Thành & Yêu Thương",
            content: "Con hứa sẽ luôn sống thật tốt, biết tự chăm sóc bản thân, nỗ lực hết mình trong học tập và công việc để Mẹ luôn có thể tự hào về con. Và con hứa sẽ dành nhiều thời gian hơn để lắng nghe, ở bên và yêu thương Mẹ thật nhiều, không để Mẹ phải buồn lòng."
        }
    ],
    closing: "Mẹ kính yêu, con chúc Mẹ ngày 20/10 thật nhiều niềm vui, sức khỏe dồi dào và nụ cười luôn nở trên môi! ❤️",
    author: "Con ở xa nhớ Mẹ nhiều ❤️"
};

// Danh sách ảnh kỷ niệm (Album ảnh gia đình)
const MEMORY_GALLERY = [
    {
        id: 1,
        title: "Kỷ niệm 1: Nụ cười của Mẹ",
        quote: "Nụ cười của Mẹ là điều đẹp đẽ và bình yên nhất trần đời",
        caption: "Mẹ luôn là nguồn năng lượng ấm áp nuôi dưỡng tâm hồn con qua từng năm tháng.",
        src: "./Image/1.jpg",
        webp: "./Image/1.webp",
        tag: "Bình yên"
    },
    {
        id: 2,
        title: "Kỷ niệm 2: Bàn tay tảo tần",
        quote: "Cảm ơn Mẹ vì một đời tảo tần sớm hôm vì chúng con",
        caption: "Những hy sinh thầm lặng của Mẹ con luôn khắc sâu trong tim từng ngày.",
        src: "./Image/2.jpg",
        webp: "./Image/2.webp",
        tag: "Biết ơn"
    },
    {
        id: 3,
        title: "Kỷ niệm 3: Mái ấm gia đình",
        quote: "Dù đi xa đến đâu, bên Mẹ con vẫn luôn là đứa trẻ bình yên nhất",
        caption: "Mái ấm có Mẹ là nơi con luôn muốn trở về sau bao giông bão cuộc đời.",
        tag: "Gia đình",
        src: "./Image/3.jpg",
        webp: "./Image/3.webp"
    },
    {
        id: 4,
        title: "Kỷ niệm 4: Nguyện ước an lành",
        quote: "Kính chúc Mẹ một đời an vui, mạnh khỏe và hạnh phúc viên mãn",
        caption: "Cả gia đình mình mãi yêu thương Mẹ thật nhiều. Mẹ mãi là số 1 trong lòng con! ❤️",
        src: "./Image/4.jpg",
        webp: "./Image/4.webp",
        tag: "Yêu thương"
    }
];

if (typeof window !== 'undefined') {
    window.LETTER_DATA = LETTER_DATA;
    window.DEDICATED_WISHES = DEDICATED_WISHES;
    window.MEMORY_GALLERY = MEMORY_GALLERY;
}
