import React from 'react';

const styles = {
    container: {
        color: '#E0E0E0',
        fontFamily: '"Orbitron", "Rajdhani", sans-serif',
        fontSize: '14px',
        maxWidth: '800px',
        margin: '0 auto',
        paddingTop: '80px',
        textAlign: 'left'
    },
    title: {
        fontSize: '20px',
        textAlign: 'center',
        color: '#00FFF6',
        letterSpacing: '2px',
        textShadow: '0px 0px 10px rgba(0, 255, 246, 0.6)',
        fontWeight: '400'
    },
    section: {
        fontSize: '14px',
        color: '#00FFF6',
        marginTop: '20px',
        letterSpacing: '1px',
        textShadow: '0px 0px 5px rgba(0, 255, 246, 0.5)',
        fontWeight: '400'
    },
    link: {
        color: '#00FFF6',
        textDecoration: 'none'
    }
};

const Support = () => (
    <div style={styles.container}>
        <div style={styles.title}>支持中心</div>
        <p>如果您在使用过程中遇到问题，请参考以下常见问题，或者通过电子邮件联系我们。</p>

        <div style={styles.section}>常见问题（FAQ）</div>
        <p><strong>1. 如何注册和登录？</strong><br />您可以使用邮箱进行注册。如果忘记密码，可以通过 "找回密码" 功能重置。</p>
        <p><strong>2. 遇到 AI 聊天无法响应怎么办？</strong><br />请检查您的网络连接，并确保服务器可用。如果问题仍然存在，请联系支持团队。</p>
        <p><strong>3. 如何提交 Bug 或建议？</strong><br />请通过电子邮件 <a href="mailto:amliubo@163.com" style={styles.link}>amliubo@163.com</a> 反馈您的问题，我们会尽快处理。</p>

        <div style={styles.section}>联系我们</div>
        <p>如果您需要进一步的帮助，请通过以下方式联系我们：</p>
        <ul>
            <li>电子邮件: <a href="mailto:amliubo@163.com" style={styles.link}>amliubo@163.com</a></li>
        </ul>
    </div>
);

export default Support;
