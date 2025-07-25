const imageFiles = [
  ['legend_30.webp', '쿠크세이튼'],
  ['legend_29.webp', '카멘'],
  ['legend_28.webp', '카마인'],
  ['legend_27.webp', '카단'],
  ['legend_26.webp', '진저웨일'],
  ['legend_25.webp', '일리아칸'],
  ['legend_24.webp', '웨이'],
  ['legend_23.webp', '에키드나'],
  ['legend_22.webp', '에스더 시엔'],
  ['legend_21.webp', '에스더 루테란'],
  ['legend_20.webp', '에스더 갈라투르'],
  ['legend_19.webp', '에버그레이스'],
  ['legend_18.webp', '아제나&이난나'],
  ['legend_17.webp', '아브렐슈드'],
  ['legend_16.webp', '아만'],
  ['legend_15.webp', '심연의 방랑자'],
  ['legend_14.webp', '실리안'],
  ['legend_13.webp', '샨디'],
  ['legend_12.webp', '비아키스'],
  ['legend_11.webp', '부활하는 카제로스'],
  ['legend_10.webp', '베아트리스'],
  ['legend_9.webp', '발탄'],
  ['legend_8.webp', '바훈투르'],
  ['legend_7.webp', '바실리오'],
  ['legend_6.webp', '바르칸'],
  ['legend_5.webp', '데런 아만'],
  ['legend_4.webp', '니나브'],
  ['legend_3.webp', '국왕 실리안'],
  ['legend_2.webp', '구스토'],
  ['legend_1.webp', '가디언 루'],

  ['hero_60.webp', '희망의 아크 엘피스'],
  ['hero_59.webp', '헌신의 아크 카르타'],
  ['hero_58.webp', '피요르긴'],
  ['hero_57.webp', '페데리코'],
  ['hero_56.webp', '파후'],
  ['hero_55.webp', '파르쿠나스'],
  ['hero_54.webp', '태초의 악망'],
  ['hero_53.webp', '크리스틴'],
  ['hero_52.webp', '케이사르'],
  ['hero_51.webp', '칼엘리고스'],
  ['hero_50.webp', '칼바서스'],
  ['hero_49.webp', '칼도르'],
  ['hero_48.webp', '카이슈테르'],
  ['hero_47.webp', '칠흑의 숭배자 킬리네사'],
  ['hero_46.webp', '창조의 아크 오르투스'],
  ['hero_45.webp', '진화의 군주 카인'],
  ['hero_44.webp', '진 매드닉'],
  ['hero_43.webp', '지혜의 아크 라디체'],
  ['hero_42.webp', '유즈'],
  ['hero_41.webp', '오스피어'],
  ['hero_40.webp', '예지의 아크 아가툰'],
  ['hero_39.webp', '영원의 아크 카양겔'],
  ['hero_38.webp', '에페르니아'],
  ['hero_37.webp', '에아달린'],
  ['hero_36.webp', '에르제베트'],
  ['hero_35.webp', '어린 아만'],
  ['hero_34.webp', '알레그로'],
  ['hero_33.webp', '아카테스'],
  ['hero_32.webp', '아슈타로테'],
  ['hero_31.webp', '아르고스'],
  ['hero_30.webp', '아델'],
  ['hero_29.webp', '신뢰의 아크 아스타'],
  ['hero_28.webp', '세헤라데'],
  ['hero_27.webp', '샤나'],
  ['hero_26.webp', '사이카'],
  ['hero_25.webp', '사샤'],
  ['hero_24.webp', '비통의 지배자 마우르고'],
  ['hero_23.webp', '벨크루제'],
  ['hero_22.webp', '벨가누스'],
  ['hero_21.webp', '베히모스'],
  ['hero_20.webp', '반다'],
  ['hero_19.webp', '바스티안'],
  ['hero_18.webp', '미스틱'],
  ['hero_17.webp', '뮨 히다카'],
  ['hero_16.webp', '모카모카'],
  ['hero_15.webp', '모르페'],
  ['hero_14.webp', '마법사 로나운'],
  ['hero_13.webp', '마리 파우렌츠'],
  ['hero_12.webp', '렌'],
  ['hero_11.webp', '레기오로스'],
  ['hero_10.webp', '라하르트'],
  ['hero_9.webp', '라자람'],
  ['hero_8.webp', '라우리엘'],
  ['hero_7.webp', '다르키엘'],
  ['hero_6.webp', '다르시'],
  ['hero_5.webp', '니아'],
  ['hero_4.webp', '나히니르'],
  ['hero_3.webp', '금기를 걷는 자 발리나크'],
  ['hero_2.webp', '검은이빨'],
  ['hero_1.webp', '검은산의 포식자'],

  ['rare_42.webp', '혼재의 추오'],
  ['rare_41.webp', '패자의 검'],
  ['rare_40.webp', '파괴자 루카스'],
  ['rare_39.webp', '통솔자 루가루'],
  ['rare_38.webp', '토토마'],
  ['rare_37.webp', '타무트'],
  ['rare_36.webp', '클라우디아'],
  ['rare_35.webp', '칼스 모론토'],
  ['rare_34.webp', '칼리나리 네리아'],
  ['rare_33.webp', '칸다리아 네리아'],
  ['rare_32.webp', '천둥'],
  ['rare_31.webp', '진멸의 창'],
  ['rare_30.webp', '제레온'],
  ['rare_29.webp', '절망의 레키엘'],
  ['rare_28.webp', '자하라'],
  ['rare_27.webp', '자크라'],
  ['rare_26.webp', '위대한 성 네리아'],
  ['rare_25.webp', '악몽의 헬카서스'],
  ['rare_24.webp', '악몽의 게헤나'],
  ['rare_23.webp', '아자키엘'],
  ['rare_22.webp', '아이작'],
  ['rare_21.webp', '아벤'],
  ['rare_20.webp', '아드린느'],
  ['rare_19.webp', '스텔라'],
  ['rare_18.webp', '슈테른 네리아'],
  ['rare_17.webp', '소금거인'],
  ['rare_16.webp', '세트'],
  ['rare_15.webp', '세토'],
  ['rare_14.webp', '빌헬름'],
  ['rare_13.webp', '비올레'],
  ['rare_12.webp', '바루투'],
  ['rare_11.webp', '미한'],
  ['rare_10.webp', '만포'],
  ['rare_9.webp', '마리우'],
  ['rare_8.webp', '마레가'],
  ['rare_7.webp', '리루'],
  ['rare_6.webp', '루테란성 네리아'],
  ['rare_5.webp', '레온하트 네리아'],
  ['rare_4.webp', '디오게네스'],
  ['rare_3.webp', '도철'],
  ['rare_2.webp', '나기'],
  ['rare_1.webp', '갈기파도 항구 네리아'],

  ['high_16.webp', '헨리'],
  ['high_15.webp', '프리우나'],
  ['high_14.webp', '프랭크'],
  ['high_13.webp', '표류소녀 엠마'],
  ['high_12.webp', '파파'],
  ['high_11.webp', '티엔'],
  ['high_10.webp', '토토이끼'],
  ['high_9.webp', '집행관 솔라스'],
  ['high_8.webp', '여울'],
  ['high_7.webp', '알키오네'],
  ['high_6.webp', '아그리스'],
  ['high_5.webp', '루티아'],
  ['high_4.webp', '레나'],
  ['high_3.webp', '다쿠쿠'],
  ['high_2.webp', '금강'],
  ['high_1.webp', '객주도사'],

  ['general_4.webp', '코니'],
  ['general_3.webp', '여우 사피아노'],
  ['general_2.webp', '베르베로'],
  ['general_1.webp', '다람쥐 욤']
];
