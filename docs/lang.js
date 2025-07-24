const translations = {
    zh: {
        title: "FitTrack 减脂营养追踪系统",
        "nav-home": "首页 Home",
        "nav-instructions": "使用说明",
        "nav-example": "示例",
        "nav-download": "模板下载",
        "nav-faq": "常见问题",
        datePrefix: "当前日期：",
        desc: "通过图片识别与三餐记录，帮助你追踪每日膳食、体重变化，并生成个性化建议。",
        "qr-instr": "扫描二维码体验：",
        "bmi-title": "BMI / BMR 计算器",
        "label-weight": "体重（公斤）",
        "label-height": "身高（厘米）",
        "label-age": "年龄",
        "label-gender": "性别",
        "btn-calc": "计算"
    },
    en: {
        title: "FitTrack Nutrition Tracking System",
        "nav-home": "Home",
        "nav-instructions": "Instructions",
        "nav-example": "Examples",
        "nav-download": "Download",
        "nav-faq": "FAQ",
        datePrefix: "Today's Date:",
        desc: "Track your daily meals, weight, and generate reports through image recognition.",
        "qr-instr": "Scan the QR code to try:",
        "bmi-title": "BMI / BMR Calculator",
        "label-weight": "Weight (kg)",
        "label-height": "Height (cm)",
        "label-age": "Age",
        "label-gender": "Gender",
        "btn-calc": "Calculate"
    },
    th: {
        title: "FitTrack ระบบติดตามโภชนาการ",
        "nav-home": "หน้าหลัก",
        "nav-instructions": "วิธีใช้",
        "nav-example": "ตัวอย่าง",
        "nav-download": "ดาวน์โหลดแบบฟอร์ม",
        "nav-faq": "คำถามที่พบบ่อย",
        datePrefix: "วันที่:",
        desc: "ติดตามมื้ออาหาร น้ำหนัก และสร้างรายงานด้วยการรู้จำภาพ",
        "qr-instr": "สแกน QR Code เพื่อทดลอง:",
        "bmi-title": "เครื่องคำนวณ BMI / BMR",
        "label-weight": "น้ำหนัก (กก.)",
        "label-height": "ส่วนสูง (ซม.)",
        "label-age": "อายุ",
        "label-gender": "เพศ",
        "btn-calc": "คำนวณ"
    }
};

function setLang(lang) {
    const t = translations[lang];
    for (let key in t) {
        const el = document.getElementById(key);
        if (el) el.innerText = t[key];
    }
    const now = new Date();
    document.getElementById("date").innerText = t.datePrefix + now.toLocaleDateString(lang === 'th' ? 'th-TH' : lang === 'en' ? 'en-US' : 'zh-CN');
}

function calculateBMI(event) {
    event.preventDefault();
    const w = parseFloat(document.getElementById('weight').value);
    const h = parseFloat(document.getElementById('height').value) / 100;
    const bmi = (w / (h * h)).toFixed(2);
    document.getElementById('result').innerText = "BMI: " + bmi;
}

window.onload = () => setLang('zh');
