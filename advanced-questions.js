// 심화 문제 - 시나리오 기반, 복합 개념, 문제 해결형

const advancedQuestions = {
    examQuestions: {
        network_advanced: {
            title: '네트워크 & 클라우드 심화',
            questions: [
                {
                    q: '회사 내부망(192.168.1.0/24)에서 외부 인터넷으로 통신 시, NAT를 거쳐 나가는 패킷의 Source IP는 어떻게 변경되는가?',
                    options: [
                        '192.168.1.x → 그대로 유지',
                        '공인 IP → 192.168.1.x로 변환',
                        '192.168.1.x → 127.0.0.1로 변환',
                        '192.168.1.x → 공인 IP로 변환'
                    ],
                    correct: 3,
                    explanation: 'NAT(Source NAT)는 내부 사설 IP를 외부로 나갈 때 공인 IP로 변환합니다. 응답 패킷은 다시 사설 IP로 역변환됩니다.'
                },
                {
                    q: '웹 서버가 DMZ에 배치되어야 하는 주된 이유는?',
                    options: [
                        '성능 향상',
                        '외부 접근 허용하면서 내부망 보호',
                        '비용 절감',
                        'DNS 속도 향상'
                    ],
                    correct: 1,
                    explanation: 'DMZ는 외부에서 접근 가능한 서버를 배치하되, 내부 네트워크와 분리하여 침해 시 내부망 피해를 최소화합니다.'
                },
                {
                    q: 'IPS와 IDS를 함께 사용하는 네트워크에서, 의심스러운 트래픽 발견 시 각각의 역할은?',
                    options: [
                        'IPS는 로그 기록, IDS는 차단',
                        '둘 다 차단만 수행',
                        'IPS는 차단, IDS는 경고 및 로그',
                        '둘 다 경고만 수행'
                    ],
                    correct: 2,
                    explanation: 'IPS는 실시간으로 위협을 차단하고, IDS는 탐지하여 관리자에게 경고합니다. 함께 사용하면 방어와 모니터링을 동시에 수행합니다.'
                },
                {
                    q: 'VLAN을 사용하는 주된 보안상 이점은?',
                    options: [
                        '속도 향상',
                        '라우터 불필요',
                        'IP 주소 절약',
                        '물리적 네트워크를 논리적으로 분리하여 브로드캐스트 격리'
                    ],
                    correct: 3,
                    explanation: 'VLAN은 물리적으로 같은 스위치에 연결되어도 논리적으로 분리하여 부서별/용도별 네트워크를 격리하고 보안을 강화합니다.'
                },
                {
                    q: 'L3 스위치와 L2 스위치의 가장 큰 차이점은?',
                    options: [
                        'L3는 MAC 주소만, L2는 IP 주소 기반 스위칭',
                        '차이 없음',
                        'L3는 IP 라우팅 가능, L2는 MAC 주소만 처리',
                        'L3가 더 느림'
                    ],
                    correct: 2,
                    explanation: 'L3 스위치는 IP 라우팅 기능을 포함하여 VLAN 간 라우팅이 가능하지만, L2는 MAC 주소 기반 스위칭만 수행합니다.'
                },
                {
                    q: 'Zero Trust 네트워크에서 내부 사용자가 내부 서버 접근 시에도 인증이 필요한 이유는?',
                    options: [
                        '불필요한 절차',
                        '속도 향상',
                        '내부자 위협과 측면 이동 방지',
                        '법적 요구사항'
                    ],
                    correct: 2,
                    explanation: 'Zero Trust는 "내부=안전"이라는 전제를 거부하고, 내부 사용자도 침해되었거나 악의적일 수 있으므로 모든 접근을 검증합니다.'
                },
                {
                    q: 'VPN과 Proxy의 가장 큰 차이점은?',
                    options: [
                        'Proxy가 더 안전함',
                        '차이 없음',
                        'VPN은 암호화 안 함',
                        'VPN은 전체 트래픽 암호화, Proxy는 특정 애플리케이션만'
                    ],
                    correct: 3,
                    explanation: 'VPN은 전체 네트워크 트래픽을 암호화하지만, Proxy는 주로 웹 브라우저 같은 특정 애플리케이션의 요청만 중계합니다.'
                },
                {
                    q: 'Subnet Mask 255.255.255.192(/26)는 몇 개의 호스트 IP를 제공하는가?',
                    options: [
                        '64개',
                        '32개',
                        '62개',
                        '30개'
                    ],
                    correct: 2,
                    explanation: '/26은 2^6=64개 주소 중 네트워크 주소(1개)와 브로드캐스트 주소(1개)를 제외하면 62개의 호스트 IP를 사용할 수 있습니다.'
                },
                {
                    q: 'DNS Spoofing 공격에 대응하는 가장 효과적인 방법은?',
                    options: [
                        'DNS 서버 재시작',
                        'DNS 캐시 삭제',
                        'IP 주소 직접 사용',
                        'DNSSEC 사용'
                    ],
                    correct: 3,
                    explanation: 'DNSSEC은 DNS 응답에 디지털 서명을 추가하여 위조된 DNS 응답을 검증하고 차단합니다.'
                },
                {
                    q: 'Load Balancer에서 세션 지속성(Session Persistence)이 필요한 이유는?',
                    options: [
                        '속도 향상',
                        '같은 사용자의 요청을 동일 서버로 유지하여 세션 유지',
                        '서버 부하 감소',
                        '보안 강화'
                    ],
                    correct: 1,
                    explanation: '사용자 세션 데이터가 특정 서버에 저장되는 경우, 같은 사용자를 계속 같은 서버로 보내야 로그인 상태 등을 유지할 수 있습니다.'
                },
                {
                    q: 'CDN을 사용할 때 원본 서버(Origin Server)의 부하가 감소하는 이유는?',
                    options: [
                        'CDN이 더 빠른 서버 사용',
                        '정적 콘텐츠를 엣지 서버에 캐싱하여 요청 감소',
                        'DNS 최적화',
                        '압축 기술'
                    ],
                    correct: 1,
                    explanation: 'CDN은 정적 콘텐츠(이미지, CSS, JS)를 전 세계 엣지 서버에 캐싱하여 원본 서버로의 요청 횟수를 크게 줄입니다.'
                },
                {
                    q: 'ARP Spoofing 공격으로 공격자가 얻을 수 있는 것은?',
                    options: [
                        'DNS 서버 제어',
                        '중간자 공격(MITM)으로 트래픽 가로채기',
                        '서버 다운',
                        'IP 주소 변경'
                    ],
                    correct: 1,
                    explanation: 'ARP Spoofing은 공격자가 자신의 MAC 주소를 타겟의 IP와 연결시켜 트래픽을 가로채는 중간자 공격(MITM)을 가능하게 합니다.'
                },
                {
                    q: 'TCP SYN Flooding 공격 시 서버에 발생하는 현상은?',
                    options: [
                        'SYN-RECEIVED 상태의 Half-Open 연결이 쌓여 정상 연결 불가',
                        '메모리 부족',
                        'CPU 과부하',
                        '디스크 용량 부족'
                    ],
                    correct: 0,
                    explanation: 'SYN Flooding은 ACK를 보내지 않고 SYN만 대량 전송하여 서버가 Half-Open 연결 대기 상태로 자원을 소진하게 만듭니다.'
                },
                {
                    q: 'IPv6에서 NAT가 일반적으로 불필요한 이유는?',
                    options: [
                        'IPv6는 보안이 더 좋아서',
                        'IPv6는 속도가 빨라서',
                        'IPv6는 주소 공간이 충분하여 모든 기기가 공인 IP 사용 가능',
                        'IPv6는 암호화가 내장되어 있어서'
                    ],
                    correct: 2,
                    explanation: 'IPv6는 2^128개의 주소를 제공하여 모든 기기에 고유 공인 IP를 할당할 수 있어 NAT가 불필요합니다.'
                },
                {
                    q: 'Firewall에서 Stateful Inspection과 Stateless Filtering의 차이는?',
                    options: [
                        'Stateful은 각 패킷을 독립적으로, Stateless는 연결 상태 추적',
                        '차이 없음',
                        'Stateful이 더 느림',
                        'Stateful은 연결 상태 추적, Stateless는 각 패킷을 독립적으로 검사'
                    ],
                    correct: 3,
                    explanation: 'Stateful Firewall은 TCP 연결 상태를 추적하여 응답 패킷을 자동 허용하지만, Stateless는 각 패킷을 규칙과 독립적으로 비교합니다.'
                }
            ]
        },
        cloud_advanced: {
            title: '가상화 & 클라우드 심화',
            questions: [
                {
                    q: 'Kubernetes에서 Pod가 여러 개의 컨테이너를 포함할 때, 이들이 공유하는 것은?',
                    options: [
                        '파일시스템만',
                        'CPU만',
                        '아무것도 공유 안 함',
                        '네트워크 네임스페이스와 IPC'
                    ],
                    correct: 3,
                    explanation: '같은 Pod 내 컨테이너들은 네트워크 네임스페이스(localhost로 통신 가능)와 IPC, 선택적으로 볼륨을 공유합니다.'
                },
                {
                    q: 'Kubernetes StatefulSet과 Deployment의 가장 큰 차이는?',
                    options: [
                        'Deployment가 더 안정적',
                        '차이 없음',
                        'StatefulSet은 Pod 이름과 순서를 보장, Deployment는 무작위',
                        'StatefulSet은 사용 불가'
                    ],
                    correct: 2,
                    explanation: 'StatefulSet은 Pod에 고유하고 안정적인 네트워크 ID를 부여하고 순서대로 생성/삭제하여 데이터베이스 같은 상태 유지 앱에 적합합니다.'
                },
                {
                    q: 'Kubernetes etcd가 장애 발생 시 클러스터에 미치는 영향은?',
                    options: [
                        '아무 영향 없음',
                        '새로운 Pod 생성, 서비스 변경 등 모든 상태 변경 불가',
                        'Pod만 중단',
                        '네트워크만 중단'
                    ],
                    correct: 1,
                    explanation: 'etcd는 클러스터의 모든 구성 데이터와 상태를 저장하므로, 장애 시 읽기는 가능하나 새로운 변경사항 기록이 불가능합니다.'
                },
                {
                    q: 'Kubernetes Service의 ClusterIP 타입을 사용할 때 외부에서 접근 가능한가?',
                    options: [
                        '가능',
                        '불가능, 클러스터 내부에서만 접근 가능',
                        'DNS 설정 시 가능',
                        'NodePort와 동일'
                    ],
                    correct: 1,
                    explanation: 'ClusterIP는 클러스터 내부에서만 사용하는 가상 IP입니다. 외부 접근은 NodePort, LoadBalancer, Ingress를 사용해야 합니다.'
                },
                {
                    q: 'Docker 컨테이너가 재시작되면 내부 데이터는 어떻게 되는가?',
                    options: [
                        '볼륨에 저장한 데이터만 보존, 나머지는 손실',
                        '모두 보존됨',
                        '모두 손실',
                        '로그만 보존'
                    ],
                    correct: 0,
                    explanation: '컨테이너는 ephemeral(일시적)이므로 재시작 시 파일시스템 변경사항이 사라집니다. 영구 데이터는 반드시 볼륨에 저장해야 합니다.'
                },
                {
                    q: 'Docker Image Layer가 읽기 전용인 이유는?',
                    options: [
                        '보안',
                        '속도 향상',
                        '법적 요구사항',
                        '여러 컨테이너가 같은 이미지를 공유하여 디스크 절약'
                    ],
                    correct: 3,
                    explanation: 'Image Layer를 읽기 전용으로 유지하면 여러 컨테이너가 같은 base layer를 공유하여 저장공간을 절약할 수 있습니다.'
                },
                {
                    q: 'Kubernetes Horizontal Pod Autoscaler(HPA)가 Pod 수를 결정하는 기준은?',
                    options: [
                        'CPU/메모리 사용률 등 메트릭',
                        '시간',
                        '수동 설정만',
                        '무작위'
                    ],
                    correct: 0,
                    explanation: 'HPA는 CPU, 메모리, 커스텀 메트릭을 모니터링하여 목표 사용률에 맞게 자동으로 Pod 개수를 조절합니다.'
                },
                {
                    q: 'IaaS, PaaS, SaaS 중 개발자가 OS를 직접 관리해야 하는 모델은?',
                    options: [
                        'IaaS',
                        'SaaS',
                        'PaaS',
                        '모두'
                    ],
                    correct: 0,
                    explanation: 'IaaS는 가상머신을 제공하므로 OS 설치, 패치, 보안 등을 사용자가 관리합니다. PaaS는 플랫폼이 OS를 관리합니다.'
                },
                {
                    q: 'Kubernetes ConfigMap과 Secret의 주요 차이점은?',
                    options: [
                        '차이 없음',
                        'ConfigMap은 평문, Secret은 base64 인코딩 및 암호화 지원',
                        'Secret이 더 빠름',
                        'ConfigMap은 사용 불가'
                    ],
                    correct: 1,
                    explanation: 'ConfigMap은 일반 설정값 저장, Secret은 비밀번호 같은 민감 데이터를 base64 인코딩하고 암호화하여 저장합니다.'
                },
                {
                    q: 'Container와 VM의 시작 속도 차이가 나는 가장 큰 이유는?',
                    options: [
                        '컨테이너가 작아서',
                        'VM이 더 안전해서',
                        '컨테이너는 OS 커널을 공유하므로 OS 부팅 불필요',
                        '네트워크 속도'
                    ],
                    correct: 2,
                    explanation: 'VM은 전체 OS를 부팅해야 하지만, 컨테이너는 호스트 커널을 공유하므로 프로세스처럼 빠르게 시작됩니다.'
                },
                {
                    q: 'Kubernetes Namespace의 주요 용도는?',
                    options: [
                        '보안 강화만',
                        '속도 향상',
                        '리소스를 논리적으로 분리하여 다중 팀/프로젝트 격리',
                        'IP 주소 할당'
                    ],
                    correct: 2,
                    explanation: 'Namespace는 클러스터 내에서 리소스를 논리적으로 분리하여 팀별, 환경별(dev/prod) 격리를 제공합니다.'
                },
                {
                    q: 'Kubernetes에서 Pod가 다른 Node로 이동할 때 IP 주소는?',
                    options: [
                        '유지됨',
                        '관리자가 설정',
                        '변경됨 (Pod IP는 ephemeral)',
                        '항상 127.0.0.1'
                    ],
                    correct: 2,
                    explanation: 'Pod IP는 일시적이므로 재시작이나 재배치 시 변경됩니다. Service를 통해 안정적인 엔드포인트를 제공합니다.'
                },
                {
                    q: 'Public Cloud, Private Cloud, Hybrid Cloud 중 보안과 유연성을 모두 고려한 모델은?',
                    options: [
                        'Hybrid Cloud',
                        'Public Cloud',
                        'Private Cloud',
                        '없음'
                    ],
                    correct: 0,
                    explanation: 'Hybrid Cloud는 민감 데이터는 Private Cloud에, 일반 서비스는 Public Cloud에 배치하여 보안과 확장성을 동시에 확보합니다.'
                },
                {
                    q: 'Kubernetes Ingress의 주요 역할은?',
                    options: [
                        'HTTP/HTTPS 라우팅 규칙으로 외부 트래픽을 Service로 전달',
                        '내부 통신만',
                        'Pod 생성',
                        '모니터링'
                    ],
                    correct: 0,
                    explanation: 'Ingress는 L7 로드밸런서 역할로 도메인/경로 기반 라우팅을 통해 외부 HTTP(S) 요청을 적절한 Service로 전달합니다.'
                },
                {
                    q: 'Docker Container에서 root 권한으로 실행하는 것이 위험한 이유는?',
                    options: [
                        '속도 저하',
                        '메모리 부족',
                        '법적 문제',
                        '컨테이너 탈출 시 호스트 시스템 제어 가능'
                    ],
                    correct: 3,
                    explanation: '컨테이너가 침해되어 탈출(Container Escape)하면 호스트의 root 권한을 얻을 수 있으므로 최소 권한 원칙을 적용해야 합니다.'
                }
            ]
        },
        hacking_advanced: {
            title: '모의해킹 심화',
            questions: [
                {
                    q: 'Blind SQL Injection에서 데이터베이스 이름을 한 글자씩 추출할 때 사용하는 함수는?',
                    options: [
                        'LENGTH(), SUBSTR()',
                        'COUNT()',
                        'SUM()',
                        'AVG()'
                    ],
                    correct: 0,
                    explanation: 'LENGTH()로 길이를 확인하고, SUBSTR() 또는 SUBSTRING()으로 한 글자씩 추출하여 참/거짓 응답으로 데이터를 유추합니다.'
                },
                {
                    q: 'SQL Injection에서 UNION을 사용하려면 반드시 맞춰야 하는 것은?',
                    options: [
                        '테이블 이름',
                        '컬럼 개수와 데이터 타입',
                        'WHERE 조건',
                        'ORDER BY'
                    ],
                    correct: 1,
                    explanation: 'UNION은 두 쿼리의 결과를 합치므로 SELECT 컬럼 개수와 각 컬럼의 데이터 타입이 일치해야 합니다.'
                },
                {
                    q: 'Stored XSS와 Reflected XSS의 가장 큰 차이는?',
                    options: [
                        'Reflected가 더 위험',
                        'Stored는 DB에 저장됨, Reflected는 즉시 반사',
                        '차이 없음',
                        'Stored는 사용 불가'
                    ],
                    correct: 1,
                    explanation: 'Stored XSS는 악성 스크립트가 DB에 저장되어 여러 사용자에게 지속적으로 실행되며, Reflected는 URL 파라미터 등으로 즉시 반사됩니다.'
                },
                {
                    q: 'XSS 공격으로 공격자가 탈취할 수 있는 가장 위험한 정보는?',
                    options: [
                        '세션 쿠키 (document.cookie)',
                        'HTML 코드',
                        'CSS 스타일',
                        '이미지'
                    ],
                    correct: 0,
                    explanation: 'XSS로 세션 쿠키를 탈취하면 사용자 계정을 하이재킹할 수 있습니다. HttpOnly 플래그로 방어 가능합니다.'
                },
                {
                    q: 'Command Injection에서 여러 명령을 연결할 때 사용하는 문자가 아닌 것은?',
                    options: [
                        ';',
                        '|',
                        '@',
                        '&&'
                    ],
                    correct: 2,
                    explanation: '; (순차), | (파이프), && (조건부), || (OR) 등이 명령 연결에 사용되며, @는 일반적으로 사용되지 않습니다.'
                },
                {
                    q: 'File Upload 취약점 방어 시 파일 확장자만 검증하는 것이 불충분한 이유는?',
                    options: [
                        '속도 문제',
                        '법적 문제',
                        '메모리 부족',
                        '확장자 우회(.php.jpg), MIME 타입 위조 가능'
                    ],
                    correct: 3,
                    explanation: '공격자는 이중 확장자, null byte, MIME 타입 위조 등으로 우회하므로 파일 내용(매직 넘버) 검증과 실행 권한 제거가 필요합니다.'
                },
                {
                    q: 'CSRF 공격이 성공하기 위한 전제 조건은?',
                    options: [
                        'SQL Injection',
                        'XSS 취약점',
                        'DNS Spoofing',
                        '피해자가 해당 사이트에 로그인된 상태'
                    ],
                    correct: 3,
                    explanation: 'CSRF는 피해자의 브라우저에 있는 인증 쿠키를 악용하므로, 피해자가 로그인 상태여야 합니다.'
                },
                {
                    q: 'Time-based Blind SQL Injection에서 sleep() 함수의 역할은?',
                    options: [
                        '데이터 삭제',
                        '속도 향상',
                        '조건이 참일 때 응답 지연으로 참/거짓 판별',
                        '로그 삭제'
                    ],
                    correct: 2,
                    explanation: 'sleep(5)를 조건과 함께 실행하면, 조건이 참일 때만 5초 지연되어 응답 시간으로 참/거짓을 판단할 수 있습니다.'
                },
                {
                    q: 'OS Command Injection에서 ping 명령어를 악용할 때 추가 명령을 실행하는 방법은?',
                    options: [
                        'ping only',
                        'ping + whoami',
                        'ping - whoami',
                        'ping; whoami'
                    ],
                    correct: 3,
                    explanation: 'ping 192.168.1.1; whoami 처럼 세미콜론(;)으로 명령을 연결하면 ping 실행 후 whoami가 실행됩니다.'
                },
                {
                    q: 'XXE(XML External Entity) 공격의 주요 위협은?',
                    options: [
                        '서버 내부 파일 읽기 또는 SSRF',
                        'XSS',
                        'SQL Injection',
                        'DDoS'
                    ],
                    correct: 0,
                    explanation: 'XXE는 XML 파서가 외부 엔터티를 처리할 때 /etc/passwd 같은 파일을 읽거나 내부 네트워크에 요청을 보낼 수 있습니다.'
                },
                {
                    q: 'Burp Suite의 Repeater 기능의 주요 용도는?',
                    options: [
                        '자동 스캔',
                        '보고서 생성',
                        '수동으로 HTTP 요청을 반복 전송하여 파라미터 테스트',
                        '네트워크 스캔'
                    ],
                    correct: 2,
                    explanation: 'Repeater는 HTTP 요청을 수정하고 반복 전송하여 SQL Injection, XSS 등의 페이로드를 수동으로 테스트할 때 사용합니다.'
                },
                {
                    q: 'SQL Injection 방어를 위한 Prepared Statement의 원리는?',
                    options: [
                        '입력값을 암호화',
                        '입력값 길이 제한',
                        '로그 기록',
                        '쿼리 구조와 데이터를 분리하여 데이터를 코드로 해석 방지'
                    ],
                    correct: 3,
                    explanation: 'Prepared Statement는 SQL 구조를 먼저 컴파일하고 사용자 입력을 파라미터로 바인딩하여 입력값이 SQL 코드로 해석되지 않게 합니다.'
                },
                {
                    q: 'Path Traversal 공격에서 ../../etc/passwd의 목적은?',
                    options: [
                        '현재 디렉토리 파일 삭제',
                        '다운로드 속도 향상',
                        '압축 해제',
                        '상위 디렉토리로 이동하여 시스템 파일 접근'
                    ],
                    correct: 3,
                    explanation: '../는 상위 디렉토리로 이동하므로 반복하면 웹 루트를 벗어나 /etc/passwd 같은 시스템 파일에 접근할 수 있습니다.'
                },
                {
                    q: 'SSRF(Server-Side Request Forgery) 공격의 핵심은?',
                    options: [
                        '서버가 내부 네트워크나 로컬 자원에 요청하도록 유도',
                        '클라이언트를 공격',
                        'DNS 공격',
                        '암호화 우회'
                    ],
                    correct: 0,
                    explanation: 'SSRF는 서버가 공격자가 지정한 URL(내부 IP, localhost)로 요청을 보내도록 하여 내부망 스캔이나 AWS 메타데이터 탈취 등을 수행합니다.'
                },
                {
                    q: 'Hash 함수 MD5와 SHA-256 중 현재 권장되는 것은?',
                    options: [
                        'MD5',
                        'SHA-256',
                        '둘 다 동일',
                        '둘 다 사용 금지'
                    ],
                    correct: 1,
                    explanation: 'MD5는 충돌 공격에 취약하여 보안용으로 사용 금지되었고, SHA-256 이상이 권장됩니다.'
                }
            ]
        },
        vulnerability_advanced: {
            title: '취약점 진단 심화',
            questions: [
                {
                    q: 'CVE-2021-44228 (Log4Shell)의 공격 벡터는?',
                    options: [
                        'SQL Injection',
                        'JNDI Lookup을 통한 원격 코드 실행',
                        'XSS',
                        'CSRF'
                    ],
                    correct: 1,
                    explanation: 'Log4j의 JNDI lookup 기능이 악의적인 LDAP 서버에서 코드를 다운로드하여 실행하는 원격 코드 실행(RCE) 취약점입니다.'
                },
                {
                    q: 'CVSS 점수가 9.8일 때 Base Score에 영향을 주는 요소가 아닌 것은?',
                    options: [
                        '공격 복잡도(Attack Complexity)',
                        '권한 요구사항(Privileges Required)',
                        '기밀성 영향(Confidentiality Impact)',
                        '영향 받는 사용자 수'
                    ],
                    correct: 3,
                    explanation: 'CVSS Base Score는 공격 벡터, 복잡도, 권한, 사용자 상호작용, CIA 영향을 평가하며, 영향 받는 사용자 수는 Temporal/Environmental Metrics입니다.'
                },
                {
                    q: 'Zero-Day 취약점의 정의는?',
                    options: [
                        '오래된 취약점',
                        '패치가 나오기 전에 공격에 악용되는 취약점',
                        '낮은 위험도 취약점',
                        '이미 패치된 취약점'
                    ],
                    correct: 1,
                    explanation: 'Zero-Day는 벤더가 취약점을 인지한 날로부터 패치가 나오기까지 0일(즉시 공격 가능)인 상태를 의미합니다.'
                },
                {
                    q: 'OWASP Top 10에서 Injection이 1위인 이유는?',
                    options: [
                        '흔하고 영향도가 크며 자동화 공격 가능',
                        '발견하기 어려워서',
                        '패치가 없어서',
                        '오래된 취약점'
                    ],
                    correct: 0,
                    explanation: 'Injection(SQL, Command 등)은 매우 흔하고, 자동화 가능하며, 성공 시 전체 시스템 장악이 가능하여 심각도가 높습니다.'
                },
                {
                    q: 'Insecure Deserialization 취약점의 위험성은?',
                    options: [
                        '정보 노출만',
                        '원격 코드 실행(RCE) 가능',
                        '속도 저하',
                        '로그 증가'
                    ],
                    correct: 1,
                    explanation: '역직렬화 시 악의적인 객체를 주입하면 서버에서 임의 코드를 실행할 수 있어 매우 위험합니다.'
                },
                {
                    q: 'Security Misconfiguration의 대표적인 예는?',
                    options: [
                        '기본 비밀번호 사용, 불필요한 기능 활성화',
                        'SQL Injection',
                        'XSS',
                        'DDoS'
                    ],
                    correct: 0,
                    explanation: '기본 계정/비밀번호, 불필요한 서비스, 에러 메시지 노출, 오래된 소프트웨어 등이 보안 설정 오류입니다.'
                },
                {
                    q: 'Broken Authentication 취약점으로 발생할 수 있는 공격은?',
                    options: [
                        'SQL Injection만',
                        '세션 하이재킹, 무차별 대입 공격, 크리덴셜 스터핑',
                        'XSS만',
                        'DDoS만'
                    ],
                    correct: 1,
                    explanation: '약한 인증 메커니즘은 세션 탈취, 비밀번호 무차별 대입, 유출된 계정 재사용(Credential Stuffing) 등을 허용합니다.'
                },
                {
                    q: 'Sensitive Data Exposure 방지를 위한 핵심 조치는?',
                    options: [
                        '전송 시 HTTPS, 저장 시 암호화',
                        '방화벽 설치',
                        'SQL Injection 방어',
                        '로그 삭제'
                    ],
                    correct: 0,
                    explanation: '민감 데이터는 전송 시 TLS/SSL로, 저장 시 강력한 암호화 알고리즘으로 보호해야 합니다.'
                },
                {
                    q: 'XML External Entity(XXE) 방어 방법은?',
                    options: [
                        'XML 사용 금지',
                        'JSON 사용',
                        'XML 파서에서 외부 엔터티 처리 비활성화',
                        '입력값 길이 제한'
                    ],
                    correct: 2,
                    explanation: 'XML 파서 설정에서 외부 엔터티와 DTD 처리를 비활성화하면 XXE 공격을 방지할 수 있습니다.'
                },
                {
                    q: 'Security Headers 중 XSS 방어에 도움이 되는 것은?',
                    options: [
                        'Cache-Control',
                        'Expires',
                        'Content-Security-Policy',
                        'ETag'
                    ],
                    correct: 2,
                    explanation: 'CSP는 스크립트 실행 출처를 제한하여 XSS 공격 영향을 줄이고, X-XSS-Protection도 추가 방어층을 제공합니다.'
                },
                {
                    q: 'SIEM의 주요 기능인 로그 상관분석(Correlation)의 목적은?',
                    options: [
                        '로그 삭제',
                        '여러 로그를 연관시켜 공격 패턴 탐지',
                        '로그 압축',
                        '로그 암호화'
                    ],
                    correct: 1,
                    explanation: 'SIEM은 다양한 소스의 로그를 수집하고 상관분석하여 분산된 공격이나 복잡한 위협을 탐지합니다.'
                },
                {
                    q: 'Incident Response의 첫 단계는?',
                    options: [
                        '복구',
                        '준비(Preparation)',
                        '제거',
                        '보고서 작성'
                    ],
                    correct: 1,
                    explanation: 'Incident Response는 준비 → 탐지 및 분석 → 억제 → 제거 → 복구 → 사후 검토 순으로 진행됩니다.'
                },
                {
                    q: 'Privilege Escalation 공격의 목표는?',
                    options: [
                        '권한 축소',
                        '로그아웃',
                        '속도 향상',
                        '낮은 권한에서 높은 권한(root/admin)으로 상승'
                    ],
                    correct: 3,
                    explanation: '권한 상승은 일반 사용자 권한에서 시스템 관리자 권한을 획득하여 전체 시스템을 장악하는 것입니다.'
                },
                {
                    q: 'Supply Chain Attack의 위험성은?',
                    options: [
                        '직접 공격보다 덜 위험',
                        '신뢰하는 소프트웨어/라이브러리를 통해 다수 피해자 감염',
                        '탐지 쉬움',
                        '영향 범위 작음'
                    ],
                    correct: 1,
                    explanation: 'SolarWinds 사건처럼 널리 사용되는 소프트웨어를 감염시키면 수천 개 조직이 동시에 피해를 입을 수 있습니다.'
                },
                {
                    q: 'Penetration Testing과 Vulnerability Assessment의 차이는?',
                    options: [
                        'Pentest는 실제 공격 시뮬레이션, VA는 취약점 발견만',
                        '동일함',
                        'VA가 더 위험',
                        'Pentest는 자동화만'
                    ],
                    correct: 0,
                    explanation: 'VA는 스캐너로 취약점을 식별하는 반면, Pentest는 실제 공격 기법으로 침투하여 영향도를 증명합니다.'
                }
            ]
        },
        monitoring_advanced: {
            title: '보안관제 심화',
            questions: [
                {
                    q: 'SIEM에서 여러 로그 소스를 연관 분석한 결과, 다음 이벤트가 순차적으로 발견되었다: (1) 외부 IP에서 SSH 로그인 실패 100회, (2) 동일 IP에서 SSH 로그인 성공 1회, (3) 해당 계정으로 sudo 명령 실행, (4) 내부 다른 서버로 SSH 연결 시도. 이것은 어떤 공격 시나리오인가?',
                    options: [
                        'Brute Force 공격 성공 후 Lateral Movement 시도',
                        '단순 비밀번호 오타',
                        'DDoS 공격',
                        '정상적인 관리자 작업'
                    ],
                    correct: 0,
                    explanation: 'Brute Force로 초기 침투에 성공한 후, 권한 상승(sudo) 시도와 내부 네트워크로 측면 이동(Lateral Movement)을 시도하는 전형적인 APT 공격 패턴입니다. 이런 다단계 공격은 단일 로그만으로는 탐지 어렵고 SIEM의 상관분석이 필수입니다.'
                },
                {
                    q: '웹 서버 access.log에서 "GET /admin.php?id=1\' OR \'1\'=\'1" 패턴이 발견되었으나 응답 코드는 200 OK이고, 이후 동일 IP에서 "GET /admin.php?id=1; DROP TABLE users--" 요청이 들어왔다. 가장 먼저 수행해야 할 조치는?',
                    options: [
                        '웹 애플리케이션의 SQL Injection 방어 상태 긴급 점검 및 DB 무결성 확인',
                        '로그 삭제',
                        '서버 재시작',
                        '해당 IP 차단만 수행'
                    ],
                    correct: 0,
                    explanation: '200 OK 응답은 SQL Injection 시도가 정상 처리되었을 가능성을 의미합니다. 첫 번째는 인증 우회 시도, 두 번째는 데이터 삭제 시도입니다. 즉시 WAF/방화벽으로 해당 IP를 차단하고, 웹 애플리케이션의 입력값 검증과 Prepared Statement 사용 여부를 확인하며, 데이터베이스 테이블 무결성을 긴급 점검해야 합니다.'
                },
                {
                    q: 'SIEM 대시보드에 초당 10,000개의 알람이 발생하여 실제 공격 탐지가 불가능하다. 이 문제를 해결하기 위한 가장 효과적인 접근 방법은?',
                    options: [
                        '모든 알람 비활성화',
                        'SIEM 제거',
                        'False Positive 원인 분석 후 룰 튜닝 및 알람 우선순위 설정',
                        '알람 무시'
                    ],
                    correct: 2,
                    explanation: 'False Positive(오탐)가 과도하면 진짜 공격을 놓치게 됩니다. 우선 알람 발생 원인을 분류하고(정상 트래픽, 설정 오류 등), 룰 임계값을 조정하며, CVSS 점수나 자산 중요도에 따라 알람을 Critical/High/Medium/Low로 우선순위를 부여해야 합니다. 화이트리스트 등록과 베이스라인 학습도 효과적입니다.'
                },
                {
                    q: '다음 중 APT(Advanced Persistent Threat) 공격의 특징으로 가장 적절한 것은?',
                    options: [
                        '짧은 시간 내 대량 트래픽 발생',
                        '장기간에 걸쳐 은밀하게 진행되며 특정 목표 지향',
                        '랜덤한 대상 공격',
                        '단순 반복 공격'
                    ],
                    correct: 1,
                    explanation: 'APT는 특정 조직/기밀을 목표로 장기간(수개월~수년) 은밀히 진행됩니다. 초기 침투 후 내부에 숨어 권한을 확대하고 데이터를 수집하며, 탐지를 피하기 위해 정상 트래픽처럼 행동합니다. DDoS처럼 눈에 띄는 공격과 달리, 로그 상관분석과 이상 행위 탐지로만 발견 가능합니다.'
                },
                {
                    q: '한 서버의 /var/log/auth.log에서 새로운 사용자 "admin2"가 생성되었고, 이후 해당 계정으로 sudo 권한이 부여되었으며, crontab에 의심스러운 스크립트가 등록되었다. 이것이 의미하는 것은?',
                    options: [
                        '공격자가 Persistence(지속성) 확보를 위해 백도어 계정 생성',
                        '정상적인 계정 생성',
                        '시스템 업데이트',
                        '일시적 버그'
                    ],
                    correct: 0,
                    explanation: '공격자가 시스템 재부팅이나 패치 후에도 접근 권한을 유지하기 위해 백도어 계정을 생성하고 높은 권한을 부여한 것입니다. crontab 등록은 주기적으로 악성 코드를 실행하거나 C&C 서버와 통신하기 위한 것입니다. 즉시 계정 삭제, crontab 제거, 시스템 전체 포렌식이 필요합니다.'
                },
                {
                    q: '침해사고 대응 중 "Containment(억제)" 단계에서 수행해야 하는 가장 적절한 조치는?',
                    options: [
                        '네트워크 격리 및 추가 피해 확산 차단',
                        '피해 시스템을 즉시 삭제',
                        '사고 보고서 작성',
                        '시스템 업그레이드'
                    ],
                    correct: 0,
                    explanation: 'Containment 단계에서는 피해를 더 이상 확산시키지 않는 것이 목표입니다. 감염 서버를 네트워크에서 격리하고, 공격자의 C&C 통신을 차단하며, 다른 시스템으로의 Lateral Movement를 방지합니다. 단, 증거 수집을 위해 즉시 종료하지 않고 메모리 덤프 등 휘발성 데이터를 먼저 확보할 수 있습니다.'
                },
                {
                    q: 'netstat 명령어로 ESTABLISHED 상태의 의심스러운 외부 IP 연결을 발견했다. 해당 프로세스를 식별하기 위한 추가 명령어는?',
                    options: [
                        'ps -ef | grep [PID] 또는 lsof -i:[PORT]',
                        'ls -al',
                        'cat /etc/passwd',
                        'df -h'
                    ],
                    correct: 0,
                    explanation: 'netstat -antp로 확인한 PID를 ps -ef로 조회하거나, lsof -i:포트번호로 해당 포트를 사용하는 프로세스를 확인합니다. /proc/[PID]/exe를 확인하면 실행파일 경로도 알 수 있습니다. 의심되면 해당 바이너리의 해시값을 VirusTotal에서 검사할 수 있습니다.'
                },
                {
                    q: '웹 서버 로그에 "POST /upload.php" 요청 후 "GET /uploads/shell.php" 요청이 반복적으로 발생한다. 이것은 어떤 공격의 징후인가?',
                    options: [
                        '정상적인 파일 업로드',
                        'XSS 공격',
                        'CSRF 공격',
                        'File Upload 취약점을 통한 웹쉘 업로드 및 원격 명령 실행'
                    ],
                    correct: 3,
                    explanation: 'File Upload 취약점을 악용해 PHP 웹쉘을 업로드한 후, 해당 웹쉘에 접근하여 서버에서 임의의 명령을 실행하는 공격입니다. 즉시 /uploads/ 디렉토리를 점검하고 의심 파일을 격리하며, 업로드 기능의 파일 타입 검증과 실행 권한을 확인해야 합니다.'
                },
                {
                    q: 'SIEM에서 로그 보관 정책을 수립할 때 고려해야 할 가장 중요한 요소는?',
                    options: [
                        '디스크 공간만 고려',
                        '법적 규제 준수 기간, 포렌식 분석 필요 기간, 스토리지 비용의 균형',
                        '1주일만 보관',
                        '로그 삭제'
                    ],
                    correct: 1,
                    explanation: '금융권은 전자금융거래법상 5년, 개인정보보호법은 최소 6개월 보관이 필요합니다. 또한 침해사고는 발견까지 평균 수개월이 걸리므로 포렌식을 위해 최소 6~12개월 보관이 권장됩니다. 비용 절감을 위해 최근 3개월은 Hot Storage, 이후는 Cold Storage로 이관하는 계층화 전략을 사용합니다.'
                },
                {
                    q: 'SOC 운영 중 동시에 10건의 High 등급 알람이 발생했다. 우선순위를 결정하는 기준으로 가장 적절한 것은?',
                    options: [
                        '랜덤 선택',
                        '가장 오래된 것부터',
                        '모두 무시',
                        '자산 중요도, 공격 단계, 잠재적 영향도를 종합 평가'
                    ],
                    correct: 3,
                    explanation: 'Crown Jewel(핵심 자산)에 대한 공격이 최우선이며, 공격 단계가 초기 정찰인지 실제 데이터 유출인지에 따라 긴급도가 다릅니다. CVSS 점수, 자산 가치, 현재 공격 진행 상황을 종합해 Risk = Likelihood × Impact 공식으로 우선순위를 매깁니다.'
                },
                {
                    q: 'Fileless Malware(파일리스 악성코드) 공격을 탐지하기 어려운 이유는?',
                    options: [
                        '속도가 느려서',
                        '암호화되어서',
                        '디스크에 파일을 남기지 않고 메모리에서만 실행',
                        '크기가 작아서'
                    ],
                    correct: 2,
                    explanation: 'Fileless 공격은 PowerShell, WMI 같은 정상 시스템 도구를 악용하여 메모리에서만 동작하므로 안티바이러스로 탐지가 어렵습니다. 탐지를 위해 EDR 솔루션으로 프로세스 행위를 모니터링하고, PowerShell 로깅을 활성화하며, 의심스러운 스크립트 실행을 탐지해야 합니다.'
                },
                {
                    q: '다음 로그 패턴 중 SQL Injection 공격이 아닌 것은?',
                    options: [
                        'GET /search?q=1\' OR \'1\'=\'1',
                        'GET /search?q=1\'; DROP TABLE users--',
                        'GET /search?q=SELECT * FROM users WHERE id=1',
                        'GET /search?q=1\' UNION SELECT password FROM admin--'
                    ],
                    correct: 2,
                    explanation: '첫 번째는 검색어에 SELECT 문자열이 포함된 정상 쿼리일 수 있습니다. 나머지는 SQL 문법 구조를 조작하려는 명백한 공격 시도입니다. WAF는 이런 패턴을 탐지하지만, False Positive를 줄이기 위해 컨텍스트를 고려해야 합니다.'
                },
                {
                    q: 'SIEM과 Threat Intelligence Platform을 연동하는 주요 목적은?',
                    options: [
                        '로그 저장 공간 확보',
                        '네트워크 속도 향상',
                        '알려진 악성 IP, 도메인, 파일 해시를 기반으로 위협 조기 탐지',
                        '비용 절감'
                    ],
                    correct: 2,
                    explanation: 'Threat Intelligence Feed(IoC: Indicators of Compromise)를 SIEM에 연동하면 전 세계에서 보고된 악성 IP, C&C 서버, 악성코드 해시와 내부 로그를 실시간으로 대조하여 위협을 조기에 발견할 수 있습니다. MISP, AlienVault OTX, VirusTotal 등을 연동합니다.'
                },
                {
                    q: '침해사고 분석 중 "Lateral Movement" 탐지를 위해 중점적으로 확인해야 할 로그는?',
                    options: [
                        '웹 서버 access.log만',
                        '이메일 로그만',
                        'DNS 로그만',
                        'Windows Event Log의 4624(로그인 성공), 4648(명시적 자격증명 사용), SMB/RDP 연결 로그'
                    ],
                    correct: 3,
                    explanation: '공격자가 초기 침투 후 내부 다른 시스템으로 이동할 때 남는 흔적은 Windows Event 4624(로그인), 4648(RunAs 같은 명시적 자격증명), 4672(특수 권한 로그인), SMB(445 포트), RDP(3389 포트) 연결 로그입니다. Pass-the-Hash, Pass-the-Ticket 공격도 이 로그로 탐지합니다.'
                },
                {
                    q: '보안 모니터링에서 Baseline(기준선)을 설정하는 목적은?',
                    options: [
                        '로그 삭제',
                        '디스크 공간 확보',
                        '정상 행위 패턴을 학습하여 이상 징후(Anomaly) 탐지',
                        '네트워크 속도 향상'
                    ],
                    correct: 2,
                    explanation: 'Baseline은 평소 네트워크 트래픽, 로그인 패턴, 프로세스 실행 등 정상 상태를 학습하여 기준으로 삼습니다. 이를 벗어나는 행위(새벽 시간 대량 데이터 전송, 평소 사용 안 하던 관리자 계정 로그인 등)를 Anomaly로 탐지하여 Zero-Day 공격도 발견할 수 있습니다.'
                }
            ]
        },
                consulting_advanced: {
            title: '보안 컨설팅 심화',
            questions: [
                {
                    q: '글로벌 SaaS 기업이 ISO 27001, ISO 27701, SOC 2를 동시에 인증받으려 한다. 가장 효율적인 접근 방법은?',
                    options: [
                        '각 인증을 별도로 진행하여 독립적으로 관리',
                    'SOC 2만 우선 진행 후 나머지는 나중에',
                    'ISO 27001을 기반으로 HLS 구조를 활용해 통합 관리체계 구축',
                    '외부 컨설팅사에 모두 위임'
                    ],
                    correct: 2,
                    explanation: 'ISO 27001/27701은 HLS(High Level Structure) 구조를 공유하므로 통합 관리가 가능하다. SOC 2의 Trust Service Criteria도 ISO 통제와 상당 부분 매핑되므로, ISO 27001을 기반으로 구축하고 각 표준의 추가 요구사항만 보완하는 것이 가장 효율적이다.'
                },
                {
                    q: '스타트업이 ISMS-P 의무 대상(매출 100억 이상)이 되었지만 예산과 인력이 부족하다. 컨설턴트로서 우선순위 전략은?',
                    options: [
                        '모든 통제를 한꺼번에 구현',
                    '인증을 포기하고 과태료 감수',
                    '외부 솔루션만 도입하여 해결',
                    'Gap 분석 후 법적 필수 요구사항과 고위험 영역 우선 처리'
                    ],
                    correct: 3,
                    explanation: '제한된 자원 하에서는 Gap 분석을 통해 ①법적 필수사항(개인정보 암호화, 접근통제 등) ②고위험 영역(외부 노출 시스템, 민감정보 처리 등)을 우선 처리하고, 나머지는 단계적으로 보완하는 것이 현실적이다. 이를 위험 기반 접근(Risk-Based Approach)이라 한다.'
                },
                {
                    q: 'EU 고객 데이터를 AWS Seoul 리전에 저장 중인 기업이 GDPR 컴플라이언스 이슈를 우려한다. 가장 적절한 조언은?',
                    options: [
                        '즉시 EU 리전으로 마이그레이션 필수',
                    '데이터 위치만 중요하므로 서울 리전 사용 불가',
                    'GDPR은 데이터 위치가 아닌 처리 주체에 적용되며, 적절한 보호조치(DPA, SCCs) 필요',
                    'GDPR은 EU 기업에만 적용되므로 무관'
                    ],
                    correct: 2,
                    explanation: 'GDPR은 EU 시민의 개인정보를 처리하는 모든 조직에 적용되며, 데이터 위치가 아니라 누가 처리하는지가 핵심이다. EU 외 지역 사용 시 ①Data Processing Agreement(DPA) 체결 ②Standard Contractual Clauses(SCCs) 적용 ③적절한 기술적·관리적 보호조치로 컴플라이언스 달성 가능하다.'
                },
                {
                    q: '내부 감사에서 "위험 평가는 했지만 고위험 항목에 대한 처리 계획이 없다"는 지적을 받았다. 근본 원인은?',
                    options: [
                        '위험 평가 방법론이 잘못됨',
                    '감사원이 잘못 이해함',
                    '문서가 부족함',
                    'RA(Risk Assessment)만 하고 RT(Risk Treatment)를 누락'
                    ],
                    correct: 3,
                    explanation: '위험 관리는 RA(평가)와 RT(처리)가 세트다. RA로 위험을 식별·분석·평가했다면, 반드시 RT로 각 위험에 대해 ①수용 ②회피 ③전가 ④완화 중 하나의 전략을 선택하고 실행 계획을 수립해야 한다. 이것이 없으면 "평가만 하고 대응 안 함"으로 부적합 판정된다.'
                },
                {
                    q: '클라우드 전환 프로젝트에서 CSP가 "우리는 ISO 27001 인증을 받았으니 고객도 자동으로 인증된 것"이라 주장한다. 이에 대한 올바른 이해는?',
                    options: [
                        '책임 공유 모델에서 고객 책임 영역은 별도 관리 필요',
                    'CSP 인증이 고객에게 자동 승계됨',
                    'CSP 인증서를 복사해서 사용 가능',
                    '클라우드는 인증 불필요'
                    ],
                    correct: 0,
                    explanation: '책임 공유 모델에서 CSP의 인증은 인프라 계층만 커버한다. 고객은 자신의 책임 영역(데이터, 애플리케이션, 접근권한, 설정 등)에 대해 별도로 통제를 구현하고 증명해야 한다. CSP 인증서는 공급망 실사(Supply Chain Due Diligence) 자료로 활용할 수 있지만, 고객의 인증을 대체하지 못한다.'
                },
                {
                    q: '경영진이 "ROI가 명확하지 않다"며 보안 예산 승인을 거부한다. 컨설턴트로서 가장 효과적인 설득 방법은?',
                    options: [
                        '사고 발생 시 예상 손실(ALE)과 법적 리스크를 정량화하여 제시',
                    '기술적 용어로 상세히 설명',
                    '다른 회사도 다 한다고 주장',
                    '컴플라이언스 의무만 강조'
                    ],
                    correct: 0,
                    explanation: '경영진은 비즈니스 언어로 소통해야 한다. ①예상 손실(ALE = SLE × ARO) ②법적 과징금(GDPR 4%, ISMS-P 위반 등) ③평판 손실 ④고객 이탈을 금액으로 환산하여 "보안 투자 < 사고 비용"임을 입증하는 것이 효과적이다. 이를 비즈니스 케이스(Business Case)라 한다.'
                },
                {
                    q: 'SoA에서 특정 통제를 "비용 과다"로 미적용했는데, 위험 평가에서 해당 영역이 "고위험"으로 나왔다. 심사 시 예상되는 결과는?',
                    options: [
                        '문제 없음',
                    '경미한 지적',
                    '논리적 모순으로 중대 부적합 가능',
                    'SoA는 참고사항이므로 무관'
                    ],
                    correct: 2,
                    explanation: 'Risk → Treatment → SoA의 논리적 연결이 필수다. 고위험을 "비용 과다"로 수용한 것은 경영진 의사결정일 수 있지만, ①수용 근거와 승인 ②잔여 위험 수준 ③대안 통제 검토 등이 문서화되어야 한다. 단순히 "비싸서 안 함"은 논리 모순으로 중대 부적합 판정될 수 있다.'
                },
                {
                    q: '인수합병(M&A) 실사에서 대상 기업의 보안 수준을 평가해야 한다. 가장 우선적으로 확인해야 할 항목은?',
                    options: [
                        '보안 솔루션 개수',
                    '과거 보안 사고 이력, 개인정보 처리 현황, 컴플라이언스 위반 리스크',
                    '인증서 보유 여부만 확인',
                    'CISO 경력'
                    ],
                    correct: 1,
                    explanation: 'M&A 실사(Due Diligence)에서는 ①과거 침해사고·유출 이력(숨겨진 부채) ②개인정보 처리 규모와 법적 요구사항 충족 여부 ③컴플라이언스 위반으로 인한 잠재적 과징금 ④중요 자산의 보안 수준을 우선 확인해야 한다. 인수 후 발견된 보안 이슈는 막대한 비용과 법적 리스크를 초래할 수 있다.'
                },
                {
                    q: '다국적 기업이 각국의 개인정보보호법(한국 개인정보보호법, EU GDPR, 미국 주별 법)을 모두 준수해야 한다. 가장 효율적인 전략은?',
                    options: [
                        '각국 법률을 개별적으로 준수',
                    '가장 엄격한 기준(GDPR)을 글로벌 베이스라인으로 설정',
                    '미국 기준만 따르면 됨',
                    '법률 무시하고 사업 진행'
                    ],
                    correct: 1,
                    explanation: '다국적 컴플라이언스는 "가장 높은 수준의 법률을 글로벌 베이스라인"으로 설정하는 것이 효율적이다. GDPR이 가장 엄격하므로 이를 기준으로 구축하면 대부분의 다른 법률도 자동 충족된다. 다만 국가별 특수 요구사항(예: 한국의 고유식별정보, 중국의 데이터 현지화)은 추가 대응이 필요하다.'
                },
                {
                    q: 'Zero Trust 아키텍처 도입 시 컨설팅 관점에서 가장 먼저 해야 할 일은?',
                    options: [
                        '최신 Zero Trust 솔루션 도입',
                    '네트워크 재설계',
                    '자산 식별과 데이터 흐름 분석(Data Flow Mapping)',
                    'VPN 제거'
                    ],
                    correct: 2,
                    explanation: 'Zero Trust는 "내부도 신뢰하지 않음"이 원칙이다. 구현 전에 ①모든 자산(사용자, 디바이스, 애플리케이션, 데이터) 식별 ②데이터가 어디서 어디로 흐르는지 매핑 ③중요 자산과 데이터 분류가 선행되어야 한다. 이후 정책(Policy)을 정의하고 기술 솔루션을 도입하는 순서가 올바르다.'
                },
                {
                    q: 'ISO 27001 인증 심사에서 "문서에는 연 1회 DR 테스트라고 적혀있는데 작년 기록이 없다"는 지적을 받았다. 즉각적인 대응 방법은?',
                    options: [
                        '심사원에게 내년에 하겠다고 약속',
                    '즉시 DR 테스트 수행 후 결과 기록, 시정조치 계획 수립',
                    '문서를 수정하여 "테스트 불필요"로 변경',
                    '해당 문서 삭제'
                    ],
                    correct: 1,
                    explanation: '문서와 실제 운영 불일치는 심각한 부적합이다. 즉각 대응은 ①DR 테스트 즉시 실시(늦었지만) ②결과 문서화 ③재발방지 대책(캘린더 알림, 담당자 지정 등) ④시정조치 보고서 작성이다. "문서 vs 실제" 간극이 가장 많이 걸리는 포인트이므로, 문서에 쓴 모든 활동은 반드시 실행하고 증적을 남겨야 한다.'
                },
                {
                    q: '공급망 보안(Supply Chain Security) 관점에서 외주 개발사 계약 시 반드시 포함해야 할 조항이 아닌 것은?',
                    options: [
                        '소스코드 에스크로(Escrow)',
                    '개발사 CEO의 학력',
                    '보안 취약점 발견 시 무상 패치 의무',
                    '개발사 직원의 보안 서약서'
                    ],
                    correct: 1,
                    explanation: '공급망 보안에서 계약서는 중요한 통제 수단이다. 포함할 조항: ①소스코드 에스크로(폐업 시 접근) ②보안 취약점 패치 의무와 SLA ③개발자 보안교육·서약서 ④재위탁 금지 또는 사전 승인 ⑤감사권(Audit Right) ⑥사고 통보 의무 등. CEO 학력은 무관하다.'
                },
                {
                    q: 'AI 기반 챗봇 서비스를 출시하려는 기업의 보안 컨설팅 시, 추가로 고려해야 할 표준은?',
                    options: [
                        'ISO 42001(AI 관리체계)과 AI 윤리 가이드라인 검토',
                    'ISO 9001만 필요',
                    'AI는 신기술이라 표준 없음',
                    '기존 ISO 27001로 충분'
                    ],
                    correct: 0,
                    explanation: 'AI 시스템은 ①ISO 42001(AI 관리체계) ②EU AI Act ③각국 AI 윤리 가이드라인(투명성, 설명가능성, 공정성, 책임성) ④편향성(Bias) 테스트 ⑤학습 데이터의 개인정보 이슈를 추가로 고려해야 한다. 기존 ISO 27001은 기본이고, AI 특화 요구사항을 반드시 검토해야 한다.'
                },
                {
                    q: '인증 유지 단계에서 조직 개편으로 CISO가 퇴사하고 후임이 없다. 사후심사(Surveillance Audit) 전 조치는?',
                    options: [
                        '심사를 연기 요청',
                    'CISO 없어도 문제없다고 주장',
                    '인증 포기',
                    '임시로 대행 지정 후 빠르게 후임 선임, 역할 이관 문서화'
                    ],
                    correct: 3,
                    explanation: 'ISO 27001은 CISO(또는 정보보호 최고책임자) 지정을 요구한다. 후임 없이 공백이 생기면 중대 부적합이다. 즉각 조치: ①임시 대행자 지정(경영진 결재) ②신속한 후임 선임 절차 착수 ③역할과 책임 이관 문서화 ④사후심사 시 경과 보고와 개선 계획 제시. 조직 변화도 위험 관리 대상이다.'
                },
                {
                    q: '클라우드 마이그레이션 후 "책임이 불명확해졌다"는 경영진 우려에 대한 해결책은?',
                    options: [
                        'RACI 매트릭스를 작성하여 CSP-고객 간 책임 명확화',
                    '모든 책임을 CSP에게 전가',
                    '책임 구분 불필요',
                    '계약서만 있으면 충분'
                    ],
                    correct: 0,
                    explanation: 'RACI 매트릭스(Responsible, Accountable, Consulted, Informed)로 각 보안 활동별 CSP와 고객의 역할을 명확히 정의해야 한다. 예: "패치 관리"는 IaaS에서 고객 책임, SaaS에서 CSP 책임. 이를 문서화하고 계약서에 반영하면 "회색 지대" 최소화와 사고 시 책임 소재가 명확해진다.'
                }
            ]
        }
    }
};
// 브라우저 전역 변수로 명시적 노출
if (typeof window !== 'undefined') {
    window.advancedQuestions = advancedQuestions;
}

// Node.js 환경에서 모듈 내보내기
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { examQuestions: advancedQuestions.examQuestions };
}
