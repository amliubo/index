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
        fontSize: '30px',
        // textAlign: 'center',
        color: '#00FFF6',
        letterSpacing: '3px',
        textShadow: '0px 0px 10px rgba(0, 255, 246, 0.6)',
        fontWeight: '400'
    },
    paragraph: {
        fontSize: '18px',
        color: '#E0E0E0',
        marginTop: '20px',
        letterSpacing: '1px',
        fontWeight: '400'
    }
};

const AboutInfo = () => (
    <div style={styles.container}>
        <div style={styles.title}>DeepCraft</div>
        <p style={styles.paragraph}>基于 DeepSeek-R1 接口实现的智能工具，旨在提升工作效率与创造力。</p>
        <p style={styles.paragraph}>
            融合自然语言处理、帮助你轻松处理文本、数据分析、代码生成等任务。无论你是开发者、内容创作者还是数据分析师，
            DeepCraft 都能提供强大的 AI 赋能，助力高效创作与决策。
        </p>
    </div>
);

export default AboutInfo;
