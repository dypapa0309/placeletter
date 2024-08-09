require('dotenv').config({ path: require('path').join(__dirname, '..', '.env') });
const express = require('express');
const nodemailer = require('nodemailer');
const path = require('path');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

console.log('Static files path:', path.join(__dirname, '..', 'public'));

// 환경 변수 확인
console.log('EMAIL_USER:', process.env.EMAIL_USER);
console.log('EMAIL_PASS:', process.env.EMAIL_PASS ? '설정됨' : '설정되지 않음');

// 이메일 전송을 위한 설정
let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

app.post('/api/send-email', async (req, res) => {
    console.log('Received email request:', req.body);
    const { email } = req.body;

    if (!email) {
        console.log('Email address is missing');
        return res.status(400).json({ message: '이메일 주소를 입력해주세요.' });
    }

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        subject: '새로운 멤버십 가입 알림',
        text: `새로운 멤버의 이메일: ${email}`
    };

    try {
        console.log('Attempting to send email...');
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent: ', info.response);
        res.status(200).json({ message: '멤버십 가입이 완료되었습니다.' });
    } catch (error) {
        console.error('Email sending error:', error);
        console.error('Error details:', JSON.stringify(error, null, 2));
        res.status(500).json({ message: '멤버십 가입 중 오류가 발생했습니다. 다시 시도해 주세요.', error: error.message });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log(`Email User: ${process.env.EMAIL_USER}`);
});