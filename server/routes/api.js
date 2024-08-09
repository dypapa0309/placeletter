const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs').promises;
const subscriberController = require('../controllers/subscriberController');

router.post('/subscribe', subscriberController.addSubscriber);

router.get('/content', async (req, res) => {
    try {
        const contentPath = path.join(__dirname, '..', 'data', 'content.json');
        const content = await fs.readFile(contentPath, 'utf8');
        res.json(JSON.parse(content));
    } catch (error) {
        console.error('콘텐츠 로드 중 오류:', error);
        res.status(500).json({ message: '콘텐츠를 불러오는 데 실패했습니다.' });
    }
});

module.exports = router;