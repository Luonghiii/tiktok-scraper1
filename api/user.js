// Import hàm main từ thư viện
// Lưu ý: Cậu cần check xem file build ra nằm ở đâu (thường là dist/index.js hoặc src/main.ts)
// Ở đây tớ dùng thẳng source TS vì Vercel hỗ trợ compile
import { TTScraper } from '../src/main';

export default async function handler(req, res) {
    const { username } = req.query;

    if (!username) return res.status(400).json({ error: 'Thiếu username' });

    try {
        const scraper = new TTScraper();
        const user = await scraper.user(username).fetch();
        
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
