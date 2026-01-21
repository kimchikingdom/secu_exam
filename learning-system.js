// 정보보안 학습 시스템 메인 스크립트

// 전역 변수
let currentCategory = '';
let currentFlashcardIndex = 0;
let currentQuizTopic = 'vuln-spring4shell';
let quizResults = {};

// 학습 데이터 (주차별 학습 경로)
const learningData = {
    vulnerability: {
        title: '🔍 취약점 진단',
        weeks: [
            {
                week: '1주차',
                title: '기초 이론',
                topics: [
                    '취약점 진단 방법론 이해',
                    '정부 표준 진단 기준 학습',
                    '점검 결과 보고서 작성법'
                ]
            },
            {
                week: '2주차',
                title: 'Spring4Shell CVE 분석',
                topics: [
                    'CVE-2022-22965 요약 보고서 읽기',
                    '기술 노트로 핵심 이해',
                    '상세 기술백서로 원리 학습',
                    '방어 대응 백서 학습'
                ]
            },
            {
                week: '3주차',
                title: 'TeamCity CVE 분석',
                topics: [
                    'CVE-2024-27198 기술 분석',
                    '인증 우회 메커니즘 이해',
                    'RCE 가능성 파악',
                    '실제 공격 사례 분석'
                ]
            },
            {
                week: '4주차',
                title: '진단 도구 및 Linux',
                topics: [
                    'Secure Scanner 분석',
                    'sqlmap 학습 및 실습',
                    'Linux 설정 파일 취약점 진단 (/etc/passwd, sshd_config 등)',
                    '점검 결과 보고서 분석'
                ]
            },
            {
                week: '5주차',
                title: 'CTF 실습',
                topics: [
                    'CTF 문제 풀이 (웹 취약점)',
                    'CTF 문제 풀이 (시스템 보안)',
                    '실제 점검 보고서 작성 연습',
                    '취약점 기술 설명 작성'
                ]
            }
        ]
    },
    pentest: {
        title: '⚔️ 모의해킹',
        weeks: [
            {
                week: '1주차',
                title: '공격 원리 이해',
                topics: [
                    'Spring4Shell 공격 기법 분석',
                    'TeamCity CVE 공격 경로 학습',
                    '공격 Payload 구조 파악',
                    'WAF 우회 기법 연구'
                ]
            },
            {
                week: '2주차',
                title: '공격 코드 분석',
                topics: [
                    'Spring4Shell Exploit 코드 분석',
                    'TeamCity Exploit 코드 이해',
                    'Payload 생성 로직 학습',
                    '코드 커스터마이징 연습'
                ]
            },
            {
                week: '3주차',
                title: '공격 도구 활용',
                topics: [
                    'sqlmap 실습 (SQL Injection)',
                    'Blind SQL Injection 기법',
                    'Tomcat 공격 기법',
                    'Packet Storm 정보 수집'
                ]
            },
            {
                week: '4주차',
                title: '실습 및 시나리오',
                topics: [
                    'CTF 문제 풀이 (공격 기법)',
                    '공격 시나리오 설계 #1',
                    '공격 시나리오 설계 #2',
                    '다단계 공격 이해'
                ]
            }
        ]
    },
    network: {
        title: '🌐 네트워크&리눅스',
        weeks: [
            {
                week: '1주차',
                title: '네트워크 기초',
                topics: [
                    'TCP/IP 프로토콜 스택',
                    'OSI 7계층 모델',
                    'NAT 및 네트워킹',
                    '트래픽 흐름 및 라우팅'
                ]
            },
            {
                week: '2주차',
                title: '리눅스 기초',
                topics: [
                    '파일 시스템 및 권한',
                    '디스크 관리',
                    '클라우드 컴퓨팅 개념',
                    '리눅스 명령어 실습'
                ]
            },
            {
                week: '3주차',
                title: '가상화 & Docker',
                topics: [
                    '가상화 기술 개론',
                    'Docker 기초 및 설치',
                    'Docker 명령어 실습',
                    'Dockerfile 작성 및 이미지 생성'
                ]
            },
            {
                week: '4주차',
                title: 'Kubernetes 기초',
                topics: [
                    'K8S 아키텍처',
                    'kubectl 명령어',
                    'Pod 개념 및 생성',
                    'Controller 이해'
                ]
            },
            {
                week: '5주차',
                title: 'Kubernetes 심화',
                topics: [
                    'Service 및 네트워킹',
                    'Ingress 설정',
                    'Auto Scaling',
                    'DevOps 및 CI/CD'
                ]
            },
            {
                week: '6주차',
                title: '리눅스 보안 설정',
                topics: [
                    '인증 및 권한 설정 (passwd, shadow, sudoers)',
                    'SSH 및 네트워크 보안',
                    'PAM 및 비밀번호 정책',
                    '시스템 로깅 및 모니터링'
                ]
            },
            {
                week: '7주차',
                title: '통합 실습',
                topics: [
                    'K8S 보안 설정',
                    'Docker + K8S 통합 구성',
                    '보안 설정 적용 및 검증',
                    '취약점 진단 연계'
                ]
            }
        ]
    }
};

