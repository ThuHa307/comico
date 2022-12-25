import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './Reading.module.scss';
import Breadcrumb from '../../components/Breadcrumb';
import Button from '../../components/Button';

const cx = classNames.bind(styles);
function Reading() {
    return (
        <div className={cx('wrapper')}>
            <Breadcrumb title="Chuong 1" to="#" path="/read" />
            <div className={cx('container')}>
                <div className={cx('header')}>
                    <h3 className={cx('name-book')}>Xuyên Nhanh: Nam Thần, Bùng Cháy Đi!</h3>
                    <p className={cx('current-chapter')}>Chương 1: Thần hào công lược (1)</p>
                </div>
                <div className={cx('control')}>
                    <Button fullfill ssmall>
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </Button>
                    <select className={cx('chapter-list')}>
                        <option value={1}>Chương 1</option>
                        <option value={2}>Chương 2</option>
                        <option value={3}>Chương 3</option>
                        <option value={4}>Chương 4</option>
                        <option value={5}>Chương 5</option>
                    </select>
                    <Button fullfill ssmall>
                        <FontAwesomeIcon icon={faChevronRight} />
                    </Button>
                </div>
                <div className={cx('content')}>
                    <p className={cx('detail-chapter')}>
                        【 Cô đã chết. 】<br />
                        <br />【 Cô đã chết. 】<br />
                        <br />【 Cô đã chết. 】<br />
                        <br />
                        Nữ sinh nằm rạp trên mặt đất, cô chậm chạp giật giật người, che lỗ tai lại, muốn ngăn cách giọng
                        nói phiền phức của ai đó, nhưng âm thanh giòn tan của hài đồng vẫn có thể y nguyên truyền đến.
                        <br />
                        <br />
                        Từ sâu trong não cô truyền đến.
                        <br />
                        <br />
                        Phiền.
                        <br />
                        <br />
                        Thật là phiền.
                        <br />
                        <br />【 Cô đã chết... Chết rồi...... 】<br />
                        <br />
                        Nữ sinh ôm đầu.
                        <br />
                        <br />
                        Không hề có động tĩnh gì.
                        <br />
                        <br />
                        Thanh âm kia vẫn bám riết không tha, giọng điệu càng ngày càng vui sướng, cuối cùng còn hát lên,
                        tựa như một bài đồng dao.
                        <br />
                        <br />
                        Bận rộn cả một đêm, chỉ muốn ngủ một giấc thật ngon.
                        <br />
                        <br />
                        Ai lại không có đạo đức như thế, hơn nửa đêm trù người.
                        <br />
                        <br />
                        Đừng tưởng rằng ngươi là trẻ con mà có thể muốn làm gì thì làm.
                        <br />
                        <br />
                        Mà còn không phải là trẻ con.
                        <br />
                        <br />
                        Thanh âm kia kiên nhẫn bám riết không tha, giọng điệu càng ngày càng vui sướng.
                        <br />
                        <br />【 Cô đã chết, cô đã chết, cô đã chết... 】<br />
                        <br />
                        Rốt cuộc, nữ sinh ngẩng đầu lên khỏi mặt đất.
                        <br />
                        <br />
                        Sơ Tranh buông cánh tay đang xoa tóc xuống, ánh mắt có chút mơ hồ, lại một trận choáng váng
                        truyền đến, một hồi lâu cô mới nhìn rõ cảnh tượng xung quanh.
                        <br />
                        <br />
                        "!!!"
                        <br />
                        <br />
                        Cô quay đầu đánh giá bốn phía một chút.
                        <br />
                        <br />
                        <br />
                        Đây là nơi quái quỷ nào?
                        <br />
                        <br />
                        Vì sao cô lại ở chỗ này?
                        <br />
                        <br />
                        Bị bắt cóc rồi?
                        <br />
                        <br />
                        Con chó nào không muốn sống mà dám bắt cóc cô? <br />
                        <br />【 Cô đã chết! 】<br />
                        <br />
                        "Ngươi mới chết." Sơ Tranh mặt không cảm xúc phản bác một câu.
                        <br />
                        <br />【 Cô chết thật rồi. 】 Thanh âm kia lại nói, 【 Không tin cô tự soi gương đi. 】<br />
                        <br />
                        Gương...
                        <br />
                        <br />
                        Sơ Tranh dò xét bốn phía, nơi này chắc là một gian phòng bao KTV, cô đứng dậy, đi về phía phòng
                        vệ sinh bên cạnh.
                        <br />
                        <br />
                        Bên trong có tấm gương.
                        <br />
                        <br />
                        Tóc của người trong gương có đủ mọi màu sắc, tựa như Smart (kiểu lòe loẹt đủ màu sắc), cách
                        trang điểm càng dọa người, mặc trên người loại quần áo kỳ lạ cổ quái.
                        <br />
                        <br />
                        Đây đâu phải dung mạo mà cô quen thuộc.
                        <br />
                        <br />
                        Đây là...
                        <br />
                        <br />
                        Con chó nào!!
                        <br />
                        <br />
                        ...
                        <br />
                        <br />
                        Sơ Tranh rất nhanh biết rõ tình huống hiện tại của mình.
                        <br />
                        <br />
                        Cô gặp phải hệ thống trong truyền thuyết.
                        <br />
                        <br />
                        Trước, không nói đến việc cái hệ thống này là từ đâu đến, ai tạo ra, có mục đích gì.
                        <br />
                        <br />
                        Hiện tại việc cô cần làm là ở các thế giới khác nhau hoàn thành nhiệm vụ.
                        <br />
                        <br />
                        Sơ Tranh mặt lạnh lùng.
                        <br />
                        <br />
                        Sau khi hoàn thành nhiệm vụ có thể thu hoạch được cơ hội sống lại.
                        <br />
                        <br />
                        Sơ Tranh y nguyên lạnh mặt.
                        <br />
                        <br />
                        Cô cần gì cơ hội sống lại? Cô không chết! Cô không tiếp thụ loại thiết lập khó hiểu này!
                        <br />
                        <br />【 Mời nhận rõ hiện thực nha! 】- Hệ thống vui sướng cười trên nỗi đau của người khác.
                        <br />
                        <br />
                        <br />
                        Sơ Tranh mặt không biểu tình.
                        <br />
                        <br />
                        Lừa đảo!
                        <br />
                        <br />
                        Hệ thống chỉ coi như không nghe thấy, tiếp tục nói.
                        <br />
                        <br />
                        Cái nhiệm vụ của hệ thống này là làm cho cô ——
                        <br />
                        <br />
                        Phá sản?
                        <br />
                        <br />
                        Không tiêu tiền sẽ chết.
                        <br />
                        <br />
                        Muốn sống phải cố gắng tiêu tiền.
                        <br />
                        <br />
                        Chờ chút!
                        <br />
                        <br />
                        Tại sao phải phá sản? Tiền này từ đâu tới?
                        <br />
                        <br />
                        Hiển nhiên hệ thống không trả lời câu hỏi của cô.
                        <br />
                        <br />【 Đúng vậy, chúng ta cần thông qua thân thể mà cô sử dụng để phá sản, hoàn thành nghịch
                        tập, trở thành người chiến thắng. 】 Giọng nói giòn tan của hài đồng phát ra điểm vui sướng.{' '}
                        <br />
                        <br />【 Xin hãy chuẩn bị tốt để tiếp thu kịch bản. 】<br />
                        <br />
                        Thanh âm vui sướng kia rơi xuống, trong đầu Sơ Tranh đột nhiên một trận đau nhức, vô số ký ức lạ
                        lẫm thoáng hiện ra.
                        <br />
                        <br />
                        Thân thể này tên là Kỷ Sơ Tranh.
                        <br />
                        <br />
                        Mẹ của Kỷ Sơ Tranh qua đời từ sớm, cha cô bình thường bận rộn chuyện của công ty, không có thời
                        gian quan tâm cô, chỉ cần Kỷ Sơ Tranh tìm ông, ông liền lấy tiền cho cô qua loa lấy lệ, dần dần
                        Kỷ Sơ Tranh liền trở nên tùy hứng.
                        <br />
                        <br />
                        Năm cô 13 tuổi, cha cô tái hôn.
                        <br />
                        <br />
                        Mẹ kế mang theo một đứa con gái, cùng cô tuổi tác không chênh lệch nhiều, đổi tên là Kỷ Đồng
                        Đồng.
                        <br />
                        <br />
                        Sau khi hai mẹ con họ đến, Kỷ Sơ Tranh rất không chào đón bọn họ, nhưng mẹ kế đối đãi với cô vô
                        cùng tốt, muốn cái gì liền cho cái đó, giống như cô mới là con gái bà ta, mặc kệ là thân thích
                        hay là người hầu đều cảm thấy mẹ kế không tồi, mà Kỷ Sơ Tranh lại quá không hiểu chuyện.
                        <br />
                        <br />
                        Kì thật mẹ kế là muốn đem cô nuôi phế.
                        <br />
                        <br />
                        Kỷ Sơ Tranh cũng trở thành người như mẹ kế muốn, hút thuốc uống rượu, đánh nhau ẩu đả, chỉ thiếu
                        giết người phóng hỏa nữa thôi.
                        <br />
                        <br />
                        Mỗi lần đều làm cha Kỷ tức giận đến mức thiếu chút nữa là phát bệnh tim.
                        <br />
                        <br />
                        So sánh với cô, Kỷ Đồng Đồng nhu thuận lại hiểu chuyện, tạo được niềm vui cho cha Kỷ.
                        <br />
                        <br />
                        <br />
                        Chỉ cần Kỷ Sơ Tranh và Kỷ Đồng Đồng cãi nhau, cha Kỷ cuối cùng đều cảm thấy là do Kỷ Sơ Tranh
                        sai.
                        <br />
                        <br />
                        Thế nhưng không có ai biết, có rất nhiều chuyện đều là Kỷ Đồng Đồng thiết kế hại cô. Cô muốn nói
                        cho cha Kỷ, nhưng mà cha Kỷ đã bị Kỷ Đồng Đồng lừa gạt, căn bản sẽ không tin tưởng cô, chỉ cảm
                        thấy cô cố tình gây sự, khi dễ Kỷ Đồng Đồng.
                        <br />
                        <br />
                        Kỷ Đồng Đồng vĩnh viễn là thuần khiết tốt đẹp.
                        <br />
                        <br />
                        Bị chị kế ác độc bắt nạt, là một đóa bách hợp yếu đuối cần bảo vệ.
                        <br />
                        <br />
                        Bởi vậy Kỷ Sơ Tranh càng thêm phản nghịch.
                        <br />
                        <br />Ở trong mắt mọi người, cô là đứa trẻ hư, là người xấu cần phải dạy dỗ lại. Cuối cùng còn
                        bị Kỷ Đồng Đồng thiết kế hãm hại, mất đi trong sạch của bản thân.
                        <br />
                        <br />
                        Ngay cả người mình thích cũng bị Kỷ Đồng Đồng cướp đi, cảm thấy cô là một người phụ nữ xấu xa,
                        còn Kỷ Đồng Đồng thuần khiết tốt đẹp, lương thiện ôn nhu.
                        <br />
                        <br />
                        Cuối cùng Kỷ Sơ Tranh rơi vào cảnh thân bại danh liệt, tinh thần thất thường, sau đó được đưa
                        vào bệnh viện tâm thần, khi Kỷ Đồng Đồng đến gặp cô, mới nói cho cô tất cả.
                        <br />
                        <br />
                        Những chuyện đó hết thảy đều là mẹ con bọn họ tính toán kỹ.
                        <br />
                        <br />
                        Bọn họ muốn cô biến thành cái dạng này, bị đuổi ra khỏi nhà, mất đi hết tất cả của Kỷ gia.
                        <br />
                        <br />
                        Sau khi Kỷ Sơ Tranh biết được chân tướng, không bao lâu liền tự sát.
                        <br />
                        <br />
                        Mà Kỷ Đồng Đồng cùng người kết hôn sinh con, kế thừa Kỷ gia, cuối cùng hạnh phúc cả đời.
                        <br />
                        <br />
                        ...
                        <br />
                        <br />
                        Sơ Tranh xoa huyệt thái dương có chút đau nhức, tiêu hóa những ký ức lạ lẫm thuộc về cỗ thân thể
                        này.
                        <br />
                        <br />
                        Thời điểm chủ nhân của thân thể này chết đi, cỗ oán hận kia, dường như cô cũng có thể cảm nhận
                        được.
                        <br />
                        <br />
                        Nhưng đây không phải là cô.
                        <br />
                        <br />
                        Sơ Tranh đứng trước một cái bàn, trên mặt bàn có một con dao, không biết là ai làm rơi ở đây.
                        <br />
                        <br />
                        【... Cô muốn làm gì!! 】 Âm thanh hài đồng trở nên hoảng sợ <br />
                        <br />【 Nhiệm vụ của chúng ta là bại gia nghịch tập, không phải cầm dao chém chết đám người
                        kia, cô bình tĩnh một chút. 】<br />
                        <br />
                        Sơ Tranh không để ý đến thanh âm kia, cầm dao, đối với cổ tay khoa tay một chút, sau đó bỗng
                        nhiên rạch xuống.
                        <br />
                        <br />
                        Máu tươi chảy ra.
                        <br />
                        <br />
                        Giọt trên mặt đất.
                        <br />
                        <br />
                        Nở ra từng đoá từng đoá hoa đỏ tươi.
                        <br />
                        <br />
                        Sơ Tranh lần nữa mở mắt, vẫn ghé vào chỗ cũ.
                        <br />
                        <br />
                        Cảnh tượng giống nhau, diện mạo gống nhau, cùng một tư thế, không có chút biến hóa nào.
                        <br />
                        <br />
                        "..."
                        <br />
                        <br />【 Vô dụng, trừ phi cô hoàn thành nhiệm vụ, bằng không thì cô sẽ một mực lặp lại cảnh
                        tượng này. 】 Âm thanh hài đồng ngữ điệu vui sướng, không chút nào che giấu nó đang cười trên
                        nỗi đau của người khác.
                        <br />
                        <br />
                        "..." <br />
                        <br />
                        <br />
                        Còn có loại thao tác này?
                        <br />
                        <br />" Hệ thống các ngươi hiện tại cũng là kiểu ép mua ép bán này à?"
                        <br />
                        <br />
                        Chỗ nào có thể khiếu nại.
                        <br />
                        <br />
                        Loại hệ thống lòng dạ hiểm độc này.
                        <br />
                        <br />
                        Nhất định phải khiếu nại!!
                        <br />
                        <br />
                        Sơ Tranh ngồi dưới đất, trên mặt bàn, con dao kia an tĩnh nằm đó.
                        <br />
                        <br />
                        Không biết qua bao lâu, Sơ Tranh lần nữa cầm lấy con dao kia, hai tay cô cầm dao, hướng về phía
                        trái tim mình đâm vào.
                        <br />
                        <br />
                        "A!"
                        <br />
                        <br />
                        Cửa bị đẩy ra, tiếng thét chói tai đột ngột vang lên, xuyên qua màng nhĩ Sơ Tranh.
                        <br />
                        <br />
                        Tự dưng lại hét lên, quá ồn ào.
                        <br />
                        <br />
                        Đây là suy nghĩ cuối cùng của Sơ Tranh trước khi rơi vào bóng tối.
                        <br />
                        <br />
                        Bóng tối chỉ tiếp diễn vài giây, cô lại mở mắt, vẫn như cũ ở đó...
                        <br />
                        <br />
                        Thời điểm sống lại sau khi chết là cái công nghệ đen gì?
                        <br />
                        <br />【 Từ bỏ đi. Chỉ cần cô cố gắng làm nhiệm vụ, là có thể phục sinh trở về nha. 】 Hệ thống
                        hướng dẫn từng bước.
                        <br />
                        <br />
                        Có lẽ là chết không đúng cách.
                        <br />
                        <br />
                        【...】
                        <br />
                        <br />
                        Sau đó Sơ Tranh biểu hiện ra các loại kiểu chết.
                        <br />
                        <br />
                        Nhưng bất kể là làm thế nào, cuối cùng cô đều tỉnh lại từ trong căn phòng này.
                        <br />
                        <br />
                        Sơ Tranh sờ cổ tay, ngồi dưới đất, không biết đang suy nghĩ gì.
                        <br />
                        <br />
                        Cái thanh âm đáng chán ghét kia không ngừng vang lên trong đầu cô, làm Sơ Tranh rất muốn đập tan
                        nó.
                        <br />
                        <br />
                        【...】
                        <br />
                        <br />
                        Cuối cùng Sơ Tranh không thể không tiếp nhận, cỗ thân thể này của cô, hiện tại trải qua hết
                        thảy, cùng với cái hệ thống khó hiểu kia.
                        <br />
                        <br />
                        Cô bị nhốt ở một nơi kỳ quái.
                        <br />
                        <br />
                        Không làm nhiệm vụ thì không thể quay về.
                        <br />
                        <br />
                        Về phần hệ thống nói —— cô chết.
                        <br />
                        <br />
                        Hoàn! Toàn! Không! Tin!
                        <br />
                        <br />
                        Lừa gạt! Người!
                        <br />
                    </p>
                </div>
                <div className={cx('control')}>
                    <Button fullfill ssmall>
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </Button>
                    <select className={cx('chapter-list')}>
                        <option value={1}>Chương 1</option>
                        <option value={2}>Chương 2</option>
                        <option value={3}>Chương 3</option>
                        <option value={4}>Chương 4</option>
                        <option value={5}>Chương 5</option>
                    </select>
                    <Button fullfill ssmall>
                        <FontAwesomeIcon icon={faChevronRight} />
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Reading;
