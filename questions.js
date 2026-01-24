// 정보보안 모의시험 문제은행
// 실제 학습 자료 기반으로 생성된 예상 문제 (명령어/TCP Protocol 상세/DevOps 제외)

const examQuestions = {
    // ========== 1. 네트워크 & 리눅스 기본기술 (60문제) ==========
    networkLinuxBasics: {
        title: '네트워크 & 리눅스 기본기술',
        totalQuestions: 60,
        questions: [
            {
                q: 'OSI 7계층 모델에서 IP 프로토콜이 동작하는 계층은?',
                options: ['전송 계층', '네트워크 계층', '데이터링크 계층', '세션 계층'],
                correct: 1,
                explanation: 'IP는 3계층인 네트워크 계층에서 동작하며 논리적 주소 지정과 라우팅을 담당합니다.'
            },
            {
                q: 'ARP 프로토콜의 주요 기능은?',
                options: ['IP 주소를 MAC 주소로 변환', 'MAC 주소를 IP 주소로 변환', '라우팅 경로 결정', '에러 메시지 전송'],
                correct: 0,
                explanation: 'ARP(Address Resolution Protocol)은 논리 주소(IP)를 물리 주소(MAC)로 변환합니다.'
            },
            {
                q: 'Subnet Mask 255.255.255.0의 CIDR 표기법은?',
                options: ['/8', '/16', '/24', '/32'],
                correct: 2,
                explanation: '255.255.255.0은 24비트가 네트워크 부분이므로 /24로 표기합니다.'
            },
            {
                q: 'NAT(Network Address Translation)의 주요 목적은?',
                options: ['보안 강화', '사설 IP를 공인 IP로 변환', '속도 향상', 'DNS 해석'],
                correct: 1,
                explanation: 'NAT는 사설 IP 주소를 공인 IP 주소로 변환하여 인터넷 접속을 가능하게 합니다.'
            },
            {
                q: 'HTTP의 기본 포트 번호는?',
                options: ['21', '22', '80', '443'],
                correct: 2,
                explanation: 'HTTP는 80번, HTTPS는 443번 포트를 사용합니다.'
            },
            {
                q: 'Private IP 주소 범위가 아닌 것은?',
                options: ['10.0.0.0/8', '172.16.0.0/12', '192.168.0.0/16', '200.0.0.0/8'],
                correct: 3,
                explanation: '사설 IP는 10.x.x.x, 172.16-31.x.x, 192.168.x.x 범위입니다.'
            },
            {
                q: 'DNS가 사용하는 기본 포트 번호는?',
                options: ['25', '53', '80', '110'],
                correct: 1,
                explanation: 'DNS는 UDP/TCP 53번 포트를 사용합니다.'
            },
            {
                q: 'MAC 주소의 길이는?',
                options: ['32비트', '48비트', '64비트', '128비트'],
                correct: 1,
                explanation: 'MAC 주소는 48비트(6바이트)이며, 보통 12개의 16진수로 표현됩니다.'
            },
            {
                q: 'Loopback 주소(localhost)로 사용되는 IP는?',
                options: ['0.0.0.0', '127.0.0.1', '192.168.0.1', '255.255.255.255'],
                correct: 1,
                explanation: '127.0.0.1은 자기 자신을 가리키는 loopback 주소입니다.'
            },
            {
                q: 'OSI 7계층 모델에서 HTTP 프로토콜이 동작하는 계층은?',
                options: ['세션 계층', '표현 계층', '응용 계층', '전송 계층'],
                correct: 2,
                explanation: 'HTTP는 7계층인 응용 계층에서 동작합니다.'
            },
            {
                q: 'DHCP의 주요 기능은?',
                options: ['도메인 이름 해석', 'IP 주소 자동 할당', '패킷 라우팅', '파일 전송'],
                correct: 1,
                explanation: 'DHCP는 네트워크 장치에 IP 주소, 서브넷 마스크, 게이트웨이 등을 자동으로 할당합니다.'
            },
            {
                q: 'FTP의 기본 포트 번호는?',
                options: ['20, 21', '22', '23', '25'],
                correct: 0,
                explanation: 'FTP는 제어용 21번, 데이터 전송용 20번 포트를 사용합니다.'
            },
            {
                q: 'SSH의 기본 포트 번호는?',
                options: ['21', '22', '23', '25'],
                correct: 1,
                explanation: 'SSH(Secure Shell)는 22번 포트를 사용하며 암호화된 원격 접속을 제공합니다.'
            },
            {
                q: 'IPv4 주소의 길이는?',
                options: ['16비트', '32비트', '64비트', '128비트'],
                correct: 1,
                explanation: 'IPv4는 32비트(4바이트) 주소이며, 약 43억 개의 주소를 제공합니다.'
            },
            {
                q: 'IPv6 주소의 길이는?',
                options: ['32비트', '64비트', '128비트', '256비트'],
                correct: 2,
                explanation: 'IPv6는 128비트 주소로 IPv4의 주소 고갈 문제를 해결합니다.'
            },
            {
                q: 'Broadcast 주소 255.255.255.255의 의미는?',
                options: ['특정 호스트', '모든 호스트', '게이트웨이', 'DNS 서버'],
                correct: 1,
                explanation: '255.255.255.255는 로컬 네트워크의 모든 호스트에게 패킷을 전송합니다.'
            },
            {
                q: 'ICMP 프로토콜의 주요 용도는?',
                options: ['파일 전송', '에러 보고 및 진단', '이메일 전송', '웹 브라우징'],
                correct: 1,
                explanation: 'ICMP는 네트워크 진단(ping), 에러 보고(Destination Unreachable) 등에 사용됩니다.'
            },
            {
                q: 'Well-Known Ports의 범위는?',
                options: ['0-1023', '1024-49151', '49152-65535', '0-65535'],
                correct: 0,
                explanation: '0-1023은 잘 알려진 서비스들이 사용하는 포트 범위입니다.'
            },
            {
                q: 'Proxy 서버의 주요 역할이 아닌 것은?',
                options: ['캐싱', '익명성 제공', '접근 제어', '데이터 암호화'],
                correct: 3,
                explanation: 'Proxy는 중계 역할을 하며, 암호화는 주요 기능이 아닙니다. VPN이나 SSL/TLS가 암호화를 담당합니다.'
            },
            {
                q: 'VPN의 주요 목적은?',
                options: ['속도 향상', '안전한 원격 접속', '파일 공유', '이메일 전송'],
                correct: 1,
                explanation: 'VPN(Virtual Private Network)은 공중 네트워크를 통해 안전한 사설 네트워크 연결을 제공합니다.'
            },
            {
                q: 'DMZ(Demilitarized Zone)의 목적은?',
                options: ['내부 네트워크 속도 향상', '외부와 내부 네트워크 사이의 완충 영역', '데이터 백업', '로드 밸런싱'],
                correct: 1,
                explanation: 'DMZ는 외부에 노출되는 서버를 내부 네트워크와 분리하여 보안을 강화합니다.'
            },
            {
                q: '방화벽의 주요 기능은?',
                options: ['데이터 압축', '트래픽 필터링', '데이터 백업', '속도 향상'],
                correct: 1,
                explanation: '방화벽은 정의된 규칙에 따라 네트워크 트래픽을 허용하거나 차단합니다.'
            },
            {
                q: 'IDS(Intrusion Detection System)의 주요 기능은?',
                options: ['침입 탐지', '침입 차단', '데이터 암호화', '백업'],
                correct: 0,
                explanation: 'IDS는 침입을 탐지하고 경고하지만 차단하지는 않습니다. 차단은 IPS의 역할입니다.'
            },
            {
                q: 'IPS(Intrusion Prevention System)와 IDS의 차이는?',
                options: ['동일함', 'IPS는 탐지+차단, IDS는 탐지만', 'IDS가 더 빠름', '차이 없음'],
                correct: 1,
                explanation: 'IPS는 침입을 탐지하고 자동으로 차단하지만, IDS는 탐지와 경고만 수행합니다.'
            },
            {
                q: 'Load Balancer의 주요 목적은?',
                options: ['보안 강화', '트래픽 분산', '데이터 암호화', '백업'],
                correct: 1,
                explanation: 'Load Balancer는 여러 서버에 트래픽을 분산하여 가용성과 성능을 향상시킵니다.'
            },
            {
                q: 'CDN(Content Delivery Network)의 주요 목적은?',
                options: ['보안', '콘텐츠 전송 속도 향상', '데이터 압축', '백업'],
                correct: 1,
                explanation: 'CDN은 콘텐츠를 지리적으로 분산된 서버에 캐싱하여 사용자에게 빠르게 전달합니다.'
            },
            {
                q: 'HTTPS에서 사용하는 암호화 프로토콜은?',
                options: ['SSH', 'SSL/TLS', 'IPSec', 'PPTP'],
                correct: 1,
                explanation: 'HTTPS는 SSL/TLS 프로토콜을 사용하여 HTTP 통신을 암호화합니다.'
            },
            {
                q: 'Subnet의 주요 목적은?',
                options: ['속도 향상', '네트워크 분할 및 관리 효율화', '암호화', '백업'],
                correct: 1,
                explanation: 'Subnetting은 큰 네트워크를 작은 단위로 나누어 효율적으로 관리하고 브로드캐스트 도메인을 분리합니다.'
            },
            {
                q: 'Gateway의 역할은?',
                options: ['같은 네트워크 내 통신', '서로 다른 네트워크 간 통신', '데이터 압축', '암호화'],
                correct: 1,
                explanation: 'Gateway는 서로 다른 네트워크 간의 통신을 중계하는 장치입니다.'
            },
            {
                q: 'Switch와 Hub의 주요 차이점은?',
                options: ['동일함', 'Switch는 MAC 주소 기반, Hub는 모든 포트로 전송', 'Hub가 더 빠름', '차이 없음'],
                correct: 1,
                explanation: 'Switch는 MAC 주소를 학습하여 목적지 포트로만 전송하지만, Hub는 모든 포트로 브로드캐스트합니다.'
            },
            {
                q: 'Router의 주요 기능은?',
                options: ['데이터 압축', '네트워크 간 패킷 라우팅', '파일 저장', 'DNS 해석'],
                correct: 1,
                explanation: 'Router는 IP 주소를 기반으로 패킷을 최적 경로로 전달합니다.'
            },
            {
                q: 'VLAN(Virtual LAN)의 주요 목적은?',
                options: ['물리적 네트워크를 논리적으로 분리', '속도 향상', '암호화', '백업'],
                correct: 0,
                explanation: 'VLAN은 하나의 물리적 스위치를 여러 개의 논리적 네트워크로 분할합니다.'
            },
            {
                q: 'MTU(Maximum Transmission Unit)의 의미는?',
                options: ['최소 전송 단위', '최대 전송 단위', '평균 전송 속도', '최대 연결 수'],
                correct: 1,
                explanation: 'MTU는 네트워크에서 한 번에 전송할 수 있는 최대 패킷 크기입니다. 일반적으로 1500바이트입니다.'
            },
            {
                q: 'Multicast의 특징은?',
                options: ['1:1 통신', '1:다 통신 (특정 그룹)', '1:모든 통신', '양방향 통신'],
                correct: 1,
                explanation: 'Multicast는 특정 그룹의 호스트들에게만 데이터를 전송하는 방식입니다.'
            },
            {
                q: 'ARP Spoofing 공격의 원리는?',
                options: ['IP 주소 변조', 'MAC 주소와 IP 주소 매핑 위조', 'DNS 변조', '포트 변조'],
                correct: 1,
                explanation: 'ARP Spoofing은 거짓 ARP 응답을 보내 공격자의 MAC 주소를 정상 호스트의 IP와 연결시킵니다.'
            },
            {
                q: 'DNS Spoofing 공격의 목표는?',
                options: ['IP 주소 변조', '도메인 이름 해석 결과 조작', 'MAC 주소 변조', '포트 변조'],
                correct: 1,
                explanation: 'DNS Spoofing은 DNS 쿼리 결과를 조작하여 사용자를 악성 사이트로 유도합니다.'
            },
            {
                q: 'SYN Flooding 공격의 원리는?',
                options: ['대량의 SYN 패킷 전송', 'FIN 패킷 전송', 'ICMP 패킷 전송', 'UDP 패킷 전송'],
                correct: 0,
                explanation: 'SYN Flooding은 연결 수립 요청만 보내고 응답하지 않아 서버 자원을 고갈시킵니다.'
            },
            {
                q: 'DDoS 공격과 DoS 공격의 차이는?',
                options: ['동일함', 'DDoS는 다수의 공격원, DoS는 단일 공격원', 'DoS가 더 강력', '차이 없음'],
                correct: 1,
                explanation: 'DDoS(Distributed DoS)는 여러 공격원에서 동시에 공격하여 방어를 어렵게 합니다.'
            },
            {
                q: 'IP Spoofing의 주요 목적은?',
                options: ['속도 향상', '출발지 IP 주소 위조', '데이터 암호화', '압축'],
                correct: 1,
                explanation: 'IP Spoofing은 패킷의 출발지 IP를 위조하여 신원을 숨기거나 접근 제어를 우회합니다.'
            },
            {
                q: 'Man-in-the-Middle(MITM) 공격의 원리는?',
                options: ['서버 해킹', '통신 중간에 개입하여 도청/변조', '패스워드 크래킹', '서비스 마비'],
                correct: 1,
                explanation: 'MITM은 공격자가 통신 당사자 사이에서 중계하며 데이터를 도청하거나 변조합니다.'
            },
            {
                q: 'Packet Sniffing의 목적은?',
                options: ['패킷 생성', '네트워크 트래픽 캡처 및 분석', '패킷 삭제', '패킷 압축'],
                correct: 1,
                explanation: 'Packet Sniffing은 네트워크를 지나가는 패킷을 캡처하여 정보를 수집합니다.'
            },
            {
                q: 'SSL Stripping 공격의 원리는?',
                options: ['HTTPS를 HTTP로 다운그레이드', 'HTTP를 HTTPS로 업그레이드', 'SSL 인증서 탈취', 'DNS 변조'],
                correct: 0,
                explanation: 'SSL Stripping은 HTTPS 연결을 HTTP로 강등시켜 암호화되지 않은 통신을 도청합니다.'
            },
            {
                q: 'Port Forwarding의 주요 용도는?',
                options: ['보안 강화', '외부에서 내부 서버 접근 허용', '속도 향상', '데이터 압축'],
                correct: 1,
                explanation: 'Port Forwarding은 공인 IP의 특정 포트로 들어오는 트래픽을 내부 사설 IP로 전달합니다.'
            },
            {
                q: 'Stateful Inspection 방화벽의 특징은?',
                options: ['패킷 헤더만 검사', '연결 상태 추적', '속도만 검사', '암호화만 검사'],
                correct: 1,
                explanation: 'Stateful Inspection은 패킷의 연결 상태를 추적하여 정상적인 세션인지 판단합니다.'
            },
            {
                q: 'Zero Trust 네트워크의 핵심 원칙은?',
                options: ['모두 신뢰', '내부는 신뢰', '아무것도 신뢰하지 않고 항상 검증', '외부만 검증'],
                correct: 2,
                explanation: 'Zero Trust는 "신뢰하지 말고 항상 검증하라"는 원칙으로 모든 접근을 검증합니다.'
            },
            {
                q: 'SDN(Software-Defined Networking)의 특징은?',
                options: ['하드웨어 기반', '제어 평면과 데이터 평면 분리', '물리적 배선', '수동 설정'],
                correct: 1,
                explanation: 'SDN은 네트워크 제어를 소프트웨어로 구현하여 유연하고 자동화된 관리를 가능하게 합니다.'
            },
            {
                q: 'QoS(Quality of Service)의 목적은?',
                options: ['보안 강화', '네트워크 트래픽 우선순위 관리', '속도 측정', '암호화'],
                correct: 1,
                explanation: 'QoS는 중요한 트래픽(VoIP, 영상 등)에 우선순위를 부여하여 서비스 품질을 보장합니다.'
            },
            {
                q: 'Intrusion Detection의 두 가지 주요 방식은?',
                options: ['시그니처 기반, 이상 탐지 기반', '수동, 자동', '내부, 외부', '유선, 무선'],
                correct: 0,
                explanation: '시그니처 기반은 알려진 패턴을, 이상 탐지는 정상 행위와의 차이를 탐지합니다.'
            },
            {
                q: 'Honeypot의 주요 목적은?',
                options: ['실제 서비스 제공', '공격자 유인 및 행동 분석', '데이터 백업', '속도 향상'],
                correct: 1,
                explanation: 'Honeypot은 가짜 시스템으로 공격자를 유인하여 공격 기법을 분석하고 실제 시스템을 보호합니다.'
            },
            {
                q: 'Network Segmentation의 주요 목적은?',
                options: ['속도 향상', '보안 강화 및 침해 확산 방지', '비용 절감', '백업'],
                correct: 1,
                explanation: 'Network Segmentation은 네트워크를 분리하여 한 영역의 침해가 다른 영역으로 확산되는 것을 방지합니다.'
            },
            {
                q: 'Bastion Host의 역할은?',
                options: ['일반 웹서버', '외부와 내부 네트워크 사이의 보안 관문', '데이터 저장', '백업'],
                correct: 1,
                explanation: 'Bastion Host는 외부에서 내부 네트워크로 접근하는 유일한 경로로 강력하게 보호됩니다.'
            },
            {
                q: '네트워크 보안에서 Defense in Depth의 의미는?',
                options: ['단일 보안 계층', '다층 보안 방어', '깊이 우선 탐색', '속도 우선'],
                correct: 1,
                explanation: 'Defense in Depth는 여러 보안 계층을 두어 하나가 뚫려도 다른 계층이 방어하는 전략입니다.'
            },
            {
                q: 'Egress Filtering의 목적은?',
                options: ['들어오는 트래픽 차단', '나가는 트래픽 제어', '속도 제한', '암호화'],
                correct: 1,
                explanation: 'Egress Filtering은 내부에서 외부로 나가는 트래픽을 제어하여 데이터 유출이나 봇넷 활동을 방지합니다.'
            },
            {
                q: 'Network Access Control(NAC)의 주요 기능은?',
                options: ['속도 제한', '네트워크 접근 장치 검증 및 제어', '데이터 백업', '암호화'],
                correct: 1,
                explanation: 'NAC는 네트워크에 접속하는 장치의 보안 상태를 검증하고 정책에 따라 접근을 허용하거나 격리합니다.'
            },
            {
                q: 'TCP와 UDP의 주요 차이점은?',
                options: ['동일함', 'TCP는 연결 지향/신뢰성, UDP는 비연결/빠른 속도', 'UDP가 더 안전', '차이 없음'],
                correct: 1,
                explanation: 'TCP는 연결을 수립하고 신뢰성을 보장하지만, UDP는 빠르고 가벼운 대신 신뢰성을 보장하지 않습니다.'
            },
            {
                q: 'OSI 7계층에서 전송 계층의 역할은?',
                options: ['물리적 연결', '종단 간 데이터 전송 및 오류 제어', '라우팅', '사용자 인터페이스'],
                correct: 1,
                explanation: '전송 계층(4계층)은 TCP, UDP 프로토콜로 종단 간 통신과 데이터 전송을 담당합니다.'
            },
            {
                q: 'TTL(Time To Live)의 주요 목적은?',
                options: ['패킷의 전송 속도 제한', '패킷이 무한 순환하는 것을 방지', '패킷의 우선순위 지정', '패킷 암호화'],
                correct: 1,
                explanation: 'TTL은 패킷이 통과할 수 있는 라우터 수를 제한하여 무한 루프를 방지합니다.'
            },
            {
                q: '보안망 구성도에서 3-Tier 아키텍처의 구성 요소는?',
                options: ['Web-DB', 'Web-WAS-DB', 'Web-App', 'DB-Cache'],
                correct: 1,
                explanation: '3-Tier는 프레젠테이션 계층(Web), 애플리케이션 계층(WAS), 데이터 계층(DB)으로 구성됩니다.'
            },
            {
                q: 'SMTP의 기본 포트 번호는?',
                options: ['21', '22', '25', '110'],
                correct: 2,
                explanation: 'SMTP(이메일 전송)는 25번, POP3(이메일 수신)는 110번, IMAP는 143번 포트를 사용합니다.'
            },
            {
                q: 'Unicast, Broadcast, Multicast 중 가장 효율적인 방식은?',
                options: ['Unicast', 'Broadcast', 'Multicast', '모두 동일'],
                correct: 2,
                explanation: 'Multicast는 특정 그룹에게만 전송하여 네트워크 트래픽을 최소화하므로 가장 효율적입니다.'
            }
        ]
    },
    // ========== 2. 가상화기술과 클라우드 (60문제) ==========
    virtualizationCloud: {
        title: '가상화기술과 클라우드',
        totalQuestions: 60,
        questions: [
            {
                q: 'Docker의 주요 특징은?',
                options: ['하이퍼바이저 기반', '컨테이너 기반 가상화', '전체 OS 가상화', '하드웨어 에뮬레이션'],
                correct: 1,
                explanation: 'Docker는 OS 수준 가상화로 가볍고 빠른 컨테이너를 제공합니다.'
            },
            {
                q: 'Docker Image의 특징은?',
                options: ['실행 중인 컨테이너', '읽기 전용 템플릿', '가상 머신', '물리 서버'],
                correct: 1,
                explanation: 'Docker Image는 컨테이너 실행에 필요한 파일들을 포함하는 읽기 전용 템플릿입니다.'
            },
            {
                q: 'Docker Container와 VM의 주요 차이점은?',
                options: ['동일함', '컨테이너는 OS 커널 공유, VM은 독립 OS', 'VM이 더 가벼움', '차이 없음'],
                correct: 1,
                explanation: '컨테이너는 호스트 OS 커널을 공유하여 VM보다 가볍고 빠릅니다.'
            },
            {
                q: 'Kubernetes의 주요 역할은?',
                options: ['컨테이너 생성', '컨테이너 오케스트레이션', '이미지 빌드', 'OS 설치'],
                correct: 1,
                explanation: 'Kubernetes는 컨테이너의 배포, 확장, 관리를 자동화하는 오케스트레이션 플랫폼입니다.'
            },
            {
                q: 'Kubernetes Pod의 정의는?',
                options: ['단일 컨테이너', '하나 이상의 컨테이너 그룹', '가상 머신', '물리 서버'],
                correct: 1,
                explanation: 'Pod는 Kubernetes의 최소 배포 단위로 하나 이상의 컨테이너를 포함합니다.'
            },
            {
                q: 'Kubernetes Pod 내의 컨테이너들이 공유하는 것은?',
                options: ['이미지만', '네트워크와 스토리지 볼륨', 'CPU만', '메모리만'],
                correct: 1,
                explanation: '같은 Pod의 컨테이너들은 네트워크 네임스페이스(localhost 통신 가능)와 볼륨을 공유합니다.'
            },
            {
                q: 'Kubernetes Node의 역할은?',
                options: ['관리 서버', 'Pod가 실행되는 워커 머신', 'DNS 서버', '로드밸런서'],
                correct: 1,
                explanation: 'Node는 Pod를 실행하는 물리 또는 가상 머신입니다.'
            },
            {
                q: 'Kubernetes Cluster의 두 가지 주요 노드 타입은?',
                options: ['Worker, Slave', 'Master, Worker', 'Primary, Secondary', 'Main, Sub'],
                correct: 1,
                explanation: 'Kubernetes Cluster는 제어를 담당하는 Master Node(Control Plane)와 워크로드를 실행하는 Worker Node로 구성됩니다.'
            },
            {
                q: 'Kubernetes Master Node(Control Plane)의 핵심 구성 요소가 아닌 것은?',
                options: ['API Server', 'Scheduler', 'etcd', 'Kubelet'],
                correct: 3,
                explanation: 'Kubelet은 Worker Node에서 Pod를 관리하는 구성 요소입니다. Master Node는 API Server, Scheduler, Controller Manager, etcd로 구성됩니다.'
            },
            {
                q: 'Kubernetes API Server의 역할은?',
                options: ['컨테이너 실행', 'Kubernetes 클러스터의 프론트엔드 및 통신 허브', 'Pod 스케줄링', '스토리지 관리'],
                correct: 1,
                explanation: 'API Server는 모든 컴포넌트와 사용자가 통신하는 중심점이며, 클러스터의 모든 작업은 API Server를 거칩니다.'
            },
            {
                q: 'Kubernetes Scheduler의 역할은?',
                options: ['Pod 삭제', '새로운 Pod를 실행할 최적의 Node 선택', 'Image 빌드', 'Network 설정'],
                correct: 1,
                explanation: 'Scheduler는 리소스, 제약 조건, 친화성 등을 고려하여 Pod를 배치할 Node를 결정합니다.'
            },
            {
                q: 'Kubernetes etcd의 역할은?',
                options: ['컨테이너 실행', '클러스터 구성 데이터 저장소', 'DNS 서버', '로드밸런서'],
                correct: 1,
                explanation: 'etcd는 Kubernetes 클러스터의 모든 구성 정보와 상태를 저장하는 분산 키-값 저장소입니다.'
            },
            {
                q: 'Kubernetes Controller Manager의 역할은?',
                options: ['Pod 실행', '원하는 상태 유지를 위한 제어 루프 실행', 'DNS 관리', 'Image 빌드'],
                correct: 1,
                explanation: 'Controller Manager는 ReplicaSet, Deployment 등의 컨트롤러를 실행하여 선언된 상태를 유지합니다.'
            },
            {
                q: 'Kubernetes Worker Node의 필수 구성 요소가 아닌 것은?',
                options: ['Kubelet', 'Kube-proxy', 'Container Runtime', 'etcd'],
                correct: 3,
                explanation: 'Worker Node는 Kubelet, Kube-proxy, Container Runtime으로 구성됩니다. etcd는 Master Node에 있습니다.'
            },
            {
                q: 'Kubernetes Kubelet의 역할은?',
                options: ['클러스터 관리', 'Node에서 Pod와 컨테이너 관리', 'Image 빌드', 'DNS 관리'],
                correct: 1,
                explanation: 'Kubelet은 각 Node에서 실행되며, Pod 명세를 받아 컨테이너가 정상 실행되도록 관리합니다.'
            },
            {
                q: 'Kubernetes Kube-proxy의 역할은?',
                options: ['Pod 생성', 'Service 추상화 및 네트워크 규칙 관리', 'Image 저장', 'etcd 백업'],
                correct: 1,
                explanation: 'Kube-proxy는 Service의 가상 IP를 실제 Pod IP로 매핑하고 로드밸런싱을 수행합니다.'
            },
            {
                q: 'Kubernetes Service의 주요 목적은?',
                options: ['Pod 생성', 'Pod 집합에 안정적인 네트워크 엔드포인트 제공', 'Image 빌드', 'OS 업데이트'],
                correct: 1,
                explanation: 'Service는 동적으로 변하는 Pod들에게 고정된 IP와 DNS 이름을 제공하고 트래픽을 분산합니다.'
            },
            {
                q: 'Kubernetes Service의 타입이 아닌 것은?',
                options: ['ClusterIP', 'NodePort', 'LoadBalancer', 'PodPort'],
                correct: 3,
                explanation: 'Service 타입은 ClusterIP(내부), NodePort(Node IP:Port), LoadBalancer(외부 LB), ExternalName이 있습니다.'
            },
            {
                q: 'Kubernetes Deployment의 주요 기능은?',
                options: ['DNS 관리', 'Pod 배포 및 선언적 업데이트 관리', '네트워크 설정', '스토리지 관리'],
                correct: 1,
                explanation: 'Deployment는 Pod의 선언적 배포, 롤링 업데이트, 롤백을 관리합니다.'
            },
            {
                q: 'Kubernetes ReplicaSet의 역할은?',
                options: ['Image 복제', '지정된 수의 Pod 복제본 유지', 'Node 복제', 'Service 복제'],
                correct: 1,
                explanation: 'ReplicaSet은 지정된 수의 Pod 복제본이 항상 실행되도록 보장합니다.'
            },
            {
                q: 'Kubernetes의 선언적(Declarative) 관리 방식의 의미는?',
                options: ['명령어로 직접 조작', '원하는 최종 상태를 선언', '수동 관리', '자동 삭제'],
                correct: 1,
                explanation: '선언적 방식은 "어떻게"가 아닌 "무엇을" 원하는지 명시하면 Kubernetes가 자동으로 현재 상태를 원하는 상태로 조정합니다.'
            },
            {
                q: 'Kubernetes Namespace의 목적은?',
                options: ['네트워크 분리', '클러스터 내 리소스 논리적 분리', 'Pod 실행', 'Image 저장'],
                correct: 1,
                explanation: 'Namespace는 클러스터 리소스를 논리적으로 분리하여 여러 팀이나 프로젝트가 사용할 수 있게 합니다.'
            },
            {
                q: 'Kubernetes Label과 Selector의 관계는?',
                options: ['무관함', 'Label로 리소스를 태깅하고 Selector로 선택', 'Label만 사용', 'Selector만 사용'],
                correct: 1,
                explanation: 'Label은 키-값 쌍으로 리소스를 태깅하고, Selector는 Label을 기준으로 리소스를 필터링합니다.'
            },
            {
                q: 'Kubernetes ConfigMap의 용도는?',
                options: ['Image 저장', '애플리케이션 설정 데이터 저장', 'Pod 실행', 'Node 관리'],
                correct: 1,
                explanation: 'ConfigMap은 애플리케이션 설정을 컨테이너 이미지와 분리하여 저장합니다.'
            },
            {
                q: 'Kubernetes Secret의 용도는?',
                options: ['공개 데이터 저장', '민감한 데이터(패스워드, 토큰) 저장', 'Image 저장', 'Log 저장'],
                correct: 1,
                explanation: 'Secret은 패스워드, API 키 등 민감한 정보를 Base64 인코딩하여 저장합니다.'
            },
            {
                q: 'Kubernetes Volume의 목적은?',
                options: ['네트워크 설정', '데이터 영속성 및 Pod 내 컨테이너 간 데이터 공유', 'CPU 할당', 'Memory 할당'],
                correct: 1,
                explanation: 'Volume은 컨테이너 재시작 시 데이터 보존과 같은 Pod 내 컨테이너 간 데이터 공유를 가능하게 합니다.'
            },
            {
                q: 'Kubernetes Persistent Volume(PV)과 Persistent Volume Claim(PVC)의 관계는?',
                options: ['동일함', 'PV는 스토리지 리소스, PVC는 사용 요청', 'PVC만 필요', 'PV만 필요'],
                correct: 1,
                explanation: 'PV는 클러스터의 스토리지 리소스를 나타내고, PVC는 사용자가 PV를 요청하는 방법입니다.'
            },
            {
                q: 'Kubernetes StatefulSet의 특징은?',
                options: ['무상태 애플리케이션용', '상태를 가진 애플리케이션 관리 (안정적인 네트워크 ID, 순서 보장)', 'Pod 순서 무관', 'Deployment와 동일'],
                correct: 1,
                explanation: 'StatefulSet은 데이터베이스 등 상태를 유지해야 하는 애플리케이션에 안정적인 네트워크 ID와 영속적 스토리지를 제공합니다.'
            },
            {
                q: 'Kubernetes DaemonSet의 특징은?',
                options: ['일부 Node에만 실행', '모든(또는 선택된) Node에 Pod 복사본 실행', 'Master Node만', '선택적 실행'],
                correct: 1,
                explanation: 'DaemonSet은 모든(또는 선택된) Node에 Pod 복사본을 실행합니다. 로그 수집, 모니터링 Agent에 주로 사용됩니다.'
            },
            {
                q: 'Kubernetes Job의 용도는?',
                options: ['지속 실행 서비스', '일회성 또는 배치 작업 실행', 'Node 관리', 'Network 설정'],
                correct: 1,
                explanation: 'Job은 배치 작업처럼 한 번 실행되고 성공적으로 완료되어야 하는 작업을 관리합니다.'
            },
            {
                q: 'Kubernetes CronJob의 용도는?',
                options: ['실시간 처리', '스케줄된 주기적 작업 실행', '즉시 실행', '수동 실행'],
                correct: 1,
                explanation: 'CronJob은 cron 형식의 스케줄에 따라 주기적으로 Job을 생성하고 실행합니다.'
            },
            {
                q: 'Kubernetes Ingress의 역할은?',
                options: ['Pod 생성', 'HTTP/HTTPS 라우팅 및 외부 접근 관리', 'Image 빌드', 'Node 관리'],
                correct: 1,
                explanation: 'Ingress는 클러스터 외부에서 내부 Service로의 HTTP/HTTPS 트래픽을 라우팅하고, 도메인 기반 라우팅과 SSL 종료를 제공합니다.'
            },
            {
                q: 'Kubernetes Horizontal Pod Autoscaler(HPA)의 기능은?',
                options: ['수직 확장', '부하에 따라 Pod 수 자동 조절', 'Node 추가', 'Image 빌드'],
                correct: 1,
                explanation: 'HPA는 CPU, 메모리 사용률 등을 모니터링하여 Pod 개수를 자동으로 증감합니다.'
            },
            {
                q: 'Kubernetes Rolling Update의 장점은?',
                options: ['빠른 배포만', '무중단 배포', '완전 삭제 후 재배포', '수동 배포'],
                correct: 1,
                explanation: 'Rolling Update는 기존 Pod를 하나씩 새 버전으로 교체하여 서비스 중단 없이 업데이트합니다.'
            },
            {
                q: 'Kubernetes Liveness Probe의 목적은?',
                options: ['Pod 생성', '컨테이너 살아있는지 확인 및 실패 시 재시작', 'Image 빌드', 'Network 설정'],
                correct: 1,
                explanation: 'Liveness Probe는 컨테이너가 응답하는지 확인하고, 실패 시 Kubelet이 컨테이너를 재시작합니다.'
            },
            {
                q: 'Kubernetes Readiness Probe의 목적은?',
                options: ['Pod 삭제', '트래픽 수신 준비 상태 확인', 'Image 빌드', 'Node 관리'],
                correct: 1,
                explanation: 'Readiness Probe는 Pod가 트래픽을 받을 준비가 되었는지 확인하고, 준비되지 않으면 Service에서 제외합니다.'
            },
            {
                q: 'IaaS의 정의는?',
                options: ['소프트웨어 제공', '인프라(서버, 네트워크, 스토리지) 제공', '플랫폼 제공', '데스크톱 제공'],
                correct: 1,
                explanation: 'IaaS(Infrastructure as a Service)는 가상화된 컴퓨팅 리소스를 인터넷을 통해 제공합니다. AWS EC2가 대표적입니다.'
            },
            {
                q: 'PaaS의 정의는?',
                options: ['인프라만 제공', '애플리케이션 개발 및 배포 플랫폼 제공', '완성된 소프트웨어 제공', '하드웨어만 제공'],
                correct: 1,
                explanation: 'PaaS(Platform as a Service)는 애플리케이션 개발과 배포를 위한 플랫폼을 제공합니다. Heroku, Google App Engine 등이 있습니다.'
            },
            {
                q: 'SaaS의 정의는?',
                options: ['인프라 제공', '플랫폼 제공', '소프트웨어 애플리케이션 제공', '하드웨어 제공'],
                correct: 2,
                explanation: 'SaaS(Software as a Service)는 인터넷을 통해 소프트웨어를 제공하는 모델입니다. Gmail, Office 365, Salesforce 등이 예시입니다.'
            },
            {
                q: 'Public Cloud의 특징은?',
                options: ['단일 조직 전용', '여러 조직이 공유하는 인프라', '사내 서버만', '인터넷 불필요'],
                correct: 1,
                explanation: 'Public Cloud는 여러 고객이 공유하는 클라우드 인프라입니다. AWS, Azure, GCP 등이 대표적입니다.'
            },
            {
                q: 'Private Cloud의 특징은?',
                options: ['모두 공유', '단일 조직 전용 인프라', '무료 서비스', '제한 없음'],
                correct: 1,
                explanation: 'Private Cloud는 단일 조직을 위한 전용 클라우드 인프라로 보안과 제어력이 높지만 비용이 큽니다.'
            },
            {
                q: 'Hybrid Cloud의 의미는?',
                options: ['Public Cloud만', 'Private Cloud만', 'Public + Private Cloud 결합', 'On-premise만'],
                correct: 2,
                explanation: 'Hybrid Cloud는 퍼블릭과 프라이빗 클라우드를 결합하여 유연성과 보안을 모두 확보하는 모델입니다.'
            },
            {
                q: 'Container의 주요 장점이 아닌 것은?',
                options: ['빠른 시작 시간', '높은 이식성', '완전한 OS 격리', '효율적인 리소스 사용'],
                correct: 2,
                explanation: '컨테이너는 OS 커널을 공유하므로 VM처럼 완전한 OS 격리를 제공하지 않습니다. 대신 가볍고 빠릅니다.'
            },
            {
                q: 'Docker Registry의 역할은?',
                options: ['컨테이너 실행', 'Image 저장 및 배포', '네트워크 관리', '로그 수집'],
                correct: 1,
                explanation: 'Docker Registry는 Docker Image를 저장하고 배포하는 저장소입니다. Docker Hub가 대표적인 공개 Registry입니다.'
            },
            {
                q: 'Container Image Layer의 특징은?',
                options: ['매번 새로 생성', '재사용 가능한 읽기 전용 계층', '삭제 불가', '수정 가능'],
                correct: 1,
                explanation: 'Image는 여러 레이어로 구성되며, 레이어는 재사용되어 저장 공간과 전송 시간을 절약합니다.'
            },
            {
                q: 'Container Runtime의 역할은?',
                options: ['Image 빌드', '컨테이너 실행 환경 제공', 'DNS 관리', 'Load Balancing'],
                correct: 1,
                explanation: 'Container Runtime(Docker, containerd, CRI-O 등)은 실제로 컨테이너를 실행하는 소프트웨어입니다.'
            },
            {
                q: 'Kubernetes RBAC의 목적은?',
                options: ['Pod 생성', '역할 기반 접근 제어', 'Network 설정', 'Image 빌드'],
                correct: 1,
                explanation: 'RBAC(Role-Based Access Control)은 사용자와 서비스 계정의 권한을 Role과 RoleBinding을 통해 세밀하게 제어합니다.'
            },
            {
                q: 'Kubernetes Network Policy의 역할은?',
                options: ['Image 관리', 'Pod 간 네트워크 트래픽 제어', 'CPU 할당', 'Storage 관리'],
                correct: 1,
                explanation: 'Network Policy는 Pod 간 통신을 제어하여 마이크로 세그멘테이션을 구현하고 보안을 강화합니다.'
            },
            {
                q: 'Container Image Scanning의 목적은?',
                options: ['속도 측정', '이미지 내 취약점 탐지', 'Image 압축', 'Image 암호화'],
                correct: 1,
                explanation: 'Image Scanning(Trivy, Clair 등)은 컨테이너 이미지의 알려진 취약점을 탐지하여 배포 전 보안을 강화합니다.'
            },
            {
                q: 'Kubernetes Security Context의 용도는?',
                options: ['Network 설정', 'Pod/Container 보안 설정 (권한, UID, SELinux 등)', 'Image 빌드', 'DNS 설정'],
                correct: 1,
                explanation: 'Security Context는 runAsUser, runAsNonRoot, capabilities 등 보안 관련 설정을 정의합니다.'
            },
            {
                q: 'Privileged Container의 보안 위험은?',
                options: ['낮은 성능', '호스트 전체 권한 획득 가능', '느린 시작', '높은 메모리 사용'],
                correct: 1,
                explanation: 'Privileged Container는 호스트의 모든 장치와 기능에 접근할 수 있어 Container Escape 시 매우 위험합니다.'
            },
            {
                q: 'Service Mesh의 주요 기능은?',
                options: ['Image 빌드', '마이크로서비스 간 통신 관리 (트래픽, 보안, 관찰성)', 'Pod 생성', 'Node 관리'],
                correct: 1,
                explanation: 'Service Mesh(Istio, Linkerd 등)는 마이크로서비스 간 트래픽 제어, 암호화, 모니터링을 담당하는 인프라 계층입니다.'
            },
            {
                q: 'Cloud Native의 핵심 원칙이 아닌 것은?',
                options: ['마이크로서비스 아키텍처', '컨테이너화', '동적 오케스트레이션', '모놀리식 아키텍처'],
                correct: 3,
                explanation: 'Cloud Native는 마이크로서비스, 컨테이너, 오케스트레이션, 선언적 API를 활용하며 모놀리식과 반대됩니다.'
            },
            {
                q: 'Immutable Infrastructure의 장점은?',
                options: ['서버 수정 용이', '변경 불가로 일관성 보장', '느린 배포', '복잡한 관리'],
                correct: 1,
                explanation: 'Immutable Infrastructure는 서버를 수정하지 않고 새로 배포하여 일관성과 신뢰성을 보장합니다.'
            },
            {
                q: 'Blue-Green Deployment의 장점은?',
                options: ['느린 배포', '빠른 롤백 (두 환경 유지)', '높은 비용만', '복잡한 설정만'],
                correct: 1,
                explanation: 'Blue-Green은 두 개의 동일한 환경을 유지하여 문제 발생 시 즉시 이전 버전으로 전환할 수 있습니다.'
            },
            {
                q: 'Canary Deployment의 특징은?',
                options: ['전체 동시 배포', '일부 사용자에게 먼저 배포 후 점진적 확대', '롤백 불가', '수동 배포만'],
                correct: 1,
                explanation: 'Canary는 신규 버전을 일부 사용자(Canary 그룹)에게만 배포하여 테스트 후 점진적으로 확대합니다.'
            },
            {
                q: 'Infrastructure as Code(IaC)의 장점이 아닌 것은?',
                options: ['자동화', '버전 관리', '재현 가능성', '수동 설정 증가'],
                correct: 3,
                explanation: 'IaC(Terraform, CloudFormation 등)는 인프라를 코드로 관리하여 자동화를 촉진하고 수동 작업을 줄입니다.'
            },
            {
                q: 'Container Orchestration이 필요한 주된 이유는?',
                options: ['단일 컨테이너 실행', '대규모 컨테이너 자동 관리 (배포, 확장, 복구)', 'Image 빌드', 'OS 설치'],
                correct: 1,
                explanation: '수백~수천 개의 컨테이너를 수동으로 관리하기 어렵기 때문에 자동화된 오케스트레이션이 필요합니다.'
            },
            {
                q: 'Kubernetes의 Self-Healing 기능은?',
                options: ['수동 복구', '실패한 컨테이너/Pod 자동 재시작', '백업만', '로깅만'],
                correct: 1,
                explanation: 'Kubernetes는 컨테이너 실패, Node 장애 시 자동으로 Pod를 재시작하거나 다른 Node로 재배치합니다.'
            },
            {
                q: 'Kubernetes Init Container의 용도는?',
                options: ['메인 컨테이너와 동시 실행', 'Pod 시작 전 초기화 작업 수행', 'Pod 종료 작업', '모니터링 전용'],
                correct: 1,
                explanation: 'Init Container는 메인 컨테이너가 시작되기 전에 실행되어 설정 파일 준비, 의존성 확인 등의 초기화 작업을 수행합니다.'
            }
        ]
    },
    // ========== 3. 해킹방어를 위한 모의해킹 실무 (30문제) ==========
    pentestingDefense: {
        title: '해킹방어를 위한 모의해킹 실무',
        totalQuestions: 30,
        questions: [
            {
                q: 'SQL Injection 공격의 기본 원리는?',
                options: ['파일 업로드 취약점 악용', '사용자 입력을 SQL 쿼리에 직접 삽입', 'XSS를 통한 세션 탈취', '버퍼 오버플로우'],
                correct: 1,
                explanation: 'SQL Injection은 사용자 입력 검증이 부족할 때 악의적인 SQL 코드를 삽입하여 실행하는 공격입니다.'
            },
            {
                q: 'Python으로 TCP 소켓을 생성하는 코드는?',
                options: ["socket.socket()", "socket.socket(AF_INET, SOCK_STREAM)", "tcp.socket()", "create_socket()"],
                correct: 1,
                explanation: 'socket.socket(AF_INET, SOCK_STREAM)으로 IPv4 TCP 소켓을 생성합니다.'
            },
            {
                q: '포트 스캐닝에서 포트가 열려있음을 확인하는 connect_ex() 반환값은?',
                options: ['-1', '0', '1', 'True'],
                correct: 1,
                explanation: 'connect_ex()는 연결 성공 시 0을, 실패 시 errno를 반환합니다.'
            },
            {
                q: 'XOR 암호화의 특징으로 올바른 것은?',
                options: ['일방향 암호화', '같은 키로 암호화와 복호화 가능', '해시 함수', '비대칭 암호화'],
                correct: 1,
                explanation: 'XOR는 동일한 키로 암호화와 복호화를 수행하는 대칭키 방식입니다. data ^ key ^ key = data'
            },
            {
                q: 'Blind SQL Injection에서 참/거짓을 판단하는 방법이 아닌 것은?',
                options: ['응답 내용 차이', '응답 시간 차이', '응답 길이 차이', '에러 메시지 직접 출력'],
                correct: 3,
                explanation: 'Blind SQL Injection은 에러 메시지가 노출되지 않을 때 사용하는 기법입니다.'
            },
            {
                q: 'RCE(Remote Code Execution)의 의미는?',
                options: ['원격 설정 변경', '원격에서 임의 코드 실행', '원격 데이터 복사', '원격 에러 확인'],
                correct: 1,
                explanation: 'RCE는 공격자가 원격에서 서버에 임의의 명령어나 코드를 실행할 수 있는 취약점입니다.'
            },
            {
                q: 'Spring4Shell(CVE-2022-22965) 공격이 악용하는 Spring 메커니즘은?',
                options: ['Dependency Injection', 'Data Binding', 'AOP', 'Transaction'],
                correct: 1,
                explanation: 'Data Binding 메커니즘을 통해 내부 객체에 접근하여 ClassLoader를 조작합니다.'
            },
            {
                q: 'Time-based SQL Injection에서 주로 사용하는 함수는?',
                options: ['wait()', 'sleep()', 'delay()', 'timeout()'],
                correct: 1,
                explanation: 'sleep() 함수로 의도적인 지연을 발생시켜 쿼리 실행 여부를 판단합니다.'
            },
            {
                q: 'Linux에서 SetUID 비트가 설정된 파일의 위험성은?',
                options: ['파일이 삭제됨', '실행 시 파일 소유자 권한으로 실행', '파일이 암호화됨', '위험하지 않음'],
                correct: 1,
                explanation: 'SetUID 파일은 누가 실행하든 파일 소유자의 권한으로 실행되어 권한 상승에 악용될 수 있습니다.'
            },
            {
                q: 'Reverse Shell의 주요 특징은?',
                options: ['공격자가 서버에 연결', '서버가 공격자에게 연결', '양방향 연결', '연결 불필요'],
                correct: 1,
                explanation: 'Reverse Shell은 침투한 서버가 공격자에게 역으로 연결하여 방화벽의 아웃바운드 규칙을 우회합니다.'
            },
            {
                q: 'SQL에서 현재 데이터베이스 이름을 반환하는 MySQL 함수는?',
                options: ['db_name()', 'database()', 'current_db()', 'getdb()'],
                correct: 1,
                explanation: 'MySQL에서 database() 함수는 현재 사용 중인 데이터베이스 이름을 반환합니다.'
            },
            {
                q: 'Python에서 bytes와 str을 변환하는 메서드는?',
                options: ['convert()', 'encode()/decode()', 'to_bytes()/to_str()', 'bytes()/str()'],
                correct: 1,
                explanation: 'str.encode()는 str을 bytes로, bytes.decode()는 bytes를 str로 변환합니다.'
            },
            {
                q: 'Web Shell의 주요 용도는?',
                options: ['웹사이트 디자인', '웹 서버 원격 제어', '데이터베이스 백업', '로그 분석'],
                correct: 1,
                explanation: 'Web Shell은 웹 서버에 업로드된 악성 스크립트로 브라우저를 통해 서버를 제어합니다.'
            },
            {
                q: 'Privilege Escalation(권한 상승)의 목표는?',
                options: ['일반 사용자 → root/SYSTEM', 'root → 일반 사용자', '권한 삭제', '권한 분산'],
                correct: 0,
                explanation: '권한 상승은 낮은 권한에서 관리자(root/SYSTEM) 권한을 획득하는 것입니다.'
            },
            {
                q: 'Python으로 포트 스캔 시 소켓 타임아웃 설정 메서드는?',
                options: ['socket.timeout()', 'socket.settimeout()', 'socket.set_timeout()', 'socket.wait()'],
                correct: 1,
                explanation: 'socket.settimeout(초)는 소켓 연결 시도의 최대 대기 시간을 설정합니다.'
            },
            {
                q: 'Information_schema 데이터베이스의 용도는?',
                options: ['사용자 데이터 저장', 'DB 메타데이터 저장', '로그 저장', '백업 저장'],
                correct: 1,
                explanation: 'information_schema는 데이터베이스, 테이블, 컬럼 등의 메타데이터를 저장합니다.'
            },
            {
                q: 'UNION 기반 SQL Injection에서 UNION을 사용하는 이유는?',
                options: ['데이터 삭제', '두 쿼리 결과를 결합하여 정보 추출', '테이블 생성', '인덱스 최적화'],
                correct: 1,
                explanation: 'UNION은 정상 쿼리와 악의적 쿼리의 결과를 합쳐 데이터를 추출합니다.'
            },
            {
                q: 'Base64 인코딩의 주요 목적은?',
                options: ['암호화', '바이너리 데이터를 텍스트로 변환', '압축', '해싱'],
                correct: 1,
                explanation: 'Base64는 바이너리 데이터를 ASCII 텍스트로 인코딩하여 전송/저장을 용이하게 합니다.'
            },
            {
                q: 'Command Injection 공격에 사용되는 문자가 아닌 것은?',
                options: [';', '|', '&', '@'],
                correct: 3,
                explanation: '; | & && || 등은 명령어를 연결하여 추가 명령을 실행하는 데 사용됩니다.'
            },
            {
                q: 'TeamCity CVE-2024-27198 취약점의 유형은?',
                options: ['SQL Injection', 'Authentication Bypass', 'XSS', 'CSRF'],
                correct: 1,
                explanation: 'CVE-2024-27198은 인증 우회 취약점으로 CVSS 9.8 Critical입니다.'
            },
            {
                q: 'Keylogger의 주요 기능은?',
                options: ['암호 해독', '키보드 입력 기록', '화면 캡처만', '네트워크 감청'],
                correct: 1,
                explanation: 'Keylogger는 사용자의 키보드 입력을 몰래 기록하여 비밀번호 등을 탈취합니다.'
            },
            {
                q: 'WAF(Web Application Firewall) 우회 기법이 아닌 것은?',
                options: ['대소문자 변환', '인코딩', '주석 삽입', 'DDoS 공격'],
                correct: 3,
                explanation: 'WAF 우회는 패턴 탐지를 회피하기 위한 기법이며, DDoS는 다른 공격 유형입니다.'
            },
            {
                q: 'Python에서 XOR 연산자는?',
                options: ['&', '|', '^', '~'],
                correct: 2,
                explanation: '^ 기호가 XOR(배타적 논리합) 연산자입니다.'
            },
            {
                q: 'SQL 주석 기호로 올바른 것은?',
                options: ['-- 또는 #', '//', '/* */', '-- 또는 # 또는 /* */'],
                correct: 3,
                explanation: 'SQL에서는 --, #, /* */ 모두 주석으로 사용됩니다.'
            },
            {
                q: 'SSRF(Server-Side Request Forgery) 공격의 목표는?',
                options: ['클라이언트 공격', '서버가 내부 리소스에 요청하도록 유도', '데이터 암호화', 'DNS 스푸핑'],
                correct: 1,
                explanation: 'SSRF는 서버를 이용해 내부 네트워크나 localhost의 리소스에 접근하는 공격입니다.'
            },
            {
                q: 'Lateral Movement의 의미는?',
                options: ['수직 이동', '수평 이동 (침투한 시스템에서 다른 시스템으로)', '외부 이동', '하향 이동'],
                correct: 1,
                explanation: 'Lateral Movement는 침투한 시스템을 발판 삼아 네트워크 내 다른 시스템으로 이동하는 것입니다.'
            },
            {
                q: 'sudo -l 명령어의 용도는?',
                options: ['사용자 목록 확인', '현재 사용자가 sudo로 실행 가능한 명령 확인', '로그 확인', '시스템 재시작'],
                correct: 1,
                explanation: 'sudo -l은 권한 상승 가능 경로를 찾기 위해 사용됩니다.'
            },
            {
                q: 'Python으로 HTTP GET 요청을 보낼 때 주로 사용하는 라이브러리는?',
                options: ['socket', 'requests', 'http', 'urllib'],
                correct: 1,
                explanation: 'requests 라이브러리는 간단하고 사용하기 쉬운 HTTP 클라이언트입니다.'
            },
            {
                q: 'Persistence(지속성) 확보 기법이 아닌 것은?',
                options: ['cron 작업 등록', '서비스 등록', '백도어 설치', '일회성 명령 실행'],
                correct: 3,
                explanation: 'Persistence는 시스템 재부팅 후에도 접근을 유지하기 위한 기법입니다.'
            },
            {
                q: 'Hash 함수의 특징이 아닌 것은?',
                options: ['일방향', '고정 길이 출력', '복호화 가능', '충돌 저항성'],
                correct: 2,
                explanation: '해시는 일방향 함수로 복호화가 불가능합니다.'
            },
            // 추가 30문제
            {
                q: 'Metasploit Framework의 주요 용도는?',
                options: ['웹 개발', 'Exploit 개발 및 테스트', '데이터 분석', '이메일 전송'],
                correct: 1,
                explanation: 'Metasploit은 침투 테스트를 위한 Exploit 개발 및 실행 프레임워크입니다.'
            },
            {
                q: 'Nmap에서 스텔스 스캔을 수행하는 옵션은?',
                options: ['-sT', '-sS', '-sU', '-sP'],
                correct: 1,
                explanation: '-sS(SYN Scan)는 3-way handshake를 완성하지 않아 로그에 덜 남습니다.'
            },
            {
                q: 'SQL에서 여러 결과를 한 번에 실행하는 Stacked Query 공격에 사용되는 구분자는?',
                options: [',', ';', '|', '&'],
                correct: 1,
                explanation: '세미콜론(;)으로 여러 SQL 문을 연결하여 실행할 수 있습니다.'
            },
            {
                q: 'XXE(XML External Entity) 공격의 목표는?',
                options: ['SQL 실행', 'XML 파서를 통한 파일 읽기 또는 SSRF', 'XSS', 'CSRF'],
                correct: 1,
                explanation: 'XXE는 XML 파서가 외부 엔티티를 처리할 때 로컬 파일을 읽거나 내부 요청을 보냅니다.'
            },
            {
                q: 'Burp Suite의 주요 기능이 아닌 것은?',
                options: ['프록시', 'Intruder(자동 공격)', '이미지 편집', 'Repeater'],
                correct: 2,
                explanation: 'Burp Suite는 웹 애플리케이션 보안 테스트 도구로 HTTP 트래픽 분석에 특화되어 있습니다.'
            },
            {
                q: 'Dictionary Attack의 원리는?',
                options: ['무작위 시도', '사전에 있는 단어나 흔한 비밀번호 시도', '해시 충돌', '알고리즘 취약점'],
                correct: 1,
                explanation: 'Dictionary Attack은 미리 준비한 단어 목록으로 비밀번호를 추측합니다.'
            },
            {
                q: 'Wireshark의 주요 용도는?',
                options: ['포트 스캔', '패킷 캡처 및 분석', '웹 서버 운영', '이미지 편집'],
                correct: 1,
                explanation: 'Wireshark는 네트워크 패킷을 캡처하고 분석하는 도구입니다.'
            },
            {
                q: 'CSRF Token의 목적은?',
                options: ['암호화', 'CSRF 공격 방어', 'SQL Injection 방어', 'XSS 방어'],
                correct: 1,
                explanation: 'CSRF Token은 각 세션에 고유한 토큰을 부여하여 위조 요청을 차단합니다.'
            },
            {
                q: 'Brute Force Attack과 Dictionary Attack의 차이는?',
                options: ['동일함', 'Brute Force는 모든 조합, Dictionary는 단어 목록', 'Dictionary가 더 느림', '차이 없음'],
                correct: 1,
                explanation: 'Brute Force는 모든 가능한 조합을, Dictionary는 흔한 비밀번호 목록을 시도합니다.'
            },
            {
                q: 'File Upload 취약점에서 위험한 파일 확장자가 아닌 것은?',
                options: ['.php', '.jsp', '.txt', '.asp'],
                correct: 2,
                explanation: '.txt는 실행되지 않지만, 서버 스크립트 확장자는 코드 실행이 가능합니다.'
            },
            {
                q: 'Python requests 라이브러리의 주요 용도는?',
                options: ['파일 압축', 'HTTP 요청 전송', '이미지 처리', '데이터베이스 연결'],
                correct: 1,
                explanation: 'requests는 간편하게 HTTP GET, POST 등의 요청을 보낼 수 있는 라이브러리입니다.'
            },
            {
                q: 'Social Engineering의 예시가 아닌 것은?',
                options: ['피싱 이메일', '가짜 전화', 'SQL Injection', '물리적 침입'],
                correct: 2,
                explanation: 'Social Engineering은 사람의 심리를 이용한 공격이며, SQL Injection은 기술적 공격입니다.'
            },
            {
                q: 'Netcat의 주요 기능은?',
                options: ['웹 서버', 'TCP/UDP 통신 도구', '이미지 뷰어', 'DB 관리'],
                correct: 1,
                explanation: 'Netcat은 네트워크 연결, 포트 리스닝, 파일 전송 등에 사용되는 다목적 도구입니다.'
            },
            {
                q: 'Reflected XSS와 Stored XSS의 차이는?',
                options: ['동일함', 'Reflected는 즉시 반사, Stored는 DB 저장', 'Stored가 덜 위험', '차이 없음'],
                correct: 1,
                explanation: 'Reflected는 URL 등에서 즉시 실행되고, Stored는 DB에 저장되어 여러 사용자에게 영향을 줍니다.'
            },
            {
                q: 'Hydra 도구의 주요 용도는?',
                options: ['포트 스캔', '로그인 브루트포스', '패킷 분석', '파일 다운로드'],
                correct: 1,
                explanation: 'Hydra는 SSH, FTP, HTTP 등 다양한 프로토콜의 로그인 브루트포스 공격 도구입니다.'
            },
            {
                q: 'IDOR(Insecure Direct Object Reference) 취약점의 예시는?',
                options: ['URL의 user_id 파라미터를 변경하여 다른 사용자 정보 접근', 'SQL Injection', 'XSS', 'CSRF'],
                correct: 0,
                explanation: 'IDOR은 인가 검증 없이 객체 식별자를 직접 노출하여 발생합니다.'
            },
            {
                q: 'AES 암호화 알고리즘의 블록 크기는?',
                options: ['64비트', '128비트', '256비트', '512비트'],
                correct: 1,
                explanation: 'AES는 128비트 블록을 사용하며, 키 크기는 128/192/256비트가 가능합니다.'
            },
            {
                q: 'DNS Spoofing(DNS Cache Poisoning)의 목표는?',
                options: ['서버 다운', '잘못된 IP 주소로 리다이렉트', 'DB 삭제', '암호화 해제'],
                correct: 1,
                explanation: 'DNS Spoofing은 DNS 캐시에 거짓 정보를 주입하여 피해자를 악성 사이트로 유도합니다.'
            },
            {
                q: 'Man-in-the-Middle(MITM) 공격의 원리는?',
                options: ['서버 해킹', '통신 중간에서 가로채기 및 조작', 'DB 주입', '파일 업로드'],
                correct: 1,
                explanation: 'MITM은 공격자가 두 통신 주체 사이에 위치하여 데이터를 가로채거나 변조합니다.'
            },
            {
                q: 'Nmap에서 운영체제를 탐지하는 옵션은?',
                options: ['-O', '-A', '-sV', '-O 또는 -A'],
                correct: 3,
                explanation: '-O는 OS 탐지, -A는 OS 탐지와 버전 탐지를 모두 수행합니다.'
            },
            {
                q: 'LFI(Local File Inclusion) 취약점으로 읽을 수 있는 파일의 예시는?',
                options: ['외부 URL', '/etc/passwd', '원격 이미지', 'DB 테이블'],
                correct: 1,
                explanation: 'LFI는 로컬 파일 시스템의 파일을 웹 애플리케이션을 통해 읽을 수 있는 취약점입니다.'
            },
            {
                q: 'John the Ripper의 주요 용도는?',
                options: ['포트 스캔', '비밀번호 크래킹', '네트워크 모니터링', '웹 스크래핑'],
                correct: 1,
                explanation: 'John the Ripper는 해시된 비밀번호를 크래킹하는 도구입니다.'
            },
            {
                q: 'Session Hijacking 공격의 목표는?',
                options: ['서버 다운', '사용자 세션 탈취', 'DB 삭제', 'DNS 변조'],
                correct: 1,
                explanation: 'Session Hijacking은 유효한 세션 ID를 탈취하여 정당한 사용자로 가장합니다.'
            },
            {
                q: 'Nikto 도구의 주요 기능은?',
                options: ['포트 스캔', '웹 서버 취약점 스캔', 'DB 백업', '이메일 전송'],
                correct: 1,
                explanation: 'Nikto는 웹 서버의 설정 오류, 오래된 버전, 알려진 취약점을 스캔합니다.'
            },
            {
                q: 'Rainbow Table Attack의 원리는?',
                options: ['무작위 시도', '미리 계산된 해시 테이블 사용', 'SQL 주입', '네트워크 스니핑'],
                correct: 1,
                explanation: 'Rainbow Table은 해시값과 평문을 미리 계산하여 빠르게 비밀번호를 역추적합니다.'
            },
            {
                q: 'OS Command Injection 방어 방법이 아닌 것은?',
                options: ['입력 검증', '화이트리스트 사용', 'SQL Prepared Statement', 'API 사용'],
                correct: 2,
                explanation: 'SQL Prepared Statement는 SQL Injection 방어에 사용되며, Command Injection과는 무관합니다.'
            },
            {
                q: 'Clickjacking 공격의 원리는?',
                options: ['보이지 않는 iframe으로 클릭 유도', 'SQL 주입', 'XSS', 'CSRF'],
                correct: 0,
                explanation: 'Clickjacking은 투명한 iframe을 덮어 사용자가 의도하지 않은 동작을 클릭하게 만듭니다.'
            },
            {
                q: 'Subdomain Takeover 취약점의 조건은?',
                options: ['강한 비밀번호', '사용되지 않는 서브도메인의 CNAME 레코드', 'SSL 인증서', '방화벽'],
                correct: 1,
                explanation: '삭제된 서비스를 가리키는 CNAME이 남아있으면 공격자가 해당 서브도메인을 장악할 수 있습니다.'
            },
            {
                q: 'Gobuster 또는 Dirb의 주요 용도는?',
                options: ['포트 스캔', '디렉토리 및 파일 브루트포스', 'DB 백업', 'DNS 조회'],
                correct: 1,
                explanation: 'Gobuster와 Dirb는 숨겨진 디렉토리와 파일을 찾기 위한 브루트포스 도구입니다.'
            },
            {
                q: 'Same-Origin Policy의 목적은?',
                options: ['속도 향상', '다른 출처 간 악의적 접근 차단', 'DB 보호', '네트워크 최적화'],
                correct: 1,
                explanation: 'Same-Origin Policy는 스크립트가 다른 출처의 리소스에 접근하는 것을 제한합니다.'
            }
        ]
    },

    // ========== 4. 취약점 진단 및 대응 실무 (30문제) ==========
    vulnerabilityAssessment: {
        title: '취약점 진단 및 대응 실무',
        totalQuestions: 30,
        questions: [
            {
                q: 'CVE(Common Vulnerabilities and Exposures)의 주요 목적은?',
                options: ['취약점 수정', '취약점에 고유 식별자 부여', '해킹 도구 제공', '보안 교육'],
                correct: 1,
                explanation: 'CVE는 공개적으로 알려진 취약점에 고유 번호를 부여하여 표준화된 참조를 가능하게 합니다.'
            },
            {
                q: 'CVSS(Common Vulnerability Scoring System) 점수의 최대값은?',
                options: ['5.0', '7.5', '9.0', '10.0'],
                correct: 3,
                explanation: 'CVSS는 0.0~10.0 척도로 취약점의 심각도를 평가하며, 10.0이 가장 심각합니다.'
            },
            {
                q: 'CVSS 9.0-10.0 범위의 등급은?',
                options: ['Low', 'Medium', 'High', 'Critical'],
                correct: 3,
                explanation: 'Critical(9.0-10.0), High(7.0-8.9), Medium(4.0-6.9), Low(0.1-3.9)로 분류됩니다.'
            },
            {
                q: 'Spring4Shell 취약점에 필요한 최소 JDK 버전은?',
                options: ['JDK 8', 'JDK 9', 'JDK 11', 'JDK 17'],
                correct: 1,
                explanation: 'JDK 9부터 도입된 모듈 시스템을 악용하므로 JDK 9 이상이 필요합니다.'
            },
            {
                q: 'Linux /etc/shadow 파일에 저장되는 정보는?',
                options: ['사용자 이름', '암호화된 비밀번호', '홈 디렉토리', '로그인 쉘'],
                correct: 1,
                explanation: '/etc/shadow는 암호화된 비밀번호 해시와 비밀번호 정책 정보를 저장합니다.'
            },
            {
                q: 'SSH 기본 포트 번호는?',
                options: ['21', '22', '23', '3389'],
                correct: 1,
                explanation: 'SSH는 22번, FTP는 21번, Telnet은 23번, RDP는 3389번 포트를 사용합니다.'
            },
            {
                q: 'Linux에서 PermitRootLogin 설정의 안전한 값은?',
                options: ['yes', 'no', 'without-password', 'no 또는 without-password'],
                correct: 3,
                explanation: 'root 직접 로그인을 막거나 비밀번호 로그인을 금지하여 보안을 강화합니다.'
            },
            {
                q: 'CISA KEV(Known Exploited Vulnerabilities) 목록의 의미는?',
                options: ['이론적 취약점', '실제 악용되고 있는 취약점', '패치된 취약점', '낮은 위험도 취약점'],
                correct: 1,
                explanation: 'KEV는 야생에서 실제로 악용되고 있는 취약점 목록으로 우선 패치가 필요합니다.'
            },
            {
                q: 'CWE-288의 분류는?',
                options: ['SQL Injection', 'XSS', '인증 메커니즘 우회', 'Buffer Overflow'],
                correct: 2,
                explanation: 'CWE-288은 Authentication Bypass(인증 우회) 취약점을 분류합니다.'
            },
            {
                q: 'Linux 파일 권한 644의 의미는?',
                options: ['rwxrw-r--', 'rw-r--r--', 'r--r--r--', 'rwxrwxr--'],
                correct: 1,
                explanation: '6(rw-), 4(r--), 4(r--)로 소유자는 읽기/쓰기, 그룹과 기타는 읽기만 가능합니다.'
            },
            {
                q: 'Spring4Shell에서 조작되는 Tomcat 컴포넌트는?',
                options: ['Manager', 'AccessLogValve', 'Connector', 'Engine'],
                correct: 1,
                explanation: 'AccessLogValve의 로그 패턴과 경로를 조작하여 웹셸 파일을 생성합니다.'
            },
            {
                q: 'TeamCity 침해가 특히 위험한 이유는?',
                options: ['많은 사용자', 'CI/CD 공급망 공격 가능', '고속 확산', '데이터베이스 연결'],
                correct: 1,
                explanation: 'CI/CD 서버는 빌드, 배포, 자격증명을 관리하여 공급망 전체를 위협할 수 있습니다.'
            },
            {
                q: '/etc/passwd 파일의 두 번째 필드(x 또는 *)의 의미는?',
                options: ['비밀번호 해시', '비밀번호가 /etc/shadow에 있음', '계정 잠김', '만료됨'],
                correct: 1,
                explanation: 'x는 실제 비밀번호 해시가 /etc/shadow에 저장되어 있음을 나타냅니다.'
            },
            {
                q: 'Linux에서 파일의 특수 권한 중 SetGID의 숫자 표기는?',
                options: ['1000', '2000', '4000', '0755'],
                correct: 1,
                explanation: 'SetUID는 4000, SetGID는 2000, Sticky Bit는 1000입니다.'
            },
            {
                q: 'SQL Injection 방어 방법이 아닌 것은?',
                options: ['Prepared Statement 사용', '입력값 검증', '에러 메시지 노출', 'ORM 사용'],
                correct: 2,
                explanation: '에러 메시지 노출은 공격자에게 정보를 제공하므로 피해야 합니다.'
            },
            {
                q: 'sshd_config에서 패스워드 인증을 비활성화하는 설정은?',
                options: ['PasswordAuthentication yes', 'PasswordAuthentication no', 'PubkeyAuthentication no', 'PermitEmptyPasswords yes'],
                correct: 1,
                explanation: 'PasswordAuthentication no로 설정하고 키 기반 인증만 허용하는 것이 안전합니다.'
            },
            {
                q: 'OWASP Top 10에 포함되는 취약점이 아닌 것은?',
                options: ['Injection', 'Broken Authentication', 'DDoS', 'XSS'],
                correct: 2,
                explanation: 'OWASP Top 10은 웹 애플리케이션의 주요 취약점을 다루며, DDoS는 네트워크 공격입니다.'
            },
            {
                q: 'Linux 계정의 UID 0이 의미하는 것은?',
                options: ['일반 사용자', 'root 사용자', '시스템 계정', '게스트 계정'],
                correct: 1,
                explanation: 'UID 0은 항상 root(관리자) 계정을 의미합니다.'
            },
            {
                q: 'XSS(Cross-Site Scripting) 공격의 주요 목표는?',
                options: ['서버 해킹', '사용자 브라우저에서 악성 스크립트 실행', 'DB 접근', '네트워크 마비'],
                correct: 1,
                explanation: 'XSS는 웹 페이지에 악성 스크립트를 삽입하여 사용자 브라우저에서 실행시킵니다.'
            },
            {
                q: 'Spring4Shell 패치가 적용된 Spring Framework 5.3.x 버전은?',
                options: ['5.3.15', '5.3.17', '5.3.18', '5.3.20'],
                correct: 2,
                explanation: 'Spring Framework 5.3.18 이상에서 CVE-2022-22965가 패치되었습니다.'
            },
            {
                q: 'Linux에서 최근 로그인 기록을 확인하는 명령어는?',
                options: ['history', 'last', 'who', 'logcheck'],
                correct: 1,
                explanation: 'last 명령어는 /var/log/wtmp 파일을 읽어 로그인 기록을 보여줍니다.'
            },
            {
                q: 'CSRF(Cross-Site Request Forgery) 공격 방어 방법은?',
                options: ['HTTPS 사용', 'CSRF 토큰 사용', '방화벽 설정', '안티바이러스'],
                correct: 1,
                explanation: 'CSRF 토큰은 각 요청마다 무작위 값을 생성하여 정당한 요청인지 검증합니다.'
            },
            {
                q: 'Linux에서 cron 작업을 통한 악성코드 지속성 확인 방법은?',
                options: ['ps aux', 'crontab -l', 'netstat', 'ls -la'],
                correct: 1,
                explanation: 'crontab -l로 현재 사용자의 예약된 작업을 확인할 수 있습니다.'
            },
            {
                q: 'Path Traversal 공격에 사용되는 문자열은?',
                options: ['; | &', '../', '<script>', "' OR '1'='1"],
                correct: 1,
                explanation: '../ 또는 ..\\\\를 사용하여 의도하지 않은 디렉토리에 접근합니다.'
            },
            {
                q: '취약점 점검 주기로 가장 적절한 것은?',
                options: ['10년마다', '1년마다', '정기적 + 주요 변경 시', '필요 없음'],
                correct: 2,
                explanation: '정기적인 점검과 함께 시스템 변경, 신규 취약점 발표 시 추가 점검이 필요합니다.'
            },
            {
                q: 'Linux에서 SUID 파일을 찾는 명령어는?',
                options: ['find / -perm -4000', 'ls -l / | grep suid', 'locate suid', 'ps aux'],
                correct: 0,
                explanation: 'find / -perm -4000은 SetUID 비트가 설정된 모든 파일을 찾습니다.'
            },
            {
                q: 'Zero-Day 취약점의 의미는?',
                options: ['패치된 취약점', '발견 후 패치까지 0일', '벤더가 모르는 취약점', '위험도 0'],
                correct: 2,
                explanation: 'Zero-Day는 벤더가 인지하지 못해 패치가 없는 취약점으로 매우 위험합니다.'
            },
            {
                q: 'SQL Injection 탐지를 위해 모니터링해야 할 패턴이 아닌 것은?',
                options: ["' OR '1'='1", 'UNION SELECT', '-- 또는 #', 'SELECT * FROM users'],
                correct: 3,
                explanation: '일반적인 SELECT 문은 정상 쿼리일 수 있으며, 악의적 패턴과 함께 있을 때 의심해야 합니다.'
            },
            {
                q: 'Linux 시스템 로그 파일이 주로 저장되는 디렉토리는?',
                options: ['/tmp', '/var/log', '/home', '/etc'],
                correct: 1,
                explanation: '/var/log 디렉토리에 auth.log, syslog, kern.log 등 시스템 로그가 저장됩니다.'
            },
            {
                q: 'Vulnerability Scanning과 Penetration Testing의 차이는?',
                options: ['같은 것', '스캐닝은 자동, 침투 테스트는 수동 공격 시뮬레이션', '스캐닝이 더 위험', '차이 없음'],
                correct: 1,
                explanation: '취약점 스캔은 알려진 취약점을 자동 탐지하고, 침투 테스트는 실제 공격을 시뮬레이션합니다.'
            },
            // 추가 30문제
            {
                q: 'PCI DSS의 주요 목적은?',
                options: ['소프트웨어 개발', '카드 결제 데이터 보호', '네트워크 속도', '이메일 보안'],
                correct: 1,
                explanation: 'PCI DSS(Payment Card Industry Data Security Standard)는 카드 정보 보호를 위한 보안 표준입니다.'
            },
            {
                q: 'OpenVAS의 주요 기능은?',
                options: ['웹 개발', '취약점 스캐닝', '이메일 전송', '파일 압축'],
                correct: 1,
                explanation: 'OpenVAS는 오픈소스 취약점 스캐너로 네트워크와 시스템의 취약점을 탐지합니다.'
            },
            {
                q: 'Patch Management의 가장 중요한 원칙은?',
                options: ['빠를수록 좋다', '테스트 후 적용', '모든 패치 거부', '자동화만 사용'],
                correct: 1,
                explanation: '패치는 테스트 환경에서 검증 후 프로덕션에 적용해야 시스템 안정성을 보장합니다.'
            },
            {
                q: 'Linux에서 fail2ban의 주요 기능은?',
                options: ['백업', '반복적인 로그인 실패 시 IP 차단', '로그 삭제', '파일 암호화'],
                correct: 1,
                explanation: 'fail2ban은 로그를 모니터링하여 비정상적인 접근 시도를 차단합니다.'
            },
            {
                q: 'TLS/SSL 인증서의 주요 목적은?',
                options: ['속도 향상', '암호화 통신 및 신원 확인', 'DB 백업', '로그 수집'],
                correct: 1,
                explanation: 'TLS/SSL 인증서는 통신 암호화와 서버 신원 확인을 제공합니다.'
            },
            {
                q: 'SELinux의 주요 기능은?',
                options: ['UI 개선', '강제 접근 제어(MAC)', '파일 압축', '네트워크 속도 향상'],
                correct: 1,
                explanation: 'SELinux는 Mandatory Access Control로 추가적인 보안 계층을 제공합니다.'
            },
            {
                q: 'Nessus의 주요 용도는?',
                options: ['웹 디자인', '취약점 스캐닝', '동영상 편집', 'DB 관리'],
                correct: 1,
                explanation: 'Nessus는 상용 취약점 스캐너로 광범위한 취약점 데이터베이스를 제공합니다.'
            },
            {
                q: 'Linux에서 비밀번호 정책을 설정하는 파일은?',
                options: ['/etc/passwd', '/etc/shadow', '/etc/login.defs', '/etc/ssh/sshd_config'],
                correct: 2,
                explanation: '/etc/login.defs에서 비밀번호 만료, 최소 길이 등의 정책을 설정합니다.'
            },
            {
                q: 'SIEM의 주요 기능이 아닌 것은?',
                options: ['로그 수집', '실시간 분석', '이미지 편집', '보안 이벤트 상관분석'],
                correct: 2,
                explanation: 'SIEM(Security Information and Event Management)은 보안 로그 통합 관리 시스템입니다.'
            },
            {
                q: 'Defense in Depth 전략의 의미는?',
                options: ['단일 보안 계층', '다층 보안 방어', '보안 무시', '속도 우선'],
                correct: 1,
                explanation: 'Defense in Depth는 여러 보안 계층을 두어 하나가 뚫려도 다른 계층으로 방어하는 전략입니다.'
            },
            {
                q: 'Linux iptables의 주요 용도는?',
                options: ['파일 편집', '방화벽 규칙 설정', '사용자 관리', '백업'],
                correct: 1,
                explanation: 'iptables는 Linux 커널의 패킷 필터링 기능을 설정하는 방화벽 도구입니다.'
            },
            {
                q: 'Secure by Default 원칙의 의미는?',
                options: ['보안 기능 모두 비활성화', '기본 설정이 가장 안전하게', '성능 우선', '편의성 우선'],
                correct: 1,
                explanation: '시스템과 애플리케이션은 기본 상태에서 가장 안전하게 설정되어야 합니다.'
            },
            {
                q: 'Intrusion Detection System(IDS)와 Intrusion Prevention System(IPS)의 차이는?',
                options: ['동일함', 'IDS는 탐지만, IPS는 차단도 수행', 'IPS가 더 느림', '차이 없음'],
                correct: 1,
                explanation: 'IDS는 침입을 탐지하여 알림을 보내고, IPS는 탐지 후 자동으로 차단합니다.'
            },
            {
                q: 'Linux에서 sudo 로그를 확인할 수 있는 파일은?',
                options: ['/var/log/auth.log', '/var/log/messages', '/etc/sudoers', '/var/log/auth.log 또는 /var/log/secure'],
                correct: 3,
                explanation: 'Debian 계열은 /var/log/auth.log, RedHat 계열은 /var/log/secure에 sudo 로그가 기록됩니다.'
            },
            {
                q: 'Principle of Least Privilege의 의미는?',
                options: ['모든 권한 부여', '최소한의 필요 권한만 부여', '권한 무시', '관리자 권한 남용'],
                correct: 1,
                explanation: '사용자와 프로세스에게 작업 수행에 필요한 최소한의 권한만 부여해야 합니다.'
            },
            {
                q: 'WAF(Web Application Firewall)의 주요 목적은?',
                options: ['네트워크 속도', '웹 애플리케이션 공격 차단', 'DB 백업', '이메일 필터링'],
                correct: 1,
                explanation: 'WAF는 SQL Injection, XSS 등 웹 애플리케이션 레벨의 공격을 탐지하고 차단합니다.'
            },
            {
                q: 'Linux에서 특정 포트를 사용하는 프로세스를 확인하는 명령어는?',
                options: ['ps', 'netstat -tulpn', 'top', 'ls'],
                correct: 1,
                explanation: 'netstat -tulpn 또는 lsof -i:포트번호로 포트를 사용하는 프로세스를 확인합니다.'
            },
            {
                q: 'Hardening의 의미는?',
                options: ['시스템 느리게', '불필요한 서비스 제거 및 보안 강화', '모든 기능 활성화', '백업'],
                correct: 1,
                explanation: 'Hardening은 공격 표면을 줄이고 보안 설정을 강화하는 과정입니다.'
            },
            {
                q: 'Common Weakness Enumeration(CWE)의 목적은?',
                options: ['취약점 수정', '소프트웨어 약점 분류 체계', '성능 측정', '사용자 관리'],
                correct: 1,
                explanation: 'CWE는 소프트웨어 취약점을 체계적으로 분류하고 정의하는 표준입니다.'
            },
            {
                q: 'Linux AppArmor의 주요 기능은?',
                options: ['UI 테마', '애플리케이션 접근 제어', '파일 압축', '네트워크 모니터링'],
                correct: 1,
                explanation: 'AppArmor는 프로그램별로 파일 시스템 접근을 제한하는 MAC 시스템입니다.'
            },
            {
                q: 'Security Baseline의 의미는?',
                options: ['최대 보안', '조직의 최소 보안 요구사항', '보안 무시', '성능 기준'],
                correct: 1,
                explanation: 'Security Baseline은 모든 시스템이 충족해야 하는 최소 보안 설정 기준입니다.'
            },
            {
                q: 'Linux에서 파일 무결성을 검증하는 도구는?',
                options: ['AIDE', 'Tripwire', 'OSSEC', '모두 가능'],
                correct: 3,
                explanation: 'AIDE, Tripwire, OSSEC 모두 파일 변경 사항을 탐지하는 무결성 검증 도구입니다.'
            },
            {
                q: 'OWASP ASVS의 목적은?',
                options: ['웹 디자인', '애플리케이션 보안 검증 표준', '네트워크 설계', 'DB 설계'],
                correct: 1,
                explanation: 'ASVS(Application Security Verification Standard)는 웹 앱 보안 요구사항 표준입니다.'
            },
            {
                q: 'Linux에서 로그 로테이션을 담당하는 도구는?',
                options: ['cron', 'logrotate', 'syslog', 'journalctl'],
                correct: 1,
                explanation: 'logrotate는 로그 파일을 주기적으로 압축, 백업, 삭제하여 디스크 공간을 관리합니다.'
            },
            {
                q: 'Blue Team과 Red Team의 차이는?',
                options: ['동일함', 'Blue는 방어, Red는 공격', 'Red가 방어', '색깔만 다름'],
                correct: 1,
                explanation: 'Red Team은 공격자 역할로 침투를 시도하고, Blue Team은 방어자 역할로 탐지와 대응을 수행합니다.'
            },
            {
                q: 'Whitelisting과 Blacklisting 중 더 안전한 방법은?',
                options: ['Blacklisting', 'Whitelisting', '동일함', '둘 다 위험'],
                correct: 1,
                explanation: 'Whitelisting은 허용된 것만 실행하므로 알려지지 않은 위협도 차단할 수 있습니다.'
            },
            {
                q: 'Linux에서 TCP Wrapper를 설정하는 파일은?',
                options: ['/etc/hosts.allow와 /etc/hosts.deny', '/etc/passwd', '/etc/ssh/sshd_config', '/etc/sudoers'],
                correct: 0,
                explanation: 'TCP Wrapper는 hosts.allow와 hosts.deny로 서비스 접근을 제어합니다.'
            },
            {
                q: 'Incident Response Plan의 주요 단계가 아닌 것은?',
                options: ['준비', '탐지 및 분석', '억제 및 복구', '마케팅'],
                correct: 3,
                explanation: 'Incident Response는 준비, 탐지, 분석, 억제, 제거, 복구, 사후 검토로 구성됩니다.'
            },
            {
                q: 'Attack Surface의 의미는?',
                options: ['공격 횟수', '공격자가 접근 가능한 진입점', '방어 강도', '네트워크 속도'],
                correct: 1,
                explanation: 'Attack Surface는 시스템이 외부에 노출한 모든 취약 지점의 합입니다.'
            },
            {
                q: 'Linux auditd의 주요 기능은?',
                options: ['성능 모니터링', '시스템 감사 및 로깅', '백업', '네트워크 설정'],
                correct: 1,
                explanation: 'auditd는 시스템 콜, 파일 접근 등을 감사하여 보안 이벤트를 기록합니다.'
            }
        ]
    }
};

// 모듈 내보내기
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { examQuestions };
}