// 초기화
document.addEventListener('DOMContentLoaded', function() {
    loadQuizTopic();
    loadFlashcards();
    updateStats();

    // 학습 시작일 설정
    if (!localStorage.getItem('securityLearningStartDate')) {
        localStorage.setItem('securityLearningStartDate', new Date().toISOString());
    }
});

// 탭 전환
function showTab(tabName) {
    document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));

    event.target.classList.add('active');
    document.getElementById(tabName).classList.add('active');

    if (tabName === 'progress') {
        updateStats();
    } else if (tabName === 'quiz') {
        loadQuizTopic();
    } else if (tabName === 'flashcard') {
        loadFlashcards();
    }
}

// 카테고리 표시
function showCategory(category) {
    if (category === 'soc') {
        alert('보안관제 과정은 준비 중입니다!');
        return;
    }

    currentCategory = category;
    document.querySelector('.category-grid').style.display = 'none';
    document.getElementById('category-detail').style.display = 'block';

    const data = learningData[category];
    let html = `<h2 style="margin: 20px 0;">${data.title}</h2>`;

    data.weeks.forEach((week, weekIndex) => {
        html += `
            <div class="week-section">
                <div class="week-header" onclick="toggleWeek(${weekIndex})">
                    <span><strong>${week.week}:</strong> ${week.title}</span>
                    <span>▼</span>
                </div>
                <div class="week-content" id="week-${weekIndex}">
        `;

        week.topics.forEach((topic, topicIndex) => {
            const isCompleted = getProgress(category, weekIndex, topicIndex);
            html += `
                <div class="topic-item ${isCompleted ? 'completed' : ''}">
                    <input type="checkbox"
                           id="topic-${weekIndex}-${topicIndex}"
                           ${isCompleted ? 'checked' : ''}
                           onchange="saveProgress('${category}', ${weekIndex}, ${topicIndex})">
                    <label for="topic-${weekIndex}-${topicIndex}">${topic}</label>
                </div>
            `;
        });

        html += `
                </div>
            </div>
        `;
    });

    document.getElementById('category-content').innerHTML = html;
}

function backToCategories() {
    document.querySelector('.category-grid').style.display = 'grid';
    document.getElementById('category-detail').style.display = 'none';
}

function toggleWeek(weekIndex) {
    const weekContent = document.getElementById(`week-${weekIndex}`);
    weekContent.classList.toggle('active');
}

// 진도 저장 및 불러오기
function saveProgress(category, weekIndex, topicIndex) {
    let progress = JSON.parse(localStorage.getItem('securityLearningProgress') || '{}');
    if (!progress[category]) progress[category] = {};
    if (!progress[category][weekIndex]) progress[category][weekIndex] = [];

    const index = progress[category][weekIndex].indexOf(topicIndex);
    if (index === -1) {
        progress[category][weekIndex].push(topicIndex);
    } else {
        progress[category][weekIndex].splice(index, 1);
    }

    localStorage.setItem('securityLearningProgress', JSON.stringify(progress));
    updateStats();
}

function getProgress(category, weekIndex, topicIndex) {
    const progress = JSON.parse(localStorage.getItem('securityLearningProgress') || '{}');
    return progress[category]?.[weekIndex]?.includes(topicIndex) || false;
}

