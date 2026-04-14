const THEMES = [
  { id: 'imperial', name: '帝都传奇', emoji: '👑', cover: 'Forbidden City', gradient: 'linear-gradient(135deg, #8B1A1A 0%, #C9963A 100%)' },
  { id: 'ancient', name: '古代奇迹', emoji: '🏛', cover: 'Great Pyramid of Giza', gradient: 'linear-gradient(135deg, #4A3A1A 0%, #C9963A 100%)' },
  { id: 'silk-road', name: '丝绸之路', emoji: '🐪', cover: 'Grand Bazaar, Istanbul', gradient: 'linear-gradient(135deg, #6B4C11 0%, #8B6914 100%)' },
  { id: 'maritime', name: '海洋文明', emoji: '⚓', cover: 'Colosseum', gradient: 'linear-gradient(135deg, #0A2A4A 0%, #1A6B9A 100%)' },
  { id: 'religion', name: '信仰之城', emoji: '🕌', cover: 'Hagia Sophia', gradient: 'linear-gradient(135deg, #2A1A3A 0%, #6A4A8B 100%)' },
  { id: 'renaissance', name: '文明复兴', emoji: '🎨', cover: 'Florence Cathedral', gradient: 'linear-gradient(135deg, #4A2C0A 0%, #D4841A 100%)' },
];

const CONTINENTS = [
  { id: 'asia', name: '亚洲' },
  { id: 'europe', name: '欧洲' },
  { id: 'africa', name: '非洲' },
  { id: 'americas', name: '美洲' },
];

const CONTINENT_MAP = { asia: '亚洲', europe: '欧洲', africa: '非洲', americas: '美洲' };

/* ═══════════════════════════════════════
   CITY DATA — 15 cities (5 P0 + 10 P1)
   ═══════════════════════════════════════ */
