// 클라우드 기반의 보안 컨설팅 실무 - 70문제
// ISO 27001 / ISO 27017 중심으로 재구성 (학습 자료 기반)

const consultQuestions = {
    examQuestions: {
        security_consulting: {
            title: '클라우드 기반의 보안 컨설팅 실무',
            questions: [
                // ========== ISO 27001 기본 구조 및 HLS (15문제) ==========
                {
                    q: 'ISO 27001은 무엇에 대한 국제 표준인가?',
                    options: ['품질 관리 시스템', '환경 관리 시스템', '정보보호 관리체계(ISMS) 인증 표준', '사업연속성 관리 시스템'],
                    correct: 2,
                    explanation: 'ISO 27001은 정보보호 관리체계(ISMS)에 대한 국제 인증 표준으로, 조직의 정보 보안을 체계적으로 관리하기 위한 요구사항을 제공한다.'
                },
                {
                    q: 'ISO 27001, 27701, 42001 등이 공유하는 공통 구조의 이름은?',
                    options: ['PDCA', 'CIA', 'HLS(High Level Structure)', 'ITSM'],
                    correct: 2,
                    explanation: 'HLS(High Level Structure)는 ISO 경영시스템 표준이 공유하는 공통 목차 구조(Clause 4~10)로, 여러 인증을 단일 관리체계로 통합 운영할 수 있게 한다.'
                },
                {
                    q: 'ISO 27001의 HLS 구조에서 Clause 4가 다루는 내용은?',
                    options: ['리더십', '조직 상황(Context of the Organization)', '운영', '성과 평가'],
                    correct: 1,
                    explanation: 'Clause 4는 조직의 내·외부 이슈, 이해관계자 요구사항, 관리체계 범위(Scope)를 정의하는 단계이다.'
                },
                {
                    q: 'ISO 27001 Clause 5(리더십)에서 경영진의 역할로 가장 적절한 것은?',
                    options: [
                        '기술적 취약점 점검',
                        '보안 예산·인력 확보 및 보안 정책 승인',
                        '서버 관리',
                        '코드 리뷰'
                    ],
                    correct: 1,
                    explanation: 'Clause 5는 경영진의 리더십과 의지를 요구한다. 보안의 성패는 경영진 의지에 달려 있으며, 예산·인력·권한 없으면 실패한다.'
                },
                {
                    q: 'ISO 27001 Clause 6(계획)에서 다루는 핵심 활동은?',
                    options: ['내부 감사', '위험 평가 및 위험 처리 계획', '문서화', '경영검토'],
                    correct: 1,
                    explanation: 'Clause 6은 위험 평가(Risk Assessment)와 위험 처리(Risk Treatment) 계획을 수립하는 단계로, ISMS의 핵심 계획 활동이다.'
                },
                {
                    q: 'ISO 27001 Clause 7.5(문서화된 정보)에서 강조하는 원칙은?',
                    options: [
                        '문서는 한번 작성하면 변경하지 않는다',
                        '문서는 경영진만 볼 수 있다',
                        '문서는 "있다"가 아니라 "살아있다"가 중요하다',
                        '문서는 최소한으로 유지한다'
                    ],
                    correct: 2,
                    explanation: '문서 최신성 유지, 전사 공유 및 접근성, 변경 이력 관리가 핵심이다. 문서에 쓴 내용은 실제 운영과 일치해야 한다.'
                },
                {
                    q: 'ISO 27001 Clause 9(성과 평가)에 포함되는 활동이 아닌 것은?',
                    options: ['내부 감사', '경영검토', '모니터링 및 측정', '보호대책 구현'],
                    correct: 3,
                    explanation: '보호대책 구현은 Clause 8(운영)에 해당한다. Clause 9는 내부 감사, 경영검토, 모니터링/측정을 통해 ISMS의 성과를 평가한다.'
                },
                {
                    q: 'ISO 27001 Clause 10(개선)의 핵심 원칙은?',
                    options: ['일회성 프로젝트', 'PDCA를 통한 지속적 개선', '완벽한 보안 달성', '비용 절감'],
                    correct: 1,
                    explanation: '관리체계의 목적은 "사고 0건"이 아니라 PDCA를 통한 지속적 개선이다. 완벽한 보안은 불가능하며, 수용 가능한 위험 수준을 유지하는 것이 목표이다.'
                },
                {
                    q: 'PDCA 사이클의 올바른 순서는?',
                    options: ['Plan → Check → Do → Act', 'Plan → Do → Act → Check', 'Plan → Do → Check → Act', 'Plan → Act → Do → Check'],
                    correct: 2,
                    explanation: 'PDCA 사이클은 Plan(계획 수립) → Do(실행) → Check(점검/평가) → Act(개선 조치)의 순서로 진행된다.'
                },
                {
                    q: 'ISO 27002의 역할로 가장 적절한 것은?',
                    options: ['ISO 27001 인증 심사 기준', 'ISO 27001을 구현하기 위한 상세 보안 통제 가이드', '클라우드 전용 보안 표준', '개인정보 관리체계 표준'],
                    correct: 1,
                    explanation: 'ISO 27002는 ISO 27001의 Annex A 통제를 구현하기 위한 상세한 보안 통제(Control) 가이드라인을 제공한다.'
                },
                {
                    q: 'ISO 27001의 Annex A 통제와 관련된 SoA(적용성 보고서)의 목적은?',
                    options: [
                        '모든 통제를 무조건 적용한다',
                        '조직 환경에 맞는 통제를 선택하고 미적용 사유를 기록한다',
                        '직원 평가 자료로 활용한다',
                        '마케팅 자료로 활용한다'
                    ],
                    correct: 1,
                    explanation: 'SoA는 Annex A의 통제 중 어떤 것을 적용하고 어떤 것을 적용하지 않는지, 그 사유를 명확히 문서화한 보고서이다. Risk → Treatment → SoA 논리 연결이 필수이다.'
                },
                {
                    q: 'ISO 27001 인증 범위(Scope)에 대한 설명으로 올바른 것은?',
                    options: [
                        '반드시 회사 전체를 대상으로 해야 한다',
                        '특정 서비스, 프로세스, 조직 단위로도 인증 가능하다',
                        '클라우드 서비스만 대상으로 한다',
                        'IT 부서만 대상이다'
                    ],
                    correct: 1,
                    explanation: '인증 범위(Scope)는 회사 전체가 아닌 특정 서비스, 프로세스, 조직 단위로도 설정 가능하다. Scope 설정 자체가 컨설팅의 핵심 산출물이다.'
                },
                {
                    q: 'ISO 27001에서 내부 감사 시 "자기 감사 금지" 원칙의 의미는?',
                    options: [
                        '외부 감사만 가능하다',
                        '감사 비용을 줄이기 위한 것이다',
                        '자신의 업무 영역을 자신이 감사할 수 없다(객관성 확보)',
                        '신입 직원은 감사할 수 없다'
                    ],
                    correct: 2,
                    explanation: '내부 감사는 객관성을 확보해야 하며, 자기 업무를 자기가 감사하면 편향이 생기므로 금지된다. 리스크 기반 샘플링과 5 Whys 근본 원인 분석도 중요하다.'
                },
                {
                    q: 'ISO 27001 경영검토에서 누락 시 발생하는 문제는?',
                    options: ['경고', '개선 요청', '중부적합(Major Non-Conformity)', '관찰사항'],
                    correct: 2,
                    explanation: 'ISMS의 최종 책임은 경영진에 있으며, 경영검토가 누락되면 중부적합으로 인증을 받을 수 없다. 연 1회 이상 실시해야 한다.'
                },
                {
                    q: 'ISO 27001의 2022년 개정판(3판)에서 가장 큰 변화는?',
                    options: [
                        'Clause 구조 완전 변경',
                        'Annex A 통제가 114개에서 93개로 재편',
                        'PDCA 폐지',
                        'HLS 구조 삭제'
                    ],
                    correct: 1,
                    explanation: 'ISO 27001:2022에서 Annex A 통제가 14개 도메인 114개에서 4개 테마 93개로 재편되었다. HLS 구조(Clause 4~10)는 유지된다.'
                },

                // ========== ISO 27017 클라우드 보안 (15문제) ==========
                {
                    q: 'ISO 27017은 어떤 환경에 특화된 보안 표준인가?',
                    options: ['IoT', '모바일', '블록체인', '클라우드'],
                    correct: 3,
                    explanation: 'ISO 27017은 클라우드 서비스 제공자(CSP)와 이용자(CSC)를 위한 클라우드 보안 통제 가이드이다.'
                },
                {
                    q: 'ISO 27017에서 CSP는 무엇을 의미하는가?',
                    options: ['Cloud Security Policy', 'Cloud System Protocol', 'Cloud Service Provider', 'Cloud Storage Platform'],
                    correct: 2,
                    explanation: 'CSP는 Cloud Service Provider(클라우드 서비스 제공자)의 약자로, AWS, Azure, GCP 등이 이에 해당한다.'
                },
                {
                    q: 'ISO 27017에서 CSC(Cloud Service Customer)의 핵심 책임은?',
                    options: ['데이터센터 물리 보안', '하이퍼바이저 관리', '데이터 및 접근 권한 관리', '네트워크 인프라 운영'],
                    correct: 2,
                    explanation: '책임 공유 모델에서 데이터와 접근 권한 관리는 서비스 모델(IaaS/PaaS/SaaS)과 관계없이 항상 고객(CSC)의 책임이다.'
                },
                {
                    q: 'ISO 27017의 책임 공유 모델(Shared Responsibility Model)에서 IaaS일 때 CSC의 책임 범위는?',
                    options: [
                        '계정 관리만',
                        'OS, 애플리케이션, 데이터 전부',
                        '물리 인프라',
                        '하이퍼바이저'
                    ],
                    correct: 1,
                    explanation: 'IaaS는 물리 인프라와 하이퍼바이저만 CSP가 책임지고, 그 위의 OS, 애플리케이션, 데이터 등은 CSC가 관리해야 한다.'
                },
                {
                    q: 'IaaS, PaaS, SaaS 중 고객(CSC)의 보안 책임이 가장 큰 것은?',
                    options: ['IaaS', 'SaaS', 'PaaS', '모두 동일'],
                    correct: 0,
                    explanation: 'IaaS는 인프라만 제공하므로 그 위의 OS, 애플리케이션, 데이터 등 대부분을 고객이 관리해야 하므로 책임 범위가 가장 넓다.'
                },
                {
                    q: 'ISO 27017에서 "회색 지대(Gray Zone)"가 위험한 이유는?',
                    options: [
                        '기술적으로 복잡해서',
                        'CSP와 CSC 간 책임 정의가 미흡하여 사고 시 책임 공방이 발생',
                        '비용이 증가해서',
                        '성능이 떨어져서'
                    ],
                    correct: 1,
                    explanation: '책임 범위가 모호한 회색 지대에서는 사고 발생 시 "우리 책임 아님"이 통하지 않는다. 사전 계약·문서화로 역할을 명확히 정의해야 한다.'
                },
                {
                    q: '멀티 테넌시(Multi-tenancy)의 보안 우려 사항으로 가장 적절한 것은?',
                    options: [
                        '속도 저하',
                        '여러 고객이 물리적 인프라를 공유하므로 논리적 격리가 중요',
                        '비용 증가',
                        '관리 편의성 저하'
                    ],
                    correct: 1,
                    explanation: '멀티 테넌시는 여러 고객이 동일한 인프라를 공유하지만 논리적으로 분리되어야 하며, 격리 실패 시 다른 테넌트의 데이터 유출 위험이 있다.'
                },
                {
                    q: 'ISO 27017에서 클라우드 데이터의 물리적 위치(리전)가 중요한 이유는?',
                    options: ['속도 향상', '데이터 주권 및 법적 관할권 때문에', '비용 절감', '관리 편의성'],
                    correct: 1,
                    explanation: '데이터가 저장된 물리적 위치에 따라 해당 국가의 법률(GDPR, 개인정보보호법 등)이 적용되며, 해외 리전 사용 시 개인정보 국외 이전 이슈가 발생한다.'
                },
                {
                    q: 'ISO 27018은 무엇에 대한 표준인가?',
                    options: ['IoT 보안', '블록체인 보안', '클라우드 환경에서의 개인정보 보호', '모바일 보안'],
                    correct: 2,
                    explanation: 'ISO 27018은 클라우드 서비스 제공자가 개인정보(PII)를 처리할 때 준수해야 하는 보호 조치에 대한 국제 표준이다.'
                },
                {
                    q: 'ISO 27001을 뿌리로 한 클라우드 관련 확장 표준의 올바른 조합은?',
                    options: [
                        '27017(클라우드 보안) + 27018(클라우드 개인정보)',
                        '27017(개인정보) + 27701(클라우드)',
                        '27002(클라우드) + 27005(개인정보)',
                        '42001(클라우드) + 27017(AI)'
                    ],
                    correct: 0,
                    explanation: 'ISO 27001이 뿌리이고, 클라우드 보안은 27017, 클라우드 개인정보는 27018, 개인정보 관리체계는 27701로 확장된다.'
                },
                {
                    q: 'EOS(End of Service) 시 ISO 27017에서 요구하는 조치는?',
                    options: [
                        '서비스를 계속 사용한다',
                        '아무 조치도 하지 않는다',
                        '데이터 마이그레이션 및 완전 삭제 계획을 사전에 수립한다',
                        '보안 패치를 중단한다'
                    ],
                    correct: 2,
                    explanation: 'EOS는 클라우드 서비스 종료를 의미하며, 데이터를 다른 곳으로 이전하고 원본을 완전히 삭제하는 등의 출구 전략을 사전에 수립해야 한다.'
                },
                {
                    q: 'SaaS 모델에서 CSP와 CSC의 책임 분담으로 올바른 것은?',
                    options: [
                        'CSP가 대부분 책임, CSC는 계정 관리와 데이터 사용 책임',
                        'CSC가 대부분 책임',
                        'CSP와 CSC 책임이 동일',
                        'CSP는 책임이 없다'
                    ],
                    correct: 0,
                    explanation: 'SaaS는 CSP가 인프라부터 애플리케이션까지 대부분을 관리하며, CSC는 계정 관리, 데이터 사용, 접근 권한 설정 등을 책임진다.'
                },
                {
                    q: 'ISO 27017에서 클라우드 서비스 계약 시 반드시 확인해야 할 사항이 아닌 것은?',
                    options: [
                        '개인정보 처리 위탁 조항',
                        '재위탁 가능 여부',
                        '담당자의 취미',
                        '사고 통보 SLA'
                    ],
                    correct: 2,
                    explanation: '클라우드/외주/위탁 계약서에는 개인정보 처리 위탁, 재위탁, 사고 통보 SLA가 명시되어야 한다. 문서가 없으면 사고 시 책임은 CSC에게 있다.'
                },
                {
                    q: 'CSAP(Cloud Security Assurance Program)은 무엇인가?',
                    options: [
                        '미국의 클라우드 보안 인증',
                        'EU의 클라우드 보안 규정',
                        '한국의 클라우드 서비스 보안 인증',
                        '일본의 클라우드 보안 표준'
                    ],
                    correct: 2,
                    explanation: 'CSAP는 한국의 클라우드 서비스 보안 인증 제도로, 공공기관에 클라우드를 제공하려면 필수적으로 취득해야 한다.'
                },
                {
                    q: 'NFV(Network Function Virtualization)의 의미는?',
                    options: [
                        '네트워크 장비의 물리적 이중화',
                        '네트워크 기능을 소프트웨어로 가상화하는 기술',
                        '방화벽 설정',
                        'VPN 구축'
                    ],
                    correct: 1,
                    explanation: 'NFV는 라우터, 방화벽 등의 네트워크 기능을 전용 하드웨어 대신 소프트웨어로 가상화하여 유연하게 운영하는 기술이다.'
                },

                // ========== ISO 27001 위험 관리 (10문제) ==========
                {
                    q: '위험(Risk)을 계산하는 공식으로 가장 적절한 것은?',
                    options: [
                        '위험 = 자산 + 위협',
                        '위험 = 취약점 ÷ 위협',
                        '위험 = 위협 - 통제',
                        '위험 = 자산 × 위협 × 취약점'
                    ],
                    correct: 3,
                    explanation: '위험은 "자산(Asset) × 위협(Threat) × 취약점(Vulnerability)"으로 계산된다. "발생 가능성 × 영향도"로도 표현 가능하다.'
                },
                {
                    q: '위험 관리(Risk Management)를 구성하는 두 가지 요소는?',
                    options: ['CA + CB', 'PA + PD', 'MA + MB', 'RA(위험 평가) + RT(위험 처리)'],
                    correct: 3,
                    explanation: '위험 관리(RM)는 위험 평가(RA: Risk Assessment)와 위험 처리(RT: Risk Treatment)로 구성된다.'
                },
                {
                    q: 'RA(Risk Assessment)의 단계 순서로 올바른 것은?',
                    options: ['평가 → 식별 → 분석', '분석 → 평가 → 식별', '식별 → 분석 → 평가(산정)', '식별 → 평가 → 분석'],
                    correct: 2,
                    explanation: '위험 평가는 위험 식별(Identification) → 위험 분석(Analysis) → 위험 산정/평가(Evaluation)의 순서로 진행된다.'
                },
                {
                    q: '위험 처리(Risk Treatment)의 4가지 전략이 아닌 것은?',
                    options: ['위험 분석(Analyze)', '위험 수용(Accept)', '위험 회피(Avoid)', '위험 전가(Transfer)'],
                    correct: 0,
                    explanation: '위험 처리 전략은 수용(Accept), 회피(Avoid), 전가(Transfer), 완화/감소(Mitigate)의 4가지이다. 분석은 위험 평가 단계에 속한다.'
                },
                {
                    q: '위험 전가(Risk Transfer)의 대표적인 예는?',
                    options: ['방화벽 설치', '백업 수행', '사이버 보험 가입', '접근 통제 강화'],
                    correct: 2,
                    explanation: '위험 전가는 보험 가입, 아웃소싱, 클라우드 이전 등을 통해 위험을 제3자에게 이전하는 전략이다.'
                },
                {
                    q: 'DoA(Degree of Assurance)는 무엇을 의미하는가?',
                    options: ['위험 평가 방법론', '위협 탐지 시스템', '수용 가능한 위험 수준', '데이터 보호 알고리즘'],
                    correct: 2,
                    explanation: 'DoA는 조직이 수용할 수 있는 위험의 수준을 의미하며, 잔여 위험이 이 수준 이하로 관리되어야 한다. 100점 목표가 아니라 DoA 설정이 핵심이다.'
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
                    explanation: '잔여 위험은 보안 대책을 적용한 후에도 남아있는 위험으로, DoA(수용 가능한 위험 수준) 이하로 유지해야 한다.'
                },
                {
                    q: '한 번 수용한 위험을 지속적으로 모니터링해야 하는 이유는?',
                    options: [
                        '한 번 수용했으면 끝까지 수용해도 된다',
                        '규정상 필요 없다',
                        '비용 절감을 위해',
                        '환경 변화로 인해 위험 수준이 달라질 수 있다'
                    ],
                    correct: 3,
                    explanation: '한 번 수용했다고 끝까지 수용해서는 안 된다. 조직·기술·법규·비즈니스 환경이 변화하면 이전에 수용한 위험도 재평가해야 한다.'
                },
                {
                    q: 'ISO 27001에서 위험 평가를 수행해야 하는 시점은?',
                    options: [
                        '인증 심사 직전에만',
                        '계획된 주기 + 중대한 변경사항 발생 시',
                        '3년에 한 번',
                        '최초 1회만'
                    ],
                    correct: 1,
                    explanation: 'ISMS 요구사항에 따르면 정기적인 주기 외에도 조직·시스템·비즈니스 환경에 중대한 변경이 발생하면 수시 위험 평가를 수행해야 한다.'
                },
                {
                    q: '자산(Asset)의 정의로 가장 적절한 것은?',
                    options: [
                        '조직이 소유한 건물과 장비만',
                        '네트워크에 연결된 장치만',
                        '클라우드에 저장된 데이터만',
                        '조직에 가치가 있는 모든 것(하드웨어, 소프트웨어, 데이터, 인력 등)'
                    ],
                    correct: 3,
                    explanation: '자산은 조직에 가치가 있는 모든 것을 의미하며, 하드웨어, 소프트웨어, 데이터, 인력, 시설 등을 모두 포함한다.'
                },

                // ========== 보안 기본 원칙 및 통제 (10문제) ==========
                {
                    q: '보안의 3요소인 CIA에서 C(Confidentiality)의 의미는?',
                    options: ['규정 준수', '비용 통제', '연결성', '허가된 사람만 정보에 접근 가능'],
                    correct: 3,
                    explanation: 'CIA는 기밀성(Confidentiality), 무결성(Integrity), 가용성(Availability)을 의미하며, 기밀성은 허가된 사람만 정보에 접근 가능하다는 원칙이다.'
                },
                {
                    q: '정보가 변조·훼손되지 않음을 보장하는 보안 요소는?',
                    options: ['기밀성', '가용성', '책임추적성', '무결성'],
                    correct: 3,
                    explanation: '무결성(Integrity)은 데이터가 인가되지 않은 방법으로 변경되거나 훼손되지 않도록 보호하는 것을 의미한다.'
                },
                {
                    q: '보안 통제(Control)의 세 가지 유형이 아닌 것은?',
                    options: ['관리적 통제', '재무적 통제', '물리적 통제', '기술적 통제'],
                    correct: 1,
                    explanation: '보안 통제는 관리적(Administrative), 물리적(Physical), 기술적(Technical) 통제로 분류된다. 재무적 통제는 보안 통제 유형이 아니다.'
                },
                {
                    q: '예방 통제(Preventive)와 탐지 통제(Detective)의 차이는?',
                    options: [
                        '예방은 사고를 사전에 차단, 탐지는 사고를 발견',
                        '둘 다 사고를 차단한다',
                        '예방은 사고 후 복구, 탐지는 사고 전 차단',
                        '차이가 없다'
                    ],
                    correct: 0,
                    explanation: '예방 통제는 사고를 사전에 차단(방화벽, 암호화)하고, 탐지 통제는 이상 징후를 발견(IDS, 로그 모니터링, CCTV)하는 역할이다.'
                },
                {
                    q: 'SoD(Separation of Duties, 직무 분리)의 목적은?',
                    options: [
                        '한 사람이 모든 권한을 갖지 못하도록 권한을 분리하여 부정행위 방지',
                        '업무 효율성을 높인다',
                        '인력을 줄인다',
                        '속도를 향상시킨다'
                    ],
                    correct: 0,
                    explanation: '직무 분리(SoD)는 한 사람이 처음부터 끝까지 모든 중요한 작업을 수행할 수 없도록 권한을 분리하여 부정행위를 방지하는 통제이다.'
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
                {
                    q: 'Shift-Left 보안의 핵심 원칙은?',
                    options: [
                        '개발 완료 후 보안 테스트',
                        '운영 중 보안 점검만 수행',
                        'SDLC 기획·설계 단계부터 보안을 반영',
                        '보안 담당자 없이 개발'
                    ],
                    correct: 2,
                    explanation: 'Shift-Left는 SDLC 초기(기획·설계)부터 보안을 반영하는 것으로, 나중에 보안을 추가하는 것보다 15~30배 비용 절감 효과가 있다.'
                },
                {
                    q: 'Zero Trust의 기본 원칙은?',
                    options: [
                        '내부 네트워크는 항상 신뢰한다',
                        'Never Trust, Always Verify',
                        '외부만 차단하고 내부는 자유롭게',
                        '방화벽만 있으면 된다'
                    ],
                    correct: 1,
                    explanation: 'Zero Trust는 "절대 신뢰하지 않고, 항상 검증한다"는 원칙으로, MFA와 최소 권한(Least Privilege)이 핵심이다.'
                },
                {
                    q: 'CCE, CWE, CVE의 구분으로 올바른 것은?',
                    options: [
                        'CCE=시스템 설정, CWE=소프트웨어 약점, CVE=발견된 취약점',
                        '모두 동일한 의미이다',
                        'CCE=네트워크, CWE=하드웨어, CVE=소프트웨어',
                        'CCE=취약점, CWE=설정, CVE=약점'
                    ],
                    correct: 0,
                    explanation: 'CCE(Common Configuration Enumeration)는 시스템 설정, CWE(Common Weakness Enumeration)는 소프트웨어 약점, CVE(Common Vulnerabilities and Exposures)는 발견된 취약점 목록이다.'
                },
                {
                    q: '다계층 방어(Defense in Depth) 전략의 핵심은?',
                    options: [
                        '단일 보안 솔루션에 집중한다',
                        '여러 계층에 걸쳐 중첩된 보안 통제를 구현한다',
                        '비용을 최소화한다',
                        '방화벽 하나로 충분하다'
                    ],
                    correct: 1,
                    explanation: '다계층 방어는 네트워크, 호스트, 애플리케이션, 데이터 등 여러 계층에 중첩된 통제를 구현하여, 하나가 실패해도 다른 계층이 보호하는 전략이다.'
                },

                // ========== 컴플라이언스 및 인증 (8문제) ==========
                {
                    q: 'ISMS-P에서 P는 무엇을 의미하는가?',
                    options: ['Protection', 'Privacy', 'Policy', 'Process'],
                    correct: 1,
                    explanation: 'ISMS-P는 정보보호 및 개인정보보호 관리체계로, P는 Privacy(개인정보보호)를 의미한다.'
                },
                {
                    q: 'ISMS-P 의무 대상 기준으로 올바른 것은?',
                    options: [
                        '모든 기업',
                        '정보통신 서비스 매출 100억 이상 또는 일평균 이용자 100만 명 이상',
                        '직원 수 50명 이상',
                        'IT 기업만 해당'
                    ],
                    correct: 1,
                    explanation: 'ISMS-P 의무 대상은 정보통신 서비스 매출 100억 이상, 일평균 이용자 수 100만 명 이상 등 명확한 수치 기준이 존재한다.'
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
                    explanation: 'GDPR 위반 시 최대 글로벌 연매출의 4% 또는 2천만 유로 중 높은 금액이 과징금으로 부과된다.'
                },
                {
                    q: '한국에서 중대 보안 위반 시 최대 과징금 기준은?',
                    options: ['영업이익의 5%', '순이익의 3%', '매출액의 최대 10%', '벌금 1억원'],
                    correct: 2,
                    explanation: '중대 위반 시 매출액의 최대 10% 과징금이 부과된다. 영업이익이 아니라 매출 기준이라는 점이 치명적이다.'
                },
                {
                    q: 'TISAX는 어느 산업의 보안 인증인가?',
                    options: ['금융', '자동차', '의료', '교육'],
                    correct: 1,
                    explanation: 'TISAX(Trusted Information Security Assessment Exchange)는 자동차 산업의 정보보안 평가 및 인증 표준으로, BMW, 폭스바겐 등 글로벌 OEM 납품 필수 조건이다.'
                },
                {
                    q: 'PIA(개인정보 영향평가)에 대한 설명으로 올바른 것은?',
                    options: [
                        '공공기관만 의무이다',
                        'ISO 27701, GDPR 기준에서 민간 기업도 고위험 처리 시 필수',
                        '선택 사항이다',
                        'IT 기업에만 해당한다'
                    ],
                    correct: 1,
                    explanation: 'PIA는 공공기관 전용이 아니다. ISO 27701, GDPR 기준에서는 고위험 개인정보 처리 시 민간 기업도 필수로 수행해야 한다.'
                },
                {
                    q: 'ISO 27701은 무엇에 대한 표준인가?',
                    options: ['클라우드 보안', '개인정보 관리체계(PIMS)', '네트워크 보안', 'AI 보안'],
                    correct: 1,
                    explanation: 'ISO 27701은 개인정보 관리체계(PIMS)에 대한 표준으로, ISO 27001을 확장하여 개인정보 보호를 다룬다.'
                },
                {
                    q: '고유식별번호에 해당하는 것이 아닌 것은?',
                    options: ['주민등록번호', '여권번호', '이메일 주소', '외국인등록번호'],
                    correct: 2,
                    explanation: '고유식별번호는 주민등록번호, 여권번호, 운전면허번호, 외국인등록번호 4가지이다. 이메일 주소는 개인정보이지만 고유식별번호가 아니다.'
                },

                // ========== BCP/DRP 및 ITSM (5문제) ==========
                {
                    q: 'BCP(Business Continuity Plan)의 목적으로 가장 적절한 것은?',
                    options: ['비용 절감', '직원 복지 향상', '재해나 장애 발생 시 사업의 지속성 보장', '마케팅 전략 수립'],
                    correct: 2,
                    explanation: 'BCP는 재해, 장애, 사고 등으로 정상적인 운영이 불가능할 때 핵심 업무를 지속하거나 신속히 복구하기 위한 계획이다.'
                },
                {
                    q: 'BIA(Business Impact Analysis)에서 Tier 1, 2, 3으로 구분하는 기준은?',
                    options: ['직원 수', '서버 수', '업무 중요도 및 중단 시 손실 규모', '예산 규모'],
                    correct: 2,
                    explanation: 'BIA는 각 업무의 중요도를 평가하고 중단 시 손실 규모를 분석하여 복구 우선순위(Tier 1=최우선, Tier 2, Tier 3)를 정한다.'
                },
                {
                    q: 'RTO와 RPO의 차이로 올바른 것은?',
                    options: [
                        'RTO=복구 목표 시간, RPO=복구 목표 시점(데이터)',
                        '동일한 개념이다',
                        'RTO=데이터 복구, RPO=시간 복구',
                        'RTO=백업 주기, RPO=패치 주기'
                    ],
                    correct: 0,
                    explanation: 'RTO(Recovery Time Objective)는 "사고 후 몇 시간 안에 복구할 것인가", RPO(Recovery Point Objective)는 "데이터를 어느 시점까지 되돌릴 것인가"이다.'
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
                {
                    q: 'ITSM(IT Service Management)의 주요 활동이 아닌 것은?',
                    options: ['구성 관리', '변경 관리', '배포 관리', '마케팅 관리'],
                    correct: 3,
                    explanation: 'ITSM은 자산대장 점검, 구성 관리, 변경 관리, 배포 관리 등 IT 서비스를 체계적으로 관리하는 프레임워크이다.'
                },

                // ========== 실무 시나리오 및 컨설팅 (7문제) ==========
                {
                    q: '보안 컨설팅 방법론의 올바른 순서는?',
                    options: [
                        '인증 → 진단 → 위험 평가 → Scope',
                        '환경 분석·Scope → 현황 진단(Gap) → 위험 평가 → 보호대책 → 내부 감사 → 경영검토 → 인증',
                        '감사 → Scope → 진단 → 인증',
                        '위험 평가 → Scope → 감사 → 진단'
                    ],
                    correct: 1,
                    explanation: '컨설팅 방법론은 ①환경 분석·Scope 설정 → ②현황 진단(Gap Analysis) → ③위험 평가·처리 → ④보호대책 설계·이행 → ⑤내부 감사·경영검토 → ⑥인증·사후관리 순이다.'
                },
                {
                    q: '문서와 실제 운영의 불일치로 인한 심사 부적합을 피하기 위한 원칙은?',
                    options: [
                        '문서를 작성하지 않는다',
                        '문서에 쓴 내용은 반드시 증적으로 남겨야 한다',
                        '실제 운영은 하지 않는다',
                        '심사원에게 알리지 않는다'
                    ],
                    correct: 1,
                    explanation: '문서에 "연 1회 교육", "로그 점검" 등을 명시했다면 반드시 실제로 수행하고 기록/증적을 남겨야 한다. 이것이 가장 많이 걸리는 치명 포인트이다.'
                },
                {
                    q: 'SoA에서 통제를 미적용할 때 가장 피해야 할 실수는?',
                    options: [
                        '위험 평가 결과와 논리적으로 연결되지 않는 미적용 사유',
                        '경영진 승인을 받는 것',
                        '대안 통제를 제시하는 것',
                        '명확한 근거를 제시하는 것'
                    ],
                    correct: 0,
                    explanation: 'Risk → Treatment → SoA 논리 연결이 필수이다. 위험 평가에서 고위험인데 "비용 과다"로 미적용하면 논리 모순으로 부적합이다.'
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
                    q: '로그 관리에서 중요한 3요소가 아닌 것은?',
                    options: ['수집', '삭제', '보관', '검토'],
                    correct: 1,
                    explanation: '로그 관리의 핵심은 ①수집(정말 다 모으는가), ②보관(기간 충족하는가), ③검토(실제로 보는가)이다. "자동 수집만 하고 안 봄"은 부적합이다.'
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
                    q: '보안 컨설턴트의 핵심 역량으로 가장 중요한 것은?',
                    options: [
                        '특정 기술 스택에 대한 깊은 지식',
                        '프로그래밍 능력',
                        '비즈니스 이해와 이해관계자 설득, 법·표준 기반 리스크 관리',
                        '네트워크 장비 설정 능력'
                    ],
                    correct: 2,
                    explanation: '보안 컨설팅은 기술 직무가 아니라 문제 해결 직무이며, "얼마나 많은 기술을 아느냐"가 아니라 "조직 상황에 맞는 최적 해법을 설계할 수 있느냐"가 핵심이다.'
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
