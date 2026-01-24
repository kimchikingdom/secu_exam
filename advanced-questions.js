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
                        '192.168.1.x → 공인 IP로 변환',
                        '공인 IP → 192.168.1.x로 변환',
                        '192.168.1.x → 127.0.0.1로 변환'
                    ],
                    correct: 1,
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
                        'IPS는 차단, IDS는 경고 및 로그',
                        '둘 다 차단만 수행',
                        '둘 다 경고만 수행'
                    ],
                    correct: 1,
                    explanation: 'IPS는 실시간으로 위협을 차단하고, IDS는 탐지하여 관리자에게 경고합니다. 함께 사용하면 방어와 모니터링을 동시에 수행합니다.'
                },
                {
                    q: 'VLAN을 사용하는 주된 보안상 이점은?',
                    options: [
                        '속도 향상',
                        '물리적 네트워크를 논리적으로 분리하여 브로드캐스트 격리',
                        '라우터 불필요',
                        'IP 주소 절약'
                    ],
                    correct: 1,
                    explanation: 'VLAN은 물리적으로 같은 스위치에 연결되어도 논리적으로 분리하여 부서별/용도별 네트워크를 격리하고 보안을 강화합니다.'
                },
                {
                    q: 'L3 스위치와 L2 스위치의 가장 큰 차이점은?',
                    options: [
                        'L3는 MAC 주소만, L2는 IP 주소 기반 스위칭',
                        'L3는 IP 라우팅 가능, L2는 MAC 주소만 처리',
                        '차이 없음',
                        'L3가 더 느림'
                    ],
                    correct: 1,
                    explanation: 'L3 스위치는 IP 라우팅 기능을 포함하여 VLAN 간 라우팅이 가능하지만, L2는 MAC 주소 기반 스위칭만 수행합니다.'
                },
                {
                    q: 'Zero Trust 네트워크에서 내부 사용자가 내부 서버 접근 시에도 인증이 필요한 이유는?',
                    options: [
                        '불필요한 절차',
                        '내부자 위협과 측면 이동 방지',
                        '속도 향상',
                        '법적 요구사항'
                    ],
                    correct: 1,
                    explanation: 'Zero Trust는 "내부=안전"이라는 전제를 거부하고, 내부 사용자도 침해되었거나 악의적일 수 있으므로 모든 접근을 검증합니다.'
                },
                {
                    q: 'VPN과 Proxy의 가장 큰 차이점은?',
                    options: [
                        'VPN은 전체 트래픽 암호화, Proxy는 특정 애플리케이션만',
                        'Proxy가 더 안전함',
                        '차이 없음',
                        'VPN은 암호화 안 함'
                    ],
                    correct: 0,
                    explanation: 'VPN은 전체 네트워크 트래픽을 암호화하지만, Proxy는 주로 웹 브라우저 같은 특정 애플리케이션의 요청만 중계합니다.'
                },
                {
                    q: 'Subnet Mask 255.255.255.192(/26)는 몇 개의 호스트 IP를 제공하는가?',
                    options: [
                        '64개',
                        '62개',
                        '32개',
                        '30개'
                    ],
                    correct: 1,
                    explanation: '/26은 2^6=64개 주소 중 네트워크 주소(1개)와 브로드캐스트 주소(1개)를 제외하면 62개의 호스트 IP를 사용할 수 있습니다.'
                },
                {
                    q: 'DNS Spoofing 공격에 대응하는 가장 효과적인 방법은?',
                    options: [
                        'DNS 서버 재시작',
                        'DNSSEC 사용',
                        'DNS 캐시 삭제',
                        'IP 주소 직접 사용'
                    ],
                    correct: 1,
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
                        '메모리 부족',
                        'SYN-RECEIVED 상태의 Half-Open 연결이 쌓여 정상 연결 불가',
                        'CPU 과부하',
                        '디스크 용량 부족'
                    ],
                    correct: 1,
                    explanation: 'SYN Flooding은 ACK를 보내지 않고 SYN만 대량 전송하여 서버가 Half-Open 연결 대기 상태로 자원을 소진하게 만듭니다.'
                },
                {
                    q: 'IPv6에서 NAT가 일반적으로 불필요한 이유는?',
                    options: [
                        'IPv6는 보안이 더 좋아서',
                        'IPv6는 주소 공간이 충분하여 모든 기기가 공인 IP 사용 가능',
                        'IPv6는 속도가 빨라서',
                        'IPv6는 암호화가 내장되어 있어서'
                    ],
                    correct: 1,
                    explanation: 'IPv6는 2^128개의 주소를 제공하여 모든 기기에 고유 공인 IP를 할당할 수 있어 NAT가 불필요합니다.'
                },
                {
                    q: 'Firewall에서 Stateful Inspection과 Stateless Filtering의 차이는?',
                    options: [
                        'Stateful은 각 패킷을 독립적으로, Stateless는 연결 상태 추적',
                        'Stateful은 연결 상태 추적, Stateless는 각 패킷을 독립적으로 검사',
                        '차이 없음',
                        'Stateful이 더 느림'
                    ],
                    correct: 1,
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
                        '네트워크 네임스페이스와 IPC',
                        'CPU만',
                        '아무것도 공유 안 함'
                    ],
                    correct: 1,
                    explanation: '같은 Pod 내 컨테이너들은 네트워크 네임스페이스(localhost로 통신 가능)와 IPC, 선택적으로 볼륨을 공유합니다.'
                },
                {
                    q: 'Kubernetes StatefulSet과 Deployment의 가장 큰 차이는?',
                    options: [
                        'StatefulSet은 Pod 이름과 순서를 보장, Deployment는 무작위',
                        'Deployment가 더 안정적',
                        '차이 없음',
                        'StatefulSet은 사용 불가'
                    ],
                    correct: 0,
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
                        '모두 보존됨',
                        '볼륨에 저장한 데이터만 보존, 나머지는 손실',
                        '모두 손실',
                        '로그만 보존'
                    ],
                    correct: 1,
                    explanation: '컨테이너는 ephemeral(일시적)이므로 재시작 시 파일시스템 변경사항이 사라집니다. 영구 데이터는 반드시 볼륨에 저장해야 합니다.'
                },
                {
                    q: 'Docker Image Layer가 읽기 전용인 이유는?',
                    options: [
                        '보안',
                        '여러 컨테이너가 같은 이미지를 공유하여 디스크 절약',
                        '속도 향상',
                        '법적 요구사항'
                    ],
                    correct: 1,
                    explanation: 'Image Layer를 읽기 전용으로 유지하면 여러 컨테이너가 같은 base layer를 공유하여 저장공간을 절약할 수 있습니다.'
                },
                {
                    q: 'Kubernetes Horizontal Pod Autoscaler(HPA)가 Pod 수를 결정하는 기준은?',
                    options: [
                        '시간',
                        'CPU/메모리 사용률 등 메트릭',
                        '수동 설정만',
                        '무작위'
                    ],
                    correct: 1,
                    explanation: 'HPA는 CPU, 메모리, 커스텀 메트릭을 모니터링하여 목표 사용률에 맞게 자동으로 Pod 개수를 조절합니다.'
                },
                {
                    q: 'IaaS, PaaS, SaaS 중 개발자가 OS를 직접 관리해야 하는 모델은?',
                    options: [
                        'SaaS',
                        'PaaS',
                        'IaaS',
                        '모두'
                    ],
                    correct: 2,
                    explanation: 'IaaS는 가상머신을 제공하므로 OS 설치, 패치, 보안 등을 사용자가 관리합니다. PaaS는 플랫폼이 OS를 관리합니다.'
                },
                {
                    q: 'Kubernetes ConfigMap과 Secret의 주요 차이점은?',
                    options: [
                        'ConfigMap은 평문, Secret은 base64 인코딩 및 암호화 지원',
                        '차이 없음',
                        'Secret이 더 빠름',
                        'ConfigMap은 사용 불가'
                    ],
                    correct: 0,
                    explanation: 'ConfigMap은 일반 설정값 저장, Secret은 비밀번호 같은 민감 데이터를 base64 인코딩하고 암호화하여 저장합니다.'
                },
                {
                    q: 'Container와 VM의 시작 속도 차이가 나는 가장 큰 이유는?',
                    options: [
                        '컨테이너가 작아서',
                        '컨테이너는 OS 커널을 공유하므로 OS 부팅 불필요',
                        'VM이 더 안전해서',
                        '네트워크 속도'
                    ],
                    correct: 1,
                    explanation: 'VM은 전체 OS를 부팅해야 하지만, 컨테이너는 호스트 커널을 공유하므로 프로세스처럼 빠르게 시작됩니다.'
                },
                {
                    q: 'Kubernetes Namespace의 주요 용도는?',
                    options: [
                        '보안 강화만',
                        '리소스를 논리적으로 분리하여 다중 팀/프로젝트 격리',
                        '속도 향상',
                        'IP 주소 할당'
                    ],
                    correct: 1,
                    explanation: 'Namespace는 클러스터 내에서 리소스를 논리적으로 분리하여 팀별, 환경별(dev/prod) 격리를 제공합니다.'
                },
                {
                    q: 'Kubernetes에서 Pod가 다른 Node로 이동할 때 IP 주소는?',
                    options: [
                        '유지됨',
                        '변경됨 (Pod IP는 ephemeral)',
                        '관리자가 설정',
                        '항상 127.0.0.1'
                    ],
                    correct: 1,
                    explanation: 'Pod IP는 일시적이므로 재시작이나 재배치 시 변경됩니다. Service를 통해 안정적인 엔드포인트를 제공합니다.'
                },
                {
                    q: 'Public Cloud, Private Cloud, Hybrid Cloud 중 보안과 유연성을 모두 고려한 모델은?',
                    options: [
                        'Public Cloud',
                        'Private Cloud',
                        'Hybrid Cloud',
                        '없음'
                    ],
                    correct: 2,
                    explanation: 'Hybrid Cloud는 민감 데이터는 Private Cloud에, 일반 서비스는 Public Cloud에 배치하여 보안과 확장성을 동시에 확보합니다.'
                },
                {
                    q: 'Kubernetes Ingress의 주요 역할은?',
                    options: [
                        '내부 통신만',
                        'HTTP/HTTPS 라우팅 규칙으로 외부 트래픽을 Service로 전달',
                        'Pod 생성',
                        '모니터링'
                    ],
                    correct: 1,
                    explanation: 'Ingress는 L7 로드밸런서 역할로 도메인/경로 기반 라우팅을 통해 외부 HTTP(S) 요청을 적절한 Service로 전달합니다.'
                },
                {
                    q: 'Docker Container에서 root 권한으로 실행하는 것이 위험한 이유는?',
                    options: [
                        '속도 저하',
                        '컨테이너 탈출 시 호스트 시스템 제어 가능',
                        '메모리 부족',
                        '법적 문제'
                    ],
                    correct: 1,
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
                        'Stored는 DB에 저장됨, Reflected는 즉시 반사',
                        'Reflected가 더 위험',
                        '차이 없음',
                        'Stored는 사용 불가'
                    ],
                    correct: 0,
                    explanation: 'Stored XSS는 악성 스크립트가 DB에 저장되어 여러 사용자에게 지속적으로 실행되며, Reflected는 URL 파라미터 등으로 즉시 반사됩니다.'
                },
                {
                    q: 'XSS 공격으로 공격자가 탈취할 수 있는 가장 위험한 정보는?',
                    options: [
                        'HTML 코드',
                        '세션 쿠키 (document.cookie)',
                        'CSS 스타일',
                        '이미지'
                    ],
                    correct: 1,
                    explanation: 'XSS로 세션 쿠키를 탈취하면 사용자 계정을 하이재킹할 수 있습니다. HttpOnly 플래그로 방어 가능합니다.'
                },
                {
                    q: 'Command Injection에서 여러 명령을 연결할 때 사용하는 문자가 아닌 것은?',
                    options: [
                        ';',
                        '|',
                        '&&',
                        '@'
                    ],
                    correct: 3,
                    explanation: '; (순차), | (파이프), && (조건부), || (OR) 등이 명령 연결에 사용되며, @는 일반적으로 사용되지 않습니다.'
                },
                {
                    q: 'File Upload 취약점 방어 시 파일 확장자만 검증하는 것이 불충분한 이유는?',
                    options: [
                        '속도 문제',
                        '확장자 우회(.php.jpg), MIME 타입 위조 가능',
                        '법적 문제',
                        '메모리 부족'
                    ],
                    correct: 1,
                    explanation: '공격자는 이중 확장자, null byte, MIME 타입 위조 등으로 우회하므로 파일 내용(매직 넘버) 검증과 실행 권한 제거가 필요합니다.'
                },
                {
                    q: 'CSRF 공격이 성공하기 위한 전제 조건은?',
                    options: [
                        'SQL Injection',
                        '피해자가 해당 사이트에 로그인된 상태',
                        'XSS 취약점',
                        'DNS Spoofing'
                    ],
                    correct: 1,
                    explanation: 'CSRF는 피해자의 브라우저에 있는 인증 쿠키를 악용하므로, 피해자가 로그인 상태여야 합니다.'
                },
                {
                    q: 'Time-based Blind SQL Injection에서 sleep() 함수의 역할은?',
                    options: [
                        '데이터 삭제',
                        '조건이 참일 때 응답 지연으로 참/거짓 판별',
                        '속도 향상',
                        '로그 삭제'
                    ],
                    correct: 1,
                    explanation: 'sleep(5)를 조건과 함께 실행하면, 조건이 참일 때만 5초 지연되어 응답 시간으로 참/거짓을 판단할 수 있습니다.'
                },
                {
                    q: 'OS Command Injection에서 ping 명령어를 악용할 때 추가 명령을 실행하는 방법은?',
                    options: [
                        'ping; whoami',
                        'ping only',
                        'ping + whoami',
                        'ping - whoami'
                    ],
                    correct: 0,
                    explanation: 'ping 192.168.1.1; whoami 처럼 세미콜론(;)으로 명령을 연결하면 ping 실행 후 whoami가 실행됩니다.'
                },
                {
                    q: 'XXE(XML External Entity) 공격의 주요 위협은?',
                    options: [
                        'XSS',
                        '서버 내부 파일 읽기 또는 SSRF',
                        'SQL Injection',
                        'DDoS'
                    ],
                    correct: 1,
                    explanation: 'XXE는 XML 파서가 외부 엔터티를 처리할 때 /etc/passwd 같은 파일을 읽거나 내부 네트워크에 요청을 보낼 수 있습니다.'
                },
                {
                    q: 'Burp Suite의 Repeater 기능의 주요 용도는?',
                    options: [
                        '자동 스캔',
                        '수동으로 HTTP 요청을 반복 전송하여 파라미터 테스트',
                        '보고서 생성',
                        '네트워크 스캔'
                    ],
                    correct: 1,
                    explanation: 'Repeater는 HTTP 요청을 수정하고 반복 전송하여 SQL Injection, XSS 등의 페이로드를 수동으로 테스트할 때 사용합니다.'
                },
                {
                    q: 'SQL Injection 방어를 위한 Prepared Statement의 원리는?',
                    options: [
                        '입력값을 암호화',
                        '쿼리 구조와 데이터를 분리하여 데이터를 코드로 해석 방지',
                        '입력값 길이 제한',
                        '로그 기록'
                    ],
                    correct: 1,
                    explanation: 'Prepared Statement는 SQL 구조를 먼저 컴파일하고 사용자 입력을 파라미터로 바인딩하여 입력값이 SQL 코드로 해석되지 않게 합니다.'
                },
                {
                    q: 'Path Traversal 공격에서 ../../etc/passwd의 목적은?',
                    options: [
                        '현재 디렉토리 파일 삭제',
                        '상위 디렉토리로 이동하여 시스템 파일 접근',
                        '다운로드 속도 향상',
                        '압축 해제'
                    ],
                    correct: 1,
                    explanation: '../는 상위 디렉토리로 이동하므로 반복하면 웹 루트를 벗어나 /etc/passwd 같은 시스템 파일에 접근할 수 있습니다.'
                },
                {
                    q: 'SSRF(Server-Side Request Forgery) 공격의 핵심은?',
                    options: [
                        '클라이언트를 공격',
                        '서버가 내부 네트워크나 로컬 자원에 요청하도록 유도',
                        'DNS 공격',
                        '암호화 우회'
                    ],
                    correct: 1,
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
                        '영향 받는 사용자 수',
                        '권한 요구사항(Privileges Required)',
                        '기밀성 영향(Confidentiality Impact)'
                    ],
                    correct: 1,
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
                        '발견하기 어려워서',
                        '흔하고 영향도가 크며 자동화 공격 가능',
                        '패치가 없어서',
                        '오래된 취약점'
                    ],
                    correct: 1,
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
                        'SQL Injection',
                        '기본 비밀번호 사용, 불필요한 기능 활성화',
                        'XSS',
                        'DDoS'
                    ],
                    correct: 1,
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
                        '방화벽 설치',
                        '전송 시 HTTPS, 저장 시 암호화',
                        'SQL Injection 방어',
                        '로그 삭제'
                    ],
                    correct: 1,
                    explanation: '민감 데이터는 전송 시 TLS/SSL로, 저장 시 강력한 암호화 알고리즘으로 보호해야 합니다.'
                },
                {
                    q: 'XML External Entity(XXE) 방어 방법은?',
                    options: [
                        'XML 사용 금지',
                        'XML 파서에서 외부 엔터티 처리 비활성화',
                        'JSON 사용',
                        '입력값 길이 제한'
                    ],
                    correct: 1,
                    explanation: 'XML 파서 설정에서 외부 엔터티와 DTD 처리를 비활성화하면 XXE 공격을 방지할 수 있습니다.'
                },
                {
                    q: 'Security Headers 중 XSS 방어에 도움이 되는 것은?',
                    options: [
                        'Content-Security-Policy',
                        'Cache-Control',
                        'Expires',
                        'ETag'
                    ],
                    correct: 0,
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
                        '낮은 권한에서 높은 권한(root/admin)으로 상승',
                        '로그아웃',
                        '속도 향상'
                    ],
                    correct: 1,
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
                        '동일함',
                        'Pentest는 실제 공격 시뮬레이션, VA는 취약점 발견만',
                        'VA가 더 위험',
                        'Pentest는 자동화만'
                    ],
                    correct: 1,
                    explanation: 'VA는 스캐너로 취약점을 식별하는 반면, Pentest는 실제 공격 기법으로 침투하여 영향도를 증명합니다.'
                }
            ]
        }
    }
};