// 클라우드 기반의 보안 컨설팅 실무 - 60문제
// 새로운 스크린샷 3개와 기존 자료를 종합하여 재구성

const consultQuestions = {
    examQuestions: {
        security_consulting: {
            title: '클라우드 기반의 보안 컨설팅 실무',
            questions: [
                // 기본 개념 (CIA, 보안 원칙) - 8문제
                {
                    q: '보안의 3요소인 CIA에서 C는 무엇을 의미하는가?',
                    options: ['Control', 'Compliance', 'Connectivity', 'Confidentiality'],
                    correct: 3,
                    explanation: 'CIA는 기밀성(Confidentiality), 무결성(Integrity), 가용성(Availability)을 의미하며, 정보보안의 가장 기본적인 3대 원칙이다.'
                },
                {
                    q: '정보보안의 3요소 중 "허가된 사람만 정보에 접근 가능"하다는 원칙은?',
                    options: [
                        '가용성',
                        '기밀성',
                        '무결성',
                        '인증성'
                    ],
                    correct: 1,
                    explanation: '기밀성(Confidentiality)은 허가된 사용자만이 정보에 접근할 수 있도록 하는 보안 원칙이다.'
                },
                {
                    q: '정보가 변조·훼손되지 않음을 보장하는 보안 요소는?',
                    options: [
                        '기밀성',
                        '가용성',
                        '책임추적성',
                        '무결성'
                    ],
                    correct: 3,
                    explanation: '무결성(Integrity)은 데이터가 인가되지 않은 방법으로 변경되거나 훼손되지 않도록 보호하는 것을 의미한다.'
                },
                {
                    q: '필요할 때 언제든지 시스템과 데이터를 사용할 수 있는 상태를 의미하는 보안 요소는?',
                    options: ['기밀성', '가용성', '무결성', '부인방지'],
                    correct: 1,
                    explanation: '가용성(Availability)은 인가된 사용자가 필요할 때 언제든지 정보와 자원에 접근할 수 있도록 보장하는 것이다.'
                },
                {
                    q: '보안 관리의 지속적 개선을 위한 사이클인 PDCA에서 P는 무엇을 의미하는가?',
                    options: ['Process', 'Plan', 'Protect', 'Policy'],
                    correct: 1,
                    explanation: 'PDCA는 Plan(계획) - Do(실행) - Check(점검) - Act(조치)의 지속적 개선 사이클을 의미한다.'
                },
                {
                    q: 'PDCA 사이클의 올바른 순서는?',
                    options: ['Plan → Check → Do → Act', 'Plan → Do → Act → Check', 'Plan → Do → Check → Act', 'Plan → Act → Do → Check'],
                    correct: 2,
                    explanation: 'PDCA 사이클은 Plan(계획 수립) → Do(실행) → Check(점검/평가) → Act(개선 조치)의 순서로 진행된다.'
                },
                {
                    q: '자산(Asset)의 정의로 가장 적절한 것은?',
                    options: [
                        '조직이 소유한 건물과 장비',
                        '네트워크에 연결된 장치',
                        '클라우드에 저장된 데이터',
                        '조직에 가치가 있는 모든 것'
                    ],
                    correct: 3,
                    explanation: '자산은 조직에 가치가 있는 모든 것을 의미하며, 하드웨어, 소프트웨어, 데이터, 인력, 시설 등을 모두 포함한다.'
                },
                {
                    q: '위협(Threat)과 취약점(Vulnerability)의 관계로 올바른 것은?',
                    options: [
                        '취약점이 위협을 생성한다',
                        '위협과 취약점은 동일한 개념이다',
                        '취약점이 위협을 차단한다',
                        '위협이 취약점을 이용하여 자산에 영향을 미친다'
                    ],
                    correct: 3,
                    explanation: '위협은 자산의 취약점을 이용하여 자산에 부정적인 영향을 미칠 수 있는 원하지 않는 사건이다.'
                },

                // ISO 표준 및 인증 - 10문제
                {
                    q: 'ISO 27001은 무엇에 대한 국제 표준인가?',
                    options: ['품질 관리 시스템', '환경 관리 시스템', '정보보호 관리체계 인증 표준', '사업연속성 관리 시스템'],
                    correct: 2,
                    explanation: 'ISO 27001은 정보보호 관리체계(ISMS)에 대한 국제 인증 표준으로, 조직의 정보 보안을 체계적으로 관리하기 위한 요구사항을 제공한다.'
                },
                {
                    q: 'ISO 27002의 역할로 가장 적절한 것은?',
                    options: ['ISO 27001 인증을 위한 통제 가이드', '환경 관리 표준', '품질 관리 지침', '재무 보안 표준'],
                    correct: 0,
                    explanation: 'ISO 27002는 ISO 27001을 구현하기 위한 상세한 보안 통제(Control) 가이드라인을 제공한다.'
                },
                {
                    q: 'ISO 27017은 어떤 환경에 특화된 보안 표준인가?',
                    options: [
                        'IoT',
                        '모바일',
                        '블록체인',
                        '클라우드'
                    ],
                    correct: 3,
                    explanation: 'ISO 27017은 클라우드 서비스 제공자(CSP)와 이용자(CSC)를 위한 클라우드 보안 통제 가이드이다.'
                },
                {
                    q: 'ISO 27701은 무엇에 대한 표준인가?',
                    options: [
                        '클라우드 보안',
                        '개인정보 관리체계',
                        '네트워크 보안',
                        'AI 보안'
                    ],
                    correct: 1,
                    explanation: 'ISO 27701은 개인정보 관리체계(PIMS)에 대한 표준으로, ISO 27001을 확장하여 개인정보 보호를 다룬다.'
                },
                {
                    q: 'ISO 42001은 무엇에 대한 표준인가?',
                    options: ['사이버 보안', 'AI 관리 시스템', '클라우드 보안', '블록체인 보안'],
                    correct: 1,
                    explanation: 'ISO 42001은 인공지능(AI) 관리 시스템에 대한 국제 표준이다.'
                },
                {
                    q: 'ISMS는 무엇의 약자인가?',
                    options: [
                        'Information Security Management System',
                        'Internet Security Management System',
                        'Information System Monitoring Service',
                        'Integrated Security Monitoring System'
                    ],
                    correct: 0,
                    explanation: 'ISMS는 Information Security Management System(정보보호 관리체계)의 약자로, 한국의 정보보호 인증 제도이다.'
                },
                {
                    q: 'ISMS-P에서 P는 무엇을 의미하는가?',
                    options: ['Protection', 'Privacy', 'Policy', 'Process'],
                    correct: 1,
                    explanation: 'ISMS-P는 정보보호 및 개인정보보호 관리체계로, P는 Privacy(개인정보보호)를 의미한다.'
                },
                {
                    q: 'CSA STAR는 무엇과 관련된 인증인가?',
                    options: ['모바일 보안', '클라우드 보안', '네트워크 보안', '데이터베이스 보안'],
                    correct: 1,
                    explanation: 'CSA STAR(Security, Trust, Assurance and Risk)는 클라우드 보안 연합(CSA)이 제공하는 클라우드 보안 인증 프로그램이다.'
                },
                {
                    q: 'BCMS는 무엇의 약자인가?',
                    options: ['Business Continuity Management System', 'Basic Compliance Management Service', 'Business Control Monitoring System', 'Basic Cloud Management System'],
                    correct: 0,
                    explanation: 'BCMS는 Business Continuity Management System(사업연속성 관리체계)의 약자로, 재해나 장애 발생 시 사업의 지속성을 보장하기 위한 관리 체계이다.'
                },
                {
                    q: 'NIST CSF는 무엇을 의미하는가?',
                    options: ['Network Internet Security Technology', 'National Institute Security Testing Framework', 'NIST Cybersecurity Framework', 'Network Infrastructure Security Tool'],
                    correct: 2,
                    explanation: 'NIST CSF는 미국 국립표준기술연구소(NIST)의 사이버보안 프레임워크로, 식별(Identify), 보호(Protect), 탐지(Detect), 대응(Respond), 복구(Recover)의 5가지 핵심 기능으로 구성된다.'
                },

                // 위험 관리 - 10문제
                {
                    q: '위험(Risk)을 계산하는 공식으로 가장 적절한 것은?',
                    options: [
                        '위험 = 자산 + 위협',
                        '위험 = 취약점 ÷ 위협',
                        '위험 = 위협 - 통제',
                        '위험 = 발생 가능성 × 손실의 정도'
                    ],
                    correct: 3,
                    explanation: '위험은 "발생 가능성(Likelihood) × 영향도(Impact)" 또는 "발생 가능성 × 손실의 정도"로 계산된다.'
                },
                {
                    q: '위험 관리(Risk Management)를 구성하는 두 가지 요소는?',
                    options: [
                        'CA + CB',
                        'PA + PD',
                        'MA + MB',
                        'RA + RT'
                    ],
                    correct: 3,
                    explanation: '위험 관리(RM)는 위험 평가(RA: Risk Assessment)와 위험 처리(RT: Risk Treatment)로 구성된다.'
                },
                {
                    q: 'RA(Risk Assessment)의 단계 순서로 올바른 것은?',
                    options: [
                        '평가 → 식별 → 분석',
                        '분석 → 평가 → 식별',
                        '식별 → 분석 → 평가',
                        '식별 → 평가 → 분석'
                    ],
                    correct: 2,
                    explanation: '위험 평가는 위험 식별(Identification) → 위험 분석(Analysis) → 위험 산정/평가(Evaluation)의 순서로 진행된다.'
                },
                {
                    q: '위험 처리(Risk Treatment)의 4가지 전략이 아닌 것은?',
                    options: [
                        '위험 분석(Analyze)',
                        '위험 수용(Accept)',
                        '위험 회피(Avoid)',
                        '위험 전가(Transfer)'
                    ],
                    correct: 0,
                    explanation: '위험 처리 전략은 수용(Accept), 회피(Avoid), 전가(Transfer), 완화/감소(Mitigate)의 4가지이다. 분석은 위험 평가 단계에 속한다.'
                },
                {
                    q: '위험 완화(Risk Mitigation)의 의미로 적절한 것은?',
                    options: [
                        '위험을 제3자에게 이전한다',
                        '보안 통제를 적용하여 위험을 감소시킨다',
                        '위험을 그대로 받아들인다',
                        '위험 활동을 중단한다'
                    ],
                    correct: 1,
                    explanation: '위험 완화는 보안 대책이나 통제를 구현하여 위험의 발생 가능성이나 영향도를 낮추는 것을 의미한다.'
                },
                {
                    q: '위험 전가(Risk Transfer)의 대표적인 예는?',
                    options: ['방화벽 설치', '백업 수행', '보험 가입', '접근 통제'],
                    correct: 2,
                    explanation: '위험 전가는 보험 가입, 아웃소싱, 클라우드 이전 등을 통해 위험을 제3자에게 이전하는 전략이다.'
                },
                {
                    q: '잔여 위험(Residual Risk)의 의미로 적절한 것은?',
                    options: [
                        '보안 통제를 적용하기 전의 위험',
                        '완전히 제거된 위험',
                        '보안 통제를 적용한 후에도 남아있는 위험',
                        '전가된 위험'
                    ],
                    correct: 2,
                    explanation: '잔여 위험은 보안 대책을 적용한 후에도 여전히 남아있는 위험을 의미하며, 이를 수용 가능한 수준(DoA) 이하로 유지해야 한다.'
                },
                {
                    q: 'DoA(Degree of Assurance)는 무엇을 의미하는가?',
                    options: [
                        '위험 평가 방법론',
                        '위협 탐지 시스템',
                        '수용 가능한 위험 수준',
                        '데이터 보호 알고리즘'
                    ],
                    correct: 2,
                    explanation: 'DoA는 조직이 수용할 수 있는 위험의 수준을 의미하며, 잔여 위험이 이 수준 이하로 관리되어야 한다.'
                },
                {
                    q: 'ISO 27005는 무엇에 대한 표준인가?',
                    options: [
                        '정보보안 위험 관리 가이드',
                        '정보보호 관리체계 인증',
                        '개인정보 보호',
                        '클라우드 보안'
                    ],
                    correct: 0,
                    explanation: 'ISO 27005는 정보보안 위험 관리에 대한 가이드라인을 제공하는 국제 표준이다.'
                },
                {
                    q: '자산 식별(Asset Identification)에서 식별해야 하는 자산이 아닌 것은?',
                    options: [
                        '물리적 자산(서버, 네트워크 장비)',
                        '정보 자산(데이터, 문서)',
                        '경쟁사 자산',
                        '인적 자산(직원, 협력사)'
                    ],
                    correct: 2,
                    explanation: '자산 식별은 조직이 보유한 물리적 자산, 정보 자산, 인적 자산, 소프트웨어 등을 파악하는 과정이다. 경쟁사 자산은 조직의 자산이 아니다.'
                },

                // 통제 유형 및 구현 - 8문제
                {
                    q: '보안 통제(Control)의 세 가지 유형이 아닌 것은?',
                    options: [
                        '관리적 통제',
                        '재무적 통제',
                        '물리적 통제',
                        '기술적 통제'
                    ],
                    correct: 1,
                    explanation: '보안 통제는 관리적(Administrative), 물리적(Physical), 기술적(Technical) 통제로 분류된다.'
                },
                {
                    q: '예방 통제(Preventive Control)의 목적으로 가장 적절한 것은?',
                    options: [
                        '보안 사고를 사전에 차단한다',
                        '보안 사고가 발생한 후 복구한다',
                        '보안 사고를 탐지한다',
                        '보안 사고의 원인을 분석한다'
                    ],
                    correct: 0,
                    explanation: '예방 통제는 보안 사고가 발생하기 전에 사전에 차단하기 위한 통제이다. 예: 접근 통제, 암호화, 방화벽'
                },
                {
                    q: '탐지 통제(Detective Control)의 예로 적절하지 않은 것은?',
                    options: [
                        '방화벽',
                        '침입 탐지 시스템(IDS)',
                        '로그 모니터링',
                        'CCTV'
                    ],
                    correct: 0,
                    explanation: '방화벽은 예방 통제에 해당한다. 탐지 통제는 보안 사고나 이상 징후를 발견하기 위한 통제이다.'
                },
                {
                    q: '교정 통제(Corrective Control)의 목적은?',
                    options: [
                        '사고를 예방한다',
                        '사고 발생 후 시스템을 복구하고 재발을 방지한다',
                        '사고를 탐지한다',
                        '사고 발생 가능성을 계산한다'
                    ],
                    correct: 1,
                    explanation: '교정 통제는 보안 사고 발생 후 시스템을 정상 상태로 복구하고, 재발을 방지하기 위한 조치를 취하는 통제이다.'
                },
                {
                    q: 'SoD(Separation of Duties)의 목적으로 가장 적절한 것은?',
                    options: [
                        '한 사람이 모든 권한을 갖지 못하도록 권한을 분리한다',
                        '업무 효율성을 높인다',
                        '데이터를 암호화한다',
                        '네트워크 속도를 향상시킨다'
                    ],
                    correct: 0,
                    explanation: '직무 분리(SoD)는 한 사람이 처음부터 끝까지 모든 중요한 작업을 수행할 수 없도록 권한을 분리하여 부정행위를 방지하는 통제이다.'
                },
                {
                    q: '다계층 방어(Defense in Depth) 전략의 핵심 개념은?',
                    options: [
                        '단일 보안 솔루션에 집중한다',
                        '클라우드만 사용한다',
                        '비용을 최소화한다',
                        '여러 계층에 걸쳐 중첩된 보안 통제를 구현한다'
                    ],
                    correct: 3,
                    explanation: '다계층 방어는 네트워크, 호스트, 애플리케이션, 데이터 등 여러 계층에 걸쳐 중첩된 보안 통제를 구현하여, 하나의 통제가 실패해도 다른 통제가 보호할 수 있도록 하는 전략이다.'
                },
                {
                    q: 'DRM(Digital Rights Management)의 주요 목적은?',
                    options: ['네트워크 속도 향상', '디지털 콘텐츠의 불법 복제 및 배포 방지', '서버 성능 최적화', '데이터베이스 백업'],
                    correct: 1,
                    explanation: 'DRM은 디지털 콘텐츠의 저작권을 보호하고 불법 복제, 배포, 사용을 방지하기 위한 기술적 보호 조치이다.'
                },
                {
                    q: '위협 인텔리전스(Threat Intelligence)의 활용 목적으로 가장 적절한 것은?',
                    options: [
                        '서버 용량 증설',
                        '직원 교육 자료 제작',
                        '네트워크 케이블 교체',
                        '최신 위협 정보를 수집하여 선제적 대응'
                    ],
                    correct: 3,
                    explanation: '위협 인텔리전스는 최신 공격 기법, 취약점, IoC(Indicators of Compromise) 등의 정보를 수집·분석하여 선제적으로 보안 위협에 대응하기 위한 활동이다.'
                },

                // 클라우드 보안 - 8문제
                {
                    q: '클라우드 환경에서 CSP는 무엇을 의미하는가?',
                    options: [
                        'Cloud Security Policy',
                        'Cloud System Protocol',
                        'Cloud Service Provider',
                        'Cloud Storage Platform'
                    ],
                    correct: 2,
                    explanation: 'CSP는 Cloud Service Provider(클라우드 서비스 제공자)의 약자로, AWS, Azure, GCP 등이 이에 해당한다.'
                },
                {
                    q: 'CSC(Cloud Service Customer)는 무엇을 의미하는가?',
                    options: ['클라우드 보안 인증', '클라우드 서비스 제공자', '클라우드 서비스 이용자', '클라우드 스토리지 용량'],
                    correct: 2,
                    explanation: 'CSC는 Cloud Service Customer의 약자로, 클라우드 서비스를 이용하는 고객을 의미한다.'
                },
                {
                    q: '클라우드 책임 공유 모델(Shared Responsibility Model)에서 항상 고객(CSC)의 책임인 것은?',
                    options: [
                        '데이터 센터 물리 보안',
                        '데이터 및 접근 권한 관리',
                        '하이퍼바이저 보안',
                        '네트워크 인프라'
                    ],
                    correct: 1,
                    explanation: '책임 공유 모델에서 데이터와 접근 권한 관리는 서비스 모델(IaaS/PaaS/SaaS)과 관계없이 항상 고객의 책임이다.'
                },
                {
                    q: 'IaaS, PaaS, SaaS 중 고객(CSC)의 보안 책임이 가장 큰 것은?',
                    options: [
                        'IaaS',
                        'SaaS',
                        'PaaS',
                        '모두 동일'
                    ],
                    correct: 0,
                    explanation: 'IaaS는 인프라만 제공하므로 그 위의 OS, 애플리케이션, 데이터 등 대부분을 고객이 관리해야 하므로 고객의 책임 범위가 가장 넓다.'
                },
                {
                    q: '멀티 테넌시(Multi-tenancy)의 의미로 적절한 것은?',
                    options: [
                        '각 고객이 독립된 서버를 사용하는 구조',
                        '온프레미스 환경',
                        '사설 클라우드만 사용하는 구조',
                        '여러 고객이 하나의 물리적 인프라를 공유하는 구조'
                    ],
                    correct: 3,
                    explanation: '멀티 테넌시는 여러 고객(테넌트)이 동일한 물리적 인프라와 애플리케이션을 공유하지만 논리적으로 분리되어 있는 클라우드 아키텍처이다.'
                },
                {
                    q: 'EOS(End of Service)와 관련하여 고려해야 할 보안 사항으로 가장 적절한 것은?',
                    options: ['서비스 종료 전 데이터 마이그레이션 및 완전 삭제 계획 수립', '서비스를 계속 사용', '보안 패치를 중단', '아무 조치도 하지 않음'],
                    correct: 0,
                    explanation: 'EOS는 클라우드 서비스 종료를 의미하며, 이 경우 데이터를 다른 곳으로 이전하고 원본을 완전히 삭제하는 등의 계획을 사전에 수립해야 한다.'
                },
                {
                    q: '클라우드에서 데이터가 저장된 리전(Region)의 위치가 중요한 이유는?',
                    options: ['속도 때문에', '데이터 주권 및 법적 관할권 때문에', '비용 때문에', '색상 때문에'],
                    correct: 1,
                    explanation: '데이터가 저장된 물리적 위치에 따라 해당 국가의 법률(예: GDPR, 개인정보보호법)이 적용되므로, 데이터 주권과 컴플라이언스 측면에서 매우 중요하다.'
                },
                {
                    q: 'ISO 27018은 무엇에 대한 표준인가?',
                    options: [
                        'IoT 보안',
                        '블록체인 보안',
                        '클라우드 환경에서의 개인정보 보호',
                        '모바일 보안'
                    ],
                    correct: 2,
                    explanation: 'ISO 27018은 클라우드 서비스 제공자가 개인정보를 처리할 때 준수해야 하는 보호 조치에 대한 국제 표준이다.'
                },

                // 컴플라이언스 및 법규 - 6문제
                {
                    q: 'GDPR(General Data Protection Regulation)은 어느 지역의 개인정보 보호 규정인가?',
                    options: [
                        '미국',
                        '한국',
                        '중국',
                        'EU(유럽연합)'
                    ],
                    correct: 3,
                    explanation: 'GDPR은 유럽연합(EU)의 개인정보 보호 규정으로, 위반 시 글로벌 연매출의 최대 4% 또는 2천만 유로의 과징금이 부과될 수 있다.'
                },
                {
                    q: 'GDPR 위반 시 최대 과징금은?',
                    options: [
                        '매출액의 1% 또는 100만 유로',
                        '매출액의 2% 또는 1천만 유로',
                        '매출액의 10% 또는 5천만 유로',
                        '매출액의 4% 또는 2천만 유로'
                    ],
                    correct: 3,
                    explanation: 'GDPR 위반 시 최대 글로벌 연매출의 4% 또는 2천만 유로 중 높은 금액이 과징금으로 부과될 수 있다.'
                },
                {
                    q: 'TISAX는 어느 산업의 보안 인증인가?',
                    options: [
                        '금융',
                        '자동차',
                        '의료',
                        '교육'
                    ],
                    correct: 1,
                    explanation: 'TISAX(Trusted Information Security Assessment Exchange)는 자동차 산업의 정보보안 평가 및 인증 표준이다.'
                },
                {
                    q: 'PCI DSS는 무엇과 관련된 보안 표준인가?',
                    options: [
                        '신용카드 결제 정보',
                        '의료 정보',
                        '교육 정보',
                        '부동산 정보'
                    ],
                    correct: 0,
                    explanation: 'PCI DSS(Payment Card Industry Data Security Standard)는 신용카드 정보를 처리, 저장, 전송하는 조직이 준수해야 하는 보안 표준이다.'
                },
                {
                    q: 'HIPAA는 어느 국가의 어떤 분야에 대한 법규인가?',
                    options: [
                        '한국의 금융 정보 보호법',
                        'EU의 개인정보 보호법',
                        '중국의 네트워크 보안법',
                        '미국의 의료 정보 보호법'
                    ],
                    correct: 3,
                    explanation: 'HIPAA(Health Insurance Portability and Accountability Act)는 미국의 의료 정보 보호법으로, 환자의 의료 정보를 보호하기 위한 규정이다.'
                },
                {
                    q: 'PIA(Privacy Impact Assessment)를 수행해야 하는 경우는?',
                    options: [
                        '고위험 개인정보 처리 시',
                        '모든 정보 시스템 구축 시',
                        '네트워크 장비 교체 시',
                        '사무실 이전 시'
                    ],
                    correct: 0,
                    explanation: 'PIA(개인정보 영향평가)는 대규모 개인정보를 처리하거나 민감정보를 다루는 등 고위험 개인정보 처리 시 수행해야 하며, 공공기관 외에 민간 기업도 해당될 수 있다.'
                },

                // BCP/DRP - 5문제
                {
                    q: 'BCP(Business Continuity Plan)의 목적으로 가장 적절한 것은?',
                    options: [
                        '비용 절감',
                        '직원 복지 향상',
                        '재해나 장애 발생 시 사업의 지속성 보장',
                        '마케팅 전략 수립'
                    ],
                    correct: 2,
                    explanation: 'BCP는 재해, 장애, 사고 등으로 정상적인 운영이 불가능할 때 핵심 업무를 지속하거나 신속히 복구하기 위한 계획이다.'
                },
                {
                    q: 'BIA(Business Impact Analysis)의 주요 목적은?',
                    options: ['업무의 우선순위를 정하고 중단 시 손실 규모를 파악', '네트워크 속도 측정', '직원 만족도 조사', '경쟁사 분석'],
                    correct: 0,
                    explanation: 'BIA는 각 업무의 중요도를 평가하고, 업무 중단 시 조직에 미치는 영향을 분석하여 복구 우선순위를 정하는 활동이다.'
                },
                {
                    q: 'RTO(Recovery Time Objective)의 의미는?',
                    options: [
                        '데이터를 어느 시점까지 복구할 것인가',
                        '백업 주기',
                        '사고 후 몇 시간 안에 복구할 것인가',
                        '보안 패치 주기'
                    ],
                    correct: 2,
                    explanation: 'RTO는 재해 발생 후 업무나 시스템을 정상화하기까지 허용 가능한 최대 시간을 의미한다. (예: 4시간 이내 복구)'
                },
                {
                    q: 'RPO(Recovery Point Objective)의 의미는?',
                    options: [
                        '데이터를 어느 시점까지 되돌릴 것인가',
                        '복구 목표 시간',
                        '백업 서버 수량',
                        '보안 담당자 수'
                    ],
                    correct: 0,
                    explanation: 'RPO는 재해 발생 시 데이터 손실을 어느 시점까지 허용할 것인지를 의미한다. (예: 어제 밤 12시 백업 데이터까지 복구 가능)'
                },
                {
                    q: 'DRP(Disaster Recovery Plan)는 BCP와 어떤 관계인가?',
                    options: [
                        'DRP와 BCP는 완전히 별개',
                        'DRP가 BCP보다 상위 개념',
                        'DRP는 BCP의 하위 개념으로 IT 시스템 복구에 초점',
                        'DRP는 사용되지 않는 용어'
                    ],
                    correct: 2,
                    explanation: 'DRP는 BCP의 하위 개념으로, IT 시스템과 인프라를 복구하는 기술적인 계획에 초점을 맞춘다.'
                },

                // 실무 운영 - 5문제
                {
                    q: 'SoA(Statement of Applicability, 적용성 보고서)의 목적은?',
                    options: ['모든 통제를 무조건 적용한다', '조직 환경에 맞는 통제를 선택하고 미적용 사유를 기록한다', '직원 평가 자료로 활용한다', '마케팅 자료로 활용한다'],
                    correct: 1,
                    explanation: 'SoA는 ISO 27001 Annex A의 통제 중 어떤 것을 적용하고 어떤 것을 적용하지 않는지, 그 사유를 명확히 문서화한 보고서이다.'
                },
                {
                    q: 'ISMS 관리체계에서 "계획된 주기"로 위험 평가를 수행해야 하는 것 외에 추가로 수행해야 하는 경우는?',
                    options: [
                        '중대한 변경사항 발생 시',
                        '매일',
                        '직원 입사 시마다',
                        '결재 시마다'
                    ],
                    correct: 0,
                    explanation: 'ISMS 요구사항에 따르면 정기적인 주기 외에도 조직, 시스템, 비즈니스 환경에 중대한 변경이 발생하면 수시 위험 평가를 수행해야 한다.'
                },
                {
                    q: '신규 시스템 도입 시 보안 취약점이 존재할 경우 발생할 수 있는 문제는?',
                    options: [
                        '비용이 증가한다',
                        '속도가 느려진다',
                        '이전 시스템의 보안도 무의미해질 수 있다',
                        '화면이 깨진다'
                    ],
                    correct: 2,
                    explanation: '신규 시스템에 보안 취약점이 있으면 이를 통해 전체 네트워크가 침해될 수 있으므로, 배포 전 보안 테스팅이 필수적이다.'
                },
                {
                    q: 'CCE, CWE, CVE 중 "발견된 취약점"을 의미하는 것은?',
                    options: [
                        'CCE',
                        'CWE',
                        '모두 해당',
                        'CVE'
                    ],
                    correct: 3,
                    explanation: 'CVE(Common Vulnerabilities and Exposures)는 공개적으로 알려진 보안 취약점의 목록이다. CWE는 소프트웨어 약점, CCE는 시스템 설정 취약점을 의미한다.'
                },
                {
                    q: '로그 관리에서 중요한 3요소가 아닌 것은?',
                    options: [
                        '수집',
                        '삭제',
                        '보관',
                        '검토'
                    ],
                    correct: 1,
                    explanation: '로그 관리의 핵심은 로그를 제대로 수집하고, 규정된 기간 동안 안전하게 보관하며, 실제로 검토/분석하는 것이다. 무분별한 삭제는 오히려 위험하다.'
                },

                // 실무 시나리오 및 우려사항 - 10문제
                {
                    q: '보안 컨설턴트의 핵심 역량으로 가장 중요한 것은?',
                    options: [
                        '특정 기술 스택에 대한 깊은 지식',
                        '프로그래밍 능력',
                        '비즈니스 이해와 이해관계자 설득 능력',
                        '네트워크 장비 설정 능력'
                    ],
                    correct: 2,
                    explanation: '보안 컨설팅은 기술 직무가 아니라 문제 해결 직무이며, 비즈니스 이해, 이해관계자 설득, 법·표준을 틀로 한 리스크 관리가 핵심이다.'
                },
                {
                    q: '관리체계의 진짜 목적으로 가장 적절한 것은?',
                    options: [
                        '보안 사고 0건 달성',
                        '인증 획득',
                        '완벽한 보안 시스템 구축',
                        '지속적 개선(PDCA)'
                    ],
                    correct: 3,
                    explanation: '관리체계의 목적은 "사고 0건"이 아니라 PDCA를 통한 지속적 개선이다. 완벽한 보안은 불가능하며, 수용 가능한 위험 수준을 유지하는 것이 목표이다.'
                },
                {
                    q: 'SDLC 초기에 보안 담당자가 빠질 경우 발생하는 전형적인 문제는?',
                    options: [
                        '보안 요구사항 자체가 없어 MFA, 로그 등이 빠진다',
                        '개발 속도가 느려진다',
                        '비용이 증가한다',
                        'UI가 복잡해진다'
                    ],
                    correct: 0,
                    explanation: 'Shift-Left 실패 사례로, SDLC 초기에 보안/개인정보 담당자가 빠지면 보안 요구사항 자체가 설계에 반영되지 않아 MFA, 로그, 정책 등이 누락된다.'
                },
                {
                    q: '문서와 실제 운영의 불일치로 인한 심사 부적합을 피하기 위한 원칙은?',
                    options: ['문서를 작성하지 않는다', '문서에 쓴 내용은 반드시 증적으로 남겨야 한다', '실제 운영은 하지 않는다', '심사원에게 알리지 않는다'],
                    correct: 1,
                    explanation: '문서에 "연 1회 교육", "로그 점검" 등을 명시했다면 반드시 실제로 수행하고 기록/증적을 남겨야 한다. 이것이 가장 많이 걸리는 치명 포인트이다.'
                },
                {
                    q: 'SoA(적용성 보고서)에서 통제를 미적용할 때 피해야 할 실수는?',
                    options: ['위험 평가 결과와 논리적으로 연결되지 않는 사유', '명확한 근거 제시', '경영진 승인', '대안 통제 제시'],
                    correct: 0,
                    explanation: 'Risk → Treatment → SoA의 논리적 연결이 필수이다. "비용 과다"라고 쓰면서 위험 평가에서 고위험으로 나왔다면 논리 모순이다.'
                },
                {
                    q: '클라우드/외주/위탁 계약서에서 반드시 확인해야 할 사항이 아닌 것은?',
                    options: ['개인정보 처리 위탁 조항', '재위탁 가능 여부', '사고 통보 SLA', '담당자의 취미'],
                    correct: 3,
                    explanation: '개인정보 처리 위탁, 재위탁, 사고 통보 등이 계약서에 명시되지 않으면 사고 시 책임은 무조건 우리 쪽이다.'
                },
                {
                    q: '변경 관리(Change Management) 누락으로 부적합 판정을 받는 경우는?',
                    options: [
                        '신규 서비스 출시 시 수시 위험 평가 미실시',
                        'PC 1대 교체',
                        '일반 문서 수정',
                        '책상 배치 변경'
                    ],
                    correct: 0,
                    explanation: '신규 서비스, 클라우드 리전 변경, 조직 개편, 외주사 교체 등 중대한 변경 시 수시 위험 평가를 하지 않으면 바로 부적합이다.'
                },
                {
                    q: '역할과 책임(R&R) 문서화가 중요한 이유는?',
                    options: [
                        '예산 확보',
                        '직원 평가',
                        '보안은 있는데 담당자가 없거나 퇴사 시 공백 발생을 방지',
                        '마케팅 자료'
                    ],
                    correct: 2,
                    explanation: '직무기술서, 대체 인력, R&R이 명확하지 않으면 담당자 퇴사 시 공백이 발생하여 부적합 판정을 받는다.'
                },
                {
                    q: '경영검토 회의에서 경영진의 실제 관여가 중요한 이유는?',
                    options: ['형식적 회의록만으로도 충분하다', '심사원이 경영진의 실질 의사결정 흔적을 본다', '필요없다', '담당자만 참석해도 된다'],
                    correct: 1,
                    explanation: 'ISO 27001의 최종 책임은 경영진에 있으며, 형식적 회의록이 아닌 실질적 의사결정(예산, 인력, 정책 승인) 흔적이 필요하다.'
                },
                {
                    q: '한 번 수용한 위험을 지속적으로 모니터링해야 하는 이유는?',
                    options: [
                        '한 번 수용했으면 끝까지 수용해도 된다',
                        '필요 없다',
                        '비용이 저렴해서',
                        '환경 변화로 인해 위험 수준이 달라질 수 있다'
                    ],
                    correct: 3,
                    explanation: '한 번 수용했다고 끝까지 수용해서는 안 된다. 조직, 기술, 법규, 비즈니스 환경이 변화하면 이전에 수용한 위험도 재평가해야 한다.'
                }
            ]
        }
    }
};

// 브라우저 전역 변수로 명시적 노출
if (typeof window !== 'undefined') {
    window.consultQuestions = consultQuestions;
}

// Node.js 환경에서 모듈 내보내기
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { examQuestions: consultQuestions.examQuestions };
}
