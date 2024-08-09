// public/js/main.js

const fullContent = [
    {
      title: "1. 네이버 플레이스 상위노출의 중요성",
      items: [
        "1.1 모바일 시대의 지도 기반 검색",
        "1.2 지역 기반 비즈니스와 플레이스의 관계",
        "1.3 브랜드 인지도와 신뢰도 향상",
        "1.4 비용 효율적인 마케팅 방법"
      ]
    },
    {
      title: "2. 네이버 플레이스 상위노출 전략",
      items: [
        "2.1 SEO 기본 원칙 적용",
        "2.2 업체 정보 최적화",
        "2.3 고품질 미디어 콘텐츠 활용",
        "2.4 부가 기능 활용 전략",
        "2.5 지속적인 업데이트와 관리"
      ]
    },
    {
      title: "3. 효과적인 리뷰 관리",
      items: [
        "3.1 긍정적 리뷰 유도 전략",
        "3.2 부정적 리뷰 대응 방법",
        "3.3 리뷰 이벤트 진행 시 주의사항",
        "3.4 일관된 리뷰 관리의 중요성"
      ]
    },
    {
        title: "4. 네이버 플레이스 광고 활용",
        items: [
          "4.1 유료 광고와 자연 검색의 시너지",
          "4.2 효과적인 광고 집행 전략",
          "4.3 광고 성과 분석 및 최적화"
        ]
      },
      {
        title: "5. 데이터 기반 성과 측정 및 분석",
        items: [
          "5.1 플레이스 인사이트 활용법",
          "5.2 주요 KPI 설정 및 모니터링",
          "5.3 경쟁업체 분석 및 벤치마킹"
        ]
      },
      {
        title: "6. 최신 트렌드 반영 전략",
        items: [
          "6.1 코로나19 이후의 소비자 행동 변화 대응",
          "6.2 비대면 서비스 정보 강화",
          "6.3 소셜 미디어 연계 전략"
        ]
      },
      {
        title: "7. 전문 마케팅 업체 활용 가이드",
        items: [
          "7.1 올바른 업체 선정 기준",
          "7.2 계약 시 주의사항",
          "7.3 효과적인 협업을 위한 커뮤니케이션 전략"
        ]
      },
      {
        title: "8. 플레이스 상위노출 성공 사례 연구",
        items: [
          "8.1 음식점 업종 사례",
          "8.2 뷰티/헬스 업종 사례",
          "8.3 소매업 사례"
        ]
      },
      {
        title: "9. 자주 묻는 질문(FAQ)",
        items: [
          "9.1 플레이스 상위노출에 걸리는 시간은 얼마인가요?",
          "9.2 부정적인 리뷰를 삭제할 수 있나요?",
          "9.3 경쟁업체보다 상위노출되기 위한 가장 효과적인 방법은?",
          "9.4 플레이스 광고와 자연 검색 상위노출 중 어느 것이 더 중요한가요?",
          "9.5 플레이스 정보 수정 후 반영되는 시간은 얼마인가요?",
          "9.6 여러 지점을 운영 중일 때 플레이스 관리는 어떻게 해야 하나요?",
          "9.7 플레이스 마케팅의 ROI는 어떻게 측정하나요?"
        ]
      },
      {
        title: "10. 결론 및 향후 전망",
        items: [
          "10.1 네이버 플레이스 상위노출의 지속적인 중요성",
          "10.2 AI와 빅데이터를 활용한 플레이스 최적화의 미래",
          "10.3 옴니채널 마케팅에서의 플레이스의 역할 확대",
          "10.4 지속 가능한 플레이스 마케팅 전략 수립의 필요성"
        ]
      }
    ]
  
  
    function loadInitialContent() {
        const initialContent = fullContent.slice(0, 2);
        renderContent(initialContent);
    }
    
    function loadAdditionalContent() {
        renderContent(fullContent);
    }
    
    function renderContent(content) {
        const contentHtml = content.map(section => `
          <h3>${section.title}</h3>
          <ul>
            ${section.items.map(item => `<li>${item}</li>`).join('')}
          </ul>
        `).join('');
        
        document.getElementById('content').innerHTML = contentHtml;
    }
    
    document.addEventListener('DOMContentLoaded', function() {
        const content = document.getElementById('content');
        const showMoreBtn = document.getElementById('show-more');
    
        // 초기 콘텐츠 로드
        loadInitialContent();
    
        showMoreBtn.addEventListener('click', function() {
            if (content.classList.contains('expanded')) {
                content.classList.remove('expanded');
                showMoreBtn.textContent = '더보기';
                loadInitialContent();
            } else {
                content.classList.add('expanded');
                showMoreBtn.textContent = '접기';
                loadAdditionalContent();
            }
        });
    });