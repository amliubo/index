import React from 'react';

const styles = {
    container: {
        color: '#E0E0E0',
        fontFamily: '"Orbitron", "Rajdhani", sans-serif',
        fontSize: '16px',
        lineHeight: '1.8',
        maxWidth: '800px',
        margin: '0 auto',
        paddingTop: '80px',
        textAlign: 'left'
    },
    title: {
        fontSize: '28px',
        textAlign: 'center',
        color: '#00FFF6',
        letterSpacing: '2px',
        textShadow: '0px 0px 10px rgba(0, 255, 246, 0.6)',
        fontWeight: '400'
    },
    section: {
        fontSize: '20px',
        color: '#00FFF6',
        marginTop: '20px',
        letterSpacing: '1px',
        textShadow: '0px 0px 5px rgba(0, 255, 246, 0.5)',
        fontWeight: '400'
    },
    list: {
        marginLeft: '20px',
        listStyleType: 'disc',
    },
    link: {
        color: '#00FFF6',
        textDecoration: 'none'
    }
};

const PrivacyPolicy = () => (
    <div style={styles.container}>
        <div style={styles.title}>隐私协议</div>
        <p>更新日期：2025年2月16日</p>

        <div style={styles.section}>1. 信息收集</div>
        <p>在您使用 DeepCraft 过程中，我们可能会收集以下信息：</p>
        <ul style={styles.list}>
            <li><strong>账户信息：</strong>如您的用户名、电子邮件等（用于身份验证）。</li>
            <li><strong>设备信息：</strong>如设备型号、操作系统、IP 地址（用于优化用户体验和安全性）。</li>
            <li><strong>聊天数据：</strong>您与 AI 交互的内容，仅用于提供服务，不会用于其他用途。</li>
            <li><strong>应用使用数据：</strong>如使用时长、功能交互情况（用于改进服务）。</li>
        </ul>

        <div style={styles.section}>2. 信息使用</div>
        <p>我们收集的信息主要用于：</p>
        <ul style={styles.list}>
            <li>提供、维护和改进 DeepCraft 的功能与服务。</li>
            <li>向您提供技术支持和重要通知。</li>
            <li>保障数据安全，防止欺诈或滥用行为。</li>
            <li>分析用户行为，优化 AI 交互体验。</li>
        </ul>

        <div style={styles.section}>3. 信息存储</div>
        <p>您的数据将安全存储在我们的服务器上，我们会采取合理措施防止数据泄露或未经授权访问。</p>
        <p>如果您希望删除您的个人数据，请联系我们（详见“联系我们”）。</p>

        <div style={styles.section}>4. 信息共享</div>
        <p>我们不会出售、出租或泄露您的个人信息，除非：</p>
        <ul style={styles.list}>
            <li>符合法律法规或政府要求。</li>
            <li>保护我们或其他用户的合法权益。</li>
            <li>在获得您的明确同意后，向合作伙伴提供必要信息（如 AI 技术提供方）。</li>
        </ul>

        <div style={styles.section}>5. 数据安全</div>
        <p>我们采取加密存储、访问控制等安全措施，确保您的个人数据安全。</p>
        <p>但请注意，互联网传输并非绝对安全，您需自行承担一定风险。</p>

        <div style={styles.section}>6. 第三方服务</div>
        <p>DeepCraft 可能集成第三方 AI 模型或 API（如 DeepSeek-R1）。请参考这些服务提供商的隐私政策。</p>

        <div style={styles.section}>7. 儿童隐私</div>
        <p>DeepCraft 不适用于 13 岁以下儿童，我们不会有意收集儿童信息，如有发现，请联系我们删除相关数据。</p>

        <div style={styles.section}>8. 用户权利</div>
        <p>您可随时联系我们以访问、修改或删除您的个人信息。</p>

        <div style={styles.section}>9. 隐私协议更新</div>
        <p>我们可能会更新本隐私协议，修改后将在本页面通知您，建议定期查看。</p>

        <div style={styles.section}>10. 联系我们</div>
        <p>如有任何隐私问题，请通过以下方式联系我们：</p>
        <ul style={styles.list}>
            <li>电子邮件: <a href="mailto:amliubo@163.com" style={styles.link}>amliubo@163.com</a></li>
        </ul>
    </div>
);

export default PrivacyPolicy;