function updateStats() {
    const progress = JSON.parse(localStorage.getItem('securityLearningProgress') || '{}');
    let totalTopics = 0;
    let completedTopics = 0;

    Object.keys(learningData).forEach(category => {
        learningData[category].weeks.forEach((week, weekIndex) => {
            totalTopics += week.topics.length;
            completedTopics += progress[category]?.[weekIndex]?.length || 0;
        });
    });

    const totalProgress = totalTopics > 0 ? Math.round((completedTopics / totalTopics) * 100) : 0;

    document.getElementById('total-progress').textContent = totalProgress + '%';
    document.getElementById('completed-topics').textContent = completedTopics;

    // 카테고리별 진도
    ['vulnerability', 'pentest', 'network'].forEach(category => {
        let categoryTotal = 0;
        let categoryCompleted = 0;

        learningData[category].weeks.forEach((week, weekIndex) => {
            categoryTotal += week.topics.length;
            categoryCompleted += progress[category]?.[weekIndex]?.length || 0;
        });

        const categoryProgress = categoryTotal > 0 ? Math.round((categoryCompleted / categoryTotal) * 100) : 0;
        const progressBar = document.getElementById(`progress-${category}`);
        if (progressBar) {
            progressBar.style.width = categoryProgress + '%';
            progressBar.textContent = categoryProgress + '%';
        }
    });

    // 학습 일수
    const startDate = localStorage.getItem('securityLearningStartDate');
    const days = Math.floor((new Date() - new Date(startDate || new Date())) / (1000 * 60 * 60 * 24));
    document.getElementById('study-days').textContent = days;

    // 퀴즈 점수 계산
    const allResults = Object.values(quizResults);
    if (allResults.length > 0) {
        const totalCorrect = allResults.filter(r => r).length;
        const quizScore = Math.round((totalCorrect / allResults.length) * 100);
        document.getElementById('quiz-score').textContent = quizScore + '%';
        localStorage.setItem('securityQuizScore', quizScore);
    } else {
        const savedScore = localStorage.getItem('securityQuizScore') || '0';
        document.getElementById('quiz-score').textContent = savedScore + '%';
    }
}

// 퀴즈 기능
function loadQuizTopic() {
    currentQuizTopic = document.getElementById('quiz-topic').value;
    const quiz = quizDatabase[currentQuizTopic];

    if (!quiz) {
        document.getElementById('quiz-container').innerHTML = '<div class="empty-state"><div class="empty-state-icon">📝</div><p>퀴즈를 불러오는 중...</p></div>';
        return;
    }

    quizResults = {};

    // 통계 표시
    let statsHtml = `
        <div class="quiz-stats">
            <div class="quiz-stat">
                <div class="quiz-stat-number">${quiz.questions.length}</div>
                <div class="quiz-stat-label">문제 수</div>
            </div>
            <div class="quiz-stat">
                <div class="quiz-stat-number" id="current-correct">0</div>
                <div class="quiz-stat-label">정답</div>
            </div>
            <div class="quiz-stat">
                <div class="quiz-stat-number" id="current-wrong">0</div>
                <div class="quiz-stat-label">오답</div>
            </div>
            <div class="quiz-stat">
                <div class="quiz-stat-number" id="current-score">0%</div>
                <div class="quiz-stat-label">정답률</div>
            </div>
        </div>
    `;

    document.getElementById('quiz-stats-container').innerHTML = statsHtml;

    // 퀴즈 문제 표시
    let html = `<h3>${quiz.title}</h3>`;

    quiz.questions.forEach((question, qIndex) => {
        html += `
            <div class="quiz-container">
                <div class="quiz-question">Q${qIndex + 1}. ${question.q}</div>
                <div class="quiz-options" id="options-${qIndex}">
        `;

        question.options.forEach((option, optIndex) => {
            html += `
                <div class="quiz-option" onclick="checkAnswer(${qIndex}, ${optIndex}, ${question.correct})">
                    ${optIndex + 1}. ${option}
                </div>
            `;
        });

        html += `
                </div>
                <div class="quiz-explanation" id="explanation-${qIndex}">
                    <strong>💡 해설:</strong> ${question.exp}
                </div>
            </div>
        `;
    });

    document.getElementById('quiz-container').innerHTML = html;
}

