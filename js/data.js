const THEMES = [
  { id: 'imperial', name: '帝都传奇', emoji: '👑', cover: 'Forbidden City', gradient: 'linear-gradient(135deg, #8B1A1A 0%, #C9963A 100%)' },
  { id: 'ancient', name: '古代奇迹', emoji: '🏛', cover: 'Great Pyramid of Giza', gradient: 'linear-gradient(135deg, #4A3A1A 0%, #C9963A 100%)' },
  { id: 'silk-road', name: '丝绸之路', emoji: '🐪', cover: 'Mogao Caves', gradient: 'linear-gradient(135deg, #6B4C11 0%, #8B6914 100%)' },
  { id: 'maritime', name: '海洋文明', emoji: '⚓', cover: 'Lighthouse of Alexandria', gradient: 'linear-gradient(135deg, #0A2A4A 0%, #1A6B9A 100%)' },
  { id: 'religion', name: '信仰之城', emoji: '🕌', cover: 'Interior of Hagia Sophia', gradient: 'linear-gradient(135deg, #2A1A3A 0%, #6A4A8B 100%)' },
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
    wiki: 'Forbidden City',
    heroGradient: 'linear-gradient(160deg, #1a3a20 0%, #0c1810 60%, #3d1a00 100%)',
    hook: '从商周燕国到明清帝都，3000年从未停歇',
    heroQuote: '1420年，紫禁城落成时，欧洲还在黑暗的中世纪里苦熬最后30年',
    tagline: '🏛 帝国首都 · 3000年',
    overview: '北京是中华文明的核心，三千年城市史与八百年帝都传统在此交汇。从商周燕国到明清紫禁城，这座城市见证了无数王朝的兴衰更迭，至今仍是中国的政治与文化中心。',
    timeline: [
      { year: '约公元前1044年', event: '燕国建城', desc: '西周分封，召公奭受封燕地，于今北京西南建城，史称“蓟”，是北京城市史的起点。' },
      { year: '公元938年', event: '辽代南京', desc: '契丹辽朝将燕京升格为南京，作为五京之一，城市规模大幅扩张。', worldContext: '北宋刚建立 18 年，欧洲神圣罗马帝国奥托一世正在重建西方皇权；玛雅古典期刚刚崩塌' },
      { year: '1153年', event: '金朝迁都中都', desc: '金海陵王完颜亮迁都至此，北京首次成为全国性政治中心。' },
      { year: '1271年', event: '元大都建成', desc: '忽必烈命刘秉忠规划建造元大都，棋盘式格局奠定了现代北京城市骨架。', worldContext: '马可·波罗即将启程东方，将看见这座世界最大城市；欧洲正处十字军东征末期' },
      { year: '1406年', event: '永乐迁都·紫禁城破土', desc: '明成祖朱棣动员逾百万工匠，历时十四年建成紫禁城，共有宫殿九千余间。', worldContext: '明朝郑和次年首次下西洋；佛罗伦萨布鲁内莱斯基正在建造圣母百花大教堂穹顶；奥斯曼帝国还有 47 年攻陷君士坦丁堡' },
      { year: '1644年', event: '清军入关定鼎', desc: '清朝延续并扩建明代宫城格局，增建颐和园、圆明园等皇家园林。' },
      { year: '1860年', event: '英法联军火烧圆明园', desc: '第二次鸦片战争中圆明园被焚毁，成为中国近代史上最深重的文化创伤之一。', worldContext: '美国南北战争即将爆发（1861）；日本黑船事件后 7 年，明治维新 8 年后到来；印度莫卧儿王朝两年前刚覆灭' },
      { year: '1949年', event: '中华人民共和国成立', desc: '毛泽东在天安门城楼宣告建国，北京成为新中国首都。' },
    ],
    landmarks: [
      { name: '故宫（紫禁城）', era: '明·1420年', yearNum: 1420, wiki: 'Hall of Supreme Harmony', gradient: 'linear-gradient(135deg, #8B1A1A 0%, #C9963A 50%, #2D1B00 100%)', desc: '紫禁城是明清两朝的皇家宫殿，南北长960米，东西宽753米，共有房屋九千余间，是世界上现存规模最大、保存最完整的木质结构古建筑群。', hours: '淡季 08:30—17:00；旺季 08:30—17:30，周一闭馆', ticket: {
  price: '旺季 ¥60（4-10 月）/ 淡季 ¥40（11 月-次年 3 月）；珍宝馆 +¥10，钟表馆 +¥10',
  channels: [
    { name: '官方故宫博物院', url: 'https://gugong.228.com.cn/', note: '唯一官方渠道，需实名制预约' }
  ],
  bookingWindow: {
    peak:     '旺季 7-8 月 / 十一 / 春节：提前 7 天 8:00 准时抢',
    shoulder: '春秋肩季：提前 3-5 天',
    offpeak:  '淡季 12-2 月：1-2 天即可'
  },
  timingTip: '周二-周五 8:30 开门即入场，1 小时内可拍到无人太和殿广场；周一闭馆（法定节假日除外）'
}
        , note: '需提前在官网实名制预约购票，每日限流8万人次。', tags: ['世界文化遗产', '明清建筑', '皇家宫殿'],
        worldEvents: [
          { flag: '🇹🇷', city: '伊斯坦布尔', event: '奥斯曼帝国正积蓄力量，33年后将攻陷君士坦丁堡' },
          { flag: '🇮🇹', city: '佛罗伦萨', event: '文艺复兴萌芽，布鲁内莱斯基正在建造圣母百花大教堂穹顶' },
          { flag: '🇫🇷', city: '法国', event: '圣女贞德即将改变百年战争的走向' }
        ]
      ,
        tips: [
  { category: 'ticket', text: '全票含绝大部分宫殿，钟表馆 / 珍宝馆各加 ¥10，不看省 ¥20' },
  { category: 'timing', text: '周二-周五 8:30 开门前 10 分钟到午门，1 小时内可拍到空无一人的太和殿广场' },
  { category: 'photo',  text: '从神武门出穿过护城河、再向南 100 米回望，能把景山白塔框进紫禁城屋脊线' },
  { category: 'route',  text: '中轴线走完后往东走东六宫比西六宫人少 40%，延禧宫里就是珍宝馆' },
  { category: 'season', text: '12 月初雪后太和殿是封神机位，但门票需提前 7 天 8:00 准时抢' },
  { category: 'secret', text: '珍宝馆往深处走有珍妃井旁的皇家澡堂遗址，90% 游客看完大殿就走错过了' }
]
      },
      { name: '长城（八达岭段）', era: '秦·公元前214年', yearNum: -214, wiki: 'Great Wall of China', gradient: 'linear-gradient(135deg, #3D5A3E 0%, #8aad96 50%, #1a2d22 100%)', desc: '万里长城始建于春秋战国，总长度超过21,000公里，是人类历史上最伟大的建筑工程之一。', hours: '旺季 07:30—18:00；淡季 08:00—17:00', ticket: {
  price: '八达岭 ¥40（旺季 4-10 月 ¥40 / 淡季 11-3 月 ¥35）；慕田峪 ¥45；司马台（含夜游）¥40+',
  channels: [
    {
      name: '官方 badaling.cn',
      url: 'https://www.badaling.cn/', // ✋ Dev 核对八达岭官网
      note: '实名购票 + 七日预约窗口，法定节假日当天窗口 08:00 会瞬间抢光'
    },
    {
      name: '美团 / 飞猪（含直通车）',
      url: 'https://www.meituan.com/',
      note: '一日往返直通车 ¥120 左右（含门票），比自己打车+挤地铁省 3 小时'
    }
  ],
  bookingWindow: {
    peak:     '旺季（清明 / 五一 / 国庆 / 10 月红叶周 / 周末）：提前 3-7 天抢，节假日当天 08:00 开放预约即售罄',
    shoulder: '工作日春秋：提前 1-2 天，凌晨之前都有余票'
  },
  timingTip: '八达岭早 07:30 第一波进场人最少，10:00 后北 8 楼以上大爷大妈挤满；想清静选工作日或改去慕田峪——人流量只有八达岭 1/3'
} // ✋ Dev 上线前核对：badaling.cn 现行价 / 预约窗口 / 淡旺季分界
        , note: '慕田峪段人较少且风景更好。', tags: ['世界文化遗产', '秦汉工程', '明代修缮'],
        worldEvents: [
          { flag: '🇮🇹', city: '罗马', event: '刚刚击败汉尼拔，罗马共和国正在崛起为地中海霸主' },
          { flag: '🇬🇷', city: '亚历山大里亚', event: '托勒密王朝建设亚历山大图书馆，汇聚人类知识的巅峰' }
        ]
      ,
        tips: [
  {
    category: 'ticket',
    text: '八达岭必须实名预约，当天窗口不开放；节假日提前 7 天在 badaling.cn 抢，08:00 整点开放' // ✓ 锚点：具体时间 08:00 + 具体名字 badaling.cn
  },
  {
    category: 'timing',
    text: '长城南段（南 4-7 楼）爬升平缓 40 分钟，北段（北 8 楼以上）坡度 45°单程 90 分钟，带老人走南段' // ✓ 锚点：数字 40/90 分钟 / 45° + 具体方向南段北段
  },
  {
    category: 'walking',
    text: '北京德胜门 877 路公交直达 ¥12，1.5 小时到景区，比 S2 火车准时；回程建议坐缆车下到北 4 楼转地面车省腿' // ✓ 锚点：具体名字 877 路 / S2 + 数字 ¥12 / 1.5 小时
  },
  {
    category: 'cold',
    text: '海拔 1000 米 + 风口地形，冬季实际温度比北京市区低 8-10℃，11 月至次年 3 月必戴帽子围巾' // ✓ 锚点：数字 1000 米 / 8-10℃ + 具体时间 11-3 月
  },
  {
    category: 'photo',
    text: '北 5 楼到北 8 楼之间的城墙转折处是最经典构图，避开正午逆光选上午 09:00-10:30 向北拍' // ✓ 锚点：具体方向北 5-8 楼 + 具体时间 09:00-10:30
  }
]
      },
      { name: '天坛', era: '明·1420年', yearNum: 1420, wiki: 'Temple of Heaven', gradient: 'linear-gradient(135deg, #1A4A7A 0%, #4A90C4 50%, #0d2940 100%)', desc: '天坛是明清两代皇帝祭天祈谷的场所，祈年殿三层蓝色琉璃瓦攒尖顶，纯木榫卯结构，被誉为中国古代建筑的杰作。', hours: '公园 06:00—22:00；景区 08:00—17:30', ticket: {
  price: '联票 ¥35（旺季 4-10 月） / ¥30（淡季）；公园门票 ¥15；60 岁以上免费',
  channels: [
    {
      name: '官方天坛公园 tiantanpark.com',
      url: 'https://www.tiantanpark.com/', // ✋ Dev 核对域名与预约路径
      note: '联票含祈年殿 + 圜丘 + 回音壁三大主体建筑，散票只能进外园'
    }
  ],
  bookingWindow: '建议提前 1 天预约；大爷大妈晨练不占额度，08:30 景区开放前进公园不用票',
  timingTip: '祈年殿 09:00 开门第一波最少人，下午 14:00 之后团队导游潮退去空两小时；想看老人打太极 / 唱京剧选 07:00-08:00 公园时段'
} // ✋ Dev 上线前核对：tiantanpark.com 预约规则 / 联票现行价
        , note: '清晨可欣赏居民打太极、唱京剧。', tags: ['世界文化遗产', '皇家祭坛', '声学奇观'] ,
        tips: [
  {
    category: 'ticket',
    text: '公园门票 ¥15 能让你进外园看老北京生活，要进祈年殿 / 圜丘必须买 ¥35 联票' // ✓ 锚点：数字 ¥15 / ¥35 + 只有去过才知道
  },
  {
    category: 'timing',
    text: '07:00-08:30 公园时段大爷大妈晨练，太极 / 京剧 / 踢毽子扎堆，比祈年殿本身更值得看' // ✓ 锚点：具体时间 07:00-08:30 + 只有去过才知道
  },
  {
    category: 'walking',
    text: '南门（昭亨门）进入直奔圜丘 + 回音壁 + 祈年殿一条直线走 1 小时刚好；北门进反向走腿累' // ✓ 锚点：具体名字南门昭亨门 + 数字 1 小时 + 具体方向
  },
  {
    category: 'photo',
    text: '祈年殿西侧 30 米白石栏杆处可以把三层琉璃瓦攒尖顶整个框进镜头，正南拍只能拍到圆殿半边' // ✓ 锚点：具体方向西侧 30 米 + 只有去过才知道
  }
]
      },
      { name: '颐和园', era: '清·1750年', yearNum: 1750, wiki: 'Summer Palace', gradient: 'linear-gradient(135deg, #2D6A4F 0%, #74C69D 50%, #1B4332 100%)', desc: '颐和园占地约290万平方米，万寿山与昆明湖相映，长廊、佛香阁、十七孔桥构成中国皇家园林最后的绝唱。', hours: '旺季 06:30—18:00；淡季 07:00—17:00', ticket: {
  price: '联票 ¥50（旺季） / ¥30（淡季）；公园门票 ¥30 / ¥20；德和园 / 佛香阁需另买',
  channels: [
    {
      name: '官方 summerpalace-china.com',
      url: 'https://www.summerpalace-china.com/', // ✋ Dev 核对域名
      note: '全园 290 万平米，联票覆盖佛香阁 / 德和园 / 文昌院几大重点'
    }
  ],
  bookingWindow: '工作日可当天买票，节假日与樱花季（4 月）需提前 2-3 天预约',
  timingTip: '东宫门进入顺长廊向西走到佛香阁 + 十七孔桥，全程 3 小时；冬季昆明湖结冰 1 月上旬开始可上冰，是北京少见的可滑行湖面'
} // ✋ Dev 上线前核对：summerpalace-china.com 现行价 / 结冰时间
        , note: '冬季昆明湖结冰时可在湖面滑冰。', tags: ['世界文化遗产', '皇家园林', '山水园林'],
        worldEvents: [
          { flag: '🇫🇷', city: '巴黎', event: '启蒙运动如火如荼，伏尔泰和卢梭正在改变欧洲思想' },
          { flag: '🇺🇸', city: '北美', event: '距美国独立宣言还有26年，殖民地已暗流涌动' }
        ]
      ,
        tips: [
  {
    category: 'ticket',
    text: '¥50 联票进佛香阁要爬 60 级台阶，膝盖不便选 ¥30 公园门票只看长廊 + 昆明湖足够' // ✓ 锚点：数字 ¥50/60 级/¥30 + 只有去过才知道
  },
  {
    category: 'timing',
    text: '十七孔桥冬至前后 6 天（12 月 18-23 日）日落时金光穿过 17 孔全部桥洞，当天聚集几千摄影师' // ✓ 锚点：具体时间 12 月 18-23 日 + 数字 17 孔 + 只有去过才知道
  },
  {
    category: 'walking',
    text: '北宫门地铁西郊线到，从万寿山北坡下到昆明湖是最短路线；东宫门走到佛香阁需要 40 分钟长廊' // ✓ 锚点：具体名字北宫门 / 西郊线 + 数字 40 分钟 + 具体方向 |
  },
  {
    category: 'cold',
    text: '1 月中至 2 月中昆明湖面结冰 20 厘米以上可租冰车在湖面滑行 ¥60/小时，冰鞋 / 冰车在东堤有租' // ✓ 锚点：数字 20 厘米 / ¥60 + 具体时间 1-2 月
  }
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
      { year: '公元前509年', event: '共和国建立', desc: '罗马人驱逐最后一位国王，建立共和政体。', worldContext: '波斯阿契美尼德帝国鼎盛，大流士一世正在修建波斯波利斯；同时孔子在山东曲阜周游列国，刚结束他的政治生涯' },
      { year: '公元前44年', event: '凯撒遇刺', desc: '凯撒在元老院被刺杀，此后屋大维建立帝国。', worldContext: '汉武帝已驾崩 43 年，西汉进入霍光辅政后期；埃及托勒密王朝末代女王克里奥帕特拉正与罗马博弈' },
      { year: '公元80年', event: '斗兽场落成', desc: '科洛塞姆竣工，可容纳5万至8万观众。' },
      { year: '公元313年', event: '基督教合法化', desc: '君士坦丁颁布米兰敕令，罗马逐渐成为基督教世界的精神中心。', worldContext: '中国西晋八王之乱刚结束，匈奴攻陷洛阳；印度笈多王朝即将建立，古典梵文文学进入黄金期' },
      { year: '公元476年', event: '西罗马帝国覆灭', desc: '末代皇帝被废黜，欧洲进入中世纪。', worldContext: '中国南北朝对峙，北魏孝文帝准备汉化改革；玛雅文明进入古典期鼎盛，蒂卡尔城邦建成' },
      { year: '1506年', event: '圣彼得大教堂重建', desc: '米开朗基罗、拉斐尔等大师参与，历时120余年建成。', worldContext: '哥伦布去世，麦哲伦环球航行前 13 年；明朝正德元年，紫禁城已建成 86 年；印加帝国进入鼎盛晚期' },
      { year: '1871年', event: '罗马成为意大利首都', desc: '意大利军队进占罗马，结束教皇国对罗马的统治。' },
    ],
    landmarks: [
      { name: '科洛塞姆（斗兽场）', era: '公元72—80年', yearNum: 80, wiki: 'Colosseum', gradient: 'linear-gradient(135deg, #5C3317 0%, #C9963A 50%, #2A1500 100%)', desc: '科洛塞姆是罗马帝国修建的椭圆形竞技场，长轴188米、高约50米，其拱券结构深刻影响了西方建筑两千年。', hours: '09:00—19:00（夏季延至20:00）', ticket: {
  price: '€18（Colosseo + Foro Romano + Palatino 联票，48h 内有效）',
  channels: [
    { name: '官方 CoopCulture',  url: 'https://ecm.coopculture.it/',                  note: '最便宜；系统偶尔崩，提前 15 天开售' },
    { name: 'Klook',              url: 'https://www.klook.com/activity/1242-colosseum-tour-rome/', note: '中文界面，可退改，含中文导览' },
    { name: 'Tiqets',             url: 'https://www.tiqets.com/en/rome-attractions-c66352/tickets-for-colosseum/', note: '快速预约，移动票' }
  ],
  bookingWindow: {
    peak:     '旺季 6-8 月 / 十一黄金周：2-4 周',
    shoulder: '春秋肩季（4-5 月 / 9-10 月）：3-7 天',
    offpeak:  '淡季 12-2 月：1-3 天或当日'
  },
  timingTip: '开门前 8:30 到队伍最短，或落日前 16:30 后光线最美；避开 11-14 团客高峰'
}
        , note: '强烈建议网上预约跳过排队。', tags: ['世界文化遗产', '古罗马', '建筑奇迹'],
        worldEvents: [
          { flag: '🇨🇳', city: '中国', event: '东汉时期，班超经营西域，打通丝绸之路东段' },
          { flag: '🇮🇱', city: '耶路撒冷', event: '第二圣殿刚刚被罗马军队摧毁（公元70年），犹太人开始大流散' }
        ]
      ,
        tips: [
  { category: 'ticket', text: '联票 48h 有效含古罗马广场 + 帕拉蒂尼山，分两天玩省 €16 票钱' },
  { category: 'timing', text: '开门前 8:30 到排队 <15 分钟；落日前 16:30 后入场光线最美' },
  { category: 'photo',  text: '从康斯坦丁凯旋门方向拍西立面，16:30 后夕阳正打在断面上' },
  { category: 'route',  text: '出斗兽场走地铁 B 线 Colosseo 站一站到 Circo Massimo，再步行 8 分钟到真理之口' },
  { category: 'season', text: '12-2 月淡季无排队、票价不变；下午 4 点就天黑，要抓紧上午时间' },
  { category: 'secret', text: '加购 Arena Floor + Underground（+€9）能走角斗士通道，90% 游客不知道这个入口' }
]
      },
      { name: '万神殿（Pantheon）', era: '公元125年', yearNum: 125, wiki: 'Pantheon, Rome', gradient: 'linear-gradient(135deg, #4A3728 0%, #D4A96A 50%, #1E150D 100%)', desc: '万神殿圆顶直径43.3米，此后1300年无人超越。穹顶以火山灰混凝土浇筑，无一支柱。', hours: '09:00—19:00', ticket: {
  price: '€5（欧盟青年 €2；周一至周五早 09:00 前免费，需预约）',
  channels: [
    {
      name: '官方 museiitaliani.it',
      url: 'https://www.museiitaliani.it/', // ✋ Dev 核对具体万神殿跳转页
      note: '最官方，时段粒度 15 分钟'
    },
    {
      name: 'GetYourGuide（跳过排队 + 导览）',
      url: 'https://www.getyourguide.com/',
      note: '加约 €10 服务费，含 45 分钟语音导览，旺季推荐'
    }
  ],
  bookingWindow: {
    peak:     '旺季（7-8 月、复活节周、圣诞周）：提前 5-10 天锁时段，下午 14:00-16:00 最紧',
    shoulder: '春秋肩季（4-6 月、9-10 月）：提前 2-3 天即可，工作日上午 09:30 前通常有余票',
    offpeak:  '淡季（11 月、1-2 月）：当天现场基本都能进，排队不超过 20 分钟'
  },
  timingTip: '想拍到穹顶圆孔（oculus）光柱照地面，选正午前后 11:30-13:00 来；周日 10:30 有弥撒，不能拍照但能听管风琴'
} // ✋ Dev 上线前核对：官方 URL 具体路径 / 现行票价
        , note: '雨天从穹顶圆孔落入的雨水通过地板排水孔流走。', tags: ['古罗马', '最佳保存古迹', '混凝土穹顶'],
        worldEvents: [
          { flag: '🇨🇳', city: '中国', event: '东汉蔡伦改进造纸术，人类信息传播迎来革命' },
          { flag: '🇮🇳', city: '印度', event: '贵霜帝国鼎盛，犍陀罗艺术将佛像传向东方' }
        ]
      ,
        tips: [
  {
    category: 'ticket',
    text: '€5 官网订票；旺季下午时段两三天内会售罄，上午 09:00 前免费时段需提前一周预约' // ✓ 锚点：数字 €5 + 具体时间上午 09:00
  },
  {
    category: 'timing',
    text: '雨天不要避开——雨水从穹顶 8.7 米直径的圆孔落下，通过地面 22 个排水孔流走，是罗马人独有的奇观' // ✓ 锚点：数字 8.7 米 / 22 孔 + 只有去过才知道
  },
  {
    category: 'timing',
    text: '正午 11:30-13:00 阳光穿过 oculus 投射到南侧墙面，是拍穹顶的唯一窗口，其他时间都在暗处' // ✓ 锚点：具体时间 11:30-13:00 + 具体方向南侧
  },
  {
    category: 'photo',
    text: '正门广场有喷泉和方尖碑做前景，站在对面冰淇淋店 Giolitti 台阶上可以把整个门楣塞进画面' // ✓ 锚点：具体名字 Giolitti + 具体方向对面
  },
  {
    category: 'walking',
    text: '万神殿距离纳沃纳广场步行 4 分钟、许愿池 8 分钟，半天可串联，穿软底鞋——鹅卵石硬' // ✓ 锚点：数字 4 / 8 分钟 + 只有去过才知道（鹅卵石硬）
  }
]
      },
      { name: '梵蒂冈圣彼得大教堂', era: '1506—1626年', yearNum: 1626, wiki: "St. Peter's Basilica", gradient: 'linear-gradient(135deg, #1A1A4A 0%, #6A7FBF 50%, #0D0D2A 100%)', desc: '圣彼得大教堂是天主教世界最神圣的教堂，米开朗基罗设计的穹顶高达136米。', hours: '教堂 07:00—19:00；穹顶 08:00—18:00', ticket: {
  price: '教堂本身免费；登穹顶 €8（走楼梯）/ €10（电梯 + 楼梯）',
  channels: [
    {
      name: '官方 ticketsbasilica.va',
      url: 'https://www.ticketsbasilica.va/', // ✋ Dev 核对根域
      note: '唯一官方预约入口；免费预约跳过大门安检长队，旺季能省 2 小时'
    },
    {
      name: 'Vatican Museums 联票',
      url: 'https://m.museivaticani.va/',
      note: '博物馆 €20 + 西斯廷礼拜堂 + 圣彼得穹顶的经典路线，6 小时一站式'
    }
  ],
  bookingWindow: {
    peak:     '旺季（复活节前后、6-8 月、圣诞）：安检长队 90-180 分钟，穹顶必须提前 1-2 周抢',
    shoulder: '春秋（3-5 月中、9-10 月）：安检 30-60 分钟，穹顶提前 3-5 天可订'
  },
  timingTip: '周三上午 10:30 教皇在圣彼得广场公开接见，当天整个区域戒严、教堂 12:30 前不开放——想进教堂务必避开周三上午；周日早 10:30 也常有大弥撒，同理'
} // ✋ Dev 上线前核对：ticketsbasilica.va 预约流程是否改动 / 穹顶现行票价
        , note: '进入需着装保守。登穹顶约330级阶梯。', tags: ['世界文化遗产', '文艺复兴', '巴洛克'] ,
        tips: [
  {
    category: 'ticket',
    text: '教堂本身免费但安检长队旺季超过 2 小时；ticketsbasilica.va 免费预约 Skip the Line，是全网最值的操作' // ✓ 锚点：数字 2 小时 + 具体名字 ticketsbasilica.va
  },
  {
    category: 'dress',
    text: '肩膀和膝盖必须遮盖，保安门口严查——男士穿短裤、女士吊带都会被拦下；带条披肩应急' // ✓ 锚点：只有去过才知道（保安严）+ 具体细节（披肩）
  },
  {
    category: 'timing',
    text: '避开周三上午 10:30 教皇公开接见和周日 10:30 大弥撒，这两段教堂关闭或人挤人' // ✓ 锚点：具体时间 10:30 + 具体名字
  },
  {
    category: 'timing',
    text: '穹顶每天最后售票 16:00（冬 15:00）；想登顶又不累，选下午 14:00 后、排队比上午少一半' // ✓ 锚点：具体时间 14:00/16:00 + 数字（一半）
  },
  {
    category: 'photo',
    text: '从 Via della Conciliazione 大街东端看穹顶最对称；登顶后西北角栏杆是俯瞰广场的黄金位，避开正面挤 20 人' // ✓ 锚点：具体名字 Via della Conciliazione + 具体方向西北角
  }
]
      },
      { name: '古罗马广场', era: '公元前7世纪起', yearNum: -600, wiki: 'Roman Forum', gradient: 'linear-gradient(135deg, #6B4C11 0%, #C9963A 45%, #3D2800 100%)', desc: '古罗马广场是共和国与帝国时代的政治、宗教和商业中心。', hours: '09:00—日落前1小时', ticket: {
  price: '€18（与斗兽场 + 帕拉蒂尼山联票，48 小时内三点通用）；第一个周日每月免费',
  channels: [
    {
      name: '官方 colosseo.it',
      url: 'https://www.colosseo.it/', // ✋ Dev 核对斗兽场联票子路径
      note: '与斗兽场共用同一张票，买斗兽场自动包含广场入口'
    }
  ],
  bookingWindow: '建议提前 3-5 天（与斗兽场同步），淡季现场通常有票，旺季联票会售罄',
  timingTip: '开园 09:00 第一波进场光线最柔且人少；下午 15:00 后光线变硬但是帕拉蒂尼山俯瞰广场全景的黄金时段'
} // ✋ Dev 上线前核对：colosseo.it 联票页面 / 每月免费日规则
        , note: '建议由帕拉丁山高处俯瞰全貌。', tags: ['古罗马', '考古遗迹', '共和国遗址'] ,
        tips: [
  {
    category: 'ticket',
    text: '€18 联票 48 小时内可反复进出斗兽场 / 广场 / 帕拉蒂尼山三点，一次买票拆两天用最划算' // ✓ 锚点：数字 €18 / 48 小时 + 只有去过才知道
  },
  {
    category: 'timing',
    text: '广场占地 25 万平米走完至少 2 小时；开门 09:00 第一波入场人最少，夏季中午地表 40℃ 无遮阴' // ✓ 锚点：数字 25 万平米 / 2 小时 / 40℃ + 具体时间
  },
  {
    category: 'walking',
    text: '从斗兽场地铁站出来向帕拉蒂尼山入口走 Via di San Gregorio，排队比广场正门 Via dei Fori Imperiali 少一半' // ✓ 锚点：具体名字 Via di San Gregorio + 数字（一半）
  },
  {
    category: 'photo',
    text: '从帕拉蒂尼山东北角俯瞰整个广场是最经典构图，赛图尔尼乌斯神庙 8 根立柱做前景' // ✓ 锚点：具体方向东北角 + 具体名字（赛图尔尼乌斯神庙 8 根柱） + 只有去过才知道
  }
]
      },
    ]
  },
  {
    id: 'istanbul', name: '伊斯坦布尔', nameEn: 'Istanbul',
    country: '土耳其', countryFlag: '🇹🇷', continent: 'europe',
    themes: ['silk-road', 'maritime', 'imperial'],
    coords: "41°00'N 28°58'E",
    wiki: 'Sultan Ahmed Mosque',
    heroGradient: 'linear-gradient(160deg, #1a0a2a 0%, #0d0d1e 60%, #1a2a0a 100%)',
    hook: '横跨两洲，拜占庭与奥斯曼的帝国交替',
    heroQuote: '1453年5月29日，当奥斯曼大军攻破城墙的那一刻，中世纪结束了',
    tagline: '⚓ 两洲之门 · 2700年',
    overview: '伊斯坦布尔是世界上唯一横跨两大洲的城市。历经拜占庭帝国与奥斯曼帝国，积淀了东西方文明最深厚的交汇，每一块石头都镌刻着帝国兴亡的记忆。',
    timeline: [
      { year: '公元前657年', event: '拜占庭城建立', desc: '希腊移民在金角湾与博斯普鲁斯海峡交汇处建立殖民地。', worldContext: '中国春秋时代孔子出生前 106 年；印度佛陀出生前 100 年；罗马刚结束王政时代' },
      { year: '公元330年', event: '君士坦丁堡建都', desc: '君士坦丁大帝将帝国首都东迁，更名“新罗马”。', worldContext: '中国西晋刚统一 50 年；玛雅古典期开端；印度笈多王朝即将建立' },
      { year: '537年', event: '圣索菲亚大教堂落成', desc: '查士丁尼一世建造，穹顶直径31米，拜占庭建筑最高成就。' },
      { year: '1204年', event: '第四次十字军劫掠', desc: '十字军攻打君士坦丁堡，大量珍宝流失西方。', worldContext: '中国南宋偏安，金朝统治北方；成吉思汗正在统一蒙古诸部；玛雅古典期已崩溃' },
      { year: '1453年', event: '奥斯曼攻陷君士坦丁堡', desc: '穆罕默德二世率军攻破城墙，东罗马帝国灭亡。', worldContext: '明朝土木堡之变后 4 年，大明国力从鼎盛转衰；佛罗伦萨美第奇家族掌权；古腾堡印刷术改变欧洲' },
      { year: '1520—1566年', event: '苏莱曼大帝时代', desc: '奥斯曼帝国达到鼎盛，建筑师希南建造了数十座伟大建筑。' },
      { year: '1923年', event: '土耳其共和国建立', desc: '凯末尔建立共和国，迁都安卡拉。' },
    ],
    landmarks: [
      { name: '圣索菲亚大教堂', era: '拜占庭·537年', yearNum: 537, wiki: 'Hagia Sophia', gradient: 'linear-gradient(135deg, #4A2C0A 0%, #D4841A 45%, #C9963A 100%)', desc: '圣索菲亚是拜占庭建筑的顶峰之作，近千年来一直是世界上最大的教堂。', hours: '礼拜时间外开放 09:00—17:30', ticket: {
  price: '游客上层 €25（2024 年起实施），下层礼拜区对穆斯林免费',
  channels: [
    { name: '官方 muze.gov.tr', url: 'https://muze.gov.tr/', note: '土耳其文化部统一售票平台，英文界面' },
    { name: 'GetYourGuide',    url: 'https://www.getyourguide.com/hagia-sophia-l2728/', note: '英文可选，含语音导览' },
    { name: 'Tiqets',           url: 'https://www.tiqets.com/en/istanbul-attractions-c66346/tickets-for-hagia-sophia/', note: '快速预约，可跳现场排队' }
  ],
  bookingWindow: {
    peak:     '旺季 6-9 月：3-7 天（2024 改收费后排队反而减少）',
    shoulder: '4-5 月 / 10 月：1-3 天',
    offpeak:  '淡季 11-3 月：当日现场购票可'
  },
  timingTip: '每日 5 次伊斯兰祷告期间游客通道关闭，避开正午 13:00 左右的 Zuhr 祷告；女性需覆肩盖膝戴头巾，门口可免费借'
}
        , note: '进入需脱鞋，女性须遮盖头发。', tags: ['世界遗产', '拜占庭建筑', '穹顶奇迹'],
        worldEvents: [
          { flag: '🇨🇳', city: '中国', event: '南北朝时期，佛教在中国蓬勃发展，少林寺已建立两年' },
          { flag: '🇲🇽', city: '墨西哥', event: '特奥蒂瓦坎城正处鼎盛，太阳金字塔已矗立数百年' }
        ]
      ,
        tips: [
  { category: 'ticket', text: '2024 年起游客上层 €25，下层礼拜区对穆斯林免费；上层入口在建筑北侧独立门' },
  { category: 'timing', text: '每日 5 次祷告期间游客通道关闭，避开正午 13:00 左右的 Zuhr 和日落时的 Maghrib' },
  { category: 'dress',  text: '女性需覆肩盖膝戴头巾，门口可免费借；男性避免短裤，违规被劝退' },
  { category: 'photo',  text: '上层廊台北侧的《圣母与幼儿基督》马赛克最清晰，13:30 后西射阳光角度最佳' },
  { category: 'route',  text: '出圣索菲亚穿 Sultanahmet Square 广场 3 分钟到蓝色清真寺，两馆连看最省时' },
  { category: 'secret', text: '二楼楼梯口大理石栏杆上刻着 Halvdan 的北欧海盗涂鸦（9 世纪），在西南角人容易错过' }
]
      },
      { name: '蓝色清真寺', era: '奥斯曼·1616年', yearNum: 1616, wiki: 'Sultan Ahmed Mosque', gradient: 'linear-gradient(135deg, #0A2A4A 0%, #1A6B9A 50%, #0D3D6B 100%)', desc: '因内部2万余块伊兹尼克蓝色瓷砖得名，六座宣礼塔至今仍是活跃的礼拜场所。', hours: '日出—日落，礼拜期间关闭', ticket: {
  price: '免费进入；鞋套与塑料袋入口免费提供',
  channels: [
    {
      name: '官方说明 sultanahmetcamii.org',
      url: 'https://www.sultanahmetcamii.org/', // ✋ Dev 核对官网域名
      note: '不售票，但礼拜时段（每日 5 次 + 周五主麻）关闭游客入口，须按官网时刻表'
    },
    {
      name: 'GetYourGuide 联游（含圣索菲亚）',
      url: 'https://www.getyourguide.com/',
      note: '€30 左右半日游含导游与两座大建筑对比讲解'
    }
  ],
  bookingWindow: {
    peak:     '旺季（5-10 月）：无需订票但选时段——礼拜结束后 15 分钟入场人最少',
    shoulder: '淡季（11-3 月）：任何时段基本无排队'
  },
  timingTip: '周五 12:30-14:00 主麻礼拜严格闭门不对游客开放；想看照进 6 根宣礼塔的光晕选日出后 1 小时（夏季 06:30 / 冬季 08:30）东侧入口拍摄'
} // ✋ Dev 上线前核对：官网是否持续维护 / 礼拜时刻表
        , note: '与圣索菲亚步行仅需3分钟。', tags: ['奥斯曼建筑', '伊兹尼克瓷砖', '活跃清真寺'] ,
        tips: [
  {
    category: 'ticket',
    text: '完全免费，但必须避开每日 5 次礼拜；官网 sultanahmetcamii.org 右上角实时显示下次关闭时间' // ✓ 锚点：具体名字 sultanahmetcamii.org + 数字 5 次
  },
  {
    category: 'dress',
    text: '女性必须遮盖头发与肩膀，入口处免费借头巾；短裤 / 短裙会被拦下，建议围巾随身' // ✓ 锚点：只有去过才知道 + 具体细节（免费借）
  },
  {
    category: 'timing',
    text: '周五 12:30-14:00 主麻全程关闭；其他日子礼拜约 15-20 分钟一次，结束后先等 15 分钟再入场最空' // ✓ 锚点：具体时间 12:30-14:00 + 数字 15 分钟
  },
  {
    category: 'photo',
    text: '从圣索菲亚前的苏丹艾哈迈德广场正面看 6 根宣礼塔最对称，日落后 20 分钟灯光点亮是黄金时刻' // ✓ 锚点：具体名字苏丹艾哈迈德广场 + 数字 6 根 / 20 分钟
  },
  {
    category: 'walking',
    text: '与圣索菲亚隔广场相望步行 3 分钟，建议上午圣索菲亚 + 下午蓝色清真寺，两者光线方向相反' // ✓ 锚点：数字 3 分钟 + 只有去过才知道
  }
]
      },
      { name: '托普卡帕宫', era: '奥斯曼·1465年', yearNum: 1465, wiki: 'Topkapı Palace', gradient: 'linear-gradient(135deg, #2A1A0A 0%, #8B6914 50%, #4A3010 100%)', desc: '奥斯曼帝国苏丹的官邸，历时400余年持续扩建，占地约70万平方米。', hours: '09:00—18:45（夏季），周二闭馆', ticket: {
  price: '主宫 €35；后宫（Harem）加 €14；圣髑展区加 €14；全通票 €55',
  channels: [
    {
      name: '官方 muze.gov.tr',
      url: 'https://muze.gov.tr/', // ✋ Dev 核对托普卡帕子路径
      note: '土耳其文化旅游部统一售票；提前 15 天开放预约'
    },
    {
      name: 'Museum Pass Istanbul',
      url: 'https://muze.gen.tr/',
      note: '€105 五日通票含托普卡帕 + 圣索菲亚 + 考古博物馆，逛三处以上就回本'
    }
  ],
  bookingWindow: {
    peak:     '旺季（4-10 月）：提前 7-10 天，周末与法定节假日常售罄；后宫时段票尤紧',
    shoulder: '淡季（11-3 月、除圣诞周）：提前 2-3 天即可'
  },
  timingTip: '09:00 开园第一小时进主宫，10:30 后团队旅游巴士抵达；后宫必须单独预约时段，进园后立即去 Harem 售票处锁时间——中午之后只剩 15:00 后余票'
} // ✋ Dev 上线前核对：muze.gov.tr 托普卡帕价格 / 后宫时段制度
        , note: '哈莱姆宫需定时导览，入园后立即预约。', tags: ['奥斯曼帝国', '皇家宫殿', '世界遗产'],
        worldEvents: [
          { flag: '🇨🇳', city: '北京', event: '明朝天顺年间，紫禁城已矗立45年' },
          { flag: '🇮🇹', city: '佛罗伦萨', event: '洛伦佐·美第奇即将掌权，文艺复兴进入巅峰' }
        ]
      ,
        tips: [
  {
    category: 'ticket',
    text: '€35 主宫 + €14 后宫是必配——后宫才有苏丹私生活精华；只买主宫像去故宫不进内廷' // ✓ 锚点：数字 €35/€14 + 只有去过才知道
  },
  {
    category: 'timing',
    text: '09:00 开园后前 60 分钟人最少；后宫时段票旺季必须进园立刻抢，11:00 后只能选 15:00 后时段' // ✓ 锚点：具体时间 09:00/11:00/15:00 + 数字 60 分钟
  },
  {
    category: 'walking',
    text: '整个宫殿区 70 万平米分四个庭院，全看需 4-5 小时；想精简走第一 + 第三 + 第四庭院 + 后宫即可' // ✓ 锚点：数字 70 万 / 4-5 小时 + 具体名字第三第四庭院
  },
  {
    category: 'photo',
    text: '第四庭院的 Baghdad Kiosk 凉亭朝北望金角湾与加拉塔塔同框，是整个宫殿最佳观景位' // ✓ 锚点：具体名字 Baghdad Kiosk / 加拉塔塔 + 具体方向朝北
  },
  {
    category: 'ticket',
    text: '闭馆日是周二；旺季一日五票型全要 €55 通票，淡季选主宫 + 后宫 €49 即可' // ✓ 锚点：数字 €55/€49 + 具体时间周二
  }
]
      },
      { name: '大巴扎', era: '奥斯曼·1461年', yearNum: 1461, wiki: 'Grand Bazaar, Istanbul', gradient: 'linear-gradient(135deg, #4A0A0A 0%, #C94A1A 50%, #2A0A00 100%)', desc: '世界上最古老、最大的有顶集市之一，60余条街道、4000余间店铺。', hours: '周一至周六 08:30—19:00，周日闭馆', ticket: {
  price: '免费入场；内含 60 条街 4000 间店铺',
  channels: [
    {
      name: '官方 kapalicarsi.com.tr',
      url: 'https://www.kapalicarsi.com.tr/', // ✋ Dev 核对
      note: '无需购票；官网提供 21 个入口地图，Nuruosmaniye 门是最老入口'
    }
  ],
  bookingWindow: '无需预约；周日全天闭馆 / 周一至周六 08:30-19:00',
  timingTip: '周一上午 10:00 商家刚开店精神最足议价空间最大；周六下午 14:00 后当地人扎堆异常拥挤；斋月期间 18:00 后开斋仪式全部店铺停业 40 分钟'
} // ✋ Dev 上线前核对：官网是否维护 / 营业时间
        , note: '砍价是传统文化的一部分。', tags: ['丝绸之路', '历史集市', '商业文化'] ,
        tips: [
  {
    category: 'ticket',
    text: '完全免费；周日全天关闭，周一至周六 08:30 开门 19:00 关门' // ✓ 锚点：具体时间 08:30/19:00 + 具体时间周日关
  },
  {
    category: 'timing',
    text: '周一上午 10:00-12:00 是议价黄金窗口——商家刚开张急于开单，砍到标价 40-50% 常见' // ✓ 锚点：具体时间周一 10:00-12:00 + 数字 40-50%
  },
  {
    category: 'walking',
    text: 'Nuruosmaniye 东门进入是主干道 Kalpakçılar Caddesi 的起点，金饰店集中；想买地毯直走 150 米右转 Sandal Bedesten' // ✓ 锚点：具体名字 Kalpakçılar / Sandal Bedesten + 数字 150 米
  },
  {
    category: 'walking',
    text: '带现金里拉，大部分小店不刷卡或加 8% 手续费；ATM 在巴扎各入口都有' // ✓ 锚点：数字 8% + 只有去过才知道
  }
]
      },
    ]
  },
  {
    id: 'kyoto', name: '京都', nameEn: 'Kyoto',
    country: '日本', countryFlag: '🇯🇵', continent: 'asia',
    themes: ['religion', 'renaissance'],
    coords: "35°00'N 135°46'E",
    wiki: 'Arashiyama',
    heroGradient: 'linear-gradient(160deg, #2a1a3a 0%, #150d20 60%, #1a2a10 100%)',
    hook: '千年古都，茶道与禅宗的最后守护者',
    heroQuote: '二战中美军刻意绕过京都的轰炸，因为一位学者说“毁掉京都就是毁掉日本的灵魂”',
    tagline: '🎨 千年古都 · 1200年',
    overview: '京都是日本天皇都城长达1100年，积淀了日本文化最精华的层次：神社、寺院、茶道、能乐、传统庭园。二战期间美军刻意绕过京都的轰炸，使其成为保存最完好的古代都市之一。',
    timeline: [
      { year: '794年', event: '平安京迁都', desc: '桓武天皇以唐长安城为蓝本规划建造平安京，此后400年贵族文化绽放。', worldContext: '查理曼加冕前 6 年，西欧加洛林文艺复兴正炽；阿拉伯阿拔斯王朝建巴格达智慧宫；玛雅古典期接近尾声' },
      { year: '1185年', event: '武家时代开启', desc: '源氏在坛之浦海战中击败平氏，建立镰仓幕府。', worldContext: '南宋偏安江南，朱熹集理学大成；第三次十字军东征筹备中；吴哥窟刚建成半世纪进入鼎盛' },
      { year: '1338年', event: '室町幕府建立', desc: '足利尊氏在京都建立幕府，枯山水庭园、能乐、茶道在此时代形成。' },
      { year: '1467年', event: '应仁之乱', desc: '十年内战使京都遭受严重破坏，日本进入战国时代。', worldContext: '明朝成化年间；奥斯曼攻陷君士坦丁堡 14 年后；美第奇家族的洛伦佐掌权佛罗伦萨' },
      { year: '1603年', event: '德川幕府·江户时代', desc: '锁国政策下形成高度精炼的传统文化生态。', worldContext: '中国明末万历末期，利玛窦在北京传教刚 2 年；英国伊丽莎白一世去世同年，莎士比亚创作《哈姆雷特》' },
      { year: '1868年', event: '明治维新·首都东移', desc: '明治天皇迁都东京，结束京都1074年的都城地位。' },
    ],
    landmarks: [
      { name: '伏见稻荷大社', era: '奈良·711年', yearNum: 711, wiki: 'Fushimi Inari-taisha', gradient: 'linear-gradient(135deg, #7A1A0A 0%, #E84A1A 50%, #3D0D00 100%)', desc: '全日本3万余座稻荷神社的总本社，山道上绵延约4公里、多达10,000座朱红色鸟居。', hours: '24小时开放', ticket: {
  price: '免费；24 小时开放',
  channels: [
    {
      name: '官方 inari.jp',
      url: 'https://inari.jp/', // ✋ Dev 核对官网
      note: '神社本体免费，无购票流程；官网是时刻表 + 御朱印说明的唯一正式来源'
    },
    {
      name: 'JR 奈良线 · 稻荷站',
      url: 'https://www.jreast.co.jp/',
      note: 'JR 京都站出发 5 分钟到稻荷站，出站即是表参道，交通上无需其他工具'
    }
  ],
  bookingWindow: {
    peak:     '旺季（樱花 3 月底 / 红叶 11 月下 / 黄金周 / 初诣 1 月 1-3 日）：白天人山人海，必须选凌晨或深夜',
    shoulder: '春秋平季（4 / 5 / 10 月）：07:00 前 + 17:00 后仍能拍到空无一人的千本鸟居',
    offpeak:  '冬季（12-2 月，除初诣 / 情人节）：全天人都不算多，午后也能安静拍照'
  },
  timingTip: '想拍空无一人的千本鸟居只有两个窗口：凌晨 04:30-06:00 日出前 / 夜间 21:00 后（鸟居内有照明可安全行走）；白天每 3 分钟有游客入画'
} // ✋ Dev 上线前核对：inari.jp 现有内容 / 初诣期限流规则
        , note: '凌晨或深夜是鸟居最空旷神秘的时段。', tags: ['神道教圣地', '鸟居走廊', '奈良时代'],
        worldEvents: [
          { flag: '🇨🇳', city: '长安', event: '唐朝盛世，长安是世界上最繁华的城市，人口逾百万' },
          { flag: '🇪🇸', city: '西班牙', event: '同年（711年），阿拉伯军队渡过直布罗陀海峡征服伊比利亚' }
        ]
      ,
        tips: [
  {
    category: 'ticket',
    text: '完全免费 + 24 小时开放，是京都几乎唯一可以深夜进入的神社景点' // ✓ 锚点：数字 24 小时 + 只有去过才知道
  },
  {
    category: 'timing',
    text: '千本鸟居隧道深处白天游客密集；想拍空镜选凌晨 04:30-06:00 或 21:00 后，鸟居间隔仅 1-2 米' // ✓ 锚点：具体时间 04:30-06:00 + 数字 1-2 米
  },
  {
    category: 'walking',
    text: '登稻荷山一周全程 4 公里 + 233 米上升，来回约 2 小时；大多数游客止步于“奥社”之前，再往上人流减 80%' // ✓ 锚点：数字 4 公里 / 233 米 / 2 小时 / 80% + 具体名字奥社
  },
  {
    category: 'timing',
    text: '1 月 1-3 日初诣期间进香人数超 250 万，站在表参道寸步难行；想祈福避开这三天选 1 月 5 日起' // ✓ 锚点：具体时间 1 月 1-3 日 + 数字 250 万
  },
  {
    category: 'photo',
    text: '最经典的“千本鸟居”实际上只是第一段约 300 米的并列鸟居；想拍不被游客打搅从第二段“四ツ辻”继续往上' // ✓ 锚点：数字 300 米 + 具体名字四ツ辻 + 只有去过才知道
  },
  {
    category: 'cold',
    text: '山路湿滑 + 夜间无护栏，下雨天和冬季雪后非常滑；登山鞋或防滑底鞋比运动鞋安全' // ✓ 锚点：只有去过才知道 + 具体时间冬季
  }
]
      },
      { name: '金阁寺（鹿苑寺）', era: '室町·1397年', yearNum: 1397, wiki: 'Kinkaku-ji', gradient: 'linear-gradient(135deg, #1A3A1A 0%, #C9963A 45%, #0D2010 100%)', desc: '足利义满建造，三层阁楼以金箔贴覆，倒映于镜湖池中。1950年被纵火焚毁，1955年重建。', hours: '09:00—17:00', ticket: {
  price: '¥500 成人 / ¥300 中小学生；门票是写有“身守护”的护符，可留作纪念',
  channels: [
    {
      name: '官方 shokoku-ji.jp',
      url: 'https://www.shokoku-ji.jp/', // ✋ Dev 核对（金阁寺属相国寺派）
      note: '不网上售票，只能现场买；官网提供季节限流公告'
    },
    {
      name: '巴士一日券 + 金阁寺',
      url: 'https://www2.city.kyoto.lg.jp/',
      note: '京都巴士一日券 ¥700 可无限次乘市巴士，去金阁寺 + 龙安寺 + 仁和寺串游一天最划算'
    }
  ],
  bookingWindow: {
    peak:     '旺季（樱花 / 红叶 / 雪后）：09:00 开门前排队已 200 人，建议 08:30 到',
    shoulder: '平季：10:00 后人流可控，中午团队巴士潮退去'
  },
  timingTip: '金阁寺一小时能走完；雪后第一天开门是京都摄影界的“圣战日”，前一晚看天气预报当天 07:00 前到达能占前排'
} // ✋ Dev 上线前核对：shokoku-ji.jp / 票价 / 雪天特殊开放时段
        , note: '雪天或红叶期间的金阁是京都最美景象。', tags: ['世界遗产', '室町幕府', '金箔建筑'],
        worldEvents: [
          { flag: '🇨🇳', city: '南京', event: '明朝刚刚建立（1368年），朱元璋定都南京' },
          { flag: '🇹🇷', city: '伊斯坦布尔', event: '奥斯曼帝国在巴尔干半岛扩张，尼科波利斯战役刚结束' }
        ]
      ,
        tips: [
  {
    category: 'ticket',
    text: '¥500 一个人，门票本身是一张印有“身守护”的护符纸签，能带回家留念' // ✓ 锚点：数字 ¥500 + 只有去过才知道
  },
  {
    category: 'timing',
    text: '9:00 开门冲第一波（尤其镜湖池倒影段），10:30 后巴士团涌入参观动线变单行道' // ✓ 锚点：具体时间 9:00/10:30 + 只有去过才知道
  },
  {
    category: 'photo',
    text: '进门左转第一观景台（镜湖池南岸正对金阁）是最经典机位，雪后和红叶季需提前 20 分钟排队' // ✓ 锚点：具体方向左转南岸 + 数字 20 分钟
  },
  {
    category: 'walking',
    text: '与龙安寺 + 仁和寺构成“西北三寺”，公共巴士 59 号一条线串联，半天走完' // ✓ 锚点：具体名字 59 号 / 龙安寺 / 仁和寺 + 数字
  },
  {
    category: 'timing',
    text: '11 月下旬红叶季最佳，镜湖池畔枫树倒影能和金阁一起入画；5 月初新绿的青金阁同样稀有' // ✓ 锚点：具体时间 11 月下旬 / 5 月初 + 只有去过才知道
  }
]
      },
      { name: '二条城', era: '江户·1603年', yearNum: 1603, wiki: 'Nijo Castle', gradient: 'linear-gradient(135deg, #1A2A3A 0%, #4A7A9B 50%, #0D1A26 100%)', desc: '德川家康建造，以“莺张地板”著称。1867年末代将军在此宣布大政奉还。', hours: '08:45—16:00', ticket: {
  price: '入城料 ¥1,300；含二之丸御殿 ¥400 合计 ¥1,300（官网已整合）',
  channels: [
    {
      name: '官方 nijo-jocastle.city.kyoto.lg.jp',
      url: 'https://nijo-jocastle.city.kyoto.lg.jp/', // ✋ Dev 核对
      note: '京都市直营，网上订票 + 定时段入场'
    }
  ],
  bookingWindow: '工作日当天买票；樱花 3 月底 + 夜樱拝観 + 黄金周需提前 3-5 天',
  timingTip: '08:45 开门先冲二之丸御殿内“莺张地板”，早场脚步声最清晰；12:00 后团体导游进入走廊话术抢跑，听不见“唧唧”的木地板鸟叫声'
} // ✋ Dev 上线前核对：市府官网域名 / 票价
        , note: '莺张地板确实会发出声响。', tags: ['世界遗产', '德川幕府', '大政奉还'] ,
        tips: [
  {
    category: 'ticket',
    text: '¥1,300 已含二之丸御殿（唯一“莺张地板”走廊）；只买入城料不进御殿走不到黄金厅' // ✓ 锚点：数字 ¥1,300 + 只有去过才知道
  },
  {
    category: 'timing',
    text: '御殿 08:45 开放第一小时脚步声最响亮；中午之后团体涌入“唧唧”声被人声覆盖' // ✓ 锚点：具体时间 08:45 + 数字 1 小时 + 只有去过才知道
  },
  {
    category: 'walking',
    text: 'JR 地铁东西线“二条城前”站 1 号出口直达；整个城占地 27.5 万平米看完需 1.5 小时' // ✓ 锚点：具体名字二条城前 1 号 + 数字 27.5 万 / 1.5 小时
  },
  {
    category: 'photo',
    text: '本丸御殿庭园从东北角度望樱花与天守台石垣同框，是城内不为人知的机位' // ✓ 锚点：具体方向东北 + 具体名字本丸御殿 + 只有去过才知道
  }
]
      },
      { name: '清水寺', era: '平安·778年', yearNum: 778, wiki: 'Kiyomizu-dera', gradient: 'linear-gradient(135deg, #3A1A2A 0%, #8B4A6B 50%, #1A0D15 100%)', desc: '建于悬崖之上，本堂前舞台以139根木柱支撑，不用一颗钉子。', hours: '06:00—18:00', ticket: {
  price: '本堂 ¥500；夜间特别拝観 ¥500（春樱 3 月中-4 月初 / 夏青 8 月中 / 秋叶 11 月中-12 月初）',
  channels: [
    {
      name: '官方 kiyomizudera.or.jp',
      url: 'https://www.kiyomizudera.or.jp/', // ✋ Dev 核对
      note: '售票只有现场；官网提供夜间拝観三季的具体日期与时段'
    },
    {
      name: '京都巴士 206 / 100 号',
      url: 'https://www2.city.kyoto.lg.jp/',
      note: '206 号从京都站北侧出发 15 分钟到五条坂站，步行 10 分钟上坡到清水寺'
    }
  ],
  bookingWindow: {
    peak:     '旺季（樱花 3 月底 / 红叶 11 月中下 / 夜间拝観期）：06:00 开门前已排队，上坡的清水坂石阶挤到寸步难行',
    shoulder: '平季：07:00-09:00 是最佳时段，上坡店家未开门游客极少'
  },
  timingTip: '清水寺 06:00 开门是京都所有名景中最早的；夏季 05:30 天亮后就可登顶舞台看京都全景，是全城最早的“佛晓观景点”'
} // ✋ Dev 上线前核对：kiyomizudera.or.jp / 夜间拝観日期
        , note: '清晨6—7点光线最美且人最少。', tags: ['世界遗产', '悬崖建筑', '红叶名所'] ,
        tips: [
  {
    category: 'ticket',
    text: '本堂 ¥500；春 / 夏 / 秋三季夜间特别拝観每张 ¥500 另算，日夜是两张票' // ✓ 锚点：数字 ¥500 + 只有去过才知道
  },
  {
    category: 'timing',
    text: '06:00 开门是京都最早的景点，夏季日出 04:40 后先去清水坂空镜拍完再进寺' // ✓ 锚点：具体时间 06:00/04:40 + 只有去过才知道
  },
  {
    category: 'walking',
    text: '三年坂 + 二年坂 + 清水坂石阶路坡度陡 + 石板滑，穿平底软鞋；高跟鞋和平底拖鞋都会被石阶绊倒' // ✓ 锚点：具体名字三年坂二年坂清水坂 + 只有去过才知道
  },
  {
    category: 'photo',
    text: '本堂的“清水舞台”139 根木柱支撑、不用一颗铁钉；从三重塔北侧小路回望可拍到整座舞台悬在山腰' // ✓ 锚点：数字 139 根 + 具体方向北侧 + 具体名字三重塔
  },
  {
    category: 'timing',
    text: '红叶夜间拝観（11 月中-12 月初 17:30-21:00）清水寺是京都三大夜枫之首，提前 1 小时排队' // ✓ 锚点：具体时间 17:30-21:00 / 11 月中-12 月初 + 数字
  }
]
      },
    ]
  },
  {
    id: 'cairo', name: '开罗', nameEn: 'Cairo',
    country: '埃及', countryFlag: '🇪🇬', continent: 'africa',
    themes: ['ancient'],
    coords: "30°03'N 31°14'E",
    wiki: 'Great Pyramid of Giza',
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
      { year: '969年', event: '法蒂玛王朝建开罗', desc: '新城“al-Qāhira”即“胜利者”，是今日开罗之名由来。', worldContext: '中国北宋建立 9 年；欧洲神圣罗马帝国奥托一世加冕；基辅罗斯即将皈依东正教' },
      { year: '1250年', event: '马穆鲁克王朝建立', desc: '突厥系马穆鲁克奴隶兵推翻阿尤布王朝，开启 260 年伊斯兰黄金期。今日伊斯兰老城的主要清真寺学校（madrasa）与街区格局大多成型于此时。', worldContext: '中国南宋末期，蒙古已灭金；路易九世第七次十字军兵败曼苏拉被俘；忽必烈即位前 10 年' },
      { year: '1517年', event: '奥斯曼帝国并吞', desc: '开罗成为奥斯曼帝国最重要的行省城市。', worldContext: '马丁路德贴出《九十五条论纲》同年；明朝正德年间，王阳明刚提出“知行合一”；西班牙科尔特斯前一年即将征服阿兹特克' },
      { year: '1798年', event: '拿破仑远征埃及', desc: '随军学者系统记录古埃及文明，埃及学由此诞生。' },
    ],
    landmarks: [
      { name: '吉萨大金字塔群', era: '古王国·约前2560年', yearNum: -2560, wiki: 'Giza pyramid complex', gradient: 'linear-gradient(135deg, #4A3A1A 0%, #C9963A 45%, #8B6914 100%)', desc: '古代世界七大奇迹中唯一留存至今。胡夫金字塔使用约230万块石块，四个底边误差不超过5厘米。', hours: '08:00—17:00', ticket: {
  price: '吉萨高原总票 540 EGP ≈ ¥130；胡夫金字塔内部 900 EGP；哈夫拉 / 门卡乌拉内部 200 EGP',
  channels: [
    { name: '现场售票', url: null, note: '主入口 Sphinx Gate 售票处，仅接受现金或埃及本地卡' },
    { name: 'GetYourGuide', url: 'https://www.getyourguide.com/giza-l2727/', note: '含接送 + 英文导游的套餐' }
  ],
  bookingWindow: {
    peak:     '旺季 10-3 月（凉季）：现场直接买，无需提前；高端导游套餐需 3-7 天',
    shoulder: '4-5 月 / 9 月：当日现场',
    offpeak:  '盛夏 6-8 月：基本无人，随到随买'
  },
  timingTip: '7:00 开门前到 Sphinx Gate，9 点前完成参观避开正午 40℃+ 高温；骆驼/马夫开价要减到 1/3，一口价 200 EGP/小时即可'
}
        , note: '进入金字塔内部需极早排队，名额有限。', tags: ['世界文化遗产', '古代七大奇迹', '法老陵墓'],
        worldEvents: [
          { flag: '🇮🇶', city: '美索不达米亚', event: '苏美尔城邦文明正处鼎盛，楔形文字已发明数百年' },
          { flag: '🇬🇧', city: '英格兰', event: '巨石阵正在建造中，新石器时代的不列颠人举起巨石' }
        ]
      ,
        tips: [
  {
    category: 'ticket',
    text: '外围 EGP 540；进胡夫大金字塔需加购 EGP 900 限额票，每日两场（08:00 / 13:00）各 150 人，必须 07:30 前到门口抢' // ✓ 锚点：数字 EGP 540/900/150/07:30 + 具体时间 08:00/13:00
  },
  {
    category: 'timing',
    text: '08:00 开门第一波 + 16:00 闭园前 90 分钟是两大空窗；11:00-14:00 沙漠地表 48℃，骆驼都趴着' // ✓ 锚点：具体时间 08:00/16:00/11:00-14:00 + 数字 90 分钟/48℃
  },
  {
    category: 'walking',
    text: '整个金字塔群从胡夫到狮身人面像步行 1.5 公里全程黄沙；内部场地只能走不能骑车，骆驼是旅游配套不是交通工具' // ✓ 锚点：数字 1.5 公里 + 只有去过才知道
  },
  {
    category: 'photo',
    text: '想拍三座金字塔一张图，必须去“Panorama Point”全景位（门口向南 2 公里），大多数旅游团不到，骆驼队 EGP 200 来回' // ✓ 锚点：具体名字 Panorama Point + 具体方向南 2 公里 + 数字 EGP 200
  },
  {
    category: 'ticket',
    text: '狮身人面像 EGP 540 联票已含，不需单独购票；但光影秀（Sound and Light Show）EGP 430 另算，每晚 19:00 开场' // ✓ 锚点：数字 EGP 540/430 + 具体时间 19:00
  },
  {
    category: 'cold',
    text: '大金字塔内部通道 45° 上升 + 1.2 米低矮 + 无空调，50℃ 体感 + 封闭空间，幽闭症和膝盖不好者不要买内部票' // ✓ 锚点：数字 45°/1.2 米/50℃ + 只有去过才知道
  }
]
      },
      { name: '埃及博物馆', era: '近代·1902年', yearNum: 1902, wiki: 'Egyptian Museum', gradient: 'linear-gradient(135deg, #1A1A3A 0%, #6A4A8B 50%, #0D0D1E 100%)', desc: '收藏文物逾17万件，镇馆之宝包括图坦卡蒙法老的黄金面具。', hours: '09:00—17:00', ticket: {
  price: 'GEM 全馆 EGP 1,450（约 ¥220）；图坦卡蒙专展 EGP 1,700 独立购买',
  channels: [
    {
      name: '官方 visit-gem.com',
      url: 'https://visit-gem.com/', // ✋ Dev 核对（2026 新 GEM 官网）
      note: '网上预约定时段 + 跳过排队；现场窗口排队 60 分钟起'
    },
    {
      name: 'Klook / Viator 中文代购',
      url: 'https://www.klook.com/',
      note: '加 ¥30-50 服务费但有中文语音导览；图坦卡蒙专展必须搭配购买'
    }
  ],
  bookingWindow: {
    peak:     '旺季（10 月-次年 2 月 / 埃及凉季）：提前 3-5 天订图坦卡蒙专展；旺季周五 / 六现场完全售罄',
    shoulder: '夏季（6-8 月 50℃）：当天订都有票，游客量只有旺季 1/4'
  },
  timingTip: '09:00 开门直奔图坦卡蒙专展（每时段限流 150 人），晚半小时就排队；全馆 10 万件文物走完需 6 小时，挑 3 个精华展厅 3 小时足够'
} // ✋ Dev 上线前核对：visit-gem.com 上线后域名稳定 / 票价
        , note: '图坦卡蒙展品位于2楼正中心区域。', tags: ['埃及学', '图坦卡蒙', '法老文物'] ,
        tips: [
  {
    category: 'ticket',
    text: 'GEM 主馆 EGP 1,450 + 图坦卡蒙专展 EGP 1,700 是两张票；只买主馆进不了黄金面具展厅' // ✓ 锚点：数字 EGP 1,450/1,700 + 只有去过才知道
  },
  {
    category: 'timing',
    text: '09:00 开门冲图坦卡蒙展（每时段 150 人限流）；10:30 后团体涌入黄金面具前排队 30 分钟起' // ✓ 锚点：具体时间 09:00/10:30 + 数字 150/30 分钟
  },
  {
    category: 'walking',
    text: 'GEM 位于吉萨金字塔旁 2 公里，常与金字塔一日游串联；开罗市区打车 1 小时 EGP 400 起，Uber 便宜一半' // ✓ 锚点：数字 2 公里 / 1 小时 / EGP 400 + 只有去过才知道
  },
  {
    category: 'photo',
    text: '大阶梯大厅（Grand Staircase）87 件文物对应 87 代法老列成百米轴线，馆内最震撼机位，站在东南角向西北拍最对称' // ✓ 锚点：数字 87 件/87 代 + 具体方向东南-西北 + 具体名字 Grand Staircase
  },
  {
    category: 'ticket',
    text: '闭馆日无固定（与埃及伊斯兰节日挂钩），出发前一天官网查；斋月期间闭馆早 1 小时' // ✓ 锚点：数字 1 小时 + 只有去过才知道
  }
]
      },
      { name: '爱资哈尔清真寺', era: '法蒂玛·970年', yearNum: 970, wiki: 'Al-Azhar Mosque', gradient: 'linear-gradient(135deg, #0A2A1A 0%, #1A6B4A 50%, #0D3D26 100%)', desc: '附属大学建于975年，是世界上最古老的持续运作的大学之一。', hours: '09:00—17:00', ticket: {
  price: '清真寺免费；汗·哈利利市集免费进入',
  channels: [
    {
      name: 'Al-Azhar 大学官方介绍页',
      url: 'https://www.azhar.edu.eg/', // ✋ Dev 核对（属大学主网站）
      note: '清真寺无独立售票系统；大学官网提供礼拜时间与着装要求'
    }
  ],
  bookingWindow: '完全无需预约；礼拜时段游客暂停入内约 30 分钟',
  timingTip: '最佳时段是日落后 1 小时——清真寺灯光点亮 + 市集商家全部开张 + 温度从 40℃ 降至 28℃；白天中午市集半数店铺关门午休'
} // ✋ Dev 上线前核对：清真寺官网是否存在 / 礼拜时间
        , note: '周边汗·哈利利市集是购买香料、铜器的好去处。', tags: ['法蒂玛王朝', '最古老大学', '伊斯兰建筑'],
        worldEvents: [
          { flag: '🇯🇵', city: '京都', event: '平安时代，日本贵族文化绽放，《源氏物语》即将问世' },
          { flag: '🇨🇳', city: '中国', event: '北宋建立不久，活字印刷和火药技术正在改变世界' }
        ]
      ,
        tips: [
  {
    category: 'ticket',
    text: '完全免费但进清真寺必须脱鞋 + 穿长袖长裤；入口免费借头巾 / 长袍但排队 15 分钟' // ✓ 锚点：数字 15 分钟 + 只有去过才知道
  },
  {
    category: 'timing',
    text: '日落后 1 小时是黄金时段——清真寺灯光 + 市集全部开张 + 气温从 40℃ 降到 28℃；白天中午半数店铺午休' // ✓ 锚点：具体时间 + 数字 40℃/28℃
  },
  {
    category: 'walking',
    text: '汗·哈利利市集主街 Al-Muski 往北 200 米有 700 年历史的 Fishawi 咖啡馆，薄荷茶 EGP 40 是开罗最古老的体验之一' // ✓ 锚点：具体名字 Fishawi / Al-Muski + 数字 700 年 / 200 米 / EGP 40
  },
  {
    category: 'photo',
    text: '爱资哈尔清真寺北门的 Bab al-Muzayyinīn 大门夜间灯光照射下金色雕花最美，市集入口拱门也是开罗邮卡经典机位' // ✓ 锚点：具体名字 Bab al-Muzayyinīn + 具体方向北门
  }
]
      },
      { name: '萨拉丁城堡', era: '阿尤布·1183年', yearNum: 1183, wiki: 'Cairo Citadel', gradient: 'linear-gradient(135deg, #2A2A1A 0%, #6B6B2A 50%, #1A1A0A 100%)', desc: '位于穆卡塔姆山丘顶端，俯瞰整个开罗城。', hours: '08:00—17:00', ticket: {
  price: 'EGP 450 整体票（约 ¥68）；含穆罕默德·阿里清真寺 + 约瑟夫井 + 军事博物馆',
  channels: [
    {
      name: '官方门票 sca.gov.eg',
      url: 'https://sca.gov.eg/', // ✋ Dev 核对埃及文物部子路径
      note: '现场窗口为主；近年官网增加在线预售但依旧要打印凭证'
    }
  ],
  bookingWindow: '工作日当天买票，周五伊斯兰主麻礼拜期间清真寺关闭 12:30-14:00',
  timingTip: '16:30 日落前 1 小时是俯瞰开罗全城黄金时段——金字塔（西侧 15 公里）与全城尖塔群同时可见；白天烟雾缭绕拍不清远景'
} // ✋ Dev 上线前核对：sca.gov.eg 子路径 / 票价
        , note: '城堡顶部是俯瞰开罗全景的最佳位置。', tags: ['阿尤布王朝', '军事建筑', '俯瞰全城'] ,
        tips: [
  {
    category: 'ticket',
    text: 'EGP 450 整体票涵盖城堡内 4 个主要景点；单独买清真寺票不可行' // ✓ 锚点：数字 EGP 450 / 4 个 + 只有去过才知道
  },
  {
    category: 'timing',
    text: '16:30-17:30 日落前 1 小时是俯瞰全城黄金时段，向西可同框金字塔轮廓；白天沙尘拍不到' // ✓ 锚点：具体时间 16:30-17:30 + 具体方向西 + 只有去过才知道
  },
  {
    category: 'walking',
    text: '穆罕默德·阿里清真寺“雪花石”内饰 + 中央吊灯 365 盏对应一年每日；穿鞋套入场' // ✓ 锚点：具体名字穆罕默德·阿里 + 数字 365 盏 + 只有去过才知道
  },
  {
    category: 'dress',
    text: '女性进清真寺必须遮盖头发；入口处免费借头巾但数量有限，旺季自带围巾更稳' // ✓ 锚点：只有去过才知道
  }
]
      },
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
    heroQuote: '1889年，当埃菲尔铁塔拔地而起时，全巴黎的艺术家都在抗议这座“金属怪物”',
    tagline: '👑 光之都 · 2000年',
    overview: '巴黎是法国的心脏与灵魂。从中世纪的哥特大教堂到拿破仑的凯旋门，从印象派画家的塞纳河到香榭丽舍大道的华灯，这座城市将艺术、革命与浪漫编织成了人类文明最璀璨的篇章。',
    timeline: [
      { year: '约公元前3世纪', event: 'Parisii部落定居', desc: '凯尔特人的巴黎西族在塞纳河西岱岛定居，城市名称由此而来。' },
      { year: '508年', event: '克洛维定都巴黎', desc: '法兰克国王克洛维将巴黎定为首都，奠定了法兰西文化的基础。', worldContext: '东罗马查士丁尼即将即位（527），圣索菲亚 29 年后落成；中国南北朝对峙，佛教在中国全面兴盛' },
      { year: '1163年', event: '巴黎圣母院奠基', desc: '哥特式建筑的巅峰之作开始建造，历时近两百年完成。', worldContext: '中国南宋乾道时期，朱熹集理学大成；日本源平合战正酣，武家时代即将开启；吴哥窟刚建成 50 年' },
      { year: '1682年', event: '路易十四迁往凡尔赛', desc: '太阳王在巴黎郊外建造了人类历史上最奢华的宫殿。' },
      { year: '1789年', event: '法国大革命', desc: '巴士底狱被攻克，自由、平等、博爱的理念从此改变世界。', worldContext: '美国乔治·华盛顿同年就任首任总统；清朝乾隆 54 年，中国 GDP 占全球 1/3；日本宽政改革' },
      { year: '1889年', event: '埃菲尔铁塔建成', desc: '为世博会建造的临时建筑，却成为了巴黎永恒的象征。', worldContext: '日本明治维新 21 年后颁布帝国宪法；清朝光绪 15 年，北洋舰队实力处亚洲第一；美国西部尚未完全开发' },
      { year: '1944年', event: '巴黎解放', desc: '盟军解放巴黎，戴高乐将军沿香榭丽舍大道凯旋。' },
    ],
    landmarks: [
      { name: '巴黎圣母院', era: '中世纪·1163年', yearNum: 1163, wiki: 'Notre-Dame de Paris', gradient: 'linear-gradient(135deg, #2A2A3A 0%, #6A6A8B 50%, #1A1A2A 100%)', desc: '哥特式建筑的杰作，飞扶壁和玫瑰花窗是中世纪工程与艺术的巅峰。2019年大火后正在修复中。', hours: '修复中，部分区域开放', ticket: {
  price: '教堂主殿免费（2024-12 大火后重新开放）；塔楼 €13（Tour de Notre Dame）；地下考古 crypte €6',
  channels: [
    {
      name: '官方 notredamedeparis.fr',
      url: 'https://www.notredamedeparis.fr/', // ✋ Dev 核对
      note: '2024 年 12 月 7 日重开后采用预约入场（免费但必须订时段），避免无序排队'
    },
    {
      name: '塔楼专用 rendezvousalatour.fr',
      url: 'https://www.rendezvousalatour.fr/',
      content: null,
      note: '塔楼是独立售票，与主殿完全分开；旺季一周内售罄'
    }
  ],
  bookingWindow: {
    peak:     '旺季（5-9 月、圣诞、复活节）：主殿免费预约 3-5 天前订；塔楼 €13 提前 7-10 天抢',
    shoulder: '平季：当天即可订主殿；塔楼提前 2-3 天'
  },
  timingTip: '主殿 08:00 最早开门（周一至周五），弥撒时段游客暂停入内约 45 分钟；塔楼仅 10:00-17:30（冬 16:30）开放，日落前 1 小时可俯瞰塞纳河金光'
} // ✋ Dev 上线前核对：notredamedeparis.fr 最新开放时段 / 塔楼价格
        , note: '2024年底重新开放，塔楼需提前预约。', tags: ['哥特建筑', '世界遗产', '法国地标'],
        worldEvents: [
          { flag: '🇯🇵', city: '京都', event: '源平合战时期，日本武士文化正在形成' },
          { flag: '🇪🇬', city: '开罗', event: '萨拉丁正在建造城堡，抵御十字军东征' }
        ]
      ,
        tips: [
  {
    category: 'ticket',
    text: '主殿免费但 2024 年底大火修复后改预约入场，必须网上订 30 分钟时段；塔楼 €13 独立售票' // ✓ 锚点：数字 €13 / 30 分钟 + 具体时间 2024 年底
  },
  {
    category: 'timing',
    text: '周一至周五 08:00 开门最早；弥撒约每日 3 次每次 45 分钟游客暂停入内，官网实时公告' // ✓ 锚点：具体时间 08:00 + 数字 3 次/45 分钟
  },
  {
    category: 'photo',
    text: '最经典机位不在正门而在塞纳河南岸 Pont de l\'Archevêché 桥上，可拍飞扶壁和尖塔修复后新形态' // ✓ 锚点：具体名字 Pont de l\'Archevêché + 具体方向南岸 + 只有去过才知道
  },
  {
    category: 'walking',
    text: '地铁 Cité（4 号线）出口正对教堂；周边圣路易岛 5 分钟可达，Berthillon 冰淇淋是当地人打卡' // ✓ 锚点：具体名字 Cité 4 号/Berthillon + 数字 5 分钟
  },
  {
    category: 'dress',
    text: '作为活跃教堂，进入不可暴露——短裤短裙会被拦；玫瑰花窗光线从南向北照进，上午最绚丽' // ✓ 锚点：具体方向南向北 + 只有去过才知道
  }
]
      },
      { name: '埃菲尔铁塔', era: '近代·1889年', yearNum: 1889, wiki: 'Eiffel Tower', gradient: 'linear-gradient(135deg, #3A3A4A 0%, #8A8A9B 50%, #1A1A2A 100%)', desc: '高324米，建造时使用了7300吨铁和250万颗铆钉。原计划20年后拆除，因无线电天线的价值而得以保留。', hours: '09:30—23:45', ticket: {
  price: '二层电梯 €18.80；顶层电梯 €29.40；阶梯到二层 €11.80（25 岁以下 €5.90）',
  channels: [
    {
      name: '官方 toureiffel.paris',
      url: 'https://www.toureiffel.paris/', // ✋ Dev 核对官网
      note: '预售开放 60 天窗口；官网凌晨 00:00（巴黎时间）刷新次日余票'
    },
    {
      name: 'Get Your Guide 跳队导览',
      url: 'https://www.getyourguide.com/',
      note: '加约 €15 服务费，旺季常是唯一能买到当天票的途径'
    },
    {
      name: '阶梯入口 SW Pillar',
      url: null, // 现场排队
      note: '阶梯票不能网上买，只能现场 West/South 柱下窗口排队，旺季排 30-60 分钟'
    }
  ],
  bookingWindow: {
    peak:     '旺季（6-9 月 / 圣诞假期 / 情人节）：提前 7-10 天订顶层电梯；当天现场窗口 90% 时段售罄',
    shoulder: '平季（4-5 月、10-11 月）：提前 2-3 天即可',
    offpeak:  '淡季（1-2 月 · 除情人节）：当天 1 小时前买票都有余位'
  },
  timingTip: '日落前 60 分钟登顶可同时看日景与夜景，是最值的时段；每到整点铁塔闪灯 5 分钟（日落后至午夜），站在 Trocadéro 广场拍最经典'
} // ✋ Dev 上线前核对：toureiffel.paris 现行价 / 整点闪灯规则
        , note: '日落前1小时登塔，可同时欣赏日景和夜景。', tags: ['法国象征', '世博遗产', '铁建筑'] ,
        tips: [
  {
    category: 'ticket',
    text: '顶层电梯 €29.40 是铁塔最贵但最值的——头顶是 324 米；二层 €18.80 视野已足够，家庭亲子推荐二层' // ✓ 锚点：数字 €29.40/€18.80/324 米 + 只有去过才知道
  },
  {
    category: 'timing',
    text: '日落前 60 分钟登顶可连看日景 + 日落 + 夜景三段式；巴黎日落夏季 21:45 / 冬季 16:45，需提前订对应时段票' // ✓ 锚点：具体时间 21:45/16:45 + 数字 60 分钟
  },
  {
    category: 'photo',
    text: '最经典机位是 Trocadéro 广场（塞纳河北岸），面对铁塔 400 米正对称；整点闪灯 5 分钟是日落后唯一窗口' // ✓ 锚点：具体名字 Trocadéro + 数字 400 米 / 5 分钟
  },
  {
    category: 'walking',
    text: '地铁 Bir-Hakeim（6 号线）或 Trocadéro（9/6 号线）出，步行 5-10 分钟；铁塔东侧战神广场野餐是巴黎当地人常态' // ✓ 锚点：具体名字 Bir-Hakeim / Trocadéro + 数字 5-10 分钟
  },
  {
    category: 'ticket',
    text: '阶梯到二层 €11.80（25 岁以下仅 €5.90）是最便宜方案，但 674 级台阶 + 约 45 分钟攀登，体力要求高' // ✓ 锚点：数字 €11.80/674 级/45 分钟
  },
  {
    category: 'cold',
    text: '铁塔在塞纳河风口，顶层比地面冷 5-8℃；冬季 1-2 月顶层体感 -5℃ 以下，带厚围巾和手套' // ✓ 锚点：数字 5-8℃ / -5℃ + 具体时间 1-2 月
  }
]
      },
      { name: '卢浮宫', era: '12世纪—1793年', yearNum: 1793, wiki: 'Louvre', gradient: 'linear-gradient(135deg, #2A1A0A 0%, #8B6914 50%, #4A3010 100%)', desc: '世界上参观人数最多的博物馆，收藏超过38万件作品，包括《蒙娜丽莎》和《断臂维纳斯》。', hours: '09:00—18:00，周二闭馆', ticket: {
  price: '€22 在线票（含贝聿铭玻璃金字塔入口）；每月首个周五 18:00 后免费；EU 26 岁以下永久免费',
  channels: [
    {
      name: '官方 ticketlouvre.fr',
      url: 'https://www.ticketlouvre.fr/', // ✋ Dev 核对
      note: '必须网上预订 + 选 30 分钟时段；自 2022 起现场不再售票'
    },
    {
      name: 'Paris Museum Pass',
      url: 'https://www.parismuseumpass.fr/',
      note: '€70 两日票 / €85 四日票含卢浮宫 + 凡尔赛 + 奥赛，看 3 个以上博物馆就回本'
    }
  ],
  bookingWindow: {
    peak:     '旺季（6-8 月 / 圣诞假期 / 复活节周）：提前 10-14 天订时段，《蒙娜丽莎》所在 Denon 翼上午 10:00-13:00 时段永远抢',
    shoulder: '平季（3-5、9-11 月）：提前 3-5 天订'
  },
  timingTip: '想靠近《蒙娜丽莎》只有周三 / 五夜间延时（21:45 闭馆）进场且 19:00 后最少人；工作日开门 09:00 第一小时也行，午饭后前面永远 200 人'
} // ✋ Dev 上线前核对：ticketlouvre.fr 现行价 / 延时开放日
        , note: '至少需要半天时间，建议提前规划路线。', tags: ['世界最大博物馆', '皇家宫殿', '艺术殿堂'] ,
        tips: [
  {
    category: 'ticket',
    text: '€22 必须网上订时段；每月首个周五 18:00 后免费但需预约时段，席位瞬空' // ✓ 锚点：数字 €22 / 每月首个周五 18:00 + 只有去过才知道
  },
  {
    category: 'timing',
    text: '周三 / 周五延时至 21:45，19:00 后人流下降 50%，是《蒙娜丽莎》最可拍机位的唯一窗口' // ✓ 锚点：具体时间 21:45/19:00 + 数字 50%
  },
  {
    category: 'walking',
    text: '卢浮宫 38 万件藏品全看需 4 天；一日精选动线：Denon 翼（蒙娜丽莎 + 胜利女神）→ Sully（断臂维纳斯）→ Richelieu（拿破仑套房），3 小时 6 公里' // ✓ 锚点：数字 38 万 / 4 天 / 3 小时 / 6 公里 + 具体名字 Denon/Sully/Richelieu
  },
  {
    category: 'photo',
    text: '玻璃金字塔最佳机位：广场东北角的“Pavillon Richelieu”阶梯，能把金字塔 + 倒金字塔 + 喷泉装进一张图' // ✓ 锚点：具体方向东北角 + 具体名字 Pavillon Richelieu
  },
  {
    category: 'walking',
    text: '入口避开金字塔主门（排队 30-60 分钟），选 Porte des Lions 南门或 Carrousel 地下入口，排队短 50%' // ✓ 锚点：具体名字 Porte des Lions / Carrousel + 数字 50%
  }
]
      },
      { name: '凡尔赛宫', era: '17世纪·1682年', yearNum: 1682, wiki: 'Palace of Versailles', gradient: 'linear-gradient(135deg, #4A3A1A 0%, #C9963A 50%, #2A1A00 100%)', desc: '太阳王路易十四建造的宫殿，镜厅拥有357面镜子，花园面积达800公顷。', hours: '09:00—18:30，周一闭馆', ticket: {
  price: '宫殿 €21；“全通票 Passport” €32（含宫殿 + 特里亚农 + 玛丽王后庄园）；花园 4-10 月音乐喷泉日 €10.50，平日免费',
  channels: [
    {
      name: '官方 en.chateauversailles.fr',
      url: 'https://en.chateauversailles.fr/', // ✋ Dev 核对
      note: '必须网上订时段；Passport 通票是半日以上最省选择'
    },
    {
      name: 'RER C · Versailles Château',
      url: 'https://www.ratp.fr/',
      note: 'Paris 市区出发 35 分钟直达；地铁票不通用，需 Île-de-France 5 区 €10 来回票'
    }
  ],
  bookingWindow: {
    peak:     '旺季（5-9 月 + 音乐喷泉日 Tues/Sat/Sun）：提前 7 天订 09:00-10:00 开馆第一波；上午 11:00 后镜厅走廊挤成沙丁鱼',
    shoulder: '平季（3-4 月、10-11 月）：提前 2-3 天'
  },
  timingTip: '09:00 开门必须抢第一小时直冲镜厅（357 面镜子）；团体导游 10:30 涌入后单行游线就是等人潮。花园在音乐喷泉日下午才开“大喷水”，周二 / 六 / 日 15:30-17:30'
} // ✋ Dev 上线前核对：chateauversailles 票价 / 喷泉日时段
        , note: '周末花园音乐喷泉表演不容错过。', tags: ['世界遗产', '巴洛克建筑', '皇家园林'] ,
        tips: [
  {
    category: 'ticket',
    text: '€21 只含宫殿；€32 Passport 含花园 + 特里亚农 + 玛丽庄园，半日以上去必买' // ✓ 锚点：数字 €21/€32 + 只有去过才知道
  },
  {
    category: 'timing',
    text: '09:00 开门冲镜厅（Hall of Mirrors）第一小时；10:30 后团体导游单线挤压通道走不动' // ✓ 锚点：具体时间 09:00/10:30 + 数字 1 小时
  },
  {
    category: 'walking',
    text: 'RER C 线从巴黎圣米歇尔站 35 分钟到 Versailles Château；€10 来回票，普通地铁票不适用' // ✓ 锚点：具体名字 RER C / 圣米歇尔 + 数字 35 分钟 / €10
  },
  {
    category: 'photo',
    text: '镜厅最佳机位站在西端向东拍，357 面镜子 + 17 扇窗对称构图；上午 10:00 前光线最柔不反光' // ✓ 锚点：数字 357/17 + 具体方向西端向东 + 具体时间 10:00
  },
  {
    category: 'walking',
    text: '花园占地 800 公顷，大运河从十字中央走到尽头 1.5 公里单程；租自行车 €8/小时 或电瓶车 €38/小时 更现实' // ✓ 锚点：数字 800 公顷 / 1.5 公里 / €8/€38
  }
]
      },
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
    heroQuote: '2500年前，一群雅典公民发明了一种叫“民主”的东西，至今仍在塑造世界',
    tagline: '🏛 民主摇篮 · 3400年',
    overview: '雅典是西方文明的摇篮。在这座城市，苏格拉底追问真理，柏拉图创建学园，帕特农神庙至今仍是人类建筑美学的巅峰之作。',
    timeline: [
      { year: '约公元前1400年', event: '迈锡尼时代', desc: '卫城首次出现定居点，成为迈锡尼文明的重要据点。' },
      { year: '公元前508年', event: '民主制度诞生', desc: '克里斯提尼改革，建立了人类历史上第一个民主政体。', worldContext: '中国春秋末期，孔子 43 岁在鲁国周游；印度佛陀还健在（入灭 25 年后）；波斯大流士即将建波斯波利斯' },
      { year: '公元前447年', event: '帕特农神庙开建', desc: '伯里克利主持建造，菲迪亚斯负责雕塑，成为希腊古典艺术的巅峰。', worldContext: '中国战国初期，墨子出生前后；印度阿阇世王征服诸国；波斯帝国全盛却无法阻止希腊崛起' },
      { year: '公元前338年', event: '马其顿征服', desc: '腓力二世在喀罗尼亚击败希腊联军，雅典独立时代结束。' },
      { year: '公元529年', event: '柏拉图学院关闭', desc: '查士丁尼下令关闭异教学校，持续九百年的雅典学术传统中断。', worldContext: '查士丁尼一世同年颁布《查士丁尼法典》并开建圣索菲亚；中国南北朝梁武帝普通十年；日本钦明天皇即位' },
      { year: '1834年', event: '成为希腊首都', desc: '希腊独立后定都雅典，新古典主义建筑开始塑造现代城市面貌。' },
    ],
    landmarks: [
      { name: '帕特农神庙', era: '古典·前447年', yearNum: -447, wiki: 'Parthenon', gradient: 'linear-gradient(135deg, #4A3A2A 0%, #C9A96A 50%, #2A1A0A 100%)', desc: '供奉雅典娜女神的神庙，多立克柱式的完美典范。柱子微微向内倾斜以修正视觉错觉，精确度令现代建筑师惊叹。', hours: '08:00—20:00（夏季）', ticket: {
  price: '与卫城联票 €20（夏）/ €10（冬）；进入不单独售票',
  channels: [
    {
      name: '官方 hhticket.gr（与卫城同）',
      url: 'https://hhticket.gr/',
      note: '帕特农不单独售票——购卫城票即可进入；周围 20 米黄线禁止入内'
    },
    {
      name: '卫城博物馆 €15（看原件雕塑）',
      url: 'https://www.theacropolismuseum.gr/',
      note: '帕特农真品雕像已迁至博物馆，神庙现场大部分是复制品，想看菲迪亚斯原作必去博物馆'
    }
  ],
  bookingWindow: {
    peak:     '与卫城同步；现场神庙周围永远 100+ 人，想拍无人镜头只能凌晨第一波',
    shoulder: '与卫城同步'
  },
  timingTip: '08:00 第一波进卫城直奔帕特农西立面拍正面（上午东侧逆光）；18:00 闭门前 30 分钟逆向重走一次，日落金光打在多立克柱上'
} // ✋ Dev 上线前核对：帕特农保护带现状 / 是否仍允许近距离围观
        , note: '清晨或傍晚光线最佳，避开正午人潮。', tags: ['世界遗产', '古典建筑', '雅典娜'],
        worldEvents: [
          { flag: '🇨🇳', city: '中国', event: '战国时代，孔子去世不久，百家争鸣正在展开' },
          { flag: '🇪🇬', city: '埃及', event: '波斯帝国统治下，距亚历山大大帝征服还有115年' }
        ]
      ,
        tips: [
  {
    category: 'ticket',
    text: '帕特农不单独售票，进卫城 €20/€10 即包含；黄线外 20 米禁区不可越' // ✓ 锚点：数字 €20/€10/20 米
  },
  {
    category: 'timing',
    text: '08:00 第一波冲西立面（正立面）；18:00 前 30 分钟日落金光打柱最美' // ✓ 锚点：具体时间 08:00/18:00/30 分钟 + 具体方向西立面
  },
  {
    category: 'photo',
    text: '8 根前柱 + 17 根侧柱形成的“菲迪亚斯黄金比例”从西南角 45° 最能体现；正面 90° 永远被游客阻挡' // ✓ 锚点：数字 8/17/45°/90° + 具体方向西南 + 具体名字菲迪亚斯
  },
  {
    category: 'walking',
    text: '真品雕像（菲迪亚斯作）已迁卫城博物馆三楼；现场柱身上大部分雕塑是复制品或英国大英博物馆当年搬走后留白痕迹' // ✓ 锚点：具体名字大英博物馆 / 菲迪亚斯 / 三楼 + 只有去过才知道
  },
  {
    category: 'ticket',
    text: '卫城博物馆 €15 是与帕特农成对的必修课，展厅透明玻璃让雕像正对原神庙方向，仪式感满' // ✓ 锚点：数字 €15 + 只有去过才知道
  }
]
      },
      { name: '雅典卫城', era: '青铜时代起', yearNum: -500, wiki: 'Acropolis of Athens', gradient: 'linear-gradient(135deg, #3A2A1A 0%, #8B7A5A 50%, #1A0D00 100%)', desc: '卫城是一座天然要塞，海拔156米的石灰岩山丘上汇集了帕特农神庙、伊瑞克提翁神庙等建筑群。', hours: '08:00—20:00', ticket: {
  price: '卫城单票 €20（冬 11-3 月 €10）；Combined Ticket €30（7 日内含卫城 + Agora + 罗马市集 + 宙斯神殿 + 哈德良图书馆 + Kerameikos 六处）',
  channels: [
    {
      name: '官方 hhticket.gr',
      url: 'https://hhticket.gr/', // ✋ Dev 核对希腊文化部统一票务
      note: '必须网上订时段；€30 Combined Ticket 去 2 个以上景点就回本'
    },
    {
      name: 'Get Your Guide 带导游',
      url: 'https://www.getyourguide.com/',
      note: '€45-55 含导游 + 跳队，旺季是唯一能订到当天下午时段的方式'
    },
    {
      name: '每月首周日 / 希腊国庆等免费日',
      url: null,
      note: '3/6 国家纪念日、5/18 国际博物馆日、10/28 国庆、每月首个周日（11-3 月）免费但必须预约时段'
    }
  ],
  bookingWindow: {
    peak:     '旺季（5-10 月）：提前 5-7 天订 08:00-10:00 时段；11:00 后 40℃ 烈日下山坡无遮阴',
    shoulder: '平季（3-4、11-12 月）：提前 2 天',
    offpeak:  '淡季（1-2 月）：当天现场可买，人流量只有旺季 1/4'
  },
  timingTip: '08:00 开门第一波冲上山（游客巴士 10:00 才到），可安静在帕特农西南角拍 1 小时；夏季午后 15:00 前山上 40-42℃，帽子 + 水 + 防晒霜必备'
} // ✋ Dev 上线前核对：hhticket.gr / Combined Ticket 覆盖景点 / 免费日
        , note: '建议从南坡入口进入，可依次参观所有遗迹。', tags: ['世界遗产', '古希腊', '神殿群'] ,
        tips: [
  {
    category: 'ticket',
    text: '卫城单票 €20 夏季 / €10 冬季；€30 Combined 7 日内六处通用，适合待 3 天以上' // ✓ 锚点：数字 €20/€10/€30/7 日 / 6 处
  },
  {
    category: 'timing',
    text: '08:00 开门冲第一波游客少 80%；夏季午后地表 40-42℃，11:00-15:00 山顶无遮阴带水带帽' // ✓ 锚点：具体时间 08:00/11:00-15:00 + 数字 80%/40-42℃
  },
  {
    category: 'walking',
    text: '南坡 Dionysiou Areopagitou 入口上山是主动线 + 坡缓；北坡 Plaka 老城方向入口冷门但石阶陡，想避人从北坡上' // ✓ 锚点：具体名字 Dionysiou Areopagitou / Plaka + 具体方向南坡北坡
  },
  {
    category: 'photo',
    text: '帕特农东侧（正立面）上午光线最美；从 Filopappou 山西南方向远眺可拍整个卫城 + 帕特农 + 卫城山一轮日出金光' // ✓ 锚点：具体方向东侧 / 西南 + 具体名字 Filopappou + 只有去过才知道
  },
  {
    category: 'walking',
    text: '卫城博物馆（Acropolis Museum）在 Dionysiou Areopagitou 街道山脚，€15 单独票，看卫城上的雕像原件和展厅玻璃透视效果' // ✓ 锚点：具体名字卫城博物馆 / Dionysiou Areopagitou + 数字 €15
  },
  {
    category: 'ticket',
    text: '每月首个周日（11-3 月）、3/6、5/18、10/28 免费但必须提前网上预约时段；免费日往往比付费日更挤' // ✓ 锚点：具体时间每月首个周日 / 3-6 / 5-18 / 10-28 + 只有去过才知道
  }
]
      },
      { name: '古代市集（Agora）', era: '古典·前6世纪', yearNum: -500, wiki: 'Ancient Agora of Athens', gradient: 'linear-gradient(135deg, #2A2A1A 0%, #6B5A3A 50%, #1A1A0D 100%)', desc: '苏格拉底在此辩论，柏拉图在此漫步。阿塔罗斯柱廊已完整重建，是了解古希腊日常生活的最佳场所。', hours: '08:00—20:00', ticket: {
  price: '€10 单票；Combined €30 覆盖',
  channels: [
    {
      name: '官方 hhticket.gr',
      url: 'https://hhticket.gr/',
      note: '与卫城同一系统；Combined 去 2 处以上更划算'
    }
  ],
  bookingWindow: '当天可买；闭馆日周二',
  timingTip: '下午 15:00 后上午团客散去是最佳时段；苏格拉底曾在此辩论，赫菲斯托斯神庙（Temple of Hephaestus）是希腊保存最完整的多立克神庙，比帕特农还完好'
} // ✋ Dev 上线前核对：hhticket.gr / 周二闭馆
        , note: '赫菲斯托斯神庙是希腊保存最完整的古代神庙。', tags: ['古希腊民主', '哲学诞生地', '考古遗址'] ,
        tips: [
  {
    category: 'ticket',
    text: '€10 单票或 €30 Combined 覆盖；闭馆日是周二' // ✓ 锚点：数字 €10/€30 + 具体时间周二
  },
  {
    category: 'timing',
    text: '下午 15:00 后是黄金时段；赫菲斯托斯神庙在西北角坡上晒夕阳金光最好' // ✓ 锚点：具体时间 15:00 + 具体方向西北角
  },
  {
    category: 'walking',
    text: '从卫城北坡下山步行 5 分钟直达 Agora 北门；出 Agora 南门即是 Plaka 老城区吃饭',
    // ✓ 锚点：具体名字 Plaka / 北坡 / 北门 + 数字 5 分钟
  },
  {
    category: 'photo',
    text: '赫菲斯托斯神庙保存比帕特农更完整，34 根柱子全在，是希腊唯一能见到完整多立克柱廊的神庙' // ✓ 锚点：具体名字赫菲斯托斯 + 数字 34 根 + 只有去过才知道
  }
]
      },
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
      { year: '公元前59年', event: '罗马殖民地建立', desc: '凯撒为退役老兵建立殖民地“Florentia”，意为“繁花之城”。' },
      { year: '1115年', event: '自治公社成立', desc: '佛罗伦萨脱离封建领主控制，成为自治城市共和国。' },
      { year: '1296年', event: '圣母百花大教堂动工', desc: '这座大教堂将成为城市的象征，穹顶问题困扰了建筑师一个多世纪。', worldContext: '中国元代忽必烈统一中国 17 年；马可·波罗去年回威尼斯，即将口述《马可·波罗游记》；奥斯曼国即将建立' },
      { year: '1434年', event: '美第奇家族崛起', desc: '科西莫·德·美第奇成为佛罗伦萨实际统治者，开启了文艺复兴的黄金时代。', worldContext: '中国明宣德九年，郑和最后一次下西洋；奥斯曼帝国复兴期，19 年后攻陷君士坦丁堡；印加帝国正在扩张' },
      { year: '1501年', event: '米开朗基罗雕刻大卫像', desc: '26岁的米开朗基罗用三年时间将一块被废弃的大理石变成了永恒。', worldContext: '哥伦布第三次航行归来；中国明弘治十四年；日本战国时代初期；奥斯曼即将征服叙利亚' },
      { year: '1865年', event: '短暂成为意大利首都', desc: '意大利统一后佛罗伦萨担任首都六年，直到罗马被收复。' },
    ],
    landmarks: [
      { name: '圣母百花大教堂', era: '文艺复兴·1436年', yearNum: 1436, wiki: 'Florence Cathedral', gradient: 'linear-gradient(135deg, #8B4A2A 0%, #D4841A 50%, #4A2A0A 100%)', desc: '布鲁内莱斯基设计的穹顶直径45米，不使用飞扶壁，至今仍是最大的砖砌穹顶。他甚至为此发明了新的建造机械。', hours: '10:00—17:00', ticket: {
  price: '教堂免费；Brunelleschi Pass €30（穹顶 + 钟楼 + 洗礼堂 + 博物馆 + 地宫，3 日有效）；Giotto Pass €20（穹顶除外的其他）；单买穹顶 €30',
  channels: [
    {
      name: '官方 duomo.firenze.it',
      url: 'https://duomo.firenze.it/', // ✋ Dev 核对官网
      note: 'Brunelleschi Pass 是唯一能登穹顶的票，登顶每 15 分钟一批 20 人'
    },
    {
      name: 'Florence Firenze Card',
      url: 'https://www.firenzecard.it/',
      note: '€85 72 小时含全城 60 余博物馆（包括乌菲兹 + 学院），一次入场制；3 天以上行程回本'
    },
    {
      name: '现场窗口',
      url: null,
      note: '大教堂对面 Piazza San Giovanni 窗口排队 1-2 小时，旺季穹顶当天永远没余票'
    }
  ],
  bookingWindow: {
    peak:     '旺季（5-10 月 / 圣诞 / 复活节）：穹顶提前 7-14 天抢，8:15 开放第一波时段永远 10 分钟内售罄',
    shoulder: '平季（3-4、11 月）：提前 3-5 天',
    offpeak:  '淡季（1-2 月除新年）：提前 2-3 天就有余票'
  },
  timingTip: '穹顶 463 级台阶单行道无电梯 + 内部 38℃ 无空调 + 全程 40-60 分钟，心脏病 / 幽闭症 / 膝盖问题直接放弃；登顶首批 8:15 是唯一能看日出金光的时段'
} // ✋ Dev 上线前核对：duomo.firenze.it 预约 / 穹顶票价 / Firenze Card 价格
        , note: '登穹顶463级台阶，可近距离观赏瓦萨里壁画。', tags: ['世界遗产', '文艺复兴', '建筑创新'],
        worldEvents: [
          { flag: '🇨🇳', city: '北京', event: '明朝宣德年间，紫禁城已落成16年，郑和最后一次下西洋' },
          { flag: '🇹🇷', city: '伊斯坦布尔', event: '奥斯曼帝国持续扩张，距攻陷君士坦丁堡还有17年' }
        ]
      ,
        tips: [
  {
    category: 'ticket',
    text: 'Brunelleschi Pass €30 是唯一包穹顶的票；只买 Giotto €20 只能登旁边钟楼看对面穹顶' // ✓ 锚点：数字 €30/€20 + 只有去过才知道
  },
  {
    category: 'timing',
    text: '穹顶每时段限流 20 人 + 15 分钟一批；8:15 第一波最值，能看晨光穿过瓦萨里壁画' // ✓ 锚点：数字 20/15 分钟 + 具体时间 8:15 + 具体名字瓦萨里
  },
  {
    category: 'walking',
    text: '463 级石阶 + 38℃ 体感 + 通道最窄 60 厘米单行道，全程 40-60 分钟；心脏 / 膝盖 / 幽闭症慎登' // ✓ 锚点：数字 463/38℃/60 厘米/40-60 分钟 + 只有去过才知道
  },
  {
    category: 'photo',
    text: '穹顶外最佳机位是钟楼 Campanile（不是穹顶本身），从对角 60 米等高可拍整座红瓦穹顶 + 城市背景' // ✓ 锚点：具体名字 Campanile + 数字 60 米 + 具体方向对角
  },
  {
    category: 'walking',
    text: '教堂本身免费但排队 30-60 分钟；想只看室内壁画不登顶就排免费队；想快速内部用 Brunelleschi Pass 从 Door 5 跳队' // ✓ 锚点：数字 30-60 分钟 + 具体名字 Door 5
  },
  {
    category: 'timing',
    text: '教堂周日上午 10:30 弥撒，游客暂停入场 90 分钟；想听管风琴可坐下听一场，是最佳免费礼物' // ✓ 锚点：具体时间周日 10:30 + 数字 90 分钟 + 只有去过才知道
  }
]
      },
      { name: '乌菲兹美术馆', era: '16世纪·1581年', yearNum: 1581, wiki: 'Uffizi', gradient: 'linear-gradient(135deg, #1A2A3A 0%, #4A6A8B 50%, #0D1A2A 100%)', desc: '收藏了波提切利《维纳斯的诞生》、达芬奇《天使报喜》等文艺复兴巅峰之作。', hours: '08:15—18:30，周一闭馆', ticket: {
  price: '旺季（3-10 月）€25 + €4 预约费；淡季 €12；特别展 +€8',
  channels: [
    {
      name: '官方 uffizi.it',
      url: 'https://www.uffizi.it/', // ✋ Dev 核对
      note: '必须网上订时段；现场窗口已于 2023 年取消'
    },
    {
      name: 'Florence Firenze Card',
      url: 'https://www.firenzecard.it/',
      note: '€85 72 小时含乌菲兹 + 学院 + 大教堂博物馆；比单独买省一半'
    }
  ],
  bookingWindow: {
    peak:     '旺季 5-10 月：提前 7 天订 09:00-10:00 时段，《维纳斯诞生》所在 10-14 号厅上午最空',
    shoulder: '平季 / 淡季：提前 2-3 天即可'
  },
  timingTip: '08:15 开门第一小时冲二楼 10-14 号厅（波提切利厅），《维纳斯诞生》+《春》两幅高 2 米作品挂在同一面墙；下午 14:00 后人流回落也是二波时段'
} // ✋ Dev 上线前核对：uffizi.it / 预约费 / 淡旺季分界
        , note: '提前网上订票可避免长时间排队。', tags: ['文艺复兴艺术', '美第奇收藏', '世界级博物馆'] ,
        tips: [
  {
    category: 'ticket',
    text: '€25 + €4 预约费是旺季官价 + 必订时段；不网上订现场无票' // ✓ 锚点：数字 €25/€4 + 只有去过才知道
  },
  {
    category: 'timing',
    text: '08:15 开门冲二楼 10-14 号厅波提切利；14:00 后二波可看达芬奇《天使报喜》人流回落' // ✓ 锚点：具体时间 08:15/14:00 + 具体名字波提切利 / 达芬奇 / 10-14 号厅
  },
  {
    category: 'walking',
    text: '38 万件藏品（同卢浮宫）但乌菲兹只展 3000 件精华；二楼 10-14（波提切利）+ 15（达芬奇）+ 66（米开朗基罗）是三个必看' // ✓ 锚点：数字 38 万/3000 件 + 具体名字展厅编号
  },
  {
    category: 'photo',
    text: '馆内禁拍闪光 + 禁脚架；第 44 号厅的窗户朝阿诺河老桥，是拍老桥的最佳室内机位' // ✓ 锚点：具体名字 44 号厅 + 具体方向朝阿诺河 + 只有去过才知道
  },
  {
    category: 'ticket',
    text: '每月首个周日免费进馆但必须网上预约时段，席位 08:00 开放瞬空' // ✓ 锚点：具体时间每月首个周日 / 08:00 + 只有去过才知道
  }
]
      },
      { name: '老桥（Ponte Vecchio）', era: '中世纪·1345年', yearNum: 1345, wiki: 'Ponte Vecchio', gradient: 'linear-gradient(135deg, #4A3A1A 0%, #8B7A5A 50%, #2A1A0A 100%)', desc: '阿诺河上最古老的桥梁，桥上开满金银首饰店。二战中德军撤退时唯一未被炸毁的佛罗伦萨桥梁。', hours: '全天开放', ticket: {
  price: '免费步行；桥上金银店自由进出',
  channels: [
    {
      name: 'Firenze 官方旅游',
      url: 'https://www.feelflorence.it/',
      note: '桥本身无售票系统；旅游网站提供瓦萨里通道（Corridoio Vasariano）预约，€45 含乌菲兹三楼走廊到老桥上方'
    }
  ],
  bookingWindow: '无需预约步行桥本身',
  timingTip: '日落前 30 分钟站桥中央向西拍阿诺河金光是佛罗伦萨经典明信片；日落后 20 分钟桥头灯光点亮是第二波机位；正午光线最硬反而最差'
} // ✋ Dev 上线前核对：瓦萨里通道是否已重开 / feelflorence.it 现行内容
        , note: '日落时分从桥上看阿诺河最为浪漫。', tags: ['中世纪建筑', '金匠传统', '城市地标'] ,
        tips: [
  {
    category: 'ticket',
    text: '老桥走桥免费；桥内金银店二战时纳粹撤退未炸毁的唯一原因是希特勒命令' // ✓ 锚点：只有去过才知道
  },
  {
    category: 'timing',
    text: '日落前 30 分钟向西桥头 + 日落后 20 分钟桥头灯光两次机位，中间 50 分钟是佛罗伦萨最值黄金小时' // ✓ 锚点：具体方向西 + 数字 30/20/50 分钟 + 只有去过才知道
  },
  {
    category: 'photo',
    text: '最经典构图不在桥上而在 Ponte Santa Trinita（下游 300 米），三孔桥 + 阿诺河 + 老桥金光全入镜' // ✓ 锚点：具体名字 Ponte Santa Trinita + 数字 300 米
  },
  {
    category: 'walking',
    text: '老桥到乌菲兹步行 5 分钟；到皮蒂宫（Palazzo Pitti）从桥南侧过去 300 米，是美第奇家族私人宫殿' // ✓ 锚点：具体名字皮蒂宫 / 美第奇 + 数字 5 分钟 / 300 米
  }
]
      },
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
      { year: '公元前221年', event: '秦统一六国', desc: '秦始皇在咸阳建立第一个大一统帝国，统一文字、度量衡。', worldContext: '罗马第一次布匿战争胜利 20 年后，正在对抗汉尼拔；埃及托勒密王朝鼎盛，亚历山大图书馆是地中海学术中心' },
      { year: '公元前202年', event: '汉朝定都长安', desc: '刘邦建立汉朝，长安城成为东方最大的城市。' },
      { year: '公元前138年', event: '张骞出使西域', desc: '汉武帝派张骞开辟丝绸之路，长安成为东西文明交汇的枢纽。', worldContext: '罗马共和国征服地中海，迦太基覆灭；帕提亚帝国正在中亚扩张；丝路东端从此与西端连通' },
      { year: '618年', event: '唐朝定都长安', desc: '唐代长安人口逾百万，是当时世界上最国际化的都市。', worldContext: '穆罕默德 4 年后迁徙麦地那（622），伊斯兰元年即将到来；拜占庭帝国与萨珊波斯正在进行最后大战' },
      { year: '907年', event: '唐朝灭亡', desc: '此后再无王朝定都于此，但丝路遗产永远留存。' },
    ],
    landmarks: [
      { name: '秦始皇兵马俑', era: '秦·前210年', yearNum: -210, wiki: 'Terracotta Army', gradient: 'linear-gradient(135deg, #4A3A1A 0%, #8B7A5A 50%, #2A1A0A 100%)', desc: '1974年偶然发现的地下军团，约8000个真人大小的陶俑，每个面容各异。被誉为“世界第八大奇迹”。', hours: '08:30—18:00', ticket: {
  price: '旺季（3-11 月）¥120；淡季（12-2 月）¥90；含一号 / 二号 / 三号坑 + 秦始皇陵铜车马博物馆',
  channels: [
    {
      name: '官方 bmy.com.cn',
      url: 'https://www.bmy.com.cn/', // ✋ Dev 核对
      note: '实名制预约，日限 6.5 万人；旺季必须提前 3-5 天订'
    },
    {
      name: '携程 / 飞猪（含导游 + 直通车）',
      url: 'https://www.ctrip.com/',
      note: '¥200-300 含西安市区往返 + 导游讲解 + 门票，比自己打车去省 3 小时'
    },
    {
      name: '西安火车站 306 路专线',
      url: null,
      note: '东广场 ¥7 直达，1 小时到景区；是最便宜的自助方案'
    }
  ],
  bookingWindow: {
    peak:     '旺季（暑假 / 国庆 / 春节）：提前 7 天官网开放订票，08:00 整点刷出次周同日票',
    shoulder: '春秋（4-5、9、11 月）：提前 2-3 天订',
    offpeak:  '冬季（12-2 月除春节）：当天现场可买；人流量旺季 1/3'
  },
  timingTip: '08:30 开门冲一号坑（规模最大 + 相机机位宽），10:00 后团队导游涌入占据观景台；下午 14:00 再回一号坑，导游团已散，能安静绕一圈看细节'
} // ✋ Dev 上线前核对：bmy.com.cn / 票价 / 306 路 ¥7
        , note: '一号坑规模最大，三号坑是指挥部。', tags: ['世界文化遗产', '秦代', '考古奇迹'],
        worldEvents: [
          { flag: '🇮🇹', city: '罗马', event: '罗马共和国正与迦太基争夺地中海霸权，第二次布匿战争即将爆发' },
          { flag: '🇪🇬', city: '埃及', event: '托勒密王朝统治下，亚历山大图书馆是地中海世界的学术中心' }
        ]
      ,
        tips: [
  {
    category: 'ticket',
    text: '旺季 ¥120 / 淡季 ¥90 含三坑 + 秦陵铜车马馆，一次购票四个展区通用' // ✓ 锚点：数字 ¥120/¥90/四个
  },
  {
    category: 'timing',
    text: '08:30 开门冲一号坑是一天中唯一能拍到无人观景台的窗口；10:00 后团客涌入观景台前排永远 10+ 人' // ✓ 锚点：具体时间 08:30/10:00 + 数字 10+
  },
  {
    category: 'walking',
    text: '三个坑的顺序推荐：一号（最大，兵俑阵列）→ 三号（最小，指挥部）→ 二号（最复杂，跪射俑在此）；按 1→3→2 逆序走反而不堵' // ✓ 锚点：具体名字跪射俑 + 只有去过才知道
  },
  {
    category: 'photo',
    text: '一号坑东侧观景台站高俯拍 + 跪射俑在二号坑西南角独立展柜 360°可拍，是纪念品照最有辨识度的两个机位' // ✓ 锚点：具体方向东侧 / 西南角 + 具体名字跪射俑
  },
  {
    category: 'walking',
    text: '西安火车站东广场 306 路 ¥7 专线直达，1 小时 40 分钟；自驾从市区 70 公里走连霍高速，停车费 ¥10/天' // ✓ 锚点：具体名字 306 / 连霍 + 数字 70 公里 / ¥7 / ¥10
  },
  {
    category: 'cold',
    text: '展坑内温度常年 15-18℃（地下恒温），7-8 月夏季从 40℃ 室外进去会起鸡皮疙瘩；冬季反而更暖' // ✓ 锚点：数字 15-18℃/40℃ + 只有去过才知道
  }
]
      },
      { name: '西安城墙', era: '明·1370年', yearNum: 1370, wiki: 'Fortifications of Xi\'an', gradient: 'linear-gradient(135deg, #3A2A1A 0%, #6B5A3A 50%, #1A0D00 100%)', desc: '中国现存最完整的古代城墙，周长13.74公里，可骑自行车环行一圈。', hours: '08:00—22:00', ticket: {
  price: '¥54（全段通票 + 24 小时有效）；自行车单人 ¥45 / 双人 ¥90，押金 ¥200',
  channels: [
    {
      name: '官方“西安城墙景区”小程序',
      url: 'https://www.xacitywall.com/', // ✋ Dev 核对官网域名
      note: '支持微信支付预约；现场二维码扫码入闸'
    },
    {
      name: '美团 / 大众点评',
      url: 'https://www.meituan.com/',
      note: '¥50 左右含入园 + 2 小时自行车套餐，最方便'
    }
  ],
  bookingWindow: {
    peak:     '旺季（春节 / 五一 / 国庆 / 樱花 4 月初）：城墙灯会期间需提前 3-5 天',
    shoulder: '平季：当天现场扫码即入；骑行 60 分钟内无需预约'
  },
  timingTip: '日落前 60 分钟从南门（永宁门）上墙骑行，绕城 13.74 公里需 100 分钟；一路可看灯笼点亮 + 钟鼓楼夜景 + 城外回民街烟火气'
} // ✋ Dev 上线前核对：官网域名 / 自行车押金现行规则
        , note: '骑车环城约需1.5小时，南门租车最方便。', tags: ['明代城防', '完整城墙', '骑行体验'] ,
        tips: [
  {
    category: 'ticket',
    text: '¥54 进城墙 + ¥45 自行车是标配，¥99 一个人环城 1.5 小时，是西安最值体验' // ✓ 锚点：数字 ¥54/¥45/¥99 + 数字 1.5 小时
  },
  {
    category: 'timing',
    text: '日落前 60 分钟上墙是“魔术时刻”——既能看日光城砖质感又能等夜灯亮起，夏季 19:30 / 冬季 17:00' // ✓ 锚点：具体时间 19:30/17:00 + 数字 60 分钟
  },
  {
    category: 'walking',
    text: '南门（永宁门）是最老入口 + 租车最方便；北门（安远门）距离火车站 1 公里但租车窗口少' // ✓ 锚点：具体名字永宁门 / 安远门 + 数字 1 公里
  },
  {
    category: 'photo',
    text: '南门外瓮城夜景是明代城防标准保存的少见样板——内外瓮城加正城三重门 + 吊桥，在东南角向西北拍全收' // ✓ 锚点：具体方向东南向西北 + 具体名字三重门
  },
  {
    category: 'cold',
    text: '城墙顶风道冬季风力大比地面低 3-5℃，12 月骑行必须戴围巾面罩；夏季 6-8 月反而晒死人午间 40℃+' // ✓ 锚点：数字 3-5℃/40℃ + 具体时间 12 月
  }
]
      },
      { name: '大雁塔', era: '唐·652年', yearNum: 652, wiki: 'Giant Wild Goose Pagoda', gradient: 'linear-gradient(135deg, #2A1A0A 0%, #6B4A2A 50%, #1A0D00 100%)', desc: '唐僧玄奘为保存从印度带回的经文而修建，是丝绸之路文化交流的见证。', hours: '08:00—17:30', ticket: {
  price: '大慈恩寺 ¥40；登塔另加 ¥25（合计 ¥65）；北广场音乐喷泉免费',
  channels: [
    {
      name: '大慈恩寺官方 daciensi.com',
      url: 'http://www.daciensi.com/', // ✋ Dev 核对
      note: '现场购票为主；官网提供开放时间更新'
    }
  ],
  bookingWindow: '全年当天可买票；音乐喷泉 12:00 / 20:30 两场要提前 30 分钟占位',
  timingTip: '登塔 64 级台阶每层能看玄奘经书遗物 + 顶层俯瞰整个大唐芙蓉园；北广场音乐喷泉每周二闭场检修'
} // ✋ Dev 上线前核对：daciensi.com / 喷泉时段
        , note: '北广场音乐喷泉是亚洲最大的音乐喷泉。', tags: ['世界遗产', '唐代', '丝绸之路'] ,
        tips: [
  {
    category: 'ticket',
    text: '¥40 只进寺内，登塔要加 ¥25；想精华只看北广场免费喷泉表演就够' // ✓ 锚点：数字 ¥40/¥25 + 只有去过才知道
  },
  {
    category: 'timing',
    text: '喷泉场次 12:00 / 16:00 / 20:30，冬季只剩 12:00 / 18:30；每周二闭场检修' // ✓ 锚点：具体时间 12:00/16:00/20:30/18:30 + 具体时间周二
  },
  {
    category: 'photo',
    text: '塔身最好机位在北广场中轴线向南，喷泉水柱高度 60 米时塔影映入水幕最震撼' // ✓ 锚点：具体方向中轴线 + 数字 60 米 + 只有去过才知道
  },
  {
    category: 'walking',
    text: '地铁 3 号线“大雁塔”站 C 出口直达北广场，换乘 4 号线 1 站能到大唐不夜城 + 回民街' // ✓ 锚点：具体名字 3 号线 C / 4 号线 + 数字 1 站
  }
]
      },
      { name: '回民街', era: '唐代起', yearNum: 700, wiki: 'Drum Tower of Xi\'an', gradient: 'linear-gradient(135deg, #4A1A0A 0%, #C94A1A 50%, #2A0A00 100%)', desc: '西安穆斯林聚居区，千年来的丝路商旅后裔。这里的美食融合了中原与西域风味。', hours: '全天（小吃摊约10:00—22:00）', ticket: {
  price: '街区免费；钟楼 ¥35；鼓楼 ¥35；联票 ¥50',
  channels: [
    {
      name: '官方“西安钟鼓楼”小程序',
      url: 'https://www.xazgl.com/', // ✋ Dev 核对
      note: '钟鼓楼联票网上预约；回民街本身无售票'
    }
  ],
  bookingWindow: '无需预约；钟鼓楼当天现场可买',
  timingTip: '傍晚 17:00-21:00 是回民街“烟火时段”——肉夹馍 / 羊肉泡馍 / 柿子饼摊开张 + 灯笼点亮；正午前商铺开张不全半数关门'
} // ✋ Dev 上线前核对：钟鼓楼官网 / 票价
        , note: '羊肉泡馍、肉夹馍、凉皮是必尝“三件套”。', tags: ['丝路遗产', '清真美食', '文化融合'] ,
        tips: [
  {
    category: 'ticket',
    text: '街区完全免费吃吃逛逛；钟楼 / 鼓楼联票 ¥50 是俯瞰西安老城的唯一窗口' // ✓ 锚点：数字 ¥50 + 只有去过才知道
  },
  {
    category: 'timing',
    text: '17:00-21:00 是烟火高峰 + 灯笼点亮；正午前半数摊位未开张' // ✓ 锚点：具体时间 17:00-21:00
  },
  {
    category: 'walking',
    text: '主街“北院门”向北 200 米右转“大皮院”，是当地人才走的巷子，肉夹馍比主街便宜 ¥3' // ✓ 锚点：具体名字北院门 / 大皮院 + 数字 200 米 / ¥3
  },
  {
    category: 'walking',
    text: '三件套排名：“老米家羊肉泡馍”（大皮院）→ “刘纪孝腊牛肉”（北广济街）→ “贾三灌汤包”（北院门），三家步行 10 分钟内' // ✓ 锚点：具体名字老米家 / 刘纪孝 / 贾三 + 数字 10 分钟
  }
]
      },
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
      { year: '1192年', event: '德里苏丹国建立', desc: '穆罕默德·古尔征服德里，伊斯兰政权开始统治北印度。', worldContext: '中国南宋庆元年间，朱熹刚去世；日本源平合战落幕、武家时代开启；第三次十字军东征萨拉丁与狮心王正对峙' },
      { year: '1526年', event: '莫卧儿帝国建立', desc: '巴布尔在帕尼帕特击败苏丹军队，建立印度历史上最辉煌的帝国。', worldContext: '明朝嘉靖五年；奥斯曼苏莱曼大帝鼎盛；西班牙科尔特斯已征服阿兹特克 5 年；马丁路德宗教改革 9 年后' },
      { year: '1648年', event: '沙贾汗迁都', desc: '莫卧儿皇帝沙贾汗建造红堡和沙贾汗纳巴德（旧德里）。' },
      { year: '1857年', event: '印度民族起义', desc: '反英起义失败后，莫卧儿帝国正式终结，英国直接统治印度。', worldContext: '中国第二次鸦片战争爆发；美国内战前 4 年；日本黑船事件后 4 年，明治维新 11 年后到来' },
      { year: '1947年', event: '印度独立', desc: '尼赫鲁在红堡升起三色旗，宣告印度独立。' },
    ],
    landmarks: [
      { name: '红堡', era: '莫卧儿·1648年', yearNum: 1648, wiki: 'Red Fort', gradient: 'linear-gradient(135deg, #8B1A1A 0%, #C94A2A 50%, #4A0A0A 100%)', desc: '莫卧儿皇帝沙贾汗建造的红砂岩宫殿，城墙高33米。每年独立日总理在此发表讲话。', hours: '09:30—16:30，周一闭馆', ticket: {
  price: '印度公民 ₹50；外国人 ₹600（约 ¥56）；晚间 Sound and Light Show ₹80 印 / ₹200 外',
  channels: [
    {
      name: '官方 ASI · asi.payumoney.com',
      url: 'https://asi.payumoney.com/', // ✋ Dev 核对（印度考古局售票平台）
      note: '实名购票 + 时段入场；现场扫码入闸'
    },
    {
      name: '现场窗口',
      url: null,
      note: 'Lahori Gate 入口现场有印度人 / 外国人分队窗口；旺季现场排队 30-60 分钟'
    },
    {
      name: 'Delhi Tourism 一日游',
      url: 'https://www.delhitourism.gov.in/',
      note: '¥300 含红堡 + 贾玛清真寺 + 月光集市 + 中餐，最省时间'
    }
  ],
  bookingWindow: {
    peak:     '旺季（11-2 月凉季，德里最舒适）：提前 3-5 天订；每日独立纪念日（1/26 / 8/15）全面封闭',
    shoulder: '平季（3-4、10 月）：提前 1-2 天',
    offpeak:  '夏季（5-9 月 45℃ + 季风暴雨）：当天可买，游客量只有凉季 1/3'
  },
  timingTip: '闭馆日周一；最佳时段是 09:30 开门第一波 + 16:30 前 1 小时，避开正午 40-45℃；晚间 Sound and Light Show 19:30 / 20:30 英文 / 印地语两场，独立日期间暂停'
} // ✋ Dev 上线前核对：asi.payumoney.com / 外国人 ₹600 / 灯光秀时刻
        , note: '晚间灯光秀值得一看。', tags: ['世界遗产', '莫卧儿建筑', '国家象征'],
        worldEvents: [
          { flag: '🇫🇷', city: '巴黎', event: '路易十四即将亲政，凡尔赛宫的构想正在萌芽' },
          { flag: '🇯🇵', city: '京都', event: '德川幕府初期，日本实行锁国政策已15年' }
        ]
      ,
        tips: [
  {
    category: 'ticket',
    text: '外国人 ₹600 是印度人 ₹50 的 12 倍；是印度所有 ASI 景点的通用差价逻辑' // ✓ 锚点：数字 ₹600/₹50/12 倍 + 只有去过才知道
  },
  {
    category: 'timing',
    text: '09:30 开门第一波 + 16:30 前最后 1 小时是两个凉爽窗口；正午 12:00-15:00 太阳下 45℃ 城墙无遮阴' // ✓ 锚点：具体时间 09:30/16:30/12:00-15:00 + 数字 45℃
  },
  {
    category: 'walking',
    text: '北侧 Lahori Gate 是主入口 + 分队窗口（印人 / 外人分开）；穿过 Chhatta Chowk 月光市集到 Diwan-i-Am 公众殿全程 400 米' // ✓ 锚点：具体名字 Lahori Gate / Chhatta Chowk / Diwan-i-Am + 数字 400 米
  },
  {
    category: 'photo',
    text: 'Diwan-i-Khas 私人殿有“世界若有天堂，当即此处”刻文 + 孔雀御座遗址；最佳机位站在北廊柱下向南逆光拍雕花立面' // ✓ 锚点：具体名字 Diwan-i-Khas + 具体方向北廊向南 + 只有去过才知道
  },
  {
    category: 'walking',
    text: '红堡步行 5 分钟到贾玛清真寺（世界第二大清真寺）+ 步行 10 分钟到月光集市（Chandni Chowk）吃 Paranthewali Gali 煎饼街' // ✓ 锚点：具体名字贾玛清真寺 / Chandni Chowk / Paranthewali Gali + 数字 5/10 分钟
  },
  {
    category: 'cold',
    text: '凉季（11-2 月）早晚 8-12℃ + 雾霾 AQI 300+，口罩 + 眼药水是必备；夏季 45℃ 以上进城墙地板烫脚' // ✓ 锚点：具体时间 11-2 月 + 数字 8-12℃ / AQI 300/45℃
  }
]
      },
      { name: '顾特卜塔', era: '德里苏丹·1199年', yearNum: 1199, wiki: 'Qutub Minar', gradient: 'linear-gradient(135deg, #4A2A0A 0%, #8B5A2A 50%, #2A1A00 100%)', desc: '高72.5米，是世界上最高的砖砌宣礼塔。五层结构融合了印度教和伊斯兰建筑风格。', hours: '07:00—17:00', ticket: {
  price: '印度人 ₹40；外国人 ₹600',
  channels: [
    {
      name: '官方 ASI · asi.payumoney.com',
      url: 'https://asi.payumoney.com/',
      note: '与红堡同一系统；现场扫码入闸'
    },
    {
      name: 'Delhi Metro · Qutub Minar 站',
      url: 'https://www.delhimetrorail.com/',
      note: '黄线 Qutub Minar 站 2 公里，₹30 Tuk-Tuk 3 分钟到景区，是最方便的公共交通组合'
    }
  ],
  bookingWindow: {
    peak:     '凉季（11-2 月）：当天现场通常有票；周末早上 09:00 前人少',
    shoulder: '平季：当天可买'
  },
  timingTip: '从德里市区地铁直达 + 景区内 13 世纪铁柱不生锈的冶金奇迹 + 72.5 米宣礼塔本身是德里最适合独立拜访的单点景区；建议下午 15:00 后光线暖，3 小时足够'
} // ✋ Dev 上线前核对：票价 / 铁柱是否仍允许近距离观看
        , note: '周围的铁柱1600年不锈蚀，至今是冶金学之谜。', tags: ['世界遗产', '德里苏丹国', '宣礼塔'] ,
        tips: [
  {
    category: 'ticket',
    text: '外国人 ₹600（约 ¥56）与红堡同价；ASI 通行逻辑' // ✓ 锚点：数字 ₹600 / ¥56
  },
  {
    category: 'timing',
    text: '15:00-17:00 下午光线暖柔最佳，塔身 72.5 米金沙岩逆光最美；正午烈日下砂岩过曝' // ✓ 锚点：具体时间 15:00-17:00 + 数字 72.5 米
  },
  {
    category: 'walking',
    text: '黄线地铁 Qutub Minar 站出 + Tuk-Tuk ₹30 到景区大门 3 分钟；与胡马雍陵同属南德里，一日两点合理' // ✓ 锚点：具体名字黄线 / Tuk-Tuk + 数字 ₹30 / 3 分钟
  },
  {
    category: 'photo',
    text: '塔西北角 50 米处是看五层不同风格石雕细节的最佳位置；拍全塔需退到东南角 100 米外仰拍' // ✓ 锚点：具体方向西北角 / 东南角 + 数字 50 米 / 100 米
  },
  {
    category: 'walking',
    text: '景区内 1600 年铁柱 Iron Pillar 不生锈的冶金之谜，柱身现有护栏但仍可近距离 1 米观察表面' // ✓ 锚点：具体名字 Iron Pillar + 数字 1600 年 / 1 米 + 只有去过才知道
  }
]
      },
      { name: '胡马雍陵', era: '莫卧儿·1570年', yearNum: 1570, wiki: "Humayun's Tomb", gradient: 'linear-gradient(135deg, #2A1A1A 0%, #6B4A3A 50%, #1A0D0D 100%)', desc: '莫卧儿建筑的先驱之作，对称的波斯式花园陵墓直接启发了泰姬陵的设计。', hours: '日出—日落', ticket: {
  price: '印度人 ₹35；外国人 ₹600',
  channels: [
    {
      name: '官方 ASI · asi.payumoney.com',
      url: 'https://asi.payumoney.com/',
      note: '与红堡 / 顾特卜塔同系统'
    }
  ],
  bookingWindow: '凉季当天买票；周日下午花园婚纱 / 家庭写真多，想安静选工作日',
  timingTip: '日落前 1 小时（冬 17:00 / 夏 19:00）波斯式花园 + 陵墓红砂岩被金光打亮是德里最宁静时段；是泰姬陵的先驱，想对比先看胡马雍陵'
} // ✋ Dev 上线前核对：票价 / 日落时间
        , note: '日落时分光线最美。', tags: ['世界遗产', '莫卧儿建筑', '泰姬陵先驱'] ,
        tips: [
  {
    category: 'ticket',
    text: '外国人 ₹600（同红堡价）；印度人 ₹35，差 17 倍' // ✓ 锚点：数字 ₹600/₹35/17 倍 + 只有去过才知道
  },
  {
    category: 'timing',
    text: '日落前 1 小时（冬 17:00 / 夏 19:00）是金光时段；波斯花园对称水道此刻反射穹顶最美' // ✓ 锚点：具体时间 17:00/19:00 + 数字 1 小时
  },
  {
    category: 'walking',
    text: 'Delhi Metro · JLN Stadium 站出 + Tuk-Tuk ₹40 十分钟；与尼扎姆丁陵（苏非派圣地）相邻 300 米' // ✓ 锚点：具体名字 JLN Stadium / 尼扎姆丁 + 数字 ₹40 / 300 米
  },
  {
    category: 'photo',
    text: '最佳机位在陵墓正南花园水道尽头向北拍，水面倒影 + 金砂岩穹顶 + 几何花园一张图收齐' // ✓ 锚点：具体方向正南向北 + 只有去过才知道
  }
]
      },
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
      { year: '公元前586年', event: '巴比伦毁城', desc: '尼布甲尼撒二世摧毁第一圣殿，犹太人被掳至巴比伦。', worldContext: '中国春秋中期，孔子 19 年后出生；印度佛陀出生前 30 年；波斯居鲁士大帝 47 年后征服巴比伦，犹太人得归回' },
      { year: '公元前19年', event: '希律王重建圣殿', desc: '大希律王扩建第二圣殿，西墙即是当年圣殿山的挡土墙遗迹。', worldContext: '中国西汉成帝河平二年；罗马屋大维刚登基 8 年，帝国和平刚开始；耶稣 23 年后诞生' },
      { year: '公元70年', event: '罗马军队摧毁圣殿', desc: '提图斯攻陷耶路撒冷，第二圣殿被焚毁，犹太人大流散开始。', worldContext: '东汉明帝永平十三年，佛教传入中国；罗马科洛塞姆正在修建，10 年后落成' },
      { year: '691年', event: '圆顶清真寺建成', desc: '倭马亚王朝在圣殿山上建造金色穹顶，成为伊斯兰圣地。' },
      { year: '1099年', event: '十字军攻陷耶路撒冷', desc: '第一次十字军东征攻占圣城，建立耶路撒冷王国。', worldContext: '中国北宋哲宗元符二年，西夏建立已 61 年；日本平安时代末期，武家文化萌芽；宋江 / 苏轼同时代' },
    ],
    landmarks: [
      { name: '西墙（哭墙）', era: '前19年', yearNum: -19, wiki: 'Western Wall', gradient: 'linear-gradient(135deg, #4A3A2A 0%, #8B7A5A 50%, #2A1A0A 100%)', desc: '第二圣殿仅存的遗迹，犹太教最神圣的祈祷场所。信徒将祈祷纸条塞入墙缝已有数百年传统。', hours: '24小时开放', ticket: {
  price: '免费 · 24 小时开放',
  channels: [
    {
      name: '官方 Western Wall Heritage Foundation',
      url: 'https://english.thekotel.org/', // ✋ Dev 核对
      note: '圣殿山隧道（Western Wall Tunnels）需网上预约 $30，走到西墙地下段 + 希律王时期原石墙'
    },
    {
      name: '安息日规则',
      url: null,
      note: '周五日落至周六日落（约 19:00-19:00）禁止拍照 / 手机 / 开车；不是关闭而是“数字禁区”'
    }
  ],
  bookingWindow: {
    peak:     '犹太节日（逾越节 / 赎罪日 / 住棚节）：广场人山人海，想近墙祈祷必须凌晨 04:00-05:00 到',
    shoulder: '平日（周日-四）：任何时段可进；周五中午前安息日准备最热闹',
    offpeak:  '安息日（周五日落 - 周六日落）：不能拍照但仪式最隆重，可参与但保持静默'
  },
  timingTip: '日落后 20-30 分钟广场灯光打亮 + 夜间祈祷人群汇聚是最震撼时刻；男女祈祷区分开——男区北侧、女区南侧，隔离板高 1.5 米'
} // ✋ Dev 上线前核对：thekotel.org 隧道预约 / 安息日规则
        , note: '安息日（周五日落至周六日落）有特殊祈祷仪式。', tags: ['犹太教圣地', '第二圣殿', '祈祷之地'],
        worldEvents: [
          { flag: '🇨🇳', city: '长安', event: '西汉武帝时期，张骞已开通丝绸之路，东西文明首次对话' },
          { flag: '🇮🇹', city: '罗马', event: '奥古斯都凯撒正在缔造罗马和平，帝国进入黄金时代' }
        ]
      ,
        tips: [
  {
    category: 'ticket',
    text: '西墙本身完全免费 + 24 小时；圣殿山隧道 $30 是西墙地下 488 米段，看希律王时期 500 吨单块石头，必须预约' // ✓ 锚点：数字 $30/488 米/500 吨/24 小时
  },
  {
    category: 'dress',
    text: '男性进祈祷区必须戴 Kippa 小帽（入口免费借）；女性头发不必覆盖但穿过膝裙 / 上衣不暴露肩膀' // ✓ 锚点：具体名字 Kippa + 只有去过才知道
  },
  {
    category: 'timing',
    text: '周五日落至周六日落是安息日，禁止拍照 / 手机拍摄 / 开车，但现场仪式最隆重，可全程参与静默' // ✓ 锚点：具体时间周五周六日落 + 只有去过才知道
  },
  {
    category: 'photo',
    text: '最经典机位不在广场内而在西南角“Kotel 广场入口”高台上，能俯拍整个墙 + 祈祷人群 + 圆顶清真寺金色穹顶同框' // ✓ 锚点：具体方向西南角 + 只有去过才知道
  },
  {
    category: 'walking',
    text: '从雅法门 Jaffa Gate 穿过基督徒 / 犹太人 / 穆斯林 / 亚美尼亚四区老城，步行 15 分钟到西墙；老城石板路滑穿防滑底鞋' // ✓ 锚点：具体名字 Jaffa Gate + 数字 15 分钟 / 4 区
  },
  {
    category: 'ticket',
    text: '塞祈祷纸条是数百年传统；如果是自己塞必须卷紧推进石缝最深处——每月清扫后纸条全部埋在橄榄山墓地' // ✓ 锚点：具体名字橄榄山墓地 + 只有去过才知道 + 具体时间每月
  }
]
      },
      { name: '圆顶清真寺', era: '倭马亚·691年', yearNum: 691, wiki: 'Dome of the Rock', gradient: 'linear-gradient(135deg, #1A3A1A 0%, #C9963A 50%, #0D2A0D 100%)', desc: '伊斯兰世界最标志性的建筑之一，金色穹顶下是先知穆罕默德登霄之处的圣石。', hours: '非穆斯林参观时间有限', ticket: {
  price: '免费 · 非穆斯林仅可外观 + 圣殿山广场（圆顶内部禁止进入）',
  channels: [
    {
      name: '以色列警察圣殿山通道',
      url: 'https://www.gov.il/', // ✋ Dev 核对政府官网
      note: '非穆斯林仅可从 Mughrabi Gate（摩格拉比门）进入，需经以色列安检 + 约旦 Waqf 宗教检查'
    },
    {
      name: '时段规则',
      url: null,
      note: '非穆斯林开放时段：周日-周四 07:30-10:30 + 13:30-14:30（夏季）；周五 / 周六 + 穆斯林节日全面关闭非穆入口'
    }
  ],
  bookingWindow: {
    peak:     '斋月 / 古尔邦节 / 犹太节日 / 安全事件期：可能临时关闭非穆斯林入口，出发前必须查新闻',
    shoulder: '平日：07:30 开放前 30 分钟到摩格拉比门排队，9:00 后队伍可长 1-2 小时'
  },
  timingTip: '07:30-10:30 第一时段是唯一“有光拍金穹顶”的窗口；13:30 午后时段光线偏硬；圆顶内部绝对禁止非穆斯林进入，金色穹顶和八边形立面只能外观'
} // ✋ Dev 上线前核对：开放时段是否有变更 / Mughrabi Gate 入口状态
        , note: '非穆斯林仅可在特定时段从穆格拉比门进入。', tags: ['伊斯兰圣地', '圣殿山', '金色穹顶'] ,
        tips: [
  {
    category: 'ticket',
    text: '完全免费；非穆斯林仅周日至周四两个时段（07:30-10:30 / 13:30-14:30），其他时段禁入' // ✓ 锚点：具体时间 07:30-10:30/13:30-14:30
  },
  {
    category: 'dress',
    text: '女性必须遮盖头发 + 肩膀 + 膝盖（比其他清真寺更严）；非礼拜服装在 Mughrabi Gate 被拦回' // ✓ 锚点：具体名字 Mughrabi Gate + 只有去过才知道
  },
  {
    category: 'timing',
    text: '07:30 摩格拉比门开放前 30 分钟到才能排到前三批；9:00 后安检队伍 1-2 小时' // ✓ 锚点：具体时间 07:30/9:00 + 数字 30 分钟 / 1-2 小时
  },
  {
    category: 'photo',
    text: '圆顶东侧正立面拍金穹顶最对称（八角形四面都是正立面，但东侧上午光线最好）；拍照需避开正在礼拜的穆斯林' // ✓ 锚点：具体方向东侧 + 数字 8 角 + 只有去过才知道
  },
  {
    category: 'walking',
    text: 'Mughrabi Gate 在西墙广场南端 + 木栈桥入口；除此之外所有圣殿山 10 个门都只对穆斯林开放' // ✓ 锚点：具体方向南端 + 数字 10 个门 + 具体名字
  }
]
      },
      { name: '圣墓教堂', era: '拜占庭·335年', yearNum: 335, wiki: 'Church of the Holy Sepulchre', gradient: 'linear-gradient(135deg, #2A1A2A 0%, #6A4A6A 50%, #1A0D1A 100%)', desc: '基督教最神圣的教堂，相传建在耶稣受难和复活之处。六个基督教派系共同管理这座教堂。', hours: '04:00—19:00（夏季延至21:00）', ticket: {
  price: '免费',
  channels: [
    {
      name: '官方（Custodia Terræ Sanctæ 方济各会管理）',
      url: 'https://www.custodia.org/', // ✋ Dev 核对
      note: '教堂由六个基督教派系共管——希腊正教 / 罗马天主教 / 亚美尼亚使徒 / 科普特 / 埃塞俄比亚 / 叙利亚；“不可移动的梯子”300 年来没人敢动'
    },
    {
      name: 'Christian Information Centre',
      url: 'https://christianinfo.org/',
      note: 'Jaffa Gate 附近提供每日弥撒时刻表 + 导览'
    }
  ],
  bookingWindow: {
    peak:     '复活节 / 圣诞（东西派双节）：圣墓前排队 2-3 小时；方济各会圣火礼仪需 3-4 小时前到',
    shoulder: '平日：04:00 开门第一波 + 16:00 午后弥撒后两个空窗期'
  },
  timingTip: '04:00-06:00 清晨是全日最空时段，可近距离进入圣墓穴（Edicule）并触摸复活石；10:00-14:00 团客高峰期排队 60+ 分钟；日落后 19:00 前最后半小时游客稀疏'
} // ✋ Dev 上线前核对：custodia.org 弥撒时刻 / 复活节礼仪规则
        , note: '教堂内的“不可移动的梯子”已在同一位置超过300年。', tags: ['基督教圣地', '耶稣圣迹', '宗教共管'] ,
        tips: [
  {
    category: 'ticket',
    text: '完全免费；凌晨 04:00 开门是基督教堂中最早的，进圣墓穴无需排队' // ✓ 锚点：具体时间 04:00 + 只有去过才知道
  },
  {
    category: 'dress',
    text: '肩膀 + 膝盖必须遮盖；各派管区服装规则略异，希腊正教段最严格' // ✓ 锚点：只有去过才知道 + 具体名字希腊正教
  },
  {
    category: 'timing',
    text: '04:00-06:00 + 16:00-18:00 两个安静窗口；10:00-14:00 团客排队 60+ 分钟' // ✓ 锚点：具体时间 04:00-06:00/16:00-18:00/10:00-14:00 + 数字 60+ 分钟
  },
  {
    category: 'walking',
    text: '入口隐蔽——在基督徒区狭窄巷子里，没有任何标识；从 Christian Quarter Road 走到 Dabbagha 交叉口就是入口前庭' // ✓ 锚点：具体名字 Christian Quarter Road / Dabbagha + 只有去过才知道
  },
  {
    category: 'photo',
    text: '进门右转直上“加略山”（耶稣受难地）是二楼小礼拜堂，希腊正教祭坛下可触摸原岩；拍照需先征求看守神父同意' // ✓ 锚点：具体方向右转二楼 + 具体名字加略山 + 只有去过才知道
  }
]
      },
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
      { year: '802年', event: '高棉帝国建立', desc: '阇耶跋摩二世统一高棉，在荔枝山宣布建国。', worldContext: '中国唐德宗贞元十八年，安史之乱后 40 年；欧洲查理曼加冕 2 年后；阿拉伯阿拔斯王朝鼎盛' },
      { year: '约1150年', event: '吴哥窟建成', desc: '苏耶跋摩二世建造了这座献给毗湿奴的石构神庙，是世界最大宗教建筑。', worldContext: '中国南宋绍兴二十年；巴黎圣母院奠基前 13 年；第二次十字军东征刚结束；玛雅后古典期' },
      { year: '1181年', event: '阇耶跋摩七世即位', desc: '建造了吴哥通王城和巴戎寺，帝国达到领土最大范围。' },
      { year: '1431年', event: '暹罗军队攻陷吴哥', desc: '高棉帝国南迁金边，吴哥遗址逐渐被热带丛林吞没。', worldContext: '明朝宣德六年，郑和六下西洋；圣女贞德被处决同年；奥斯曼帝国征服前 22 年' },
      { year: '1860年', event: '法国探险家重新发现', desc: '亨利·穆奥的记录引起轰动，吴哥窟重新进入世界视野。' },
    ],
    landmarks: [
      { name: '吴哥窟主殿', era: '高棉·约1150年', yearNum: 1150, wiki: 'Angkor Wat', gradient: 'linear-gradient(135deg, #2A3A1A 0%, #6B8A4A 50%, #1A2A0A 100%)', desc: '世界最大的宗教建筑，护城河宽190米，中央塔高65米。日出时五座塔尖的倒影是柬埔寨国旗的灵感来源。', hours: '05:00—17:30', ticket: {
  price: 'Angkor Pass：1 日 $37 / 3 日 $62（10 日内用）/ 7 日 $72（1 个月内用）',
  channels: [
    {
      name: '官方 angkorenterprise.gov.kh',
      url: 'https://angkorenterprise.gov.kh/', // ✋ Dev 核对
      note: '唯一官方售票；现场 Siem Reap 售票中心拍照 + 实时出票'
    },
    {
      name: '网上预订',
      url: 'https://www.angkorenterprise.gov.kh/',
      note: '出发前网上购票避免清晨排队 1 小时'
    },
    {
      name: '12 岁以下儿童免费',
      url: null,
      note: '需现场出示护照证明年龄'
    }
  ],
  bookingWindow: {
    peak:     '旺季（11-2 月干季凉爽）：日出观景 04:30 前必须到西门外倒影池，05:30 后前排 200 人',
    shoulder: '过渡季（3-5 月干季炎热）：5 月地表 40℃，日出后游客减少 50%',
    offpeak:  '雨季（6-10 月）：午后暴雨但护城河倒影最美；团客减少 70%'
  },
  timingTip: '日出在西门外北侧倒影池拍最经典（国旗构图）；04:30 到占位，05:45 日出 6:15 金光打亮五塔顶是绝对黄金时刻；进寺内部选日出后 07:00-09:00 避开团客'
} // ✋ Dev 上线前核对：angkorenterprise.gov.kh / 通票现行价
        , note: '日出观赏点在西面倒影池，需凌晨4:30出发。', tags: ['世界遗产', '印度教建筑', '高棉帝国'],
        worldEvents: [
          { flag: '🇫🇷', city: '法国', event: '十字军东征时代，哥特式大教堂正在欧洲各地兴起' },
          { flag: '🇨🇳', city: '中国', event: '南宋时期，中国是当时世界上技术最先进的文明' }
        ]
      ,
        tips: [
  {
    category: 'ticket',
    text: '1 日 $37 / 3 日 $62 / 7 日 $72；3 日票 10 天内任选 3 天用，最适合认真看吴哥的节奏' // ✓ 锚点：数字 $37/$62/$72/10 天/3 天
  },
  {
    category: 'timing',
    text: '日出 04:30 前到北侧倒影池；05:45 日出后 6:15 金光打亮五塔顶是 30 分钟绝对黄金时刻' // ✓ 锚点：具体时间 04:30/05:45/6:15 + 数字 30 分钟 + 具体方向北侧
  },
  {
    category: 'walking',
    text: '主殿本身建筑群 1.5 公里护城河 + 中央高塔 65 米 + 3 层回廊；内部游览需 3 小时，第三层顶楼每批限 100 人 + 排队 20 分钟' // ✓ 锚点：数字 1.5 公里/65 米/3 层/3 小时/100 人/20 分钟
  },
  {
    category: 'photo',
    text: '最经典不是正门而是西门外倒影池北侧 50 米——五塔倒影完整 + 前景有莲花；正门正对会被西门塔楼遮挡第三塔' // ✓ 锚点：具体方向西门外北侧 50 米 + 数字 50 米 + 只有去过才知道
  },
  {
    category: 'dress',
    text: '进中央圣塔必须盖膝 + 盖肩 + 脱鞋；可现场租沙笼 $2 + 墨镜绑脚' // ✓ 锚点：数字 $2 + 只有去过才知道
  },
  {
    category: 'cold',
    text: '5-9 月雨季午后 30 分钟暴雨但比起烈日凉爽；11-2 月凉季清晨 15℃ 日出时寒冷，带外套' // ✓ 锚点：具体时间 5-9 月/11-2 月 + 数字 30 分钟 / 15℃
  }
]
      },
      { name: '巴戎寺', era: '高棉·1200年', yearNum: 1200, wiki: 'Bayon', gradient: 'linear-gradient(135deg, #3A3A1A 0%, #8B8A5A 50%, #1A1A0A 100%)', desc: '216张巨大的石面微笑俯瞰四方，被称为“高棉的微笑”。浮雕墙面描绘了高棉人的日常生活。', hours: '07:30—17:30', ticket: {
  price: '含在 Angkor Pass 内，单独不售票',
  channels: [
    {
      name: 'Angkor Pass 通用',
      url: 'https://angkorenterprise.gov.kh/',
      note: '与吴哥寺 3.5 公里车程，位于吴哥通王城（Angkor Thom）正中心'
    },
    {
      name: 'Tuk-Tuk 小圈一日游',
      url: null,
      note: '从暹粒市区租 Tuk-Tuk 吴哥联票5-20 一天，含巴戎寺 + 塔布隆 + 胜利门；英文司机加 $5'
    }
  ],
  bookingWindow: {
    peak:     '旺季（11-2 月）：上午 07:30-09:00 光线柔软人少是黄金时段；10:00 后吴哥寺团客涌入',
    shoulder: '淡季：任何时段人都不算多'
  },
  timingTip: '216 张巨型石面微笑需要正面光照才能看清——上午 07:30-09:00 东侧光线 + 下午 15:00-17:00 西侧光线两个窗口；正午光线过顶面部全黑'
} // ✋ Dev 上线前核对：angkorenterprise.gov.kh / Tuk-Tuk 现行价
        , note: '上午光线最适合拍摄微笑面容。', tags: ['高棉的微笑', '佛教建筑', '石雕艺术'] ,
        tips: [
  {
    category: 'ticket',
    text: '含在 Angkor Pass 内；不单独售票；进吴哥通王城南门已完成查票' // ✓ 锚点：具体名字吴哥通王城南门 + 只有去过才知道
  },
  {
    category: 'timing',
    text: '石面微笑拍摄黄金两窗：上午 07:30-09:00 东侧 / 下午 15:00-17:00 西侧；正午光线过顶全部脸面背光' // ✓ 锚点：具体时间 07:30-09:00/15:00-17:00 + 具体方向东侧西侧
  },
  {
    category: 'walking',
    text: '巴戎寺三层高塔群 + 216 张石面微笑散布 54 座石塔；第二层南回廊浮雕墙是 11 世纪高棉日常生活最详细的石画' // ✓ 锚点：数字 216/54/11 世纪 + 具体方向南回廊
  },
  {
    category: 'photo',
    text: '最著名“鼻尖合影”机位在第二层西南角石塔脚下，与石面 1 米距离；游客排队 10 分钟轮流拍' // ✓ 锚点：具体方向西南角 + 数字 1 米 / 10 分钟
  },
  {
    category: 'walking',
    text: '从巴戎寺出向北 800 米到象台 + 麻风王台 + 空中宫殿，是吴哥通王城核心三景；步行串游 1 小时' // ✓ 锚点：具体方向北 800 米 + 具体名字象台 + 数字 800 米 / 1 小时
  }
]
      },
      { name: '塔布隆寺', era: '高棉·1186年', yearNum: 1186, wiki: 'Ta Prohm', gradient: 'linear-gradient(135deg, #1A2A1A 0%, #4A6A3A 50%, #0D1A0D 100%)', desc: '被巨大的绞杀榕树根盘绕的寺庙，保留了法国考古学家发现时的原貌。因《古墓丽影》电影取景而闻名。', hours: '07:30—17:30', ticket: {
  price: '含在 Angkor Pass 内',
  channels: [
    {
      name: 'Angkor Pass 通用',
      url: 'https://angkorenterprise.gov.kh/',
      note: '东门是著名“树抱塔”入口；西门较新但游客少'
    }
  ],
  bookingWindow: '旺季团客 10:00-14:00 集中；早上 07:30 开门冲东门可安静拍 1 小时',
  timingTip: '东门“树抱塔”是《古墓丽影》取景地，著名绞杀榕根盘绕石门；上午 07:30-09:00 柔光最适合拍藤蔓阴影；午后强光下藤蔓高反差很难出片'
} // ✋ Dev 上线前核对：Ta Prohm 东门是否仍然开放 / 修缮状态
        , note: '最著名的“树抱塔”景观在东门入口。', tags: ['丛林寺庙', '电影取景地', '自然与人文'] ,
        tips: [
  {
    category: 'ticket',
    text: '含在 Angkor Pass 内；早上 07:30 开门冲东门可安静拍 1 小时' // ✓ 锚点：具体时间 07:30 + 数字 1 小时
  },
  {
    category: 'timing',
    text: '上午 07:30-09:00 柔光最适合拍藤蔓阴影；团客 10:00-14:00 密集，下午 15:00 后再回来人流减半' // ✓ 锚点：具体时间 07:30-09:00/10:00-14:00/15:00 + 数字一半
  },
  {
    category: 'photo',
    text: '《古墓丽影》真正机位在东门第二进庭院——安吉丽娜·朱莉跳下的那棵绞杀榕，石门右侧 3 米处' // ✓ 锚点：具体方向东门第二进 / 右侧 3 米 + 只有去过才知道
  },
  {
    category: 'walking',
    text: '从东门进 + 西门出是游览黄金路线，1 小时全看完；反向（西→东）会逆流错过最佳“树抱塔”机位' // ✓ 锚点：具体方向东门西门 + 数字 1 小时 + 只有去过才知道
  }
]
      },
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
    overview: '马拉喀什是摩洛哥的文化之都，因建筑的赭红色而被称为“红城”。作为跨撒哈拉贸易的北端终点，这座城市将非洲、阿拉伯和柏柏尔文化融为一体。',
    timeline: [
      { year: '1062年', event: '穆拉比特王朝建城', desc: '柏柏尔人的穆拉比特王朝将马拉喀什定为帝国首都。', worldContext: '中国北宋嘉祐七年，王安石即将变法；诺曼征服英格兰前 4 年；塞尔柱帝国鼎盛' },
      { year: '1147年', event: '穆瓦希德王朝', desc: '新王朝重建城市，库图比亚清真寺在此时期建造。', worldContext: '中国南宋绍兴十七年；第二次十字军东征刚结束；吴哥窟建成前后；日本平安时代末期' },
      { year: '1269年', event: '马林王朝', desc: '首都迁至非斯，但马拉喀什仍是重要的贸易城市。' },
      { year: '1557年', event: '萨阿德王朝复兴', desc: '马拉喀什重新成为首都，迎来文化和建筑的黄金时代。', worldContext: '明朝嘉靖三十六年；奥斯曼苏莱曼大帝末期；英国玛丽一世统治；哥白尼《天体运行论》已出版 14 年' },
      { year: '1912年', event: '法国保护领', desc: '摩洛哥成为法国保护国，新城（Ville Nouvelle）开始建设。' },
      { year: '1956年', event: '摩洛哥独立', desc: '马拉喀什转型为旅游城市，老城麦地那列入世界遗产。' },
    ],
    landmarks: [
      { name: '德吉玛·艾尔法纳广场', era: '11世纪起', yearNum: 1050, wiki: 'Jemaa el-Fnaa', gradient: 'linear-gradient(135deg, #4A2A0A 0%, #C9763A 50%, #2A1A00 100%)', desc: '北非最繁忙的广场，白天是市集，入夜后变成露天大排档和表演场。联合国教科文组织将其列为“人类口头和非物质文化遗产”。', hours: '全天（夜晚最热闹）', ticket: {
  price: '完全免费；夜市摊位消费另计',
  channels: [
    {
      name: 'UNESCO 非遗介绍页',
      url: 'https://ich.unesco.org/', // ✋ Dev 核对 UNESCO Jemaa el-Fnaa 子页
      note: '广场 2001 年列为“人类口头和非物质文化遗产”；说书人 / 耍蛇人 / 炭烤摊延续 1000 年'
    },
    {
      name: '官方 visitmorocco.com',
      url: 'https://www.visitmorocco.com/',
      note: '摩洛哥旅游局官方 + 提供斋月期间特殊规则'
    }
  ],
  bookingWindow: {
    peak:     '旺季（3-5 月 / 9-11 月 / 圣诞假期）：夜市 20:00-23:00 人山人海，想坐屋顶咖啡馆需提前订',
    shoulder: '夏季（6-8 月）：白天 45℃+ 广场空荡，夜晚才复活',
    offpeak:  '斋月期间：白天摊位全关闭；日落 Iftar 时刻后整个广场瞬间爆满，体验独特'
  },
  timingTip: '白天是普通市集 + 耍蛇人 + 说书人（要给 MAD 20 小费）；真正精华在日落后 20 分钟——100 余个炭烤摊 / 蜗牛汤 / 手鼓乐队 / 占星师同时开张，是马拉喀什的魔幻时刻'
} // ✋ Dev 上线前核对：UNESCO 页 / 斋月时段
        , note: '傍晚时分找一家屋顶咖啡馆俯瞰广场最佳。', tags: ['非物质文化遗产', '夜市', '柏柏尔文化'],
        worldEvents: [
          { flag: '🇨🇳', city: '中国', event: '北宋仁宗时期，中国城市文化繁荣，《清明上河图》时代即将到来' },
          { flag: '🇬🇧', city: '英格兰', event: '诺曼征服前夕，盎格鲁-撒克逊英格兰即将迎来历史转折' }
        ]
      ,
        tips: [
  {
    category: 'ticket',
    text: '广场完全免费；但被耍蛇人 / 猴子表演 / 纹身师主动拍照后会索要 MAD 20-50 小费，拒绝很难收场' // ✓ 锚点：数字 MAD 20-50 + 只有去过才知道
  },
  {
    category: 'timing',
    text: '日落后 20 分钟广场从空荡切换为 100 余摊位同时开张，是“城市切换开关”最震撼时刻' // ✓ 锚点：具体时间日落 + 20 分钟 + 数字 100 余
  },
  {
    category: 'photo',
    text: '最佳俯瞰机位是广场西侧 Café Glacier（屋顶餐厅），MAD 30 茶水费坐一下午 + 拍到整个广场 + 库图比亚宣礼塔同框' // ✓ 锚点：具体名字 Café Glacier + 具体方向西侧 + 数字 MAD 30
  },
  {
    category: 'walking',
    text: '广场是老城 Medina 的绝对心脏——向北进 souk（市集）迷宫、向西 300 米到库图比亚、向南 500 米到巴希亚宫，是马拉喀什一日游的起点' // ✓ 锚点：具体方向北西南 + 数字 300 米/500 米 + 具体名字 Medina
  },
  {
    category: 'ticket',
    text: '夜市炭烤摊固定价（Tajine MAD 60 / 羊排 MAD 80 / 鲜榨橙汁 MAD 10-15），但必须先看明码标价的菜单，口头报价常被翻倍' // ✓ 锚点：数字 MAD 60/80/10-15 + 只有去过才知道
  },
  {
    category: 'cold',
    text: '夏季白天 45℃+ 傍晚降至 28-32℃ 体感最好；冬季 12-2 月夜间 8-12℃ 广场凉风需外套' // ✓ 锚点：数字 45℃/28-32℃/8-12℃ + 具体时间夏季冬季
  }
]
      },
      { name: '库图比亚清真寺', era: '穆瓦希德·1147年', yearNum: 1147, wiki: 'Koutoubia Mosque', gradient: 'linear-gradient(135deg, #3A2A0A 0%, #8B6A3A 50%, #1A0D00 100%)', desc: '马拉喀什最高的建筑（77米），其宣礼塔是塞维利亚吉拉尔达塔和拉巴特哈桑塔的设计原型。', hours: '非穆斯林不可进入', ticket: {
  price: '免费 · 非穆斯林不可进入内部（摩洛哥全国清真寺均如此）；仅可外观 + 花园',
  channels: [
    {
      name: '花园区域全天开放',
      url: null,
      note: '宣礼塔高 77 米 + 花园玫瑰与橘子树 + 落日金光打塔身'
    },
    {
      name: 'visitmorocco.com 官方介绍',
      url: 'https://www.visitmorocco.com/',
      note: '提供历史背景 + 塔身砂岩不同颜色条纹的建造时期信息'
    }
  ],
  bookingWindow: {
    peak:     '旺季：日落前 30 分钟最多摄影师聚集；花园灯光 20:00 点亮',
    shoulder: '平季：任何时段可去，花园常空'
  },
  timingTip: '日落前 30 分钟塔身金光 + 日落后 30 分钟花园绿灯打亮塔是两个摄影窗口；白天的塔身普通，夜间的塔反而更“马拉喀什”'
} // ✋ Dev 上线前核对：花园开放时间 / 是否仍可免费进入
        , note: '花园是免费散步的好去处，日落时分光线最美。', tags: ['穆瓦希德建筑', '宣礼塔', '城市地标'] ,
        tips: [
  {
    category: 'ticket',
    text: '完全免费但非穆斯林不可进内部；花园可自由散步 + 拍照' // ✓ 锚点：只有去过才知道
  },
  {
    category: 'timing',
    text: '日落前 30 分钟金光 + 日落后 30 分钟绿灯点亮，白天的塔反而普通' // ✓ 锚点：具体时间日落前后 30 分钟 + 只有去过才知道
  },
  {
    category: 'photo',
    text: '花园南侧 100 米斜角拍塔最能体现 77 米高度 + 四个塔顶小球的层级；正对塔正北角度塔身扁平' // ✓ 锚点：具体方向南侧 100 米/正北 + 数字 77 米 / 100 米 / 4 个
  },
  {
    category: 'walking',
    text: '广场西 300 米步行 5 分钟；花园内绕塔一圈 500 米 + 橘子树沿路 + 旁边王宫花园相通' // ✓ 锚点：具体方向西 + 数字 300 米/500 米/5 分钟
  },
  {
    category: 'dress',
    text: '花园内虽然免费但宗教场所氛围，穿长裤 / 过膝裙更得体；情侣避免高调亲密行为' // ✓ 锚点：只有去过才知道
  }
]
      },
      { name: '巴希亚宫', era: '19世纪·1867年', yearNum: 1867, wiki: 'Bahia Palace', gradient: 'linear-gradient(135deg, #1A2A2A 0%, #4A6A6A 50%, #0D1A1A 100%)', desc: '摩洛哥伊斯兰建筑的精华，150个房间装饰着精美的雪松木雕、马赛克瓷砖和大理石地板。', hours: '09:00—17:00', ticket: {
  price: 'MAD 70（约 ¥50）；每日 09:00-17:00 开放',
  channels: [
    {
      name: '现场窗口',
      url: 'https://www.visitmorocco.com/',
      note: '无网上预售系统；现场排队 10-20 分钟；人少时随到随买'
    }
  ],
  bookingWindow: '全年当天买票；斋月时段缩短至 10:00-16:00',
  timingTip: '09:00 开门第一小时人最少可独占每一间房拍照；150 间房全看完需 1.5 小时；中庭的雪松木雕顶棚 + 马赛克瓷砖 + 橘子树庭院是马拉喀什皇家工艺巅峰'
} // ✋ Dev 上线前核对：MAD 70 现行价 / 斋月时段
        , note: '庭院中的橘子树和喷泉营造出一片绿洲。', tags: ['伊斯兰建筑', '马赛克艺术', '摩洛哥宫殿'] ,
        tips: [
  {
    category: 'ticket',
    text: 'MAD 70（约 ¥50）；无网上预售，现场排队 10-20 分钟' // ✓ 锚点：数字 MAD 70/¥50/10-20 分钟
  },
  {
    category: 'timing',
    text: '09:00 开门第一小时人最少；150 间房全看需 1.5 小时；正午后旅游团涌入中庭无法拍空镜' // ✓ 锚点：具体时间 09:00 + 数字 150/1.5 小时
  },
  {
    category: 'walking',
    text: '广场向南 500 米 Medina 内；路线标识极少容易迷路，跟 Google Maps 步行导航走 “Rue Riad Zitoun el Jdid”' // ✓ 锚点：具体名字 Rue Riad Zitoun el Jdid + 数字 500 米 + 只有去过才知道
  },
  {
    category: 'photo',
    text: '主接见厅（Grand Riad）雪松木雕顶棚 + 地面马赛克是全馆最美空间；站在东南角望向西北窗光最柔和' // ✓ 锚点：具体名字 Grand Riad + 具体方向东南望西北
  }
]
      },
    ]
  },
  {
    id: 'mexico-city', name: '墨西哥城', nameEn: 'Mexico City',
    country: '墨西哥', countryFlag: '🇲🇽', continent: 'americas',
    themes: ['imperial', 'ancient'],
    coords: "19°25'N 99°07'W",
    wiki: 'Metropolitan Cathedral, Mexico City',
    heroGradient: 'linear-gradient(160deg, #1a2a1a 0%, #0d1a0d 60%, #2a1a0a 100%)',
    hook: '湖中帝都，从特诺奇提特兰到现代巨城',
    heroQuote: '1519年，科尔特斯看到特诺奇提特兰时说：“我们不知道这是真实的还是梦境”',
    tagline: '👑 阿兹特克之心 · 700年',
    overview: '墨西哥城建在一座被摧毁的帝国之上。阿兹特克人曾在湖心建造特诺奇提特兰——当时世界上最大的城市之一。西班牙征服者将其夷为平地，在废墟上建起殖民城市。',
    timeline: [
      { year: '1325年', event: '特诺奇提特兰建城', desc: '阿兹特克人按照神谕，在看到鹰叼蛇站在仙人掌上的地方建城——一座湖中之岛。', worldContext: '中国元泰定二年，元朝进入末期；马可·波罗去世 1 年后；奥斯曼土耳其刚建立 26 年；欧洲文艺复兴初现' },
      { year: '1428年', event: '三方联盟建立', desc: '阿兹特克帝国崛起，特诺奇提特兰成为中美洲最强大的城市。' },
      { year: '1519年', event: '科尔特斯抵达', desc: '西班牙征服者科尔特斯率军进入特诺奇提特兰，被城市的壮观震惊。' },
      { year: '1521年', event: '阿兹特克帝国灭亡', desc: '经过75天围城战，特诺奇提特兰陷落，西班牙人在废墟上建造殖民城市。', worldContext: '明朝正德十六年，嘉靖刚即位；麦哲伦船队去年刚抵菲律宾；马丁路德 4 年前钉上九十五条论纲；奥斯曼苏莱曼大帝登基 1 年' },
      { year: '1821年', event: '墨西哥独立', desc: '经过11年独立战争，墨西哥脱离西班牙统治。' },
      { year: '1978年', event: '大神庙遗址发现', desc: '电力工人偶然发现阿兹特克大神庙遗址，就在国家宫殿旁边。', worldContext: '中国改革开放前夕十一届三中全会年末召开；美国卡特任内；两伊战争前 2 年；香港地铁开通；苹果 Apple II 已推出一年' },
    ],
    landmarks: [
      { name: '大神庙遗址', era: '阿兹特克·1325年', yearNum: 1325, wiki: 'Coyolxauhqui Stone', gradient: 'linear-gradient(135deg, #4A2A0A 0%, #8B5A2A 50%, #2A1A00 100%)', desc: '阿兹特克帝国最重要的宗教建筑遗址，1978年偶然出土。金字塔式神庙曾高60米，供奉雨神和战神。', hours: '09:00—17:00，周一闭馆', ticket: {
  price: 'MXN 90（约 ¥35）；含遗址 + 博物馆；周一闭馆',
  channels: [
    {
      name: '官方 INAH · templomayor.inah.gob.mx',
      url: 'https://www.templomayor.inah.gob.mx/', // ✋ Dev 核对
      note: '现场售票 + 博物馆入场；周日墨西哥公民免费'
    },
    {
      name: 'Zócalo 宪法广场步行',
      url: null,
      note: '与宪法广场 / 国家宫殿同一街区；地铁 Zócalo 站出即到，不需打车'
    }
  ],
  bookingWindow: {
    peak:     '旱季旺季（12-3 月）：排队 20-30 分钟；每月首周六博物馆夜间开放 + 现场音乐',
    shoulder: '其他月份：随到随买，当天无排队'
  },
  timingTip: '09:00 开门冲第一波；遗址室外段无遮阴，正午 12-14 点烈日曝晒；博物馆室内 3 层空调凉爽，建议正午回博物馆看科约尔沙赫基石盘（Coyolxauhqui，1978 年电工挖到的 3.25 米石盘，本身改变了墨西哥考古学）'
} // ✋ Dev 上线前核对：templomayor.inah.gob.mx / MXN 90 现行价
        , note: '博物馆内的科约尔沙赫基石盘不可错过。', tags: ['考古遗址', '阿兹特克', '前哥伦布时代'],
        worldEvents: [
          { flag: '🇮🇹', city: '佛罗伦萨', event: '文艺复兴初期，但丁刚完成《神曲》，乔托正在革新绘画' },
          { flag: '🇨🇳', city: '中国', event: '元朝末年，红巾军起义即将爆发，朱元璋即将登场' }
        ]
      ,
        tips: [
  {
    category: 'ticket',
    text: 'MXN 90（约 ¥35）与特奥蒂瓦坎同价；墨西哥公民周日免费但外国人无此福利' // ✓ 锚点：数字 MXN 90/¥35 + 只有去过才知道
  },
  {
    category: 'timing',
    text: '09:00 开门第一波最佳；周一闭馆；室外段 12-14 点烈日正午，需轮替室内博物馆 3 层避暑' // ✓ 锚点：具体时间 09:00/12-14 点 + 数字 3 层
  },
  {
    category: 'walking',
    text: '地铁 2 号线 Zócalo 站出 + 步行 200 米；与宪法广场 + 国家宫殿 + 大都会教堂构成殖民中心三点，一下午连看合理' // ✓ 锚点：具体名字 Zócalo 站 / 宪法广场 + 数字 200 米
  },
  {
    category: 'photo',
    text: '博物馆 2 楼科约尔沙赫基石盘是全馆最震撼展品——3.25 米肢解月亮女神浮雕，1978 年电力工人挖地铁线偶然发现' // ✓ 锚点：数字 3.25 米/1978 年 + 具体方向 2 楼 + 只有去过才知道
  },
  {
    category: 'walking',
    text: '遗址面积不大（100 米 × 80 米）但双塔基座分别供雨神 Tlaloc + 战神 Huitzilopochtli，北南双塔地层由外向内扩建 7 层' // ✓ 锚点：数字 100 米/80 米/7 层 + 具体名字 Tlaloc / Huitzilopochtli
  }
]
      },
      { name: '国家宫殿', era: '殖民·1563年', yearNum: 1563, wiki: 'National Palace (Mexico)', gradient: 'linear-gradient(135deg, #3A1A1A 0%, #6B3A3A 50%, #1A0D0D 100%)', desc: '建在阿兹特克皇帝蒙特祖玛宫殿的遗址上，内有迭戈·里维拉绘制的巨幅壁画《墨西哥历史》。', hours: '09:00—17:00', ticket: {
  price: '免费 · 需出示护照 + 安检；周一闭馆',
  channels: [
    {
      name: '官方 gob.mx/palacionacional',
      url: 'https://www.gob.mx/', // ✋ Dev 核对政府总站
      note: '从 Zócalo 广场东侧正门安检入场；不收票但严格检查护照'
    }
  ],
  bookingWindow: '平日 10:00-17:00；2025 年以来部分时段政务使用时临时关闭外国参观，到场前一天查官网',
  timingTip: '主目标是二楼楼梯间迭戈·里维拉 1929-1935 年绘制的 450 平方米巨幅壁画《墨西哥历史》——从阿兹特克神话到独立革命 1000 年浓缩；10:30 后日光从北窗打亮壁画右侧是最佳观赏窗口'
} // ✋ Dev 上线前核对：开放状态 / 是否仍需护照
        , note: '里维拉壁画在二楼楼梯间，是了解墨西哥历史的最佳视觉叙事。', tags: ['殖民建筑', '壁画艺术', '政治中心'] ,
        tips: [
  {
    category: 'ticket',
    text: '完全免费但必须出示护照原件（驾照 / 身份证复印件都不行）；安检严于机场' // ✓ 锚点：只有去过才知道
  },
  {
    category: 'timing',
    text: '10:30 后北窗日光打亮二楼楼梯间里维拉壁画右侧；正午 12:00 后壁画左侧逆光' // ✓ 锚点：具体时间 10:30/12:00 + 具体方向北窗 + 只有去过才知道
  },
  {
    category: 'photo',
    text: '450 平方米壁画一张照片拍不完整——选楼梯间对角“第三级台阶”处站位能一镜收纳整面北墙' // ✓ 锚点：数字 450 平方米/第三级 + 具体方向对角北墙
  },
  {
    category: 'walking',
    text: 'Zócalo 宪法广场东侧正对；从地铁 Zócalo 站出步行 100 米；与大神庙遗址相邻 200 米，是一条动线上的连游' // ✓ 锚点：具体名字 Zócalo + 数字 100 米/200 米
  }
]
      },
      { name: '特奥蒂瓦坎', era: '前200年—650年', yearNum: 200, wiki: 'Teotihuacan', gradient: 'linear-gradient(135deg, #4A3A1A 0%, #C9963A 50%, #2A1A00 100%)', desc: '距墨西哥城50公里的古代大都会遗址，太阳金字塔高65米，是美洲第三大金字塔。鼎盛时期人口达20万。', hours: '09:00—17:00', ticket: {
  price: 'MXN 90（约 ¥35）；含太阳金字塔 + 月亮金字塔 + 亡灵大道 + 羽蛇神庙全区',
  channels: [
    {
      name: '官方 INAH（国家人类学历史研究所）',
      url: 'https://www.inah.gob.mx/', // ✋ Dev 核对
      note: '现场售票；无网上预售；扫码入闸'
    },
    {
      name: 'Mexico City Metro + Autobuses del Norte',
      url: 'https://www.metro.cdmx.gob.mx/',
      note: '黄线 Autobuses del Norte 站出门换 Teotihuacán 专线大巴 MXN 56 + 1 小时车程，最便宜路线'
    },
    {
      name: 'GetYourGuide 一日游',
      url: 'https://www.getyourguide.com/',
      note: '$55-80 含酒店接送 + 中英文导游 + 龙舌兰酒庄，省却自行交通的折腾'
    }
  ],
  bookingWindow: {
    peak:     '旱季（11-4 月）+ 春分（3 月 21 日）：春分当天全墨穿白衣上太阳金字塔顶接阳气，10 万人入场，必须 06:00 到',
    shoulder: '平季（5-6、10 月）：周末人较多，周一至周四清晨最佳',
    offpeak:  '雨季（7-9 月）：午后雷阵雨 + 金字塔禁止攀登（避雷），但雨后天空最干净'
  },
  timingTip: '09:00 开门第一小时冲太阳金字塔 248 级石阶登顶（高 65 米 + 海拔 2300 米，气喘）；10:30 后团客涌入；太阳金字塔和月亮金字塔 2021 年起禁止攀登登顶——Dev 核对最新攀登政策'
} // ✋ Dev 上线前核对：INAH 域名 / MXN 90 现行价 / 金字塔攀登政策
        , note: '从月亮金字塔顶部俯瞰“亡灵大道”视野最佳。', tags: ['世界遗产', '前哥伦布文明', '金字塔'] ,
        tips: [
  {
    category: 'ticket',
    text: 'MXN 90（约 ¥35）是外国人与墨西哥人同价；周日墨西哥公民免费但外国人不享此福利' // ✓ 锚点：数字 MXN 90/¥35 + 只有去过才知道
  },
  {
    category: 'timing',
    text: '09:00 开门后第一小时冲太阳金字塔；2021 年起禁止攀登登顶，只能爬到平台观景' // ✓ 锚点：具体时间 09:00 + 数字 2021 年 + 只有去过才知道
  },
  {
    category: 'walking',
    text: '从南入口“亡灵大道”起点走到月亮金字塔 2.5 公里直线；太阳金字塔在中段东侧；全区走完 3-4 小时需要大量饮水 + 遮阳帽' // ✓ 锚点：数字 2.5 公里/3-4 小时 + 具体方向东侧
  },
  {
    category: 'photo',
    text: '最经典机位在月亮金字塔顶部向南拍亡灵大道 + 太阳金字塔 + 远处群山同框；登月亮塔比太阳塔容易（只有 130 级）' // ✓ 锚点：具体方向南 + 数字 130 级 + 只有去过才知道
  },
  {
    category: 'cold',
    text: '海拔 2300 米紫外线是海平面 2 倍；即便 4 月体感 20℃ 也 30 分钟晒伤；戴宽檐帽 + SPF 50+ 防晒必备' // ✓ 锚点：数字 2300 米/2 倍/30 分钟/SPF 50 + 只有去过才知道
  },
  {
    category: 'walking',
    text: '墨西哥城市区 50 公里车程 + 单程 1 小时；早上 07:30 从市区出发避开堵车；归程 17:00 后堵车 2 小时起' // ✓ 锚点：数字 50 公里/1 小时/2 小时 + 具体时间 07:30/17:00
  }
]
      },
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
      { year: '约1438年', event: '印加帝国崛起', desc: '帕查库提征服周边部落，建立南美洲最大的帝国。', worldContext: '中国明正统三年，土木堡之变前 11 年；奥斯曼围攻君士坦丁堡前 15 年；欧洲古腾堡即将发明活字印刷；日本应仁之乱前 29 年' },
      { year: '约1450年', event: '马丘比丘建造', desc: '帕查库提下令在乌鲁班巴河谷上方的山脊建造皇家庄园。', worldContext: '中国明景泰元年；古腾堡活字印刷刚发明；君士坦丁堡陷落前 3 年；佛罗伦萨美第奇家族柯西莫执政鼎盛' },
      { year: '1533年', event: '西班牙征服印加', desc: '皮萨罗俘获末代印加皇帝，帝国覆灭。马丘比丘因位置偏远未被发现。', worldContext: '中国明嘉靖十二年；英王亨利八世刚与罗马教廷决裂；奥斯曼苏莱曼大帝鼎盛期；日本战国时代' },
      { year: '1911年', event: '海勒姆·宾厄姆发现遗址', desc: '耶鲁大学教授在当地农民引导下重新发现了这座“失落之城”。', worldContext: '中国辛亥革命爆发、清帝退位前夕；泰坦尼克号下水前 1 年；阿蒙森刚到达南极点；相对论发表 6 年' },
      { year: '1983年', event: '列入世界遗产', desc: '联合国教科文组织将马丘比丘列为世界文化与自然双重遗产。' },
    ],
    landmarks: [
      { name: '马丘比丘遗址', era: '印加·约1450年', yearNum: 1450, wiki: 'Machu Picchu', gradient: 'linear-gradient(135deg, #0A2A1A 0%, #3A6A4A 50%, #051A0D 100%)', desc: '海拔 2430 米山脊上的印加皇家庄园，1450 年由帕查库提下令建造，1911 年被海勒姆·宾厄姆重新发现。整片遗址约 550 米长，含 200 多座石构建筑，精密的梯田 + 水道系统是印加工程的巅峰。', hours: '06:00—17:00', ticket: {
  price: '外籍成人环线 1（经典）S/152 ≈ ¥300；环线 2 S/152；加购 Huayna Picchu 山 S/200',
  channels: [
    { name: '官方秘鲁文化部',  url: 'https://www.machupicchu.gob.pe/',   note: '唯一官方售票，英西双语，信用卡可付' },
    { name: 'Ticket Machu Picchu', url: 'https://www.ticketmachupicchu.com/', note: '官方授权代理，服务费 ~$5，界面更友好' }
  ],
  bookingWindow: {
    peak:     '旺季 6-8 月 / 圣诞-新年：至少提前 1-2 个月（Huayna Picchu 加购 3 个月）',
    shoulder: '4-5 月 / 9-10 月：2-4 周',
    offpeak:  '雨季 1-3 月：1-2 周（2 月官方关闭维护，无票）'
  },
  timingTip: '选 6:00 首批入场（雾气缭绕的神性视角）或 14:00 后（团客离场、光线金色）；2 月雨季封闭，1 月 / 3 月泥泞需防水鞋'
}, note: '需单独在秘鲁文化部官方平台订票，现按 Circuito 1-5 环线分区，2 月官方维护关闭。', tags: ['世界遗产', '印加帝国', '云中之城'],
        tips: [
          { category: 'ticket',  text: '2024 年起强制按 5 条环线（Circuito 1-5）分区售票——经典“全景环线 2”S/152 最值，含上城 + 下城 + 守望小屋俯瞰机位' },
          { category: 'timing',  text: '06:00 首批入场看晨雾穿峰金光，09:00-11:00 团客高峰，14:00 后二波人流减半 + 斜阳暖色；11:30-13:30 正午光线最硬' },
          { category: 'walking', text: '环线单向通行 + 不可回头——进门前先决定“守望小屋”俯瞰机位走哪条（Circuito 1 上城 / Circuito 2 全景）；走错只能出遗址重买票' },
          { category: 'photo',   text: '最经典明信片机位在守望小屋平台（Guardhouse）东南角——主城 + 华纳比丘尖峰 + 梯田三层构图全齐；Circuito 1 和 2 才经过，3/4/5 不经过' },
          { category: 'cold',    text: '海拔 2430 米紫外线是海平面 2 倍；旱季（5-9 月）白天 22℃ 但晨间 3-8℃；雨季（11-3 月）午后 30 分钟暴雨概率 70% + 2 月官方维护封闭' },
          { category: 'ticket',  text: '进入遗址必须由持证向导陪同（2019 年起规定），散客拼团 S/50（约 ¥100）2 小时讲解，入口 Ticket Check 外有持牌导游候场' }
        ]
      },
      { name: '太阳神殿', era: '印加·约1450年', yearNum: 1450, wiki: 'Torreon (Machu Picchu)', gradient: 'linear-gradient(135deg, #1A3A1A 0%, #4A8A4A 50%, #0D2A0D 100%)', desc: '半圆形建筑精确对准冬至日出方向，展现了印加人卓越的天文学知识。石墙贴合之紧密，无法插入一张纸。', hours: '06:00—17:00', ticket: {
  price: '含在马丘比丘主门票内（Circuito 2 路线可近距离观看）',
  channels: [
    {
      name: '主遗址 Circuito 2',
      url: 'https://www.tuboleto.cultura.pe/',
      note: '必须选 Circuito 2 路线才经过 Torreón 塔；Circuito 1/3 不经过'
    }
  ],
  bookingWindow: '与主门票同步预订；无独立配额',
  timingTip: '半圆形塔身对准冬至日出方向（每年 6 月 21 日南半球冬至），阳光精确穿窗打在祭石上；非冬至日 06:00-07:00 低角度朝阳仍能看到石墙金光；Torreón 下方是印加皇陵 Royal Mausoleum 岩洞'
} // ✋ Dev 上线前核对：Circuito 路线是否仍经过 Torreón
        , note: '冬至日（6月21日）阳光会精确穿过特定窗口。', tags: ['印加天文', '石砌技术', '太阳崇拜'],
        worldEvents: [
          { flag: '🇩🇪', city: '美因茨', event: '古腾堡刚刚发明活字印刷术，即将改变人类文明进程' },
          { flag: '🇹🇷', city: '伊斯坦布尔', event: '君士坦丁堡刚刚陷落（1453年），奥斯曼帝国开始新纪元' }
        ]
      ,
        tips: [
  {
    category: 'ticket',
    text: '含在主门票内但必须选 Circuito 2 路线才经过；Circuito 1 走高台景观 + Circuito 3 走下城，都不到 Torreón' // ✓ 锚点：具体名字 Circuito 2 + 只有去过才知道
  },
  {
    category: 'timing',
    text: '冬至 6 月 21 日阳光精确穿东窗照射祭石是全年高光时刻；其他日期 06:00-07:00 低角度朝阳仍金光' // ✓ 锚点：具体时间 6 月 21 日 / 06:00-07:00 + 具体方向东窗
  },
  {
    category: 'photo',
    text: '石墙“无缝贴合”到无法插入一张纸是印加石工巅峰；最佳拍摄角度在塔外东北侧 5 米低位仰拍，能同时收到半圆弧 + 两个圣窗' // ✓ 锚点：具体方向东北侧 + 数字 5 米/2 个 + 只有去过才知道
  },
  {
    category: 'walking',
    text: '位于主遗址西区中段；从主入口沿 Circuito 2 走 400 米即达；塔下方洞穴是“皇陵”需弯腰进入（非所有团均经过）' // ✓ 锚点：具体方向西区 + 数字 400 米
  }
]
      },
      { name: '拴日石（Intihuatana）', era: '印加·约1450年', yearNum: 1450, wiki: 'Intihuatana', gradient: 'linear-gradient(135deg, #2A3A2A 0%, #6B8A5A 50%, #1A2A1A 100%)', desc: '这块精心雕刻的花岗岩被认为是印加人的天文仪器，在春分和秋分时太阳正好悬在石柱正上方，不投下任何影子。', hours: '随马丘比丘开放', ticket: {
  price: '含在马丘比丘主门票内（Circuito 1 + Circuito 2 均经过）',
  channels: [
    {
      name: '主遗址主门票',
      url: 'https://www.tuboleto.cultura.pe/',
      note: '本体已被围栏隔离，游客不可触摸；只能外围 2 米观察'
    }
  ],
  bookingWindow: '与主门票同步预订',
  timingTip: '春分 3 月 21 日 / 秋分 9 月 23 日正午太阳正悬石柱正上方 + 石柱不投任何影子——是印加“拴住太阳”的原始含义；非春秋分日正午 12:00 影子最短，仍能观察印加天文学意图'
} // ✋ Dev 上线前核对：围栏距离 / 是否仍完全禁止触摸
        , note: '曾在拍摄啤酒广告时被损坏，现已围栏保护。', tags: ['天文仪器', '印加圣石', '春秋分标记'] ,
        tips: [
  {
    category: 'ticket',
    text: '含主门票；2000 年啤酒广告拍摄时被起重机砸缺一角，之后全面围栏隔离，游客只能 2 米外观察' // ✓ 锚点：数字 2000 年/2 米 + 只有去过才知道
  },
  {
    category: 'timing',
    text: '春分 3 月 21 日 / 秋分 9 月 23 日正午 12:00 石柱无影是年度两次天文高光；非春秋分仍可在 12:00 看短影' // ✓ 锚点：具体时间 3 月 21 日 / 9 月 23 日 / 12:00 + 数字 2 次
  },
  {
    category: 'photo',
    text: '位于主遗址最高点金字塔式台阶顶部；最佳机位是北侧 3 米低位仰拍——石柱 + 背景 Huayna Picchu 峰同框' // ✓ 锚点：具体方向北侧 + 数字 3 米 + 具体名字 Huayna Picchu
  },
  {
    category: 'walking',
    text: '从主入口沿 Circuito 1 走 600 米 + 爬 50 级台阶到顶；是遗址海拔最高的观景点（2460 米），天气清时可俯瞰整个马丘比丘城' // ✓ 锚点：数字 600 米/50 级/2460 米
  }
]
      },
      { name: '华纳比丘', era: '印加时期', yearNum: 1450, wiki: 'Huayna Picchu', gradient: 'linear-gradient(135deg, #0A2A0A 0%, #3A6A3A 50%, #0D1A0D 100%)', desc: '马丘比丘背后的尖峰，攀登需约1小时。山顶可俯瞰整个马丘比丘遗址和乌鲁班巴河谷的壮观景色。', hours: '07:00—08:00 入场（两批次）', ticket: {
  price: '需额外购票（主门票之外）；主门票 + 华纳比丘组合约 USD 75（约 ¥540）',
  channels: [
    {
      name: '官方 tuboleto.cultura.pe',
      url: 'https://www.tuboleto.cultura.pe/', // ✋ Dev 核对秘鲁文化部售票平台
      note: '唯一官方售票；需选 Circuito 3 + Huayna Picchu 路线；每日限 400 人分 2 批次入场'
    },
    {
      name: 'GetYourGuide / Viator 代理',
      url: 'https://www.getyourguide.com/',
      note: '旺季（5-9 月）官方售罄时可买代理票，但溢价 $20-50'
    }
  ],
  bookingWindow: {
    peak:     '旱季（5-9 月）：必须提前 2-3 个月抢；6-8 月整周 400 配额提前 90 天开售瞬空',
    shoulder: '过渡季（4、10 月）：提前 30 天',
    offpeak:  '雨季（11-3 月）：提前 7-14 天有余票；但山路湿滑 + 云雾遮视野，摔伤率最高'
  },
  timingTip: '两个入场批次 07:00-08:00 / 10:00-11:00；选第一批看日出云海穿透峰顶最震撼；登顶全程 1 小时 + 海拔 2720 米（高马丘比丘 300 米）+ 铁链石阶一段极陡；恐高 / 膝盖不好放弃'
} // ✋ Dev 上线前核对：tuboleto.cultura.pe 现行价 / 400 人限额 / 开放批次时间
        , note: '路径陡峭且窄，恐高者慎行。必须提前数月预约。', tags: ['徒步登山', '全景视角', '限额参观'] ,
        tips: [
  {
    category: 'ticket',
    text: '每日限 400 人分 2 批（07:00 / 10:00），旱季 5-9 月提前 90 天瞬空；旺季订不上可买代理票 +$30 溢价' // ✓ 锚点：数字 400/90 天/$30 + 具体时间 07:00/10:00
  },
  {
    category: 'timing',
    text: '第一批 07:00 入场可拍晨雾穿透峰顶黄金光；10:00 第二批抵达时云雾常散尽失去“云中城”效果' // ✓ 锚点：具体时间 07:00/10:00 + 只有去过才知道
  },
  {
    category: 'walking',
    text: '登顶单程 1 小时 1500 石阶 + 海拔净升 300 米；“死亡台阶”段 60 度石壁需铁链辅助 + 湿滑；往返全程 2.5-3 小时' // ✓ 锚点：数字 1 小时/1500 级/300 米/60 度/2.5-3 小时 + 只有去过才知道
  },
  {
    category: 'photo',
    text: '山顶最经典机位在“月亮神庙”分岔口向北拍俯瞰——整个马丘比丘遗址 + 乌鲁班巴河 U 形河谷 + 远方 Salkantay 雪山同框' // ✓ 锚点：具体方向北 + 具体名字月亮神庙 / Salkantay + 只有去过才知道
  },
  {
    category: 'cold',
    text: '早上 07:00 气温 8-12℃ + 雨季可降至 3℃；登顶流汗后山顶风大体感 5℃；分层穿衣 + 防雨外套必备' // ✓ 锚点：具体时间 07:00 + 数字 8-12℃/3℃/5℃
  }
]
      },
    ]
  },
];
