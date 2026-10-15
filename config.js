/* =============================================================================
   뷰티오라 키노트 영상 · 설정 파일
   -----------------------------------------------------------------------------
   이 파일만 고치고 저장한 뒤, 브라우저에서 새로고침(F5)하면 영상에 반영됩니다.

   작성 규칙
   - 문구는 따옴표 ' ' 안의 글자만 바꿔주세요. 따옴표와 쉼표는 지우지 마세요.
   - [대괄호]로 감싼 부분은 옐로우 그라데이션 강조색이 됩니다.  예) '이제 [채널]이 찾아갑니다.'
     (강조 뒤에 조사를 바로 붙여도 됩니다: [채널]이, [팔 곳]을)
   - \n 은 줄바꿈입니다.  예) '국내에서\n[해외까지.]'
   - 아이콘 이름은 https://fonts.google.com/icons 에서 검색한 이름을 그대로 넣으세요.
     (예: storefront, local_pharmacy) — 새 아이콘도 자동으로 불러옵니다.
   ============================================================================= */

window.CONFIG = {

  /* ---------------------------------------------------------------------------
     색상
     --------------------------------------------------------------------------- */
  colors: {
    yellowLight: '#FBF8E1',   // 옐로우 그라데이션 밝은 쪽
    yellow:      '#F1EB9C',   // 메인 컬러 (PANTONE 600 C)
    yellowDeep:  '#E2D46C',   // 옐로우 그라데이션 진한 쪽
    black:       '#000000',   // 어두운 배경
    ink:         '#1D1D1F',   // 밝은 배경 위의 글자색
    gray:        '#86868B',   // 보조 문구
    grayLight:   '#D1D1D6',   // 어두운 배경 위 보조 문구 (오프닝·엔딩 하단)
    light:       '#F5F5F7',   // 밝은 배경
    white:       '#FFFFFF',
  },

  /* ---------------------------------------------------------------------------
     장면 길이 (초) — 모두 더한 값이 전체 영상 길이입니다. (기본 합계 30초)
     장면 안의 움직임은 길이에 맞춰 자동으로 따라 움직입니다.
     --------------------------------------------------------------------------- */
  durations: {
    opening:  3.5,   // 1 · 로고 오프닝
    message:  4,     // 2 · 광고비 / 채널 메시지
    purchase: 4,     // 3 · 직접 매입 카드
    channels: 4,     // 4 · 채널 공전
    numbers:  3,     // 5 · 숫자
    global:   3.5,   // 6 · 지구본
    summary:  4,     // 7 · 요약 그리드
    ending:   4,     // 8 · 엔딩
  },

  /* 1 · 오프닝 ---------------------------------------------------------------- */
  opening: {
    tagline: 'Beauty Distribution Network',
    sub:     '화장품 · 건강기능식품 · 웰니스',
  },

  /* 2 · 메시지 ---------------------------------------------------------------- */
  message: {
    line1: '좋은 제품은 많은데,\n팔 곳이 없었죠.',
    line2: '이제 [채널]이 찾아갑니다.',
    sub:   'Great products deserve more shelves.',
  },

  /* 3 · 직접 매입 ------------------------------------------------------------- */
  purchase: {
    eyebrow: 'Direct Purchase',
    title:   '팔릴지 걱정하기 전에,\n뷰티오라가 [먼저 삽니다.]',
    cards: [
      { icon: 'payments',    title: '매입 즉시 매출',     en: 'Instant revenue' },
      { icon: 'inventory_2', title: '재고 부담은 함께',   en: 'Shared inventory risk' },
      { icon: 'hub',         title: '판로는 여러 곳으로', en: 'Multi-channel sales' },
    ],
  },

  /* 4 · 채널 ------------------------------------------------------------------ */
  channels: {
    eyebrow: 'Channel Network',
    title:   '약국부터 라이브커머스까지,\n[팔 곳]을 넓힙니다.',
    list: [
      { icon: 'local_pharmacy', name: '약국' },
      { icon: 'storefront',     name: '백화점 · 편집숍' },
      { icon: 'flight',         name: '면세 · 관광' },
      { icon: 'celebration',    name: '팝업 · 체험' },
      { icon: 'live_tv',        name: '라이브커머스' },
      { icon: 'campaign',       name: '인플루언서' },
      { icon: 'groups',         name: '공동구매' },
      { icon: 'public',         name: '해외 유통' },
    ],
  },

  /* 5 · 숫자 ------------------------------------------------------------------ */
  numbers: {
    eyebrow: 'Our Network',
    stats: [
      { value: 200, suffix: '+', ko: '브랜드', en: 'Brands' },
      { value: 800, suffix: '+', ko: '상품',   en: 'Products' },
    ],
  },

  /* 6 · 글로벌 ---------------------------------------------------------------- */
  global: {
    eyebrow: 'Global',
    title:   '한국을 넘어,\n[해외 판로까지.]',
    sub:     '일본 · 중국 · 홍콩 · 대만 · 미국 · 유럽',
    origin:  { name: 'Korea', lat: 37.5, lon: 127 },
    // label 위치: 'right' | 'left' | 'below-right' | 'below-left'
    destinations: [
      { name: 'Japan',     lat: 35.7, lon: 139.7,  label: 'right' },
      { name: 'China',     lat: 31.2, lon: 121.5,  label: 'left' },
      { name: 'Hong Kong', lat: 22.3, lon: 114.2,  label: 'below-left' },
      { name: 'Taiwan',    lat: 25.0, lon: 121.5,  label: 'below-right' },
      { name: 'USA',       lat: 40.7, lon: -74.0,  label: 'right' },
      { name: 'Europe',    lat: 48.8, lon: 2.3,    label: 'right' },
    ],
  },

  /* 7 · 요약 그리드 ------------------------------------------------------------
     style: 'dark'(블랙) | 'yellow'(옐로우 그라데이션) | 'white'(화이트)
     wide:  true 이면 두 칸 너비
     icon 대신 big 을 넣으면 큰 숫자/글자가 들어갑니다.
     칸은 위 4칸 + 아래 4칸 기준입니다. (wide 는 2칸으로 계산)            */
  summary: {
    eyebrow: 'All in One',
    title:   '브랜드는 [제품에만] 집중하세요.',
    tiles: [
      { style: 'dark',   wide: true, icon: 'handshake', title: '팔릴 걱정 없이, 직접 매입', en: 'Direct purchase' },
      { style: 'yellow', big: '200+', title: '브랜드', en: 'Brands' },
      { style: 'white',  big: '800+', title: '상품',   en: 'Products' },
      { style: 'white',  icon: 'storefront', title: '오프라인 판매', en: 'Offline sales' },
      { style: 'white',  icon: 'campaign',   title: '온라인 확산',   en: 'Online reach' },
      { style: 'white',  wide: true, icon: 'public', title: '국내에서 해외까지', en: 'Korea · Japan · China · Hong Kong · Taiwan · USA · Europe' },
    ],
  },

  /* 8 · 엔딩 ------------------------------------------------------------------ */
  ending: {
    tagline: '좋은 제품이 더 많은 곳에 닿도록.',
    sub:     'Beauty Distribution Network',
  },
};