const CITIES = [
  {
    id: 'beijing', name: '北京', nameEn: 'Beijing',
    country: '中国', countryFlag: '🇨🇳', continent: 'asia',
    themes: ['imperial', 'ancient'],
    coords: "39°54'N 116°23'E",
    wiki: 'Beijing',
    heroGradient: 'linear-gradient(160deg, #1a3a20 0%, #0c1810 60%, #3d1a00 100%)',
    hook: '从商周燕国到明清帝都，3000年从未停歇',
    heroQuote: '1420年，紫禁城落成时，欧洲还在黑暗的中世纪里苦熬最后30年',
    tagline: '🏛 帝国首都 · 3000年',
    overview: '北京是中华文明的核心，三千年城市史与八百年帝都传统在此交汇。从商周燕国到明清紫禁城，这座城市见证了无数王朝的兴衰更迭，至今仍是中国的政治与文化中心。',
    timeline: [
      { year: '约公元前1044年', event: '燕国建城', desc: '西周分封，召公奭受封燕地，于今北京西南建城，史称"蓟"，是北京城市史的起点。' },
      { year: '公元938年', event: '辽代南京', desc: '契丹辽朝将燕京升格为南京，作为五京之一，城市规模大幅扩张。' },
      { year: '1153年', event: '金朝迁都中都', desc: '金海陵王完颜亮迁都至此，北京首次成为全国性政治中心。' },
      { year: '1271年', event: '元大都建成', desc: '忽必烈命刘秉忠规划建造元大都，棋盘式格局奠定了现代北京城市骨架。' },
      { year: '1406年', event: '永乐迁都·紫禁城破土', desc: '明成祖朱棣动员逾百万工匠，历时十四年建成紫禁城，共有宫殿九千余间。' },
      { year: '1644年', event: '清军入关定鼎', desc: '清朝延续并扩建明代宫城格局，增建颐和园、圆明园等皇家园林。' },
      { year: '1860年', event: '英法联军火烧圆明园', desc: '第二次鸦片战争中圆明园被焚毁，成为中国近代史上最深重的文化创伤之一。' },
      { year: '1949年', event: '中华人民共和国成立', desc: '毛泽东在天安门城楼宣告建国，北京成为新中国首都。' },
    ],
    landmarks: [
      { name: '故宫（紫禁城）', era: '明·1420年', yearNum: 1420, wiki: 'Forbidden City', gradient: 'linear-gradient(135deg, #8B1A1A 0%, #C9963A 50%, #2D1B00 100%)', desc: '紫禁城是明清两朝的皇家宫殿，南北长960米，东西宽753米，共有房屋九千余间，是世界上现存规模最大、保存最完整的木质结构古建筑群。', hours: '淡季 08:30—17:00；旺季 08:30—17:30，周一闭馆', ticket: '旺季 ¥60，淡季 ¥40', note: '需提前在官网实名制预约购票，每日限流8万人次。', tags: ['世界文化遗产', '明清建筑', '皇家宫殿'],
        worldEvents: [
          { flag: '🇹🇷', city: '伊斯坦布尔', event: '奥斯曼帝国正积蓄力量，33年后将攻陷君士坦丁堡' },
          { flag: '🇮🇹', city: '佛罗伦萨', event: '文艺复兴萌芽，布鲁内莱斯基正在建造圣母百花大教堂穹顶' },
          { flag: '🇫🇷', city: '法国', event: '圣女贞德即将改变百年战争的走向' }
        ]
      },
      { name: '长城（八达岭段）', era: '秦·公元前214年', yearNum: -214, wiki: 'Great Wall of China', gradient: 'linear-gradient(135deg, #3D5A3E 0%, #8aad96 50%, #1a2d22 100%)', desc: '万里长城始建于春秋战国，总长度超过21,000公里，是人类历史上最伟大的建筑工程之一。', hours: '旺季 07:30—18:00；淡季 08:00—17:00', ticket: '旺季 ¥65，淡季 ¥40', note: '慕田峪段人较少且风景更好。', tags: ['世界文化遗产', '秦汉工程', '明代修缮'],
        worldEvents: [
          { flag: '🇮🇹', city: '罗马', event: '刚刚击败汉尼拔，罗马共和国正在崛起为地中海霸主' },
          { flag: '🇬🇷', city: '亚历山大里亚', event: '托勒密王朝建设亚历山大图书馆，汇聚人类知识的巅峰' }
        ]
      },
      { name: '天坛', era: '明·1420年', yearNum: 1420, wiki: 'Temple of Heaven', gradient: 'linear-gradient(135deg, #1A4A7A 0%, #4A90C4 50%, #0d2940 100%)', desc: '天坛是明清两代皇帝祭天祈谷的场所，祈年殿三层蓝色琉璃瓦攒尖顶，纯木榫卯结构，被誉为中国古代建筑的杰作。', hours: '公园 06:00—22:00；景区 08:00—17:30', ticket: '联票旺季 ¥35，淡季 ¥30', note: '清晨可欣赏居民打太极、唱京剧。', tags: ['世界文化遗产', '皇家祭坛', '声学奇观'] },
      { name: '颐和园', era: '清·1750年', yearNum: 1750, wiki: 'Summer Palace', gradient: 'linear-gradient(135deg, #2D6A4F 0%, #74C69D 50%, #1B4332 100%)', desc: '颐和园占地约290万平方米，万寿山与昆明湖相映，长廊、佛香阁、十七孔桥构成中国皇家园林最后的绝唱。', hours: '旺季 06:30—18:00；淡季 07:00—17:00', ticket: '联票旺季 ¥50，淡季 ¥30', note: '冬季昆明湖结冰时可在湖面滑冰。', tags: ['世界文化遗产', '皇家园林', '山水园林'],
        worldEvents: [
          { flag: '🇫🇷', city: '巴黎', event: '启蒙运动如火如荼，伏尔泰和卢梭正在改变欧洲思想' },
          { flag: '🇺🇸', city: '北美', event: '距美国独立宣言还有26年，殖民地已暗流涌动' }
        ]
      },
    ]
  },
  {
    id: 'rome', name: '罗马', nameEn: 'Rome',
    country: '意大利', countryFlag: '🇮🇹', continent: 'europe',
    themes: ['imperial', 'ancient', 'maritime'],
    coords: "41°53'N 12°29'E",
    wiki: 'Rome',
    heroGradient: 'linear-gradient(160deg, #3a1a08 0%, #1a0d05 60%, #0d1a0d 100%)',
    hook: '从罗慕路斯到教皇国，永恒之城从不落幕',
    heroQuote: '罗马人用混凝土和拱券征服了建筑学，就像他们用军团征服了世界',
    tagline: '⚓ 永恒之城 · 2800年',
    overview: '罗马横跨三千年，从传说中罗慕路斯建城到罗马帝国、教皇国直至现代意大利首都。这座城市曾是已知世界的政治、宗教与文化中心，其遗迹至今仍与现代都市生活并存共生。',
    timeline: [
      { year: '公元前753年', event: '传说建城', desc: '孪生兄弟罗慕路斯与雷穆斯在台伯河畔建立罗马城。' },
      { year: '公元前509年', event: '共和国建立', desc: '罗马人驱逐最后一位国王，建立共和政体。' },
      { year: '公元前44年', event: '凯撒遇刺', desc: '凯撒在元老院被刺杀，此后屋大维建立帝国。' },
      { year: '公元80年', event: '斗兽场落成', desc: '科洛塞姆竣工，可容纳5万至8万观众。' },
      { year: '公元313年', event: '基督教合法化', desc: '君士坦丁颁布米兰敕令，罗马逐渐成为基督教世界的精神中心。' },
      { year: '公元476年', event: '西罗马帝国覆灭', desc: '末代皇帝被废黜，欧洲进入中世纪。' },
      { year: '1506年', event: '圣彼得大教堂重建', desc: '米开朗基罗、拉斐尔等大师参与，历时120余年建成。' },
      { year: '1871年', event: '罗马成为意大利首都', desc: '意大利军队进占罗马，结束教皇国对罗马的统治。' },
    ],
    landmarks: [
      { name: '科洛塞姆（斗兽场）', era: '公元72—80年', yearNum: 80, wiki: 'Colosseum', gradient: 'linear-gradient(135deg, #5C3317 0%, #C9963A 50%, #2A1500 100%)', desc: '科洛塞姆是罗马帝国修建的椭圆形竞技场，长轴188米、高约50米，其拱券结构深刻影响了西方建筑两千年。', hours: '09:00—19:00（夏季延至20:00）', ticket: '€18（含古罗马广场联票）', note: '强烈建议网上预约跳过排队。', tags: ['世界文化遗产', '古罗马', '建筑奇迹'],
        worldEvents: [
          { flag: '🇨🇳', city: '中国', event: '东汉时期，班超经营西域，打通丝绸之路东段' },
          { flag: '🇮🇱', city: '耶路撒冷', event: '第二圣殿刚刚被罗马军队摧毁（公元70年），犹太人开始大流散' }
        ]
      },
      { name: '万神殿（Pantheon）', era: '公元125年', yearNum: 125, wiki: 'Pantheon, Rome', gradient: 'linear-gradient(135deg, #4A3728 0%, #D4A96A 50%, #1E150D 100%)', desc: '万神殿圆顶直径43.3米，此后1300年无人超越。穹顶以火山灰混凝土浇筑，无一支柱。', hours: '09:00—19:00', ticket: '€5', note: '雨天从穹顶圆孔落入的雨水通过地板排水孔流走。', tags: ['古罗马', '最佳保存古迹', '混凝土穹顶'],
        worldEvents: [
          { flag: '🇨🇳', city: '中国', event: '东汉蔡伦改进造纸术，人类信息传播迎来革命' },
          { flag: '🇮🇳', city: '印度', event: '贵霜帝国鼎盛，犍陀罗艺术将佛像传向东方' }
        ]
      },
      { name: '梵蒂冈圣彼得大教堂', era: '1506—1626年', yearNum: 1626, wiki: "St. Peter's Basilica", gradient: 'linear-gradient(135deg, #1A1A4A 0%, #6A7FBF 50%, #0D0D2A 100%)', desc: '圣彼得大教堂是天主教世界最神圣的教堂，米开朗基罗设计的穹顶高达136米。', hours: '教堂 07:00—19:00；穹顶 08:00—18:00', ticket: '教堂免费；穹顶 €8', note: '进入需着装保守。登穹顶约330级阶梯。', tags: ['世界文化遗产', '文艺复兴', '巴洛克'] },
      { name: '古罗马广场', era: '公元前7世纪起', yearNum: -600, wiki: 'Roman Forum', gradient: 'linear-gradient(135deg, #6B4C11 0%, #C9963A 45%, #3D2800 100%)', desc: '古罗马广场是共和国与帝国时代的政治、宗教和商业中心。', hours: '09:00—日落前1小时', ticket: '€18（科洛塞姆联票）', note: '建议由帕拉丁山高处俯瞰全貌。', tags: ['古罗马', '考古遗迹', '共和国遗址'] },
    ]
  },
  {
    id: 'istanbul', name: '伊斯坦布尔', nameEn: 'Istanbul',
    country: '土耳其', countryFlag: '🇹🇷', continent: 'europe',
    themes: ['silk-road', 'maritime', 'imperial'],
    coords: "41°00'N 28°58'E",
    wiki: 'Istanbul',
    heroGradient: 'linear-gradient(160deg, #1a0a2a 0%, #0d0d1e 60%, #1a2a0a 100%)',
    hook: '横跨两洲，拜占庭与奥斯曼的帝国交替',
    heroQuote: '1453年5月29日，当奥斯曼大军攻破城墙的那一刻，中世纪结束了',
    tagline: '⚓ 两洲之门 · 2700年',
    overview: '伊斯坦布尔是世界上唯一横跨两大洲的城市。历经拜占庭帝国与奥斯曼帝国，积淀了东西方文明最深厚的交汇，每一块石头都镌刻着帝国兴亡的记忆。',
    timeline: [
      { year: '公元前657年', event: '拜占庭城建立', desc: '希腊移民在金角湾与博斯普鲁斯海峡交汇处建立殖民地。' },
      { year: '公元330年', event: '君士坦丁堡建都', desc: '君士坦丁大帝将帝国首都东迁，更名"新罗马"。' },
      { year: '537年', event: '圣索菲亚大教堂落成', desc: '查士丁尼一世建造，穹顶直径31米，拜占庭建筑最高成就。' },
      { year: '1204年', event: '第四次十字军劫掠', desc: '十字军攻打君士坦丁堡，大量珍宝流失西方。' },
      { year: '1453年', event: '奥斯曼攻陷君士坦丁堡', desc: '穆罕默德二世率军攻破城墙，东罗马帝国灭亡。' },
      { year: '1520—1566年', event: '苏莱曼大帝时代', desc: '奥斯曼帝国达到鼎盛，建筑师希南建造了数十座伟大建筑。' },
      { year: '1923年', event: '土耳其共和国建立', desc: '凯末尔建立共和国，迁都安卡拉。' },
    ],
    landmarks: [
      { name: '圣索菲亚大教堂', era: '拜占庭·537年', yearNum: 537, wiki: 'Hagia Sophia', gradient: 'linear-gradient(135deg, #4A2C0A 0%, #D4841A 45%, #C9963A 100%)', desc: '圣索菲亚是拜占庭建筑的顶峰之作，近千年来一直是世界上最大的教堂。', hours: '礼拜时间外开放 09:00—17:30', ticket: '免费', note: '进入需脱鞋，女性须遮盖头发。', tags: ['世界遗产', '拜占庭建筑', '穹顶奇迹'],
        worldEvents: [
          { flag: '🇨🇳', city: '中国', event: '南北朝时期，佛教在中国蓬勃发展，少林寺已建立两年' },
          { flag: '🇲🇽', city: '墨西哥', event: '特奥蒂瓦坎城正处鼎盛，太阳金字塔已矗立数百年' }
        ]
      },
      { name: '蓝色清真寺', era: '奥斯曼·1616年', yearNum: 1616, wiki: 'Sultan Ahmed Mosque', gradient: 'linear-gradient(135deg, #0A2A4A 0%, #1A6B9A 50%, #0D3D6B 100%)', desc: '因内部2万余块伊兹尼克蓝色瓷砖得名，六座宣礼塔至今仍是活跃的礼拜场所。', hours: '日出—日落，礼拜期间关闭', ticket: '免费', note: '与圣索菲亚步行仅需3分钟。', tags: ['奥斯曼建筑', '伊兹尼克瓷砖', '活跃清真寺'] },
      { name: '托普卡帕宫', era: '奥斯曼·1465年', yearNum: 1465, wiki: 'Topkapı Palace', gradient: 'linear-gradient(135deg, #2A1A0A 0%, #8B6914 50%, #4A3010 100%)', desc: '奥斯曼帝国苏丹的官邸，历时400余年持续扩建，占地约70万平方米。', hours: '09:00—18:45（夏季），周二闭馆', ticket: '€35', note: '哈莱姆宫需定时导览，入园后立即预约。', tags: ['奥斯曼帝国', '皇家宫殿', '世界遗产'],
        worldEvents: [
          { flag: '🇨🇳', city: '北京', event: '明朝天顺年间，紫禁城已矗立45年' },
          { flag: '🇮🇹', city: '佛罗伦萨', event: '洛伦佐·美第奇即将掌权，文艺复兴进入巅峰' }
        ]
      },
      { name: '大巴扎', era: '奥斯曼·1461年', yearNum: 1461, wiki: 'Grand Bazaar, Istanbul', gradient: 'linear-gradient(135deg, #4A0A0A 0%, #C94A1A 50%, #2A0A00 100%)', desc: '世界上最古老、最大的有顶集市之一，60余条街道、4000余间店铺。', hours: '周一至周六 08:30—19:00，周日闭馆', ticket: '免费', note: '砍价是传统文化的一部分。', tags: ['丝绸之路', '历史集市', '商业文化'] },
    ]
  },
  {
    id: 'kyoto', name: '京都', nameEn: 'Kyoto',
    country: '日本', countryFlag: '🇯🇵', continent: 'asia',
    themes: ['religion', 'renaissance'],
    coords: "35°00'N 135°46'E",
    wiki: 'Kyoto Tower',
    heroGradient: 'linear-gradient(160deg, #2a1a3a 0%, #150d20 60%, #1a2a10 100%)',
    hook: '千年古都，茶道与禅宗的最后守护者',
    heroQuote: '二战中美军刻意绕过京都的轰炸，因为一位学者说"毁掉京都就是毁掉日本的灵魂"',
    tagline: '🎨 千年古都 · 1200年',
    overview: '京都是日本天皇都城长达1100年，积淀了日本文化最精华的层次：神社、寺院、茶道、能乐、传统庭园。二战期间美军刻意绕过京都的轰炸，使其成为保存最完好的古代都市之一。',
    timeline: [
      { year: '794年', event: '平安京迁都', desc: '桓武天皇以唐长安城为蓝本规划建造平安京，此后400年贵族文化绽放。' },
      { year: '1185年', event: '武家时代开启', desc: '源氏在坛之浦海战中击败平氏，建立镰仓幕府。' },
      { year: '1338年', event: '室町幕府建立', desc: '足利尊氏在京都建立幕府，枯山水庭园、能乐、茶道在此时代形成。' },
      { year: '1467年', event: '应仁之乱', desc: '十年内战使京都遭受严重破坏，日本进入战国时代。' },
      { year: '1603年', event: '德川幕府·江户时代', desc: '锁国政策下形成高度精炼的传统文化生态。' },
      { year: '1868年', event: '明治维新·首都东移', desc: '明治天皇迁都东京，结束京都1074年的都城地位。' },
    ],
    landmarks: [
      { name: '伏见稻荷大社', era: '奈良·711年', yearNum: 711, wiki: 'Fushimi Inari-taisha', gradient: 'linear-gradient(135deg, #7A1A0A 0%, #E84A1A 50%, #3D0D00 100%)', desc: '全日本3万余座稻荷神社的总本社，山道上绵延约4公里、多达10,000座朱红色鸟居。', hours: '24小时开放', ticket: '免费', note: '凌晨或深夜是鸟居最空旷神秘的时段。', tags: ['神道教圣地', '鸟居走廊', '奈良时代'],
        worldEvents: [
          { flag: '🇨🇳', city: '长安', event: '唐朝盛世，长安是世界上最繁华的城市，人口逾百万' },
          { flag: '🇪🇸', city: '西班牙', event: '同年（711年），阿拉伯军队渡过直布罗陀海峡征服伊比利亚' }
        ]
      },
      { name: '金阁寺（鹿苑寺）', era: '室町·1397年', yearNum: 1397, wiki: 'Kinkaku-ji', gradient: 'linear-gradient(135deg, #1A3A1A 0%, #C9963A 45%, #0D2010 100%)', desc: '足利义满建造，三层阁楼以金箔贴覆，倒映于镜湖池中。1950年被纵火焚毁，1955年重建。', hours: '09:00—17:00', ticket: '¥500', note: '雪天或红叶期间的金阁是京都最美景象。', tags: ['世界遗产', '室町幕府', '金箔建筑'],
        worldEvents: [
          { flag: '🇨🇳', city: '南京', event: '明朝刚刚建立（1368年），朱元璋定都南京' },
          { flag: '🇹🇷', city: '伊斯坦布尔', event: '奥斯曼帝国在巴尔干半岛扩张，尼科波利斯战役刚结束' }
        ]
      },
      { name: '二条城', era: '江户·1603年', yearNum: 1603, wiki: 'Nijo Castle', gradient: 'linear-gradient(135deg, #1A2A3A 0%, #4A7A9B 50%, #0D1A26 100%)', desc: '德川家康建造，以"莺张地板"著称。1867年末代将军在此宣布大政奉还。', hours: '08:45—16:00', ticket: '¥1,300', note: '莺张地板确实会发出声响。', tags: ['世界遗产', '德川幕府', '大政奉还'] },
      { name: '清水寺', era: '平安·778年', yearNum: 778, wiki: 'Kiyomizu-dera', gradient: 'linear-gradient(135deg, #3A1A2A 0%, #8B4A6B 50%, #1A0D15 100%)', desc: '建于悬崖之上，本堂前舞台以139根木柱支撑，不用一颗钉子。', hours: '06:00—18:00', ticket: '¥500', note: '清晨6—7点光线最美且人最少。', tags: ['世界遗产', '悬崖建筑', '红叶名所'] },
    ]
  },
  {
    id: 'cairo', name: '开罗', nameEn: 'Cairo',
    country: '埃及', countryFlag: '🇪🇬', continent: 'africa',
    themes: ['ancient'],
    coords: "30°03'N 31°14'E",
    wiki: 'Cairo',
    heroGradient: 'linear-gradient(160deg, #3a2a08 0%, #1e1408 60%, #0d1a0d 100%)',
    hook: '金字塔在城市边缘矗立，4500年时光一步之遥',
    heroQuote: '站在吉萨高地上，你与4500年前的法老之间，只隔着一片沙漠',
    tagline: '🏛 文明摇篮 · 5000年',
    overview: '开罗是非洲与阿拉伯世界最大的城市，金字塔在城市边缘矗立，现代开罗的喧嚣与4500年前的宏伟建筑之间仅隔一片沙漠，这种时间的压缩感是世界上任何城市都难以复制的。',
    timeline: [
      { year: '约公元前3100年', event: '古埃及统一', desc: '那尔迈法老统一上下埃及，孟菲斯成为早期首都。' },
      { year: '约公元前2560年', event: '胡夫大金字塔建成', desc: '原高146.5米，是古代世界七大奇迹中唯一保存至今者。' },
      { year: '公元前332年', event: '亚历山大征服埃及', desc: '托勒密王朝统治近300年，希腊化文明与古埃及文化融合。' },
      { year: '公元641年', event: '阿拉伯征服', desc: '建立福斯塔特城（开罗前身），伊斯兰教迅速传播。' },
      { year: '969年', event: '法蒂玛王朝建开罗', desc: '新城"al-Qāhira"即"胜利者"，是今日开罗之名由来。' },
      { year: '1517年', event: '奥斯曼帝国并吞', desc: '开罗成为奥斯曼帝国最重要的行省城市。' },
      { year: '1798年', event: '拿破仑远征埃及', desc: '随军学者系统记录古埃及文明，埃及学由此诞生。' },
    ],
    landmarks: [
      { name: '吉萨大金字塔群', era: '古王国·约前2560年', yearNum: -2560, wiki: 'Giza pyramid complex', gradient: 'linear-gradient(135deg, #4A3A1A 0%, #C9963A 45%, #8B6914 100%)', desc: '古代世界七大奇迹中唯一留存至今。胡夫金字塔使用约230万块石块，四个底边误差不超过5厘米。', hours: '08:00—17:00', ticket: '遗址区 约¥80', note: '进入金字塔内部需极早排队，名额有限。', tags: ['世界文化遗产', '古代七大奇迹', '法老陵墓'],
        worldEvents: [
          { flag: '🇮🇶', city: '美索不达米亚', event: '苏美尔城邦文明正处鼎盛，楔形文字已发明数百年' },
          { flag: '🇬🇧', city: '英格兰', event: '巨石阵正在建造中，新石器时代的不列颠人举起巨石' }
        ]
      },
      { name: '埃及博物馆', era: '近代·1902年', yearNum: 1902, wiki: 'Egyptian Museum', gradient: 'linear-gradient(135deg, #1A1A3A 0%, #6A4A8B 50%, #0D0D1E 100%)', desc: '收藏文物逾17万件，镇馆之宝包括图坦卡蒙法老的黄金面具。', hours: '09:00—17:00', ticket: '约¥45', note: '图坦卡蒙展品位于2楼正中心区域。', tags: ['埃及学', '图坦卡蒙', '法老文物'] },
      { name: '爱资哈尔清真寺', era: '法蒂玛·970年', yearNum: 970, wiki: 'Al-Azhar Mosque', gradient: 'linear-gradient(135deg, #0A2A1A 0%, #1A6B4A 50%, #0D3D26 100%)', desc: '附属大学建于975年，是世界上最古老的持续运作的大学之一。', hours: '09:00—17:00', ticket: '免费', note: '周边汗·哈利利市集是购买香料、铜器的好去处。', tags: ['法蒂玛王朝', '最古老大学', '伊斯兰建筑'],
        worldEvents: [
          { flag: '🇯🇵', city: '京都', event: '平安时代，日本贵族文化绽放，《源氏物语》即将问世' },
          { flag: '🇨🇳', city: '中国', event: '北宋建立不久，活字印刷和火药技术正在改变世界' }
        ]
      },
      { name: '萨拉丁城堡', era: '阿尤布·1183年', yearNum: 1183, wiki: 'Cairo Citadel', gradient: 'linear-gradient(135deg, #2A2A1A 0%, #6B6B2A 50%, #1A1A0A 100%)', desc: '位于穆卡塔姆山丘顶端，俯瞰整个开罗城。', hours: '08:00—17:00', ticket: '约¥45', note: '城堡顶部是俯瞰开罗全景的最佳位置。', tags: ['阿尤布王朝', '军事建筑', '俯瞰全城'] },
    ]
  },
  // ─── P1 CITIES ───────────────────────
  {
    id: 'paris', name: '巴黎', nameEn: 'Paris',
    country: '法国', countryFlag: '🇫🇷', continent: 'europe',
    themes: ['imperial', 'renaissance'],
    coords: "48°51'N 2°21'E",
    wiki: 'Paris',
    heroGradient: 'linear-gradient(160deg, #1a1a3a 0%, #0d0d1e 60%, #2a1a0a 100%)',
    hook: '从卢浮宫到埃菲尔铁塔，光之都永不黯淡',
    heroQuote: '1889年，当埃菲尔铁塔拔地而起时，全巴黎的艺术家都在抗议这座"金属怪物"',
    tagline: '👑 光之都 · 2000年',
    overview: '巴黎是法国的心脏与灵魂。从中世纪的哥特大教堂到拿破仑的凯旋门，从印象派画家的塞纳河到香榭丽舍大道的华灯，这座城市将艺术、革命与浪漫编织成了人类文明最璀璨的篇章。',
    timeline: [
      { year: '约公元前3世纪', event: 'Parisii部落定居', desc: '凯尔特人的巴黎西族在塞纳河西岱岛定居，城市名称由此而来。' },
      { year: '508年', event: '克洛维定都巴黎', desc: '法兰克国王克洛维将巴黎定为首都，奠定了法兰西文化的基础。' },
      { year: '1163年', event: '巴黎圣母院奠基', desc: '哥特式建筑的巅峰之作开始建造，历时近两百年完成。' },
      { year: '1682年', event: '路易十四迁往凡尔赛', desc: '太阳王在巴黎郊外建造了人类历史上最奢华的宫殿。' },
      { year: '1789年', event: '法国大革命', desc: '巴士底狱被攻克，自由、平等、博爱的理念从此改变世界。' },
      { year: '1889年', event: '埃菲尔铁塔建成', desc: '为世博会建造的临时建筑，却成为了巴黎永恒的象征。' },
      { year: '1944年', event: '巴黎解放', desc: '盟军解放巴黎，戴高乐将军沿香榭丽舍大道凯旋。' },
    ],
    landmarks: [
      { name: '巴黎圣母院', era: '中世纪·1163年', yearNum: 1163, wiki: 'Notre-Dame de Paris', gradient: 'linear-gradient(135deg, #2A2A3A 0%, #6A6A8B 50%, #1A1A2A 100%)', desc: '哥特式建筑的杰作，飞扶壁和玫瑰花窗是中世纪工程与艺术的巅峰。2019年大火后正在修复中。', hours: '修复中，部分区域开放', ticket: '免费', note: '2024年底重新开放，塔楼需提前预约。', tags: ['哥特建筑', '世界遗产', '法国地标'],
        worldEvents: [
          { flag: '🇯🇵', city: '京都', event: '源平合战时期，日本武士文化正在形成' },
          { flag: '🇪🇬', city: '开罗', event: '萨拉丁正在建造城堡，抵御十字军东征' }
        ]
      },
      { name: '埃菲尔铁塔', era: '近代·1889年', yearNum: 1889, wiki: 'Eiffel Tower', gradient: 'linear-gradient(135deg, #3A3A4A 0%, #8A8A9B 50%, #1A1A2A 100%)', desc: '高324米，建造时使用了7300吨铁和250万颗铆钉。原计划20年后拆除，因无线电天线的价值而得以保留。', hours: '09:30—23:45', ticket: '电梯至顶 €26.80', note: '日落前1小时登塔，可同时欣赏日景和夜景。', tags: ['法国象征', '世博遗产', '铁建筑'] },
      { name: '卢浮宫', era: '12世纪—1793年', yearNum: 1793, wiki: 'Louvre', gradient: 'linear-gradient(135deg, #2A1A0A 0%, #8B6914 50%, #4A3010 100%)', desc: '世界上参观人数最多的博物馆，收藏超过38万件作品，包括《蒙娜丽莎》和《断臂维纳斯》。', hours: '09:00—18:00，周二闭馆', ticket: '€17', note: '至少需要半天时间，建议提前规划路线。', tags: ['世界最大博物馆', '皇家宫殿', '艺术殿堂'] },
      { name: '凡尔赛宫', era: '17世纪·1682年', yearNum: 1682, wiki: 'Palace of Versailles', gradient: 'linear-gradient(135deg, #4A3A1A 0%, #C9963A 50%, #2A1A00 100%)', desc: '太阳王路易十四建造的宫殿，镜厅拥有357面镜子，花园面积达800公顷。', hours: '09:00—18:30，周一闭馆', ticket: '€21', note: '周末花园音乐喷泉表演不容错过。', tags: ['世界遗产', '巴洛克建筑', '皇家园林'] },
    ]
  },
  {
    id: 'athens', name: '雅典', nameEn: 'Athens',
    country: '希腊', countryFlag: '🇬🇷', continent: 'europe',
    themes: ['ancient', 'maritime'],
    coords: "37°58'N 23°43'E",
    wiki: 'Athens',
    heroGradient: 'linear-gradient(160deg, #2a2a1a 0%, #1a1a0d 60%, #0d1a2a 100%)',
    hook: '民主在这里诞生，哲学在这里启蒙',
    heroQuote: '2500年前，一群雅典公民发明了一种叫"民主"的东西，至今仍在塑造世界',
    tagline: '🏛 民主摇篮 · 3400年',
    overview: '雅典是西方文明的摇篮。在这座城市，苏格拉底追问真理，柏拉图创建学园，帕特农神庙至今仍是人类建筑美学的巅峰之作。',
    timeline: [
      { year: '约公元前1400年', event: '迈锡尼时代', desc: '卫城首次出现定居点，成为迈锡尼文明的重要据点。' },
      { year: '公元前508年', event: '民主制度诞生', desc: '克里斯提尼改革，建立了人类历史上第一个民主政体。' },
      { year: '公元前447年', event: '帕特农神庙开建', desc: '伯里克利主持建造，菲迪亚斯负责雕塑，成为希腊古典艺术的巅峰。' },
      { year: '公元前338年', event: '马其顿征服', desc: '腓力二世在喀罗尼亚击败希腊联军，雅典独立时代结束。' },
      { year: '公元529年', event: '柏拉图学院关闭', desc: '查士丁尼下令关闭异教学校，持续九百年的雅典学术传统中断。' },
      { year: '1834年', event: '成为希腊首都', desc: '希腊独立后定都雅典，新古典主义建筑开始塑造现代城市面貌。' },
    ],
    landmarks: [
      { name: '帕特农神庙', era: '古典·前447年', yearNum: -447, wiki: 'Parthenon', gradient: 'linear-gradient(135deg, #4A3A2A 0%, #C9A96A 50%, #2A1A0A 100%)', desc: '供奉雅典娜女神的神庙，多立克柱式的完美典范。柱子微微向内倾斜以修正视觉错觉，精确度令现代建筑师惊叹。', hours: '08:00—20:00（夏季）', ticket: '€30（卫城联票）', note: '清晨或傍晚光线最佳，避开正午人潮。', tags: ['世界遗产', '古典建筑', '雅典娜'],
        worldEvents: [
          { flag: '🇨🇳', city: '中国', event: '战国时代，孔子去世不久，百家争鸣正在展开' },
          { flag: '🇪🇬', city: '埃及', event: '波斯帝国统治下，距亚历山大大帝征服还有115年' }
        ]
      },
      { name: '雅典卫城', era: '青铜时代起', yearNum: -500, wiki: 'Acropolis of Athens', gradient: 'linear-gradient(135deg, #3A2A1A 0%, #8B7A5A 50%, #1A0D00 100%)', desc: '卫城是一座天然要塞，海拔156米的石灰岩山丘上汇集了帕特农神庙、伊瑞克提翁神庙等建筑群。', hours: '08:00—20:00', ticket: '€30', note: '建议从南坡入口进入，可依次参观所有遗迹。', tags: ['世界遗产', '古希腊', '神殿群'] },
      { name: '古代市集（Agora）', era: '古典·前6世纪', yearNum: -500, wiki: 'Ancient Agora of Athens', gradient: 'linear-gradient(135deg, #2A2A1A 0%, #6B5A3A 50%, #1A1A0D 100%)', desc: '苏格拉底在此辩论，柏拉图在此漫步。阿塔罗斯柱廊已完整重建，是了解古希腊日常生活的最佳场所。', hours: '08:00—20:00', ticket: '€10', note: '赫菲斯托斯神庙是希腊保存最完整的古代神庙。', tags: ['古希腊民主', '哲学诞生地', '考古遗址'] },
    ]
  },
  {
    id: 'florence', name: '佛罗伦萨', nameEn: 'Florence',
    country: '意大利', countryFlag: '🇮🇹', continent: 'europe',
    themes: ['renaissance'],
    coords: "43°46'N 11°15'E",
    wiki: 'Florence',
    heroGradient: 'linear-gradient(160deg, #3a1a0a 0%, #1e0d05 60%, #0d1a1a 100%)',
    hook: '文艺复兴在这里点燃，照亮了整个西方世界',
    heroQuote: '15世纪的佛罗伦萨只有6万人口，却诞生了达芬奇、米开朗基罗、波提切利',
    tagline: '🎨 文艺复兴之都 · 2000年',
    overview: '佛罗伦萨是文艺复兴的心脏。美第奇家族用银行业的财富资助了人类历史上最伟大的艺术爆发。达芬奇在这里画出第一幅杰作，米开朗基罗在这里雕刻了大卫像。',
    timeline: [
      { year: '公元前59年', event: '罗马殖民地建立', desc: '凯撒为退役老兵建立殖民地"Florentia"，意为"繁花之城"。' },
      { year: '1115年', event: '自治公社成立', desc: '佛罗伦萨脱离封建领主控制，成为自治城市共和国。' },
      { year: '1296年', event: '圣母百花大教堂动工', desc: '这座大教堂将成为城市的象征，穹顶问题困扰了建筑师一个多世纪。' },
      { year: '1434年', event: '美第奇家族崛起', desc: '科西莫·德·美第奇成为佛罗伦萨实际统治者，开启了文艺复兴的黄金时代。' },
      { year: '1501年', event: '米开朗基罗雕刻大卫像', desc: '26岁的米开朗基罗用三年时间将一块被废弃的大理石变成了永恒。' },
      { year: '1865年', event: '短暂成为意大利首都', desc: '意大利统一后佛罗伦萨担任首都六年，直到罗马被收复。' },
    ],
    landmarks: [
      { name: '圣母百花大教堂', era: '文艺复兴·1436年', yearNum: 1436, wiki: 'Florence Cathedral', gradient: 'linear-gradient(135deg, #8B4A2A 0%, #D4841A 50%, #4A2A0A 100%)', desc: '布鲁内莱斯基设计的穹顶直径45米，不使用飞扶壁，至今仍是最大的砖砌穹顶。他甚至为此发明了新的建造机械。', hours: '10:00—17:00', ticket: '教堂免费；穹顶 €30', note: '登穹顶463级台阶，可近距离观赏瓦萨里壁画。', tags: ['世界遗产', '文艺复兴', '建筑创新'],
        worldEvents: [
          { flag: '🇨🇳', city: '北京', event: '明朝宣德年间，紫禁城已落成16年，郑和最后一次下西洋' },
          { flag: '🇹🇷', city: '伊斯坦布尔', event: '奥斯曼帝国持续扩张，距攻陷君士坦丁堡还有17年' }
        ]
      },
      { name: '乌菲兹美术馆', era: '16世纪·1581年', yearNum: 1581, wiki: 'Uffizi', gradient: 'linear-gradient(135deg, #1A2A3A 0%, #4A6A8B 50%, #0D1A2A 100%)', desc: '收藏了波提切利《维纳斯的诞生》、达芬奇《天使报喜》等文艺复兴巅峰之作。', hours: '08:15—18:30，周一闭馆', ticket: '€25', note: '提前网上订票可避免长时间排队。', tags: ['文艺复兴艺术', '美第奇收藏', '世界级博物馆'] },
      { name: '老桥（Ponte Vecchio）', era: '中世纪·1345年', yearNum: 1345, wiki: 'Ponte Vecchio', gradient: 'linear-gradient(135deg, #4A3A1A 0%, #8B7A5A 50%, #2A1A0A 100%)', desc: '阿诺河上最古老的桥梁，桥上开满金银首饰店。二战中德军撤退时唯一未被炸毁的佛罗伦萨桥梁。', hours: '全天开放', ticket: '免费', note: '日落时分从桥上看阿诺河最为浪漫。', tags: ['中世纪建筑', '金匠传统', '城市地标'] },
    ]
  },
  {
    id: 'xian', name: '西安', nameEn: "Xi'an",
    country: '中国', countryFlag: '🇨🇳', continent: 'asia',
    themes: ['silk-road', 'ancient'],
    coords: "34°16'N 108°56'E",
    wiki: "Xi'an",
    heroGradient: 'linear-gradient(160deg, #2a1a0a 0%, #1a0d05 60%, #0d2a1a 100%)',
    hook: '十三朝古都，丝绸之路的起点',
    heroQuote: '当秦始皇的8000名陶俑在地下沉睡时，西方世界还不知道中国的存在',
    tagline: '🐪 丝路起点 · 3100年',
    overview: '西安是中国历史上建都时间最长的城市，周、秦、汉、唐等十三个王朝在此定都。作为古丝绸之路的起点，长安曾是世界上最繁华的国际大都市。',
    timeline: [
      { year: '约公元前1046年', event: '西周建都镐京', desc: '周武王灭商后在此建都，周礼文化由此发端。' },
      { year: '公元前221年', event: '秦统一六国', desc: '秦始皇在咸阳建立第一个大一统帝国，统一文字、度量衡。' },
      { year: '公元前202年', event: '汉朝定都长安', desc: '刘邦建立汉朝，长安城成为东方最大的城市。' },
      { year: '公元前138年', event: '张骞出使西域', desc: '汉武帝派张骞开辟丝绸之路，长安成为东西文明交汇的枢纽。' },
      { year: '618年', event: '唐朝定都长安', desc: '唐代长安人口逾百万，是当时世界上最国际化的都市。' },
      { year: '907年', event: '唐朝灭亡', desc: '此后再无王朝定都于此，但丝路遗产永远留存。' },
    ],
    landmarks: [
      { name: '秦始皇兵马俑', era: '秦·前210年', yearNum: -210, wiki: 'Terracotta Army', gradient: 'linear-gradient(135deg, #4A3A1A 0%, #8B7A5A 50%, #2A1A0A 100%)', desc: '1974年偶然发现的地下军团，约8000个真人大小的陶俑，每个面容各异。被誉为"世界第八大奇迹"。', hours: '08:30—18:00', ticket: '旺季 ¥150，淡季 ¥120', note: '一号坑规模最大，三号坑是指挥部。', tags: ['世界文化遗产', '秦代', '考古奇迹'],
        worldEvents: [
          { flag: '🇮🇹', city: '罗马', event: '罗马共和国正与迦太基争夺地中海霸权，第二次布匿战争即将爆发' },
          { flag: '🇪🇬', city: '埃及', event: '托勒密王朝统治下，亚历山大图书馆是地中海世界的学术中心' }
        ]
      },
      { name: '西安城墙', era: '明·1370年', yearNum: 1370, wiki: 'Fortifications of Xi\'an', gradient: 'linear-gradient(135deg, #3A2A1A 0%, #6B5A3A 50%, #1A0D00 100%)', desc: '中国现存最完整的古代城墙，周长13.74公里，可骑自行车环行一圈。', hours: '08:00—22:00', ticket: '¥54', note: '骑车环城约需1.5小时，南门租车最方便。', tags: ['明代城防', '完整城墙', '骑行体验'] },
      { name: '大雁塔', era: '唐·652年', yearNum: 652, wiki: 'Giant Wild Goose Pagoda', gradient: 'linear-gradient(135deg, #2A1A0A 0%, #6B4A2A 50%, #1A0D00 100%)', desc: '唐僧玄奘为保存从印度带回的经文而修建，是丝绸之路文化交流的见证。', hours: '08:00—17:30', ticket: '¥40', note: '北广场音乐喷泉是亚洲最大的音乐喷泉。', tags: ['世界遗产', '唐代', '丝绸之路'] },
      { name: '回民街', era: '唐代起', yearNum: 700, wiki: 'Drum Tower of Xi\'an', gradient: 'linear-gradient(135deg, #4A1A0A 0%, #C94A1A 50%, #2A0A00 100%)', desc: '西安穆斯林聚居区，千年来的丝路商旅后裔。这里的美食融合了中原与西域风味。', hours: '全天（小吃摊约10:00—22:00）', ticket: '免费', note: '羊肉泡馍、肉夹馍、凉皮是必尝"三件套"。', tags: ['丝路遗产', '清真美食', '文化融合'] },
    ]
  },
  {
    id: 'delhi', name: '德里', nameEn: 'Delhi',
    country: '印度', countryFlag: '🇮🇳', continent: 'asia',
    themes: ['imperial', 'religion'],
    coords: "28°36'N 77°13'E",
    wiki: 'Delhi',
    heroGradient: 'linear-gradient(160deg, #2a1a0a 0%, #1a0d05 60%, #3a1a1a 100%)',
    hook: '七座帝都叠加，从苏丹到莫卧儿的史诗',
    heroQuote: '德里被摧毁和重建了七次，每一次都比上一次更加壮观',
    tagline: '👑 莫卧儿帝都 · 2500年',
    overview: '德里是印度的心脏，历史上七座城市层层叠加。从德里苏丹国到莫卧儿帝国，从英属印度到现代共和国，红堡的砂岩城墙和胡马雍陵的穹顶诉说着帝国的传奇。',
    timeline: [
      { year: '约公元前1500年', event: '因陀罗普拉斯塔', desc: '传说中摩诃婆罗多史诗中般度族的都城，位于今德里地区。' },
      { year: '1192年', event: '德里苏丹国建立', desc: '穆罕默德·古尔征服德里，伊斯兰政权开始统治北印度。' },
      { year: '1526年', event: '莫卧儿帝国建立', desc: '巴布尔在帕尼帕特击败苏丹军队，建立印度历史上最辉煌的帝国。' },
      { year: '1648年', event: '沙贾汗迁都', desc: '莫卧儿皇帝沙贾汗建造红堡和沙贾汗纳巴德（旧德里）。' },
      { year: '1857年', event: '印度民族起义', desc: '反英起义失败后，莫卧儿帝国正式终结，英国直接统治印度。' },
      { year: '1947年', event: '印度独立', desc: '尼赫鲁在红堡升起三色旗，宣告印度独立。' },
    ],
    landmarks: [
      { name: '红堡', era: '莫卧儿·1648年', yearNum: 1648, wiki: 'Red Fort', gradient: 'linear-gradient(135deg, #8B1A1A 0%, #C94A2A 50%, #4A0A0A 100%)', desc: '莫卧儿皇帝沙贾汗建造的红砂岩宫殿，城墙高33米。每年独立日总理在此发表讲话。', hours: '09:30—16:30，周一闭馆', ticket: '₹35（外国人 ₹500）', note: '晚间灯光秀值得一看。', tags: ['世界遗产', '莫卧儿建筑', '国家象征'],
        worldEvents: [
          { flag: '🇫🇷', city: '巴黎', event: '路易十四即将亲政，凡尔赛宫的构想正在萌芽' },
          { flag: '🇯🇵', city: '京都', event: '德川幕府初期，日本实行锁国政策已15年' }
        ]
      },
      { name: '顾特卜塔', era: '德里苏丹·1199年', yearNum: 1199, wiki: 'Qutub Minar', gradient: 'linear-gradient(135deg, #4A2A0A 0%, #8B5A2A 50%, #2A1A00 100%)', desc: '高72.5米，是世界上最高的砖砌宣礼塔。五层结构融合了印度教和伊斯兰建筑风格。', hours: '07:00—17:00', ticket: '₹35（外国人 ₹600）', note: '周围的铁柱1600年不锈蚀，至今是冶金学之谜。', tags: ['世界遗产', '德里苏丹国', '宣礼塔'] },
      { name: '胡马雍陵', era: '莫卧儿·1570年', yearNum: 1570, wiki: "Humayun's Tomb", gradient: 'linear-gradient(135deg, #2A1A1A 0%, #6B4A3A 50%, #1A0D0D 100%)', desc: '莫卧儿建筑的先驱之作，对称的波斯式花园陵墓直接启发了泰姬陵的设计。', hours: '日出—日落', ticket: '₹35（外国人 ₹600）', note: '日落时分光线最美。', tags: ['世界遗产', '莫卧儿建筑', '泰姬陵先驱'] },
    ]
  },
  {
    id: 'jerusalem', name: '耶路撒冷', nameEn: 'Jerusalem',
    country: '以色列', countryFlag: '🇮🇱', continent: 'asia',
    themes: ['religion', 'ancient'],
    coords: "31°47'N 35°13'E",
    wiki: 'Jerusalem',
    heroGradient: 'linear-gradient(160deg, #2a2a0a 0%, #1a1a05 60%, #0d0d2a 100%)',
    hook: '犹太教、基督教、伊斯兰教的共同圣城',
    heroQuote: '在这座不到1平方公里的老城里，三大宗教争夺了3000年',
    tagline: '🕌 三教圣城 · 5000年',
    overview: '耶路撒冷是人类历史上最神圣也最受争议的城市。犹太人的西墙、基督徒的圣墓教堂、穆斯林的圆顶清真寺，三大宗教的圣地在不到一平方公里的老城中比邻而立。',
    timeline: [
      { year: '约公元前3000年', event: '迦南人定居', desc: '青铜时代早期已有定居记录，是世界上最古老的城市之一。' },
      { year: '约公元前1000年', event: '大卫王建都', desc: '以色列王大卫攻占耶布斯城，定为统一王国首都。' },
      { year: '公元前586年', event: '巴比伦毁城', desc: '尼布甲尼撒二世摧毁第一圣殿，犹太人被掳至巴比伦。' },
      { year: '公元前19年', event: '希律王重建圣殿', desc: '大希律王扩建第二圣殿，西墙即是当年圣殿山的挡土墙遗迹。' },
      { year: '公元70年', event: '罗马军队摧毁圣殿', desc: '提图斯攻陷耶路撒冷，第二圣殿被焚毁，犹太人大流散开始。' },
      { year: '691年', event: '圆顶清真寺建成', desc: '倭马亚王朝在圣殿山上建造金色穹顶，成为伊斯兰圣地。' },
      { year: '1099年', event: '十字军攻陷耶路撒冷', desc: '第一次十字军东征攻占圣城，建立耶路撒冷王国。' },
    ],
    landmarks: [
      { name: '西墙（哭墙）', era: '前19年', yearNum: -19, wiki: 'Western Wall', gradient: 'linear-gradient(135deg, #4A3A2A 0%, #8B7A5A 50%, #2A1A0A 100%)', desc: '第二圣殿仅存的遗迹，犹太教最神圣的祈祷场所。信徒将祈祷纸条塞入墙缝已有数百年传统。', hours: '24小时开放', ticket: '免费', note: '安息日（周五日落至周六日落）有特殊祈祷仪式。', tags: ['犹太教圣地', '第二圣殿', '祈祷之地'],
        worldEvents: [
          { flag: '🇨🇳', city: '长安', event: '西汉武帝时期，张骞已开通丝绸之路，东西文明首次对话' },
          { flag: '🇮🇹', city: '罗马', event: '奥古斯都凯撒正在缔造罗马和平，帝国进入黄金时代' }
        ]
      },
      { name: '圆顶清真寺', era: '倭马亚·691年', yearNum: 691, wiki: 'Dome of the Rock', gradient: 'linear-gradient(135deg, #1A3A1A 0%, #C9963A 50%, #0D2A0D 100%)', desc: '伊斯兰世界最标志性的建筑之一，金色穹顶下是先知穆罕默德登霄之处的圣石。', hours: '非穆斯林参观时间有限', ticket: '免费（但限制入场）', note: '非穆斯林仅可在特定时段从穆格拉比门进入。', tags: ['伊斯兰圣地', '圣殿山', '金色穹顶'] },
      { name: '圣墓教堂', era: '拜占庭·335年', yearNum: 335, wiki: 'Church of the Holy Sepulchre', gradient: 'linear-gradient(135deg, #2A1A2A 0%, #6A4A6A 50%, #1A0D1A 100%)', desc: '基督教最神圣的教堂，相传建在耶稣受难和复活之处。六个基督教派系共同管理这座教堂。', hours: '04:00—19:00（夏季延至21:00）', ticket: '免费', note: '教堂内的"不可移动的梯子"已在同一位置超过300年。', tags: ['基督教圣地', '耶稣圣迹', '宗教共管'] },
    ]
  },
  {
    id: 'angkor', name: '吴哥窟', nameEn: 'Angkor Wat',
    country: '柬埔寨', countryFlag: '🇰🇭', continent: 'asia',
    themes: ['ancient', 'religion'],
    coords: "13°24'N 103°52'E",
    wiki: 'Angkor Wat',
    heroGradient: 'linear-gradient(160deg, #1a2a0a 0%, #0d1a05 60%, #2a1a00 100%)',
    hook: '丛林中苏醒的高棉帝国',
    heroQuote: '12世纪的吴哥城拥有百万人口，比当时的伦敦和巴黎加起来还多',
    tagline: '🏛 高棉奇迹 · 900年',
    overview: '吴哥窟是高棉帝国的灵魂，也是世界上最大的宗教建筑群。当这座宏伟的石城被丛林吞噬数百年后，19世纪的法国探险家重新发现了它，震惊了整个西方世界。',
    timeline: [
      { year: '802年', event: '高棉帝国建立', desc: '阇耶跋摩二世统一高棉，在荔枝山宣布建国。' },
      { year: '约1150年', event: '吴哥窟建成', desc: '苏耶跋摩二世建造了这座献给毗湿奴的石构神庙，是世界最大宗教建筑。' },
      { year: '1181年', event: '阇耶跋摩七世即位', desc: '建造了吴哥通王城和巴戎寺，帝国达到领土最大范围。' },
      { year: '1431年', event: '暹罗军队攻陷吴哥', desc: '高棉帝国南迁金边，吴哥遗址逐渐被热带丛林吞没。' },
      { year: '1860年', event: '法国探险家重新发现', desc: '亨利·穆奥的记录引起轰动，吴哥窟重新进入世界视野。' },
    ],
    landmarks: [
      { name: '吴哥窟主殿', era: '高棉·约1150年', yearNum: 1150, wiki: 'Angkor Wat', gradient: 'linear-gradient(135deg, #2A3A1A 0%, #6B8A4A 50%, #1A2A0A 100%)', desc: '世界最大的宗教建筑，护城河宽190米，中央塔高65米。日出时五座塔尖的倒影是柬埔寨国旗的灵感来源。', hours: '05:00—17:30', ticket: '1日 $37，3日 $62', note: '日出观赏点在西面倒影池，需凌晨4:30出发。', tags: ['世界遗产', '印度教建筑', '高棉帝国'],
        worldEvents: [
          { flag: '🇫🇷', city: '法国', event: '十字军东征时代，哥特式大教堂正在欧洲各地兴起' },
          { flag: '🇨🇳', city: '中国', event: '南宋时期，中国是当时世界上技术最先进的文明' }
        ]
      },
      { name: '巴戎寺', era: '高棉·1200年', yearNum: 1200, wiki: 'Bayon', gradient: 'linear-gradient(135deg, #3A3A1A 0%, #8B8A5A 50%, #1A1A0A 100%)', desc: '216张巨大的石面微笑俯瞰四方，被称为"高棉的微笑"。浮雕墙面描绘了高棉人的日常生活。', hours: '07:30—17:30', ticket: '吴哥联票', note: '上午光线最适合拍摄微笑面容。', tags: ['高棉的微笑', '佛教建筑', '石雕艺术'] },
      { name: '塔布隆寺', era: '高棉·1186年', yearNum: 1186, wiki: 'Ta Prohm', gradient: 'linear-gradient(135deg, #1A2A1A 0%, #4A6A3A 50%, #0D1A0D 100%)', desc: '被巨大的绞杀榕树根盘绕的寺庙，保留了法国考古学家发现时的原貌。因《古墓丽影》电影取景而闻名。', hours: '07:30—17:30', ticket: '吴哥联票', note: '最著名的"树抱塔"景观在东门入口。', tags: ['丛林寺庙', '电影取景地', '自然与人文'] },
    ]
  },
  {
    id: 'marrakesh', name: '马拉喀什', nameEn: 'Marrakesh',
    country: '摩洛哥', countryFlag: '🇲🇦', continent: 'africa',
    themes: ['silk-road', 'imperial'],
    coords: "31°37'N 8°00'W",
    wiki: 'Marrakesh',
    heroGradient: 'linear-gradient(160deg, #3a1a0a 0%, #2a0d05 60%, #1a2a0a 100%)',
    hook: '撒哈拉边缘的红色帝国',
    heroQuote: '在马拉喀什的德吉玛广场，说书人和耍蛇者延续着一千年前的表演',
    tagline: '🐪 沙漠明珠 · 1000年',
    overview: '马拉喀什是摩洛哥的文化之都，因建筑的赭红色而被称为"红城"。作为跨撒哈拉贸易的北端终点，这座城市将非洲、阿拉伯和柏柏尔文化融为一体。',
    timeline: [
      { year: '1062年', event: '穆拉比特王朝建城', desc: '柏柏尔人的穆拉比特王朝将马拉喀什定为帝国首都。' },
      { year: '1147年', event: '穆瓦希德王朝', desc: '新王朝重建城市，库图比亚清真寺在此时期建造。' },
      { year: '1269年', event: '马林王朝', desc: '首都迁至非斯，但马拉喀什仍是重要的贸易城市。' },
      { year: '1557年', event: '萨阿德王朝复兴', desc: '马拉喀什重新成为首都，迎来文化和建筑的黄金时代。' },
      { year: '1912年', event: '法国保护领', desc: '摩洛哥成为法国保护国，新城（Ville Nouvelle）开始建设。' },
      { year: '1956年', event: '摩洛哥独立', desc: '马拉喀什转型为旅游城市，老城麦地那列入世界遗产。' },
    ],
    landmarks: [
      { name: '德吉玛·艾尔法纳广场', era: '11世纪起', yearNum: 1050, wiki: 'Jemaa el-Fnaa', gradient: 'linear-gradient(135deg, #4A2A0A 0%, #C9763A 50%, #2A1A00 100%)', desc: '北非最繁忙的广场，白天是市集，入夜后变成露天大排档和表演场。联合国教科文组织将其列为"人类口头和非物质文化遗产"。', hours: '全天（夜晚最热闹）', ticket: '免费', note: '傍晚时分找一家屋顶咖啡馆俯瞰广场最佳。', tags: ['非物质文化遗产', '夜市', '柏柏尔文化'],
        worldEvents: [
          { flag: '🇨🇳', city: '中国', event: '北宋仁宗时期，中国城市文化繁荣，《清明上河图》时代即将到来' },
          { flag: '🇬🇧', city: '英格兰', event: '诺曼征服前夕，盎格鲁-撒克逊英格兰即将迎来历史转折' }
        ]
      },
      { name: '库图比亚清真寺', era: '穆瓦希德·1147年', yearNum: 1147, wiki: 'Koutoubia Mosque', gradient: 'linear-gradient(135deg, #3A2A0A 0%, #8B6A3A 50%, #1A0D00 100%)', desc: '马拉喀什最高的建筑（77米），其宣礼塔是塞维利亚吉拉尔达塔和拉巴特哈桑塔的设计原型。', hours: '非穆斯林不可进入', ticket: '仅外观参观', note: '花园是免费散步的好去处，日落时分光线最美。', tags: ['穆瓦希德建筑', '宣礼塔', '城市地标'] },
      { name: '巴希亚宫', era: '19世纪·1867年', yearNum: 1867, wiki: 'Bahia Palace', gradient: 'linear-gradient(135deg, #1A2A2A 0%, #4A6A6A 50%, #0D1A1A 100%)', desc: '摩洛哥伊斯兰建筑的精华，150个房间装饰着精美的雪松木雕、马赛克瓷砖和大理石地板。', hours: '09:00—17:00', ticket: 'MAD 70（约¥50）', note: '庭院中的橘子树和喷泉营造出一片绿洲。', tags: ['伊斯兰建筑', '马赛克艺术', '摩洛哥宫殿'] },
    ]
  },
  {
    id: 'mexico-city', name: '墨西哥城', nameEn: 'Mexico City',
    country: '墨西哥', countryFlag: '🇲🇽', continent: 'americas',
    themes: ['imperial', 'ancient'],
    coords: "19°25'N 99°07'W",
    wiki: 'Mexico City',
    heroGradient: 'linear-gradient(160deg, #1a2a1a 0%, #0d1a0d 60%, #2a1a0a 100%)',
    hook: '湖中帝都，从特诺奇提特兰到现代巨城',
    heroQuote: '1519年，科尔特斯看到特诺奇提特兰时说："我们不知道这是真实的还是梦境"',
    tagline: '👑 阿兹特克之心 · 700年',
    overview: '墨西哥城建在一座被摧毁的帝国之上。阿兹特克人曾在湖心建造特诺奇提特兰——当时世界上最大的城市之一。西班牙征服者将其夷为平地，在废墟上建起殖民城市。',
    timeline: [
      { year: '1325年', event: '特诺奇提特兰建城', desc: '阿兹特克人按照神谕，在看到鹰叼蛇站在仙人掌上的地方建城——一座湖中之岛。' },
      { year: '1428年', event: '三方联盟建立', desc: '阿兹特克帝国崛起，特诺奇提特兰成为中美洲最强大的城市。' },
      { year: '1519年', event: '科尔特斯抵达', desc: '西班牙征服者科尔特斯率军进入特诺奇提特兰，被城市的壮观震惊。' },
      { year: '1521年', event: '阿兹特克帝国灭亡', desc: '经过75天围城战，特诺奇提特兰陷落，西班牙人在废墟上建造殖民城市。' },
      { year: '1821年', event: '墨西哥独立', desc: '经过11年独立战争，墨西哥脱离西班牙统治。' },
      { year: '1978年', event: '大神庙遗址发现', desc: '电力工人偶然发现阿兹特克大神庙遗址，就在国家宫殿旁边。' },
    ],
    landmarks: [
      { name: '大神庙遗址', era: '阿兹特克·1325年', yearNum: 1325, wiki: 'Templo Mayor', gradient: 'linear-gradient(135deg, #4A2A0A 0%, #8B5A2A 50%, #2A1A00 100%)', desc: '阿兹特克帝国最重要的宗教建筑遗址，1978年偶然出土。金字塔式神庙曾高60米，供奉雨神和战神。', hours: '09:00—17:00，周一闭馆', ticket: 'MXN 90（约¥35）', note: '博物馆内的科约尔沙赫基石盘不可错过。', tags: ['考古遗址', '阿兹特克', '前哥伦布时代'],
        worldEvents: [
          { flag: '🇮🇹', city: '佛罗伦萨', event: '文艺复兴初期，但丁刚完成《神曲》，乔托正在革新绘画' },
          { flag: '🇨🇳', city: '中国', event: '元朝末年，红巾军起义即将爆发，朱元璋即将登场' }
        ]
      },
      { name: '国家宫殿', era: '殖民·1563年', yearNum: 1563, wiki: 'National Palace (Mexico)', gradient: 'linear-gradient(135deg, #3A1A1A 0%, #6B3A3A 50%, #1A0D0D 100%)', desc: '建在阿兹特克皇帝蒙特祖玛宫殿的遗址上，内有迭戈·里维拉绘制的巨幅壁画《墨西哥历史》。', hours: '09:00—17:00', ticket: '免费', note: '里维拉壁画在二楼楼梯间，是了解墨西哥历史的最佳视觉叙事。', tags: ['殖民建筑', '壁画艺术', '政治中心'] },
      { name: '特奥蒂瓦坎', era: '前200年—650年', yearNum: 200, wiki: 'Teotihuacan', gradient: 'linear-gradient(135deg, #4A3A1A 0%, #C9963A 50%, #2A1A00 100%)', desc: '距墨西哥城50公里的古代大都会遗址，太阳金字塔高65米，是美洲第三大金字塔。鼎盛时期人口达20万。', hours: '09:00—17:00', ticket: 'MXN 90', note: '从月亮金字塔顶部俯瞰"亡灵大道"视野最佳。', tags: ['世界遗产', '前哥伦布文明', '金字塔'] },
    ]
  },
  {
    id: 'machu-picchu', name: '马丘比丘', nameEn: 'Machu Picchu',
    country: '秘鲁', countryFlag: '🇵🇪', continent: 'americas',
    themes: ['ancient'],
    coords: "13°09'S 72°32'W",
    wiki: 'Machu Picchu',
    heroGradient: 'linear-gradient(160deg, #0a2a1a 0%, #051a0d 60%, #1a2a2a 100%)',
    hook: '云端之上的失落之城',
    heroQuote: '印加人在海拔2430米的山脊上建造了一座城市，却没有使用车轮和铁器',
    tagline: '🏛 云中之城 · 600年',
    overview: '马丘比丘是印加帝国最神秘的遗产。这座建在安第斯山脉云端的石城在西班牙征服后被遗忘近400年，直到1911年被重新发现。精确的石工技术和与群山的完美融合，至今令工程师惊叹。',
    timeline: [
      { year: '约1438年', event: '印加帝国崛起', desc: '帕查库提征服周边部落，建立南美洲最大的帝国。' },
      { year: '约1450年', event: '马丘比丘建造', desc: '帕查库提下令在乌鲁班巴河谷上方的山脊建造皇家庄园。' },
      { year: '1533年', event: '西班牙征服印加', desc: '皮萨罗俘获末代印加皇帝，帝国覆灭。马丘比丘因位置偏远未被发现。' },
      { year: '1911年', event: '海勒姆·宾厄姆发现遗址', desc: '耶鲁大学教授在当地农民引导下重新发现了这座"失落之城"。' },
      { year: '1983年', event: '列入世界遗产', desc: '联合国教科文组织将马丘比丘列为世界文化与自然双重遗产。' },
    ],
    landmarks: [
      { name: '太阳神殿', era: '印加·约1450年', yearNum: 1450, wiki: 'Coricancha', gradient: 'linear-gradient(135deg, #1A3A1A 0%, #4A8A4A 50%, #0D2A0D 100%)', desc: '半圆形建筑精确对准冬至日出方向，展现了印加人卓越的天文学知识。石墙贴合之紧密，无法插入一张纸。', hours: '06:00—17:00', ticket: '含在马丘比丘门票内', note: '冬至日（6月21日）阳光会精确穿过特定窗口。', tags: ['印加天文', '石砌技术', '太阳崇拜'],
        worldEvents: [
          { flag: '🇩🇪', city: '美因茨', event: '古腾堡刚刚发明活字印刷术，即将改变人类文明进程' },
          { flag: '🇹🇷', city: '伊斯坦布尔', event: '君士坦丁堡刚刚陷落（1453年），奥斯曼帝国开始新纪元' }
        ]
      },
      { name: '拴日石（Intihuatana）', era: '印加·约1450年', yearNum: 1450, wiki: 'Intihuatana', gradient: 'linear-gradient(135deg, #2A3A2A 0%, #6B8A5A 50%, #1A2A1A 100%)', desc: '这块精心雕刻的花岗岩被认为是印加人的天文仪器，在春分和秋分时太阳正好悬在石柱正上方，不投下任何影子。', hours: '随马丘比丘开放', ticket: '含门票', note: '曾在拍摄啤酒广告时被损坏，现已围栏保护。', tags: ['天文仪器', '印加圣石', '春秋分标记'] },
      { name: '华纳比丘', era: '印加时期', yearNum: 1450, wiki: 'Huayna Picchu', gradient: 'linear-gradient(135deg, #0A2A0A 0%, #3A6A3A 50%, #0D1A0D 100%)', desc: '马丘比丘背后的尖峰，攀登需约1小时。山顶可俯瞰整个马丘比丘遗址和乌鲁班巴河谷的壮观景色。', hours: '07:00—08:00 入场（两批次）', ticket: '需额外购票，每日限400人', note: '路径陡峭且窄，恐高者慎行。必须提前数月预约。', tags: ['徒步登山', '全景视角', '限额参观'] },
    ]
  },
];