function checkAnswer(qIndex, answerIndex, correctIndex) {
    const optionsContainer = document.getElementById(`options-${qIndex}`);
    const options = optionsContainer.querySelectorAll('.quiz-option');
    const explanation = document.getElementById(`explanation-${qIndex}`);

    // 이미 답변한 문제는 무시
    if (options[0].classList.contains('disabled')) return;

    // 모든 옵션 비활성화
    options.forEach(opt => opt.classList.add('disabled'));

    // 정답/오답 표시
    if (answerIndex === correctIndex) {
        options[answerIndex].classList.add('correct');
        quizResults[qIndex] = true;
    } else {
        options[answerIndex].classList.add('wrong');
        options[correctIndex].classList.add('correct');
        quizResults[qIndex] = false;
    }

    // 해설 표시
    explanation.classList.add('show');

    // 통계 업데이트
    updateQuizStats();
}

function updateQuizStats() {
    const results = Object.values(quizResults);
    const correct = results.filter(r => r).length;
    const wrong = results.filter(r => !r).length;
    const total = results.length;
    const score = total > 0 ? Math.round((correct / total) * 100) : 0;

    document.getElementById('current-correct').textContent = correct;
    document.getElementById('current-wrong').textContent = wrong;
    document.getElementById('current-score').textContent = score + '%';

    updateStats();
}

// 플래시카드 기능
function loadFlashcards() {
    const category = document.getElementById('flashcard-category').value;
    currentFlashcardIndex = 0;
    showFlashcard();
}

function showFlashcard() {
    const category = document.getElementById('flashcard-category').value;
    const cards = flashcardDatabase[category];

    if (!cards || cards.length === 0) {
        document.getElementById('flashcard-container').innerHTML = '<div class="empty-state"><div class="empty-state-icon">🎴</div><p>플래시카드를 불러오는 중...</p></div>';
        return;
    }

    const card = cards[currentFlashcardIndex];

    const html = `
        <div class="flashcard" onclick="this.classList.toggle('flipped')">
            <div class="flashcard-inner">
                <div class="flashcard-front">
                    ${card.front}
                </div>
                <div class="flashcard-back">
                    ${card.back.replace(/\n/g, '<br>')}
                </div>
            </div>
        </div>
    `;

    document.getElementById('flashcard-container').innerHTML = html;
    document.getElementById('flashcard-counter').textContent = `${currentFlashcardIndex + 1} / ${cards.length}`;
}

function prevFlashcard() {
    const category = document.getElementById('flashcard-category').value;
    const cards = flashcardDatabase[category];
    currentFlashcardIndex = (currentFlashcardIndex - 1 + cards.length) % cards.length;
    showFlashcard();
}

function nextFlashcard() {
    const category = document.getElementById('flashcard-category').value;
    const cards = flashcardDatabase[category];
    currentFlashcardIndex = (currentFlashcardIndex + 1) % cards.length;
    showFlashcard();
}

// 진도 내보내기/초기화
function exportProgress() {
    const progress = localStorage.getItem('securityLearningProgress') || '{}';
    const startDate = localStorage.getItem('securityLearningStartDate') || new Date().toISOString();
    const quizScore = localStorage.getItem('securityQuizScore') || '0';

    const data = {
        progress: JSON.parse(progress),
        startDate: startDate,
        quizScore: quizScore,
        exportDate: new Date().toISOString()
    };

    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `보안학습_진도_${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);

    alert('진도가 내보내기 되었습니다!');
}

function resetProgress() {
    if (confirm('정말로 모든 학습 진도를 초기화하시겠습니까?\n\n이 작업은 되돌릴 수 없습니다.')) {
        localStorage.removeItem('securityLearningProgress');
        localStorage.removeItem('securityLearningStartDate');
        localStorage.removeItem('securityQuizScore');
        quizResults = {};
        updateStats();
        alert('학습 진도가 초기화되었습니다.');
        location.reload();
    }
}